import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  ArrowRight,
  BookOpenCheck,
  HandHeart,
  HeartPulse,
  HeartHandshake,
  Landmark,
  Laptop,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

type ContributionCardData = {
  title: string;
  description: string;
  amount: string;
  image: string;
  badge: string;
  icon: LucideIcon;
  tone: {
    border: string;
    icon: string;
    badge: string;
    amount: string;
  };
};

const contributionCards: ContributionCardData[] = [
  {
    title: "Educate a Child",
    description: "Educate a child to empower a brighter future for them",
    amount: "Rs. 3,000",
    image: "/donation-causes/educate-child.png",
    badge: "Education Support",
    icon: BookOpenCheck,
    tone: {
      border: "border-emerald-100 hover:border-emerald-300",
      icon: "bg-emerald-500 text-white shadow-emerald-500/25",
      badge: "bg-emerald-50 text-emerald-700 ring-emerald-100",
      amount: "bg-emerald-50 text-emerald-800",
    },
  },
  {
    title: "Sponsor a Child",
    description: "Sponsor a child to ensure a brighter future for them",
    amount: "Rs. 20,000",
    image: "/donation-causes/sponsor-child.png",
    badge: "Monthly Care",
    icon: HandHeart,
    tone: {
      border: "border-green-100 hover:border-green-300",
      icon: "bg-green-600 text-white shadow-green-500/25",
      badge: "bg-green-50 text-green-700 ring-green-100",
      amount: "bg-green-50 text-green-800",
    },
  },
  {
    title: "Zakat",
    description: "Give Zakat to fulfill the needs of the children",
    amount: "Any amount",
    image: "/donation-causes/zakat.png",
    badge: "Zakat & Sadaqah",
    icon: Landmark,
    tone: {
      border: "border-teal-100 hover:border-teal-300",
      icon: "bg-teal-600 text-white shadow-teal-500/25",
      badge: "bg-teal-50 text-teal-700 ring-teal-100",
      amount: "bg-teal-50 text-teal-800",
    },
  },
  {
    title: "Daily Meals",
    description: "Provide nutritious meals and daily food support for children",
    amount: "Rs. 500",
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=85",
    badge: "Food Support",
    icon: Utensils,
    tone: {
      border: "border-lime-100 hover:border-lime-300",
      icon: "bg-lime-600 text-white shadow-lime-500/25",
      badge: "bg-lime-50 text-lime-700 ring-lime-100",
      amount: "bg-lime-50 text-lime-800",
    },
  },
  {
    title: "Health Support",
    description: "Help cover checkups, medicines, nutrition, and wellbeing care",
    amount: "Rs. 5,000",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    badge: "Wellbeing",
    icon: HeartPulse,
    tone: {
      border: "border-emerald-100 hover:border-emerald-300",
      icon: "bg-emerald-600 text-white shadow-emerald-500/25",
      badge: "bg-emerald-50 text-emerald-700 ring-emerald-100",
      amount: "bg-emerald-50 text-emerald-800",
    },
  },
  {
    title: "Skill Training",
    description: "Support computer, stitching, beautician, and IT learning",
    amount: "Rs. 10,000",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=85",
    badge: "Future Skills",
    icon: Laptop,
    tone: {
      border: "border-teal-100 hover:border-teal-300",
      icon: "bg-teal-600 text-white shadow-teal-500/25",
      badge: "bg-teal-50 text-teal-700 ring-teal-100",
      amount: "bg-teal-50 text-teal-800",
    },
  },
];

function ContributionCard({
  title,
  description,
  amount,
  image,
  badge,
  icon: Icon,
  tone,
}: ContributionCardData) {
  return (
    <article
      className={`group flex min-h-[462px] flex-col overflow-hidden rounded-2xl border bg-white text-center shadow-[0_18px_55px_-43px_rgba(15,25,35,0.72)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-48px_rgba(15,25,35,0.78)] ${tone.border}`}
    >
      <div className="relative h-[202px] overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 350px, (min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] ring-1 ${tone.badge}`}
        >
          <Icon className="h-3.5 w-3.5" />
          {badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
        <div
          className={`mx-auto flex h-[52px] w-[52px] -translate-y-11 items-center justify-center rounded-2xl shadow-lg ${tone.icon}`}
        >
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="-mt-5 text-2xl font-extrabold leading-tight text-foreground">
          {title}
        </h3>
        <p className="mx-auto mt-3 max-w-[280px] text-[15px] leading-7 text-muted">
          {description}
        </p>
        <p
          className={`mx-auto mb-7 mt-5 rounded-full px-4 py-2 text-sm font-extrabold ${tone.amount}`}
        >
          Amount: {amount}
        </p>

        <Button
          href="/donate"
          className="mt-auto w-full rounded-2xl bg-primary py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-primary/25 focus-visible:ring-primary"
        >
          Donate Now
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Button>
      </div>
    </article>
  );
}

export function FeaturedCauses() {
  return (
    <section className="bg-[#f8fafc] py-16 sm:py-24">
      <Container className="max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary shadow-sm">
            <HeartHandshake className="h-4 w-4 text-primary" />
            Featured Causes
          </span>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            How You Can{" "}
            <span className="text-primary">Contribute</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Choose education, monthly sponsorship, or Zakat support to help
            BIWS provide care, dignity, and a brighter future for children.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1110px] gap-6 md:grid-cols-3">
          {contributionCards.map((card) => (
            <ContributionCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
