import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  ArrowRight,
  BookOpenCheck,
  HandHeart,
  HeartHandshake,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

type CardData = {
  title: string;
  description: string;
  amount: string;
  image: string;
  badge: string;
  icon: LucideIcon;
  tone: {
    badge: string;
    btn: string;
  };
};

const cards: CardData[] = [
  {
    title: "Educate a Child",
    description: "Educate a child to empower a brighter future for them",
    amount: "Rs. 3,000",
    image: "/donation-causes/educate-child.png",
    badge: "Education Support",
    icon: BookOpenCheck,
    tone: {
      badge: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
      btn: "bg-emerald-600 hover:bg-emerald-700",
    },
  },
  {
    title: "Sponsor a Child",
    description: "Sponsor a child to ensure complete monthly care for them",
    amount: "Rs. 20,000",
    image: "/donation-causes/sponsor-child.png",
    badge: "Monthly Care",
    icon: HandHeart,
    tone: {
      badge: "bg-primary-lighter text-primary-darker ring-1 ring-primary/20",
      btn: "bg-primary hover:bg-primary-dark",
    },
  },
  {
    title: "Zakat",
    description: "Give your Zakat to fulfill the essential needs of the children",
    amount: "Any amount",
    image: "/donation-causes/zakat.png",
    badge: "Zakat & Sadaqah",
    icon: Landmark,
    tone: {
      badge: "bg-teal-50 text-teal-700 ring-1 ring-teal-100",
      btn: "bg-teal-600 hover:bg-teal-700",
    },
  },
];

function CauseCard({ title, description, amount, image, badge, icon: Icon, tone }: CardData) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {/* Badge */}
        <span className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${tone.badge}`}>
          <Icon className="h-3 w-3" />
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{description}</p>

        {/* Button */}
        <div className="mt-4 flex justify-center">
          <Button
            href="/donate"
            className="rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-sm border-0 bg-primary hover:bg-primary-dark"
          >
            Donate Now
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}

export function FeaturedCauses() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="max-w-6xl">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
            <HeartHandshake className="h-4 w-4" />
            Featured Causes
          </p>
          <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            How You Can Contribute
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Choose education, monthly sponsorship, or Zakat support to help
            BIWS provide care, dignity, and a brighter future for children.
          </p>
        </div>

        {/* 3 cards — one row */}
        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((card) => (
            <CauseCard key={card.title} {...card} />
          ))}
        </div>



      </Container>
    </section>
  );
}
