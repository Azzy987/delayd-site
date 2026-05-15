"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "loading" | "success" | "error";

const fallbackMailerLiteEmbedUrl =
  "https://preview.mailerlite.io/forms/2350168/187516394385966275/share";
const mode = process.env.NEXT_PUBLIC_WAITLIST_MODE ?? "mailerlite";
const mailerLiteEmbedUrl = process.env.NEXT_PUBLIC_MAILERLITE_EMBED_URL ?? fallbackMailerLiteEmbedUrl;
const mailerLiteFormAction = process.env.NEXT_PUBLIC_MAILERLITE_FORM_ACTION;

export function WaitlistForm({ source = "landing" }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const isMailerLiteEmbed = mode === "mailerlite" && Boolean(mailerLiteEmbedUrl);
  const formAction = mode === "mailerlite" ? mailerLiteFormAction : undefined;

  const helperText = useMemo(() => {
    if (status === "success") {
      return message || "You're on the list. We'll only email you when Delayd is ready.";
    }

    if (status === "error") {
      return message || "Something went wrong. Try again in a moment.";
    }

    return "No spam. Just the launch note and early access updates.";
  }, [message, status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (formAction) {
      trackEvent("waitlist_submit_started", { mode: "mailerlite", source });
      setStatus("success");
      setMessage("Thanks. If MailerLite asks for confirmation, check your inbox.");
      return;
    }

    event.preventDefault();
    setStatus("loading");
    setMessage("");
    trackEvent("waitlist_submit_started", { mode: "api", source });

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ firstName, email, source })
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Unable to join the waitlist.");
      }

      setStatus("success");
      setMessage(payload.message || "You're on the list. We'll email you at launch.");
      setFirstName("");
      setEmail("");
      trackEvent("waitlist_submit_succeeded", { mode: "api", source });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to join the waitlist.");
      trackEvent("waitlist_submit_failed", { mode: "api", source });
    }
  }

  if (isMailerLiteEmbed) {
    return (
      <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-card">
        <iframe
          className="h-[420px] w-full"
          src={mailerLiteEmbedUrl}
          title="Join the Delayd waitlist"
        />
      </div>
    );
  }

  return (
    <form
      action={formAction}
      method={formAction ? "post" : undefined}
      target={formAction ? "_blank" : undefined}
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-white/75 bg-white/95 p-3 shadow-soft backdrop-blur"
      data-testid={`waitlist-form-${source}`}
    >
      <div className="grid gap-3 md:grid-cols-[0.75fr_1fr_auto]">
        <label className="sr-only" htmlFor={`firstName-${source}`}>
          First name
        </label>
        <input
          id={`firstName-${source}`}
          name="fields[name]"
          autoComplete="given-name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="First name"
          className="h-14 rounded-2xl border border-blush bg-paper/60 px-4 text-base text-ink outline-none transition focus:border-grape focus:bg-white focus:ring-4 focus:ring-grape/10"
        />

        <label className="sr-only" htmlFor={`email-${source}`}>
          Email
        </label>
        <input
          id={`email-${source}`}
          name="fields[email]"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="h-14 rounded-2xl border border-blush bg-paper/60 px-4 text-base text-ink outline-none transition focus:border-grape focus:bg-white focus:ring-4 focus:ring-grape/10"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-ink px-6 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-plum focus:outline-none focus:ring-4 focus:ring-grape/20 disabled:cursor-not-allowed disabled:opacity-70"
          aria-label="Join the Delayd waitlist"
        >
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          <span>Join waitlist</span>
          {status === "loading" ? null : (
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          )}
        </button>
      </div>

      <div className="mt-3 flex items-start gap-2 px-1 text-left text-xs leading-5 text-muted">
        {status === "success" ? (
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-grape" />
        ) : (
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-grape/[0.55]" />
        )}
        <p aria-live="polite" className={status === "error" ? "text-red-700" : ""}>
          By joining, you agree to receive Delayd launch emails. {helperText}
        </p>
      </div>
    </form>
  );
}
