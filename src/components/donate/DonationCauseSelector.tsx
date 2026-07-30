"use client";

import { Button } from "@/components/ui/Button";
import { causes, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
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
  return Math.min(Math.round((cause.raised / cause.goal) * 100), 100);
}

function formatPKR(value: number) {
  return `PKR ${value.toLocaleString()}`;
}

export function DonationCauseSelector({ causesList }: DonationCauseSelectorProps) {
  const [selectedCauseId, setSelectedCauseId] = useState(causesList[0]?.id ?? "");
  const [selectedAmount, setSelectedAmount] = useState(donationAmounts[1]);

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
      percentage: Math.min(Math.round((raised / goal) * 100), 100),
    };
  }, [causesList]);

  if (!selectedCause) {
    return null;
  }

  const SelectedIcon = causeIconMap[selectedCause.icon] ?? Target;
  const selectedPercentage = getPercentage(selectedCause);
  const remaining = Math.max(selectedCause.goal - selectedCause.raised, 0);
  const mailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Donation inquiry - ${selectedCause.title}`
  )}&body=${encodeURIComponent(
    `I would like to support ${selectedCause.title} with ${formatPKR(selectedAmount)}. Please guide me with the next step.`
  )}`;

  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Make your impact
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Choose where your generosity goes.
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Pick a cause, choose an amount, and send your pledge directly to the
          BIWS team for confirmation.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-full border border-gray-200 bg-[#f7f8f7] px-4 py-3">
        <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-foreground">
            Overall campaign progress
          </span>
          <span className="font-bold text-primary">
            {formatPKR(totals.raised)} raised of {formatPKR(totals.goal)}
          </span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${totals.percentage}%` }}
          />
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
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
                "group rounded-[1.4rem] border p-5 text-left transition-all duration-300",
                isActive
                  ? "border-primary bg-primary text-white shadow-xl shadow-primary/20"
                  : "border-gray-200 bg-white text-foreground hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-emerald-950/10"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-2xl transition-colors",
                    isActive ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  )}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-black",
                    isActive ? "bg-white/20 text-secondary-light" : "bg-[#f7f8f7] text-primary"
                  )}
                >
                  {percentage}%
                </span>
              </div>

              <p className={cn("mt-5 text-xs font-bold uppercase tracking-[0.16em]", isActive ? "text-secondary-light" : "text-primary")}>
                {cause.title}
              </p>
              <h3 className="mt-1 text-xl font-bold">{cause.subtitle}</h3>
              <p className={cn("mt-3 text-sm leading-relaxed", isActive ? "text-white/76" : "text-muted")}>
                {cause.description}
              </p>

              <div className={cn("mt-5 h-2 overflow-hidden rounded-full", isActive ? "bg-white/20" : "bg-gray-100")}>
                <div
                  className={cn("h-full rounded-full", isActive ? "bg-secondary-light" : "bg-primary")}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      <article className="mt-8 overflow-hidden rounded-[1.75rem] border border-gray-200 bg-[#f7f8f7] shadow-sm">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                <SelectedIcon className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Selected fund
                </p>
                <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                  {selectedCause.subtitle}
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  {selectedCause.description}
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-3">
              {[
                { label: "Raised", value: formatPKR(selectedCause.raised) },
                { label: "Goal", value: formatPKR(selectedCause.goal) },
                { label: "Remaining", value: formatPKR(remaining) },
              ].map((item) => (
                <div key={item.label} className="bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 text-lg font-black text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="font-bold text-foreground">Funding progress</span>
                <span className="font-black text-primary">{selectedPercentage}% funded</span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${selectedPercentage}%` }}
                />
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {(causeImpact[selectedCause.id] ?? []).map((impact) => (
                <div key={impact} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm font-semibold leading-relaxed text-foreground/75">
                    {impact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 bg-white p-6 sm:p-8 lg:border-l lg:border-t-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Choose amount
            </p>
            <h4 className="mt-2 text-2xl font-bold text-foreground">
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
                      "rounded-2xl border px-4 py-3 text-sm font-bold transition-all",
                      isSelected
                        ? "border-primary bg-primary text-white shadow-md shadow-primary/20"
                        : "border-gray-200 bg-[#f7f8f7] text-foreground hover:border-primary/30"
                    )}
                  >
                    {formatPKR(amount)}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl bg-[#f7f8f7] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                Selected pledge
              </p>
              <p className="mt-1 text-3xl font-black text-primary">
                {formatPKR(selectedAmount)}
              </p>
            </div>

            <Button href={mailHref} className="mt-6 w-full justify-center">
              Support this cause
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
