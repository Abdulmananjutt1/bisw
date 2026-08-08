import { getInvolvedOptions, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  ClipboardList,
  HandHeart,
  HeartHandshake,
  type LucideIcon,
  ArrowRight,
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

export function GetInvolved() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl">

          {/* ── CONTENT ── */}
          <span className="inline-block rounded-full border border-violet-200 bg-violet-50 px-5 py-1.5 text-sm font-bold uppercase tracking-widest text-violet-600">
            Get Involved
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">
            Ways You Can Help Today
          </h2>

          {/* Action cards */}
          <div className="mt-6 grid gap-3">
            {getInvolvedOptions.map((option, i) => {
              const Icon = iconMap[option.icon];
              const colors = optionColors[i];
              return (
                <a
                  key={option.id}
                  href={option.href}
                  className={`group grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-xl border ${colors.border} ${colors.bg} px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:${colors.glow} sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colors.icon} shadow-md`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-foreground sm:text-[15px]">
                      {option.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-snug text-muted sm:text-[13px]">
                      {option.description}
                    </p>
                  </div>
                  <span
                    className={`col-start-2 inline-flex shrink-0 items-center gap-1 text-xs font-bold ${colors.accent} transition-all group-hover:gap-2 sm:col-start-auto`}
                  >
                    {option.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
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
      </Container>
    </section>
  );
}
