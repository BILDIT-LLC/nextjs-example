/**
 * Example BILDIT Middleware
 *
 * - Sets `x-pathname` so scheduled content can be matched by location
 * - Forwards `bildit_preview_date` as a header for server components
 *
 * When a URL like: https://example.com?bildit_preview_date=2025-12-25T00:00:00.000Z
 * is accessed, the middleware will set the X-Bildit-Preview-Date header.
 */

import { enhanceMiddlewareWithBildit } from "@bildit-platform/nextjs";
import { NextRequest, NextResponse } from "next/server";

async function customMiddleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const middleware = enhanceMiddlewareWithBildit(customMiddleware);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
