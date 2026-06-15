import clsx from "clsx";

type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  className?: string;
  speed?: number;
};

export function Marquee({ items, reverse = false, className, speed = 40 }: MarqueeProps) {
  const animationStyle = {
    "--marquee-duration": `${speed}s`,
  } as React.CSSProperties;

  return (
    <div
      className={clsx(
        "flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={clsx(
          "flex w-max shrink-0",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={animationStyle}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-8 px-4" aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-muted"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-grape/60" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
