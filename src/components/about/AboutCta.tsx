import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function AboutCta() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-[1.75rem] bg-primary-darker px-8 py-12 text-center text-white sm:px-12">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border-[24px] border-white/10" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-lighter">Be part of the story</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Help a girl build her own future.</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Support safe care, education, and skills training for the girls at BIWS Girls Campus.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button href="/donate" variant="secondary" size="lg">Support BIWS</Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/35 text-white hover:bg-white hover:text-primary-darker"
              >
                Contact our team
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
