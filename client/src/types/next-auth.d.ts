import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: number,
    firstName: string,
    lastName: string,
    document: number,
    email: string
    password: string
  }

  interface Session {
    user: {
      name: string; // Esto se mapeará a "username"
      email: string;
    };
  }

  interface JWT {
    username: string; // Propiedad personalizada en el token
    email: string;
  }
}