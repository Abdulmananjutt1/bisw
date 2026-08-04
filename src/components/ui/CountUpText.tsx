"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

type CountUpTextProps = {
  value: number | string;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
  startOnView?: boolean;
};

function getNumericValue(value: number | string) {
  if (typeof value === "number") {
    return value;
  }

  return parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
}

function formatNumber(value: number) {
  return value.toLocaleString("en-US");
}

export function CountUpText({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 1800,
  startOnView = true,
}: CountUpTextProps) {
  const target = getNumericValue(value);
  const { count, ref } = useCountUp<HTMLSpanElement>(
    String(target),
    duration,
    startOnView
  );
  const finalValue = `${prefix}${formatNumber(target)}${suffix}`;

  return (
    <span
      ref={ref}
      aria-label={finalValue}
      className={cn("tabular-nums", className)}
    >
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
