import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "@/shared/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Providers } from "@/shared/providers/Providers";

const manrope = Manrope({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Царь шампур | Краснодар",
  description: "Блюда на гриле с доставкой по Краснодару",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        translate="no"
        className={`${manrope.className} flex min-h-screen flex-col`}
      >
        <Providers>
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
