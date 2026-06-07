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
  metadataBase: new URL("https://ehviewer.io"),
  title: {
    default: "EhViewer — Free Manga Reader for Android (iOS Coming Soon)",
    template: "%s | EhViewer",
  },
  description:
    "Download EhViewer APK — a free manga & anime comic reader for Android. Huge catalog, offline downloads, zoom reading, custom themes, and privacy-first browsing. iOS coming soon.",
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
    title: "EhViewer — Free Manga Reader for Android (iOS Coming Soon)",
    description:
      "Free manga & anime comic reader for Android. Huge catalog, offline downloads, zoom, custom themes, privacy-first. iOS coming soon.",
    siteName: "EhViewer",
    images: [
      {
        url: "https://ehviewer.io/launcher_icon-web.png",
        width: 512,
        height: 512,
        alt: "EhViewer — Free Manga Reader for Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EhViewer — Free Manga Reader for Android",
    description:
      "Free manga & anime comic reader for Android. Offline downloads, zoom, custom themes. iOS coming soon.",
    images: ["https://ehviewer.io/launcher_icon-web.png"],
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
  alternates: { canonical: "https://ehviewer.io" },
  icons: {
    icon: "/launcher_icon-web.svg",
    shortcut: "/launcher_icon-web.svg",
    apple: "/launcher_icon-web.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://ehviewer.io/#website",
                  url: "https://ehviewer.io",
                  name: "EhViewer",
                  description:
                    "Free open-source manga reader for Android",
                },
                {
                  "@type": "Organization",
                  "@id": "https://ehviewer.io/#organization",
                  name: "EhViewer",
                  url: "https://ehviewer.io",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://ehviewer.io/launcher_icon-web.png",
                  },
                  sameAs: [
                    "https://github.com/Ehviewer-Overhauled/Ehviewer",
                  ],
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
