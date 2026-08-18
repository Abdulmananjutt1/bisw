import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ChatBot } from "@/components/ui/ChatBot";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.shortName} — Best Orphanage in Lahore, Pakistan`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  keywords: [
    // Primary target keyword
    "orphanage in Lahore",
    "orphanage in Pakistan",
    // Brand
    "BIWS",
    "BIWS Orphanage",
    "Begum Inayat Welfare Society",
    "Begum Inayat Welfare Society of Pakistan",
    // Location-based
    "orphanage Model Town Lahore",
    "girls orphanage Lahore",
    "girls orphanage Pakistan",
    "best orphanage in Lahore",
    "best orphanage Pakistan",
    // Cause-based
    "orphan girls education Pakistan",
    "orphan care Pakistan",
    "shelter for orphans Lahore",
    "child welfare Pakistan",
    "child development NGO Pakistan",
    // Donation/support
    "donate to orphanage Pakistan",
    "sponsor orphan child Pakistan",
    "zakat for orphans Pakistan",
    "charity Lahore",
    "NGO Lahore",
    "NGO Pakistan",
    "welfare society Pakistan",
    // Founder
    "Dr Amna Amber",
    // Social service
    "social service Pakistan",
    "non profit organization Pakistan",
    "non governmental organization Pakistan",
    // Skill training
    "skill training for girls Pakistan",
    "vocational training orphans",
    // Additional long-tail
    "how to donate to orphanage in Pakistan",
    "sponsor a child Pakistan",
  ],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.shortName} — Best Orphanage in Lahore, Pakistan`,
    description: siteConfig.description,
    siteName: siteConfig.fullName,
    locale: "en_PK",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.fullName} — Orphanage in Lahore, Pakistan`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} — Best Orphanage in Lahore, Pakistan`,
    description: siteConfig.description,
    site: "@biwsorphanage",
    creator: "@biwsorphanage",
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Non-Governmental Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.fullName,
        alternateName: ["BIWS", "BIWS Orphanage"],
        description: siteConfig.description,
        url: siteConfig.url,
        foundingDate: siteConfig.foundingDate,
        founder: {
          "@type": "Person",
          name: siteConfig.founderName,
          jobTitle: "Founder",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "115 H Model Town",
          addressLocality: "Lahore",
          addressRegion: "Punjab",
          addressCountry: "PK",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phone,
            contactType: "customer support",
            availableLanguage: ["Urdu", "English"],
          },
        ],
        sameAs: [
          siteConfig.social.facebook,
          siteConfig.social.instagram,
          siteConfig.social.youtube,
          siteConfig.social.tiktok,
        ],
        knowsAbout: [
          "Orphan Care",
          "Girls Education",
          "Child Development",
          "Skill Training",
          "Vocational Training",
          "Social Service",
        ],
        areaServed: {
          "@type": "Country",
          name: "Pakistan",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.fullName,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/gallery?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden antialiased">
        <Header />
        <ScrollToTop />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatBot />
      </body>
    </html>
  );
}
