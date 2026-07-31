import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import businessData from "@/data/business-data.json";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const { isletme, analitik } = businessData;

const siteUrl = "https://www.ornek-mimarlik.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${isletme.adi} | ${isletme.unvan}`,
    template: `%s | ${isletme.adi}`,
  },
  description: isletme.aciklama,
  keywords: [
    "iç mimarlık",
    "mimari proje",
    "lüks konut tasarımı",
    "ticari mekan tasarımı",
    "anahtar teslim uygulama",
    "İstanbul iç mimar",
    "Kadıköy mimarlık ofisi",
  ],
  authors: [{ name: isletme.adi }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: isletme.adi,
    title: `${isletme.adi} | ${isletme.unvan}`,
    description: isletme.aciklama,
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: isletme.adi,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${isletme.adi} | ${isletme.unvan}`,
    description: isletme.aciklama,
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["InteriorDesignBusiness", "ProfessionalService"],
  name: isletme.adi,
  description: isletme.aciklama,
  telephone: isletme.telefon,
  email: isletme.eposta,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kadıköy",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  url: siteUrl,
  areaServed: "İstanbul",
  priceRange: "$$$",
  makesOffer: isletme && [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "İç Mimari Tasarım",
        description: "Kişiye özel lüks iç mekan projeleri.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Anahtar Teslim Uygulama",
        description: "Projelendirmeden teslime tüm inşaat süreçleri.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${analitik.gtm_id}');
          `}
        </Script>
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${analitik.ga4_id}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analitik.ga4_id}');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${analitik.gtm_id}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
