import { Container } from "@/components/ui/Container";
import { Home, GraduationCap, HeartPulse, Laptop, Shield, Users } from "lucide-react";
import Link from "next/link";

const offers = [
  {
    icon: Home,
    title: "Safe Shelter & Care",
    description:
      "90 orphan girls receive a warm, secure home with daily meals, clothing, and emotional support in our Model Town campus.",
    href: "/programs",
  },
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "Full academic schooling, tutoring sessions, and learning support ensuring every girl builds a strong educational foundation.",
    href: "/programs",
  },
  {
    icon: Laptop,
    title: "Skill Training",
    description:
      "Vocational programs in computer, digital skills, beautician, stitching, and IT — preparing girls for a self-reliant future.",
    href: "/programs",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellbeing",
    description:
      "Regular health checkups, nutritional support, and mental wellness programs ensuring every girl thrives inside and out.",
    href: "/programs",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description:
      "A secure, loving campus providing every girl with safety, dignity, and the sense of belonging she truly deserves.",
    href: "/programs",
  },
  {
    icon: Users,
    title: "Community Events",
    description:
      "Annual celebrations, prize distributions, and community gatherings that build confidence, joy, and a sense of pride.",
    href: "/programs",
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#f5f6f8] py-16 sm:py-20">
      <Container className="max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
            What we offer
          </p>
          <h2 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">
            Caring For Girls With Compassion.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            At BIWS Girls Campus, every condition for a safe, nurturing, and empowering
            life has been created. We care for each girl and work to build her future
            with love. We offer:
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map(({ icon: Icon, title, description, href }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl bg-white px-7 py-8 shadow-sm ring-1 ring-border transition-shadow hover:shadow-md"
            >
              {/* Icon circle */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-lighter">
                <Icon className="h-7 w-7 text-primary-dark" strokeWidth={1.5} />
              </div>

              {/* Title + underline */}
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                {description}
              </p>

              {/* Button */}
              <Link
                href={href}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Learn More
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
