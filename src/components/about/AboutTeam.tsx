import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const team = [
  {
    name: "Dr. Amna Amber",
    role: "Founder & Director",
    bio: "Founded BIWS in 2013 with the mission to provide every orphan girl with a dignified, educated, and self-reliant future.",
  },
  {
    name: "Campus Administration",
    role: "Operations & Management",
    bio: "Oversees daily campus operations, admissions, donor relations, and all welfare programs.",
  },
  {
    name: "Education Team",
    role: "Teachers & Tutors",
    bio: "Dedicated educators providing quality schooling and academic support to all 90 girls.",
  },
  {
    name: "Skills Training Faculty",
    role: "Vocational Trainers",
    bio: "Expert trainers in computer education, IT, beautician, and stitching programs.",
  },
] as const;

export function AboutTeam() {
  return (
    <section id="team" className="scroll-mt-24 bg-[#f8fafc] py-16 sm:py-20">
      <Container>
        <SectionHeading title="Our Team" subtitle="The dedicated people behind BIWS Girls Campus." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-extrabold text-primary">
                {member.name[0]}
              </div>
              <h3 className="font-bold text-foreground">{member.name}</h3>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-primary">{member.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">{member.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
