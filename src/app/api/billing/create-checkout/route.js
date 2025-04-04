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
    
    // Construir la URL con mejor formato para los parámetros
    let checkoutUrl = new URL("https://selectivi.cat/checkout");
    
    // Añadir parámetros principales
    checkoutUrl.searchParams.append("variant", variantId);
    checkoutUrl.searchParams.append("store", storeId);
    checkoutUrl.searchParams.append("email", session.user.email);
    checkoutUrl.searchParams.append("custom[user_id]", session.user.id);
    checkoutUrl.searchParams.append("success_url", body.successUrl);
    checkoutUrl.searchParams.append("cancel_url", body.cancelUrl);
    checkoutUrl.searchParams.append("webhook_url", webhookUrl);
    checkoutUrl.searchParams.append("test", "true");
    
    // Convertir a string
    const checkoutUrlString = checkoutUrl.toString();
    
    console.log("Generated checkout URL:", checkoutUrlString);

    const checkoutLS = { data: { attributes: { url: checkoutUrlString } } };

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