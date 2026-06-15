import clsx from "clsx";
import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imageClassName?: string;
  frameClassName?: string;
  priority?: boolean;
};

export function PhoneMockup({
  src,
  alt,
  label,
  className,
  imageClassName,
  frameClassName,
  priority
}: PhoneMockupProps) {
  return (
    <div className={clsx("group relative mx-auto w-full max-w-[280px]", className)}>
      {/* Accent glow behind device */}
      <div className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[4rem] bg-grape/[0.15] opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

      {/* Side buttons */}
      <span className="absolute -left-[3px] top-[17%] z-20 h-10 w-[3px] rounded-l-full bg-gradient-to-b from-[#665C78] to-[#221A2E]" />
      <span className="absolute -left-[3px] top-[27%] z-20 h-16 w-[3px] rounded-l-full bg-gradient-to-b from-[#665C78] to-[#221A2E]" />
      <span className="absolute -right-[3px] top-[24%] z-20 h-20 w-[3px] rounded-r-full bg-gradient-to-b from-[#665C78] to-[#221A2E]" />

      {/* Frame */}
      <div
        className={clsx(
          "relative rounded-[3.25rem] bg-[linear-gradient(135deg,#5B5268_0%,#191323_18%,#33283F_52%,#0E0B14_100%)] p-[7px] shadow-[0_28px_90px_rgba(0,0,0,0.25)] ring-1 ring-white/[0.1] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_34px_100px_rgba(0,0,0,0.3)]",
          frameClassName
        )}
      >
        <div className="rounded-[2.85rem] bg-black p-[4px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
          <div className="overflow-hidden rounded-[2.45rem] bg-paper">
            <div className="relative aspect-[1206/2622]">
              {/* Top shine */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-white/[0.08] to-transparent" />
              {/* Inner ring */}
              <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-white/[0.08]" />
              <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes="(max-width: 768px) 72vw, 320px"
                className={clsx("object-cover", imageClassName)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Label pill */}
      {label ? (
        <div className="absolute -bottom-4 left-1/2 inline-flex min-w-max -translate-x-1/2 items-center rounded-full border border-blush bg-cloud px-3 py-1 text-xs font-semibold text-ink shadow-card">
          {label}
        </div>
      ) : null}
    </div>
  );
}
