import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Clock, Tag, Scissors, Star, Award, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beautician & Stitching Programs | BIWS News",
  description: "New vocational training tracks launched — beautician and stitching skills for self-reliance and career readiness at BIWS Girls Campus.",
};

const stats = [
  { value: "90+",   label: "Girls Training",       icon: Users },
  { value: "2",     label: "New Programs",          icon: Star },
  { value: "Cert.", label: "Certified Training",    icon: Award },
  { value: "Home",  label: "Business Ready Skills", icon: Scissors },
];

const beauticianSkills = [
  "Hair care, cutting & styling",
  "Skincare & facial treatments",
  "Makeup for events & bridal",
  "Mehndi (henna) application",
  "Salon management basics",
];

const stitchingSkills = [
  "Hand & machine stitching",
  "Pattern cutting & fabric selection",
  "Shalwar kameez & frocks",
  "Embroidery & finishing",
  "Clothing alterations & repairs",
];

export default function BeauticianStitchingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[460px] overflow-hidden bg-[#021a12] sm:h-[540px]">
        <Image
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=85"
          alt="Beautician & Stitching Programs"
          fill className="object-cover opacity-50" priority unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021a12]/95 via-[#021a12]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-6 pb-12 sm:px-12">
          <Container className="max-w-5xl">
            <span className="inline-block rounded-full bg-purple-500 px-3 py-1 text-xs font-bold text-white">Skill Training</span>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Beautician & Stitching<br />Programs
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 2026</span>
              <span className="flex items-center gap-1.5"><Tag className="h-4 w-4" /> Vocational Training</span>
            </div>
          </Container>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-purple-600">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-2 divide-x divide-purple-500 sm:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1 py-6 text-center">
                <Icon className="h-5 w-5 text-purple-200" />
                <p className="text-2xl font-extrabold text-white">{value}</p>
                <p className="text-xs font-medium text-purple-200">{label}</p>
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
                About These Programs
              </p>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                Skills That Create Independence
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                BIWS has launched two powerful vocational programs — Beautician Training and
                Stitching & Tailoring — giving orphan girls the hands-on skills they need
                to build careers and earn independently after leaving our campus.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                These are not just classes — they are pathways to freedom. A girl with a
                certified skill can open a home salon, join a parlour, or run her own
                tailoring business. Real skills create real futures.
              </p>
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138daaa4e4e2?w=800&q=85"
                alt="Girls in skill training"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Two programs side by side */}
      <section className="bg-[#f5f6f8] py-14 sm:py-20">
        <Container className="max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground sm:text-4xl">
            The Two Programs
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">

            {/* Beautician */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80"
                  alt="Beautician Training"
                  fill className="object-cover" unoptimized
                />
                <div className="absolute inset-0 bg-purple-900/50" />
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-xl font-bold text-white">Beautician Training</h3>
                  <p className="text-sm text-white/70">Professional Salon Skills</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2.5">
                  {beauticianSkills.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-sm text-muted">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stitching */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80"
                  alt="Stitching Training"
                  fill className="object-cover" unoptimized
                />
                <div className="absolute inset-0 bg-primary-darker/60" />
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-xl font-bold text-white">Stitching & Tailoring</h3>
                  <p className="text-sm text-white/70">Garment Making Skills</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2.5">
                  {stitchingSkills.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-sm text-muted">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quote */}
      <section className="bg-primary-darker py-14">
        <Container className="max-w-3xl text-center">
          <p className="text-4xl font-black text-primary-light opacity-30 select-none">&ldquo;</p>
          <blockquote className="mt-2 text-xl font-medium italic leading-relaxed text-white/90 sm:text-2xl">
            A skilled girl is a confident girl. When she can earn with her own hands,
            she no longer depends on anyone — she builds her own story.
          </blockquote>
          <p className="mt-5 text-sm font-semibold text-primary-light">— BIWS Skill Development Team</p>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 sm:py-20">
        <Container className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Support These Programs</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Your donation funds training materials, equipment, instructor fees, and
            certification costs — giving a girl the skills to change her own life.
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
