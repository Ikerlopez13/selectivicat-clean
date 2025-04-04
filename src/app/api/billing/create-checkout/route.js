<<<<<<< HEAD
"use server";

import { NextResponse } from "next/server";
import { auth } from "@/auth";
=======
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { createCheckout } from '@lemonsqueezy/lemonsqueezy.js';
>>>>>>> 221eabaeed4d981f03740c273b60795e7a7018ce

export async function POST(req) {
  try {
    const body = await req.json();
<<<<<<< HEAD
    console.log("Request body:", body);

    const session = await auth();
    console.log("Auth session:", session);
=======

    if (!body.successUrl) {
      return NextResponse.json(
        { error: "Success URL is required" },
        { status: 400 }
      );
    }

    const session = await auth();
    console.log("Session:", session);
>>>>>>> 221eabaeed4d981f03740c273b60795e7a7018ce

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "You must be logged in to make a purchase" },
        { status: 401 }
      );
    }

<<<<<<< HEAD
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
=======
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
>>>>>>> 221eabaeed4d981f03740c273b60795e7a7018ce
    }

    return NextResponse.json({ url: checkoutLS.data.attributes.url });

<<<<<<< HEAD
  } catch (error) {
    console.error("Error completo:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create checkout session" },
=======
  } catch (e) {
    console.error("Error in checkout:", e);
    return NextResponse.json(
      { error: e?.message || "Failed to create checkout session" },
>>>>>>> 221eabaeed4d981f03740c273b60795e7a7018ce
      { status: 500 }
    );
  }
} 