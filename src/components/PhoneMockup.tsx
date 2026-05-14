import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
};

export function PhoneMockup({ src, alt, label, className = "", priority }: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[280px] ${className}`}>
      <div className="rounded-[38px] border border-ink/10 bg-ink p-2 shadow-soft">
        <div className="overflow-hidden rounded-[30px] bg-paper">
          <div className="relative aspect-[9/16]">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 70vw, 280px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full border border-blush bg-white px-3 py-1 text-xs font-semibold text-ink shadow-card">
        {label}
      </div>
    </div>
  );
}
