import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { url_dominio } from "@/contants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hilo Language School | Escola de Idiomas em Rio Claro - SP",
  description:
    "Aprenda inglês com confiança na Hilo Language School. Aulas personalizadas para crianças, jovens e adultos. Presencial em Rio Claro-SP e online para todo o mundo.",
  keywords: [
    "escola de inglês",
    "curso de inglês Rio Claro",
    "aulas de inglês online",
    "inglês para crianças",
    "inglês para adultos",
    "aulas particulares de inglês",
    "escola de idiomas Rio Claro",
    "Hilo Language School",
    "inglês fluente",
    "curso de inglês presencial",
  ],
  authors: [{ name: "Hilo Language School" }],
  creator: "Hilo Language School",
  publisher: "Hilo Language School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(url_dominio), //url real
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hilo Language School | Aprenda Inglês com Confiança",
    description:
      "Transforme seu inglês com aulas personalizadas. Presencial em Rio Claro-SP e online para todo o mundo. Professores nativos e metodologia comprovada.",
    url: url_dominio, //url real
    siteName: "Hilo Language School",
    images: [
      {
        url: "/op-image.png", // Criar imagem 1200x630px
        width: 1200,
        height: 630,
        alt: "Hilo Language School - Escola de Idiomas",
      },
    ],
    locale: "pt_BR",
    type: "website",
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
  verification: {
    google: "seu-codigo-google-search-console", // Adicionar código real
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Hilo Language School",
    description:
      "Escola de idiomas com aulas presenciais e online para todos os níveis",
    url: url_dominio,
    logo: url_dominio + "/logo.png",
    image: url_dominio + "/op-image.png",
    telephone: "+55-19-99604-2420",
    email: "contato@hilo.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. 7, 1489 - Santa Cruz",
      addressLocality: "Rio Claro",
      addressRegion: "SP",
      postalCode: "13500-200",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -22.428,
      longitude: -47.556,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/hiloschool_/", //url real
      "https://www.facebook.com/hilorenaes/", //url real
    ],
    founder: {
      "@type": "Person",
      name: "Lorena",
      jobTitle: "Founder & Teacher",
    },
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "5",
    //   reviewCount: "11",
    // },
    offers: {
      "@type": "Offer",
      category: "English Language Courses",
    },
    areaServed: ["Rio Claro", "São Paulo", "Brasil", "Online Worldwide"],
  };
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Theme color */}
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className="antialiased bg-white text-gray-900 font-inter">
        {children}
        {/* Schema.org markup para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLD),
          }}
        />
      </body>
    </html>
  );
}
