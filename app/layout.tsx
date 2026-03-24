import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PageReveal } from "@/components/animations";

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

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${grotesk.className} bg-background text-foreground`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageReveal>{children}</PageReveal>
        </ThemeProvider>
      </body>
    </html>
  );
}
