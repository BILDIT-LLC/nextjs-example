import React from "react";
import { SlotPlaceholder, StylePlaceholder } from "@bildit-platform/nextjs";

export default function Faq() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <StylePlaceholder slotId="faq-styles" target="head" />

      <main className="flex flex-col gap-8 w-full max-w-3xl row-start-2">
        <h1 className="text-2xl font-semibold">FAQ</h1>

        <SlotPlaceholder
          slotId="faq"
          fallback={
            <div className="rounded border border-dashed border-zinc-300 p-6 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
              FAQ fallback — schedule content to the <code>faq</code> slot.
            </div>
          }
        />

        <SlotPlaceholder
          slotId="nursultan"
          fallback={
            <p className="text-sm text-zinc-500">
              No content for <code>nursultan</code>.
            </p>
          }
        />
      </main>
    </div>
  );
}
