import type { NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/middleware";

export function middleware(request: NextRequest) {
  // This keeps Supabase auth cookies in sync on every request.
  return createClient(request);
}

