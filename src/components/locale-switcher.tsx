"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";
import clsx from "clsx";

// Data for our languages
const languages = [
  { code: "en", name: "English" },
  { code: "th", name: "ไทย" },
];

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="fixed bottom-8 right-8 flex items-center space-x-2 rounded-full bg-gray-900/50 p-1 border hover:border-primary bg-secondary">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLocale(lang.code)}
          disabled={isPending}
          className={clsx(
            "relative px-3 py-1 rounded-full text-sm font-medium text-white transition-colors focus:outline-none",
            {
              "hover:text-white/80": locale !== lang.code,
            }
          )}
        >
          {locale === lang.code && (
            <motion.div
              layoutId="locale-switcher-highlight"
              className="absolute inset-0 bg-primary rounded-full"
              style={{ borderRadius: 9999 }}
            />
          )}
          <span className="relative z-10">{lang.name}</span>
        </button>
      ))}
    </div>
  );
}
