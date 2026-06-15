import { NextResponse } from "next/server";
import { createHash } from "node:crypto";

type WaitlistPayload = {
  firstName?: string;
  email?: string;
  savingFor?: string;
  website?: string;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  referrer?: string;
  landingPath?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const defaultMailerLiteEndpoint =
  "https://dashboard.mailerlite.com/jsonp/2350168/forms/187516394385966275/subscribe";

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const DUPLICATE_WINDOW_MS = 24 * 60 * 60 * 1000;
const rateLimits = new Map<string, number[]>();
const recentEmails = new Map<string, number>();

function clean(value: string | undefined, maxLength: number) {
  return value?.trim().slice(0, maxLength) ?? "";
}

function successResponse() {
  return NextResponse.json({
    message: "You're on the Delayd waitlist. We'll email you when early access opens."
  });
}

function isRateLimited(ip: string, now: number) {
  if (!ip) return false;
  const recent = (rateLimits.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  rateLimits.set(ip, recent);
  return false;
}

function pruneCaches(now: number) {
  if (rateLimits.size > 1000) {
    for (const [ip, times] of rateLimits) {
      const recent = times.filter((time) => now - time < RATE_WINDOW_MS);
      if (recent.length) rateLimits.set(ip, recent);
      else rateLimits.delete(ip);
    }
  }

  if (recentEmails.size > 5000) {
    for (const [hash, time] of recentEmails) {
      if (now - time >= DUPLICATE_WINDOW_MS) recentEmails.delete(hash);
    }
  }
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as WaitlistPayload | null;
  const email = payload?.email?.trim().toLowerCase() ?? "";
  const firstName = clean(payload?.firstName, 80);
  const savingFor = clean(payload?.savingFor, 120);
  const source = clean(payload?.source, 60) || "landing";
  const website = clean(payload?.website, 200);
  const utmSource = clean(payload?.utmSource, 100);
  const utmMedium = clean(payload?.utmMedium, 100);
  const utmCampaign = clean(payload?.utmCampaign, 120);
  const utmContent = clean(payload?.utmContent, 120);
  const referrer = clean(payload?.referrer, 500);
  const landingPath = clean(payload?.landingPath, 500);

  if (website) return successResponse();

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
  }

  const now = Date.now();
  pruneCaches(now);
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "";

  if (isRateLimited(ip, now)) {
    return NextResponse.json(
      { message: "Too many attempts. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  const emailHash = createHash("sha256").update(email).digest("hex");
  const previousSignup = recentEmails.get(emailHash);
  if (previousSignup && now - previousSignup < DUPLICATE_WINDOW_MS) return successResponse();

  const endpoint = process.env.WAITLIST_API_URL ?? defaultMailerLiteEndpoint;

  if (endpoint) {
    const isMailerLiteEndpoint = endpoint.includes("mailerlite.com");
    const body = isMailerLiteEndpoint
      ? new URLSearchParams({
          "fields[email]": email,
          "fields[name]": firstName,
          "fields[saving_for]": savingFor,
          "fields[source]": source,
          "fields[utm_source]": utmSource,
          "fields[utm_medium]": utmMedium,
          "fields[utm_campaign]": utmCampaign,
          "fields[utm_content]": utmContent,
          "fields[referrer]": referrer,
          "fields[landing_path]": landingPath,
          "ml-submit": "1",
          anticsrf: "true"
        })
      : JSON.stringify({
          email,
          firstName,
          savingFor,
          source,
          utmSource,
          utmMedium,
          utmCampaign,
          utmContent,
          referrer,
          landingPath,
          consent: true,
          product: "Delayd"
        });

    let response: Response;

    try {
      response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": isMailerLiteEndpoint
            ? "application/x-www-form-urlencoded"
            : "application/json",
          ...(process.env.WAITLIST_API_KEY
            ? { Authorization: `Bearer ${process.env.WAITLIST_API_KEY}` }
            : {})
        },
        body,
        signal: AbortSignal.timeout(10000)
      });
    } catch {
      return NextResponse.json(
        { message: "The waitlist is temporarily unavailable. Try again soon." },
        { status: 502 }
      );
    }

    if (!response.ok) {
      return NextResponse.json(
        { message: "The waitlist is temporarily unavailable. Try again soon." },
        { status: 502 }
      );
    }
  }

  recentEmails.set(emailHash, now);
  return successResponse();
}
