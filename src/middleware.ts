import { NextRequest, NextResponse } from "next/server";
import { JWT_KEY } from "@/core/auth/jwt";

export async function middleware(request: NextRequest) {
  const jwt = request.cookies?.get(JWT_KEY)?.value;
  const isAuthenticated = jwt != null;

  if (isAuthenticated && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (!isAuthenticated && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
