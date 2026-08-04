import { Container } from "@/components/ui/Container";
import { CountUpText } from "@/components/ui/CountUpText";
import { siteConfig } from "@/config/site";
import { Award } from "lucide-react";

const heroStats = [
  { value: 90, suffix: "", label: "Girls" },
  { value: 13, suffix: "+", label: "Years" },
  { value: 5, suffix: "+", label: "Programs" },
  { value: 100, suffix: "+", label: "Visitors/yr" },
] as const;

export function AboutHero() {
  return (
    <section id="about" className="relative isolate flex min-h-[430px] scroll-mt-24 overflow-hidden bg-[#063f30] py-12 sm:h-[500px] sm:min-h-0 sm:py-0">
      <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqQotmqhl9iZBaJe-PN5xT8Q8G2pCKArZu0IJKny9PkggW9Q0dkL5c809&s=10')] bg-cover bg-center opacity-35" />
      <div className="absolute inset-0 bg-[#052d21]/75" />

      <Container className="relative flex h-full flex-col justify-center text-center drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]">
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
            <div key={stat.label} className="rounded-2xl border border-white/20 bg-primary-darker/35 p-4 backdrop-blur-sm">
              <p className="text-2xl font-extrabold text-white">
                <CountUpText value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
