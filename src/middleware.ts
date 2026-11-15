import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { readVisitorCountry } from "@/lib/visitorCountry";

const APEX_HOST = "thedatecompass.com";
const WWW_HOST = "www.thedatecompass.com";

function forceHttpsWww(request: NextRequest): NextResponse | null {
  const host = (request.headers.get("host") ?? request.nextUrl.host)
    .split(":")[0]
    .toLowerCase();
  const proto = (
    request.headers.get("x-forwarded-proto") ?? request.nextUrl.protocol.replace(":", "")
  ).toLowerCase();

  const needsHttps = proto === "http";
  const needsWww = host === APEX_HOST;
  if (!needsHttps && !needsWww) return null;

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  if (needsWww) url.host = WWW_HOST;
  return NextResponse.redirect(url, 301);
}

/**
 * Force https/www, then rewrite `/` onto a per-country prerender.
 * The visitor URL stays `/`.
 */
export function middleware(request: NextRequest) {
  const httpsWww = forceHttpsWww(request);
  if (httpsWww) return httpsWww;

  const { pathname } = request.nextUrl;
  if (pathname !== "/") return NextResponse.next();

  const country = readVisitorCountry(request.headers.get("x-vercel-ip-country"));
  const url = request.nextUrl.clone();
  url.pathname = `/geo/${country}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/",
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
