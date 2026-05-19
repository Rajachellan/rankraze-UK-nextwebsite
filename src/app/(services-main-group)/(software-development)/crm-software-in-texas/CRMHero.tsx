import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Users,
  BarChart2,
  Zap,
  HelpCircle,
  Layers,
} from "lucide-react";

export type TrustedLogo = {
  src: string;
  alt: string;
  className?: string;
};

type CRMHeroProps = {
  leadFormUrl: string;
  trustedLogos: TrustedLogo[];
};

const PILL_LINKS = [
  { href: "#features", label: "Features", Icon: Layers },
  { href: "#industries", label: "Industries", Icon: Users },
  { href: "#benefits", label: "Benefits", Icon: BarChart2 },
  { href: "#mobile", label: "Mobile App", Icon: Zap },
  { href: "#faq", label: "FAQ", Icon: HelpCircle },
];

function HeroBeams() {
  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none motion-reduce:opacity-60"
      aria-hidden
    >
      <div className="absolute -right-16 top-0 h-[140%] w-28 -skew-x-12 bg-linear-to-b from-[#3CBA99]/30 via-[#3CBA99]/10 to-transparent blur-[1px]" />
      <div className="absolute right-1/4 top-12 h-full w-20 -skew-x-12 bg-linear-to-b from-[#113B5C]/25 to-transparent opacity-80" />
      <div className="absolute -right-8 bottom-0 h-48 w-40 skew-x-6 rounded-full bg-[#3CBA99]/15 blur-3xl" />
    </div>
  );
}

function CRMVisual() {
  return (
    <svg
      viewBox="0 0 440 320"
      className="relative z-1 w-full max-w-lg mx-auto drop-shadow-lg"
      aria-hidden
    >
      <defs>
        <linearGradient id="crmCard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3CBA99" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#113B5C" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {/* Background card */}
      <rect x="20" y="30" width="400" height="260" rx="20" fill="url(#crmCard)" />
      {/* Inner panel */}
      <rect x="44" y="58" width="352" height="200" rx="14" fill="white" className="dark:fill-[#161B22]" stroke="#3CBA99" strokeOpacity="0.25" strokeWidth="1.5" />
      {/* Header bar */}
      <rect x="44" y="58" width="352" height="36" rx="14" fill="#3CBA99" fillOpacity="0.15" />
      <circle cx="68" cy="76" r="6" fill="#3CBA99" opacity="0.8" />
      <circle cx="88" cy="76" r="6" fill="#113B5C" opacity="0.5" />
      <circle cx="108" cy="76" r="6" fill="#3CBA99" opacity="0.3" />
      {/* Pipeline rows */}
      <rect x="60" y="112" width="180" height="10" rx="5" fill="#3CBA99" opacity="0.25" />
      <rect x="60" y="130" width="220" height="10" rx="5" fill="#113B5C" opacity="0.15" />
      <rect x="60" y="148" width="160" height="10" rx="5" fill="#3CBA99" opacity="0.18" />
      <rect x="60" y="166" width="200" height="10" rx="5" fill="#113B5C" opacity="0.12" />
      {/* Status badges */}
      <rect x="260" y="110" width="60" height="14" rx="7" fill="#3CBA99" opacity="0.6" />
      <rect x="260" y="128" width="60" height="14" rx="7" fill="#113B5C" opacity="0.4" />
      <rect x="260" y="146" width="60" height="14" rx="7" fill="#3CBA99" opacity="0.4" />
      {/* Chart bars */}
      <rect x="60" y="195" width="20" height="40" rx="4" fill="#3CBA99" opacity="0.5" />
      <rect x="88" y="210" width="20" height="25" rx="4" fill="#113B5C" opacity="0.4" />
      <rect x="116" y="200" width="20" height="35" rx="4" fill="#3CBA99" opacity="0.6" />
      <rect x="144" y="205" width="20" height="30" rx="4" fill="#113B5C" opacity="0.3" />
      <rect x="172" y="195" width="20" height="40" rx="4" fill="#3CBA99" opacity="0.7" />
    </svg>
  );
}

function FloatingCards() {
  return (
    <>
      <div className="absolute top-4 right-0 md:right-4 z-2 max-w-[200px] rounded-2xl border border-white/80 bg-white/95 dark:bg-[#161B22]/95 dark:border-gray-600/80 px-4 py-3 shadow-lg transition-transform duration-300 motion-safe:hover:-translate-y-1">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#3CBA99] dark:text-teal-300">
          Rankraze CRM
        </p>
        <p className="text-xs font-semibold text-gray-800 dark:text-gray-100 leading-snug">
          AI-Powered Platform
        </p>
        <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Sales & Service CRM</p>
      </div>
      <div className="absolute bottom-8 left-0 md:left-2 z-2 max-w-[220px] rounded-2xl border border-gray-100 bg-white/95 dark:bg-[#161B22]/95 dark:border-gray-600/80 px-4 py-3 shadow-lg transition-transform duration-300 motion-safe:hover:-translate-y-1">
        <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          Free Trial
        </p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-50">1 Month</span>
        </div>
        <p className="text-[10px] text-[#3CBA99] font-medium mt-1">+ Mobile App Access</p>
      </div>
    </>
  );
}

export function CRMHero({ leadFormUrl, trustedLogos }: CRMHeroProps) {
  return (
    <div className="w-full text-(--text-black) mt-20 md:mt-24">
      <section className="relative overflow-hidden bg-linear-to-b from-[#f0fdf9] via-white to-white dark:from-[#0d1a16] dark:via-[#0B0E11] dark:to-[#0B0E11]">
        <div className="absolute inset-0 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-bottom bg-cover opacity-[0.12] dark:opacity-[0.08] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-28 md:pb-32 lg:pt-14 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[#3CBA99] dark:text-teal-300 mb-3">
                CRM Software in Chennai
              </p>
              <h1 className="text-3xl sm:text-4xl xl:text-[44px] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-gray-50 max-w-xl">
                <span className="bg-linear-to-r from-[#3CBA99] to-[#0d9488] dark:from-teal-300 dark:to-teal-400 bg-clip-text text-transparent">
                  CRM Software
                </span>{" "}
                <span className="text-gray-900 dark:text-gray-100">
                  for Sales, Service &amp; Business Growth
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-lg">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Lead Management · Sales Automation · Mobile CRM
                </span>
                <span className="block mt-2 font-normal">
                  Manage leads, automate follow-ups, improve customer relationships, and grow your business with Rankraze CRM Software — designed for modern businesses in Chennai.
                </span>
              </p>
              <ul className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {["1-Month Free Trial", "Mobile App Access", "AI-Powered Automation"].map((t) => (
                  <li
                    key={t}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-800/90 border border-gray-200/90 dark:border-gray-600 shadow-sm"
                  >
                    <Check className="w-3.5 h-3.5 text-[#3CBA99] shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  href={leadFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-linear-to-br from-[#3CBA99] to-[#113B5C] px-7 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95 transition-opacity"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#book-demo"
                  className="text-sm font-semibold text-[#0f766e] dark:text-teal-300 hover:underline px-2 py-3"
                >
                  Request Free Demo
                </Link>
              </div>
            </div>

            <div className="relative min-h-[300px] sm:min-h-[380px] flex items-center justify-center">
              <div className="relative w-full max-w-xl mx-auto aspect-4/3 lg:aspect-auto lg:h-[420px]">
                <HeroBeams />
                <div className="relative flex items-center justify-center h-full pt-6 pb-16 px-4">
                  <CRMVisual />
                  <FloatingCards />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 -mt-16 md:-mt-20 mb-6">
          <nav
            aria-label="CRM page sections"
            className="rounded-2xl border border-gray-200/90 bg-white/95 dark:bg-[#161B22]/95 dark:border-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm px-2 py-2 md:px-4 md:py-3"
          >
            <ul className="flex gap-1 md:gap-2 overflow-x-auto snap-x snap-mandatory pb-1 md:pb-0 justify-start md:justify-center">
              {PILL_LINKS.map(({ href, label, Icon }) => (
                <li key={href} className="snap-start shrink-0">
                  <Link
                    href={href}
                    className="flex items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-gray-600 hover:bg-[#ecfdf5] hover:text-[#0f766e] dark:text-gray-300 dark:hover:bg-teal-950/40 dark:hover:text-teal-200 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[#3CBA99] shrink-0" strokeWidth={1.75} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="relative z-5 border-t border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-[#0B0E11]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-6">
              Trusted by businesses across Chennai &amp; India
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
              {trustedLogos.map((logo) => (
                <div
                  key={logo.src}
                  className="h-10 md:h-12 w-[100px] md:w-[120px] flex items-center justify-center grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={48}
                    className={`object-contain max-h-10 md:max-h-12 w-auto dark:grayscale-100 dark:invert dark:brightness-100 ${logo.className ?? ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
