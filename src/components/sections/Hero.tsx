"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=90",
    heading: "Empowering Orphan Girls Through Hope",
    sub: "Safe shelter, education & skills for 90 girls in Lahore since 2013.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=90",
    heading: "Education That Changes Lives",
    sub: "Every girl at BIWS receives quality schooling and learning support.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=90",
    heading: "Skills for a Brighter Future",
    sub: "Computer, IT, stitching & beautician training for self-reliance.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1600&q=90",
    heading: "A Safe & Loving Home",
    sub: "Warmth, dignity, and care for every orphan girl on our campus.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1600&q=90",
    heading: "Your Support Makes It Possible",
    sub: "Donate, sponsor, or volunteer — every contribution matters.",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Auto-scroll every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[82vh] overflow-hidden bg-[#021a12]">

      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.heading}
            fill
            className="object-cover"
            priority={i === 0}
            unoptimized
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
      ))}

      {/* Content — bottom left */}
      <div
        className={`absolute bottom-0 left-0 z-20 w-full px-6 pb-24 sm:px-12 lg:px-20 transition-all duration-500 ${
          animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            {slide.heading}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            {slide.sub}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              href="/donate"
              size="lg"
              className="rounded-2xl bg-primary hover:bg-primary-dark border-0 text-white shadow-xl shadow-primary/30 px-7"
            >
              <Heart className="h-5 w-5" />
              Donate Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="rounded-2xl border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-7"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Left / Right arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 sm:left-6"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 sm:right-6"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 right-6 z-30 flex gap-2 sm:right-12">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-7 bg-white"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
