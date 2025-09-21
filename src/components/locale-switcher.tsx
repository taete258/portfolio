"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";
import clsx from "clsx";
import React from "react";
import { cn } from "@/lib/utils";

interface LocaleSwitcherProps {
  className?: string;
}

// Data for our languages
const languages = [
  { code: "en", name: "English" },
  { code: "th", name: "ไทย" },
];

const LocaleSwitcher = ({ className }: LocaleSwitcherProps) => {
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
    <div
      className={cn(
        "flex items-center space-x-2 rounded-full bg-gray-900/50 p-1 border hover:border-primary bg-secondary",
        className
      )}
    >
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
};

export default React.memo(LocaleSwitcher);
