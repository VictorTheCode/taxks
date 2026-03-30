import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const grotesk = localFont({
  src: "../public/fonts/CabinetGrotesk-Variable.woff2",
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
        className={`${grotesk.variable} ${grotesk.className} font-sans bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#121212",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
