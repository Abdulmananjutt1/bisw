"use client";

import { useEffect, useRef, useState } from "react";

export function useCountUp(
  targetValue: string,
  duration = 2000,
  startOnView = true
) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const numericTarget = parseInt(targetValue.replace(/[^0-9]/g, ""), 10) || 0;

  useEffect(() => {
    if (!startOnView) {
      animateCount(numericTarget);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount(numericTarget);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();

    function animateCount(target: number) {
      const startTime = performance.now();

      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    }
  }, [numericTarget, duration, startOnView]);

  return { count, ref };
}
