"use server";

import { headers } from 'next/headers';
import { getPreviewDateFromHeaders } from '@bildit-platform/nextjs';

export async function getBanners() {
  try {
    // Get preview date from headers (set by middleware)
    const headersList = await headers();
    const previewDate = getPreviewDateFromHeaders(headersList);

    const baseUrl = new URL(process.env.BILDIT_API_URL ?? "");

    baseUrl.pathname += "/remote-webbanners_v1_1";

    baseUrl.searchParams.append("key", process.env.BILDIT_API_KEY ?? "");
    baseUrl.searchParams.append("location", "/");

    if (previewDate) {
      baseUrl.searchParams.append("date", previewDate);
      console.log('[BILDIT SDK] Using preview date:', previewDate);
    }

    const url = baseUrl.toString();

    const response = await fetch(url);
    const data = await response.json();
    return data?.data ?? [];
  } catch (e) {
    console.error(e);
  }
}

export async function getRemoteBaseCodeLib() {
  const baseUrl = new URL(process.env.BILDIT_API_URL ?? "");

  baseUrl.pathname += "/remote-baseCodelib";

  baseUrl.searchParams.append("key", process.env.BILDIT_API_KEY ?? "");

  const url = baseUrl.toString();
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
