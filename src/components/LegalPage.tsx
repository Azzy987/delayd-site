import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <main className="min-h-screen px-5 py-10 md:px-8 md:py-16">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-3 text-ink">
          <Image src="/assets/logo.png" alt="" width={34} height={34} className="rounded-xl" />
          <span className="font-semibold">Delayd</span>
        </Link>
        <p className="mt-14 text-sm font-semibold uppercase tracking-[0.18em] text-plum">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink md:text-6xl">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted">{intro}</p>
        <p className="mt-3 text-sm text-muted">Last updated: June 15, 2026</p>
        <div className="legal-content mt-12 space-y-9 text-base leading-8 text-muted">{children}</div>
        <div className="mt-14 border-t border-blush pt-8 text-sm text-muted">
          Questions: <a className="font-semibold text-plum" href="mailto:droidates@gmail.com">droidates@gmail.com</a>
        </div>
      </article>
    </main>
  );
}
