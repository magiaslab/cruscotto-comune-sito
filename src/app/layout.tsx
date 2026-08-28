import type { Metadata, Viewport } from "next";
import { Titillium_Web } from "next/font/google";
import { LandingShell } from "@/components/LandingShell";
import { fraseCruscottiEsistenti } from "@/lib/cruscotti-rete";
import { clipMetaDescription, OG_IMAGE } from "@/lib/meta";
import { SITE } from "@/lib/product";
import "./globals.css";

const titillium = Titillium_Web({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-titillium",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0066cc",
  width: "device-width",
  initialScale: 1,
};

const description = clipMetaDescription(
  `Dashboard di dati aperti per piccoli e medi comuni italiani, pronte da usare e facili da replicare. Oggi ${fraseCruscottiEsistenti()}. Progetto indipendente, non ufficiale.`,
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description,
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
  openGraph: {
    title: `${SITE.name} | Dati aperti per i comuni`,
    description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "it_IT",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Dati aperti per i comuni`,
    description,
    images: [OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${titillium.variable} flex min-h-screen flex-col antialiased`}>
        <LandingShell>{children}</LandingShell>
      </body>
    </html>
  );
}
