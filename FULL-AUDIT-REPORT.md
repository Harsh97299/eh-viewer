# EhViewer — Full SEO Audit Report

**Audit Date:** June 7, 2026
**Previous Audit:** June 6, 2026 (Score: 58/100)
**Site:** EhViewer — Free Manga Reader for Android
**URL:** https://ehviewer.io
**Framework:** Next.js 16.2.6, React 19.2.4, Tailwind CSS v4
**Business Type:** Software / Mobile App (non-local)
**Pages Audited:** 6 — `/`, `/about`, `/contact`, `/download`, `/faq`, `/privacy-policy`

---

## Executive Summary

### SEO Health Score: 67 / 100 (up from 58)

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 78/100 | 17.2 |
| Content Quality | 23% | 68/100 | 15.6 |
| On-Page SEO | 20% | 74/100 | 14.8 |
| Schema / Structured Data | 10% | 48/100 | 4.8 |
| Performance (CWV) | 10% | 65/100 | 6.5 |
| AI Search Readiness | 10% | 61/100 | 6.1 |
| Images | 5% | 45/100 | 2.3 |
| **Total** | **100%** | | **67.2** |

### Issues Fixed Since Last Audit (June 6)

- robots.ts created with proper rules and AI crawler permissions
- sitemap.ts created with all 6 pages
- Security headers added (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- Contact form wired to Resend email service
- Canonical URLs added to all pages
- llms.txt created
- FAQ answers expanded to 100-180 words each
- H1 tags added (sr-only) to /download and /faq

### Top 5 Critical Issues (Remaining)

1. **No og:image** — OpenGraph and Twitter card metadata have no image; social shares render blank previews
2. **Missing WebSite schema** — no site-level structured data for Sitelinks Search Box eligibility
3. **Missing Organization schema** — no brand entity record for Knowledge Panel eligibility
4. **About page thin content** — ~280 words with no verifiable specifics, fails E-E-A-T
5. **LCP image not prioritized** — hero phone mockup uses lazy loading instead of `priority`

### Top 5 Quick Wins

1. Add `openGraph.images` and `twitter.images` to layout.tsx metadata (5 min)
2. Add `availability` to SoftwareApplication `offers` schema (2 min)
3. Add `priority` prop to hero PhoneMockup image (2 min)
4. Use static `lastModified` dates in sitemap.ts instead of `new Date()` (5 min)
5. Add WebSite + Organization JSON-LD to layout.tsx (15 min)

---

## 1. Technical SEO

**Score: 78/100** (up from 52)

### Crawlability — PASS

- robots.ts correctly structured with proper rules
- `/downloads/` directory blocked from crawling
- AI crawlers explicitly allowed (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot)
- CCBot (training crawler) blocked
- Sitemap reference present and correct
- No middleware.ts — no edge-based redirect risks

### Indexability — PASS with minor issues

| # | Issue | Severity |
|---|-------|----------|
| T-1 | `lastModified: new Date()` in sitemap.ts regenerates timestamps on every build regardless of content changes — degrades recrawl signal | Medium |
| T-2 | `priority` and `changeFrequency` fields in sitemap are deprecated (Google ignores both) | Low |
| T-3 | No custom 404/not-found page | Low |
| T-4 | No IndexNow protocol for Bing/Yandex instant URL submission | Low |

### Security Headers — PASS

All headers correctly configured in next.config.ts:
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()`
- `Content-Security-Policy` with tight directives

### URL Structure — PASS

Clean, flat URL hierarchy. No trailing slashes, no query parameters in canonical URLs. `metadataBase` correctly set to `https://ehviewer.io`.

### Mobile Optimization — PASS

Viewport correctly configured via `Viewport` export. Tailwind responsive classes used consistently. Touch targets adequately sized.

### Core Web Vitals Readiness

| Metric | Risk | Primary Driver |
|--------|------|----------------|
| LCP | **HIGH** | PhoneMockup is likely LCP element — all hero images use `loading="lazy"` with no `priority` prop |
| INP | MEDIUM | 8 `'use client'` components on homepage cause substantial hydration work |
| CLS | LOW | Geist font uses `adjustFontFallback: true` — correct CLS mitigation |

| # | Issue | Severity |
|---|-------|----------|
| T-5 | No `priority` prop on hero LCP image (PhoneMockup) — forces lazy loading on above-fold content | High |
| T-6 | 8 `'use client'` components on homepage — heavy client JS bundle delays INP | Medium |
| T-7 | Animation-heavy hero without `prefers-reduced-motion` guards on inline `style` animations | Medium |

### JS Rendering — PASS

Next.js App Router with `output: standalone` defaults to SSR. All metadata-exporting pages are statically rendered. Content is not gated behind JS execution for crawlers.

### What's Working Well

- `metadataBase` correctly set
- Viewport meta properly configured
- `display: "swap"` on Geist font prevents FOIT
- `preload: true` and `adjustFontFallback: true` on font
- All external links use `rel="noopener noreferrer"`
- Server-side rendering for all page content
- Zero third-party scripts

---

## 2. Content Quality & E-E-A-T

**Score: 68/100** (up from 64)

### E-E-A-T Assessment

| Factor | Score | Weight | Key Gap |
|--------|-------|--------|---------|
| Experience | 44/100 | 20% | No author bylines, no first-hand signals, unverified "2M+ readers" claim |
| Expertise | 62/100 | 25% | Strong FAQ technical detail; weak elsewhere |
| Authoritativeness | 55/100 | 25% | GitHub links present but no external reviews, press, or stats cited |
| Trustworthiness | 76/100 | 30% | Privacy policy well-structured; contact form functional; GPL licensed |

**Weighted E-E-A-T Score: 62/100**

### Per-Page Assessment

| Page | Words | Quality | Key Issue |
|------|-------|---------|-----------|
| `/` | ~700 | PASS | aggregateRating (4.8/9400) unsubstantiated on-page |
| `/about` | ~280 | **THIN** | No specifics — no dates, contributors, stats, timeline |
| `/contact` | ~220 | PASS | Acceptable for contact page type |
| `/download` | ~600+ | STRONG | Excellent version-specific detail with changelogs |
| `/faq` | ~1200+ | STRONG | 8 detailed answers, technically accurate |
| `/privacy-policy` | ~650 | STRONG | 10 numbered sections, dated, contact info |

### Findings

| # | Issue | Severity |
|---|-------|----------|
| C-1 | `/about` is thin content (~280 words) with no verifiable specifics — no founding context, contributor count, GitHub stars, version history | High |
| C-2 | `aggregateRating` in JSON-LD (4.8 stars, 9,400 ratings) has no visible on-page sourcing — trustworthiness risk | Medium |
| C-3 | "2M+ readers" claim in hero is unverified — AI systems will not cite as fact | Medium |
| C-4 | No author attribution anywhere on site — suppresses Experience and Authoritativeness | Medium |
| C-5 | iOS "Coming Soon" section on download page has misleading detail for unreleased product | Low |
| C-6 | Homepage lacks standalone, citable definitional sentence about EhViewer | Low |

### AI Citation Readiness: 54/100

The FAQ and Download pages are citation-ready. The Homepage, About, and Contact pages lack declarative, fact-dense sentence structures that LLM citation systems extract.

---

## 3. On-Page SEO

**Score: 74/100** (up from 62)

### Title Tags — All PASS

| Page | Title | Length |
|------|-------|--------|
| `/` | EhViewer — Free Manga Reader for Android (iOS Coming Soon) | 58 |
| `/about` | About EhViewer — Free Open-Source Manga Reader \| EhViewer | 58 |
| `/contact` | Contact EhViewer — Reach the Team & Community \| EhViewer | 57 |
| `/download` | Download EhViewer 1.14.6 APK — Free Manga Reader \| EhViewer | 60 |
| `/faq` | EhViewer FAQ — Install, Offline Reading & Privacy \| EhViewer | 60 |
| `/privacy-policy` | EhViewer Privacy Policy — Privacy-First Manga Reader \| EhViewer | 64 |

### Meta Descriptions

| Page | Length | Status |
|------|--------|--------|
| `/` | 169 | Slightly long — trim ~15 chars |
| `/about` | 146 | Good |
| `/contact` | 106 | Short — expand to ~150 |
| `/download` | 163 | Good |
| `/faq` | 145 | Good |
| `/privacy-policy` | 127 | Slightly short |

### Heading Structure

| Page | H1 | Status |
|------|----|--------|
| `/` | "EhViewer: Read Manga Anytime, Anywhere." | PASS |
| `/about` | "About EhViewer" | PASS |
| `/contact` | "Contact EhViewer" | PASS |
| `/download` | "Download EhViewer APK..." (sr-only) | PASS (marginal) |
| `/faq` | "EhViewer FAQ..." (sr-only) | PASS (marginal) |
| `/privacy-policy` | "Privacy Policy" | PASS |

### Internal Linking

| Signal | Status |
|--------|--------|
| Navbar links to all main pages | PASS |
| Footer covers all pages + external GitHub | PASS |
| CTA buttons link to /download | PASS |
| FAQ answers have inline CTAs to /download | PASS |
| Canonical URLs on all pages | PASS |
| Breadcrumb navigation | MISSING |

### Findings

| # | Issue | Severity |
|---|-------|----------|
| O-1 | No breadcrumb navigation on any subpage | High |
| O-2 | /download and /faq H1 tags are sr-only (visually hidden) — visible H1 preferred | Low |
| O-3 | Homepage meta description 169 chars — will be truncated in some SERPs | Low |
| O-4 | /contact meta description too short at 106 chars | Low |

---

## 4. Schema & Structured Data

**Score: 48/100** (down from 65 — stricter evaluation of missing schemas)

### What Exists

| Schema | Page | Status |
|--------|------|--------|
| SoftwareApplication | `/` | PASS — valid with one warning: `offers` missing `availability` property |
| FAQPage | `/` and `/faq` | PASS — correctly scoped to rendered FAQ items |

### Validation Issues

| # | Issue | Severity |
|---|-------|----------|
| S-1 | `offers` block missing `availability: "https://schema.org/InStock"` | Low |
| S-2 | FAQSection is `'use client'` — JSON-LD injected client-side instead of SSR | Medium |
| S-3 | Google restricted FAQPage rich results to govt/health sites (Aug 2023) — still valuable for GEO | Info |

### Missing Schema — Critical Gaps

| Schema | Where | Severity | Impact |
|--------|-------|----------|--------|
| **WebSite** with SearchAction | `app/layout.tsx` | Critical | Sitelinks Search Box eligibility |
| **og:image / twitter:image** | `app/layout.tsx` metadata | Critical | Social shares render blank |
| **Organization** with logo + sameAs | `app/layout.tsx` | High | Knowledge Panel, brand entity recognition |
| **BreadcrumbList** | All 5 subpages | High | Breadcrumb rich results in SERPs |
| SoftwareApplication on /download | `app/download/page.tsx` | Medium | Reinforce download page rich result |

### Recommended JSON-LD Additions

**WebSite + Organization (add to layout.tsx):**

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
      "sameAs": [
        "https://github.com/Ehviewer-Overhauled/Ehviewer"
      ]
    }
  ]
}
```

**BreadcrumbList (add to each subpage, example for /faq):**

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

---

## 5. Performance (CWV)

**Score: 65/100**

### Risk Assessment

| Metric | Risk Level | Driver |
|--------|-----------|--------|
| LCP | **HIGH** | Hero PhoneMockup and floating avatars all use `loading="lazy"` — no `priority` on LCP element |
| INP | MEDIUM | 8 `'use client'` components on homepage; substantial hydration work before interactive |
| CLS | LOW | Font fallback adjustment correct; no layout shift from fonts |

### Findings

| # | Issue | Severity |
|---|-------|----------|
| P-1 | No `priority` prop on LCP image in HeroSection — PhoneMockup is likely LCP element | High |
| P-2 | 8 `'use client'` components composed on homepage — heavy client JS bundle | Medium |
| P-3 | Inline `style` animations on hero elements bypass `prefers-reduced-motion` | Medium |
| P-4 | `motion` library (~60-80 kB gzip) imported for one scroll effect in ProcessSection | Medium |

### What's Working Well

- Zero third-party scripts (no analytics, ads, chat widgets)
- All user-facing images in WebP format
- Single font family (Geist Latin) with optimal loading config
- `optimizePackageImports` configured for lucide-react and @tabler/icons-react
- Server-side rendering for all content

---

## 6. AI Search Readiness (GEO)

**Score: 61/100** (up from 54)

### GEO Dimension Breakdown

| Dimension | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| Technical Accessibility | 85/100 | 20% | 17.0 |
| Citability | 58/100 | 25% | 14.5 |
| Structural Readability | 65/100 | 20% | 13.0 |
| Authority & Brand Signals | 55/100 | 20% | 11.0 |
| Multi-Modal Content | 35/100 | 15% | 5.3 |

### Platform-Specific Scores

| Platform | Score | Key Gap |
|----------|-------|---------|
| Google AI Overviews | 62 | FAQ accordion collapse is a passage extraction risk |
| Perplexity | 68 | PerplexityBot allowed; llms.txt present; FAQ citable |
| Bing Copilot | 55 | No Organization schema; no structured author attribution |
| ChatGPT | 50 | No Wikipedia entity; no llms.txt Citations block |

### AI Crawler Access — PASS

robots.ts correctly grants explicit Allow rules for GPTBot, OAI-SearchBot, ClaudeBot, and PerplexityBot. CCBot blocked.

### llms.txt — PRESENT, INCOMPLETE

Present at `public/llms.txt` with project summary, page list, key facts, features, and crawler permissions.

Missing:
- `## Maintainers` block with GitHub org attribution
- `## Use Cases` block for disambiguation queries
- `## Citations` block for ChatGPT knowledge synthesis

### Findings

| # | Issue | Severity |
|---|-------|----------|
| G-1 | llms.txt missing Maintainers, Use Cases, and Citations blocks | Medium |
| G-2 | About page has zero citable factual statements — all aspirational prose | High |
| G-3 | No external entity presence (Wikipedia, YouTube coverage) — largest GEO risk | High |
| G-4 | FAQ accordion client-side rendering may limit some crawler passage extraction | Medium |
| G-5 | Brand casing inconsistent: "EhViewer" vs "Ehviewer-Overhauled" across GitHub links | Low |

### Strengths

- SSR ensures all content visible to AI crawlers in initial HTML
- FAQ answers are 100-180 words each — within optimal citation range
- Download page version/changelog content is highly citable
- Privacy policy has clear declarative statements
- SoftwareApplication + FAQPage schemas provide structured extraction paths

---

## 7. Images

**Score: 45/100**

### Findings

| # | Issue | Severity |
|---|-------|----------|
| I-1 | No og:image defined in layout.tsx metadata — social shares render blank | Critical |
| I-2 | No `priority` prop on above-fold hero images — LCP degradation | High |
| I-3 | Hero floating avatars use `loading="lazy"` — correct for decorative below-fold content | Pass |
| I-4 | Apple touch icon is SVG — some iOS versions don't support SVG apple-touch-icons (should be 180x180 PNG) | Medium |

### Strengths

- All user-facing images in WebP format
- SVGs used for logo assets (correct choice)
- Decorative images use `alt=""` per WCAG
- `next/image` used in HeroSection and ProcessSection with proper `sizes` attribute

---

## What's Already Well-Implemented

- **Zero third-party scripts** — cleanest possible performance profile
- **All images in WebP format** — modern, optimized format
- **Server-side rendering** via Next.js App Router — all content visible to crawlers
- **Geist font** with `display: swap`, `preload: true`, `adjustFontFallback: true` — best-practice loading
- **Security headers** — comprehensive set covering HSTS, CSP, clickjacking, MIME sniffing
- **robots.ts** — proper rules with AI crawler permissions and sitemap reference
- **sitemap.ts** — all 6 pages included with appropriate priorities
- **Canonical URLs** on every page via `alternates.canonical`
- **llms.txt** — present with project summary and key facts for AI systems
- **Contact form** functional via Resend email service
- **FAQ content** — 8 detailed, technically accurate answers (100-180 words each)
- **Privacy policy** — thorough, dated, 10 numbered sections with contact info
- **Download page** — version-specific detail with changelogs, architecture variants, and install guides
- **Unique title tags and meta descriptions** on every page with `%s | EhViewer` template
- **`rel="noopener noreferrer"`** on all external links

---

*Report generated June 7, 2026 by SEO Audit — 5 parallel specialist agents (Technical, Content, Schema, Sitemap, GEO)*
