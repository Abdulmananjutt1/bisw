import { Container } from "@/components/ui/Container";
import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "90+",  label: "Orphan Girls in Care" },
  { value: "14+",  label: "Years of Service" },
  { value: "5",    label: "Skill Programs" },
  { value: "100+", label: "Donors & Partners" },
];

export function ImpactBanner() {
  return (
    <section className="relative overflow-hidden bg-primary-darker py-20 sm:py-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.12]"
          unoptimized
          aria-hidden="true"
        />
      </div>

      {/* Dot pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-secondary/15 blur-[100px]" />

      <Container className="relative max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left — text */}
          <div>
            <p className="inline-flex items-center rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-light">
              Our Impact
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Every Contribution
              <br />
              <span className="text-primary-light">Changes a Life.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">
              Since 2012, BIWS has been a home, a school, and a future for orphan
              girls in Lahore. Your support keeps this mission alive every single day.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-primary/30 transition hover:bg-primary-dark"
              >
                <Heart className="h-4 w-4" />
                Donate Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Learn Our Story
              </Link>
            </div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
              >
                <p className="text-4xl font-extrabold text-primary-light sm:text-5xl">
                  {value}
                </p>
                <p className="mt-2 text-sm font-medium text-white/55">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
