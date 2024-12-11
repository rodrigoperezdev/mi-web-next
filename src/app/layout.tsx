import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/* Metadata for the entire application, improves SEO and provides descriptive information.  */

export const metadata: Metadata = {
  title: "Rodrigo Pérez | Front end developer",
  description:
    "Hi! My name is Rodrigo Pérez, I am a front end developer with more than 3 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
