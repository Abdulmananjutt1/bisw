"use client";

import { stats } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { useCountUp } from "@/hooks/useCountUp";
import { GraduationCap, Heart, Calendar, Users } from "lucide-react";

const icons = [Users, GraduationCap, Calendar, Heart];

const colors = [
  "bg-emerald-600",
  "bg-blue-600",
  "bg-primary",
  "bg-rose-600",
];

function StatCard({
  value,
  suffix,
  label,
  icon: Icon,
  color,
  index,
}: {
  value: string;
  suffix: string;
  label: string;
  icon: typeof Users;
  color: string;
  index: number;
}) {
  const { count, ref } = useCountUp(value, 2400);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-lg shadow-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background accent */}
      <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${color} opacity-10 transition-all duration-300 group-hover:scale-150 group-hover:opacity-15`} />

      {/* Icon */}
      <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${color} shadow-lg`}>
        <Icon className="h-7 w-7 text-white" />
      </div>

      {/* Number */}
      <p className="text-5xl font-black tabular-nums text-foreground sm:text-6xl">
        {count}
        <span className="text-3xl text-primary">{suffix}</span>
      </p>

      {/* Label */}
      <p className="mt-2 text-base font-semibold text-muted">{label}</p>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 h-1 w-full ${color} rounded-b-3xl opacity-60`} />
    </div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden bg-[#0f1923] py-16 sm:py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-grid opacity-[0.06]" />
      <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Section label */}
      <Container className="relative">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/8 px-5 py-1.5 text-sm font-bold uppercase tracking-widest text-white/70">
            Our Impact
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Transparent Support That Changes Lives
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={icons[i]}
              color={colors[i]}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
