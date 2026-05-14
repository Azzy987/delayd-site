import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Goal,
  HeartHandshake,
  Mail,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  WalletCards
} from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { WaitlistForm } from "@/components/WaitlistForm";

const howItWorks = [
  {
    icon: WalletCards,
    title: "Log the spend",
    copy: "Add the thing you are about to buy, from a coffee run to a weekend impulse."
  },
  {
    icon: Clock3,
    title: "See the time cost",
    copy: "Delayd translates that amount into days pushed back from your real goal."
  },
  {
    icon: Goal,
    title: "Choose with context",
    copy: "Spend when it is worth it. Pause when your future self would rather keep the time."
  }
];

const features = [
  {
    icon: CalendarClock,
    title: "Dream-date math",
    copy: "Turn a purchase into a visible movement on your goal timeline, not another buried transaction."
  },
  {
    icon: Sparkles,
    title: "Tiny pause moments",
    copy: "A simple impact reveal gives your brain one calm second before automatic spending wins."
  },
  {
    icon: Bell,
    title: "Gentle nudges",
    copy: "Launch-ready reminders help you come back to the goal without shame or noisy budgeting."
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    copy: "Built around intentional inputs and clear outcomes, with no need to feel surveilled by your money."
  }
];

const screenshots = [
  {
    src: "/assets/impact-reveal.png",
    label: "Impact reveal",
    alt: "Delayd impact reveal screen artwork"
  },
  {
    src: "/assets/onboarding-savings-location.png",
    label: "Savings context",
    alt: "Delayd savings location onboarding artwork"
  },
  {
    src: "/assets/onboarding-ready.png",
    label: "Ready to begin",
    alt: "Delayd ready onboarding artwork"
  }
];

const testimonials = [
  {
    quote:
      "The idea clicked immediately. It makes a random purchase feel connected to the thing I actually want.",
    name: "Beta reader",
    role: "Travel goal saver"
  },
  {
    quote:
      "I do not need another tracker. I need something that makes the tradeoff obvious before I tap pay.",
    name: "Early waitlist",
    role: "Intentional spender"
  },
  {
    quote:
      "Seeing spending as days delayed is more emotional than seeing a chart. That is exactly the point.",
    name: "Product preview",
    role: "Behavior-change app user"
  }
];

const faqs = [
  {
    question: "Is Delayd an expense tracker?",
    answer:
      "No. Delayd is focused on the moment before and after spending. It translates purchases into time delayed toward dreams, instead of categorizing every transaction forever."
  },
  {
    question: "Do I need to connect my bank?",
    answer:
      "The launch experience is designed around intentional inputs. If account connections are added later, they will be optional and clearly explained."
  },
  {
    question: "Who is it for?",
    answer:
      "People who already know what they want, but need a calmer way to notice when small purchases quietly move that goal further away."
  },
  {
    question: "When will the iOS app launch?",
    answer:
      "Join the waitlist and you will get the launch note, early access updates, and no unrelated marketing."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Delayd",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS",
  description:
    "Delayd converts spending into time delay toward dreams, helping users choose with context before everyday purchases become habits.",
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
      <h2 className="mt-3 text-3xl font-semibold text-ink md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-muted md:text-lg">{copy}</p>
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
        <section className="relative isolate min-h-[90vh] overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pb-24 md:pt-28">
          <div className="absolute inset-x-0 bottom-0 top-20 -z-10 mx-auto max-w-7xl">
            <div className="absolute right-[-5rem] top-8 hidden w-[31rem] rotate-6 opacity-95 lg:block xl:w-[34rem]">
              <PhoneMockup
                src="/assets/impact-reveal.png"
                alt="Delayd impact reveal screen"
                label="₹500 = 2 days"
                priority
              />
            </div>
            <div className="absolute bottom-16 right-[24rem] hidden w-[16rem] -rotate-6 opacity-90 2xl:block">
              <PhoneMockup
                src="/assets/onboarding-tone.png"
                alt="Delayd onboarding screen"
                label="Built for pause"
              />
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(20rem,0.72fr)] lg:items-center">
            <div className="max-w-3xl animate-rise">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-semibold text-plum shadow-card">
                <PiggyBank className="h-4 w-4" />
                iOS waitlist now open
              </div>
              <h1 className="mt-7 text-5xl font-semibold leading-[1.02] text-ink md:text-7xl 2xl:text-8xl">
                See what spending costs your dreams.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl">
                Delayd converts everyday purchases into time pushed back from the goals you care
                about. Not guilt. Just the tradeoff, made visible.
              </p>
              <div className="mt-7 inline-flex flex-wrap items-center gap-3 rounded-[28px] border border-white/80 bg-white/75 p-2 pr-5 text-left shadow-card backdrop-blur">
                <span className="rounded-2xl bg-grape px-4 py-3 text-sm font-semibold text-white">
                  Example
                </span>
                <span className="text-base font-semibold text-ink">
                  ₹500 delayed your Bali trip by 2 days.
                </span>
              </div>
              <div className="mt-9 max-w-2xl" id="hero-waitlist">
                <WaitlistForm source="hero" />
              </div>
            </div>

            <div className="relative mx-auto block w-full max-w-[19rem] md:hidden">
              <PhoneMockup
                src="/assets/impact-reveal.png"
                alt="Delayd impact reveal screen"
                label="₹500 = 2 days"
                priority
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="How it works"
              title="A spending pause you can feel"
              copy="Delayd is built for the moment when a purchase is still a choice. It keeps the math simple and the emotional signal clear."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {howItWorks.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-white/75 bg-white p-6 shadow-card transition hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-paper text-grape">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 text-sm font-semibold text-grape">Step {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.copy}</p>
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
                <h2 className="mt-3 text-3xl font-semibold text-ink md:text-5xl">
                  Less accounting. More awareness.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Most money apps tell you what already happened. Delayd helps you notice what a
                  spend means while there is still time to choose differently.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <article
                    key={feature.title}
                    className="rounded-[24px] border border-white/75 bg-white/90 p-5 shadow-card transition hover:-translate-y-1"
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
              title="A calm interface for a charged decision"
              copy="Current launch artwork is shown in phone frames. Replace these with final App Store screenshots when ready without changing the section structure."
            />
            <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-6">
              {screenshots.map((screen, index) => (
                <PhoneMockup
                  key={screen.src}
                  src={screen.src}
                  alt={screen.alt}
                  label={screen.label}
                  className={index === 1 ? "md:mt-10" : ""}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Early proof"
              title="For people who want a better pause"
              copy="Use these as placeholders until real beta quotes are available. The language is shaped around Delayd's behavior-change promise."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name + testimonial.role}
                  className="rounded-[28px] border border-white/75 bg-white p-6 shadow-card"
                >
                  <div className="flex gap-1 text-amber">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Sparkles key={index} className="h-4 w-4 fill-amber/40" />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-lg leading-8 text-ink">
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
              title="The short version"
              copy="A few practical answers before launch."
            />
            <div className="mt-10 divide-y divide-blush rounded-[28px] border border-white/75 bg-white shadow-card">
              {faqs.map((faq) => (
                <details key={faq.question} className="group p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-semibold text-ink">
                    {faq.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper text-grape transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl leading-8 text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="waitlist" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/75 bg-ink p-6 text-white shadow-soft md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  <Mail className="h-4 w-4" />
                  Launch notice only
                </div>
                <h2 className="mt-6 text-3xl font-semibold md:text-5xl">
                  Join before Delayd reaches the App Store.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/72">
                  Get early access updates, launch timing, and the first invite when the iOS app is
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
            <Link href="/privacy" className="transition hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-ink">
              Terms
            </Link>
            <a href="mailto:hello@delayd.app" className="transition hover:text-ink">
              hello@delayd.app
            </a>
          </div>
          <p>Built for dreams that deserve context.</p>
        </div>
      </footer>
    </>
  );
}
