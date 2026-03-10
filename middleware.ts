/**
 * Example BILDIT Middleware
 *
 * This middleware automatically detects the bildit_preview_date URL parameter
 * and forwards it as a header to be used in server components.
 *
 * When a URL like: https://example.com?bildit_preview_date=2025-12-25T00:00:00.000Z
 * is accessed, the middleware will set the X-Bildit-Preview-Date header.
 */

import { createBilditMiddleware } from '@bildit-platform/nextjs';

export const middleware = createBilditMiddleware({
  onPreviewDate: (previewDate, request) => {
    console.log(`[BILDIT Middleware] Preview date detected: ${previewDate} for ${request.url}`);
  }
});

export const config = {
  matcher: '/:path*',
};
