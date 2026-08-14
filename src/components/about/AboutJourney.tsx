import { Container } from "@/components/ui/Container";
import { Award, Calendar, GraduationCap, HeartHandshake, Home, Laptop, Users } from "lucide-react";

const milestones = [
  {
    year: "2012",
    title: "BIWS Girls Campus Founded",
    event:
      "Dr. Amna Amber began BIWS in Model Town, Lahore with a clear purpose: to give orphan girls a safe, caring home.",
    icon: Home,
  },
  {
    year: "2015",
    title: "Formal Education Program",
    event:
      "The campus expanded its care capacity and strengthened schooling, tutoring, and daily academic support.",
    icon: GraduationCap,
  },
  {
    year: "2018",
    title: "Skill Training Begins",
    event:
      "Vocational learning was introduced so older girls could begin building confidence and practical independence.",
    icon: HeartHandshake,
  },
  {
    year: "2020",
    title: "Digital Learning Support",
    event:
      "Computer and digital literacy sessions gave students more exposure to technology and modern learning tools.",
    icon: Laptop,
  },
  {
    year: "2022",
    title: "A Larger Home of Care",
    event:
      "BIWS grew into a home for 90 girls while improving campus routines, wellbeing support, and infrastructure.",
    icon: Users,
  },
  {
    year: "2026",
    title: "Modern IT & Campus Growth",
    event:
      "New IT tracks and computer lab improvements continue preparing girls for a more self-reliant future.",
    icon: Award,
  },
] as const;

export function AboutJourney() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              <Calendar className="h-4 w-4" />
              Our Journey
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              From a small beginning to a full campus of care.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Key milestones in BIWS history show steady growth in shelter, education, skills, and
              long-term support for orphan girls.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-emerald-200 bg-primary-darker p-6 text-white shadow-lg shadow-emerald-900/15">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-light">
                Journey at a glance
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { value: "2012", label: "founded" },
                  { value: "90", label: "girls" },
                  { value: "5+", label: "programs" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-emerald-100/20 bg-primary/20 p-4 text-center">
                    <p className="text-xl font-black text-white">{item.value}</p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative space-y-5">
              <div className="absolute bottom-6 left-6 top-6 hidden w-px bg-slate-200 sm:block" />
              {milestones.map(({ year, title, event, icon: Icon }) => (
                <article
                  key={year}
                  className="relative rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:ml-16 sm:p-6"
                >
                  <div className="mb-4 flex items-center gap-3 sm:absolute sm:-left-16 sm:top-6 sm:mb-0 sm:flex-col">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black text-foreground shadow-sm">
                      {year}
                    </span>
                  </div>

                  <div className="sm:pl-2">
                    <h3 className="text-xl font-extrabold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{event}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-[1.25rem] border border-slate-200 bg-[#f8fafc] p-5">
              <p className="text-sm leading-relaxed text-muted">
                Every stage of BIWS growth is centered on the same goal: a safer home, stronger
                education, and practical opportunities for every girl in care.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
