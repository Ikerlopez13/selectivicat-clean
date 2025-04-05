import { NextResponse } from "next/server";
import { headers } from "next/headers";
import crypto from "crypto";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export async function POST(req) {
  try {
    const webhookSecret = process.env.LS_SIGNING_SECRET;
    if (!webhookSecret) {
      console.error("Webhook secret is not configured");
      return NextResponse.json(
        { error: "Webhook secret is not configured" },
        { status: 500 }
      );
    }

    const body = await req.text();
    
    // 1. Verify the webhook signature
    const hmac = crypto.createHmac('sha256', webhookSecret);
    const digest = Buffer.from(hmac.update(body).digest("hex"), "utf8");
    const signature = Buffer.from(headers().get("x-signature"), "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    // 2. Parse the webhook payload
    const payload = JSON.parse(body);
    const eventName = payload.meta.event_name;

    console.log("Webhook received:", eventName);
    console.log("Payload:", JSON.stringify(payload, null, 2));

    if (eventName === "order_created") {
      // ✅ Grant access to the product
      await connectMongo();

      const userId = payload.meta.custom_data.user_id;
      console.log("Updating user:", userId);

      const user = await User.findById(userId);
      if (!user) {
        console.error("User not found:", userId);
        return NextResponse.json(
          { error: "User not found" },
          { status: 404 }
        );
      }

      user.hasPremiumStatus = true;
      user.customerId = payload.data.attributes.customer_id;
      
      await user.save();
      console.log("User updated successfully:", userId);
    }

    return NextResponse.json({ success: true });

  } catch (e) {
    console.error("LemonSqueezy webhook error:", e?.message);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}