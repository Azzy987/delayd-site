export type AnalyticsEvent =
  | "waitlist_submit_started"
  | "waitlist_submit_succeeded"
  | "waitlist_submit_failed"
  | "cta_clicked";

type EventProperties = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    posthog?: {
      capture: (eventName: string, properties?: EventProperties) => void;
    };
  }
}

export function trackEvent(eventName: AnalyticsEvent, properties?: EventProperties) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", eventName, properties);
  window.posthog?.capture(eventName, properties);
}
