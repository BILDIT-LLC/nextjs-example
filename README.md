# @bildit-platform/nextjs Example

Reference Next.js (App Router) project for integrating **BILDIT VXE** with [`@bildit-platform/nextjs`](https://www.npmjs.com/package/@bildit-platform/nextjs) and [`@bildit-platform/nextjs-api`](https://www.npmjs.com/package/@bildit-platform/nextjs-api).

This example shows:

- **RemoteConnector** — server-side banner / code-lib / CSS fetching
- **SlotPlaceholder** — slot rendering with `fallback` and `forceFallback`
- **StylePlaceholder** — VXE-managed CSS injection into `head` / `body`
- Preview-date middleware + location matching via `x-pathname`

For the full step-by-step guide, see the [Integration Guide](https://docs.bildit.co/docs/webcms/nextjs/integration-guide).

## Installation

```bash
npm install @bildit-platform/nextjs @bildit-platform/nextjs-api
# or
yarn add @bildit-platform/nextjs @bildit-platform/nextjs-api
# or
pnpm add @bildit-platform/nextjs @bildit-platform/nextjs-api
```

Both packages are public on npm — no private token or `.npmrc` required.

## Before you verify

The VEE **Verify** button looks for `BilditProvider` on the live page — not a script tag in `<head>`. Install the SDK and wrap the app **before** you click Verify:

```bash
yarn add @bildit-platform/nextjs
```

```tsx
import { BilditProvider } from '@bildit-platform/nextjs'

<BilditProvider banners={banners}>
  {children}
</BilditProvider>
```

This example already wraps the app in `BilditProvider` via `components/BilditDependenciesProvider.tsx`. Set your env vars, run the app, then click **Verify** in the VEE.

## Environment

Create `.env.local` in the project root:

```bash
BILDIT_API_KEY=your-api-key
BILDIT_API_URL=https://your-site.web.app   # VXE instance root (no path)
```

| Variable | Required | Description |
|---|---|---|
| `BILDIT_API_KEY` | ✅ | API key from Configuration → API Keys |
| `BILDIT_API_URL` | ✅ | Root URL of your VXE instance (SDK appends `/remote-webbanners_v1_4`) |

## Run

```bash
npm install
npm run dev
```

## Integration examples

### 1. RemoteConnector (server fetch)

`services/bildit.ts` uses `RemoteConnector` from `@bildit-platform/nextjs-api`:

```ts
import { headers } from "next/headers";
import { getPreviewDateFromHeaders } from "@bildit-platform/nextjs";
import { RemoteConnector } from "@bildit-platform/nextjs-api";

const connector = new RemoteConnector({
  key: process.env.BILDIT_API_KEY!,
  baseURL: process.env.BILDIT_API_URL!,
});

export async function getBanners() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";
  const previewDate = getPreviewDateFromHeaders(headersList);

  const result = await connector.getWebBanners({
    location: pathname,
    date: previewDate,
    mode: "csr",
    tomorrow: true,
    source: "live",
  });

  return result?.data ?? [];
}
```

Other connector helpers demonstrated in this repo:

- `connector.getRemoteBaseCodelib()` — remote base code library
- `connector.getRemoteCss()` — remote CSS

### 2. SlotPlaceholder with fallback

```tsx
import { SlotPlaceholder } from "@bildit-platform/nextjs";

<SlotPlaceholder
  slotId="home-next-slot"
  fallback={
    <div>No content scheduled — this default UI shows instead.</div>
  }
/>

{/* Keep fallback visible for admin tooling */}
<SlotPlaceholder
  slotId="promo-logo"
  forceFallback
  fallback={<div>Default logo</div>}
/>
```

### 3. StylePlaceholder

Injects VXE style-slot content into `document.head` (default) or `body` / a CSS selector:

```tsx
import { StylePlaceholder } from "@bildit-platform/nextjs";

<StylePlaceholder slotId="global-styles" target="head" />
<StylePlaceholder slotId="home-styles" target="head" />
```

`StylePlaceholder` renders nothing visually — styles are injected via a `<style data-bildit-style-id="…">` element.

### 4. Provider + middleware

- `components/BilditDependenciesProvider.tsx` — client `BilditProvider` with `extraDependenciesConfig` (react, next/image, next/link, etc.)
- `middleware.ts` — sets `x-pathname` and forwards preview date via `enhanceMiddlewareWithBildit`
- `app/layout.tsx` — `export const dynamic = "force-dynamic"` so path/preview headers are read per request

### 5. Preview date

```bash
https://localhost:3000/?bildit_preview_date=2026-02-15T00:00:00.000Z
```

## Project layout

```
app/
  layout.tsx          # fetch banners, StylePlaceholder, footer SlotPlaceholder
  page.tsx            # SlotPlaceholder + fallback + StylePlaceholder demos
  faq/page.tsx        # FAQ slot examples
components/
  BilditDependenciesProvider.tsx
middleware.ts
services/bildit.ts    # RemoteConnector helpers
next.config.ts        # transpilePackages for @bildit-platform/*
```

## Related docs

- [Integration Guide](https://docs.bildit.co/docs/webcms/nextjs/integration-guide)
- [API Reference](https://docs.bildit.co/docs/webcms/nextjs/api-reference)
- [Next.js Cache & Image Configuration](https://docs.bildit.co/docs/webcms/setup/nextjs-config)
