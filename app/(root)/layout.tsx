import { PageReveal } from "@/components/animations";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageReveal>{children}</PageReveal>;
}
