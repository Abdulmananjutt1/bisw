"use client";

import { Button } from "@/components/ui/Button";
import { CountUpText } from "@/components/ui/CountUpText";
import { causes, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Home,
  Target,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";

type Cause = (typeof causes)[number];

type DonationCauseSelectorProps = {
  causesList: readonly Cause[];
};

const causeIconMap: Record<string, LucideIcon> = {
  Home,
  GraduationCap,
  HeartPulse,
};

const causeImpact: Record<string, string[]> = {
  "orphan-care": [
    "Daily meals, clothing, and hygiene essentials",
    "Safe residential care with dignity",
    "Warm routines that help girls feel at home",
  ],
  education: [
    "Books, uniforms, stationery, and tutoring",
    "Classroom resources for better outcomes",
    "Support that keeps learning consistent",
  ],
  health: [
    "Nutrition, medical checkups, and wellbeing",
    "Care for physical and emotional health",
    "Preventive support for safer daily life",
  ],
};

const donationAmounts = [5000, 10000, 25000, 50000];

function getPercentage(cause: Cause) {
  return cause.goal
    ? Math.min(Math.round((cause.raised / cause.goal) * 100), 100)
    : 0;
}

function formatPKR(value: number) {
  return `PKR ${value.toLocaleString()}`;
}

export function DonationCauseSelector({ causesList }: DonationCauseSelectorProps) {
  const [selectedCauseId, setSelectedCauseId] = useState(causesList[0]?.id ?? "");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const selectedCause = useMemo(
    () => causesList.find((cause) => cause.id === selectedCauseId) ?? causesList[0],
    [causesList, selectedCauseId]
  );

  const totals = useMemo(() => {
    const raised = causesList.reduce((sum, cause) => sum + cause.raised, 0);
    const goal = causesList.reduce((sum, cause) => sum + cause.goal, 0);
    return {
      raised,
      goal,
      percentage: goal ? Math.min(Math.round((raised / goal) * 100), 100) : 0,
    };
  }, [causesList]);

  if (!selectedCause) {
    return null;
  }

  const SelectedIcon = causeIconMap[selectedCause.icon] ?? Target;
  const selectedPercentage = getPercentage(selectedCause);
  const remaining = Math.max(selectedCause.goal - selectedCause.raised, 0);
  const totalRemaining = Math.max(totals.goal - totals.raised, 0);
  const donationMessage = selectedAmount
    ? `I would like to support ${selectedCause.title} with ${formatPKR(selectedAmount)}. Please guide me with the next step.`
    : `I would like to support ${selectedCause.title}. Please guide me with the next step.`;
  const mailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Donation inquiry - ${selectedCause.title}`
  )}&body=${encodeURIComponent(donationMessage)}`;

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
            <HandHeart className="h-4 w-4" />
            Make your impact
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Choose a cause and send support with confidence.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Select the need you want to support, pick a pledge amount, and BIWS
            will guide you with the donation transfer details.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-primary/10 bg-emerald-50 p-5 shadow-lg shadow-emerald-950/5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">
                Overall progress
              </p>
              <p className="mt-2 text-2xl font-black text-foreground">
                <CountUpText value={totals.raised} prefix="PKR " />
              </p>
            </div>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-lg font-black text-primary shadow-inner">
              <CountUpText value={totals.percentage} suffix="%" />
            </div>
          </div>
          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${totals.percentage}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-bold text-muted">
            <span>Goal {formatPKR(totals.goal)}</span>
            <span>{formatPKR(totalRemaining)} remaining</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {causesList.map((cause) => {
          const Icon = causeIconMap[cause.icon] ?? Target;
          const percentage = getPercentage(cause);
          const isActive = selectedCause.id === cause.id;

          return (
            <button
              key={cause.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setSelectedCauseId(cause.id)}
              className={cn(
                "group min-h-[210px] rounded-[1.5rem] p-5 text-left transition-all duration-300",
                isActive
                  ? "bg-primary text-white shadow-xl shadow-primary/20"
                  : "bg-white text-foreground shadow-[0_18px_45px_-32px_rgba(6,78,59,0.45)] hover:-translate-y-1 hover:shadow-[0_24px_55px_-34px_rgba(6,78,59,0.55)]"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors",
                    isActive
                      ? "bg-white/18 text-white"
                      : "bg-emerald-50 text-primary"
                  )}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-black",
                    isActive
                      ? "bg-white/18 text-white"
                      : "bg-primary/10 text-primary"
                  )}
                >
                  <CountUpText value={percentage} suffix="%" /> funded
                </span>
              </div>
              <p
                className={cn(
                  "mt-5 text-xs font-black uppercase tracking-[0.15em]",
                  isActive ? "text-primary-lighter" : "text-primary"
                )}
              >
                {cause.title}
              </p>
              <h3 className="mt-2 text-xl font-extrabold leading-snug">
                {cause.subtitle}
              </h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  isActive ? "text-white/76" : "text-muted"
                )}
              >
                {cause.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        <article className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-8">
          <div className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_160px] xl:items-start">
            <div className="flex gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <SelectedIcon className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                  Selected cause
                </p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
                  {selectedCause.subtitle}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {selectedCause.description}
                </p>
              </div>
            </div>

            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-emerald-50 p-3">
              <div
                className="flex h-full w-full items-center justify-center rounded-full p-2"
                style={{
                  background: `conic-gradient(var(--primary) ${
                    selectedPercentage * 3.6
                  }deg, #d1fae5 0deg)`,
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white text-center">
                  <span className="text-3xl font-black text-primary">
                    <CountUpText
                      key={selectedCause.id}
                      value={selectedPercentage}
                      suffix="%"
                    />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                    funded
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-6 border-t border-emerald-100 pt-7 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">
                Fund summary
              </p>
              <div className="mt-4 divide-y divide-emerald-100 rounded-2xl border border-emerald-100">
                {[
                  { label: "Raised", value: selectedCause.raised },
                  { label: "Goal", value: selectedCause.goal },
                  { label: "Remaining", value: remaining },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 px-4 py-3"
                  >
                    <span className="text-sm font-bold text-muted">
                      {item.label}
                    </span>
                    <span className="text-sm font-black text-foreground">
                      <CountUpText
                        key={`${selectedCause.id}-${item.label}`}
                        value={item.value}
                        prefix="PKR "
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">
                What your support covers
              </p>
              <div className="mt-4 space-y-3">
                {(causeImpact[selectedCause.id] ?? []).map((impact) => (
                  <div
                    key={impact}
                    className="flex items-start gap-3 rounded-2xl bg-emerald-50 px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm font-semibold leading-relaxed text-foreground">
                      {impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <aside className="rounded-[1.75rem] border border-primary/10 bg-[linear-gradient(180deg,#f0fdf4_0%,#ffffff_100%)] p-6 shadow-xl shadow-emerald-950/5 sm:p-7">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
            <Banknote className="h-6 w-6" />
          </div>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-primary">
            Choose amount
          </p>
          <h4 className="mt-2 text-2xl font-extrabold leading-tight text-foreground">
            Make a pledge for {selectedCause.title}.
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            This opens an email with your selected cause and amount so BIWS can
            guide you with the donation transfer.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {donationAmounts.map((amount) => {
              const isSelected = selectedAmount === amount;
              return (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setSelectedAmount(amount)}
                  className={cn(
                    "min-h-12 rounded-xl border px-3 text-sm font-black transition-all",
                    isSelected
                      ? "border-primary bg-primary text-white shadow-lg shadow-primary/20"
                      : "border-emerald-100 bg-white text-foreground hover:border-primary/35 hover:bg-emerald-50"
                  )}
                >
                  {formatPKR(amount)}
                </button>
              );
            })}
          </div>

          <Button
            href={mailHref}
            className="mt-6 w-full justify-center bg-secondary text-white shadow-secondary/25 hover:bg-secondary-dark"
          >
            Support this cause
            <ArrowRight className="h-4 w-4" />
          </Button>
        </aside>
      </div>
    </div>
  );
}
