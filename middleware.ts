import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL('/home', request.url))

  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/auth/signin" || path === "/auth/signup";
  const token = request.cookies.get("token")?.value || "";
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/auth/signin", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/auth/signin", "/auth/signup", "/profile", "/dashboard"],
};
