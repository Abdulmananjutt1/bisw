import { Container } from "@/components/ui/Container";
import {
  getSupportPageHref,
  supportPages,
  type SupportIcon,
} from "@/config/get-involved";
import {
  Baby,
  CalendarCheck,
  ClipboardPenLine,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<SupportIcon | "CalendarCheck", LucideIcon> = {
  Baby,
  CalendarCheck,
  ClipboardPenLine,
  GraduationCap,
  HandHeart,
  HeartHandshake,
};

export function GetInvolvedQuickLinks() {
  const quickLinks = [
    ...supportPages.map((item) => ({
      id: item.slug,
      title: item.title,
      description: item.description,
      href: getSupportPageHref(item),
      icon: item.icon,
    })),
    {
      id: "visit",
      title: "Plan a Visit",
      description: "Schedule a respectful visit to the Girls Campus.",
      href: "/get-involved#visit",
      icon: "CalendarCheck" as const,
    },
  ];

  return (
    <section className="bg-[#f7f8f7] py-12 sm:py-16">
      <Container>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {quickLinks.map(({ id, title, description, href, icon }) => {
            const Icon = iconMap[icon];

            return (
              <Link
                key={id}
                href={href}
                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-emerald-950/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-base font-bold text-foreground">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
