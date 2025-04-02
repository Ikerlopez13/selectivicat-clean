import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import Stripe from 'stripe';
import { User } from '@/models/User';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const PREMIUM_PRICE_ID = process.env.STRIPE_PREMIUM_PRICE_ID;

export async function POST(req) {
  try {
    const session = await auth();
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Create or retrieve Stripe customer
    let customerId = user.stripeCustomerId;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
        metadata: {
          userId: user._id.toString()
        }
      });
      customerId = customer.id;
      user.stripeCustomerId = customerId;
      await user.save();
    }

    // Create checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [
        {
          price: PREMIUM_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXTAUTH_URL}/premium?canceled=true`,
      metadata: {
        userId: user._id.toString()
      }
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

// Webhook para manejar eventos de Stripe
export async function PUT(req) {
  try {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature');

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }

    const session = event.data.object;

    if (event.type === 'checkout.session.completed') {
      // Actualizar usuario a premium
      const user = await User.findOne({
        stripeCustomerId: session.customer
      });

      if (user) {
        user.isPremium = true;
        user.stripeSubscriptionId = session.subscription;
        user.premiumExpiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 días
        await user.save();
      }
    }

    if (event.type === 'customer.subscription.deleted') {
      // Eliminar acceso premium
      const user = await User.findOne({
        stripeSubscriptionId: session.id
      });

      if (user) {
        user.isPremium = false;
        user.stripeSubscriptionId = null;
        user.premiumExpiresAt = null;
        await user.save();
      }
    }

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error('Webhook error:', error);
    return new NextResponse('Webhook error', { status: 500 });
  }
} 