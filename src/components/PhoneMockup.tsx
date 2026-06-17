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
      <div className="pointer-events-none absolute inset-x-[10%] top-[8%] -z-10 h-[82%] rounded-[4rem] bg-grape/[0.14] opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />

      <div
        className={clsx(
          "relative aspect-[1419/2796] w-full transition duration-500 ease-out group-hover:-translate-y-1",
          frameClassName
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 72vw, 320px"
          className={clsx(
            "object-contain drop-shadow-[0_26px_70px_rgba(38,29,55,0.2)] transition duration-500 ease-out group-hover:drop-shadow-[0_34px_86px_rgba(38,29,55,0.26)]",
            imageClassName
          )}
        />
      </div>

      {label ? (
        <div className="absolute -bottom-2 left-1/2 inline-flex min-w-max -translate-x-1/2 items-center rounded-full border border-blush bg-cloud px-3 py-1 text-xs font-semibold text-ink shadow-card">
          {label}
        </div>
      ) : null}
    </div>
  );
}
