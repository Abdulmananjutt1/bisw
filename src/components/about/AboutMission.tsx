import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Target } from "lucide-react";

export function AboutMission() {
  return (
    <section id="mission" className="scroll-mt-24 bg-[#f8fafc] py-16 sm:py-20">
      <Container>
        <SectionHeading title="Our Mission" subtitle="The purpose that drives every program at BIWS." />
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </div>
            <p className="text-lg leading-relaxed text-muted">
              To provide every orphan girl with a safe home, quality education, proper nutrition,
              healthcare, and vocational skills, enabling her to live with dignity and become a
              self-reliant contributor to society.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
