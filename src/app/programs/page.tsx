import { programs } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import {
  Home,
  GraduationCap,
  Laptop,
  HeartPulse,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  HandHeart,
  ClipboardCheck,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Programs — Orphan Care, Education & Skill Training | BIWS Orphanage Lahore",
  description:
    "BIWS Orphanage programs in Lahore, Pakistan — residential orphan care, girls education, computer & skill training, health & wellbeing for 90 girls at Model Town campus.",
  keywords: [
    "orphanage programs Pakistan",
    "orphan girls education Lahore",
    "skill training for orphans Pakistan",
    "vocational training girls Lahore",
    "computer lab orphanage Pakistan",
    "beautician training orphanage",
    "stitching training girls Pakistan",
    "BIWS programs",
    "NGO programs Lahore",
  ],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.beguminayat.com"}/programs` },
  openGraph: {
    title: "Programs — Orphan Care, Education & Skill Training | BIWS Orphanage Lahore",
    description:
      "Orphan care, girls education, vocational skill training, health & safe environment — 6 programs for 90 girls at BIWS Orphanage, Model Town Lahore.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.beguminayat.com"}/programs`,
  },
};

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
    softBg: string;
    textColor: string;
    checkColor: string;
    ringColor: string;
    borderColor: string;
  }
> = {
  teal:   { iconBg: "bg-teal-500",   softBg: "bg-teal-50/60",   textColor: "text-teal-700",   checkColor: "text-teal-500",   ringColor: "ring-teal-200",   borderColor: "border-teal-100" },
  blue:   { iconBg: "bg-blue-500",   softBg: "bg-blue-50/60",   textColor: "text-blue-700",   checkColor: "text-blue-500",   ringColor: "ring-blue-200",   borderColor: "border-blue-100" },
  purple: { iconBg: "bg-purple-500", softBg: "bg-purple-50/60", textColor: "text-purple-700", checkColor: "text-purple-500", ringColor: "ring-purple-200", borderColor: "border-purple-100" },
  rose:   { iconBg: "bg-rose-500",   softBg: "bg-rose-50/60",   textColor: "text-rose-700",   checkColor: "text-rose-500",   ringColor: "ring-rose-200",   borderColor: "border-rose-100" },
  green:  { iconBg: "bg-green-600",  softBg: "bg-green-50/60",  textColor: "text-green-700",  checkColor: "text-green-500",  ringColor: "ring-green-200",  borderColor: "border-green-100" },
  amber:  { iconBg: "bg-primary",    softBg: "bg-emerald-50/60", textColor: "text-primary",    checkColor: "text-primary",    ringColor: "ring-emerald-200", borderColor: "border-emerald-100" },
};

const programDetails: Record<string, { features: string[]; image: string }> = {
  "orphan-care": {
    features: [
      "Full residential care with 3 nutritious meals daily",
      "Clothing, hygiene, and all daily essentials provided",
      "Emotional support and counseling services",
      "Safe, clean, and comfortable living quarters",
    ],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80",
  },
  education: {
    features: [
      "Quality formal schooling aligned with national curriculum",
      "After-school tutoring and academic support",
      "Books, uniforms, and stationery provided",
      "Special education support when needed",
    ],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80",
  },
  "skill-training": {
    features: [
      "Computer & digital literacy classes",
      "Web development and IT education",
      "Beautician and grooming training",
      "Stitching and tailoring vocational courses",
    ],
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=700&q=80",
  },
  health: {
    features: [
      "Regular medical checkups and health screenings",
      "Nutritional meal planning and monitoring",
      "Dental and eye care services",
      "Mental health and emotional wellbeing support",
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
  },
  "safe-environment": {
    features: [
      "24/7 secure residential campus",
      "CCTV surveillance and security measures",
      "Trained female staff and housemothers",
      "Structured daily routines and activities",
    ],
    image: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=700&q=80",
  },
  community: {
    features: [
      "Annual prize distribution ceremonies",
      "Independence Day and national event celebrations",
      "Sports and creative activity days",
      "Parent/guardian interaction and community visits",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80",
  },
};

export default function ProgramsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate flex min-h-[430px] overflow-hidden bg-[#101820] py-12 sm:h-[500px] sm:min-h-0 sm:py-0">
        {/* Background */}
        <Image
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1800&q=85"
          alt="Students learning and reading together"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-75"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#07120f]/72" />

        <Container className="relative flex h-full flex-col justify-center text-center">
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Our <span className="text-secondary-light">Programs</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">
            BIWS combines residential care, school support, vocational training,
            health, and confidence-building activities so every girl can grow
            with dignity and opportunity.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button href="/donate" className="rounded-xl bg-secondary shadow-lg shadow-secondary/25 hover:bg-secondary-dark">
              Support Our Programs
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="outline" className="rounded-xl border-white/30 text-white hover:bg-white hover:text-primary-darker">
              Contact Us
            </Button>
          </div>

          {/* Mini stats strip */}
          <div className="mx-auto mt-8 grid max-w-lg grid-cols-3 gap-3">
            {[
              { value: "6", label: "Programs" },
              { value: "90", label: "Girls Served" },
              { value: "13+", label: "Years Running" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 shadow-sm backdrop-blur-sm">
                <p className="text-xl font-black text-secondary-light sm:text-2xl">{s.value}</p>
                <p className="mt-0.5 text-[11px] font-semibold text-white/65 sm:text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Program Detail Cards ── */}
      <section className="bg-[#f7f8f7] py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Designed for every stage
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A complete pathway from care to confidence.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              BIWS programs work like one journey: first a safe home, then
              education, skills, health, protection, and community experiences
              that help every girl move forward.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-6xl">
            <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gray-200 lg:block" />

            <div className="space-y-10">
              {programs.map((program, i) => {
                const Icon = iconMap[program.icon];
                const c = colorSchemes[program.color];
                const detail = programDetails[program.id];
                const isEven = i % 2 === 0;
                const number = String(i + 1).padStart(2, "0");

                return (
                  <article
                    key={program.id}
                    className="relative grid gap-5 lg:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] lg:items-center"
                  >
                    <div className={isEven ? "lg:order-1" : "lg:order-3"}>
                      <div className="rounded-[1.5rem] border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
                        <div className="flex items-start gap-4">
                          <span
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${c.iconBg} shadow-lg`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </span>
                          <div>
                            <p className={`text-xs font-bold uppercase tracking-[0.16em] ${c.textColor}`}>
                              Program {number}
                            </p>
                            <h3 className="mt-1 text-2xl font-extrabold text-foreground">
                              {program.title}
                            </h3>
                          </div>
                        </div>

                        <p className="mt-5 text-sm leading-relaxed text-muted">
                          {program.description}
                        </p>

                        {detail && (
                          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                            {detail.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-3 rounded-xl bg-[#f7f8f7] px-3 py-3"
                              >
                                <CheckCircle2
                                  className={`mt-0.5 h-4 w-4 shrink-0 ${c.checkColor}`}
                                />
                                <span className="text-sm leading-relaxed text-foreground/75">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    <div className="hidden justify-center lg:order-2 lg:flex">
                      <span className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border bg-white text-lg font-black shadow-lg ${c.borderColor} ${c.textColor}`}>
                        {number}
                      </span>
                    </div>

                    <div className={isEven ? "lg:order-3" : "lg:order-1"}>
                      {detail && (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] shadow-sm">
                          <Image
                            src={detail.image}
                            alt={program.title}
                            fill
                            sizes="(min-width: 1024px) 42vw, 100vw"
                            className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                            unoptimized
                          />
                          <div className="absolute inset-0 bg-black/35" />
                          <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                            BIWS Girls Campus
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-warm-bg py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our approach</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Care that grows with every girl.</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-muted">We bring day-to-day care, education, confidence-building, and future-ready skills together—because lasting change needs more than one program.</p>
              <Button href="/contact" variant="outline" className="mt-7">Talk to our team <ArrowRight className="h-4 w-4" /></Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: HandHeart, title: "Nurture", text: "Safe care, belonging, and emotional support every day." },
                { icon: BookOpen, title: "Learn", text: "Academic guidance and practical skills for confidence." },
                { icon: ClipboardCheck, title: "Thrive", text: "Individual progress and wellbeing are always in focus." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div><h3 className="mt-4 font-bold text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{text}</p></div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary-darker p-px shadow-2xl">
            <div className="relative overflow-hidden rounded-3xl bg-primary-darker px-8 py-12 text-center sm:px-16">
              {/* Ambient blob */}
              <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-48 w-96 rounded-full bg-white/5 blur-2xl" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-lighter/70">
                  Make a Difference Today
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                  Support These Programs
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/75">
                  Your donation directly funds education, care, and skill training
                  for 90 orphan girls in Lahore.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    href="/donate"
                    variant="secondary"
                    size="lg"
                    className="rounded-2xl font-bold shadow-lg shadow-secondary/30"
                  >
                    Donate Now
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    size="lg"
                    className="rounded-2xl border-white/40 text-white hover:bg-white hover:text-primary-darker"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
