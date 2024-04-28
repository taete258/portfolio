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
      className="flex h-full w-full flex-col items-center justify-between bg-base-100"
      data-theme={theme}
    >
      <div className="flex flex-1 max-w-4xl sm:p-8">
        {<Suspense>{children}</Suspense>}
      </div>
    </main>
  );
}
