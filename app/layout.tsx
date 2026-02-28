import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const grotesk = localFont({
  src: "../public/fonts/CabinetGrotesk-Regular.woff2",
  weight: "400",
  display: "swap",
  style: "normal",
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Taxks",
  description: "AI-Powered Task Management app for all your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={grotesk.className}>{children}</body>
    </html>
  );
}
