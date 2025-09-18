import { ReactNode } from "react";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"], // Include subsets for languages you use
  weight: ["400", "600", "700"], // Specify the weights you need
  display: "swap", // This is the default and recommended value
  variable: "--font-open-sans", // This will create a CSS variable
});

type RootLayoutProps = {
  readonly children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={`${openSans.className} dark`}>
      <body>{children}</body>
    </html>
  );
}
