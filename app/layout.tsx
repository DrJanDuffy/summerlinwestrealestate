import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Summerlin West Real Estate",
  description: "Your trusted real estate partner in Summerlin West",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
