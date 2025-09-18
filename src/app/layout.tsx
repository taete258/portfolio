import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  readonly children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="dark">
      <body>{children}</body>
    </html>
  );
}
