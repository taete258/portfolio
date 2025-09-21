import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
export default function layout({ children }: LayoutProps) {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
