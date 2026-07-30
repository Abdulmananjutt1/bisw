import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Quote, Sparkles } from "lucide-react";
import Image from "next/image";

const founderStats = [
  { label: "Girls in our care", value: "90" },
  { label: "Years of service", value: "13+" },
  { label: "Skill programs", value: "5+" },
];

export function FounderMessage() {
  return (
    <section className="relative overflow-hidden bg-primary-darker py-20 sm:py-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=70"
          alt=""
          fill
          className="object-cover opacity-10"
          unoptimized
        />
      </div>

      {/* Radial glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/15 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-5 lg:gap-20">
          {/* Founder image */}
          <div className="flex justify-center lg:col-span-2 lg:justify-start animate-fade-in-left">
            <div className="relative">
              {/* Ring decoration */}
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/30 scale-105" />
              <div className="absolute inset-0 rounded-[2.5rem] border border-secondary/20 scale-110" />

              {/* Photo */}
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <Image
                  src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=90"
                  alt={`${siteConfig.founderName} — Founder BIWS`}
                  width={380}
                  height={480}
                  className="h-[360px] w-64 object-cover sm:h-[420px] sm:w-72"
                  unoptimized
                />
                <div className="absolute inset-0 bg-primary-darker/25" />
              </div>

              {/* Name card */}
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-primary px-5 py-4 shadow-2xl">
                <p className="text-xs font-medium text-white/70">Founder</p>
                <p
                  className="text-base font-black text-white leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Dr. Amna Amber
                </p>
                <p className="text-xs text-white/60">Est. {siteConfig.established}</p>
              </div>

              {/* Sparkle badge */}
              <div className="absolute -left-5 top-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="lg:col-span-3 animate-fade-in-right">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/15 px-5 py-1.5 text-sm font-bold uppercase tracking-widest text-primary-light backdrop-blur-sm">
              Founder&apos;s Message
            </span>

            <h2
              className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Message of{" "}
              <span className="text-primary-light">Purpose &amp; Compassion</span>
            </h2>

            {/* Quote block */}
            <div className="mt-8 relative">
              <Quote className="absolute -left-2 -top-2 h-12 w-12 text-primary/20" />
              <blockquote
                className="relative border-l-2 border-primary pl-8 text-xl font-medium italic leading-relaxed text-white/90 sm:text-2xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Every child deserves love, education, dignity, and the opportunity to succeed in
                life. This is the vision that drives BIWS every single day.
              </blockquote>
            </div>

            <p className="mt-7 text-base leading-relaxed text-white/65">
              Begum Inayat Welfare Society was established in{" "}
              <span className="font-semibold text-white/90">{siteConfig.established}</span> by{" "}
              <strong className="text-white/90">Dr. Amna Amber</strong> with a simple yet powerful
              belief: no orphan girl should feel alone, unsafe, or without opportunity. What started
              as a small initiative has grown into a Girls Campus that is now home to{" "}
              <span className="font-bold text-primary-light">90 orphan girls</span> — providing
              shelter, food, quality education, emotional support, and life skills.
            </p>

            <p className="mt-4 text-base leading-relaxed text-white/60">
              Today, BIWS focuses on nurturing girls with compassion, discipline, and real-world
              skills — computer education, digital skills, beautician training, stitching, and web
              &amp; IT learning — so they can grow into confident and self-reliant women.
            </p>

            {/* Stats */}
            <div className="mt-9 grid grid-cols-3 gap-4">
              {founderStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/8 p-5 text-center backdrop-blur-sm transition-all hover:bg-white/12"
                >
                  <p
                    className="text-3xl font-black text-primary-light"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
