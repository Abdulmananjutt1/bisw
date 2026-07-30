import { programs } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  Home,
  GraduationCap,
  Laptop,
  HeartPulse,
  Shield,
  Users,
  type LucideIcon,
  ArrowRight,
  Star,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home,
  GraduationCap,
  Laptop,
  HeartPulse,
  Shield,
  Users,
};

const colorSchemes: Record<
  string,
  {
    iconBg: string;
    accentBg: string;
    softBg: string;
    textColor: string;
    ringColor: string;
  }
> = {
  teal:   { iconBg: "bg-teal-500",   accentBg: "bg-teal-500",   softBg: "bg-teal-50",   textColor: "text-teal-600",   ringColor: "ring-teal-200" },
  blue:   { iconBg: "bg-blue-500",   accentBg: "bg-blue-500",   softBg: "bg-blue-50",   textColor: "text-blue-600",   ringColor: "ring-blue-200" },
  purple: { iconBg: "bg-purple-500", accentBg: "bg-purple-500", softBg: "bg-purple-50", textColor: "text-purple-600", ringColor: "ring-purple-200" },
  rose:   { iconBg: "bg-rose-500",   accentBg: "bg-rose-500",   softBg: "bg-rose-50",   textColor: "text-rose-600",   ringColor: "ring-rose-200" },
  green:  { iconBg: "bg-green-600",  accentBg: "bg-green-600",  softBg: "bg-green-50",  textColor: "text-green-600",  ringColor: "ring-green-200" },
  amber:  { iconBg: "bg-primary",    accentBg: "bg-primary",    softBg: "bg-emerald-50", textColor: "text-primary",    ringColor: "ring-emerald-200" },
};

export function ProgramsPreview() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#f8fafc]" />
      <div className="absolute inset-0 pattern-grid opacity-30" />

      {/* Ambient blobs — indigo/violet, NOT green */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-white blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-slate-200/70 blur-3xl" />

      <Container className="relative">
        {/* ── Header ── */}
        <div className="mb-16 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-5 py-2 shadow-sm">
            <Star className="h-3.5 w-3.5 fill-indigo-500 text-indigo-500" />
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Our Programs
            </span>
            <Star className="h-3.5 w-3.5 fill-indigo-500 text-indigo-500" />
          </div>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Comprehensive Care &{" "}
            <span className="text-primary">Skill Building</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Every program at BIWS is designed to nurture the whole child —
            her body, mind, skills, and future.
          </p>
        </div>

        {/* ── Program cards ── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon];
            const c = colorSchemes[program.color];

            return (
              <div
                key={program.id}
                className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  boxShadow: `0 4px 20px -4px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)`,
                }}
              >
                {/* Large faded number */}
                <span
                  className={`pointer-events-none absolute -right-2 -top-3 select-none text-8xl font-black ${c.textColor} opacity-[0.04]`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon circle */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${c.iconBg} shadow-lg ring-4 ${c.ringColor}`}
                  >
                    <Icon className="h-8 w-8 text-white drop-shadow" />
                  </div>
                  {/* Subtle glow dot */}
                  <span
                    className={`absolute -bottom-1 left-6 h-3 w-3 rounded-full blur-sm opacity-70 ${c.accentBg}`}
                  />
                </div>

                {/* Text */}
                <h3 className="text-xl font-extrabold text-foreground">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {program.description}
                </p>

                {/* Hover CTA row */}
                <div
                  className={`mt-5 flex items-center gap-1.5 text-sm font-bold ${c.textColor} translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100`}
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>

                {/* Bottom accent line — replaces the old top line */}
                <div
                  className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full ${c.accentBg} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <Button href="/programs" size="lg" className="rounded-2xl px-8 shadow-lg shadow-indigo-500/20">
            Explore All Programs
            <ArrowRight className="h-5 w-5" />
          </Button>
          <p className="text-sm text-muted">
            6 structured programs · 90 girls served · Est. 2013
          </p>
        </div>
      </Container>
    </section>
  );
}
