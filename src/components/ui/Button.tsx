import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg shadow-primary/20 hover:shadow-primary/30 focus-visible:ring-primary",
  secondary:
    "bg-secondary text-white hover:bg-secondary-dark shadow-md hover:shadow-lg shadow-secondary/20 focus-visible:ring-secondary",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary",
  ghost:
    "text-primary hover:bg-primary/10 focus-visible:ring-primary",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm:  "px-4 py-2 text-sm gap-1.5",
  md:  "px-6 py-2.5 text-base gap-2",
  lg:  "px-7 py-3.5 text-base gap-2",
};

function isInternalRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]";

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    const computedRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;

    if (!isInternalRoute(href)) {
      return (
        <a href={href} target={target} rel={computedRel} className={combinedClassName}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} target={target} rel={computedRel} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
