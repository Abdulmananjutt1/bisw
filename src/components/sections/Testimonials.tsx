import { testimonials } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Quote } from "lucide-react";

const avatarStyles = [
  "bg-emerald-100 text-emerald-700 ring-emerald-50",
  "bg-primary-lighter text-primary-darker ring-emerald-50",
  "bg-sky-100 text-sky-700 ring-sky-50",
  "bg-rose-100 text-rose-700 ring-rose-50",
  "bg-violet-100 text-violet-700 ring-violet-50",
  "bg-lime-100 text-emerald-800 ring-lime-50",
];

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
            <Quote className="h-4 w-4" />
            Community Reviews
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            Trusted by Donors, Visitors & Volunteers
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
            Feedback from people connected with BIWS Girls Campus, education
            support, skill training, and community welfare work in Lahore.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="flex min-h-[220px] flex-col rounded-lg border border-slate-200/80 bg-white p-5 shadow-[0_14px_34px_-30px_rgba(15,25,35,0.55)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_22px_48px_-34px_rgba(4,120,87,0.42)] sm:p-6"
            >
              <Quote
                className="h-8 w-8 fill-primary text-primary"
                strokeWidth={3}
              />

              <p className="mt-4 flex-1 text-[15px] font-medium leading-6 text-slate-900">
                {testimonial.quote.map((segment, index) =>
                  segment.emphasis ? (
                    <strong key={index} className="font-extrabold">
                      {segment.text}
                    </strong>
                  ) : (
                    <span key={index}>{segment.text}</span>
                  )
                )}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-black ring-4 ${avatarStyles[index % avatarStyles.length]}`}
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-extrabold text-slate-950">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 truncate text-[11px] font-semibold text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
