import { useId } from "react";

export default function SunMark({ size = 40 }) {
  const id = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={id}
          x1="0"
          y1="0"
          x2="64"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--accent-1)" />
          <stop offset="0.55" stopColor="var(--accent-2)" />
          <stop offset="1" stopColor="var(--accent-3)" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth="5" strokeLinecap="round">
        <line x1="32" y1="2" x2="32" y2="10" />
        <line x1="32" y1="54" x2="32" y2="62" />
        <line x1="2" y1="32" x2="10" y2="32" />
        <line x1="54" y1="32" x2="62" y2="32" />
        <line x1="10.8" y1="10.8" x2="16.4" y2="16.4" />
        <line x1="47.6" y1="47.6" x2="53.2" y2="53.2" />
        <line x1="53.2" y1="10.8" x2="47.6" y2="16.4" />
        <line x1="16.4" y1="47.6" x2="10.8" y2="53.2" />
      </g>
      <circle cx="32" cy="32" r="16" fill={`url(#${id})`} />
    </svg>
  );
}
