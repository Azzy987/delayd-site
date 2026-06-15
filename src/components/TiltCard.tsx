"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  tiltDegree?: number;
};

export function TiltCard({ children, className, tiltDegree = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * tiltDegree;
    const rotateY = (x - 0.5) * tiltDegree;
    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
  }

  function handleMouseLeave() {
    setTransform("");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform,
        transition: transform
          ? "transform 100ms ease-out"
          : "transform 500ms ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
