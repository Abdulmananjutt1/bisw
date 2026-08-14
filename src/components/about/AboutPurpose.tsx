import { Container } from "@/components/ui/Container";
import { Eye, Heart, ShieldCheck, Target, Users } from "lucide-react";
import Image from "next/image";

const purposeCards = [
  {
    id: "mission",
    icon: Target,
    eyebrow: "Our Mission",
    title: "Care that builds independence",
    description:
      "To provide every orphan girl with a safe home, quality education, proper nutrition, healthcare, and vocational skills, enabling her to live with dignity and become self-reliant.",
  },
  {
    id: "vision",
    icon: Eye,
    eyebrow: "Our Vision",
    title: "A future with dignity and opportunity",
    description:
      "A society where no orphan girl feels alone, unsafe, or without opportunity, and every girl grows up with love, confidence, education, and the courage to build an independent future.",
  },
] as const;

const values = [
  { icon: Heart, label: "Compassion" },
  { icon: ShieldCheck, label: "Safety" },
  { icon: Users, label: "Community" },
  { icon: Target, label: "Impact" },
] as const;

export function AboutPurpose() {
  return (
    <section id="mission" className="scroll-mt-24 bg-[#f8fafc] py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="relative">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=88"
                alt="BIWS welfare care and support"
                width={900}
                height={720}
                className="h-[360px] w-full object-cover sm:h-[460px]"
                unoptimized
              />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { value: "90", label: "girls cared for" },
                { value: "2012", label: "since" },
                { value: "5+", label: "skill tracks" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                  <p className="text-xl font-black text-foreground">{item.value}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-sm">
              Purpose & Direction
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              One mission, one vision, and a daily commitment to every child.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              BIWS combines residential care, education, emotional support, and practical skills so
              girls can grow in a safe environment and move toward a confident future.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {purposeCards.map(({ id, icon: Icon, eyebrow, title, description }) => (
                <article
                  id={id}
                  key={id}
                  className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
                  <h3 className="mt-2 text-xl font-extrabold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
                </article>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {values.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-foreground/75 shadow-sm"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
