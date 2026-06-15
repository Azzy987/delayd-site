import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "https://www.delayd.app/privacy" }
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Delayd is designed to make spending tradeoffs clearer without requiring access to your bank account. This policy explains what the iOS app and waitlist website collect and why."
    >
      <section>
        <h2>Information you provide</h2>
        <p>The app stores the goals, amounts, dates, and spending entries you choose to add. The website collects your email address, optional first name, optional answer about what you are saving for, consent, and signup attribution such as UTM parameters, referring page, and landing path.</p>
      </section>
      <section>
        <h2>How information is used</h2>
        <p>App data is used to calculate goal progress and spending impact. Waitlist information is used to send launch, early-access, TestFlight, product education, and feedback emails. Basic request data may be processed to prevent automated or abusive submissions.</p>
      </section>
      <section>
        <h2>Service providers</h2>
        <ul>
          <li><strong>Apple</strong> provides App Store distribution, TestFlight, notifications, and payment processing.</li>
          <li><strong>RevenueCat</strong> manages subscription and purchase entitlement information for Delayd Pro.</li>
          <li><strong>MailerLite</strong> stores waitlist subscribers and delivers launch or product emails.</li>
          <li><strong>Vercel</strong> hosts the website and waitlist API.</li>
          <li><strong>Google Analytics or PostHog</strong> may process website usage events only when the corresponding analytics key is enabled. The site does not load either provider without that configuration.</li>
        </ul>
      </section>
      <section>
        <h2>Storage and sharing</h2>
        <p>Delayd does not sell personal information or share it for third-party advertising. App information is stored locally by the app unless a feature explicitly states otherwise. Service providers receive only the information needed to provide their function and operate under their own privacy terms.</p>
      </section>
      <section>
        <h2>Retention and your choices</h2>
        <p>You can remove app data using the controls available in Delayd or by deleting the app. Every marketing email includes an unsubscribe option. To request access to or deletion of waitlist information, contact droidates@gmail.com from the subscribed address.</p>
      </section>
      <section>
        <h2>Children and changes</h2>
        <p>Delayd is not directed to children under 13. We may update this policy as the product changes; the current version and effective date will remain published on this page.</p>
      </section>
    </LegalPage>
  );
}
