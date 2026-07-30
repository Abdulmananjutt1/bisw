import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Heart, ChevronDown, Star } from "lucide-react";
import Image from "next/image";

const donateOptions = [
  { label: "Zakat", href: "/donate?type=zakat" },
  { label: "Education", href: "/donate?type=education" },
  { label: "Sponsorship", href: "/donate?type=sponsorship" },
  { label: "General", href: "/donate?type=general" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[82vh] items-start overflow-hidden bg-[#021a12]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=90"
          alt="BIWS Girls Campus"
          fill
          className="object-cover opacity-[0.46] saturate-[1.05]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-[#021a12]/70" />
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-[0.18]" />

      {/* Animated circles */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4">
        <div className="h-full w-full rounded-full border border-primary/10 animate-spin-slow" />
        <div className="absolute inset-12 rounded-full border border-primary/15" />
        <div className="absolute inset-24 rounded-full border border-secondary/10" />
      </div>

      <Container className="relative z-10 pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pt-12">
        <div className="max-w-2xl">
          {/* ── Left content ── */}
          <div className="animate-fade-in-left">
            {/* Eyebrow badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-2 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary-light animate-pulse-soft" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
                Girls Campus · Est. {siteConfig.established} · Lahore
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold leading-[1.1] text-white sm:text-6xl lg:text-[64px]">
              Empowering
              <br />
              <span className="text-secondary-light">Orphan Girls</span>
              <br />
              <span className="text-white">Through Hope</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              BIWS Girls Campus provides{" "}
              <span className="font-semibold text-white">shelter, food, quality education,</span>{" "}
              emotional support, and life skills to{" "}
              <span className="font-semibold text-secondary-light">90 orphan girls</span> in
              Lahore — transforming lives since 2013.
            </p>

            {/* Stars */}
            <div className="mt-5 flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary-light text-secondary-light" />
              ))}
              <span className="ml-1 text-sm font-medium text-white/60">
                Trusted by 100+ donors &amp; partners
              </span>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href="/donate"
                size="lg"
                className="rounded-2xl bg-secondary hover:bg-secondary-dark text-white shadow-2xl shadow-secondary/40 border-0"
              >
                <Heart className="h-5 w-5" />
                Donate Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                href="/about"
                variant="outline"
                size="lg"
                className="rounded-2xl border-white/30 text-white hover:bg-white hover:text-primary-darker"
              >
                Our Story
              </Button>
            </div>

            {/* Quick donation pills */}
            <div className="mt-6">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-white/40">
                Quick Donation
              </p>
              <div className="flex flex-wrap gap-2">
                {donateOptions.map((opt) => (
                  <a
                    key={opt.label}
                    href={opt.href}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:border-secondary/50 hover:bg-secondary/20 hover:text-white"
                  >
                    {opt.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <a
        href="#stats"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
