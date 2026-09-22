import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blessed KAA Football Academy (BKFA) | Official Portal",
  description: "Official web platform of Blessed KAA Football Academy, Jos, Plateau State, Nigeria. Discover our Men's and Women's squads, player profiles, match fixtures, and academy tryouts.",
  keywords: ["Blessed KAA Football Academy", "BKFA", "Jos football", "Plateau State football", "Nigerian football academy", "Male football team", "Female football team", "BKFA Queens"],
  openGraph: {
    title: "Blessed KAA Football Academy (BKFA) - Jos",
    description: "Empowering football excellence across Male & Female teams in Jos, Plateau State.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} bg-white text-slate-900 antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
