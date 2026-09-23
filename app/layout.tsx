import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SuperCommerce — Premium Shopping Reimagined",
    template: "%s | SuperCommerce",
  },
  description:
    "Discover curated premium products with unmatched security, lightning-fast delivery, and a shopping experience unlike any other.",
  keywords: ["ecommerce", "premium", "shopping", "electronics", "fashion"],
  authors: [{ name: "SuperCommerce" }],
  creator: "SuperCommerce",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "SuperCommerce — Premium Shopping Reimagined",
    description: "Discover curated premium products with unmatched security.",
    siteName: "SuperCommerce",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperCommerce — Premium Shopping Reimagined",
    description: "Discover curated premium products with unmatched security.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#080b14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
