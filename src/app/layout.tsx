import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bergachi-meubles.vercel.app"),
  title: {
    default: "Bergachi Meubles — Mobilier moderne en Tunisie",
    template: "%s | Bergachi Meubles",
  },
  description: SITE.description,
  keywords: [
    "Bergachi Meubles",
    "meubles Tunisie",
    "salon Tunisie",
    "chambre à coucher",
    "salle à manger",
    "décoration",
    "Bizerte",
    "Menzel Jemil",
  ],
  openGraph: {
    title: "Bergachi Meubles",
    description: SITE.description,
    type: "website",
    locale: "fr_TN",
    images: ["/hero.png"],
  },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
