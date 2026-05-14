import Link from "next/link";

export const metadata = {
  title: "Terms"
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-16 md:px-8">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-white/75 bg-white p-8 shadow-card">
        <Link href="/" className="text-sm font-semibold text-grape">
          Back to Delayd
        </Link>
        <h1 className="mt-8 text-4xl font-semibold text-ink">Terms of Use</h1>
        <p className="mt-4 leading-8 text-muted">
          This is a launch placeholder for Delayd.app. The site currently provides product
          information and a waitlist form for the upcoming iOS app.
        </p>
        <p className="mt-4 leading-8 text-muted">
          Replace this page with reviewed terms before public launch. Include waitlist terms,
          availability, acceptable use, liability, and any subscription terms if they apply.
        </p>
        <p className="mt-4 leading-8 text-muted">
          Contact:{" "}
          <a href="mailto:hello@delayd.app" className="font-semibold text-ink">
            hello@delayd.app
          </a>
        </p>
      </div>
    </main>
  );
}
