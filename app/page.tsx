
import type { BannerType } from "@/services/bildit.d";
import Image from "next/image";
import React from "react";
import { SlotPlaceholder } from "@bildit-platform/nextjs";

interface HomeProps {
  banners: BannerType[];
  remoteBaseCodeLib?: string;
}

export default function Home({banners, remoteBaseCodeLib}: HomeProps) {
  if (Array.isArray(banners)) console.info('fetched banners', banners);
  if (remoteBaseCodeLib) console.info('base code lib is', remoteBaseCodeLib)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-4 items-center">
          <Image
            src="/bildit.svg"
            alt="BILDIT logo"
            width={180}
            height={38}
            priority
          />
          <span className="text-xl text-zinc-400 font-bold">+</span>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              pages/index.tsx
            </code>
            .
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Banner data JSON is available at{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              pages/json.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
      </main>
      <SlotPlaceholder slotId="home-next-slot" />
      <SlotPlaceholder slotId="homepage11" /><SlotPlaceholder slotId="homepage11" />
      <SlotPlaceholder slotId="home" />
    </div>
  );
}
