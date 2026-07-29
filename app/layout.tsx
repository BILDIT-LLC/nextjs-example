import "./globals.css";
import {
  type BannerType,
  SlotPlaceholder,
  StylePlaceholder,
} from "@bildit-platform/nextjs";
import BilditDependenciesProvider from "@/components/BilditDependenciesProvider";
import Navbar from "@/components/Navbar";
import React from "react";
import { getBanners } from "@/services/bildit";

export const metadata = {
  description: "NextJS BILDIT headless VXE Demo",
  title: "BILDIT NextJS Demo",
};

// Required: read the path + preview date per request (no static caching).
export const dynamic = "force-dynamic";

async function getInitialData(): Promise<BannerType[]> {
  const banners = await getBanners();
  return banners;
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const banners: BannerType[] = await getInitialData();

  return (
    <html lang="en">
      <body>
        <BilditDependenciesProvider banners={banners}>
          {/* Inject VXE styles for a dedicated style slot into <head> */}
          <StylePlaceholder slotId="global-styles" target="head" />

          <Navbar />
          {children ?? null}

          <footer className="page-footer">
            <p className="slot-label" style={{ marginTop: 0 }}>
              Footer slot — layout-footer
            </p>
            <SlotPlaceholder
              slotId="layout-footer"
              fallback={
                <p style={{ margin: 0 }}>
                  © BILDIT Next.js Demo — assign content to the{" "}
                  <code>layout-footer</code> slot. Free-trial starter pattern
                  inspired by the Acme Extreme Sportswear demo.
                </p>
              }
            />
          </footer>
        </BilditDependenciesProvider>
      </body>
    </html>
  );
}
