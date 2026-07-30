import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eye } from "lucide-react";

export function AboutVision() {
  return (
    <section id="vision" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title="Our Vision" subtitle="The future we are building for every girl in our care." />
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-primary">
              <Eye className="h-6 w-6" />
            </div>
            <p className="text-lg leading-relaxed text-muted">
              A society where no orphan girl feels alone, unsafe, or without opportunity, where
              every girl grows up with love, education, dignity, and the confidence to build a
              successful independent future.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
