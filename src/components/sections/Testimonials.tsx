"use client";

import { useRef, useState } from "react";
import { testimonials } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
  gender?: "male" | "female";
};

// Female avatar icon
function FemaleAvatar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background circle */}
      <circle cx="32" cy="32" r="32" fill="#fce7f3" />
      {/* Head */}
      <circle cx="32" cy="24" r="10" fill="#f9a8d4" />
      {/* Hair / hijab style */}
      <path
        d="M14 46c0-9.94 8.06-18 18-18s18 8.06 18 18"
        fill="#ec4899"
      />
      {/* Hair top arc */}
      <path
        d="M22 24c0-5.52 4.48-10 10-10s10 4.48 10 10"
        fill="#be185d"
      />
    </svg>
  );
}

// Male avatar icon
function MaleAvatar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background circle */}
      <circle cx="32" cy="32" r="32" fill="#dbeafe" />
      {/* Head */}
      <circle cx="32" cy="24" r="10" fill="#93c5fd" />
      {/* Body */}
      <path
        d="M14 46c0-9.94 8.06-18 18-18s18 8.06 18 18"
        fill="#3b82f6"
      />
    </svg>
  );
}

// Female names to detect gender
const femaleNames = ["fatima", "zainab", "sana", "family visitor"];

function isFemale(name: string): boolean {
  const lower = name.toLowerCase();
  return femaleNames.some((n) => lower.includes(n));
}

const list = (testimonials as unknown as Testimonial[]).map((t) => ({
  ...t,
  gender: isFemale(t.name) ? ("female" as const) : ("male" as const),
}));

// Duplicate for seamless infinite loop
const doubled = [...list, ...list];

export function Testimonials() {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -364 : 364, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
            What they say
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Donor Testimonials
          </h2>
        </div>
      </Container>

      {/* Slider row — full width, no container clipping */}
      <div className="flex items-center gap-4 px-4 sm:px-8">

          {/* Left btn */}
          <button
            onClick={() => nudge("left")}
            aria-label="Scroll left"
            className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition hover:border-primary/30 hover:bg-slate-50"
          >
            <ChevronLeft className="h-5 w-5 text-slate-600" />
          </button>

          {/* Marquee viewport — clips overflow */}
          <div className="overflow-hidden flex-1">
            <div
              ref={trackRef}
              className={`flex gap-6 ${paused ? "[animation-play-state:paused]" : ""}`}
              style={{
                animation: "marquee 30s linear infinite",
                width: "max-content",
              }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {doubled.map((t, i) => (
                <article
                  key={`${t.id}-${i}`}
                  className="flex w-[300px] shrink-0 flex-col items-center rounded-2xl border border-slate-200 bg-white px-7 py-8 text-center shadow-sm sm:w-[320px]"
                >
                  {/* Avatar */}
                  <div className="h-16 w-16 rounded-full border-2 border-primary/20 shadow-sm overflow-hidden">
                    {t.gender === "female" ? (
                      <FemaleAvatar className="h-full w-full" />
                    ) : (
                      <MaleAvatar className="h-full w-full" />
                    )}
                  </div>

                  {/* Quote */}
                  <p className="mt-5 text-sm leading-6 text-slate-600">
                    {t.quote}
                  </p>

                  {/* Name & role */}
                  <p className="mt-5 text-sm font-bold text-slate-900">— {t.name}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{t.role}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Right btn */}
          <button
            onClick={() => nudge("right")}
            aria-label="Scroll right"
            className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition hover:border-primary/30 hover:bg-slate-50"
          >
            <ChevronRight className="h-5 w-5 text-slate-600" />
          </button>

        </div>
    </section>
  );
}
