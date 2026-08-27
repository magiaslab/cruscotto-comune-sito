import type { Metadata, Viewport } from "next";
import { Titillium_Web } from "next/font/google";
import { LandingShell } from "@/components/LandingShell";
import { fraseCruscottiEsistenti } from "@/lib/cruscotti-rete";
import { clipMetaDescription } from "@/lib/meta";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: clipMetaDescription(
    `Qui trovi i cruscotti di dati aperti già online e quello che serve per crearne uno dedicato al tuo comune. Oggi ${fraseCruscottiEsistenti()}. Progetto indipendente, non ufficiale.`,
  ),
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
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
