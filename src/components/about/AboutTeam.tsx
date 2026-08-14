import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const team = [
  {
    name: "Aamna Amber",
    role: "President / Founder",
    bio: "Social Worker and Dress Designing professional. Founded BIWS in 2012 with the vision to provide orphan girls a dignified, educated, and self-reliant future.",
  },
  {
    name: "Naeem Siddiqi",
    role: "Vice President",
    bio: "Ex-Banker with extensive financial experience, supporting BIWS leadership and strategic direction.",
  },
  {
    name: "Aayan Sameer",
    role: "General Secretary",
    bio: "Businessman overseeing organizational affairs, coordination, and day-to-day management of BIWS.",
  },
  {
    name: "Mohammad Akram",
    role: "Finance Secretary",
    bio: "Businessman responsible for financial management, accounts, and transparent fund handling at BIWS.",
  },
  {
    name: "Saqib Munir",
    role: "Executive Member",
    bio: "Businessman contributing to BIWS operations and welfare program support.",
  },
  {
    name: "Javed Bhatti",
    role: "Executive Member",
    bio: "Businessman actively involved in BIWS community outreach and program development.",
  },
  {
    name: "Attique Ahmed",
    role: "Executive Member",
    bio: "Civil Engineer providing infrastructure and technical support to the BIWS Girls Campus.",
  },
] as const;

export function AboutTeam() {
  return (
    <section id="team" className="scroll-mt-24 bg-[#f8fafc] py-16 sm:py-20">
      <Container>
        <SectionHeading title="Our Team" subtitle="The dedicated people behind BIWS Girls Campus." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
