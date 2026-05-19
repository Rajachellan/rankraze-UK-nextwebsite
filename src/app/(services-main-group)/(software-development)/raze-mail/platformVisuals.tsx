/** Small SVG mocks for platform cards — no external imagery. */
import type { ReactNode } from "react";

export type VisualKey =
  | "bulkSend"
  | "template"
  | "audience"
  | "analytics"
  | "workflow"
  | "integrations"
  | "drip";

function wrap(
  _key: VisualKey,
  children: ReactNode,
  className = "text-[#3DBC9C] dark:text-teal-400",
) {
  return (
    <svg
      viewBox="0 0 280 140"
      className={`w-full h-full ${className}`}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function PlatformCardVisual({ visualKey }: { visualKey: VisualKey }) {
  switch (visualKey) {
    case "bulkSend":
      return wrap(
        visualKey,
        <>
          <defs>
            <linearGradient id="pvBulk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3DBC9C" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#36aaf1" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="280" height="140" fill="url(#pvBulk)" />
          <rect x="36" y="28" width="208" height="84" rx="10" fill="white" className="dark:fill-[#0f1419]" stroke="currentColor" strokeOpacity="0.2" />
          <path d="M36 48 L140 92 L244 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35" />
          <circle cx="70" cy="62" r="5" fill="#3DBC9C" opacity="0.85" />
          <circle cx="100" cy="62" r="5" fill="#3DBC9C" opacity="0.55" />
          <rect x="52" y="98" width="176" height="6" rx="3" fill="currentColor" opacity="0.08" />
        </>,
      );
    case "template":
      return wrap(
        visualKey,
        <>
          <rect x="0" y="0" width="280" height="140" fill="#e0f2fe" className="dark:fill-sky-950/40" />
          <rect x="48" y="24" width="184" height="92" rx="8" fill="white" className="dark:fill-[#0f1419]" stroke="currentColor" strokeOpacity="0.15" />
          <rect x="64" y="42" width="72" height="8" rx="2" fill="#3DBC9C" opacity="0.35" />
          <rect x="64" y="58" width="152" height="6" rx="2" fill="currentColor" opacity="0.06" />
          <rect x="64" y="72" width="140" height="6" rx="2" fill="currentColor" opacity="0.06" />
          <rect x="64" y="92" width="56" height="14" rx="4" fill="#36aaf1" opacity="0.35" />
        </>,
      );
    case "audience":
      return wrap(
        visualKey,
        <>
          <rect x="0" y="0" width="280" height="140" fill="#ecfdf5" className="dark:fill-emerald-950/30" />
          <circle cx="100" cy="62" r="18" fill="white" className="dark:fill-[#0f1419]" stroke="currentColor" strokeOpacity="0.2" />
          <circle cx="140" cy="52" r="22" fill="white" className="dark:fill-[#0f1419]" stroke="#3DBC9C" strokeOpacity="0.5" />
          <circle cx="182" cy="62" r="18" fill="white" className="dark:fill-[#0f1419]" stroke="currentColor" strokeOpacity="0.2" />
          <rect x="72" y="98" width="136" height="6" rx="3" fill="currentColor" opacity="0.08" />
        </>,
      );
    case "analytics":
      return wrap(
        visualKey,
        <>
          <rect x="0" y="0" width="280" height="140" fill="#f0f9ff" className="dark:fill-slate-900/50" />
          <rect x="40" y="88" width="28" height="36" rx="3" fill="#3DBC9C" opacity="0.45" />
          <rect x="80" y="68" width="28" height="56" rx="3" fill="#3DBC9C" opacity="0.65" />
          <rect x="120" y="52" width="28" height="72" rx="3" fill="#36aaf1" opacity="0.55" />
          <rect x="160" y="76" width="28" height="48" rx="3" fill="#3DBC9C" opacity="0.4" />
          <rect x="200" y="60" width="28" height="64" rx="3" fill="#36aaf1" opacity="0.45" />
        </>,
      );
    case "workflow":
      return wrap(
        visualKey,
        <>
          <rect x="0" y="0" width="280" height="140" fill="#f5f3ff" className="dark:fill-violet-950/25" />
          <circle cx="70" cy="70" r="14" fill="white" className="dark:fill-[#0f1419]" stroke="#3DBC9C" />
          <circle cx="140" cy="50" r="14" fill="white" className="dark:fill-[#0f1419]" stroke="#36aaf1" />
          <circle cx="210" cy="70" r="14" fill="white" className="dark:fill-[#0f1419]" stroke="#3DBC9C" />
          <path d="M84 70 L126 58 M154 58 L196 70" stroke="#3DBC9C" strokeWidth="2" strokeOpacity="0.5" fill="none" />
        </>,
      );
    case "drip":
      return wrap(
        visualKey,
        <>
          <rect x="0" y="0" width="280" height="140" fill="#ecfdf5" className="dark:fill-emerald-950/30" />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${52 + i * 72}, ${36 + i * 8})`}>
              <rect width="56" height="40" rx="6" fill="white" className="dark:fill-[#0f1419]" stroke="currentColor" strokeOpacity="0.15" />
              <rect x="22" y="14" width="12" height="12" rx="3" fill="#3DBC9C" opacity="0.5" />
            </g>
          ))}
        </>,
      );
    case "integrations":
      return wrap(
        visualKey,
        <>
          <rect x="0" y="0" width="280" height="140" fill="#ecfeff" className="dark:fill-cyan-950/25" />
          <rect x="60" y="40" width="56" height="56" rx="10" fill="white" className="dark:fill-[#0f1419]" stroke="#3DBC9C" strokeOpacity="0.4" />
          <rect x="164" y="40" width="56" height="56" rx="10" fill="white" className="dark:fill-[#0f1419]" stroke="#36aaf1" strokeOpacity="0.4" />
          <path d="M116 68 L164 68" stroke="#3DBC9C" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
        </>,
      );
    default:
      return null;
  }
}
