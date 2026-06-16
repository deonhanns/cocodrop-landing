// app/page.tsx
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LogoMark from "@/components/LogoMark";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/components/Icon";

type Path = "maker" | "creator" | "shopper" | null;

const PATHS = {
  maker: {
    label: "I make things",
    sub: "Sell your craft to the whole country",
    iconName: "package" as IconName,
    color: "#2D6A4F",
    headline: "Your products. Live on air.",
    pitch:
      "List your handmade goods for free. Creators host live drops and sell them for you. You get paid when they sell — no upfront cost, no website needed.",
    benefits: [
      "Zero cost to join — you only pay when you sell",
      "Featured in live drops to thousands of viewers",
      "Beta tester badge — your name in the credits",
      "Your feedback shapes the final product",
    ],
    cta: "Apply for Beta Access",
  },
  creator: {
    label: "I create content",
    sub: "Earn real commission hosting drops",
    iconName: "broadcast" as IconName,
    color: "#D4943A",
    headline: "Earn from every sale you drive.",
    pitch:
      "Host live drops, earn commission on every sale. No follower minimum. No waiting for brand deals. Real income from the very first drop.",
    benefits: [
      "Commission on every sale — from drop one",
      "No follower count required to start",
      "Beta tester badge — your name in the credits",
      "Your feedback shapes the creator experience",
    ],
    cta: "Apply for Beta Access",
  },
  shopper: {
    label: "I want to shop",
    sub: "Discover local. Buy live.",
    iconName: "cart" as IconName,
    color: "#E8440A",
    headline: "Shop local. Watch it live.",
    pitch:
      "Discover South African makers selling live. Watch products demonstrated in real time, ask questions, and buy with confidence. Your money protected until it arrives.",
    benefits: [
      "Watch products live before you buy",
      "Support local SA makers directly",
      "Escrow protection — money held until delivery",
      "Beta tester badge — your name in the credits",
    ],
    cta: "Apply for Beta Access",
  },
};

function LandingContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get("from") || "direct";

  const [path, setPath] = useState<Path>(null);
  const [count, setCount] = useState(0);
  const [targetCount, setTargetCount] = useState(50);
  const [submitted, setSubmitted] = useState(false);

  // Animated counter on load
  useEffect(() => {
    let start = 0;
    const target = targetCount;
    const step = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [targetCount]);

  // Source-based welcome
  const sourceWelcome: Record<string, string> = {
    heartfm: "Heard us on Heart FM? Welcome.",
    kfm: "Heard us on KFM? Welcome.",
    capetalk: "Heard us on CapeTalk? Welcome.",
    youthday: "Here from our Youth Day story? Welcome.",
    "5fm": "Heard us on 5FM? Welcome.",
    metro: "Heard us on Metro FM? Welcome.",
    direct: "",
  };
  const welcome = sourceWelcome[source.toLowerCase()] || "";

  return (
    <div
