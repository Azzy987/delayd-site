# Delayd landing page

Production-ready waitlist site for `www.delayd.app`, built with Next.js App Router, TypeScript, and Tailwind CSS.

## What is included

- Hero with Delayd's core behavior-change message.
- How it works, feature highlights, app showcase, founder rationale, FAQ, final CTA, and footer.
- Responsive waitlist form with optional first name and savings goal, required email, consent copy, loading, success, and error states.
- Two waitlist integration modes:
  - API mode through `src/app/api/waitlist/route.ts`
  - MailerLite mode through hosted embed URL or form action URL
- Canonical SEO metadata, generated 1200×630 Open Graph image, favicon, robots, sitemap, and JSON-LD structured metadata.
- Analytics placeholders for GA4 and PostHog.
- Privacy and Terms are hosted directly on `www.delayd.app` and name Apple, RevenueCat, MailerLite, Vercel, and optional analytics providers.
- Scroll-reveal animation, dark mode, reduced-motion support, attribution capture, honeypot, duplicate suppression, and basic rate limiting.

## Local run

```bash
cd "/Users/Azam/iOS Projects/delayd-site"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Environment variables

Copy `.env.example` to `.env.local`.

```bash
cp .env.example .env.local
```

Default API mode:

```bash
NEXT_PUBLIC_WAITLIST_MODE=api
WAITLIST_API_URL=
WAITLIST_API_KEY=
```

With no `WAITLIST_API_URL`, the API route validates the email and logs the signup server-side. When your provider is ready, set `WAITLIST_API_URL` to your real endpoint. If it needs a bearer token, set `WAITLIST_API_KEY`.

Current production default:

- If `WAITLIST_API_URL` is not set, `/api/waitlist` forwards signups to the current Delayd MailerLite subscribe endpoint.
- This keeps the branded native form on the page instead of showing MailerLite's generic hosted form.
- The route captures UTM parameters, referrer, landing path, form location, and the optional savings-goal answer.
- In MailerLite, create custom fields named `saving_for`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `referrer`, and `landing_path` if you want those values retained by the hosted-form endpoint.

Confirmed on June 15, 2026: a signup submitted through `www.delayd.app/api/waitlist` appeared in MailerLite Subscribers.

Recommended MailerLite automation:

1. Immediately: waitlist confirmation plus one product screenshot.
2. Day 2: founder story and the problem Delayd solves.
3. Day 4: short product demo.
4. Invitation: TestFlight link and three precise tasks.
5. Two days later: one-question feedback email.
6. Launch day: App Store link and a request to share Delayd.

MailerLite hosted embed mode:

```bash
NEXT_PUBLIC_WAITLIST_MODE=mailerlite
NEXT_PUBLIC_MAILERLITE_EMBED_URL=https://preview.mailerlite.io/forms/YOUR_ACCOUNT_ID/YOUR_FORM_ID/share
```

MailerLite form action mode:

```bash
NEXT_PUBLIC_WAITLIST_MODE=mailerlite
NEXT_PUBLIC_MAILERLITE_FORM_ACTION=https://assets.mailerlite.com/jsonp/YOUR_ACCOUNT/forms/YOUR_FORM/subscribe
```

Analytics placeholders:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

## Assets

Copied from `/Users/Azam/iOS Projects/Delayd/Delayd/Assets.xcassets` into `public/assets`:

- `logo.png`
- `app-icon.png`
- `impact-reveal.png`
- `onboarding-tone.png`
- `onboarding-savings-location.png`
- `onboarding-ready.png`

The app showcase uses final rendered iPhone mockups in `public/assets/mockups`:

- `hero-impact-reveal-portrait.png`
- `home-dashboard-portrait.png`
- `quick-log-expense-portrait.png`
- `impact-reveal-result-portrait.png`
- `protect-dream-portrait.png`
- `history-timeline-portrait.png`
- `dream-plan-portrait.png`

Recommended replacement size: iPhone portrait mockup, `1419 x 2796` or the same aspect ratio.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, select **Add New Project**.
3. Import the repository.
4. Use these settings:
   - Framework Preset: **Next.js**
   - Root Directory: project root
   - Build Command: `npm run build`
   - Output Directory: leave default
   - Install Command: `npm install`
5. Add the same environment variables from `.env.local` in **Project Settings > Environment Variables**.
6. Deploy.
7. In **Project Settings > Domains**, add `delayd.app` and `www.delayd.app`.

## Connect Namecheap DNS for delayd.app

In Namecheap:

1. Go to **Domain List > delayd.app > Manage**.
2. Open **Advanced DNS**.
3. Remove conflicting parking or forwarding records.
4. Add these records for Vercel:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| A | `@` | `216.198.79.1` | Automatic |
| CNAME | `www` | `a6ff684bcd21fe4e.vercel-dns-017.com` | Automatic |

5. In Vercel, keep both domains attached:
   - `delayd.app`
   - `www.delayd.app`
6. Set `www.delayd.app` as the preferred production domain. Keep `delayd.app` redirecting to it.
7. Wait for DNS propagation. It can be fast, but allow up to 24 hours.

## Major files

- Landing page sections: `src/app/page.tsx`
- Global metadata and analytics injection: `src/app/layout.tsx`
- Waitlist form: `src/components/WaitlistForm.tsx`
- Phone screenshot frame: `src/components/PhoneMockup.tsx`
- API waitlist route: `src/app/api/waitlist/route.ts`
- Analytics helper: `src/lib/analytics.ts`
- Global styling and Tailwind utilities: `src/app/globals.css`
