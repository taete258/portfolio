"use client";
import useThemeStore from "@/stores/useThemeStore";
import React, { Suspense } from "react";
type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <main
      className="flex h-auto w-full flex-col items-center justify-between bg-base-100"
      data-theme={theme}
    >
      <div className="flex flex-1 max-w-7xl p-8">
        {<Suspense>{children}</Suspense>}
      </div>
    </main>
  );
}
