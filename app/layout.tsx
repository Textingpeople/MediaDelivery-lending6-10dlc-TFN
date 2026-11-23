import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luminary Path Financial — Smarter Money Decisions at Every Career Stage",
  description: "Luminary Path Financial gives employees self-serve guides, checklists and calculators for smarter money decisions at every stage of their career.",
  keywords: "career stage money decisions, employee benefit, self-serve guides, checklists, calculators, 401(k) contribution, emergency fund, retirement timeline",
  openGraph: {
    title: "Luminary Path Financial — Smarter Money Decisions at Every Career Stage",
    description: "Luminary Path Financial gives employees self-serve guides, checklists and calculators for smarter money decisions at every stage of their career.",
    siteName: "Luminary Path Financial",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [],
    shortcut: [],
    apple: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
