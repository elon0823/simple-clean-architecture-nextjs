import CredentialsProvider from "next-auth/providers/credentials";

import {User} from "@/model/user";
import {DefaultSession, NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions =  {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        if (credentials == undefined) {
          return null;
        }

        // TODO: This is temporal authorization. Implement your own authorization logic here
        if (credentials.email === "test@test.com" && credentials.password === "password") {
          return {
            id: "1",
            name: "test",
            email: "test@test.com",
            token: "jwt-from-backend-server"
          } as User;
        }

        return null;
      },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, user, token }) {
      session.user = token.user as User;
      return session;
    },
    async jwt({ token, trigger, session, user }) {
      if (trigger === "update") {
        // update session user
      } else {
        user && (token.user = user);
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
