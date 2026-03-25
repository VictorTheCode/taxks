import { PageReveal } from "@/components/animations";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <PageReveal>{children}</PageReveal>
      </body>
    </html>
  );
}
