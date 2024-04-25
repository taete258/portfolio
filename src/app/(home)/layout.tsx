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
      className="flex min-h-screen flex-col items-center justify-between bg-base-100"
      data-theme={theme}
    >
      {<Suspense>{children}</Suspense>}
    </main>
  );
}
