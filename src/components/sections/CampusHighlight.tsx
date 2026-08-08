import { Container } from "@/components/ui/Container";
import { ShieldCheck, GraduationCap, Smile, Sparkles } from "lucide-react";
import Link from "next/link";

const lifePoints = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure Home",
    description:
      "Every girl at BIWS lives in a protected, caring environment — with shelter, meals, clothing, and the warmth of a real home.",
  },
  {
    icon: GraduationCap,
    title: "Learning Every Day",
    description:
      "From morning school sessions to afternoon tutoring, education is at the heart of daily life on our Model Town campus.",
  },
  {
    icon: Sparkles,
    title: "Skills for the Future",
    description:
      "Girls learn computer skills, stitching, beautician work, and IT — building real confidence for life beyond the campus.",
  },
  {
    icon: Smile,
    title: "Joy & Belonging",
    description:
      "Celebrations, sports, arts, and community events make sure every girl feels valued, happy, and proud of who she is.",
  },
];

export function CampusHighlight() {
  return (
    <section className="bg-[#f5f6f8] py-12 sm:py-16">
      <Container className="max-w-7xl">

        {/* Section heading — outside cards */}
        <div className="mb-10 text-center">
          <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
            Life at BIWS
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-snug text-foreground sm:text-4xl">
            More Than a Campus —{" "}
            <span className="text-primary">A Place to Belong</span>
          </h2>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[3fr_2fr] lg:gap-10">

          {/* Left — Video */}
          <div className="overflow-hidden rounded-3xl shadow-xl shadow-slate-900/10 ring-1 ring-slate-200">
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover"
              style={{ height: "520px" }}
            />
          </div>

          {/* Right — Life at BIWS */}
          <div className="flex flex-col justify-center rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-8">

            {/* Points */}
            <div className="mt-6 space-y-4">
              {lifePoints.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-md transition hover:bg-primary-dark"
            >
              Our Full Story →
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
