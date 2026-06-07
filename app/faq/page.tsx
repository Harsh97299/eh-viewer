import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FAQSection from "../../components/FaqSection";

export const metadata = {
  title: "EhViewer FAQ — Install, Offline Reading & Privacy",
  description:
    "Answers to common EhViewer questions — what EhViewer is, pricing, supported devices, installing the APK, offline reading, privacy, and updates.",
  alternates: { canonical: "https://ehviewer.io/faq" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ehviewer.io" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://ehviewer.io/faq" },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main className="overflow-x-hidden pt-12">
        <h1 className="sr-only">EhViewer FAQ — Frequently Asked Questions</h1>
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
