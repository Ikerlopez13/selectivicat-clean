import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { createCheckout } from '@lemonsqueezy/lemonsqueezy.js';

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.successUrl) {
      return NextResponse.json(
        { error: "Success URL is required" },
        { status: 400 }
      );
    }

    const session = await auth();
    console.log("Session:", session);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "You must be logged in to make a purchase" },
        { status: 401 }
      );
    }

    // Debug log para checkout params
    console.log("Creating checkout with:", {
      store: process.env.LS_STORE_ID,
      variant: process.env.LS_VARIANT_ID,
      email: session.user.email,
      successUrl: body.successUrl
    });

    // Crear el checkout usando la nueva estructura
    const checkoutLS = await createCheckout({
      store: process.env.LS_STORE_ID,
      variant: process.env.LS_VARIANT_ID,
      checkout: {
        email: session.user.email,
        custom: {
          user_id: session.user.email
        },
        success_url: body.successUrl,
        cancel_url: body.cancelUrl,
        dark: true,
        subscription: true
      }
    }, {
      apiKey: process.env.LS_API_KEY,
      headers: {
        'Authorization': `Bearer ${process.env.LS_API_KEY}`
      }
    });

    console.log("Checkout response:", checkoutLS);

    if (!checkoutLS?.data?.attributes?.url) {
      console.error("Invalid checkout response:", checkoutLS);
      throw new Error("Failed to create checkout session");
    }

    return NextResponse.json({ url: checkoutLS.data.attributes.url });

  } catch (e) {
    console.error("Error in checkout:", e);
    return NextResponse.json(
      { error: e?.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
} 