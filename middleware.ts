import { NextRequest, NextResponse } from "next/server";

const IGNORED_PATH_PREFIXES = ["/.well-known/appspecific", "/.well-known/"];

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  // Skip ignored prefixes
  if (IGNORED_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  const ip = request.headers.get("x-forwarded-for") || "0.0.0.0";
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const referer = request.headers.get("referer") ?? "direct";

  const clientLog = {
    ip,
    userAgent,
    pathname,
    origin,
    ref: referer,
    timestamp: new Date().toISOString(),
  };

  console.log(clientLog);

  const res = NextResponse.next();

  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  // res.headers.set("Content-Security-Policy", "default-src 'self'");

  // Add response hint for debugging or routing
  res.headers.set("x-accessed-path", pathname);

  return res;
}

// Only run middleware for real routes (not assets or API)
export const config = {
  matcher: ["/((?!_next|favicon|api).*)"],
};
