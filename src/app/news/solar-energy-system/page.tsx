import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Clock, Tag, Zap, DollarSign, Leaf, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Energy System at BIWS Orphanage Lahore | BIWS News",
  description: "BIWS Orphanage in Model Town, Lahore is installing a solar energy system to ensure uninterrupted electricity and reduce costs — directly benefiting 90 orphan girls in Pakistan.",
  keywords: ["BIWS orphanage solar energy", "orphanage solar project Lahore", "BIWS news 2026"],
  openGraph: {
    title: "Solar Energy System at BIWS Orphanage Lahore",
    description: "Solar installation at BIWS Orphanage, Model Town Lahore — powering a better future for 90 orphan girls in Pakistan.",
  },
};

const stats = [
  { value: "90+",    label: "Girls Benefiting",     icon: Shield },
  { value: "100%",   label: "Campus Coverage",       icon: Zap },
  { value: "60%",    label: "Cost Reduction Target", icon: DollarSign },
  { value: "Green",  label: "Clean Energy Source",   icon: Leaf },
];

const features = [
  {
    title: "Uninterrupted Power",
    desc: "Battery backup ensures the campus stays powered during load shedding — no disruption to study hours, kitchen, or security.",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80",
  },
  {
    title: "Reduced Costs",
    desc: "Monthly electricity bills will drop by up to 60%, freeing funds for education, meals, and healthcare for the girls.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    title: "Eco-Friendly Campus",
    desc: "BIWS is committed to a sustainable future — clean solar energy aligns with our mission of building a better tomorrow.",
    img: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80",
  },
];

export default function SolarEnergyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[460px] overflow-hidden bg-[#021a12] sm:h-[540px]">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=85"
          alt="Solar Energy System"
          fill className="object-cover opacity-50" priority unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021a12]/95 via-[#021a12]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-6 pb-12 sm:px-12">
          <Container className="max-w-5xl">
            <span className="inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">Project Update</span>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Solar Energy System<br />Installation
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> Ongoing 2026</span>
              <span className="flex items-center gap-1.5"><Tag className="h-4 w-4" /> Infrastructure</span>
            </div>
          </Container>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-primary">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-2 divide-x divide-primary-dark sm:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1 py-6 text-center">
                <Icon className="h-5 w-5 text-primary-lighter" />
                <p className="text-2xl font-extrabold text-white">{value}</p>
                <p className="text-xs font-medium text-primary-lighter/80">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Intro */}
      <section className="bg-white py-14 sm:py-20">
        <Container className="max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="inline-flex items-center rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
                About This Project
              </p>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                Powering a Brighter Future for 90 Girls
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                BIWS Girls Campus is installing a comprehensive solar energy system to ensure
                uninterrupted electricity across our entire Model Town campus. This project
                directly benefits 90 orphan girls who depend on consistent power for their
                education, safety, and daily routines.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Power outages and escalating electricity costs have long been a challenge. This
                solar system will eliminate both — providing clean, reliable energy while
                dramatically cutting monthly bills and redirecting those savings toward the
                girls' welfare.
              </p>
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=85"
                alt="Solar panels installation"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Feature cards */}
      <section className="bg-[#f5f6f8] py-14 sm:py-20">
        <Container className="max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground sm:text-4xl">
            Key Benefits of This Project
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map(({ title, desc, img }) => (
              <div key={title} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <div className="relative h-44 overflow-hidden">
                  <Image src={img} alt={title} fill className="object-cover" unoptimized />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote */}
      <section className="bg-primary-darker py-14">
        <Container className="max-w-3xl text-center">
          <p className="text-4xl font-black text-primary-light opacity-30 select-none">&ldquo;</p>
          <blockquote className="mt-2 text-xl font-medium italic leading-relaxed text-white/90 sm:text-2xl">
            Every rupee saved on electricity is a rupee we can spend on a girl&apos;s education,
            health, or future. This project is a gift that keeps giving.
          </blockquote>
          <p className="mt-5 text-sm font-semibold text-primary-light">— BIWS Management Team</p>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 sm:py-20">
        <Container className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Support This Initiative</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Your donation helps fund the solar panels, installation, and battery backup system
            that will power this campus for years to come.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-primary-dark">
              Donate Now
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-7 py-3.5 text-sm font-bold text-foreground hover:border-primary hover:text-primary">
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
