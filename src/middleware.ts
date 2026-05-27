import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  const response = await createClient(request);

  const supabase = response.supabase;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !user
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response.response;
}

export const config = {
  matcher: ["/admin/:path*"],
};