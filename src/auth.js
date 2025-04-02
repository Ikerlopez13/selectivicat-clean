import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const config = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);