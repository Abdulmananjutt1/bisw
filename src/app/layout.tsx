import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ChatBot } from "@/components/ui/ChatBot";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/config/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.shortName} — Girls Orphanage Lahore`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "BIWS",
    "Begum Inayat Welfare Society",
    "orphanage Lahore",
    "girls orphanage",
    "orphan girls education",
    "charity Pakistan",
    "NGO Lahore",
    "Model Town Lahore",
    "Dr Amna Amber",
    "welfare society Pakistan",
    "donate orphan",
    "child sponsorship Pakistan",
  ],
  authors: [{ name: siteConfig.shortName }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.shortName,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full scroll-smooth`}>
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
