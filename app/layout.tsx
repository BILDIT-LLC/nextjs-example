import "./globals.css";
import { type BannerType, SlotPlaceholder } from "@bildit-platform/nextjs";
import BilditDependenciesProvider from "@/components/BilditDependenciesProvider";
import Navbar from "@/components/Navbar";
import React from "react";
import { getBanners } from "@/services/bildit";

export const metadata = {
  description: "NextJS BILDIT headless CMS Demo",
  title: "BILDIT NextJS Demo",
};

// Server-side data fetching function
async function getInitialData(): Promise<BannerType[]> {
  const banners = await getBanners();
  return banners;
}

interface RootLayoutProps {
  children: React.JSX.Element;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  // This fetch occurs on the server
  const banners: BannerType[] = await getInitialData();

  return (
    <html lang="en">
      <body>
        <BilditDependenciesProvider banners={banners}>
          <Navbar />
          {children ?? null}
          <footer className="container mx-auto flex flex-row space-between">
            <SlotPlaceholder
              slotId="layout-footer"
              another="prop"
              to="pass"
              along
            />
          </footer>
        </BilditDependenciesProvider>
      </body>
    </html>
  );
}
