"use client";

import React, { Suspense } from "react";
import jsxRuntime from "react/jsx-runtime";
import NextImage from "next/image";
import NextLink from "next/link";
import * as NextScript from "next/script";
import * as Components from "@/components";
import * as DateFns from "date-fns";
import {
  type BannerType,
  BilditProvider,
  type ExtraDependencyConfig,
} from "@bildit-platform/nextjs";

/**
 * Modules the BILDIT engine resolves when rendering scheduled content as code.
 * Register every module your scheduled content imports, or it fails to render.
 */
const extraDependenciesConfig: Record<string, ExtraDependencyConfig> = {
  react: { module: React },
  "react/jsx-runtime": { module: jsxRuntime },
  "next/image": { module: { default: NextImage, __esModule: true } },
  "next/link": { module: { default: NextLink, __esModule: true } },
  "next/script": { module: NextScript },
  "@/components": { module: Components },
  "date-fns": { module: DateFns },
};

interface DependencyConfigProviderProps {
  banners: BannerType[];
  children: React.ReactNode;
}

const BilditDependenciesProvider = ({
  banners,
  children,
}: DependencyConfigProviderProps) => {
  return (
    <Suspense>
      <BilditProvider
        banners={banners}
        extraDependenciesConfig={extraDependenciesConfig}
      >
        {children}
      </BilditProvider>
    </Suspense>
  );
};

export default BilditDependenciesProvider;
