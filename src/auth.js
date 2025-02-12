import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const validAdmin = {
          username: process.env.ADMIN_USER,
          password: process.env.ADMIN_PASSWORD,
        };

        if (
          credentials?.username === validAdmin.username &&
          credentials?.password === validAdmin.password
        ) {
          return { id: "1", name: "Admin", role: "admin" };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});
