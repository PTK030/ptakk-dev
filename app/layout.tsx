import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

const poppins: NextFont = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Codeweb Solution | Tworzenie stron internetowych",
  description: "Stworzę stronę internetową na miarę XXI wieku!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
