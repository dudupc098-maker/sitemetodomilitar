// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import UTMSaver from "@/components/utm-saver";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "Método Sono Militar",
  description: "Descubra o método militar que faz você dormir em 2 minutos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Fontes (ok manter) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-body antialiased">
        {/* Pixel fica SOMENTE no componente client */}
        <MetaPixel />

        {/* Salva UTMs (client) */}
        <UTMSaver />

        {children}

        <Toaster />
      </body>
    </html>
  );
}
