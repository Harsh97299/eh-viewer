import { Bug, MessageCircle } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimateIn from "../../components/AnimateIn";
import FAQSection from "../../components/FaqSection";

export const metadata = {
  title: "Contact EhViewer — Reach the Team & Community",
  description:
    "Get in touch with the EhViewer project — send a message or reach the maintainers and community on GitHub.",
};

// Inline server action keeps this page server-rendered. Structure only for now —
// wire an email service (Resend, SMTP, etc.) where the TODO is marked.
async function submitContact(formData: FormData) {
  "use server";
  // TODO: deliver the message via an email service.
  // const name = formData.get('name')
  // const email = formData.get('email')
  // const subject = formData.get('subject')
  // const message = formData.get('message')
}

const inputClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground " +
  "placeholder:text-text-faint outline-none transition-colors focus:border-blue " +
  "focus:ring-2 focus:ring-blue/20";

const labelClasses = "block text-[13px] font-medium text-foreground mb-1.5";

const githubCards = [
  {
    icon: Bug,
    title: "Report a bug",
    description:
      "Found something broken in EhViewer? Open an issue with your Android version and steps to reproduce — every report helps the whole community.",
    label: "Open an issue",
    href: "https://github.com/Ehviewer-Overhauled/Ehviewer/issues/new/choose",
  },
  {
    icon: MessageCircle,
    title: "Ask a question",
    description:
      "Have a question or a feature idea for EhViewer? Start a thread in GitHub Discussions and chat with fellow readers.",
    label: "Go to Discussions",
    href: "https://github.com/Ehviewer-Overhauled/Ehviewer/discussions",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero + form */}
        <section className="px-6 pt-36 pb-20 relative overflow-hidden">
          {/* Ambient glows — multicolor */}
          <div className="absolute -top-10 right-1/4 w-96 h-96 rounded-full bg-blue/20 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/6 w-80 h-80 rounded-full bg-red/15 blur-[110px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-yellow/12 blur-[100px] pointer-events-none" />
          <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-green/10 blur-[110px] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <AnimateIn>
              <p className="text-sm font-semibold text-blue tracking-[0.12em] uppercase mb-4">
                Get in Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
                Contact{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue via-green to-red">
                  EhViewer
                </span>
              </h1>
              <p className="mt-6 text-text-muted leading-relaxed max-w-xl">
                EhViewer is built by the community, for the community. Send a
                message below, or reach the maintainers directly on GitHub —
                feedback, ideas, and bug reports are always welcome.
              </p>
            </AnimateIn>

            <AnimateIn delay={100}>
              <form action={submitContact} className="mt-10 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={labelClasses}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What's this about?"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us more…"
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-blue text-white font-semibold text-[15px]
                             shadow-[0_8px_28px_rgba(69,134,243,0.3)] hover:bg-blue-hover
                             hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
                >
                  Send message
                </button>
              </form>
            </AnimateIn>
          </div>
        </section>

        {/* GitHub */}
        <section className="px-6 py-24 bg-surface relative overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute -top-20 right-1/5 w-96 h-96 rounded-full bg-red/8 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/5 w-80 h-80 rounded-full bg-blue/10 blur-[110px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <AnimateIn className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-blue tracking-[0.12em] uppercase mb-4">
                Prefer GitHub?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Reach the EhViewer maintainers
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                File issues or start a discussion directly on the EhViewer
                repository — that is where the community lives.
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-3xl mx-auto">
              {githubCards.map(
                ({ icon: Icon, title, description, label, href }, i) => (
                  <AnimateIn key={title} delay={i * 100}>
                    <div
                      className="rounded-[28px] bg-background border border-border p-7 h-full
                                 shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                                 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]
                                 hover:-translate-y-2.5 transition-all duration-300
                                 flex flex-col"
                    >
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-blue/10">
                        <Icon size={22} className="text-blue" strokeWidth={2} />
                      </div>
                      <h3 className="text-[17px] font-bold text-foreground mb-2 tracking-tight">
                        {title}
                      </h3>
                      <p className="text-[14px] text-text-muted leading-relaxed flex-1">
                        {description}
                      </p>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-block w-fit px-5 py-2.5 rounded-full border border-border
                                   text-foreground text-sm font-semibold hover:bg-surface transition-colors"
                      >
                        {label}
                      </a>
                    </div>
                  </AnimateIn>
                ),
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
