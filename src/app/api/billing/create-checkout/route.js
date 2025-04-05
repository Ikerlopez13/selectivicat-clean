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
    const storeId = process.env.LS_STORE_ID || "167330";
    const variantId = process.env.LS_VARIANT_ID || "748103";
    const apiKey = process.env.LS_API_KEY;
    
    console.log("Store ID:", storeId);
    console.log("Variant ID:", variantId);

    // Formato correcto con JSON:API
    const checkoutData = {
      data: {
        type: "checkouts",
        attributes: {
          test_mode: true,
          product_options: {
            name: "Plan Premium SelectiviCAT",
            description: "Accés complet a tots els exàmens i recursos de SelectiviCAT",
            redirect_url: "https://selectivi.cat/premium/success",
            receipt_thank_you_note: "Gràcies per la teva compra! Ja tens accés premium."
          },
          checkout_data: {
            email: session.user.email,
            custom: {
              user_id: session.user.id
            }
          }
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: storeId
            }
          },
          variant: {
            data: {
              type: "variants",
              id: variantId
            }
          }
        }
      }
    };

    console.log("Checkout data:", JSON.stringify(checkoutData, null, 2));

    // Hacer la solicitud a la API con formato JSON:API
    const response = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      },
      body: JSON.stringify(checkoutData)
    });

    const checkoutResponse = await response.json();
    console.log("LemonSqueezy Response:", JSON.stringify(checkoutResponse, null, 2));

    if (!response.ok) {
      console.error("Error response from LemonSqueezy:", checkoutResponse);
      return NextResponse.json(
        { error: checkoutResponse.errors?.[0]?.detail || "Error creating checkout" },
        { status: response.status }
      );
    }

    // Obtener la URL de checkout de la respuesta
    if (!checkoutResponse?.data?.attributes?.url) {
      console.error("No checkout URL in response:", checkoutResponse);
      throw new Error("No checkout URL returned");
    }

    return NextResponse.json({ url: checkoutResponse.data.attributes.url });

  } catch (e) {
    console.error("Error in checkout:", e);
    return NextResponse.json(
      { error: e?.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
} 