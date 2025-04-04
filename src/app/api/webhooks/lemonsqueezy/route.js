"use server";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/User";
import fs from 'fs';
import path from 'path';

// Función para guardar log en archivo
function saveLog(data) {
  try {
    const logDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    const logFile = path.join(logDir, 'webhook-logs.txt');
    const logData = `${new Date().toISOString()}: ${JSON.stringify(data, null, 2)}\n\n`;
    
    fs.appendFileSync(logFile, logData);
    console.log("Log guardado en:", logFile);
  } catch (err) {
    console.error("Error guardando log:", err);
  }
}

// Conexión a la base de datos si no está conectada
async function connectToDatabase() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}

export async function POST(req) {
  try {
    console.log("⭐ Webhook de LemonSqueezy recibido ⭐");
    
    // Guardar todos los headers para depuración
    const headers = {};
    req.headers.forEach((value, key) => {
      headers[key] = value;
    });
    console.log("Headers recibidos:", headers);
    
    await connectToDatabase();

    // Verificar la firma del webhook (en producción)
    // const signature = req.headers.get('x-signature');
    // if (!validateSignature(signature, await req.text(), process.env.LS_WEBHOOK_SECRET)) {
    //   return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    // }

    // Obtener los datos del webhook
    const webhook = await req.json();
    console.log("LemonSqueezy Webhook Data:", JSON.stringify(webhook, null, 2));
    
    // Guardar el log completo para análisis posterior
    saveLog({
      timestamp: new Date(),
      headers: headers,
      body: webhook
    });

    // Verificar el tipo de evento (compra completada)
    if (webhook.meta && (webhook.meta.event_name === "order_created" || 
        webhook.meta.event_name === "subscription_created")) {
      
      console.log(`⭐ Evento detectado: ${webhook.meta.event_name}`);
      
      // Extraer datos relevantes
      const data = webhook.data;
      
      if (!data || !data.attributes) {
        console.error("❌ Datos inválidos en el webhook");
        return NextResponse.json({ error: "Invalid webhook data format" }, { status: 400 });
      }
      
      const customData = data.attributes.custom_data || {};
      const userId = customData.user_id;

      console.log("📊 Datos personalizados:", customData);
      console.log("👤 ID de usuario:", userId);

      if (!userId) {
        console.error("❌ User ID no encontrado en los datos del webhook");
        return NextResponse.json({ error: "User ID not found" }, { status: 400 });
      }

      // Actualizar el usuario en la base de datos
      console.log(`✏️ Actualizando usuario: ${userId} a premium`);
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { 
          hasPremiumStatus: true,
          premiumUpdatedAt: new Date()
        },
        { new: true }
      );

      if (!updatedUser) {
        console.error(`❌ Usuario no encontrado: ${userId}`);
        
        // Intenta buscar por email si está disponible
        const userEmail = data.attributes.user_email || customData.email;
        if (userEmail) {
          console.log(`🔍 Buscando por email alternativo: ${userEmail}`);
          const userByEmail = await User.findOne({ email: userEmail });
          
          if (userByEmail) {
            console.log(`✅ Usuario encontrado por email: ${userEmail}`);
            userByEmail.hasPremiumStatus = true;
            userByEmail.premiumUpdatedAt = new Date();
            await userByEmail.save();
            
            return NextResponse.json({ 
              success: true,
              message: "Usuario actualizado por email"
            });
          }
        }
        
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      console.log(`✅ Usuario ${userId} actualizado a premium correctamente`);
      return NextResponse.json({ 
        success: true,
        message: "Usuario actualizado a premium"
      });
    } else {
      console.log("⚠️ Evento no reconocido o sin datos meta", webhook);
    }

    // Si no es un evento que nos interese, devolvemos éxito igualmente
    return NextResponse.json({ 
      success: true,
      message: "Webhook recibido pero no procesado"
    });
    
  } catch (error) {
    console.error("❌ Error procesando webhook:", error);
    
    // Guardar el error en logs
    saveLog({
      timestamp: new Date(),
      error: error.message,
      stack: error.stack
    });
    
    return NextResponse.json(
      { error: error.message || "Error processing webhook" },
      { status: 500 }
    );
  }
} 