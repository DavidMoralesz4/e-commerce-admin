import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Email y contraseña son requeridos");
        }

        const response = await fetch(`http://localhost:8181/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          credentials: "include",
        });

        if (!response.ok) throw new Error("Credenciales incorrectas");

        const {data} = await response.json();

        return data;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.firstName || "";
        token.email = user.email || "";
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.username as string;
        session.user.email = token.email as string;
      }
      return session;
    }
  },

  session: {
    strategy: "jwt", // Recomendado para Credentials
  },

  pages: {
    signIn: "/login",
  },
});
