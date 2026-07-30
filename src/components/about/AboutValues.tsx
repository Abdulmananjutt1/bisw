import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eye, Heart, Target, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We lead with empathy and genuine care in every interaction with the children in our home.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "We focus on measurable, sustainable change, from education outcomes to vocational readiness.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Complete open and honest communication with donors, partners, and the community.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in empowering girls to help themselves and contribute to their communities.",
  },
] as const;

export function AboutValues() {
  return (
    <section className="bg-[#f8fafc] py-16 sm:py-20">
      <Container>
        <SectionHeading title="Our Values" subtitle="The principles that guide everything we do." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
