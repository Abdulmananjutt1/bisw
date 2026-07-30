"use client";

import { GalleryCard } from "@/components/gallery/GalleryCard";
import type { GalleryItem } from "@/config/gallery";
import { cn } from "@/lib/utils";
import {
  CalendarCheck,
  Camera,
  GraduationCap,
  Heart,
  Images,
  Laptop,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";

type GalleryExplorerProps = {
  items: GalleryItem[];
  categories: string[];
};

type CategoryMeta = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const defaultCategoryMeta: CategoryMeta = {
  icon: Camera,
  title: "Campus Moments",
  description:
    "A closer look at the daily life, learning, celebrations, and growth across BIWS Girls Campus.",
};

const categoryMeta: Record<string, CategoryMeta> = {
  "All moments": {
    icon: Images,
    title: "All Campus Moments",
    description:
      "Browse every photo story from events, education, skills programs, campus upgrades, and everyday memories.",
  },
  "Annual Event": {
    icon: CalendarCheck,
    title: "Annual Events",
    description:
      "Recognition days, campus gatherings, and milestone events that celebrate effort and confidence.",
  },
  "Digital Learning": {
    icon: Laptop,
    title: "Digital Learning",
    description:
      "Computer lab sessions and technology learning moments that prepare girls for a digital future.",
  },
  "Skills Program": {
    icon: Sparkles,
    title: "Skills Programs",
    description:
      "Hands-on vocational learning, creative practice, and self-reliance focused training sessions.",
  },
  "Campus Upgrade": {
    icon: ShieldCheck,
    title: "Campus Upgrades",
    description:
      "Infrastructure and facilities work that improves comfort, safety, and daily campus operations.",
  },
  Celebration: {
    icon: Heart,
    title: "Celebrations",
    description:
      "Joyful campus days where girls participate, perform, decorate, and build memories together.",
  },
  Education: {
    icon: GraduationCap,
    title: "Education",
    description:
      "Classroom activities, guided study, academic support, and everyday learning at BIWS.",
  },
};

export function GalleryExplorer({ items, categories }: GalleryExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0] ?? "All moments");

  const counts = useMemo(() => {
    const categoryCounts = new Map<string, number>();
    categoryCounts.set("All moments", items.length);

    for (const item of items) {
      categoryCounts.set(item.category, (categoryCounts.get(item.category) ?? 0) + 1);
    }

    return categoryCounts;
  }, [items]);

  const selectedItems = useMemo(() => {
    if (selectedCategory === "All moments") {
      return items;
    }

    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  const selectedMeta = categoryMeta[selectedCategory] ?? defaultCategoryMeta;
  const SelectedIcon = selectedMeta.icon;

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[270px_1fr] lg:items-start">
      <aside className="rounded-[1.4rem] border border-gray-200 bg-white p-3 shadow-sm lg:sticky lg:top-28">
        <div className="px-2 pb-3 pt-1">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Explore by type
          </p>
        </div>
        <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
          {categories.map((category) => {
            const meta = categoryMeta[category] ?? defaultCategoryMeta;
            const Icon = meta.icon;
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-2xl px-3.5 py-3 text-left transition-all",
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white text-foreground/75 hover:bg-gray-50 hover:text-foreground"
                )}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                      isActive ? "bg-white/18 text-white" : "bg-primary/10 text-primary"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="truncate text-sm font-bold">{category}</span>
                </span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[11px] font-bold",
                    isActive ? "bg-white/18 text-white" : "bg-gray-100 text-muted"
                  )}
                >
                  {counts.get(category) ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      <div>
        <div className="rounded-[1.5rem] border border-gray-200 bg-[#f7f8f7] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/20">
                <SelectedIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  {selectedItems.length} stories
                </p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                  {selectedMeta.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {selectedMeta.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {selectedItems.map((item, index) => (
            <GalleryCard
              key={item.slug}
              item={item}
              featured={index === 0 && selectedItems.length > 1}
              priority={index < 2}
              className={index === 0 && selectedItems.length > 1 ? "sm:col-span-2" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
