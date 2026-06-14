// components/LogoMark.tsx
// The CocoDrop droplet + play triangle + signal rings — from the brand system.

export default function LogoMark({
  size = 48,
  animated = false,
}: {
  size?: number;
  animated?: boolean;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="CocoDrop logo">
      {/* Outer ring — signal pulse */}
      <circle cx="24" cy="24" r="22" stroke="#E8440A" strokeWidth="2" opacity="0.3">
        {animated && (
          <animate attributeName="r" values="22;26;22" dur="2s" repeatCount="indefinite" />
        )}
        {animated && (
          <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
        )}
      </circle>
      {/* Mid ring */}
      <circle cx="24" cy="24" r="16" stroke="#E8440A" strokeWidth="1.5" opacity="0.5" />
      {/* Core droplet */}
      <path
        d="M24 8 C24 8 34 18 34 25 C34 30.52 29.52 35 24 35 C18.48 35 14 30.52 14 25 C14 18 24 8 24 8Z"
        fill="#E8440A"
      />
      {/* Play triangle — optically corrected */}
      <path
        d="M 22.05,20.38 Q 21.00,19.80 21.00,21.00 L 21.00,27.40 Q 21.00,28.60 22.05,28.02 L 27.95,24.78 Q 29.00,24.20 27.95,23.62 Z"
        fill="white"
        opacity="0.85"
      />
    </svg>
  );
}
