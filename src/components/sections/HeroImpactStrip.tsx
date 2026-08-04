import { Container } from "@/components/ui/Container";
import {
  BookOpenCheck,
  HeartHandshake,
  HeartPulse,
  Home,
  ShieldCheck,
  Utensils,
  type LucideIcon,
} from "lucide-react";

const impactItems: {
  value: string;
  label: string;
  detail: string;
  icon: LucideIcon;
  tone: string;
}[] = [
  {
    value: "90",
    label: "Girls Supported",
    detail: "Safe shelter, meals, clothing, and daily care.",
    icon: Home,
    tone: "bg-slate-100 text-slate-700",
  },
  {
    value: "13+",
    label: "Years of Service",
    detail: "Serving orphan girls in Lahore since 2013.",
    icon: ShieldCheck,
    tone: "bg-gray-100 text-gray-700",
  },
  {
    value: "5",
    label: "Skill Programs",
    detail: "Computer, IT, stitching, beautician, and life skills.",
    icon: BookOpenCheck,
    tone: "bg-slate-100 text-slate-700",
  },
];

const dailyCare = [
  { icon: Utensils, text: "Nutritious meals and everyday essentials" },
  { icon: HeartPulse, text: "Health, wellbeing, and emotional support" },
  { icon: HeartHandshake, text: "Donor-backed education and sponsorship" },
];

export function HeroImpactStrip() {
  return (
    <section className="relative z-20 bg-[#f8fafc] py-12">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_28px_80px_-48px_rgba(15,23,42,0.42)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-px bg-slate-100 sm:grid-cols-3">
              {impactItems.map(({ value, label, detail, icon: Icon, tone }) => (
                <article key={label} className="bg-white p-5 sm:p-6">
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${tone}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-3xl font-black leading-none text-foreground">
                    {value}
                  </p>
                  <h3 className="mt-2 text-sm font-extrabold uppercase tracking-wide text-foreground">
                    {label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
                </article>
              ))}
            </div>

            <div className="relative overflow-hidden bg-primary-darker px-6 py-6 text-white sm:px-8">
              <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-4 top-4 h-28 w-28 rounded-full border border-secondary/20" />

              <div className="relative">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-lighter/80">
                  Daily Campus Support
                </p>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight">
                  Your help becomes routine care, not just one-time relief.
                </h2>

                <div className="mt-5 space-y-3">
                  {dailyCare.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/12 ring-1 ring-white/15">
                        <Icon className="h-4 w-4 text-secondary-light" />
                      </div>
                      <p className="text-sm font-medium leading-5 text-white/78">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
