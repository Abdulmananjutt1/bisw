import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { CheckCircle2, Quote, Award, Users2 } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Registered NGO providing free education to 90 orphan girls",
  "Vocational & skill training: computer, IT, stitching, beautician",
  "Safe residential campus with shelter, meals & healthcare",
  "Transparent donation management with CRM-based reporting",
  "Active since 2013 — 13+ years of trusted service in Lahore",
];

const achievements = [
  { icon: Users2, value: "90+", label: "Girls in Care" },
  { icon: Award, value: "13+", label: "Years Active" },
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Decorative blob — rose/pink instead of green */}
      <div className="absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-slate-100 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-60 w-60 rounded-full bg-gray-100/80 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image column */}
          <div className="relative">
            {/* Established badge behind */}
            <div className="absolute -left-4 -top-4 z-0 h-full w-full rounded-[2.5rem] bg-primary/6" />

            {/* Main image */}
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary/15">
              <Image
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=90"
                alt="Dr Amna Amber with girls at BIWS campus"
                width={800}
                height={600}
                className="h-[420px] w-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-primary-darker/20" />
            </div>

            {/* Floating quote card */}
            <div className="absolute -bottom-6 -right-4 z-20 max-w-[240px] rounded-2xl bg-white p-5 shadow-2xl sm:right-4">
              <Quote className="mb-1 h-7 w-7 text-primary/20" />
              <p className="text-xs leading-relaxed text-muted italic">
                &ldquo;Every child deserves love, education, dignity, and the opportunity to succeed.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-black text-white shadow-md">
                  A
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">{siteConfig.founderName}</p>
                  <p className="text-[10px] text-muted">Founder, BIWS</p>
                </div>
              </div>
            </div>

            {/* Year badge */}
            <div className="absolute left-4 top-4 z-20 rounded-2xl bg-secondary px-5 py-3 shadow-xl">
              <p className="text-xs font-semibold text-white/80">Est.</p>
              <p className="text-2xl font-black text-white">
                {siteConfig.established}
              </p>
            </div>

            {/* Achievement badges */}
            <div className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 flex flex-col gap-3">
              {achievements.map(({ icon: Icon, value, label }) => (
                <div key={label} className="glass rounded-2xl p-3 text-center shadow-xl">
                  <Icon className="mx-auto mb-1 h-5 w-5 text-primary" />
                  <p className="text-xl font-black text-primary">
                    {value}
                  </p>
                  <p className="text-[10px] font-medium text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content column */}
          <div>
            <span className="inline-block rounded-full border border-rose-200 bg-rose-50 px-5 py-1.5 text-sm font-bold uppercase tracking-widest text-rose-600">
              About BIWS
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
              A Home of Hope for Orphan Girls
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-muted">
              Founded in {siteConfig.established} by{" "}
              <strong className="font-semibold text-foreground">Dr. Amna Amber</strong>, BIWS Girls
              Campus is home to 90 orphan girls receiving full-time shelter, nutritious meals,
              quality education, and life skills that prepare them for a dignified and self-reliant
              future.
            </p>

            <ul className="mt-7 space-y-3.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100">
                    <CheckCircle2 className="h-4 w-4 text-rose-500" />
                  </div>
                  <span className="text-base text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/about" size="lg" className="rounded-2xl">
                Read Our Full Story
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="rounded-2xl">
                Plan a Visit
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
