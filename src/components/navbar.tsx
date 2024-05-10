"use client";
import React, { useCallback, useEffect } from "react";
import ThemeSwitch from "./theme-switch";
import useThemeStore from "@/stores/useThemeStore";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import profile from "@images/profile-self.jpg";
import { useMediaQuery } from "@mantine/hooks";
import { useDisclosure } from "@mantine/hooks";
const Navbar: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);
  const minWidthMatches = useMediaQuery("(min-width: 640px)");
  const [opened, handlers] = useDisclosure(false);

  const handleClickDrawerMenu = useCallback(() => {
    handlers.close();
  }, []);

  useEffect(() => {
    if (minWidthMatches && opened) {
      handlers.close();
    }
  }, [minWidthMatches, handlers, opened]);
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50" data-theme={theme}>
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl hidden sm:flex" href={"/"}>
          Ratchanon Pheungta
        </Link>
        <div className="drawer p-0 sm:hidden">
          <input
            id="my-drawer"
            type="checkbox"
            checked={opened}
            className="drawer-toggle"
            onChange={() => handlers.toggle()}
          />
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
            />

            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content m-0">
              <div className="flex flex-col text-xl my-6 items-center justify-center space-y-6 mt-10">
                <div className="w-36 rounded-full overflow-visible border-2 border-primary p-1">
                  <Image
                    alt="profile-image"
                    src={profile}
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                </div>
                <Link
                  href={
                    "https://www.linkedin.com/in/ratchanon-pheungta-6846a9229/"
                  }
                  target="_blank"
                  className="flex flex-row flex-wrap gap-4 text-2xl font-bold"
                >
                  Ratchanon Pheungta
                </Link>
              </div>
              <div className="divider divider-primary" />
              {/* Sidebar content here */}
              <li>
                <Link href="/" onClick={handleClickDrawerMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-me" onClick={handleClickDrawerMenu}>
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/contacts" onClick={handleClickDrawerMenu}>
                  Contact
                </Link>
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
};

export default React.memo(Navbar);
