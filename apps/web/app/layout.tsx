import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { cn } from "@repo/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lauren Wittman Real Estate",
  description: "Luxury real estate in your area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", inter.className)}>{children}</body>
    </html>
  );
}
