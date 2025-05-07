import { auth } from "@/auth"
import { NextResponse } from "next/server";

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const isAuthPage = req.nextUrl.pathname.startsWith("/login");
  
    if (isAuthPage && isLoggedIn) {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }
  
    if (!isLoggedIn && !isAuthPage) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
})

export const config = {
    matcher: ['/dashboard', '/dashboard/orders']
}