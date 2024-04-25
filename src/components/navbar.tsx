"use client";
import React from "react";
import ThemeSwitch from "./theme-switch";
import useThemeStore from "@/stores/useThemeStore";
import Link from "next/link";

export default function Navbar() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className="navbar bg-base-100 sticky top-0" data-theme={theme}>
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href={"/"}>
          Portfolio
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about-me">About Me</Link>
          </li>
          <li>
            <Link href="/contacts">Contact</Link>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </div>
    </div>
  );
}
