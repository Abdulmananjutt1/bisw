import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  ArrowRight,
  BookOpenCheck,
  HeartPulse,
  Home,
  Laptop,
  ShieldCheck,
  Sparkles,
  Utensils,
  type LucideIcon,
} from "lucide-react";

const carePillars: {
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  tone: string;
  iconTone: string;
}[] = [
  {
    title: "Safe Shelter",
    description:
      "A protected Girls Campus where children receive daily care, belonging, and a stable home environment.",
    icon: Home,
    badge: "Home & Care",
    tone: "border-slate-200 bg-white",
    iconTone: "bg-slate-900 text-white",
  },
  {
    title: "Education Support",
    description:
      "Schooling, tutoring, reading practice, and learning materials to keep every girl moving forward.",
    icon: BookOpenCheck,
    badge: "Learning",
    tone: "border-slate-200 bg-white",
    iconTone: "bg-slate-800 text-white",
  },
  {
    title: "Health & Wellbeing",
    description:
      "Nutritious meals, health checkups, emotional support, and routines that help children feel secure.",
    icon: HeartPulse,
    badge: "Wellbeing",
    tone: "border-slate-200 bg-white",
    iconTone: "bg-slate-700 text-white",
  },
  {
    title: "Skill Development",
    description:
      "Computer, stitching, beautician, and IT training that builds confidence for a self-reliant future.",
    icon: Laptop,
    badge: "Future Skills",
    tone: "border-slate-200 bg-white",
    iconTone: "bg-slate-600 text-white",
  },
];

const quickFacts = [
  { value: "90", label: "Girls in care" },
  { value: "2013", label: "Serving since" },
  { value: "5", label: "Skill programs" },
];

export function CareOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gray-100 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
              <ShieldCheck className="h-4 w-4" />
              Complete Daily Care
            </span>

            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
              A Home That Covers Every Need
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
              BIWS Girls Campus supports orphan girls with the essentials of
              childhood: a safe place to live, food, education, emotional care,
              and practical skills for the future.
            </p>

            <div className="mt-7 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_55px_-45px_rgba(15,25,35,0.45)]">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-r border-slate-100 px-4 py-4 last:border-r-0"
                >
                  <p className="text-2xl font-black text-primary sm:text-3xl">
                    {fact.value}
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-muted">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/about" size="lg" className="rounded-2xl">
                About BIWS
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                href="/get-involved"
                variant="outline"
                size="lg"
                className="rounded-2xl bg-white"
              >
                Get Involved
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {carePillars.map(({ title, description, icon: Icon, badge, tone, iconTone }) => (
              <article
                key={title}
                className={`group relative min-h-[220px] overflow-hidden rounded-2xl border p-5 shadow-[0_16px_45px_-38px_rgba(15,25,35,0.5)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-40px_rgba(15,25,35,0.45)] ${tone}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-lg ${iconTone}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-slate-600 ring-1 ring-white">
                    {badge}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {description}
                </p>

                <div className="absolute bottom-4 right-4 opacity-10 transition duration-300 group-hover:scale-110 group-hover:opacity-15">
                  <Sparkles className="h-16 w-16 text-foreground" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-white shadow-lg shadow-secondary/20">
              <Utensils className="h-5 w-5" />
            </div>
            <div>
              <p className="font-extrabold text-foreground">
                Every day begins with care and consistency.
              </p>
              <p className="mt-1 text-sm leading-6 text-muted">
                Your support helps BIWS provide food, uniforms, school supplies,
                health support, and a nurturing campus routine in Lahore.
              </p>
            </div>
          </div>
          <Button
            href="/donate"
            variant="secondary"
            className="shrink-0 rounded-2xl"
          >
            Support {siteConfig.name}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
