"use client";

import React from "react";
import * as Components from "@/components";
import * as DateFns from "date-fns";
import {
  type BannerType,
  BilditProvider,
  type ExtraDependencyConfig,
} from "@bildit-platform/nextjs";

const extraDependenciesConfig: Record<string, ExtraDependencyConfig> = {
  "@/components": { module: Components },
  "date-fns": { module: DateFns },
  // Add your extra dependencies here
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
    <BilditProvider
      banners={banners}
      extraDependenciesConfig={extraDependenciesConfig}
    >
      {children}
    </BilditProvider>
  );
};

export default BilditDependenciesProvider;
