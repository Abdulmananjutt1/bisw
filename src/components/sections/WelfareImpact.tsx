"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";
import { 
  GraduationCap, 
  Heart, 
  Users,
  Home,
  Utensils,
  Shirt,
  Stethoscope,
  BookOpen
} from "lucide-react";

interface ImpactStatProps {
  icon: React.ElementType;
  value: string;
  label: string;
  index: number;
}

function ImpactStat({ icon: Icon, value, label, index }: ImpactStatProps) {
  const numericValue = value.replace(/,/g, "");
  const { count, ref } = useCountUp(numericValue, 2000);
  
  // Format with commas
  const formattedCount = count.toLocaleString();

  return (
    <div
      ref={ref}
      className="group flex flex-col items-center text-center"
    >
      {/* Icon Circle */}
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl hover:rotate-6 sm:h-16 sm:w-16">
        <Icon className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8" />
      </div>

      {/* Number */}
      <h3 className="text-2xl font-black text-primary transition-colors duration-300 group-hover:text-primary-dark sm:text-3xl">
        {formattedCount}
      </h3>

      {/* Label */}
      <p className="mt-1.5 max-w-[130px] text-xs font-bold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export function WelfareImpact() {
  const impactStats = [
    { icon: Users, value: "90", label: "Children Under Care" },
    { icon: GraduationCap, value: "100", label: "Students Educated" },
    { icon: Heart, value: "15", label: "Years of Service" },
    { icon: Home, value: "1", label: "Safe Home Provided" },
    { icon: Utensils, value: "98550", label: "Meals Served Annually" },
    { icon: Shirt, value: "50", label: "Skill Training Programs" },
    { icon: Stethoscope, value: "365", label: "Healthcare Services" },
    { icon: BookOpen, value: "25", label: "Educational Programs" },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 opacity-50" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse-soft" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      
      <Container className="relative">
        {/* Heading */}
        <AnimatedSection animation="fade-in-down" threshold={0.3}>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-black text-primary sm:text-3xl lg:text-4xl">
              Your Impact In 2025
            </h2>
          </div>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-10">
          {impactStats.map((stat, index) => (
            <AnimatedSection 
              key={stat.label} 
              animation="zoom-in" 
              delay={index * 100}
              threshold={0.2}
            >
              <ImpactStat
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
