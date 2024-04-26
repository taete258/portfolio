"use client";
import React from "react";
import ThemeSwitch from "./theme-switch";
import useThemeStore from "@/stores/useThemeStore";
import Link from "next/link";
import { FaBurger } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className="navbar bg-base-100 sticky top-0" data-theme={theme}>
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl hidden sm:flex" href={"/"}>
          Ratchanon Pheungta
        </Link>
        <div className="drawer p-0 sm:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {/* Page content here */}
            <label htmlFor="my-drawer" className=" drawer-button ">
              <GiHamburgerMenu size={28} className="ml-4" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content m-0">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="hidden sm:flex">
            <Link href="/">Home</Link>
          </li>
          <li className="hidden sm:flex">
            <Link href="/about-me">About Me</Link>
          </li>
          <li className="hidden sm:flex">
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
