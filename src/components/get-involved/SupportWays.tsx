import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { supportPages, type SupportIcon } from "@/config/get-involved";
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  ClipboardPenLine,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

const iconMap: Record<SupportIcon, LucideIcon> = {
  Baby,
  ClipboardPenLine,
  GraduationCap,
  HandHeart,
  HeartHandshake,
};

export function SupportWays() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Ways to help
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need is now on this page.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Choose the support path that fits you and connect directly with the
            BIWS team for the next step.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {supportPages.map((item, index) => {
            const Icon = iconMap[item.icon];
            const imageFirst = index % 2 === 1;

            return (
              <article
                key={item.slug}
                id={item.slug}
                className="scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-gray-200 bg-[#f7f8f7] shadow-sm"
              >
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className={imageFirst ? "relative min-h-[240px] sm:min-h-[280px] lg:order-2" : "relative min-h-[240px] sm:min-h-[280px]"}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-white/12 p-4 text-white backdrop-blur-md">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary-light">
                        <Icon className="h-4 w-4" />
                        {item.eyebrow}
                      </div>
                      <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10">
                    <p className="text-sm font-semibold leading-relaxed text-muted">
                      {item.lead}
                    </p>

                    <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
                      {item.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>

                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-2xl border border-gray-200 bg-white p-4"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <p className="mt-3 text-xs font-semibold leading-relaxed text-foreground/75">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 rounded-2xl border border-gray-200 bg-white p-5">
                      <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                        Next steps
                      </h4>
                      <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                        {item.steps.map((step, stepIndex) => (
                          <li key={step} className="flex gap-3">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                              {stepIndex + 1}
                            </span>
                            <span className="pt-0.5 text-sm leading-relaxed text-foreground/75">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button href={item.ctaHref}>
                        {item.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                      <Button href={item.secondaryHref} variant="outline" className="bg-white">
                        {item.secondaryCta}
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
