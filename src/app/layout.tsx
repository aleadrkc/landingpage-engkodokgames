import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engkodok Games",
  description: "Static UI clone of Engkodok Games.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
