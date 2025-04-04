"use server";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/User";

// Conexión a la base de datos si no está conectada
async function connectToDatabase() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}

export async function POST(req) {
  try {
    await connectToDatabase();

    // Verificar la firma del webhook (en producción)
    // const signature = req.headers.get('x-signature');
    // if (!validateSignature(signature, await req.text(), process.env.LS_WEBHOOK_SECRET)) {
    //   return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    // }

    // Obtener los datos del webhook
    const webhook = await req.json();
    console.log("LemonSqueezy Webhook Data:", webhook);

    // Verificar el tipo de evento (compra completada)
    if (webhook.meta.event_name === "order_created" || 
        webhook.meta.event_name === "subscription_created") {
      
      // Extraer datos relevantes
      const data = webhook.data;
      const customData = data.attributes.custom_data || {};
      const userId = customData.user_id;

      if (!userId) {
        console.error("User ID not found in webhook data");
        return NextResponse.json({ error: "User ID not found" }, { status: 400 });
      }

      // Actualizar el usuario en la base de datos
      console.log(`Actualizando usuario: ${userId} a premium`);
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { 
          hasPremiumStatus: true,
          premiumUpdatedAt: new Date()
        },
        { new: true }
      );

      if (!updatedUser) {
        console.error(`Usuario no encontrado: ${userId}`);
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      console.log(`Usuario ${userId} actualizado a premium correctamente`);
      return NextResponse.json({ success: true });
    }

    // Si no es un evento que nos interese, devolvemos éxito igualmente
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error("Error procesando webhook:", error);
    return NextResponse.json(
      { error: error.message || "Error processing webhook" },
      { status: 500 }
    );
  }
} 