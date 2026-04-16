import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./styles/globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodrigo Pérez | Full stack developer",
  description:
    "Hi! My name is Rodrigo Pérez Hernández, I am a Full Stack end developer with more than 4 years of experience.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P9NBZKBB');
          `}
        </Script>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7H0VZ979LN"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-7H0VZ979LN');
  `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P9NBZKBB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager */}

        <Header />
        <main className="home-section pt-28 lg:pt-48">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
