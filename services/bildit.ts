"use server";

import { headers } from "next/headers";
import {
  type BannerType,
  getPreviewDateFromHeaders,
} from "@bildit-platform/nextjs";
import { RemoteConnector } from "@bildit-platform/nextjs-api";

/**
 * Shared RemoteConnector instance for server-side BILDIT API calls.
 * Constructed once per module load; key/baseURL come from env.
 */
function createConnector() {
  const key = process.env.BILDIT_API_KEY ?? "";
  const baseURL = process.env.BILDIT_API_URL ?? "";

  if (!key || !baseURL) {
    return null;
  }

  return new RemoteConnector({ key, baseURL });
}

/**
 * Fetch published web banners for the current request path.
 * Uses preview date from middleware headers when present (VEE preview).
 */
export async function getBanners(): Promise<BannerType[]> {
  const connector = createConnector();
  if (!connector) {
    console.warn(
      "[BILDIT] BILDIT_API_KEY / BILDIT_API_URL not set — returning empty banners",
    );
    return [];
  }

  try {
    const headersList = await headers();
    const pathname = headersList.get("x-pathname") || "/";
    const previewDate = getPreviewDateFromHeaders(headersList);

    if (previewDate) {
      console.log("[BILDIT SDK] Using preview date:", previewDate);
    }

    const result = await connector.getWebBanners({
      location: pathname,
      date: previewDate,
      mode: "csr",
      tomorrow: true,
      source: "live",
    });

    // RemoteConnector returns WebBanner[]; shape is compatible with BannerType at runtime.
    return (result?.data ?? []) as unknown as BannerType[];
  } catch (error) {
    console.error("[BILDIT] Failed to load scheduled content:", error);
    return [];
  }
}

/**
 * Example: fetch the remote base code library via RemoteConnector.
 */
export async function getRemoteBaseCodeLib() {
  const connector = createConnector();
  if (!connector) {
    return null;
  }

  try {
    return await connector.getRemoteBaseCodelib();
  } catch (error) {
    console.error("[BILDIT] Failed to load remote base code lib:", error);
    return null;
  }
}

/**
 * Example: fetch remote CSS via RemoteConnector.
 */
export async function getRemoteCss() {
  const connector = createConnector();
  if (!connector) {
    return null;
  }

  try {
    return await connector.getRemoteCss();
  } catch (error) {
    console.error("[BILDIT] Failed to load remote CSS:", error);
    return null;
  }
}
