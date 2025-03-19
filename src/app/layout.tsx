import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

/* Metadata for the entire application, improves SEO and provides descriptive information.  */

export const metadata: Metadata = {
  title: "Rodrigo Pérez | Full stack developer",
  description:
    "Hi! My name is Rodrigo Pérez Hernández, I am a Full Stack end developer with more than 4 years of experience.",
  icons: {
    icon: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <Header />
        <main className="home-section pt-28 lg:pt-48">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
