import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { readVisitorCountry } from "@/lib/visitorCountry";

/**
 * Next.js 14.2 stable rejects experimental PPR, so the homepage stays static
 * by rewriting `/` onto a per-country prerender. The visitor URL stays `/`.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== "/") return NextResponse.next();

  const country = readVisitorCountry(request.headers.get("x-vercel-ip-country"));
  const url = request.nextUrl.clone();
  url.pathname = `/geo/${country}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/",
};
