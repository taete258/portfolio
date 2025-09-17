import { redirect, routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { ReactNode } from "react";

type RootLayoutProps = {
  readonly children: ReactNode;
  params: Promise<{ locale?: string }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    redirect({ href: "/", locale: routing.defaultLocale });
  }
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
