import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ehviewer.io";
  return [
    { url: base, lastModified: "2026-06-07" },
    { url: `${base}/download`, lastModified: "2025-12-17" },
    { url: `${base}/about`, lastModified: "2026-06-07" },
    { url: `${base}/faq`, lastModified: "2026-06-06" },
    { url: `${base}/contact`, lastModified: "2026-06-06" },
    { url: `${base}/privacy-policy`, lastModified: "2026-06-06" },
  ];
}
