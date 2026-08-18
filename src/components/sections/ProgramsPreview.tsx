import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { programs } from "@/config/site";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Home,
  Laptop,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home,
  GraduationCap,
  Laptop,
  HeartPulse,
  Shield,
  Users,
};

const careModel = [
  "Safe residential care and daily essentials",
  "Schooling, tutoring, and wellbeing support",
  "Practical skills for confidence and independence",
];

export function ProgramsPreview() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbf8] py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
            Our Programs
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Care, education, and skills in one steady path.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <article className="flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-primary-darker p-7 text-white shadow-xl shadow-primary/15 sm:p-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-primary-lighter/80">
                Complete care model
              </p>
              <h3 className="mt-4 text-3xl font-extrabold leading-tight">
                One campus, many layers of support.
              </h3>
              <p className="mt-4 leading-relaxed text-white/70">
                BIWS programs work together so every girl receives protection,
                education, health support, and practical skills without losing
                the comfort of a home-like routine.
              </p>

              <div className="mt-7 space-y-3">
                {careModel.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary-light" />
                    <p className="text-sm font-semibold leading-relaxed text-white/85">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Button
              href="/programs"
              size="lg"
              className="mt-8 w-full justify-center bg-secondary text-white shadow-secondary/25 hover:bg-secondary-dark"
            >
              Explore All Programs
              <ArrowRight className="h-5 w-5" />
            </Button>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {programs.map((program, i) => {
              const Icon = iconMap[program.icon] ?? Home;

              return (
                <article
                  key={program.id}
                  className="group relative min-h-[220px] overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white p-5 shadow-sm shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10"
                >
                  <span className="pointer-events-none absolute right-4 top-4 rounded-2xl bg-emerald-50 px-3 py-1 text-4xl font-black leading-none text-primary/15 transition-colors group-hover:text-primary/28">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 pr-16 text-lg font-extrabold leading-snug text-foreground">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {program.description}
                  </p>

                  <div
                    className="absolute bottom-0 left-5 right-5 h-0.5 rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
