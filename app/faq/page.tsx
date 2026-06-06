import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FAQSection from "../../components/FaqSection";

export const metadata = {
  title: "EhViewer FAQ — Install, Offline Reading & Privacy",
  description:
    "Answers to common EhViewer questions — what EhViewer is, pricing, supported devices, installing the APK, offline reading, privacy, and updates.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden pt-12">
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
