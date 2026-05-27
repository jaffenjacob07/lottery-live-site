import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hasSession =
    request.cookies.get("sb-access-token") ||
    request.cookies.get("supabase-auth-token");

  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !hasSession
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};