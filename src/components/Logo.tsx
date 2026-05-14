interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ variant = "dark", className = "", showSubtitle = true }: LogoProps) {
  const brandColor = "#00b09b";
  const subtitleColor = variant === "dark" ? "rgba(255,255,255,0.8)" : "#9CA3AF";

  return (
    <svg
      viewBox="0 0 310 112"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ceonocra Health Research Solutions"
    >
      {/* Molecular network connector lines */}
      <line x1="226" y1="22" x2="250" y2="11" stroke={brandColor} strokeWidth="1.8" />
      <line x1="250" y1="11" x2="274" y2="26" stroke={brandColor} strokeWidth="1.8" />

      {/* Molecular nodes */}
      <circle cx="226" cy="22" r="5.5" fill={brandColor} />
      <circle cx="250" cy="11" r="4.5" fill={brandColor} />
      <circle cx="274" cy="26" r="7" fill={brandColor} />

      {/* Arc swoosh from text to molecular icon */}
      <path
        d="M 40 48 C 110 14 178 4 226 22"
        stroke={brandColor}
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Descending tail from last molecular node */}
      <path
        d="M 274 33 C 294 48 298 65 287 76"
        stroke={brandColor}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Main brand text */}
      <text
        x="5"
        y="82"
        fontSize="58"
        fontFamily="Georgia, 'Times New Roman', serif"
        fill={brandColor}
        fontWeight="400"
      >
        Ceonocra
      </text>

      {showSubtitle && (
        <text
          x="5"
          y="105"
          fontSize="10.5"
          fontFamily="Arial, Helvetica, sans-serif"
          fill={subtitleColor}
          letterSpacing="3.2"
        >
          HEALTH RESEARCH SOLUTIONS
        </text>
      )}
    </svg>
  );
}
