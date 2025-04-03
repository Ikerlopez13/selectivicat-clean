import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"

export const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  session: { 
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 días
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      // Asegurarnos de que baseUrl sea la URL canónica (www)
      const canonicalBaseUrl = baseUrl.replace('://selectivi.cat', '://www.selectivi.cat')
      
      // Si la URL comienza con la URL base (con o sin www)
      if (url.startsWith(baseUrl) || url.startsWith(canonicalBaseUrl)) {
        // Asegurarnos de que usamos la versión www
        return url.replace('://selectivi.cat', '://www.selectivi.cat')
      }
      
      // Si es una ruta relativa
      if (url.startsWith("/")) {
        return canonicalBaseUrl + url
      }
      
      // Por defecto, redirigir a la URL canónica
      return canonicalBaseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id
      }
      return token
    }
  }
} satisfies NextAuthConfig 