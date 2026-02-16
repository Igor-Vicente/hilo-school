import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Hilo Language School | Escola de Inglês em Rio Claro - SP",
  description:
    "Aprenda inglês com confiança na Hilo Language School. Aulas personalizadas para crianças, jovens e adultos. Presencial em Rio Claro-SP e online para todo o mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head></head>
      <body className="antialiased bg-white text-gray-900 font-inter">
        {children}
      </body>
    </html>
  );
}
