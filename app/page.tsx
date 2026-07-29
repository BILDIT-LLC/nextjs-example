import Image from "next/image";
import React from "react";
import { SlotPlaceholder, StylePlaceholder } from "@bildit-platform/nextjs";

const ARCADE_EMBED_SRC =
  "https://demo.arcade.software/LyUaZaZMwkfwjseVtwaj?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true";

export default function Home() {
  return (
    <>
      <StylePlaceholder slotId="home-styles" target="head" />

      <section className="hero">
        <div className="hero-logos">
          <Image
            src="/bildit.svg"
            alt="BILDIT logo"
            width={150}
            height={32}
            priority
          />
          <span className="text-xl font-bold text-[var(--slot-border)]">+</span>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={130}
            height={28}
            priority
          />
        </div>
        <h1>Publish without redeploying.</h1>
        <p>
          Drop in slots, schedule banners, and inject VXE styles — then follow
          the Arcade walkthrough below to install the editor script.
        </p>
      </section>

      <div className="wrap">
        <p className="slot-label">Install the editor script</p>
        <div className="arcade-frame">
          <iframe
            src={ARCADE_EMBED_SRC}
            title="Download BILDIT Script — Arcade walkthrough"
            loading="lazy"
            allowFullScreen
            allow="clipboard-write"
          />
        </div>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "var(--muted)" }}>
          Prefer a separate tab?{" "}
          <a
            href="https://app.arcade.software/flows/LyUaZaZMwkfwjseVtwaj/view"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--brand)" }}
          >
            Open the Arcade guide
          </a>
          .
        </p>

        <p className="slot-label">Promo slot — home-next-slot</p>
        <SlotPlaceholder
          slotId="home-next-slot"
          fallback={
            <div>
              No content scheduled for <code>home-next-slot</code>. Assign a
              banner in BILDIT to fill this slot.
            </div>
          }
        />

        <div className="grid-cards">
          <div className="card">
            <h3>RemoteConnector</h3>
            <p>
              Fetch banners server-side with location matching and preview date
              support.
            </p>
          </div>
          <div className="card">
            <h3>SlotPlaceholder</h3>
            <p>
              Render VXE content with a fallback when nothing is scheduled.
            </p>
          </div>
          <div className="card">
            <h3>StylePlaceholder</h3>
            <p>Inject VXE-managed CSS into the document head or body.</p>
          </div>
        </div>
      </div>

      <div className="band">
        <div className="wrap" style={{ paddingBottom: 0 }}>
          <p className="slot-label">Seasonal banner — home</p>
          <SlotPlaceholder
            slotId="home"
            fallback={
              <div>
                Empty <code>home</code> slot — schedule a promo or feature
                banner.
              </div>
            }
          />
        </div>
      </div>

      <div className="wrap">
        <div className="grid-cards">
          <div className="card">
            <h3>Preview dates</h3>
            <p>
              Append{" "}
              <code>?bildit_preview_date=…</code> to preview scheduled content
              before it goes live.
            </p>
          </div>
          <div className="card">
            <h3>Location matching</h3>
            <p>
              Middleware sets <code>x-pathname</code> so banners resolve to the
              current route.
            </p>
          </div>
          <div className="card">
            <h3>Live Editor</h3>
            <p>
              Install the editor script so slots become editable inside BILDIT.
            </p>
          </div>
        </div>

        <p className="slot-label">Secondary slot — homepage11</p>
        <SlotPlaceholder
          slotId="homepage11"
          fallback={
            <div>
              Empty <code>homepage11</code> slot.
            </div>
          }
        />

        <p className="slot-label">forceFallback demo — promo-logo</p>
        <SlotPlaceholder
          slotId="promo-logo"
          forceFallback
          fallback={
            <div>
              Default logo / promo (<code>forceFallback=true</code>) — always
              shows this fallback for admin tooling demos.
            </div>
          }
        />
      </div>
    </>
  );
}
