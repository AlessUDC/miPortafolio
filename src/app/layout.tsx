import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desarrollador Web Portfolio | Plantilla Premium",
  description: "Plantilla de portafolio premium y moderna para un ingeniero desarrollador web con bio, proyectos de GitHub e integración de redes sociales.",
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body id="top" className="bg-gray-900 text-gray-100 font-sans antialiased selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
