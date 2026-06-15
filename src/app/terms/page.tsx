import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: { canonical: "https://www.delayd.app/terms" }
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="These terms apply to the Delayd iOS app, website, waitlist, and related early-access services. By using them, you agree to these terms."
    >
      <section>
        <h2>What Delayd provides</h2>
        <p>Delayd is a behavior-change and goal-planning tool that estimates how spending decisions may affect a goal timeline. Calculations are informational estimates and depend on the information you enter.</p>
      </section>
      <section>
        <h2>Not financial advice</h2>
        <p>Delayd does not provide financial, investment, tax, accounting, or legal advice. You remain responsible for spending, saving, and purchase decisions.</p>
      </section>
      <section>
        <h2>Subscriptions and purchases</h2>
        <p>Delayd may offer free functionality, trials, auto-renewing subscriptions, and lifetime purchases through Apple&apos;s App Store. Current products, prices, trial periods, and included features are shown in the app before purchase. Apple processes payments and manages cancellation and refunds. RevenueCat is used to manage purchase entitlements.</p>
        <p>Auto-renewing subscriptions renew unless cancelled through your Apple ID settings at least 24 hours before the end of the current period. Deleting the app does not cancel a subscription.</p>
      </section>
      <section>
        <h2>Acceptable use</h2>
        <p>You may not misuse the service, attempt unauthorized access, interfere with its operation, submit automated waitlist entries, reverse engineer protected portions of the service where prohibited, or use Delayd in violation of law.</p>
      </section>
      <section>
        <h2>Early access</h2>
        <p>Beta and TestFlight versions may be incomplete, change without notice, contain errors, or lose test data. Early-access availability is not guaranteed and may be ended at any time.</p>
      </section>
      <section>
        <h2>Availability and liability</h2>
        <p>The service is provided on an “as available” basis. To the extent permitted by law, Delayd is not liable for indirect or consequential losses, missed goals, purchasing decisions, or loss of data arising from use of the service.</p>
      </section>
      <section>
        <h2>Changes and contact</h2>
        <p>Features and these terms may change as Delayd develops. Material changes will be reflected by updating this page. Continued use after an update means you accept the revised terms.</p>
      </section>
    </LegalPage>
  );
}
