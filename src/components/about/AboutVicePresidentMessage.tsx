import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Quote, UserCog } from "lucide-react";
import Image from "next/image";

export function AboutVicePresidentMessage() {
  return (
    <section id="vice-president" className="scroll-mt-24 bg-[#f8fafc] py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Vice President&apos;s Message
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
              Together We Build Brighter Futures
            </h2>
            <div className="relative mt-6">
              <Quote className="absolute -left-1 -top-1 h-10 w-10 text-primary/15" />
              <blockquote className="relative border-l-2 border-primary pl-6 text-lg italic leading-relaxed text-foreground/85">
                Our work at BIWS is a shared commitment, to give every girl not just shelter, but
                hope, skills, and the confidence to stand on her own.
              </blockquote>
            </div>
            <p className="mt-6 leading-relaxed text-muted">
              As Vice President of BIWS, I work alongside our founder and dedicated team to ensure
              that every girl receives consistent care, quality education, and opportunities for
              personal growth. From daily campus operations to skill development programs, our focus
              remains on transparency, accountability, and lasting impact.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We invite donors, volunteers, and community partners to join us in this mission. Your
              support directly transforms lives, helping orphan girls become educated, skilled, and
              self-reliant members of society.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <UserCog className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-foreground">{siteConfig.vicePresidentName}</p>
                <p className="text-sm text-muted">{siteConfig.vicePresidentTitle}</p>
              </div>
            </div>
          </div>

          <div className="order-1 relative mx-auto w-full max-w-sm lg:order-2 lg:mx-0">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt={siteConfig.vicePresidentName}
                width={400}
                height={480}
                className="h-[420px] w-full rounded-2xl object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
