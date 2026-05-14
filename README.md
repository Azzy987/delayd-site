# Delayd landing page

Production-ready waitlist site for `delayd.app`, built with Next.js App Router, TypeScript, and Tailwind CSS.

## What is included

- Hero with Delayd's core behavior-change message.
- How it works, feature highlights, app showcase, testimonial placeholders, FAQ, final CTA, and footer.
- Responsive waitlist form with optional first name, required email, consent copy, loading, success, and error states.
- Two waitlist integration modes:
  - API mode through `src/app/api/waitlist/route.ts`
  - MailerLite mode through hosted embed URL or form action URL
- SEO metadata, Open Graph tags, favicon placeholder, robots, sitemap, and JSON-LD structured metadata.
- Analytics placeholders for GA4 and PostHog.
- Placeholder Privacy and Terms pages.

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

MailerLite hosted embed mode:

```bash
NEXT_PUBLIC_WAITLIST_MODE=mailerlite
NEXT_PUBLIC_MAILERLITE_EMBED_URL=https://dashboard.mailerlite.com/forms/YOUR_FORM_ID/share
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

The app showcase currently uses onboarding/launch artwork inside phone frames because no dedicated screenshot folder was found. When final screenshots are available, replace these files or update `screenshots` in `src/app/page.tsx`:

- `public/assets/screenshot-impact.png`
- `public/assets/screenshot-goal.png`
- `public/assets/screenshot-ready.png`

Recommended screenshot size: iPhone portrait, at least 1170 x 2532.

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
| A | `@` | `76.76.21.21` | Automatic |
| CNAME | `www` | `cname.vercel-dns.com` | Automatic |

5. In Vercel, keep both domains attached:
   - `delayd.app`
   - `www.delayd.app`
6. Set the preferred production domain in Vercel, usually `delayd.app`.
7. Wait for DNS propagation. It can be fast, but allow up to 24 hours.

## Major files

- Landing page sections: `src/app/page.tsx`
- Global metadata and analytics injection: `src/app/layout.tsx`
- Waitlist form: `src/components/WaitlistForm.tsx`
- Phone screenshot frame: `src/components/PhoneMockup.tsx`
- API waitlist route: `src/app/api/waitlist/route.ts`
- Analytics helper: `src/lib/analytics.ts`
- Global styling and Tailwind utilities: `src/app/globals.css`
