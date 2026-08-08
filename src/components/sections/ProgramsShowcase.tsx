import { Container } from "@/components/ui/Container";
import { Home, GraduationCap, HeartPulse, Laptop, Shield, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    icon: Home,
    title: "Orphan Care",
    desc: "Safe shelter, daily meals, clothing, and emotional support for 90 girls.",
    color: "bg-emerald-50 text-emerald-600",
    border: "hover:border-emerald-200",
  },
  {
    icon: GraduationCap,
    title: "Girls Education",
    desc: "Quality schooling, tutoring, and academic support for every girl.",
    color: "bg-blue-50 text-blue-600",
    border: "hover:border-blue-200",
  },
  {
    icon: Laptop,
    title: "Skill Training",
    desc: "Computer, IT, stitching & beautician programs for self-reliance.",
    color: "bg-violet-50 text-violet-600",
    border: "hover:border-violet-200",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellbeing",
    desc: "Regular checkups, nutrition support, and mental wellness care.",
    color: "bg-rose-50 text-rose-600",
    border: "hover:border-rose-200",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    desc: "A loving, secure campus where every girl feels at home.",
    color: "bg-amber-50 text-amber-600",
    border: "hover:border-amber-200",
  },
  {
    icon: Users,
    title: "Community Events",
    desc: "Celebrations, prize distributions & gatherings that build confidence.",
    color: "bg-teal-50 text-teal-600",
    border: "hover:border-teal-200",
  },
];

export function ProgramsShowcase() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-6xl">

        {/* Heading */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="inline-flex items-center rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
              Our Programs
            </p>
            <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
              What We Do Every Day
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
              Six core programs running together to give every orphan girl a
              safe, educated, and empowered future.
            </p>
          </div>
          <Link
            href="/programs"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
          >
            All Programs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Program cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ icon: Icon, title, desc, color, border }) => (
            <div
              key={title}
              className={`group flex gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md ${border}`}
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}>
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
