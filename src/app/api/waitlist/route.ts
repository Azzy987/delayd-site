import { NextResponse } from "next/server";

type WaitlistPayload = {
  firstName?: string;
  email?: string;
  source?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as WaitlistPayload | null;
  const email = payload?.email?.trim().toLowerCase() ?? "";
  const firstName = payload?.firstName?.trim() ?? "";
  const source = payload?.source?.trim() ?? "landing";

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
  }

  const endpoint = process.env.WAITLIST_API_URL;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.WAITLIST_API_KEY
          ? { Authorization: `Bearer ${process.env.WAITLIST_API_KEY}` }
          : {})
      },
      body: JSON.stringify({
        email,
        firstName,
        source,
        consent: true,
        product: "Delayd"
      })
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "The waitlist is temporarily unavailable. Try again soon." },
        { status: 502 }
      );
    }
  } else {
    console.info("Waitlist signup received", { email, firstName, source });
  }

  return NextResponse.json({
    message: "You're on the Delayd waitlist. We'll email you when early access opens."
  });
}
