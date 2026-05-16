"use client";

import { useEffect, useRef } from "react";

export function ShaderBackdrop() {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backdrop = backdropRef.current;
    if (!backdrop) {
      return;
    }

    const canTrackPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canTrackPointer || reduceMotion) {
      return;
    }

    let frame = 0;
    let x = 72;
    let y = 18;

    const syncPointer = () => {
      frame = 0;
      backdrop.style.setProperty("--shader-x", `${x}%`);
      backdrop.style.setProperty("--shader-y", `${y}%`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      x = (event.clientX / window.innerWidth) * 100;
      y = (event.clientY / window.innerHeight) * 100;

      if (!frame) {
        frame = window.requestAnimationFrame(syncPointer);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return <div ref={backdropRef} className="shader-backdrop" aria-hidden="true" />;
}
