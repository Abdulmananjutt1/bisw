import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Quote } from "lucide-react";
import Image from "next/image";

export function AboutFounderMessage() {
  return (
    <section id="founder" className="scroll-mt-24 bg-primary-darker py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <Image
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=90"
                alt={siteConfig.founderName}
                width={400}
                height={480}
                className="h-[420px] w-full object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-secondary px-5 py-3 shadow-xl">
              <p className="text-xs font-medium text-white/75">Founder</p>
              <p className="text-lg font-bold text-white">{siteConfig.founderName}</p>
            </div>
          </div>

          <div>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-light">
              Founder&apos;s Message
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              A Message of Purpose &amp; Compassion
            </h2>
            <div className="relative mt-6">
              <Quote className="absolute -left-1 -top-1 h-10 w-10 text-primary/25" />
              <blockquote className="relative border-l-2 border-primary-light pl-6 text-lg italic leading-relaxed text-white/90">
                Every child deserves love, education, dignity, and the opportunity to succeed in
                life. This is the vision that drives BIWS every single day.
              </blockquote>
            </div>
            <p className="mt-6 leading-relaxed text-white/70">
              Begum Inayat Welfare Society was established in {siteConfig.established} by{" "}
              <strong className="text-white">{siteConfig.founderName}</strong> with a simple yet
              powerful belief: no orphan girl should feel alone, unsafe, or without opportunity.
              What started as a small initiative has grown into a Girls Campus that is now home
              to <strong className="text-primary-light">90 orphan girls</strong>.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              Today, BIWS nurtures girls with compassion, discipline, and real-world skills,
              including computer education, digital skills, beautician training, stitching, and web
              and IT learning, so they can grow into confident and self-reliant women.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
