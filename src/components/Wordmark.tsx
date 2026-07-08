import { Link } from 'react-router-dom';

/* ──────────────────────────────────────────────────────────────
   Skuli UG — editorial masthead wordmark.

   A hand-drawn gold seal (the same heraldic motif carried by the
   homepage report card) locked up with the name in Fraunces. Pure
   vector + type — it replaces the 2 MB raster logo, stays razor
   sharp at every size, and finally sits inside the paper palette.
   ────────────────────────────────────────────────────────────── */

/* Five-point star, centred on (24,24) within a 48-unit seal. */
const STAR =
  'M24 17 L25.70 21.65 L30.66 21.84 L26.76 24.90 L28.11 29.66 ' +
  'L24 26.90 L19.89 29.66 L21.24 24.90 L17.34 21.84 L22.30 21.65 Z';

function Seal({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="text-gold flex-shrink-0"
    >
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="24"
        cy="24"
        r="16.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="1.4 4.4"
        opacity="0.6"
      />
      <path d={STAR} fill="currentColor" />
    </svg>
  );
}

type Tone = 'light' | 'dark';
type Size = 'sm' | 'md' | 'lg';

const SEAL_PX: Record<Size, number> = { sm: 26, md: 30, lg: 40 };
const NAME_PX: Record<Size, string> = { sm: '19px', md: '22px', lg: '30px' };

interface WordmarkProps {
  tone?: Tone;
  size?: Size;
  /** Render as a plain lockup (no <Link>) — e.g. inside the mobile drawer header. */
  asStatic?: boolean;
  className?: string;
}

function Lockup({ tone, size }: { tone: Tone; size: Size }) {
  const nameColor = tone === 'dark' ? 'text-paper-2' : 'text-ink';
  return (
    <span className="inline-flex items-center gap-2.5">
      <Seal size={SEAL_PX[size]} />
      <span
        className="font-display leading-none tracking-tightest"
        style={{ fontSize: NAME_PX[size] }}
      >
        <span className={nameColor}>Skuli</span>
        <span className="font-display-italic text-gold">&nbsp;UG</span>
      </span>
    </span>
  );
}

export default function Wordmark({
  tone = 'light',
  size = 'sm',
  asStatic = false,
  className = '',
}: WordmarkProps) {
  if (asStatic) {
    return (
      <span className={className}>
        <Lockup tone={tone} size={size} />
      </span>
    );
  }
  return (
    <Link
      to="/"
      aria-label="Skuli UG — home"
      className={`group inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
    >
      <Lockup tone={tone} size={size} />
    </Link>
  );
}
