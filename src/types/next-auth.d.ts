import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    hasPremiumStatus?: boolean;
  }
  interface Session {
    user: User;
  }
} 