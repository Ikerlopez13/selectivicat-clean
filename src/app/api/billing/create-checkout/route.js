"use server";

import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Request body:", body);

    const session = await auth();
    console.log("Auth session:", session);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "You must be logged in to make a purchase" },
        { status: 401 }
      );
    }

    // Versión simple que funciona
    const checkoutData = {
      data: {
        type: "checkouts",
        relationships: {
          store: {
            data: {
              type: "stores",
              id: "167330"
            }
          },
          variant: {
            data: {
              type: "variants",
              id: "748103"
            }
          }
        },
        attributes: {
          custom_price: null
        }
      }
    };

    console.log("Checkout data:", JSON.stringify(checkoutData, null, 2));

    const response = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.LS_API_KEY}`,
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      },
      body: JSON.stringify(checkoutData)
    });

    const checkoutLS = await response.json();
    console.log("LemonSqueezy API Response:", JSON.stringify(checkoutLS, null, 2));

    if (!response.ok) {
      console.error("Full error response:", checkoutLS);
      throw new Error(JSON.stringify(checkoutLS.errors));
    }

    return NextResponse.json({ url: checkoutLS.data.attributes.url });

  } catch (error) {
    console.error("Error completo:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
} 