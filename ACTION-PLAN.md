# EhViewer SEO — Prioritized Action Plan

**Generated:** June 7, 2026
**Current SEO Health Score:** 67 / 100 (up from 58 on June 6)
**Estimated Score After All Fixes:** 86-90 / 100

---

## CRITICAL — Fix Immediately

These issues block rich results, break social shares, or create significant trust gaps.

### 1. Add og:image to metadata
**File:** `app/layout.tsx`
**Effort:** 5 min | **Impact:** Social shares, Google Discover, Twitter cards

The `openGraph` and `twitter` metadata objects have no `images` property. Twitter card `summary_large_image` renders blank. Add at minimum:

```ts
openGraph: {
  // ...existing fields...
  images: [{ url: "https://ehviewer.io/launcher_icon-web.png", width: 512, height: 512, alt: "EhViewer logo" }],
},
twitter: {
  // ...existing fields...
  images: ["https://ehviewer.io/launcher_icon-web.png"],
},
```

Better: create a dedicated 1200x630 OG image and use that instead.

### 2. Add WebSite + Organization schema to layout
**File:** `app/layout.tsx`
**Effort:** 15 min | **Impact:** Sitelinks Search Box, Knowledge Panel, brand entity

No site-level structured data exists. Add a `<script type="application/ld+json">` block in the `<body>` of RootLayout:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://ehviewer.io/#website",
      "url": "https://ehviewer.io",
      "name": "EhViewer",
      "description": "Free open-source manga reader for Android"
    },
    {
      "@type": "Organization",
      "@id": "https://ehviewer.io/#organization",
      "name": "EhViewer",
      "url": "https://ehviewer.io",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ehviewer.io/launcher_icon-web.png"
      },
      "sameAs": ["https://github.com/Ehviewer-Overhauled/Ehviewer"]
    }
  ]
}
```

### 3. Expand /about page — eliminate thin content
**File:** `app/about/page.tsx`
**Effort:** 2 hrs | **Impact:** E-E-A-T, content quality, AI citability

Currently ~280 words of aspirational prose with zero verifiable specifics. Add:
- Founding context with dates (when the project started)
- Contributor count and GitHub stars
- Version history milestones (e.g., "EhViewer 1.14.6 released December 17, 2025")
- Named maintainer or organization attribution
- A `## History` or `## Project Timeline` block with dated milestones

Target: 500+ words with at least 5 specific, citable facts.

---

## HIGH — Fix Within 1 Week

These significantly impact rankings, rich results, or user experience.

### 4. Add `priority` to LCP image in hero
**File:** `components/PhoneMockup.tsx` or `components/HeroSection.tsx`
**Effort:** 2 min | **Impact:** LCP score improvement

The PhoneMockup is the likely LCP element. Add `priority` prop to the primary `<Image>` component (maps to `fetchpriority="high"` and disables lazy loading).

### 5. Add BreadcrumbList schema to all subpages
**Files:** `app/about/page.tsx`, `app/download/page.tsx`, `app/faq/page.tsx`, `app/contact/page.tsx`, `app/privacy-policy/page.tsx`
**Effort:** 30 min | **Impact:** Breadcrumb rich results in SERPs

Add a `<script type="application/ld+json">` block to each subpage with BreadcrumbList schema. Example for /faq:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ehviewer.io" },
    { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://ehviewer.io/faq" }
  ]
}
```

### 6. Use static `lastModified` dates in sitemap
**File:** `app/sitemap.ts`
**Effort:** 5 min | **Impact:** Recrawl signal quality

Replace `lastModified: new Date()` with static ISO date strings that reflect actual content changes:

```ts
{ url: base, lastModified: "2026-06-07", priority: 1.0 },
{ url: `${base}/download`, lastModified: "2025-12-17", priority: 0.9 },
// etc.
```

Also remove `changeFrequency` and `priority` fields — Google ignores both.

### 7. Substantiate or remove aggregateRating
**File:** `app/page.tsx` (line 29-34)
**Effort:** 10 min | **Impact:** Schema trust, manual action risk

The SoftwareApplication schema claims 4.8 stars from 9,400 ratings with no on-page source. Either:
- Add a visible "Rated 4.8/5 on GitHub (9,400 reviews)" section with a link to the source
- Remove the `aggregateRating` block entirely to avoid structured data spam risk

### 8. Enhance llms.txt
**File:** `public/llms.txt`
**Effort:** 15 min | **Impact:** AI citation quality (ChatGPT, Perplexity)

Add these blocks:

```
## Maintainers

Maintained by the EhViewer community via the Ehviewer-Overhauled GitHub organization.

## Use Cases

- Reading manga and anime comics on Android devices
- Offline manga reading without internet access
- Privacy-first browsing without accounts, ads, or tracking
- Searching manga by tag, artist, genre, or keyword

## What EhViewer Is Not

EhViewer does not host, store, or distribute any content. It is a client application that connects to user-configured gallery sources.
```

---

## MEDIUM — Fix Within 1 Month

Optimization opportunities for incremental gains.

| # | Action | File(s) | Effort | Impact |
|---|--------|---------|--------|--------|
| 9 | Add `availability: "https://schema.org/InStock"` to SoftwareApplication offers | `app/page.tsx` | 2 min | Schema completeness |
| 10 | Create dedicated 1200x630 OG image | `public/og-image.png` | 1 hr | Social shares quality |
| 11 | Reduce `'use client'` surface area — split interactive state into smaller leaf components | Multiple components | 3 hrs | INP, hydration time |
| 12 | Add `prefers-reduced-motion` guards to inline `style` animations in HeroSection | `components/HeroSection.tsx` | 30 min | Accessibility, WCAG 2.1 AA |
| 13 | Replace `motion` library with CSS-only scroll animation (~60-80 kB saved) | `components/ui/container-scroll-animation.tsx` | 2 hrs | Bundle size |
| 14 | Move FAQ JSON-LD emission to a Server Component wrapper | `components/FaqSection.tsx` | 30 min | Crawler reliability |
| 15 | Add SoftwareApplication schema to /download page | `app/download/page.tsx` | 15 min | Rich result on download page |
| 16 | Add a standalone citable sentence to homepage hero | `components/HeroSection.tsx` | 5 min | AI citation readiness |
| 17 | Fix Apple touch icon — use 180x180 PNG instead of SVG | `app/layout.tsx`, new PNG file | 15 min | iOS home screen icon |
| 18 | Add visible author/maintainer attribution on at least one page | `app/about/page.tsx` | 15 min | E-E-A-T Experience |

---

## LOW — Backlog

Quick fixes and nice-to-haves.

| # | Action | File(s) | Effort |
|---|--------|---------|--------|
| 19 | Remove deprecated `priority` and `changeFrequency` from sitemap | `app/sitemap.ts` | 2 min |
| 20 | Trim homepage meta description from 169 to ~155 chars | `app/layout.tsx` | 2 min |
| 21 | Expand /contact meta description from 106 to ~150 chars | `app/contact/page.tsx` | 2 min |
| 22 | Make /download and /faq H1 visible instead of sr-only | `app/download/page.tsx`, `app/faq/page.tsx` | 10 min |
| 23 | Normalize brand casing to "EhViewer" across all GitHub links | Multiple files | 5 min |
| 24 | Add IndexNow key for Bing/Yandex instant URL notification | New route handler | 30 min |
| 25 | Create custom 404/not-found page | `app/not-found.tsx` | 30 min |

---

## Estimated Impact

| Phase | Time | Score Impact |
|-------|------|-------------|
| Critical fixes (1-3) | ~2.5 hrs | 67 -> 74 |
| High fixes (4-8) | ~1.5 hrs | 74 -> 82 |
| Medium fixes (9-18) | ~8 hrs | 82 -> 88 |
| Low fixes (19-25) | ~1.5 hrs | 88 -> 90 |
| **Total** | **~13.5 hrs** | **67 -> 90** |

---

## Category Score Targets

| Category | Current | After Critical | After All |
|----------|---------|---------------|-----------|
| Technical SEO | 78 | 80 | 88 |
| Content Quality | 68 | 75 | 82 |
| On-Page SEO | 74 | 76 | 84 |
| Schema / Structured Data | 48 | 68 | 88 |
| Performance (CWV) | 65 | 65 | 80 |
| AI Search Readiness | 61 | 65 | 78 |
| Images | 45 | 60 | 75 |

---

*Generated June 7, 2026 by SEO Audit — 5 parallel specialist agents (Technical, Content, Schema, Sitemap, GEO)*
