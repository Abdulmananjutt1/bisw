import { getInvolvedOptions, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  ClipboardList,
  HandHeart,
  HeartHandshake,
  type LucideIcon,
  ArrowRight,
  Users,
  Building2,
  Megaphone,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  HandHeart,
  HeartHandshake,
  ClipboardList,
};

const optionColors = [
  {
    bg: "bg-emerald-50",
    icon: "bg-emerald-500",
    border: "border-emerald-100 hover:border-emerald-300",
    accent: "text-emerald-600",
    glow: "shadow-emerald-500/20",
  },
  {
    bg: "bg-amber-50",
    icon: "bg-amber-500",
    border: "border-amber-100 hover:border-amber-300",
    accent: "text-amber-600",
    glow: "shadow-amber-500/20",
  },
  {
    bg: "bg-blue-50",
    icon: "bg-blue-500",
    border: "border-blue-100 hover:border-blue-300",
    accent: "text-blue-600",
    glow: "shadow-blue-500/20",
  },
];

const partnerWays = [
  {
    icon: Users,
    title: "Corporate CSR",
    desc: "Align your company's social responsibility goals with direct impact for orphan girls.",
  },
  {
    icon: Building2,
    title: "Institutional Support",
    desc: "Partner as an NGO, university, or trust to co-deliver programs and share resources.",
  },
  {
    icon: Megaphone,
    title: "Spread Awareness",
    desc: "Amplify our mission on social media, events, or within your community network.",
  },
];

export function GetInvolved() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ── LEFT COLUMN ── */}
          <div>
            <span className="inline-block rounded-full border border-violet-200 bg-violet-50 px-5 py-1.5 text-sm font-bold uppercase tracking-widest text-violet-600">
              Get Involved
            </span>

            <h2 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">
              Ways You Can Help Today
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-muted">
              BIWS was founded in {siteConfig.established} by{" "}
              <strong className="font-semibold text-foreground">Dr. Amna Amber</strong>. Our Girls
              Campus is home to{" "}
              <strong className="font-semibold text-foreground">90 orphan girls</strong> receiving
              education, care, and skill development.
            </p>

            {/* Action cards */}
            <div className="mt-8 space-y-4">
              {getInvolvedOptions.map((option, i) => {
                const Icon = iconMap[option.icon];
                const colors = optionColors[i];
                return (
                  <div
                    key={option.id}
                    className={`group flex items-start gap-5 rounded-2xl border ${colors.border} ${colors.bg} p-5 transition-all duration-300 hover:-translate-x-1 hover:shadow-lg hover:${colors.glow}`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.icon} shadow-md`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-foreground">{option.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {option.description}
                      </p>
                    </div>
                    <a
                      href={option.href}
                      className={`flex shrink-0 items-center gap-1 text-sm font-bold ${colors.accent} transition-all group-hover:gap-2`}
                    >
                      {option.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Donate + Volunteer CTA strip */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="/donate"
                size="md"
                className="rounded-xl bg-secondary hover:bg-secondary-dark border-0 shadow-lg shadow-secondary/25"
              >
                <HeartHandshake className="h-5 w-5" />
                Donate Now
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="md"
                className="rounded-xl"
              >
                <HandHeart className="h-5 w-5" />
                Volunteer With Us
              </Button>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-7">

            {/* Become a Partner card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 p-7 text-white shadow-2xl shadow-slate-300/50">
              {/* Decorative rings */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-secondary/10" />
              <div className="pointer-events-none absolute right-12 bottom-0 h-px w-48 bg-white/15" />

              <div className="relative">
                <span className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white/80">
                  Become a Partner
                </span>

                <h3 className="mt-3 text-2xl font-extrabold text-white leading-snug">
                  Extend Your Impact <br className="hidden sm:block" />
                  Beyond a Single Gift
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  Join as a corporate sponsor, institutional partner, or community advocate — and
                  help us build a sustainable future for girls at BIWS.
                </p>

                {/* Partnership types */}
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {partnerWays.map(({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-white/10 bg-white/10 p-3.5 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/15"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 mb-2">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-sm font-bold text-white">{title}</p>
                      <p className="mt-1 text-[11px] leading-snug text-white/55">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    href="/contact"
                    size="sm"
                    className="rounded-xl bg-secondary hover:bg-secondary-dark border-0 shadow-lg shadow-secondary/30 text-white"
                  >
                    Partner With Us
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    href="/about"
                    variant="outline"
                    size="sm"
                    className="rounded-xl border-white/35 text-white hover:bg-white hover:text-primary-darker"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
