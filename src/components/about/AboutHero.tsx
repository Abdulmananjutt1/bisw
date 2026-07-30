import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Award, Calendar } from "lucide-react";

const heroStats = [
  { value: "90", label: "Girls" },
  { value: "13+", label: "Years" },
  { value: "5+", label: "Programs" },
  { value: "100+", label: "Visitors/yr" },
] as const;

export function AboutHero() {
  return (
    <section id="about" className="relative isolate scroll-mt-24 overflow-hidden bg-slate-950 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqQotmqhl9iZBaJe-PN5xT8Q8G2pCKArZu0IJKny9PkggW9Q0dkL5c809&s=10')] bg-cover bg-center" />

      <Container className="relative text-center drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
          <Calendar className="h-4 w-4 text-secondary-light" />
          Established {siteConfig.established} - Model Town, Lahore
        </div>
        <p className="mx-auto mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary-light">
          <Award className="h-4 w-4" />
          A home built on dignity and opportunity
        </p>
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          About <span className="text-secondary-light">BIWS</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">
          {siteConfig.fullName} - a home of hope and opportunity for 90 orphan girls in Lahore since 2013.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/20 bg-slate-950/35 p-4 backdrop-blur-sm">
              <p className="text-2xl font-extrabold text-white">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
