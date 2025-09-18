import { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Ratchanon Pheungta - Full Stack Developer",
  description: "Portfolio of Ratchanon Pheungta",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  readonly children: React.ReactNode;
  readonly params: Promise<{ locale: string }>;
};
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
