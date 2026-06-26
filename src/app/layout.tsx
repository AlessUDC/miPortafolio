import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://paolo-ursua.vercel.app/"),
  title: "Paolo Ursua | Ingeniero de Sistemas & Desarrollador Web.",
  description: "Desarrollo soluciones web modernas, funcionales y enfocadas en ofrecer una excelente experiencia para tus usuarios.",
  openGraph: {
    title: "Paolo Ursua | Ingeniero de Sistemas & Desarrollador Web.",
    description: "Desarrollo soluciones web modernas, funcionales y enfocadas en ofrecer una excelente experiencia para tus usuarios.",
    url: "https://paolo-ursua.vercel.app/",
    siteName: "Paolo Ursua",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Paolo Ursua | Ingeniero de Sistemas & Desarrollador Web.",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paolo Ursua | Ingeniero de Sistemas & Desarrollador Web.",
    description: "Desarrollo soluciones web modernas, funcionales y enfocadas en ofrecer una excelente experiencia para tus usuarios.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@500;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body
        id="top"
        className="
          bg-white
          dark:bg-gray-900
          text-gray-900
          dark:text-gray-100
          font-sans
          antialiased
          selection:bg-blue-500/30
          selection:text-white
          flex flex-col min-h-screen
        "
      >
        <ThemeProvider>
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
