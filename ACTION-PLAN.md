# EhViewer SEO — Prioritized Action Plan

**Generated:** June 6, 2026
**Current SEO Health Score:** 58 / 100
**Estimated Score After All Fixes:** 82-88 / 100

---

## CRITICAL — Fix Immediately

These issues block indexing, break trust, or cause penalties.

### 1. Create robots.txt
**File:** Create `app/robots.ts`
**Effort:** 15 min | **Impact:** Crawlability, AI crawler access

```ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/downloads/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
    ],
    sitemap: 'https://ehviewer.app/sitemap.xml',
  }
}
```

### 2. Create sitemap.xml
**File:** Create `app/sitemap.ts`
**Effort:** 15 min | **Impact:** Indexation speed

```ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ehviewer.app'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/download`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
```

### 3. Add security headers
**File:** `next.config.ts`
**Effort:** 30 min | **Impact:** Security, trust signals

Add `headers()` export with X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS, and Content-Security-Policy.

### 4. Fix or remove the contact form
**File:** `app/contact/page.tsx`
**Effort:** 2 hrs | **Impact:** E-E-A-T trust (Google QRG evaluates working contact mechanisms)

The `submitContact` server action is a no-op (lines 15-22). Either integrate an email service (Resend, Nodemailer) or replace the form with a direct link to GitHub Discussions.

---

## HIGH — Fix Within 1 Week

These significantly impact rankings or user experience.

### 5. Create OG image
**File:** Create `public/og-image.png` (1200x630)
**Effort:** 1 hr | **Impact:** Social shares, Google Discover

### 6. Add H1 to /download and /faq
**Files:** `app/download/page.tsx`, `app/faq/page.tsx`
**Effort:** 15 min | **Impact:** On-page SEO for highest-intent pages

### 7. Replace `<a>` with `<Link>` in navigation
**Files:** `components/Navbar.tsx`, `components/Footer.tsx`
**Effort:** 20 min | **Impact:** Performance (prefetching, client-side navigation)

### 8. Fix SoftwareApplication schema
**File:** `app/page.tsx`
**Effort:** 15 min | **Impact:** App rich result card in Google SERPs

Add: `url`, `downloadUrl`, `softwareVersion` ("1.14.6"), `image` ("/og-image.png"), `datePublished`.

### 9. Scope FAQPage schema to /faq and / only
**File:** `components/FAQSection.tsx` or individual page files
**Effort:** 20 min | **Impact:** Eliminate duplicate schema on irrelevant pages

### 10. Add canonical URLs to all pages
**Files:** All `page.tsx` metadata exports
**Effort:** 20 min | **Impact:** Prevent duplicate content issues

### 11. Create llms.txt
**File:** Create `public/llms.txt`
**Effort:** 30 min | **Impact:** AI search readiness (highest-leverage GEO asset)

### 12. Expand FAQ answers to 134-167 words
**File:** `components/faqData.ts`
**Effort:** 2-3 hrs | **Impact:** AI citation eligibility (all 9 answers currently under 45 words)

### 13. Address fabricated testimonials
**File:** `components/AnimatedTestimonialSection.tsx`
**Effort:** 2 hrs | **Impact:** E-E-A-T trust (fake reviews = direct QRG violation)

Replace with verifiable sources: linked GitHub profiles, screenshots of real reviews, or sourced App Store reviews.

---

## MEDIUM — Fix Within 1 Month

Optimization opportunities for incremental gains.

| # | Action | Effort |
|---|--------|--------|
| 14 | Expand /about page with contributors, stats, timeline | 3 hrs |
| 15 | Add WebSite schema to layout.tsx | 15 min |
| 16 | Add Organization schema to /about | 15 min |
| 17 | Add BreadcrumbList schema to all inner pages | 30 min |
| 18 | Add HowTo schema to /download installation guides | 30 min |
| 19 | Replace `motion` library with CSS-only scroll animation (~60-80 kB saved) | 2 hrs |
| 20 | Add `@tabler/icons-react` to `optimizePackageImports` | 2 min |
| 21 | Remove `background-attachment: fixed` from body CSS | 5 min |
| 22 | Add `loading="lazy"` to below-fold images; `fetchpriority="high"` to LCP | 30 min |
| 23 | Add `width`/`height` attributes to all `<img>` elements | 20 min |
| 24 | Show support@ehviewer.app on /contact page | 5 min |
| 25 | Label iOS section as "coming soon" clearly | 10 min |
| 26 | Move FAQ JSON-LD to server component | 30 min |

---

## LOW — Backlog

Quick fixes and nice-to-haves.

| # | Action | Effort |
|---|--------|--------|
| 27 | Remove `keywords` meta tag | 2 min |
| 28 | Fix grammar on /about ("is open source means") | 2 min |
| 29 | Fix "Source Code" footer link to GitHub | 2 min |
| 30 | Trim meta descriptions (/ at 169 chars, /download at 196 chars) | 5 min |
| 31 | Add inline links from FAQ answers to /download | 10 min |
| 32 | Add IndexNow key for Bing/Yandex | 30 min |
| 33 | Substantiate or remove 4.8/9400 AggregateRating | 10 min |
| 34 | Add ContactPage schema to /contact | 10 min |

---

## Estimated Impact

| Phase | Time | Score Impact |
|-------|------|-------------|
| Critical fixes (1-4) | ~3 hrs | 58 → 66 |
| High fixes (5-13) | ~7 hrs | 66 → 78 |
| Medium fixes (14-26) | ~8 hrs | 78 → 85 |
| Low fixes (27-34) | ~2 hrs | 85 → 88 |
| **Total** | **~20 hrs** | **58 → 88** |
