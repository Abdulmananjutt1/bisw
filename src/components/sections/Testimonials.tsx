"use client";

import { useRef, useState } from "react";
import { testimonials } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
  image: string;
};

const list = testimonials as unknown as Testimonial[];
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

        {/* Slider row */}
        <div className="flex items-center gap-4">

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
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary/20 shadow-sm">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
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
      </Container>
    </section>
  );
}
