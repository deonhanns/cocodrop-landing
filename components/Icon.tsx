/**
 * CocoDrop Icon Component — Landing Page
 * SVG icons sourced from the cocodrop-platform design system.
 * Replaces emoji placeholders with production SVG icons.
 */

import React from "react";

// ── SVG path definitions ──────────────────────────────────────────────────
const ICONS: Record<string, (size: number) => React.ReactElement> = {
  // Maker — package/box icon
  package: (s) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),

  // Creator — broadcast/signal icon
  broadcast: (s) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
      <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M5.5 5.5a9 9 0 0 0 0 13M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  ),

  // Shopper — shopping cart icon
  cart: (s) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
};

export type IconName = keyof typeof ICONS;
export const iconNames = Object.keys(ICONS) as IconName[];

// ── Icon component ────────────────────────────────────────────────────────
interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  "aria-label"?: string;
}

export function Icon({
  name,
  size = 24,
  color,
  className = "",
  "aria-label": ariaLabel,
}: IconProps): React.ReactElement | null {
  const renderer = ICONS[name];
  if (!renderer) return null;

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        width: size,
        height: size,
        color: color ?? "currentColor",
      }}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      role={ariaLabel ? "img" : undefined}
    >
      {renderer(size)}
    </span>
  );
}

export default Icon;
