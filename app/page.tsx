// app/page.tsx
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LogoMark from "@/components/LogoMark";

type Path = "maker" | "creator" | "shopper" | null;

const PATHS = {
  maker: {
    label: "I make things",
    sub: "Sell your craft to the whole country",
    icon: "🛠️",
    color: "#2D6A4F",
    headline: "Your products. Live on air.",
    pitch:
      "List your handmade goods for free. Creators host live drops and sell them for you. You get paid when they sell — no upfront cost, no website needed.",
    benefits: [
      "Zero cost to join — you only pay when you sell",
      "Featured in live drops to thousands of viewers",
      "Founding Maker badge — you were here first",
      "Your products on SA's first live commerce platform",
    ],
    cta: "Join as a Founding Maker",
  },
  creator: {
    label: "I create content",
    sub: "Earn real commission hosting drops",
    icon: "🎥",
    color: "#D4943A",
    headline: "Earn from every sale you drive.",
    pitch:
      "Host live drops, earn commission on every sale. No follower minimum. No waiting for brand deals. Real income from the very first drop.",
    benefits: [
      "Commission on every sale — from drop one",
      "No follower count required to start",
      "First-mover advantage — get in before everyone",
      "Founding Creator badge on your profile forever",
    ],
    cta: "Join as a Founding Creator",
  },
  shopper: {
    label: "I want to shop",
    sub: "Discover local. Buy live.",
    icon: "🛍️",
    color: "#E8440A",
    headline: "Shop local. Watch it live.",
    pitch:
      "Discover South African makers selling live. Watch products demonstrated in real time, ask questions, and buy with confidence. Your money protected until it arrives.",
    benefits: [
      "Watch products live before you buy",
      "Support local SA makers directly",
      "Escrow protection — money held until delivery",
      "Be first to the drops everyone will talk about",
    ],
    cta: "Join as a Founding Shopper",
  },
};

function LandingContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get("from") || "direct";

  const [path, setPath] = useState<Path>(null);
  const [count, setCount] = useState(0);
  const [targetCount, setTargetCount] = useState(247);
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
    <div className="min-h-screen relative">
      {/* Ambient glow */}
      <div
        style={{
          position: "fixed",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(232,68,10,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-5 py-8">
        {/* Source welcome */}
        {welcome && (
          <div className="text-center mb-4 fade-up">
            <span
              className="mono text-xs px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(232,68,10,0.12)",
                border: "1px solid rgba(232,68,10,0.3)",
                color: "#FF6B35",
              }}
            >
              {welcome}
            </span>
          </div>
        )}

        {/* Hero video — the 3D logo intro */}
        <div className="flex flex-col items-center text-center pt-2 pb-8">
          <div
            className="drop-in mb-5 w-full rounded-2xl overflow-hidden"
            style={{
              maxWidth: 520,
              border: "1px solid #2E2C2A",
              boxShadow: "0 0 60px rgba(232,68,10,0.15)",
            }}
          >
            <video
              src="/cocodrop-intro.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/cocodrop-intro-poster.jpg"
              style={{ width: "100%", display: "block" }}
              aria-label="CocoDrop — Live Commerce. Made in South Africa"
            />
          </div>
          <p className="text-mist text-base leading-relaxed max-w-md">
            South Africa's first live commerce platform.
            <br />
            Watch local makers sell their craft, live.
          </p>
        </div>

        {/* Live counter */}
        <div className="flex justify-center mb-10">
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-xl"
            style={{ background: "#1C1A18", border: "1px solid #2E2C2A" }}
          >
            <div className="relative flex items-center justify-center">
              <div
                style={{
                  position: "absolute",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#E8440A",
                  animation: "pulse-ring 1.5s ease-out infinite",
                }}
              />
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#E8440A",
                }}
              />
            </div>
            <span className="mono text-sm text-cream">
              <span className="text-ember font-bold">{count.toLocaleString()}</span>{" "}
              South Africans already joined
            </span>
          </div>
        </div>

        {!submitted ? (
          <>
            {/* Path selection */}
            {!path && (
              <div className="fade-up">
                <p className="text-center mono text-xs uppercase tracking-[3px] text-mist mb-5">
                  What brings you to CocoDrop?
                </p>
                <div className="space-y-3">
                  {(Object.keys(PATHS) as Array<keyof typeof PATHS>).map((key) => {
                    const p = PATHS[key];
                    return (
                      <button
                        key={key}
                        onClick={() => setPath(key)}
                        className="w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all"
                        style={{
                          background: "#1C1A18",
                          border: "1px solid #2E2C2A",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = p.color;
                          e.currentTarget.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "#2E2C2A";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        <span style={{ fontSize: 28 }}>{p.icon}</span>
                        <div className="flex-1">
                          <div
                            className="font-bold text-base"
                            style={{ color: p.color }}
                          >
                            {p.label}
                          </div>
                          <div className="text-mist text-sm">{p.sub}</div>
                        </div>
                        <span className="text-mist text-xl">→</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Selected path form */}
            {path && (
              <SignupForm
                path={path}
                source={source}
                onBack={() => setPath(null)}
                onDone={(newTotal) => {
                  setSubmitted(true);
                  if (newTotal) setTargetCount(newTotal);
                }}
              />
            )}
          </>
        ) : (
          <ThankYou path={path} />
        )}

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-[#1C1A18]">
          <p className="mono text-xs text-mist leading-relaxed">
            Built in Cape Town · By a 15-year-old founder · For South Africa
          </p>
          <p className="mono text-[10px] text-[#3a3632] mt-2">
            CocoDrop · Founding Community · 2026
          </p>
        </div>
      </div>
    </div>
  );
}

function SignupForm({
  path,
  source,
  onBack,
  onDone,
}: {
  path: keyof typeof PATHS;
  source: string;
  onBack: () => void;
  onDone: (total?: number) => void;
}) {
  const p = PATHS[path];
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [extra, setExtra] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const extraLabel =
    path === "maker"
      ? "What do you make? (optional)"
      : path === "creator"
      ? "Your social handle or platform (optional)"
      : "Where in SA are you? (optional)";

  const canSubmit = name && contact;

  async function submit() {
    if (!canSubmit) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: path,
          name,
          contact,
          extra,
          source,
          joinedAt: new Date().toISOString(),
        }),
      });
      const data = await res.json();
      onDone(data.total);
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="fade-up">
      <button
        onClick={onBack}
        className="mono text-xs text-mist mb-4 flex items-center gap-1"
      >
        ← back
      </button>

      <div
        className="rounded-2xl p-6 mb-5"
        style={{
          background: "#1C1A18",
          border: `1px solid ${p.color}44`,
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span style={{ fontSize: 32 }}>{p.icon}</span>
          <div>
            <h2 className="bebas text-2xl" style={{ color: p.color }}>
              {p.headline}
            </h2>
          </div>
        </div>
        <p className="text-cream text-sm leading-relaxed mb-5 opacity-80">
          {p.pitch}
        </p>
        <div className="space-y-2">
          {p.benefits.map((b, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span style={{ color: p.color, fontWeight: 700 }}>✓</span>
              <span className="text-sm text-cream opacity-75">{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form fields */}
      <div className="space-y-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-xl px-4 py-3 text-sm outline-none"
          style={{
            background: "#1C1A18",
            border: "1px solid #2E2C2A",
            color: "#F5F0E8",
          }}
        />
        <input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="WhatsApp number or email"
          className="w-full rounded-xl px-4 py-3 text-sm outline-none"
          style={{
            background: "#1C1A18",
            border: "1px solid #2E2C2A",
            color: "#F5F0E8",
          }}
        />
        <input
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
          placeholder={extraLabel}
          className="w-full rounded-xl px-4 py-3 text-sm outline-none"
          style={{
            background: "#1C1A18",
            border: "1px solid #2E2C2A",
            color: "#F5F0E8",
          }}
        />

        {error && <p className="text-sm" style={{ color: "#FF3B30" }}>{error}</p>}

        <button
          onClick={submit}
          disabled={!canSubmit || submitting}
          className="w-full py-4 rounded-xl mono text-sm font-bold tracking-wider transition-opacity"
          style={{
            background: canSubmit ? p.color : "#2E2C2A",
            color: canSubmit ? "#fff" : "#6B6560",
            opacity: submitting ? 0.6 : 1,
          }}
        >
          {submitting ? "JOINING..." : p.cta.toUpperCase()}
        </button>
        <p className="mono text-[10px] text-mist text-center leading-relaxed">
          No spam. We'll WhatsApp you when it's your turn to come on board.
        </p>
      </div>
    </div>
  );
}

function ThankYou({ path }: { path: Path }) {
  const p = path ? PATHS[path] : null;
  return (
    <div className="fade-up text-center py-8">
      <div className="drop-in mb-5 flex justify-center">
        <LogoMark size={64} animated />
      </div>
      <h2 className="bebas text-3xl mb-3" style={{ color: p?.color || "#E8440A" }}>
        You're in.
      </h2>
      <p className="text-cream opacity-80 leading-relaxed max-w-sm mx-auto mb-6">
        Welcome to the founding community. You're one of the first South
        Africans on CocoDrop. We'll WhatsApp you the moment it's your turn to
        come on board.
      </p>
      <div
        className="inline-block rounded-xl px-5 py-3"
        style={{ background: "#1C1A18", border: "1px solid #2E2C2A" }}
      >
        <p className="mono text-xs text-mist">
          Share CocoDrop with someone who'd love it
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-coal" />}>
      <LandingContent />
    </Suspense>
  );
}
