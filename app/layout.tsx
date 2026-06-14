import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CocoDrop — Live commerce from SA makers",
  description:
    "Watch South African makers sell their craft live. Buy direct. No middlemen. Join the founding community.",
  openGraph: {
    title: "CocoDrop — Live commerce from SA makers",
    description:
      "Be one of the first. Makers, creators, and shoppers building South Africa's first live commerce platform.",
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
