import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import { Cursor } from "@/components/Cursor";
import { ClickChime } from "@/components/ClickChime";
import { PixelCat } from "@/components/PixelCat";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://deekshant.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deekshant Gupta — Backend & AI Engineer",
    template: "%s — Deekshant Gupta",
  },
  description:
    "Backend and AI engineer in Gurugram. Python backends, on-premise RAG, email infrastructure at scale, and low-latency developer tools.",
  keywords: [
    "Deekshant Gupta",
    "Backend Engineer",
    "AI Engineer",
    "Next.js Developer",
    "Node.js",
    "Python",
    "Rust",
    "TypeScript",
    "Portfolio",
    "VIT Chennai",
  ],
  authors: [{ name: "Deekshant Gupta", url: profile.github }],
  creator: "Deekshant Gupta",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Deekshant Gupta",
    title: "Deekshant Gupta — Backend & AI Engineer",
    description:
      "Backend and AI engineer in Gurugram. Python backends, on-premise RAG, email infrastructure at scale, and low-latency developer tools.",
    images: [{ url: "/profile.jpg", width: 600, height: 600, alt: "Deekshant Gupta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deekshant Gupta — Backend & AI Engineer",
    description:
      "Backend and AI engineer in Gurugram. Python backends, on-premise RAG, email infrastructure at scale, and low-latency developer tools.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5ef",
  colorScheme: "light",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  jobTitle: profile.role,
  image: `${siteUrl}/profile.jpg`,
  sameAs: [profile.github, profile.linkedin, profile.leetcode],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Cursor />
        <ClickChime />
        <PixelCat />
        {children}
      </body>
    </html>
  );
}
