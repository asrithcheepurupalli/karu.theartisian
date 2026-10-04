import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import "./site.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karu.made-by-ac.com"),
  title: "Karu, Handcrafted in India, collected worldwide",
  description:
    "A curated gallery of handcrafted Indian art. Every piece verified, every story preserved, and the majority of every sale paid directly to the maker.",
  openGraph: {
    type: "website",
    siteName: "Karu",
    title: "Karu, Handcrafted in India, collected worldwide",
    description: "A concept study: a curated gallery of handcrafted Indian art, with every story preserved.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Karu: handcrafted in India, collected worldwide" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
