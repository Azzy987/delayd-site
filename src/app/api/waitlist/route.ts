import { NextResponse } from "next/server";

type WaitlistPayload = {
  firstName?: string;
  email?: string;
  source?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const defaultMailerLiteEndpoint =
  "https://dashboard.mailerlite.com/jsonp/2350168/forms/187516394385966275/subscribe";

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as WaitlistPayload | null;
  const email = payload?.email?.trim().toLowerCase() ?? "";
  const firstName = payload?.firstName?.trim() ?? "";
  const source = payload?.source?.trim() ?? "landing";

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
  }

  const endpoint = process.env.WAITLIST_API_URL ?? defaultMailerLiteEndpoint;

  if (endpoint) {
    const isMailerLiteEndpoint = endpoint.includes("mailerlite.com");
    const body = isMailerLiteEndpoint
      ? new URLSearchParams({
          "fields[email]": email,
          "fields[name]": firstName,
          "fields[source]": source,
          "ml-submit": "1",
          anticsrf: "true"
        })
      : JSON.stringify({
          email,
          firstName,
          source,
          consent: true,
          product: "Delayd"
        });

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": isMailerLiteEndpoint
          ? "application/x-www-form-urlencoded"
          : "application/json",
        ...(process.env.WAITLIST_API_KEY
          ? { Authorization: `Bearer ${process.env.WAITLIST_API_KEY}` }
          : {})
      },
      body
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "The waitlist is temporarily unavailable. Try again soon." },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({
    message: "You're on the Delayd waitlist. We'll email you when early access opens."
  });
}
