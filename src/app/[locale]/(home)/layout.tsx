import LocaleSwitcher from "@/components/locale-switcher";
import Navbar from "@/components/navbar";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
export default function layout({ children }: LayoutProps) {
  return (
    <div className="">
      <Navbar />
      {children}
      <LocaleSwitcher />
    </div>
  );
}
