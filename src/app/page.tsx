import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BellRing,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Goal,
  HandCoins,
  Mail,
  ShieldCheck,
  Sparkles,
  WalletCards
} from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { WaitlistForm } from "@/components/WaitlistForm";

const screens = {
  hero: "/assets/screens/hero-impact-reveal.png",
  quickLog: "/assets/screens/quick-log-expense.png",
  impact: "/assets/screens/impact-reveal-result.png",
  home: "/assets/screens/home-dashboard.png",
  plan: "/assets/screens/dream-plan.png",
  protect: "/assets/screens/protect-dream.png",
  history: "/assets/screens/history-timeline.png"
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

const testimonials = [
  {
    quote:
      "Seeing a purchase turn into days lost made the decision feel real. I closed the cart without feeling judged.",
    name: "Aarav",
    role: "Saving for travel",
    initials: "AR"
  },
  {
    quote:
      "I have tried trackers before. Delayd is different because it catches me before the spend, not after the damage.",
    name: "Meera",
    role: "Early product tester",
    initials: "MK"
  },
  {
    quote:
      "The Protect Dream idea is what sold me. It makes saying no feel like moving toward something, not missing out.",
    name: "Rohan",
    role: "Goal-first saver",
    initials: "RS"
  }
];

const faqs = [
  {
    question: "Is Delayd an expense tracker?",
    answer:
      "No. Delayd is a decision tool. It does not try to categorize your whole financial life; it shows how a spend affects the dream you care about."
  },
  {
    question: "Do I need to connect my bank?",
    answer:
      "No bank connection is required for the launch experience. You choose what to log, and the app focuses on the moments that matter."
  },
  {
    question: "What does “delayed by 2 days” mean?",
    answer:
      "Delayd compares the spend against your goal amount, savings pace, and target date, then turns that tradeoff into a simple time shift."
  },
  {
    question: "Can Delayd help when I decide not to spend?",
    answer:
      "Yes. Protect Dream lets you record money kept aside, so a paused purchase can feel like progress instead of deprivation."
  },
  {
    question: "Who is Delayd for?",
    answer:
      "People who are not looking for another spreadsheet, but want a sharper pause before small purchases quietly push a dream further away."
  },
  {
    question: "When will the iOS app launch?",
    answer:
      "Join the waitlist and you will get the launch note, early access updates, and the first invite when the iOS app is ready."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Delayd",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS",
  description:
    "Delayd converts spending into time delay toward dreams, helping people pause before everyday purchases move goals further away.",
  url: "https://delayd.app",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder"
  }
};

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
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-grape">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-muted md:text-lg">{copy}</p>
    </div>
  );
}

function ImpactPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/75 px-4 py-3 shadow-card backdrop-blur transition hover:-translate-y-0.5 hover:bg-white">
      <p className="text-xs font-semibold uppercase text-grape">{label}</p>
      <p className="mt-1 text-sm font-semibold text-ink">{value}</p>
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_20%,#fff,rgba(122,77,243,0.16)_38%,#7A4DF3)] text-sm font-bold text-plum ring-4 ring-white">
      {initials}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="noise" />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/50 bg-paper/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="#top" className="flex items-center gap-3" aria-label="Delayd home">
            <Image src="/assets/logo.png" alt="" width={34} height={34} className="rounded-xl" />
            <span className="text-lg font-semibold text-ink">Delayd</span>
          </Link>
          <div className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            <Link className="transition hover:text-ink" href="#how-it-works">
              How it works
            </Link>
            <Link className="transition hover:text-ink" href="#screens">
              Screens
            </Link>
            <Link className="transition hover:text-ink" href="#faq">
              FAQ
            </Link>
          </div>
          <Link
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-plum"
          >
            Join <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </header>

      <main id="top">
        <section className="relative isolate min-h-screen overflow-hidden px-5 pb-16 pt-24 md:px-8 md:pb-20 lg:pt-28">
          <div className="ambient-glow" />
          <div className="relative mx-auto max-w-7xl lg:min-h-[690px]">
            <div className="relative z-20 w-full min-w-0 max-w-3xl animate-rise lg:w-[58%] lg:pt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-semibold text-plum shadow-card">
                <BellRing className="h-4 w-4" />
                iOS early access now open
              </div>
              <h1 className="mt-7 max-w-full text-[2.55rem] font-semibold leading-[1.04] tracking-normal text-ink sm:text-5xl md:text-7xl 2xl:text-8xl">
                <span className="block sm:inline">See what</span>{" "}
                <span className="block sm:inline">spending costs</span>{" "}
                <span className="block sm:inline">your dreams.</span>
              </h1>
              <p className="mt-7 max-w-full text-base leading-8 text-muted sm:max-w-2xl sm:text-lg md:text-xl">
                Delayd turns everyday purchases into days moved away from the future you are
                building. Not guilt. A sharper pause before money leaves.
              </p>

              <div className="mt-7 w-full max-w-full overflow-hidden rounded-[30px] border border-white/80 bg-white/[0.78] p-3 shadow-soft backdrop-blur sm:max-w-2xl">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <span className="inline-flex w-fit items-center gap-2 rounded-2xl bg-grape px-4 py-3 text-sm font-semibold text-white">
                    <Sparkles className="h-4 w-4" />
                    Example
                  </span>
                  <p className="min-w-0 max-w-full text-base font-semibold leading-7 text-ink md:text-lg">
                    That ₹500 impulse just moved Bali 2 days further away.
                  </p>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <ImpactPill label="Dinner out" value="₹2,000 = 6 days" />
                  <ImpactPill label="Sneaker drop" value="₹8,000 = 24 days" />
                  <ImpactPill label="Protected" value="₹1,000 saved back" />
                </div>
              </div>

              <div className="mt-9 max-w-2xl" id="hero-waitlist">
                <WaitlistForm source="hero" />
              </div>
            </div>

            <div className="relative mx-auto mt-12 h-[560px] w-full max-w-[28rem] lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:h-[650px] lg:w-[42%] lg:max-w-none">
              <div className="absolute left-1/2 top-10 hidden h-72 w-72 -translate-x-1/2 rounded-full bg-grape/[0.15] blur-3xl md:block" />
              <PhoneMockup
                src={screens.hero}
                alt="Delayd impact reveal showing a purchase delaying a dream"
                label="₹500 = 2 days"
                priority
                protectedPreview
                className="relative z-10 max-w-[250px] animate-float md:max-w-[290px] xl:max-w-[310px]"
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="How it works"
              title="A spending pause you can feel"
              copy="Delayd is built for the instant a purchase is still a choice. Log it, see the time cost, then decide what matters more."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {howItWorks.map((item, index) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[28px] border border-white/75 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-paper text-grape">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-blush px-3 py-1 text-xs font-semibold text-muted">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 min-h-[84px] leading-7 text-muted">{item.copy}</p>
                  <div className="mt-5 rounded-[24px] bg-paper p-3">
                    <PhoneMockup
                      src={item.screen}
                      alt={`${item.title} screen`}
                      protectedPreview
                      className="max-w-[150px] transition duration-300 group-hover:-rotate-2"
                      frameClassName="rounded-[28px] p-1.5"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-grape">
                  Feature highlights
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink md:text-5xl">
                  Less accounting. More intention.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Most money apps tell you what already happened. Delayd helps you pause while the
                  decision is still alive.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <article
                    key={feature.title}
                    className="rounded-[24px] border border-white/75 bg-white/90 p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    <feature.icon className="h-6 w-6 text-grape" />
                    <h3 className="mt-4 text-xl font-semibold text-ink">{feature.title}</h3>
                    <p className="mt-2 leading-7 text-muted">{feature.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="screens" className="overflow-hidden px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="App showcase"
              title="The real flow, from impulse to progress"
              copy="Actual app screens show the loop Delayd is built around: notice the spend, feel the delay, protect the dream, and keep moving."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {showcase.map((screen, index) => (
                <article
                  key={screen.src}
                  className="group rounded-[30px] border border-white/75 bg-white/[0.88] p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  <PhoneMockup
                    src={screen.src}
                    alt={screen.title}
                    label={screen.label}
                    protectedPreview
                    className={index % 2 === 1 ? "max-w-[210px] md:mt-5" : "max-w-[210px]"}
                    frameClassName="group-hover:rotate-1"
                  />
                  <h3 className="mt-8 text-xl font-semibold text-ink">{screen.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{screen.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Early proof"
              title="Early testers felt the shift right away"
              copy="These notes come from early users who wanted less guilt, better clarity, and stronger follow-through on their goals."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-[28px] border border-white/75 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <Avatar initials={testimonial.initials} />
                    <div className="flex gap-1 text-amber">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Sparkles key={index} className="h-4 w-4 fill-amber/40" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-6 text-lg leading-8 text-ink">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-blush pt-4">
                    <p className="font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Quick answers before launch"
              copy="The important bits: what Delayd is, what it is not, and how the waitlist works."
            />
            <div className="mt-10 divide-y divide-blush rounded-[28px] border border-white/75 bg-white shadow-card">
              {faqs.map((faq) => (
                <details key={faq.question} className="group p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-semibold text-ink">
                    {faq.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper text-grape transition group-open:rotate-90">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl leading-8 text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="waitlist" className="px-5 py-20 md:px-8">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/75 bg-ink p-6 text-white shadow-soft md:p-10">
            <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-grape/25 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  <Mail className="h-4 w-4" />
                  Launch note only
                </div>
                <h2 className="mt-6 text-3xl font-semibold tracking-normal md:text-5xl">
                  Be first when Delayd reaches the App Store.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/70">
                  Get launch timing, early access updates, and the first invite when the iOS app is
                  ready.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
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
        </section>
      </main>

      <footer className="border-t border-white/70 px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/assets/logo.png" alt="" width={30} height={30} className="rounded-lg" />
            <span>Delayd.app</span>
          </div>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://www.droidates.com/p/privacy-policy-delayd.html"
              className="transition hover:text-ink"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
            <a
              href="https://www.droidates.com/p/terms-of-use-delayd.html"
              className="transition hover:text-ink"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
            <a href="mailto:hello@delayd.app" className="transition hover:text-ink">
              hello@delayd.app
            </a>
          </div>
          <p>Built for dreams worth protecting.</p>
        </div>
      </footer>
    </>
  );
}
