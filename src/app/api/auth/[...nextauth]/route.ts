import NextAuth from "next-auth"
import { authConfig } from "@/app/auth.config"

const handler = NextAuth(authConfig)

// Exportar el handler directamente para App Router
export { handler as GET, handler as POST } 