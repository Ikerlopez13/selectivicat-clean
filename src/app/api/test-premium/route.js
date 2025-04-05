"use server";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/User";
import { auth } from "@/auth";

// Conexión a la base de datos si no está conectada
async function connectToDatabase() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}

export async function GET(req) {
  try {
    await connectToDatabase();
    
    // Obtener el usuario actual desde la sesión
    const session = await auth();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "No hay sesión de usuario activa" },
        { status: 401 }
      );
    }
    
    // Buscar el usuario por email
    const user = await User.findOne({ email: session.user.email });
    
    if (!user) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }
    
    // Actualizar a premium
    user.hasPremiumStatus = true;
    user.premiumUpdatedAt = new Date();
    await user.save();
    
    return NextResponse.json({
      success: true,
      message: "¡Usuario actualizado a premium!",
      user: {
        id: user._id,
        email: user.email,
        hasPremiumStatus: user.hasPremiumStatus,
        premiumUpdatedAt: user.premiumUpdatedAt
      }
    });
    
  } catch (error) {
    console.error("Error actualizando a premium:", error);
    return NextResponse.json(
      { error: error.message || "Error al actualizar estado premium" },
      { status: 500 }
    );
  }
} 