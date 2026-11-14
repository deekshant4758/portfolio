import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
    "Backend-focused engineer building automation, AI workflows, and data-heavy products. SDE Intern at Outbox Labs, B.Tech CSE (AI/ML) at VIT Chennai.",
  keywords: [
    "Deekshant Gupta",
    "Backend Engineer",
    "AI Engineer",
    "Next.js Developer",
    "Node.js",
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
      "Backend-focused engineer building automation, AI workflows, and data-heavy products.",
    images: [{ url: "/profile.jpg", width: 600, height: 600, alt: "Deekshant Gupta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deekshant Gupta — Backend & AI Engineer",
    description:
      "Backend-focused engineer building automation, AI workflows, and data-heavy products.",
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
  themeColor: "#09090b",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: profile.role,
  image: `${siteUrl}/profile.jpg`,
  sameAs: [profile.github, profile.linkedin, profile.leetcode],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
