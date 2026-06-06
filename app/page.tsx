import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/features-section-demo-2";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/AnimatedTestimonialSection";
import DownloadCTA from "../components/DownloadCTA";
import FAQSection from "../components/FaqSection";
import Footer from "../components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EhViewer",
  url: "https://ehviewer.app",
  downloadUrl: "https://ehviewer.app/download",
  softwareVersion: "1.14.6",
  datePublished: "2025-12-17",
  applicationCategory: "BookApplication",
  operatingSystem: "Android",
  description:
    "EhViewer is a free, open-source manga & anime comic reader for Android. Huge catalog, offline downloads, zoom reading, customizable themes, and privacy-first browsing.",
  image: "https://ehviewer.app/launcher_icon-web.png",
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
        <FAQSection limit={3} />
        <Footer />
      </main>
    </>
  );
}
