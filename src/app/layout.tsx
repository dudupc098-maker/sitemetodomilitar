// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import UTMSaver from "@/components/utm-saver";

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
        {/* Fontes (pode manter se você já usa) */}
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

        {/* === (Opcional) Meta Pixel via ENV ===
           Se você usa Pixel, configure no Netlify:
           NEXT_PUBLIC_META_PIXEL_ID=SEU_ID
        */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID ? (
          <>
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                alt=""
                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        ) : null}
      </head>

      <body className="font-body antialiased">
        <UTMSaver />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
