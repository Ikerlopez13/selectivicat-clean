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
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "No hay sesión de usuario activa" },
        { status: 401 }
      );
    }
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      email: user.email,
      hasPremiumStatus: !!user.hasPremiumStatus,
      premiumUpdatedAt: user.premiumUpdatedAt || null
    });
  } catch (error) {
    console.error("Error consultando estado premium:", error);
    return NextResponse.json(
      { error: error.message || "Error al consultar estado premium" },
      { status: 500 }
    );
  }
} 