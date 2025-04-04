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

export async function GET(req) {
  try {
    await connectToDatabase();
    
    // Actualizar todos los usuarios que no tienen el campo hasPremiumStatus
    const result = await User.updateMany(
      { hasPremiumStatus: { $exists: false } },
      { $set: { hasPremiumStatus: false } }
    );
    
    return NextResponse.json({
      success: true,
      message: `${result.modifiedCount} usuarios actualizados con hasPremiumStatus=false`,
      result
    });
    
  } catch (error) {
    console.error("Error actualizando usuarios:", error);
    return NextResponse.json(
      { error: error.message || "Error al actualizar usuarios" },
      { status: 500 }
    );
  }
} 