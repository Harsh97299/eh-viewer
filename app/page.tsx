import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/features-section-demo-2";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/AnimatedTestimonialSection";
import DownloadCTA from "../components/DownloadCTA";
import FAQSection from "../components/FAQSection";
import { generalFaqs } from "../components/faqData";
import Footer from "../components/Footer";

// Home shows a curated 3 — the full set lives on /faq.
const homeFaqs = [generalFaqs[0], generalFaqs[1], generalFaqs[3]];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EhViewer",
  applicationCategory: "BookApplication",
  operatingSystem: "Android, iOS",
  description:
    "EhViewer is a free, open-source manga & anime comic reader for Android. Huge catalog, offline downloads, zoom reading, customizable themes, and privacy-first browsing.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  license: "https://www.gnu.org/licenses/gpl-3.0.html",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "9400",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <TestimonialsSection />
        <DownloadCTA />
        <FAQSection items={homeFaqs} viewAllHref="/faq" />
        <Footer />
      </main>
    </>
  );
}
