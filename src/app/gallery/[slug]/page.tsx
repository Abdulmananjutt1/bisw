import { GalleryCard } from "@/components/gallery/GalleryCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  galleryItems,
  getGalleryItem,
  getRelatedGalleryItems,
} from "@/config/gallery";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Heart,
  MapPin,
  Sparkles,
} from "lucide-react";

type GalleryDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return galleryItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: GalleryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getGalleryItem(slug);

  if (!item) {
    return {
      title: "Gallery Moment Not Found",
    };
  }

  return {
    title: `${item.title} | Gallery`,
    description: item.description,
  };
}

export default async function GalleryDetailPage({
  params,
}: GalleryDetailPageProps) {
  const { slug } = await params;
  const item = getGalleryItem(slug);

  if (!item) {
    notFound();
  }

  const relatedItems = getRelatedGalleryItems(item.slug, 3);

  return (
    <>
      <section className="relative isolate flex min-h-[430px] overflow-hidden bg-[#004370] py-12 sm:h-[500px] sm:min-h-0 sm:py-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#003357]/55" />

        <Container className="relative flex h-full flex-col justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-bold text-white/75 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to gallery
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                {item.category}
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {item.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                {item.lead}
              </p>
            </div>

            <div className="grid gap-3 rounded-[1.5rem] border border-white/12 bg-white/10 p-5 text-white shadow-2xl shadow-primary/20 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/12 text-secondary-light">
                  <CalendarDays className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                    Year
                  </p>
                  <p className="font-bold">{item.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/12 text-secondary-light">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                    Location
                  </p>
                  <p className="font-bold">{item.location}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-[#fbfdfb] py-10 sm:py-12">
        <Container>
          <div className="grid gap-3 sm:grid-cols-3">
            {item.impact.map((stat) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className="rounded-2xl border border-primary/10 bg-white p-5 shadow-lg shadow-primary/5"
              >
                <p className="text-2xl font-black text-primary">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-start">
            <article>
              <p className="inline-flex items-center rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
                Moment story
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A closer look at this moment.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                {item.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 overflow-hidden rounded-[1.5rem] bg-[#003f5f]">
                <div className="relative aspect-[16/10] sm:aspect-[16/7]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </article>

            <aside className="rounded-[1.5rem] border border-primary/10 bg-[#fbfdfb] p-6 shadow-xl shadow-primary/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">Highlights</h3>
              <ul className="mt-5 space-y-3">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground/75">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-2xl bg-white p-5 shadow-sm">
                <Heart className="h-5 w-5 text-secondary" />
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.supportText}
                </p>
                <Button href="/donate" className="mt-5 w-full">
                  Support this work
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-warm-bg py-16 sm:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="inline-flex items-center rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
                Keep exploring
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                More campus moments.
              </h2>
            </div>
            <Button href="/gallery" variant="outline">
              View all moments
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedItems.map((relatedItem) => (
              <GalleryCard key={relatedItem.slug} item={relatedItem} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
