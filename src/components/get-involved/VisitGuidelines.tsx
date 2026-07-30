import { Container } from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

const visitorGuidelines = [
  "Respect the privacy and dignity of every child.",
  "Avoid photography unless BIWS staff gives permission.",
  "Please coordinate gifts, food, or donations before bringing them.",
  "Keep visits warm, calm, and child-safe.",
];

export function VisitGuidelines() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Visit guidelines
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Keep every visit respectful and helpful.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              The campus is a home for children, so every visit should protect
              privacy, safety, and daily routines.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {visitorGuidelines.map((guideline) => (
              <div
                key={guideline}
                className="rounded-2xl border border-gray-200 bg-[#f7f8f7] p-5 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {guideline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
