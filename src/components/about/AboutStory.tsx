import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const storyHighlights = [
  "Free residential care for 90 orphan girls",
  "Full academic schooling with tutoring support",
  "5 vocational skill programs for self-reliance",
  "Healthcare, nutrition, and emotional wellbeing",
  "Transparent NGO with CRM-based donor reporting",
] as const;

const founderStats = [
  { value: "90", label: "Girls" },
  { value: "13+", label: "Years" },
  { value: "5+", label: "Skills" },
] as const;

export function AboutStory() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title="Our Story" centered={false} />
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Begum Inayat Welfare Society was founded in{" "}
                <strong className="text-foreground">2012</strong> by{" "}
                <strong className="text-foreground">Dr. Amna Amber</strong> with a simple yet
                powerful belief: no orphan girl should feel alone, unsafe, or without opportunity.
              </p>
              <p>
                What started as a small initiative in Model Town, Lahore has grown into a{" "}
                <strong className="text-foreground">residential Girls Campus</strong> that is now
                home to <strong className="text-primary">90 orphan girls</strong>, providing
                shelter, nutritious food, quality education, emotional support, and life skills.
              </p>
              <p>
                Today, BIWS focuses on nurturing girls with compassion, discipline, and real-world
                skills, including computer education, digital skills, beautician training, stitching,
                and web and IT learning.
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {storyHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-primary-darker p-8 text-white">
            <div className="flex items-center gap-4">
              <Image
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=200&q=80"
                alt={siteConfig.founderName}
                width={80}
                height={80}
                className="h-20 w-20 rounded-2xl object-cover shadow-lg"
                unoptimized
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-light">Founder</p>
                <h3 className="text-xl font-bold">{siteConfig.founderName}</h3>
                <p className="text-sm text-white/60">Est. {siteConfig.established}</p>
              </div>
            </div>
            <blockquote className="mt-6 border-l-2 border-primary-light pl-4 text-sm italic leading-relaxed text-white/80">
              &ldquo;Every child deserves love, education, dignity, and the opportunity to succeed
              in life. This is the vision that drives BIWS every single day.&rdquo;
            </blockquote>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {founderStats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/10 p-3 text-center">
                  <p className="text-xl font-extrabold text-primary-light">{stat.value}</p>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
