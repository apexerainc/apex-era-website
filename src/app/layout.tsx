import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = createMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-body text-text antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
