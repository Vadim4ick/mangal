/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
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
  title: "Царь мангал | Краснодар",
  description:
    "Закажите вкусные блюда на мангале с доставкой в Краснодаре! Мы предлагаем широкий ассортимент шашлыков, люля-кебаб, овощей и рыбы. Самовывоз: ул. Карякина, 7. Заказ по телефону +79005558383. Насладитесь настоящими кулинарными шедеврами прямо у себя дома!",
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

        {/* Яндекс.Метрика */}
        <Script id="yandex-metrika-init" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) { return; }
          }
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],
          k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(99137008, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });`}
        </Script>

        {/* Дополнительный noscript для Яндекс.Метрики */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/99137008"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
