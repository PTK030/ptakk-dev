import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import "@/app/styles/main.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const poppins: NextFont = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "PTAKK | Web Development & AI",
  description: "Ekskluzywne aplikacje webowe i rozwiązania AI. Zamień swoją wizję w zyskowny produkt o kinowej jakości.",
};

import SmoothScroll from "@/app/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={poppins.className}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}