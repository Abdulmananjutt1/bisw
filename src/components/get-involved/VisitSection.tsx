import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { ArrowRight, CalendarCheck, Clock3, MapPin, Phone } from "lucide-react";

const campusAddress =
  "Begum Inayat Welfare Society of Pakistan Orphanage, Jamia Masjid Qadria Tower's street Main Bazar Awan Market, Lahore - Kasur Rd, Awan Market, Lahore, Pakistan";

const googleMapsUrl =
  "https://www.google.com/maps/dir//Begum+Inayat+Welfare+Society+of+Pakistan+Orphanage,+Jamia+Masjid+Qadria+Tower's+street+Main+Bazar+Awan+Market,+Lahore+%E2%80%93+Kasur+Rd,+Awan+Market,+Lahore,+Pakistan/@31.5290249,74.3264755,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39190424b61b131d:0x3434927ea7941df5!2m2!1d74.3615366!2d31.4319551?entry=ttu";

const visitDetails = [
  {
    title: "Call before visiting",
    text: "Please confirm your visit with the BIWS team so the right staff member can guide you.",
    icon: Phone,
  },
  {
    title: "Preferred timing",
    text: "Visits are best planned during daytime office hours after prior confirmation.",
    icon: Clock3,
  },
  {
    title: "Campus location",
    text: campusAddress,
    icon: MapPin,
  },
];

const visitSteps = [
  "Call or WhatsApp the BIWS team with your preferred day and time.",
  "Share your purpose of visit, such as donation, volunteering, admission, or general support.",
  "Wait for confirmation before arriving at the campus.",
  "Bring CNIC or basic identification if requested by the team.",
];

export function VisitSection() {
  return (
    <section id="visit" className="scroll-mt-28 bg-[#f7f8f7] py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Plan a visit
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Schedule your campus visit with care.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              A planned visit helps our team prepare properly and keeps the
              campus routine comfortable for the girls. Please contact us before
              coming to BIWS.
            </p>

            <div className="mt-8 space-y-4">
              {visitDetails.map(({ title, text, icon: Icon }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-gray-200 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <CalendarCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-foreground">
              Visit request checklist
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Use these steps before visiting the campus.
            </p>

            <ol className="mt-6 space-y-3">
              {visitSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-sm leading-relaxed text-foreground/75">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <Button href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                Call {siteConfig.phone}
              </Button>
              <Button
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="bg-white"
              >
                WhatsApp us
              </Button>
              <Button
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="bg-white sm:col-span-2"
              >
                Get directions
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
