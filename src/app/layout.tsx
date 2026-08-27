import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import "./globals.css";

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pemerintah Kabupaten Probolinggo",
  description: "Layanan digital terpadu dan informasi resmi Pemerintah Kabupaten Probolinggo.",
  icons: {
    icon: "/image/Logo-Kabpro.svg",
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${merriweatherSans.variable} antialiased`}>
      <body suppressHydrationWarning className="font-sans min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 flex flex-col relative">
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/sienna-accessibility/dist/sienna-accessibility.umd.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
