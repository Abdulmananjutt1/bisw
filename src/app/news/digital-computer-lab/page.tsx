import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Clock, Tag, Monitor, Wifi, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Computer Lab at BIWS Orphanage Lahore | BIWS News",
  description: "BIWS Orphanage in Model Town, Lahore is setting up a digital computer lab to teach orphan girls IT skills, web basics, and digital literacy — empowering their future in Pakistan.",
  keywords: ["BIWS computer lab orphanage", "IT training orphan girls Lahore", "digital skills orphanage Pakistan"],
  openGraph: {
    title: "Digital Computer Lab at BIWS Orphanage Lahore",
    description: "Modern computer lab at BIWS Orphanage, Lahore — building digital skills for 90 orphan girls in Pakistan.",
  },
};

const stats = [
  { value: "90+",  label: "Girls Enrolled",      icon: Users },
  { value: "20+",  label: "Computers Planned",   icon: Monitor },
  { value: "5+",   label: "Courses Offered",     icon: GraduationCap },
  { value: "Fast", label: "Broadband Internet",  icon: Wifi },
];

const skills = [
  { title: "Basic Computer Operation", desc: "Windows, file management, typing, and MS Office fundamentals." },
  { title: "Internet & Digital Literacy", desc: "Safe browsing, email, and online communication skills." },
  { title: "Web Design Basics", desc: "Introduction to HTML, website design, and digital tools." },
  { title: "IT Fundamentals", desc: "Understanding hardware, software, and basic troubleshooting." },
  { title: "Freelancing Skills", desc: "Online marketplaces, remote work basics, and digital earning." },
  { title: "Data Entry & Office Work", desc: "Spreadsheets, typing speed, and professional office tools." },
];

export default function ComputerLabPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[460px] overflow-hidden bg-[#021a12] sm:h-[540px]">
        <Image
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=1600&q=85"
          alt="Digital Computer Lab"
          fill className="object-cover opacity-50" priority unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021a12]/95 via-[#021a12]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-6 pb-12 sm:px-12">
          <Container className="max-w-5xl">
            <span className="inline-block rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-white">Development</span>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Digital Computer<br />Lab Setup
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> Ongoing 2026</span>
              <span className="flex items-center gap-1.5"><Tag className="h-4 w-4" /> Education & Technology</span>
            </div>
          </Container>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-blue-600">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-2 divide-x divide-blue-500 sm:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1 py-6 text-center">
                <Icon className="h-5 w-5 text-blue-200" />
                <p className="text-2xl font-extrabold text-white">{value}</p>
                <p className="text-xs font-medium text-blue-200">{label}</p>
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
                Building Digital Skills for the Modern World
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                BIWS is establishing a fully equipped digital computer lab for our 90 orphan
                girls. In today&apos;s world, digital literacy is as essential as reading and
                writing. This lab will ensure no girl leaves our campus without mastering
                the technology skills she needs to thrive.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The lab will feature modern computers, high-speed internet, and structured
                courses taught by qualified instructors — opening pathways to careers in
                technology, freelancing, administration, and beyond.
              </p>
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&q=85"
                alt="Girls learning on computers"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Skills grid */}
      <section className="bg-[#f5f6f8] py-14 sm:py-20">
        <Container className="max-w-5xl">
          <h2 className="mb-3 text-center text-3xl font-bold text-foreground sm:text-4xl">
            What the Girls Will Learn
          </h2>
          <p className="mb-10 text-center text-base text-muted">
            A structured curriculum covering essential digital skills for the modern world.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ title, desc }, i) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote */}
      <section className="bg-[#1e3a5f] py-14">
        <Container className="max-w-3xl text-center">
          <p className="text-4xl font-black text-blue-300 opacity-30 select-none">&ldquo;</p>
          <blockquote className="mt-2 text-xl font-medium italic leading-relaxed text-white/90 sm:text-2xl">
            A girl who knows how to use a computer is a girl who can earn, communicate,
            and compete on her own terms. That is what we want for every girl at BIWS.
          </blockquote>
          <p className="mt-5 text-sm font-semibold text-blue-300">— BIWS Education Team</p>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 sm:py-20">
        <Container className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Help Us Build This Lab</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Donate toward computers, internet setup, furniture, and instructor fees.
            Your support will directly shape the digital future of 90 girls.
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
