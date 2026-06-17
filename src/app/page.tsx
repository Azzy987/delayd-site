import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BellRing,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Goal,
  HandCoins,
  Mail,
  ShieldCheck,
  Sparkles,
  WalletCards
} from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { ShaderBackdrop } from "@/components/ShaderBackdrop";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TiltCard } from "@/components/TiltCard";
import { Marquee } from "@/components/Marquee";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { StickySteps } from "@/components/StickySteps";
import { Accordion } from "@/components/Accordion";

/* ─── Data ─── */

const screens = {
  hero: "/assets/mockups/hero-impact-reveal-portrait.png",
  quickLog: "/assets/mockups/quick-log-expense-portrait.png",
  impact: "/assets/mockups/impact-reveal-result-portrait.png",
  home: "/assets/mockups/home-dashboard-portrait.png",
  plan: "/assets/mockups/dream-plan-portrait.png",
  protect: "/assets/mockups/protect-dream-portrait.png",
  history: "/assets/mockups/history-timeline-portrait.png"
};

const howItWorks: Array<{ icon: LucideIcon; title: string; copy: string; screen: string }> = [
  {
    icon: WalletCards,
    title: "Log a purchase",
    copy: "Add the spend before it becomes automatic. Pick the dream it touches and enter the amount.",
    screen: screens.quickLog
  },
  {
    icon: Clock3,
    title: "Feel the delay",
    copy: "Delayd turns the amount into days moved away from the future you are building.",
    screen: screens.impact
  },
  {
    icon: HandCoins,
    title: "Protect the dream",
    copy: "If you pause, record the money you kept aside and watch the dream move closer again.",
    screen: screens.protect
  }
];

const features: Array<{ icon: LucideIcon; title: string; copy: string }> = [
  {
    icon: CalendarClock,
    title: "Dream-date math",
    copy: "See how one purchase shifts a target date, instead of staring at another expense category."
  },
  {
    icon: Sparkles,
    title: "A better pause",
    copy: "A short reveal gives your brain one clear second before an impulse becomes a habit."
  },
  {
    icon: Goal,
    title: "Goal-first setup",
    copy: "Start with the thing you want, then let spending decisions answer to that vision."
  },
  {
    icon: ShieldCheck,
    title: "Private by default",
    copy: "Designed around intentional inputs and clear outcomes, with no bank connection required at launch."
  }
];

const showcase = [
  {
    src: screens.home,
    label: "Home",
    title: "Your dream, in view",
    copy: "A calm dashboard keeps progress, delays, and saved momentum in one place."
  },
  {
    src: screens.quickLog,
    label: "Log",
    title: "Fast enough for real life",
    copy: "Add the amount, keep the goal linked, and get back to the moment."
  },
  {
    src: screens.impact,
    label: "Reveal",
    title: "The tradeoff lands",
    copy: "Delayd shows the cost in days, because days are harder to ignore than totals."
  },
  {
    src: screens.plan,
    label: "Plan",
    title: "Track the dream itself",
    copy: "See saved amount, target, days left, and how spending changed the timeline."
  },
  {
    src: screens.protect,
    label: "Protect",
    title: "Make the pause count",
    copy: "Record the money you chose not to spend and turn restraint into visible progress."
  },
  {
    src: screens.history,
    label: "History",
    title: "Remember what moved",
    copy: "Review past spends as timeline shifts, not as a guilt-heavy transaction list."
  }
];

const faqs: Array<{ question: string; answer: React.ReactNode }> = [
  {
    question: "What exactly is Delayd?",
    answer: (
      <>
        Delayd is a <strong>decision tool</strong>, not an expense tracker. Instead of
        categorizing your spending after the fact, it intervenes at the{" "}
        <strong>moment of decision</strong> — showing you how a purchase shifts the timeline
        of a dream you&apos;re saving for. Think of it as a{" "}
        <strong>one-second pause</strong> that makes tradeoffs visible before money leaves.
      </>
    )
  },
  {
    question: "How is Delayd different from a budgeting app?",
    answer: (
      <>
        Budget apps tell you what already happened — Delayd helps you{" "}
        <strong>before the spend</strong>. There are no categories to maintain, no sync
        issues, and no guilt-heavy reports. You simply see:{" "}
        <strong>&ldquo;This ₹2,000 dinner moves your Bali trip 6 days further away.&rdquo;</strong>{" "}
        That clarity changes behavior faster than any pie chart.
      </>
    )
  },
  {
    question: "Do I need to connect my bank account?",
    answer: (
      <>
        <strong>No.</strong> Delayd is designed around <strong>intentional, manual input</strong>.
        You log the spends that matter to you — the ones where a pause could make a difference.
        No bank credentials, no transaction scraping, no third-party data sharing.{" "}
        <strong>Your financial data stays yours.</strong>
      </>
    )
  },
  {
    question: 'What does "delayed by 2 days" actually mean?',
    answer: (
      <>
        Delayd compares your purchase against three things: your <strong>goal amount</strong>,
        your <strong>savings pace</strong>, and your <strong>target date</strong>. It then
        calculates how many days that spend pushes your dream further away. So
        &ldquo;delayed by 2 days&rdquo; means your goal&apos;s completion date just moved{" "}
        <strong>2 days into the future</strong> because of that purchase.
      </>
    )
  },
  {
    question: "What happens when I decide not to spend?",
    answer: (
      <>
        That&apos;s where <strong>Protect Dream</strong> comes in — Delayd&apos;s most powerful
        feature. When you resist an impulse purchase, you can{" "}
        <strong>record the money you kept aside</strong>. Instead of feeling like you&apos;re
        missing out, you watch your dream <strong>move closer</strong>. It turns restraint
        into <strong>visible, measurable progress</strong>.
      </>
    )
  },
  {
    question: "Is my data private and secure?",
    answer: (
      <>
        <strong>Absolutely.</strong> Delayd is built with a{" "}
        <strong>privacy-first architecture</strong>. Your dreams, spending logs, and progress
        data are designed to stay on your device and are not sold to advertisers. We
        don&apos;t require bank access. Apple and RevenueCat process purchase information when
        you use Delayd Pro, and MailerLite stores details you submit to the website waitlist.{" "}
        <strong>Your data exists to serve you, not us.</strong>
      </>
    )
  },
  {
    question: "Is Delayd free to use?",
    answer: (
      <>
        Delayd includes a core experience and also contains <strong>Delayd Pro</strong> options.
        The exact free features, trial terms, subscription plans, lifetime option, and prices
        are shown in the app before you purchase. Subscriptions are managed through your Apple ID.
      </>
    )
  },
  {
    question: "When can I get the app?",
    answer: (
      <>
        Delayd is currently in <strong>closed beta on iOS</strong>. Join the waitlist to
        get <strong>early access</strong>, launch updates, and the first invite when we
        open up. Android support is on the roadmap after the iOS launch.
      </>
    )
  }
];

const marqueeItems = [
  "Dream-focused saving",
  "No bank connection",
  "Privacy-first design",
  "iOS native app",
  "Real-time impact",
  "Goal tracking",
  "Impulse awareness",
  "Time-based clarity",
  "One-tap logging",
  "Protect your dreams"
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Delayd",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS",
  description:
    "Delayd converts spending into time delay toward dreams, helping people pause before everyday purchases move goals further away.",
  url: "https://www.delayd.app",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder"
  }
};

/* ─── Helpers ─── */

function SectionHeader({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <ScrollReveal>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-plum">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink md:text-5xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-8 text-muted md:text-lg">{copy}</p>
      </div>
    </ScrollReveal>
  );
}

function ImpactPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-card glass-card-hover rounded-2xl px-4 py-3">
      <p className="text-xs font-semibold uppercase text-plum">{label}</p>
      <p className="mt-1 text-sm font-semibold text-ink">{value}</p>
    </div>
  );
}

/* ─── Page ─── */

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ShaderBackdrop />
      <div className="noise" />
      <ScrollProgress />
      <BackToTop />

      {/* ─── Navigation ─── */}
      <header className="fixed left-0 right-0 top-[3px] z-50 border-b border-blush bg-paper/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="#top" className="flex items-center gap-3" aria-label="Delayd home">
            <Image src="/assets/logo.png" alt="" width={34} height={34} className="rounded-xl" />
            <span className="text-lg font-semibold text-ink">Delayd</span>
          </Link>
          <div className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            <Link className="transition duration-300 hover:text-ink" href="#how-it-works">
              How it works
            </Link>
            <Link className="transition duration-300 hover:text-ink" href="#screens">
              Screens
            </Link>
            <Link className="transition duration-300 hover:text-ink" href="#faq">
              FAQ
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="#waitlist"
              aria-label="Join the Delayd waitlist"
              className="btn-glow inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-grape to-blue-500 text-sm font-semibold text-white shadow-glow-btn transition hover:-translate-y-0.5 sm:h-auto sm:w-auto sm:px-5 sm:py-2.5"
            >
              <span className="hidden sm:inline">Join</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* ─── Hero ─── */}
        <section className="relative isolate min-h-screen overflow-hidden px-5 pb-16 pt-24 md:px-8 md:pb-20 lg:pt-28">
          <div className="ambient-glow" />

          <div className="relative mx-auto max-w-7xl lg:min-h-[690px]">
            <div className="relative z-20 w-full min-w-0 max-w-[22rem] animate-rise sm:max-w-3xl lg:w-[58%] lg:pt-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blush bg-cloud px-4 py-2 text-sm font-semibold text-plum shadow-glow animate-glow-pulse">
                <BellRing className="h-4 w-4" />
                iOS early access now open
              </div>

              {/* Headline */}
              <h1 className="mt-7 max-w-full text-[2.55rem] font-semibold leading-[1.04] tracking-normal text-ink sm:text-5xl md:text-7xl 2xl:text-8xl">
                <span className="block sm:inline">See what</span>{" "}
                <span className="block sm:inline gradient-text">spending costs</span>{" "}
                <span className="block sm:inline">your dreams.</span>
              </h1>

              <p className="mt-7 max-w-full text-base leading-8 text-muted sm:max-w-2xl sm:text-lg md:text-xl">
                Delayd turns everyday purchases into days moved away from the future you are
                building. Not guilt. A sharper pause before money leaves.
              </p>

              {/* Example card — animated gradient border */}
              <div className="mt-7 w-full max-w-full overflow-hidden rounded-[30px] animated-gradient-border p-3 shadow-soft sm:max-w-2xl">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <span className="inline-flex w-fit items-center gap-2 rounded-2xl bg-gradient-to-r from-grape to-blue-500 px-4 py-3 text-sm font-semibold text-white">
                    <Sparkles className="h-4 w-4" />
                    Example
                  </span>
                  <p className="min-w-0 max-w-full text-base font-semibold leading-7 text-ink md:text-lg">
                    That ₹2,000 impulse just moved Bali trip by 6 days.
                  </p>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <ImpactPill label="Dinner out" value="₹2,000 = 6 days" />
                  <ImpactPill label="Sneaker drop" value="₹8,000 = 24 days" />
                  <ImpactPill label="Protected" value="₹1,000 saved back" />
                </div>
              </div>

              {/* Hero waitlist */}
              <div className="mt-9 max-w-2xl" id="hero-waitlist">
                <WaitlistForm source="hero" />
              </div>
            </div>

            {/* Phone mockup with 3D tilt */}
            <div className="relative mx-auto mt-12 h-[560px] w-full max-w-[28rem] lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:h-[650px] lg:w-[42%] lg:max-w-none">
              <div className="absolute left-1/2 top-10 hidden h-72 w-72 -translate-x-1/2 rounded-full bg-grape/[0.15] blur-[80px] md:block" />
              <TiltCard className="relative z-10" tiltDegree={10}>
                <PhoneMockup
                  src={screens.hero}
                  alt="Delayd impact reveal showing a purchase delaying a dream"
                  label="₹2,000 = 6 days"
                  priority
                  className="max-w-[250px] animate-float md:max-w-[290px] xl:max-w-[310px]"
                />
              </TiltCard>
            </div>
          </div>
        </section>

        {/* ─── Marquee strip ─── */}
        <div className="py-6 md:py-8">
          <Marquee items={marqueeItems} speed={35} />
        </div>

        {/* ─── How it works (sticky scroll) ─── */}
        <section id="how-it-works" className="section-glow px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="How it works"
              title="A spending pause you can feel"
              copy="Delayd is built for the instant a purchase is still a choice. Log it, see the time cost, then decide what matters more."
            />
            <div className="mt-16">
              <StickySteps
                steps={howItWorks.map((item, i) => ({
                  icon: <item.icon className="h-6 w-6" />,
                  stepNumber: i + 1,
                  title: item.title,
                  copy: item.copy,
                  screen: item.screen
                }))}
              />
            </div>
          </div>
        </section>

        {/* ─── Feature highlights ─── */}
        <section className="section-glow px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
              <ScrollReveal variant="left">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-plum">
                    Feature highlights
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink md:text-5xl">
                    Less accounting. More intention.
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted">
                    Most money apps tell you what already happened. Delayd helps you pause while
                    the decision is still alive.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal
                stagger
                variant="scale"
                staggerDelay={90}
                className="grid gap-4 sm:grid-cols-2"
              >
                {features.map((feature) => (
                  <article
                    key={feature.title}
                    className="scroll-reveal-item rounded-[24px] glass-card glass-card-hover glow-border p-5"
                  >
                    <feature.icon className="h-6 w-6 text-plum" />
                    <h3 className="mt-4 text-xl font-semibold text-ink">{feature.title}</h3>
                    <p className="mt-2 leading-7 text-muted">{feature.copy}</p>
                  </article>
                ))}
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ─── Marquee strip (reversed) ─── */}
        <div className="py-4">
          <Marquee items={marqueeItems} reverse speed={45} />
        </div>

        {/* ─── App showcase ─── */}
        <section id="screens" className="section-glow overflow-hidden px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="App showcase"
              title="The real flow, from impulse to progress"
              copy="Actual app screens show the loop Delayd is built around: notice the spend, feel the delay, protect the dream, and keep moving."
            />
            <ScrollReveal
              stagger
              variant="scale"
              staggerDelay={90}
              className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {showcase.map((screen, index) => (
                <article
                  key={screen.src}
                  className="scroll-reveal-item group rounded-[30px] glass-card glass-card-hover glow-border p-5"
                >
                  <PhoneMockup
                    src={screen.src}
                    alt={screen.title}
                    label={screen.label}
                    className={index % 2 === 1 ? "max-w-[210px] md:mt-5" : "max-w-[210px]"}
                    frameClassName="group-hover:rotate-1"
                  />
                  <h3 className="mt-8 text-xl font-semibold text-ink">{screen.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{screen.copy}</p>
                </article>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Founder rationale ─── */}
        <section className="section-glow px-5 py-20 md:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              eyebrow="Why Delayd exists"
              title="Money is abstract. Time is personal."
              copy="Delayd started from a simple frustration: expense totals rarely change a decision in the moment, but seeing a dream move further away can."
            />
            <ScrollReveal variant="scale" className="mt-12">
              <div className="grid gap-8 rounded-[30px] border border-blush bg-cloud/80 p-6 shadow-card md:grid-cols-3 md:p-9">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-plum">The problem</p>
                  <p className="mt-3 leading-7 text-muted">Most finance tools explain spending after it happens, when the useful decision has already passed.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-plum">The intervention</p>
                  <p className="mt-3 leading-7 text-muted">Delayd translates a purchase into days so the tradeoff becomes concrete before money leaves.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-plum">The intention</p>
                  <p className="mt-3 leading-7 text-muted">No shame and no perfect-budget pressure. Just a clearer choice between the impulse and the vision.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="section-glow px-5 py-20 md:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Everything you need to know"
              copy="Straight answers about what Delayd is, how it works, and why it's different from every other money app."
            />
            <ScrollReveal variant="scale" className="mt-10">
              <Accordion items={faqs} />
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section id="waitlist" className="px-5 py-20 md:px-8">
          <ScrollReveal variant="scale">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-blush bg-gradient-to-br from-grape/20 via-cloud to-blue-500/10 p-6 shadow-soft md:p-10">
              <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-2 text-sm font-semibold text-ink backdrop-blur">
                    <Mail className="h-4 w-4" />
                    Launch note only
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold tracking-normal text-ink md:text-5xl">
                    Be first when Delayd reaches the App Store.
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted">
                    Get launch timing, early access updates, and the first invite when the iOS
                    app is ready.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
                    {["No spam", "iOS first", "Unsubscribe anytime"].map((item) => (
                      <span key={item} className="inline-flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-mint" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <WaitlistForm source="final-cta" />
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-blush px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/logo.png"
                  alt=""
                  width={34}
                  height={34}
                  className="rounded-xl"
                />
                <span className="text-lg font-semibold text-ink">Delayd</span>
              </div>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
                See what spending costs your dreams. A sharper pause for every purchase.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-ink">Product</h4>
              <ul className="mt-3 space-y-2.5 text-sm text-muted">
                <li>
                  <Link href="#how-it-works" className="transition hover:text-ink">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="#screens" className="transition hover:text-ink">
                    App screens
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="transition hover:text-ink">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#waitlist" className="transition hover:text-ink">
                    Join waitlist
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-ink">Legal</h4>
              <ul className="mt-3 space-y-2.5 text-sm text-muted">
                <li>
                  <Link href="/privacy" className="transition hover:text-ink">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="transition hover:text-ink">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-ink">Get in touch</h4>
              <ul className="mt-3 space-y-2.5 text-sm text-muted">
                <li>
                  <a
                    href="mailto:droidates@gmail.com"
                    className="transition hover:text-ink"
                  >
                    droidates@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-blush pt-8 text-xs text-muted md:flex-row">
            <p>&copy; {new Date().getFullYear()} Delayd. All rights reserved.</p>
            <p>See where your choices move you.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
