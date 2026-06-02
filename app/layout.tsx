import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ehviewer.app"),
  title: {
    default: "EhViewer — Free Manga Reader for Android & iOS",
    template: "%s | EhViewer",
  },
  description:
    "Download EhViewer APK — a free manga & anime comic reader for Android and iOS. Huge catalog, offline downloads, zoom reading, custom themes, and privacy-first browsing.",
  keywords: [
    "EhViewer",
    "EhViewer APK",
    "manga reader app",
    "anime comic reader",
    "offline manga reader",
    "free manga app Android",
    "manga reader iOS",
    "download EhViewer",
  ],
  authors: [{ name: "EhViewer" }],
  creator: "EhViewer",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "EhViewer — Free Manga Reader for Android & iOS",
    description:
      "Free manga & anime comic reader. Huge catalog, offline downloads, zoom, custom themes, privacy-first.",
    siteName: "EhViewer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EhViewer — Free Manga Reader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EhViewer — Free Manga Reader",
    description:
      "Free manga & anime comic reader. Huge catalog, offline downloads, zoom, custom themes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E63946",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#FFF8F5]">{children}</body>
    </html>
  );
}
