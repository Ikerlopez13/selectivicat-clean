import NextAuth from "next-auth";

const config = NextAuth({
  providers: [],
});

export const { handlers, signIn, signOut, auth } = NextAuth(config);