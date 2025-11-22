import type { Metadata } from "next";
import "./globals.css";
import { inter, montserrat } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Rising Mind's Academy",
  description: "Shaping Young Mind's for a Brighter Tomorrow!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
