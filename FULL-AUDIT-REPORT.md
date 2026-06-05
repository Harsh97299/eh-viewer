# EhViewer — Full SEO Audit Report

**Audit Date:** June 6, 2026
**Site:** EhViewer — Free Manga Reader for Android & iOS
**URL:** https://ehviewer.app (audited via localhost:3000)
**Framework:** Next.js 16.2.6, React 19, Tailwind CSS v4
**Business Type:** Software / Mobile App
**Pages Audited:** 6 — `/`, `/about`, `/contact`, `/download`, `/faq`, `/privacy-policy`

---

## Executive Summary

### SEO Health Score: 58 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 52/100 | 11.4 |
| Content Quality | 23% | 64/100 | 14.7 |
| On-Page SEO | 20% | 62/100 | 12.4 |
| Schema / Structured Data | 10% | 65/100 | 6.5 |
| Performance (CWV) | 10% | 60/100 | 6.0 |
| AI Search Readiness | 10% | 54/100 | 5.4 |
| Images | 5% | 40/100 | 2.0 |
| **Total** | **100%** | | **58.4** |

### Top 5 Critical Issues

1. **No robots.txt** — crawlers have no guidance, no sitemap reference, no AI crawler rules
2. **No sitemap.xml** — search engines must discover pages solely through link crawling
3. **No security HTTP headers** — zero security headers set (CSP, HSTS, X-Frame-Options, etc.)
4. **Contact form is non-functional** — server action is a no-op; submitted messages are silently dropped
5. **Missing H1 tags** on `/download` and `/faq` — two highest-intent pages lack primary headings

### Top 5 Quick Wins

1. Create `app/robots.ts` and `app/sitemap.ts` (30 min, Critical impact)
2. Add H1 to `/download` and `/faq` pages (15 min, High impact)
3. Fix Footer "Source Code" link to point to GitHub (2 min, Medium impact)
4. Remove deprecated `keywords` meta tag from layout.tsx (2 min, Low impact)
5. Fix grammar error on `/about` page (2 min, Low impact)

---

## 1. Technical SEO

**Score: 52/100**

### CRITICAL

| # | Issue | Details |
|---|-------|---------|
| T-C1 | No robots.txt | No `app/robots.ts` or `public/robots.txt` exists. APK files in `/downloads/` are crawlable, wasting crawl budget. |
| T-C2 | No sitemap.xml | No `app/sitemap.ts` or static sitemap. All 6 pages must be discovered by link crawling only. |
| T-C3 | No security headers | Zero security headers: no CSP, no X-Frame-Options, no X-Content-Type-Options, no HSTS, no Referrer-Policy, no Permissions-Policy. |

### HIGH

| # | Issue | Details |
|---|-------|---------|
| T-H1 | OG image missing | `layout.tsx` references `/og-image.png` but the file does not exist in `public/`. All social shares show a broken image. |
| T-H2 | `<a>` instead of `<Link>` | Navbar and Footer use plain `<a href>` for all internal links — no route prefetching, full page reloads, loss of App Router shared layout caching. Hurts INP. |
| T-H3 | No canonical tags | No page declares `alternates.canonical`. If `www` and non-`www` versions resolve, Google must guess the canonical. |
| T-H4 | AnimateIn CLS risk | All major content sections start with `opacity-0` + translateY via the `AnimateIn` client component. The opacity transition post-hydration risks CLS in the 0.1–0.25 range. |

### MEDIUM

| # | Issue | Details |
|---|-------|---------|
| T-M1 | `background-attachment: fixed` on body | Disables GPU compositing on iOS Safari and Chrome Android — causes full-page repaints on scroll. Hurts INP. |
| T-M2 | Scroll listeners + multiple setIntervals | Homepage runs 2 concurrent `setInterval` timers (testimonials 2s, PhoneMockup 2.5s) plus a Framer Motion scroll listener. Combined main-thread pressure. |
| T-M3 | Apple touch icon is SVG | `layout.tsx` sets `icons.apple` to an SVG. Some iOS versions don't support SVG apple-touch-icons — should be 180x180 PNG. |

### LOW

| # | Issue | Details |
|---|-------|---------|
| T-L1 | No IndexNow protocol | No IndexNow API key for Bing/Yandex instant URL submission. |
| T-L2 | `keywords` meta tag populated | Google has ignored this since 2009. Wastes bytes and is used as a spam signal. |

### What's Working Well

- `metadataBase` correctly set to `https://ehviewer.app`
- Viewport meta tag properly configured
- `display: "swap"` on Geist font prevents FOIT
- `prefers-reduced-motion` media query suppresses all animations (accessibility + CLS mitigation)
- All external links use `rel="noopener noreferrer"`
- FAQ accordion keeps answers in DOM when closed (`grid-rows-[0fr]`) — crawlers can read all content
- Server-side rendering for all page content via App Router

---

## 2. Content Quality & E-E-A-T

**Score: 64/100**

### Overall E-E-A-T: 56/100

| Dimension | Score | Key Gap |
|-----------|-------|---------|
| Experience | 44/80 | Testimonials appear fabricated; no verifiable user identities |
| Expertise | 55/100 | Good technical detail on /download; weak on /about |
| Authoritativeness | 51/100 | No external reviews, press, or GitHub stats cited |
| Trustworthiness | 82/120 | Open-source is strong; broken contact form is critical weakness |

### Page-by-Page Content Scores

| Page | Content | E-E-A-T | Word Count | Status |
|------|---------|---------|------------|--------|
| `/` (Homepage) | 74 | 61 | ~700 | PASS |
| `/about` | 52 | 38 | ~320 | THIN CONTENT |
| `/contact` | 68 | 55 | ~220 | THIN |
| `/download` | 81 | 70 | ~600+ | STRONG |
| `/faq` | 72 | 60 | ~500 | PASS |
| `/privacy-policy` | 78 | 72 | ~650 | STRONG |

### CRITICAL

| # | Issue | Details |
|---|-------|---------|
| C-C1 | Contact form is non-functional | Server action at `app/contact/page.tsx:15-22` has only a TODO comment. Messages are silently dropped. Direct E-E-A-T trust violation. |

### HIGH

| # | Issue | Details |
|---|-------|---------|
| C-H1 | `/about` is thin content | ~320 words with no named contributors, dates, GitHub stats, or project timeline. Lowest E-E-A-T score (38/100). |
| C-H2 | Fabricated testimonials | 12 testimonials with unverifiable names (Kenji, Aisha, Marco) and generic avatars. Under Sept 2025 QRG, fake reviews are a direct trust violation. |
| C-H3 | AggregateRating unsubstantiated | Schema claims 4.8 stars / 9,400 ratings but no source is cited on-page. Google may treat this as spammy structured data. |
| C-H4 | "2M+ readers" claim unverified | No external source or evidence. AI systems will not cite this as fact. |
| C-H5 | Missing H1 on /download | Highest-intent page has no H1 tag — only H2s from child components. |
| C-H6 | Missing H1 on /faq | FAQSection renders H2 only. No H1 exists on the page. |

### MEDIUM

| # | Issue | Details |
|---|-------|---------|
| C-M1 | iOS "Coming Soon" misleading | Download page has full iOS installation guide for an app that doesn't exist yet. |
| C-M2 | Homepage says "Android & iOS" | Title/meta says both platforms but iOS isn't available — expectation mismatch. |
| C-M3 | H3 misused in testimonials | `<h3>` wraps testimonial quote text instead of `<blockquote>` — semantic noise. |
| C-M4 | Grammar error on /about | "EhViewer is open source means fans helping fans" — should be "being open source." |
| C-M5 | Meta description too long on /download | 196 characters — will be truncated around 155-160 in SERPs. |
| C-M6 | support@ehviewer.app only on /privacy-policy | Only contact email on the site, not shown on /contact page. |

### LOW

| # | Issue | Details |
|---|-------|---------|
| C-L1 | No inline links from FAQ answers to /download | FAQ answers reference the download page but don't link to it. |
| C-L2 | No contextual links from homepage to /about, /contact, /privacy-policy | These pages get zero editorial link equity from the main content. |
| C-L3 | Footer "Source Code" points to /download | Should link to GitHub repository. |

---

## 3. On-Page SEO

**Score: 62/100**

### Title Tags

| Page | Title | Length | Verdict |
|------|-------|--------|---------|
| `/` | EhViewer — Free Manga Reader for Android & iOS | 48 | GOOD |
| `/about` | About EhViewer — Free Open-Source Manga Reader \| EhViewer | ~58 | GOOD |
| `/contact` | Contact EhViewer — Reach the Team & Community \| EhViewer | ~57 | GOOD |
| `/download` | Download EhViewer 1.14.6 APK — Free Manga Reader \| EhViewer | ~60 | EXCELLENT |
| `/faq` | EhViewer FAQ — Install, Offline Reading & Privacy \| EhViewer | ~60 | GOOD |
| `/privacy-policy` | EhViewer Privacy Policy — Privacy-First Manga Reader \| EhViewer | ~64 | SLIGHTLY LONG |

### Meta Descriptions

| Page | Length | Verdict |
|------|--------|---------|
| `/` | 169 | SLIGHTLY LONG — trim ~15 chars |
| `/about` | 146 | GOOD |
| `/contact` | 106 | SHORT — expand to ~150 |
| `/download` | 196 | TOO LONG — truncated in SERPs |
| `/faq` | 145 | GOOD |
| `/privacy-policy` | 127 | SLIGHTLY SHORT |

### Heading Structure

| Page | H1 | Status |
|------|----|--------|
| `/` | "EhViewer: Read Manga Anytime, Anywhere." | PASS |
| `/about` | "About EhViewer" | PASS (sparse) |
| `/contact` | "Contact EhViewer" | PASS |
| `/download` | **MISSING** | FAIL |
| `/faq` | **MISSING** | FAIL |
| `/privacy-policy` | "Privacy Policy" | PASS (generic) |

### Internal Linking

- Navbar links: Home, About, Contact, FAQ, Privacy Policy (no Download in main nav)
- Footer links cover all pages + external GitHub links
- CTA buttons on / and /about link to /download
- FAQ answers reference /download but don't link to it
- No breadcrumb navigation on any page

---

## 4. Schema & Structured Data

**Score: 65/100**

### What Exists

| Schema | Page(s) | Status |
|--------|---------|--------|
| SoftwareApplication | `/` | Present but **incomplete** — missing `url`, `downloadUrl`, `softwareVersion`, `image`, `datePublished` |
| FAQPage | All 6 pages | Present via FAQSection — **duplicated** on pages where FAQ is not primary content |

### Validation Issues

| Issue | Severity |
|-------|----------|
| SoftwareApplication missing `url`, `downloadUrl`, `softwareVersion`, `image` | HIGH — blocks App rich result card |
| FAQPage duplicated on /contact, /privacy-policy, /about, /download | HIGH — schema noise on non-FAQ pages |
| FAQSection is `'use client'` — JSON-LD injected after hydration | MEDIUM — server-rendering is more reliable for crawlers |
| Google restricted FAQPage rich results to govt/health sites (Aug 2023) | INFO — still valuable for AI/GEO |

### Missing Schema Opportunities

| Schema | Page | Priority | Impact |
|--------|------|----------|--------|
| WebSite with SearchAction | Layout (all pages) | HIGH | Sitelinks Searchbox eligibility |
| Organization | `/about` | HIGH | Knowledge Panel entity eligibility |
| BreadcrumbList | All inner pages | HIGH | Breadcrumb rich results in SERPs |
| HowTo | `/download` | HIGH | How-to rich results for installation guides |
| ContactPage | `/contact` | MEDIUM | Semantic page typing |

---

## 5. Performance

**Score: 60/100**

### CWV Risk Assessment

| Metric | Risk | Primary Driver |
|--------|------|----------------|
| LCP | MEDIUM | PhoneMockup is client-rendered; first screenshot not preloaded; 8 images fetched eagerly |
| INP | LOW-MEDIUM | 2 concurrent setIntervals + scroll listener + `background-attachment: fixed` on mobile |
| CLS | LOW-MEDIUM | `AnimateIn` opacity-0 transitions; missing `width`/`height` on `<img>` elements |

### HIGH Impact Issues

| # | Issue | Details |
|---|-------|---------|
| P-H1 | PhoneMockup loads all 8 screenshots | All 8 `<img>` elements rendered eagerly with no `loading` attribute. Only 1 is visible. |
| P-H2 | `motion` library (~60-80 kB gzipped) | Imported solely for one scroll-driven 3D tilt effect in ProcessSection. Could be CSS-only. |
| P-H3 | OG image missing | `/og-image.png` referenced but doesn't exist — broken social share previews. |

### MEDIUM Impact Issues

| # | Issue | Details |
|---|-------|---------|
| P-M1 | `@tabler/icons-react` not in `optimizePackageImports` | `next.config.ts` optimizes `lucide-react` but not Tabler — may include full icon set. |
| P-M2 | `background-attachment: fixed` on body | Disables GPU compositing on mobile, causes full-page repaints on scroll. |
| P-M3 | No preload for LCP image | PhoneMockup is a client component — Next.js can't auto-detect the LCP image for preload. |
| P-M4 | JSON-LD in client component | FAQSection emits JSON-LD via `dangerouslySetInnerHTML` in a `'use client'` component. |

### LOW Impact Issues

| # | Issue | Details |
|---|-------|---------|
| P-L1 | No `loading="lazy"` on below-fold images | HeroSection avatars (10 images), testimonial avatars (12 images), ProcessSection screenshot. |
| P-L2 | No `width`/`height` attributes on `<img>` | Uses Tailwind classes for sizing; browser can't infer dimensions during HTML parsing. |
| P-L3 | `will-change: transform` applied broadly | CSS selector matches all float-animated elements simultaneously — excessive GPU layer promotion. |

### What's Working Well

- Zero third-party scripts (no analytics, tag managers, ad networks, or chat widgets)
- All images use WebP format
- `next/font` with `display: "swap"`, `preload: true`, `adjustFontFallback: true`
- Only one font family loaded (Geist Sans, Latin subset)
- No imported third-party CSS

---

## 6. AI Search Readiness (GEO)

**Score: 54/100**

### GEO Dimension Breakdown

| Dimension | Score |
|-----------|-------|
| Citability | 62/100 |
| Structural Readability | 58/100 |
| Multi-Modal Content | 40/100 |
| Authority & Brand Signals | 50/100 |
| Technical Accessibility | 55/100 |

### Platform-Specific Scores

| Platform | Score | Key Gap |
|----------|-------|---------|
| Google AI Overviews | 52/100 | Missing HowTo schema, FAQ answers too short, no sitemap |
| ChatGPT (web search) | 48/100 | No llms.txt, no Wikipedia entity, sparse brand mentions |
| Perplexity | 55/100 | Good SSR, but explicit Allow needed in robots.txt |
| Bing Copilot | 50/100 | Missing Organization schema, no BreadcrumbList, no OG image |

### Key Findings

| # | Issue | Severity |
|---|-------|----------|
| G-1 | No `llms.txt` file | HIGH — single highest-leverage missing asset for GEO |
| G-2 | No AI crawler rules in robots.txt | HIGH — no explicit Allow for GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot |
| G-3 | FAQ answers too short for AI citation | HIGH — all 9 answers are under 45 words; optimal is 134-167 words |
| G-4 | No HowTo schema on /download | HIGH — installation steps are perfectly structured but carry no schema |
| G-5 | No Organization schema | MEDIUM — no entity record for AI models |
| G-6 | Brand casing inconsistent | MEDIUM — "EhViewer" vs "Ehviewer" vs "Ehviewer-Overhauled" across pages |
| G-7 | No sitemap with `lastmod` dates | MEDIUM — freshness signals missing for AI crawlers |

### Strengths

- Server-side rendering ensures all content is in initial HTML for AI crawlers
- SoftwareApplication + FAQPage schemas provide structured data for extraction
- Download page has version-specific, dated, changelog content with issue numbers — highly citable
- Privacy policy has clear declarative statements — strong citation candidates
- Zero third-party scripts means fast, clean page loads for crawlers

---

## 7. Images

**Score: 40/100**

| # | Issue | Severity |
|---|-------|---------|
| I-1 | OG image (`/og-image.png`) doesn't exist | HIGH |
| I-2 | PhoneMockup loads 8 screenshots eagerly | HIGH |
| I-3 | Native `<img>` used instead of `next/image` in PhoneMockup, HeroSection, testimonials | MEDIUM |
| I-4 | No `loading="lazy"` on ~22 below-fold images | MEDIUM |
| I-5 | No `width`/`height` attributes on decorative images | MEDIUM |
| I-6 | ProcessSection screenshot not lazy-loaded | LOW |

### Strengths

- All user-facing images are WebP format
- SVGs used for logo assets (correct choice)
- Decorative images use `alt=""` per WCAG

---

## Prioritized Action Plan

### CRITICAL (Fix Immediately)

| # | Action | Files | Effort | Impact |
|---|--------|-------|--------|--------|
| 1 | Create `app/robots.ts` with sitemap reference and `/downloads/` disallow | New file | 15 min | Crawlability |
| 2 | Create `app/sitemap.ts` with all 6 routes + `lastmod` dates | New file | 15 min | Indexation |
| 3 | Add security headers in `next.config.ts` (CSP, HSTS, X-Frame-Options, etc.) | `next.config.ts` | 30 min | Security |
| 4 | Fix or remove the contact form — implement email delivery or replace with direct GitHub link | `app/contact/page.tsx` | 2 hrs | Trust/E-E-A-T |

### HIGH (Fix Within 1 Week)

| # | Action | Files | Effort | Impact |
|---|--------|-------|--------|--------|
| 5 | Create `/public/og-image.png` (1200x630) | New file | 1 hr | Social/Discover |
| 6 | Add H1 to `/download` and `/faq` pages | `app/download/page.tsx`, `app/faq/page.tsx` | 15 min | On-Page SEO |
| 7 | Replace `<a>` with `<Link>` in Navbar and Footer for internal routes | `Navbar.tsx`, `Footer.tsx` | 20 min | Performance/UX |
| 8 | Fix SoftwareApplication schema — add `url`, `downloadUrl`, `softwareVersion`, `image`, `datePublished` | `app/page.tsx` | 15 min | Rich Results |
| 9 | Restrict FAQPage JSON-LD to `/faq` and `/` only | `FAQSection.tsx` or page files | 20 min | Schema Quality |
| 10 | Add canonical `alternates` to each page's metadata | All `page.tsx` files | 20 min | Indexation |
| 11 | Create `public/llms.txt` for AI search readiness | New file | 30 min | GEO |
| 12 | Add explicit AI crawler Allow rules to robots.txt | `app/robots.ts` | 10 min | GEO |
| 13 | Expand FAQ answers to 134-167 words each | `components/faqData.ts` | 2-3 hrs | GEO/Content |
| 14 | Replace fabricated testimonials with verifiable reviews | `AnimatedTestimonialSection.tsx` | 2 hrs | E-E-A-T |

### MEDIUM (Fix Within 1 Month)

| # | Action | Files | Effort | Impact |
|---|--------|-------|--------|--------|
| 15 | Expand `/about` page — add contributors, GitHub stats, project timeline | `app/about/page.tsx` | 3 hrs | E-E-A-T/Content |
| 16 | Add WebSite schema to `app/layout.tsx` | `app/layout.tsx` | 15 min | Rich Results |
| 17 | Add Organization schema to `/about` | `app/about/page.tsx` | 15 min | Entity/KP |
| 18 | Add BreadcrumbList schema to all inner pages | All inner `page.tsx` | 30 min | Rich Results |
| 19 | Add HowTo schema to `/download` for installation guides | `app/download/page.tsx` | 30 min | Rich Results |
| 20 | Replace `motion` library with CSS-only scroll animation | `container-scroll-animation.tsx` | 2 hrs | Performance |
| 21 | Add `optimizePackageImports: ["@tabler/icons-react"]` to next.config | `next.config.ts` | 2 min | Bundle Size |
| 22 | Remove `background-attachment: fixed` from body | `app/globals.css` | 5 min | Mobile INP |
| 23 | Add `loading="lazy"` to below-fold images; `fetchpriority="high"` to LCP image | Multiple components | 30 min | LCP/Performance |
| 24 | Add `width`/`height` attributes to all `<img>` elements | Multiple components | 20 min | CLS |
| 25 | Surface support@ehviewer.app on `/contact` page | `app/contact/page.tsx` | 5 min | Trust |
| 26 | Remove or clearly label the iOS installation guide as "coming soon" | `DownloadDetails.tsx` | 10 min | Accuracy |
| 27 | Move FAQ JSON-LD to server component (not `'use client'`) | `FAQSection.tsx` | 30 min | Crawler reliability |

### LOW (Backlog)

| # | Action | Files | Effort | Impact |
|---|--------|-------|--------|--------|
| 28 | Remove `keywords` meta tag from layout | `app/layout.tsx` | 2 min | Cleanup |
| 29 | Fix grammar error on /about ("is open source means") | `app/about/page.tsx` | 2 min | Trust |
| 30 | Fix Footer "Source Code" link to GitHub | `Footer.tsx` | 2 min | Accuracy |
| 31 | Trim meta descriptions on `/` (169 chars) and `/download` (196 chars) | `app/page.tsx`, `app/download/page.tsx` | 5 min | SERP display |
| 32 | Add inline links from FAQ answers to /download | `faqData.ts` | 10 min | Internal linking |
| 33 | Add IndexNow key and deployment webhook | New files + deploy config | 30 min | Bing indexation |
| 34 | Substantiate or remove 4.8/9400 AggregateRating | `app/page.tsx` | 10 min | Schema trust |
| 35 | Add ContactPage schema to `/contact` | `app/contact/page.tsx` | 10 min | Semantic typing |

---

## What's Already Well-Implemented

- **Zero third-party scripts** — no analytics, tag managers, ads, or chat widgets. Cleanest performance profile possible.
- **All images in WebP format** — excellent format choice for modern browsers.
- **Server-side rendering** via Next.js App Router — all content visible to crawlers in initial HTML.
- **Geist font** loaded with `display: "swap"`, `preload: true`, `adjustFontFallback: true` — best-practice font loading.
- **FAQ accordion** keeps answers in DOM when closed — crawlers can read all content.
- **`prefers-reduced-motion`** media query suppresses all animations — accessibility and CLS win.
- **Unique title tags and meta descriptions** on every page with consistent `%s | EhViewer` template.
- **`rel="noopener noreferrer"`** on all external links.
- **Privacy policy** is thorough, dated, and includes a direct contact email.
- **Download page** has excellent technical specificity — version numbers, architecture variants, changelog with issue references.

---

*Report generated by SEO Audit — 5 parallel specialist agents (Technical, Content, Schema, Performance, GEO)*
