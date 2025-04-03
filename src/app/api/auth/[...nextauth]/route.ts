import NextAuth from "next-auth"
import { authConfig } from "@/app/auth.config"

const auth = NextAuth(authConfig)

// Exportar las funciones directamente
export const GET = auth
export const POST = auth 