import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier Cendre & Chêne — Ébénisterie à Annecy",
  description: "Mobilier conçu et fabriqué à la main, à Annecy. Atelier Cendre & Chêne — concept de démonstration par Megahana.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
