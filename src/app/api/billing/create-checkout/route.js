"use server";

import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Request body:", body);

    if (!body.successUrl) {
      return NextResponse.json(
        { error: "Missing success URL" },
        { status: 400 }
      );
    }

    const session = await auth();
    console.log("Auth session:", session);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "You must be logged in to make a purchase" },
        { status: 401 }
      );
    }

    // Configuración
    const storeId = process.env.LS_STORE_ID;
    const variantId = process.env.LS_VARIANT_ID;
    
    console.log("Store ID:", storeId);
    console.log("Variant ID:", variantId);
    console.log("User ID:", session.user.id);
    console.log("User Email:", session.user.email);

    // Obtener URL base para el webhook
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://selectivi.cat";
    const webhookUrl = `${baseUrl}/api/webhooks/lemonsqueezy`;
    
    // Volvemos a la construcción original que funcionaba
    const checkoutUrl = `https://selectivi.cat/checkout/${variantId}?store=${storeId}&email=${encodeURIComponent(session.user.email)}&custom[user_id]=${encodeURIComponent(session.user.id)}&success_url=${encodeURIComponent(body.successUrl)}&cancel_url=${encodeURIComponent(body.cancelUrl)}&webhook_url=${encodeURIComponent(webhookUrl)}&test=true`;
    
    console.log("Generated checkout URL:", checkoutUrl);

    const checkoutLS = { data: { attributes: { url: checkoutUrl } } };

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