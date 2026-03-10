import React from "react";

import { SlotPlaceholder } from "@bildit-platform/nextjs";

export default function Faq() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <SlotPlaceholder slotId="faq" />
      <SlotPlaceholder slotId="nursultan" />
    </div>
  );
}
