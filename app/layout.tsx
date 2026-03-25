import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const grotesk = localFont({
  src: "../public/fonts/CabinetGrotesk-Regular.woff2", // this is  not working on the client
  weight: "400",
  display: "swap",
  style: "normal",
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Taxks",
  description: "AI-Powered Task Management app for all your needs.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${grotesk.className} bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
