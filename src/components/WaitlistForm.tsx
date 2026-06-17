"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "loading" | "success" | "error";

const mode = process.env.NEXT_PUBLIC_WAITLIST_MODE ?? "api";
const mailerLiteEmbedUrl = process.env.NEXT_PUBLIC_MAILERLITE_EMBED_URL;
const mailerLiteFormAction = process.env.NEXT_PUBLIC_MAILERLITE_FORM_ACTION;

export function WaitlistForm({ source = "landing" }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [savingFor, setSavingFor] = useState("");
  const [website, setWebsite] = useState("");

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
      const params = new URLSearchParams(window.location.search);
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName,
          email,
          savingFor,
          website,
          source,
          utmSource: params.get("utm_source") ?? "",
          utmMedium: params.get("utm_medium") ?? "",
          utmCampaign: params.get("utm_campaign") ?? "",
          utmContent: params.get("utm_content") ?? "",
          referrer: document.referrer,
          landingPath: `${window.location.pathname}${window.location.search}`
        })
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Unable to join the waitlist.");
      }

      setStatus("success");
      setMessage(payload.message || "You're on the list. We'll email you at launch.");
      setFirstName("");
      setEmail("");
      setSavingFor("");
      trackEvent("waitlist_submit_succeeded", { mode: "api", source });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to join the waitlist.");
      trackEvent("waitlist_submit_failed", { mode: "api", source });
    }
  }

  if (isMailerLiteEmbed) {
    return (
      <div className="glass-card overflow-hidden rounded-[28px]">
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
      className="glass-card relative rounded-[28px] p-3 shadow-soft"
      data-testid={`waitlist-form-${source}`}
    >
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`website-${source}`}>Website</label>
        <input
          id={`website-${source}`}
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>
      <div className="grid gap-3 xl:grid-cols-[0.8fr_1fr_8.75rem]">
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
          className="h-14 rounded-2xl border border-blush bg-cloud/60 px-4 text-base text-ink placeholder:text-muted/60 outline-none transition focus:border-grape focus:bg-cloud focus:ring-4 focus:ring-grape/10"
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
          className="h-14 rounded-2xl border border-blush bg-cloud/60 px-4 text-base text-ink placeholder:text-muted/60 outline-none transition focus:border-grape focus:bg-cloud focus:ring-4 focus:ring-grape/10"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-glow group inline-flex h-14 w-full min-w-[8.75rem] items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-gradient-to-r from-grape to-blue-500 px-6 text-sm font-semibold text-white shadow-glow-btn transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-grape/20 disabled:cursor-not-allowed disabled:opacity-70"
          aria-label="Join the Delayd waitlist"
        >
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          <span>Join waitlist</span>
          {status === "loading" ? null : (
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          )}
        </button>
      </div>

      <label className="sr-only" htmlFor={`savingFor-${source}`}>
        What are you saving for?
      </label>
      <input
        id={`savingFor-${source}`}
        name="fields[saving_for]"
        value={savingFor}
        onChange={(event) => setSavingFor(event.target.value)}
        placeholder="What are you saving for? (optional)"
        maxLength={120}
        className="mt-3 h-12 w-full rounded-2xl border border-blush bg-cloud/60 px-4 text-sm text-ink placeholder:text-muted/60 outline-none transition focus:border-grape focus:bg-cloud focus:ring-4 focus:ring-grape/10"
      />

      <div className="mt-3 flex items-start gap-2 px-1 text-left text-xs leading-5 text-muted">
        {status === "success" ? (
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
        ) : (
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-grape/60" />
        )}
        <p aria-live="polite" className={status === "error" ? "text-red-500" : ""}>
          By joining, you agree to receive Delayd launch emails. {helperText}
        </p>
      </div>
    </form>
  );
}
