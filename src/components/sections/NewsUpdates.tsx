import { newsItems } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Clock, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categoryStyles: Record<string, string> = {
  "Project Update": "bg-emerald-500",
  "Development":    "bg-blue-500",
  "Skill Training": "bg-purple-500",
};

export function NewsUpdates() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="pointer-events-none absolute -right-20 top-0 h-[400px] w-[400px] rounded-full bg-white blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-slate-200/60 blur-3xl" />

      <Container className="relative">
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-1.5 text-sm font-bold uppercase tracking-widest text-blue-600">
              <Newspaper className="h-4 w-4" />
              News & Updates
            </span>
            <h2 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">
              Latest From BIWS
            </h2>
          </div>
          <Link
            href="/contact"
            className="flex shrink-0 items-center gap-2 rounded-xl border-2 border-blue-500 px-5 py-2.5 text-sm font-bold text-blue-600 transition-all hover:bg-blue-500 hover:text-white"
          >
            All Updates
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* News cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group card-lift overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/35" />

                {/* Category badge */}
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white shadow-md ${categoryStyles[item.category] ?? "bg-gray-600"}`}
                >
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted">
                  <Clock className="h-3.5 w-3.5 text-blue-500" />
                  <span>{item.status}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>

                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-all hover:gap-3"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
