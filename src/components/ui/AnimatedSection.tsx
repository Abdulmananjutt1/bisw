"use client";

import { useInView } from "@/hooks";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fade-in" | "fade-in-up" | "fade-in-down" | "fade-in-left" | "fade-in-right" | "scale-in" | "zoom-in" | "slide-in-left" | "slide-in-right";
  delay?: number;
  className?: string;
  threshold?: number;
}

export function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce: true });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} ${isInView ? `animate-${animation}` : "opacity-0 translate-y-12"}`}
      style={{ 
        animationDelay: `${delay}ms`,
        transitionProperty: "opacity, transform",
        transitionDuration: "0.8s"
      }}
    >
      {children}
    </div>
  );
}
