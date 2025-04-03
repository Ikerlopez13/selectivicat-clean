import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"

export const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Por ahora, permitiremos cualquier usuario para pruebas
        if (!credentials?.email || !credentials?.password) return null
        
        return {
          id: "1",
          name: "Test User",
          email: credentials.email as string
        }
      }
    })
  ],
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: '/auth/signin'
  }
} satisfies NextAuthConfig 