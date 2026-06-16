import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CocoDrop Beta — 50 testers. Shape SA's first live commerce app.",
  description:
    "Join 50 beta testers shaping CocoDrop — South Africa's first live commerce platform. Makers, creators, and shoppers wanted.",
  openGraph: {
    title: "CocoDrop Beta — 50 testers. Shape SA's first live commerce app.",
    description:
      "Be one of 50 testers who decide what CocoDrop becomes. Makers, creators, and shoppers — your feedback builds the final product.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
