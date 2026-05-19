"use client";
import { Atom, Triangle, Server, Palette } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
import ContentPlanButton from "./Contentplanbutton";
import BrandingButton from "./BrandingButton"
import WebsiteButton from "./WebsiteButton"
import PPCButton from "./PPCButton"
import SMMButton from "./SMMButton"
import SEOBUtton from "./SEOButton"
const techStack = [
  { name: "React", icon: Atom },
  { name: "Wordpress", icon: Triangle },
  { name: "Django", icon: Server },
  { name: "Node.js", icon: Server },
  { name: "Tailwind", icon: Palette },
];

function useScrollReveal(sectionId: string, onVisible: () => void) {
  useEffect(() => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    let fired = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          fired = true;
          onVisible();
          setTimeout(() => io.disconnect(), 100);
        }
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [sectionId, onVisible]);
}

function Label({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white dark:bg-[rgba(60,186,153,0.08)] border-[1.5px] border-[#3cba99] text-[#0f6e56] dark:text-[#3CBA99] font-bold text-[11px] tracking-[0.08em] uppercase px-4 py-1.5 rounded-full mb-5 shadow-[0_0_0_4px_rgba(60,186,153,0.06)]">
      <span className="w-[7px] h-[7px] rounded-full bg-[#3cba99] animate-pulse flex-shrink-0" />
      {text}
    </div>
  );
}

function Chk() {
  return (
    <span className="w-5 h-5 min-w-[20px] rounded-full bg-[#3cba99] inline-flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <polyline points="1,4 3.5,6.5 9,1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function CTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2.5 bg-[#3cba99] text-white font-bold text-sm px-6 py-3.5 rounded-[9px] transition-all duration-200 hover:bg-[#2ea882] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(60,186,153,0.3)] group w-full sm:w-auto justify-center sm:justify-start">
      {children}
      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
    </Link>
  );
}

function Section({ id, glowLeft, children }: { id: string; glowLeft?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className="bg-white dark:bg-[var(--prim-dark-bg)] px-4 sm:px-6 md:px-12 py-12 md:py-15 relative overflow-hidden border-t border-[#f0f9f6] dark:border-white/5 transition-colors duration-300">
      <div className={`pointer-events-none absolute ${glowLeft ? "-top-36 -left-36" : "-top-36 -right-36"} w-[260px] md:w-[500px] h-[260px] md:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.08)_0%,transparent_60%)]`} />
      <div className={`pointer-events-none absolute ${glowLeft ? "-bottom-24 -right-24" : "-bottom-24 -left-24"} w-[200px] md:w-[380px] h-[200px] md:h-[380px] rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.05)_0%,transparent_60%)]`} />
      <div className="max-w-[1180px] mx-auto relative z-10">{children}</div>
    </section>
  );
}

function Pills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {items.map((p) => (
        <span key={p} className="group inline-flex items-center gap-1.5 bg-white dark:bg-[#0B0E11] border border-[rgba(60,186,153,0.3)] dark:border-[#5EEAD4]/20 rounded-full px-3.5 py-1.5 text-[12.5px] font-medium text-[#0f6e56] dark:text-[#5EEAD4] cursor-default select-none transition-all duration-200 hover:bg-[#3cba99] hover:text-white hover:border-[#3cba99] hover:-translate-y-0.5 shadow-[0_1px_4px_rgba(60,186,153,0.07)]">{p}</span>
      ))}
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-[#1c3d34] dark:text-gray-200 font-medium leading-[1.5]">
          <Chk />{item}
        </li>
      ))}
    </ul>
  );
}

// ══════════════════════════════════════════════════════════════
// SECTION 1 — SEO
// Vis: fade from LEFT  |  Con: fade UP
// ══════════════════════════════════════════════════════════════
function SEOSection() {
  useScrollReveal("s-seo", () => {
    ["rr-bg","rr-tl","rr-td","rr-stat","rr-ring"].forEach(c =>
      document.querySelectorAll(`.${c}`).forEach(e => e.classList.add("go"))
    );
    document.getElementById("v-seo")?.classList.add("rr-in");
    document.getElementById("c-seo")?.classList.add("rr-in");
    document.getElementById("h-seo")?.classList.add("rr-in");
  });
  return (
    <Section id="s-seo">
      <div id="h-seo" className="block lg:hidden mb-6 rr-fade-up [&.rr-in]:rr-in-active">
        <Label text="SEO Services"/>
        <h2 className="font-['Sora'] text-2xl sm:text-[28px] font-bold text-[#0a2218] dark:text-[#F9FAFB] leading-[1.25] tracking-[-0.028em] mb-0">SEO Services That Help Chennai Businesses <em className="not-italic text-[#3cba99]">Rank on Google</em></h2>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-16 items-center">
        {/* Vis: slides in from LEFT */}
        <div id="v-seo" className="w-full drop-shadow-[0_6px_24px_rgba(60,186,153,0.10)] dark:drop-shadow-[0_6px_24px_rgba(0,0,0,0.30)] order-1 lg:order-1 rr-fade-left [&.rr-in]:rr-in-active">
          <svg viewBox="0 0 560 410" xmlns="http://www.w3.org/2000/svg" fill="none" shapeRendering="geometricPrecision" textRendering="geometricPrecision" className="w-full h-auto block">
            <rect x="0" y="0" width="560" height="410" rx="20" className="fill-white dark:fill-[#0B0E11] transition-colors"/><rect x="0" y="0" width="560" height="410" rx="20" className="stroke-[#c8ede4] dark:stroke-white/10" strokeWidth="1.5"/>
            <rect x="0" y="0" width="560" height="48" rx="20" className="fill-[#f4fcf9] dark:fill-[#161B22] transition-colors"/><rect x="0" y="30" width="560" height="18" className="fill-[#f4fcf9] dark:fill-[#161B22] transition-colors"/>
            <circle cx="28" cy="24" r="5" fill="#f5c2b4"/><circle cx="44" cy="24" r="5" fill="#f5e0a0"/><circle cx="60" cy="24" r="5" fill="#a8e8d4"/>
            <rect x="82" y="15" width="316" height="18" rx="9" fill="#e4f5ef"/>
            <text x="240" y="28" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fill="#3cba99" fontWeight="500">google.com/search?q=seo+services+chennai</text>
            <g className="rr-fc">
              <rect x="16" y="58" width="200" height="150" rx="12" fill="#ffffff" stroke="#c8ede4" strokeWidth="1.5"/>
              <text x="28" y="79" fontFamily="Sora,sans-serif" fontSize="10" fontWeight="700" fill="#0a2218">Organic Traffic</text>
              <rect x="136" y="66" width="66" height="20" rx="10" fill="#edf9f6"/>
              <text x="169" y="80" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="9.5" fontWeight="700" fill="#3cba99">↑ 214%</text>
              <line x1="20" y1="178" x2="212" y2="178" stroke="#e0f0ea" strokeWidth="1"/>
              <g id="rr-bars">
                <g className="rr-bg" transform="translate(40,178)"><rect x="0" y="-32" width="22" height="32" rx="3" fill="#c5f0e4"/></g>
                <g className="rr-bg" transform="translate(70,178)"><rect x="0" y="-48" width="22" height="48" rx="3" fill="#9ae3cc"/></g>
                <g className="rr-bg" transform="translate(100,178)"><rect x="0" y="-40" width="22" height="40" rx="3" fill="#6dd4b5"/></g>
                <g className="rr-bg" transform="translate(130,178)"><rect x="0" y="-62" width="22" height="62" rx="3" fill="#3cba99"/></g>
                <g className="rr-bg" transform="translate(160,178)"><rect x="0" y="-76" width="22" height="76" rx="3" fill="#2ea882"/></g>
              </g>
              <polyline className="rr-tl" points="51,146 81,130 111,138 141,116 171,102" stroke="#0f6e56" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <circle className="rr-td" cx="171" cy="102" r="4.5" fill="#0f6e56"/>
              {["Jan","Feb","Mar","Apr","May"].map((m,i)=>(<text key={m} x={51+30*i} y="193" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill={i===4?"#3cba99":"#a0c8c0"} fontWeight={i===4?"700":"400"}>{m}</text>))}
            </g>
            <g transform="translate(232,58)">
              <rect x="0" y="0" width="312" height="68" rx="10" fill="#edf9f6" stroke="#3cba99" strokeWidth="1.5"/>
              <g className="rr-badge" style={{transformOrigin:"24px 21px"}}><rect x="8" y="12" width="32" height="22" rx="11" fill="#3cba99"/><text x="24" y="27" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="10" fontWeight="700" fill="#ffffff">#1</text></g>
              <text x="50" y="27" fontFamily="Sora,sans-serif" fontSize="10.5" fontWeight="700" fill="#0a2218">rankraze.com › seo-company-chennai</text>
              <text x="304" y="27" textAnchor="end" fontFamily="DM Sans,sans-serif" fontSize="10" fill="#f59a23">★★★★★</text>
              <text x="50" y="43" fontFamily="DM Sans,sans-serif" fontSize="9.5" fill="#1c3d34">SEO Services Chennai – Data-Driven Ranking Strategies</text>
              <text x="50" y="58" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#5fa898">Improve visibility · Attract traffic · Generate leads</text>
              <rect x="0" y="76" width="312" height="36" rx="8" fill="#fafafa" stroke="#eaeaea" strokeWidth="1"/>
              <rect x="8" y="84" width="26" height="16" rx="8" fill="#edf0fc"/><text x="21" y="96" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="9" fontWeight="600" fill="#534ab7">#2</text>
              <text x="42" y="95" fontFamily="DM Sans,sans-serif" fontSize="9.5" fill="#6e8a85">competitor1.com › digital-marketing</text>
              <text x="42" y="108" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#b8ccc8">SEO Agency in Chennai | Organic Growth</text>
              <rect x="0" y="120" width="312" height="36" rx="8" fill="#fafafa" stroke="#eaeaea" strokeWidth="1"/>
              <rect x="8" y="128" width="26" height="16" rx="8" fill="#f1f4f0"/><text x="21" y="140" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="9" fontWeight="600" fill="#3b6d11">#3</text>
              <text x="42" y="139" fontFamily="DM Sans,sans-serif" fontSize="9.5" fill="#6e8a85">agency2.in › seo-services</text>
              <text x="42" y="152" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#b8ccc8">Top SEO Company Chennai – Affordable Plans</text>
            </g>
            <g transform="translate(16,224)">
              <rect x="0" y="0" width="528" height="54" rx="12" fill="#ffffff" stroke="#ddf0ea" strokeWidth="1"/>
              <line x1="176" y1="12" x2="176" y2="42" stroke="#e8f5f0" strokeWidth="1"/><line x1="352" y1="12" x2="352" y2="42" stroke="#e8f5f0" strokeWidth="1"/>
              <g className="rr-stat"><text x="88" y="28" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="16" fontWeight="700" fill="#3cba99">350k+</text><text x="88" y="43" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fill="#7ab8ac">Clicks</text></g>
              <g className="rr-stat"><text x="264" y="28" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="16" fontWeight="700" fill="#3cba99">1.5M+ </text><text x="264" y="43" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fill="#7ab8ac">Impression</text></g>
              <g className="rr-stat"><text x="440" y="28" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="16" fontWeight="700" fill="#3cba99">23%</text><text x="440" y="43" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fill="#7ab8ac">CTR</text></g>
            </g>
            <g transform="translate(16,294)">
              <rect x="0" y="0" width="256" height="100" rx="12" fill="#ffffff" stroke="#c8ede4" strokeWidth="1.5"/>
              <text x="16" y="22" fontFamily="Sora,sans-serif" fontSize="10" fontWeight="700" fill="#0a2218">Keyword Rankings</text>
              <rect x="16" y="30" width="74" height="17" rx="8.5" fill="#edf9f6"/>
              <text x="53" y="42.5" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#0f6e56" fontWeight="500">seo chennai</text>
              <text x="100" y="42.5" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#9ab8b4">position</text>
              <text x="208" y="43" fontFamily="Sora,sans-serif" fontSize="15" fontWeight="700" fill="#3cba99">#1</text>
              <line x1="16" y1="55" x2="240" y2="55" stroke="#edf9f6" strokeWidth="1"/>
              <rect x="16" y="62" width="100" height="17" rx="8.5" fill="#f0f4f1"/>
              <text x="66" y="74.5" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#3b6d11" fontWeight="500">digital mktg agency</text>
              <text x="126" y="74.5" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#9ab8b4">position</text>
              <text x="208" y="75" fontFamily="Sora,sans-serif" fontSize="15" fontWeight="700" fill="#3cba99">#3</text>
            </g>
            <g transform="translate(288,294)">
              <rect x="0" y="0" width="256" height="100" rx="12" fill="#edf9f6" stroke="#c8ede4" strokeWidth="1.5"/>
              <text x="16" y="22" fontFamily="Sora,sans-serif" fontSize="10" fontWeight="700" fill="#0a2218">SEO Health Score</text>
              <circle cx="50" cy="66" r="26" stroke="#ddf0ea" strokeWidth="5.5" fill="none"/>
              <circle className="rr-ring" cx="50" cy="66" r="26" stroke="#3cba99" strokeWidth="5.5" fill="none" strokeLinecap="round" transform="rotate(-90 50 66)"/>
              <text x="50" y="63" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="13" fontWeight="700" fill="#0a2218">92</text>
              <text x="50" y="75" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#7ab8ac">/ 100</text>
              {[{x:90,y:28,w:72,val:"97%",lbl:"On-Page"},{x:174,y:28,w:68,val:"88%",lbl:"Technical"},{x:90,y:64,w:72,val:"94%",lbl:"Backlinks"},{x:174,y:64,w:68,val:"91%",lbl:"Content"}].map((m)=>(<g key={m.lbl}><rect x={m.x} y={m.y} width={m.w} height="28" rx="7" fill="#ffffff"/><text x={m.x+m.w/2} y={m.y+13} textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="10" fontWeight="700" fill="#3cba99">{m.val}</text><text x={m.x+m.w/2} y={m.y+24} textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#7ab8ac">{m.lbl}</text></g>))}
            </g>
          </svg>
        </div>
        {/* Con: fades UP */}
        <div id="c-seo" className="order-2 lg:order-2 rr-fade-up [&.rr-in]:rr-in-active" style={{transitionDelay:"150ms"}}>
          <div className="hidden lg:block"><Label text="SEO Services"/><h2 className="font-['Sora'] text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#0a2218] dark:text-[#F9FAFB] leading-[1.25] tracking-[-0.028em] mb-4">SEO Services That Help Chennai Businesses <em className="not-italic text-[#3cba99]">Rank on Google</em></h2></div>
          <p className="text-[15px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.82] mb-6">If your customers are searching online and your business isn't appearing on the first page, you're losing valuable opportunities. At Rankraze, we provide data-driven SEO services in Chennai designed to improve your website's visibility, attract qualified traffic, and generate consistent leads.</p>
          <Checklist items={["Strategic keyword research and competitor analysis","On-page and technical SEO optimization","High-quality content and authority building","Sustainable organic traffic growth"]}/>
          <Pills items={["Keyword Research","Technical SEO","Ranking Growth","Authority Building"]}/>
         <div className="flex flex-row flex-wrap gap-2">

  {/* Primary — solid teal pill */}
  <Link
    href="/seo-company-chennai"
    className="group inline-flex items-center gap-2 rounded-full bg-[#3cba99] px-3 md:px-6 py-4 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(60,186,153,0.28)] transition-all duration-200 hover:bg-[#2fa888] hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(60,186,153,0.38)] active:scale-[0.97] sm:px-5 sm:py-3 sm:text-md"
  >
    Explore SEO
    <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  </Link>

  {/* Outline — ghost teal pill */}
 <SEOBUtton/>

</div>
        </div>
      </div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// SECTION 2 — SMM
// Vis: fade from RIGHT  |  Con: fade DOWN
// ══════════════════════════════════════════════════════════════
function SMMSection() {
  useScrollReveal("s-smm", () => {
    ["smm-bg","smm-tl","smm-dot-end","smm-pb","smm-stat"].forEach(c =>
      document.querySelectorAll(`.${c}`).forEach(e => e.classList.add("go"))
    );
    document.getElementById("v-smm")?.classList.add("rr-in");
    document.getElementById("c-smm")?.classList.add("rr-in");
    document.getElementById("h-smm")?.classList.add("rr-in");
  });
  return (
    <Section id="s-smm" glowLeft>
      <div id="h-smm" className="block lg:hidden mb-6 rr-fade-up [&.rr-in]:rr-in-active">
        <Label text="Social Media Marketing"/>
        <h2 className="font-['Sora'] text-2xl sm:text-[28px] font-bold text-[#0a2218] dark:text-[#F9FAFB] leading-[1.25] tracking-[-0.028em] mb-0">Social Media Marketing Services That <em className="not-italic text-[#3cba99]">Build Brand Visibility</em> and Generate Leads</h2>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-16 items-center">
        {/* Vis: slides from RIGHT */}
        <div id="v-smm" className="w-full drop-shadow-[0_6px_24px_rgba(60,186,153,0.10)] dark:drop-shadow-[0_6px_24px_rgba(0,0,0,0.30)] order-1 lg:order-2 rr-fade-right [&.rr-in]:rr-in-active">
          <svg viewBox="0 0 560 448" xmlns="http://www.w3.org/2000/svg" fill="none" shapeRendering="geometricPrecision" textRendering="geometricPrecision" className="w-full h-auto block">
            <defs><linearGradient id="igG" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#F77737"/><stop offset="50%" stopColor="#E1306C"/><stop offset="100%" stopColor="#833AB4"/></linearGradient></defs>
            <rect x="0" y="0" width="560" height="448" rx="20" className="fill-white dark:fill-[#0B0E11] transition-colors"/><rect x="0" y="0" width="560" height="448" rx="20" className="stroke-[#c8ede4] dark:stroke-white/10" strokeWidth="1.5"/>
            <rect x="0" y="0" width="560" height="46" rx="20" className="fill-[#f4fcf9] dark:fill-[#161B22] transition-colors"/><rect x="0" y="28" width="560" height="18" className="fill-[#f4fcf9] dark:fill-[#161B22] transition-colors"/>
            <circle cx="26" cy="23" r="5" fill="#f5c2b4"/><circle cx="42" cy="23" r="5" fill="#f5e0a0"/><circle cx="58" cy="23" r="5" fill="#a8e8d4"/>
            <rect x="76" y="13" width="304" height="20" rx="10" fill="#e4f5ef"/>
            <text x="228" y="27" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#3cba99" fontWeight="500">rankraze.com › social-media-marketing-dashboard</text>
            <g className="smm-f1"><rect x="14" y="56" width="124" height="54" rx="10" fill="#fff" stroke="#e0f0ea" strokeWidth="1.2"/><rect x="24" y="67" width="30" height="30" rx="8" fill="#1877F2"/><text x="39" y="87" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="14" fontWeight="700" fill="#fff">f</text><text x="62" y="79" fontFamily="Sora,sans-serif" fontSize="9" fontWeight="700" fill="#0a2218">Facebook</text><text x="62" y="93" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#3cba99" fontWeight="600">↑ 2.4K reach</text></g>
            <g className="smm-f2"><rect x="150" y="56" width="124" height="54" rx="10" fill="#fff" stroke="#e0f0ea" strokeWidth="1.2"/><g transform="translate(160,67)"><rect width="30" height="30" rx="8" fill="url(#igG)"/></g><rect x="163" y="70" width="24" height="24" rx="6" stroke="#fff" strokeWidth="1.4"/><circle cx="175" cy="82" r="6" stroke="#fff" strokeWidth="1.4"/><circle cx="184" cy="73" r="2" fill="#fff"/><text x="198" y="79" fontFamily="Sora,sans-serif" fontSize="9" fontWeight="700" fill="#0a2218">Instagram</text><text x="198" y="93" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#3cba99" fontWeight="600">↑ 5.8K reach</text></g>
            <g className="smm-f3"><rect x="286" y="56" width="124" height="54" rx="10" fill="#fff" stroke="#e0f0ea" strokeWidth="1.2"/><rect x="296" y="67" width="30" height="30" rx="8" fill="#0A66C2"/><text x="311" y="87" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="12" fontWeight="700" fill="#fff">in</text><text x="334" y="79" fontFamily="Sora,sans-serif" fontSize="9" fontWeight="700" fill="#0a2218">LinkedIn</text><text x="334" y="93" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#3cba99" fontWeight="600">↑ 1.2K reach</text></g>
            <g className="smm-f4"><rect x="422" y="56" width="124" height="54" rx="10" fill="#fff" stroke="#e0f0ea" strokeWidth="1.2"/><rect x="432" y="67" width="30" height="30" rx="8" fill="#FF0000"/><polygon points="440,72 440,92 456,82" fill="#fff"/><text x="470" y="79" fontFamily="Sora,sans-serif" fontSize="9" fontWeight="700" fill="#0a2218">YouTube</text><text x="470" y="93" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#3cba99" fontWeight="600">↑ 980 views</text></g>
            <rect x="14" y="122" width="248" height="126" rx="12" fill="#fff" stroke="#c8ede4" strokeWidth="1.5"/>
            <text x="28" y="142" fontFamily="Sora,sans-serif" fontSize="10" fontWeight="700" fill="#0a2218">Audience Reach</text>
            <text x="254" y="142" textAnchor="end" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#3cba99" fontWeight="600">This month</text>
            <line x1="18" y1="232" x2="258" y2="232" stroke="#e8f5f0" strokeWidth="1"/>
            <g id="smm-bars">
              <g className="smm-bg" transform="translate(48,232)"><rect x="0" y="-62" width="38" height="62" rx="4" fill="#c5f0e4"/></g>
              <g className="smm-bg" transform="translate(96,232)"><rect x="0" y="-48" width="38" height="48" rx="4" fill="#9ae3cc"/></g>
              <g className="smm-bg" transform="translate(144,232)"><rect x="0" y="-54" width="38" height="54" rx="4" fill="#6dd4b5"/></g>
              <g className="smm-bg" transform="translate(192,232)"><rect x="0" y="-76" width="38" height="76" rx="4" fill="#3cba99"/></g>
            </g>
            <polyline className="smm-tl" points="67,170 115,184 163,178 211,156" stroke="#0f6e56" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle className="smm-dot-end" cx="211" cy="156" r="5" fill="#0f6e56" style={{transformOrigin:"211px 156px"}}/>
            {["IG","FB","LI","YT"].map((l,i)=>(<text key={l} x={67+48*i} y="244" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill={i===3?"#3cba99":"#a0c8c0"} fontWeight={i===3?"700":"400"}>{l}</text>))}
            <rect x="274" y="122" width="272" height="126" rx="12" fill="#edf9f6" stroke="#c8ede4" strokeWidth="1.5"/>
            <text x="290" y="142" fontFamily="Sora,sans-serif" fontSize="10" fontWeight="700" fill="#0a2218">Campaign Performance</text>
            {[{label:"Total Reach",pct:"82%",y1:162,y2:168,w:195,fill:"#3cba99"},{label:"Engagement Rate",pct:"67%",y1:193,y2:199,w:159,fill:"#6dd4b5"},{label:"Conversions",pct:"54%",y1:224,y2:230,w:129,fill:"#9ae3cc"}].map((row)=>(<g key={row.label}><text x="290" y={row.y1} fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#3a5550">{row.label}</text><text x="542" y={row.y1} textAnchor="end" fontFamily="Sora,sans-serif" fontSize="8.5" fontWeight="700" fill="#3cba99">{row.pct}</text><rect x="290" y={row.y2} width="238" height="9" rx="4.5" fill="#ddf0ea"/><rect className="smm-pb" x="290" y={row.y2} width={row.w} height="9" rx="4.5" fill={row.fill}/></g>))}
            <rect x="14" y="260" width="162" height="102" rx="12" fill="#fff" stroke="#c8ede4" strokeWidth="1.5"/>
            <text x="28" y="280" fontFamily="Sora,sans-serif" fontSize="9.5" fontWeight="700" fill="#0a2218">Live Posts</text>
            <rect x="28" y="288" width="28" height="18" rx="5" fill="#fef0f5"/><text x="42" y="301" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#E1306C" fontWeight="700">IG</text>
            <rect x="62" y="290" width="98" height="8" rx="4" fill="#e8f5f0"/><rect x="62" y="302" width="68" height="6" rx="3" fill="#f0faf7"/>
            <rect x="28" y="312" width="28" height="18" rx="5" fill="#edf0fc"/><text x="42" y="325" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#1877F2" fontWeight="700">FB</text>
            <rect x="62" y="314" width="86" height="8" rx="4" fill="#e8f5f0"/><rect x="62" y="326" width="54" height="6" rx="3" fill="#f0faf7"/>
            <rect x="28" y="336" width="28" height="18" rx="5" fill="#e8f0f8"/><text x="42" y="349" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#0A66C2" fontWeight="700">in</text>
            <rect x="62" y="338" width="76" height="8" rx="4" fill="#e8f5f0"/><rect x="62" y="350" width="44" height="6" rx="3" fill="#f0faf7"/>
            <rect x="188" y="260" width="162" height="102" rx="12" fill="#fff" stroke="#c8ede4" strokeWidth="1.5"/>
            <text x="202" y="280" fontFamily="Sora,sans-serif" fontSize="9.5" fontWeight="700" fill="#0a2218">Ad Performance</text>
            <text x="202" y="298" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#7ab8ac">ROAS</text>
            <text x="202" y="322" fontFamily="Sora,sans-serif" fontSize="24" fontWeight="700" fill="#3cba99">4.8×</text>
            <text x="202" y="338" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#7ab8ac">Budget used · 76%</text>
            <rect x="202" y="342" width="134" height="8" rx="4" fill="#ddf0ea"/><rect x="202" y="342" width="102" height="8" rx="4" fill="#3cba99"/>
            <rect x="362" y="260" width="184" height="102" rx="12" fill="#edf9f6" stroke="#c8ede4" strokeWidth="1.5"/>
            <text x="376" y="280" fontFamily="Sora,sans-serif" fontSize="9.5" fontWeight="700" fill="#0a2218">New Followers</text>
            <circle cx="534" cy="271" r="8" fill="#3cba99"/>
            <circle className="smm-ping" cx="534" cy="271" r="8" stroke="#3cba99" strokeWidth="1.8" fill="none" style={{transformOrigin:"534px 271px"}}/>
            <text x="534" y="275" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#fff" fontWeight="700">!</text>
            <text x="376" y="308" fontFamily="Sora,sans-serif" fontSize="24" fontWeight="700" fill="#3cba99">+1,284</text>
            <text x="376" y="322" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#5fa898">This week · all platforms</text>
            {[380,393,406,419,432].map((cx,i)=><circle key={i} cx={cx} cy="340" r="8" fill={["#c5f0e4","#9ae3cc","#6dd4b5","#3cba99","#2ea882"][i]}/>)}
            <text x="444" y="344" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#7ab8ac">+1,279 more</text>
            <g transform="translate(14,374)">
              <rect x="0" y="0" width="532" height="54" rx="12" fill="#fff" stroke="#ddf0ea" strokeWidth="1"/>
              <line x1="177" y1="10" x2="177" y2="44" stroke="#e8f5f0" strokeWidth="1"/><line x1="355" y1="10" x2="355" y2="44" stroke="#e8f5f0" strokeWidth="1"/>
              <g className="smm-stat"><text x="88" y="27" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="15" fontWeight="700" fill="#3cba99">10.4K+</text><text x="88" y="43" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#7ab8ac">Monthly Reach</text></g>
              <g className="smm-stat"><text x="266" y="27" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="15" fontWeight="700" fill="#3cba99">4 Platforms</text><text x="266" y="43" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#7ab8ac">Managed Actively</text></g>
              <g className="smm-stat"><text x="443" y="27" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="15" fontWeight="700" fill="#3cba99">4.8× ROAS</text><text x="443" y="43" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#7ab8ac">Avg Return on Ad Spend</text></g>
            </g>
          </svg>
        </div>
        {/* Con: fades DOWN */}
        <div id="c-smm" className="order-2 lg:order-1 rr-fade-down [&.rr-in]:rr-in-active" style={{transitionDelay:"150ms"}}>
          <div className="hidden lg:block"><Label text="Social Media Marketing"/><h2 className="font-['Sora'] text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#0a2218] dark:text-[#F9FAFB] leading-[1.25] tracking-[-0.028em] mb-4">Social Media Marketing Services That <em className="not-italic text-[#3cba99]">Build Brand Visibility</em> and Generate Leads</h2></div>
          <p className="text-[15px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.82] mb-6">Social media platforms are powerful channels for connecting with your audience. At Rankraze, we provide strategic social media marketing services in Chennai that combine organic content strategies with high-performing paid advertising campaigns.</p>
          <Checklist items={["Paid and organic social media growth strategies","Targeted ad campaigns for lead generation","Engaging content and brand storytelling","Performance tracking and campaign optimization"]}/>

  
          <Pills items={["Ads Performance","Audience Engagement","Targeted Campaigns","Growth Tracking"]}/>


<div className="flex flex-row flex-wrap gap-2">

  {/* Primary — solid teal pill */}
  <Link
    href="/social-media-marketing-company-chennai"
    className="group inline-flex items-center gap-2 rounded-full bg-[#3cba99] px-3 md:px-6 py-4 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(60,186,153,0.28)] transition-all duration-200 hover:bg-[#2fa888] hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(60,186,153,0.38)] active:scale-[0.97] sm:px-5 sm:py-3 sm:text-md"
  >
    Explore SMM
    <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  </Link>

  {/* Outline — ghost teal pill */}
 <SMMButton/>
</div>
        </div>
      </div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// SECTION 3 — PPC
// Vis: fade LEFT + scale  |  Con: fade RIGHT
// ══════════════════════════════════════════════════════════════
function PPCSection() {
  useScrollReveal("s-ppc", () => {
    document.querySelectorAll(".ppc-stat").forEach(e => e.classList.add("go"));
    document.getElementById("v-ppc")?.classList.add("rr-in");
    document.getElementById("c-ppc")?.classList.add("rr-in");
    document.getElementById("h-ppc")?.classList.add("rr-in");
  });
  return (
    <Section id="s-ppc">
      <div id="h-ppc" className="block lg:hidden mb-6 rr-fade-up [&.rr-in]:rr-in-active">
        <Label text="PPC & Google Ads"/>
        <h2 className="font-['Sora'] text-2xl sm:text-[28px] font-bold text-[#0a2218] dark:text-[#F9FAFB] leading-[1.25] tracking-[-0.028em] mb-0">PPC & Google Ads Services That Drive <em className="not-italic text-[#3cba99]">Targeted Traffic</em> and Instant Leads</h2>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-16 items-center">
        {/* Vis: fade LEFT + scale */}
        <div id="v-ppc" className="w-full drop-shadow-[0_6px_24px_rgba(60,186,153,0.10)] dark:drop-shadow-[0_6px_24px_rgba(0,0,0,0.30)] order-1 lg:order-1 rr-fade-left-scale [&.rr-in]:rr-in-active">
          <svg viewBox="0 0 560 430" xmlns="http://www.w3.org/2000/svg" fill="none" shapeRendering="geometricPrecision" textRendering="geometricPrecision" className="w-full h-auto block">
            <rect x="0" y="0" width="560" height="430" rx="20" className="fill-white dark:fill-[#0B0E11] transition-colors"/><rect x="0" y="0" width="560" height="430" rx="20" className="stroke-[#c8ede4] dark:stroke-white/10" strokeWidth="1.5"/>
            <rect x="0" y="0" width="560" height="46" rx="20" className="fill-[#f4fcf9] dark:fill-[#161B22] transition-colors"/><rect x="0" y="28" width="560" height="18" className="fill-[#f4fcf9] dark:fill-[#161B22] transition-colors"/>
            <circle cx="26" cy="23" r="5" fill="#f5c2b4"/><circle cx="42" cy="23" r="5" fill="#f5e0a0"/><circle cx="58" cy="23" r="5" fill="#a8e8d4"/>
            <rect x="76" y="13" width="308" height="20" rx="10" fill="#e4f5ef"/>
            <text x="230" y="27" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#3cba99" fontWeight="500">google.com/search?q=best+ppc+agency+chennai</text>
            <rect x="14" y="56" width="532" height="42" rx="10" fill="#fffdf0" stroke="#f5e0a0" strokeWidth="1.2"/>
            <rect x="24" y="65" width="42" height="16" rx="4" fill="#f5a623"/>
            <text x="45" y="77" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="8" fontWeight="700" fill="#fff">Ad</text>
            <text x="74" y="77" fontFamily="DM Sans,sans-serif" fontSize="9" fill="#5a5a5a">Showing paid results for: <tspan fontWeight="700" fill="#0a2218">PPC Agency Chennai</tspan></text>
            <text x="532" y="77" textAnchor="end" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#3cba99">↑ 3.2K searches/mo</text>
            <rect x="14" y="106" width="532" height="62" rx="10" fill="#edf9f6" stroke="#3cba99" strokeWidth="1.5"/>
            <rect x="24" y="116" width="42" height="16" rx="4" fill="#3cba99"/>
            <text x="45" y="128" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="8" fontWeight="700" fill="#fff">Sponsored</text>
            <text x="76" y="127" fontFamily="Sora,sans-serif" fontSize="10.5" fontWeight="700" fill="#0a2218">rankraze.com › google-ads-services-chennai</text>
            <text x="476" y="123" textAnchor="end" fontFamily="DM Sans,sans-serif" fontSize="10" fill="#f59a23">★★★★★</text>
            <text x="76" y="143" fontFamily="DM Sans,sans-serif" fontSize="9.5" fill="#1c3d34">PPC & Google Ads Agency Chennai – Certified Google Partners</text>
            <text x="76" y="158" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#5fa898">Drive qualified leads · Pay only for results · Free audit available</text>
            <rect x="14" y="176" width="532" height="44" rx="8" fill="#fafafa" stroke="#eaeaea" strokeWidth="1"/>
            <rect x="24" y="185" width="26" height="16" rx="8" fill="#edf0fc"/><text x="37" y="197" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="9" fontWeight="600" fill="#534ab7">#2</text>
            <text x="58" y="196" fontFamily="DM Sans,sans-serif" fontSize="9.5" fill="#6e8a85">competitor1.com › ppc-services-india</text>
            <text x="58" y="210" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#b8ccc8">PPC Management Services | Affordable Google Ads</text>
            <rect x="14" y="228" width="532" height="44" rx="8" fill="#fafafa" stroke="#eaeaea" strokeWidth="1"/>
            <rect x="24" y="237" width="26" height="16" rx="8" fill="#f1f4f0"/><text x="37" y="249" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="9" fontWeight="600" fill="#3b6d11">#3</text>
            <text x="58" y="248" fontFamily="DM Sans,sans-serif" fontSize="9.5" fill="#6e8a85">agency2.in › google-ads</text>
            <text x="58" y="262" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#b8ccc8">Google Ads Experts – Campaign Management Chennai</text>
            {[{x:14,fill:"#fff",label:"Avg. CPC",val:"₹18",sub:"↓ 34% vs industry avg",tw:132,fw:87},{x:188,fill:"#edf9f6",label:"Click-Through Rate",val:"8.4%",sub:"↑ Industry avg 3.2%",tw:132,fw:111},{x:362,fill:"#fff",label:"Conversion Rate",val:"14.2%",sub:"↑ 2.1× industry avg",tw:154,fw:119,w:184}].map((c,i)=>(<g key={i}><rect x={c.x} y="282" width={c.w||162} height="98" rx="12" fill={c.fill} stroke="#c8ede4" strokeWidth="1.5"/><text x={c.x+14} y="302" fontFamily="Sora,sans-serif" fontSize="9.5" fontWeight="700" fill="#0a2218">{c.label}</text><text x={c.x+14} y="336" fontFamily="Sora,sans-serif" fontSize="26" fontWeight="700" fill="#3cba99">{c.val}</text><text x={c.x+14} y="352" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#7ab8ac">{c.sub}</text><rect x={c.x+14} y="358" width={c.tw} height="7" rx="3.5" fill="#ddf0ea"/><rect x={c.x+14} y="358" width={c.fw} height="7" rx="3.5" fill="#3cba99"/></g>))}
            <g transform="translate(14,390)">
              <rect x="0" y="0" width="532" height="30" rx="10" fill="#fff" stroke="#ddf0ea" strokeWidth="1"/>
              <line x1="177" y1="6" x2="177" y2="24" stroke="#e8f5f0" strokeWidth="1"/><line x1="355" y1="6" x2="355" y2="24" stroke="#e8f5f0" strokeWidth="1"/>
              <g className="ppc-stat"><text x="88" y="20" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="11" fontWeight="700" fill="#3cba99">500+ Campaigns</text></g>
              <g className="ppc-stat"><text x="266" y="20" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="11" fontWeight="700" fill="#3cba99">₹2Cr+ Ad Spend Managed</text></g>
              <g className="ppc-stat"><text x="443" y="20" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="11" fontWeight="700" fill="#3cba99">4.8× Avg ROAS</text></g>
            </g>
          </svg>
        </div>
        {/* Con: fades RIGHT */}
        <div id="c-ppc" className="order-2 lg:order-2 rr-fade-right [&.rr-in]:rr-in-active" style={{transitionDelay:"180ms"}}>
          <div className="hidden lg:block"><Label text="PPC & Google Ads"/><h2 className="font-['Sora'] text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#0a2218] dark:text-[#F9FAFB] leading-[1.25] tracking-[-0.028em] mb-4">PPC & Google Ads Services That Drive <em className="not-italic text-[#3cba99]">Targeted Traffic</em> and Instant Leads</h2></div>
          <p className="text-[15px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.82] mb-6">If you want faster results and immediate visibility on Google, PPC advertising is one of the most effective strategies. At Rankraze, we provide performance-focused PPC and Google Ads services in Chennai designed to attract high-intent customers.</p>
          <Checklist items={["High-converting Google Search and Display campaigns","Advanced keyword targeting and competitor analysis","Smart bidding and budget optimization","Conversion tracking and performance reporting"]}/>
          <Pills items={["CPC Optimization","Precision Targeting","Campaign Tracking","Lead Generation"]}/>

          <div className="flex flex-row flex-wrap gap-2">

  {/* Primary — solid teal pill */}
  <Link
    href="/sem-company-chennai"
    className="group inline-flex items-center gap-2 rounded-full bg-[#3cba99] px-3 md:px-6 py-4 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(60,186,153,0.28)] transition-all duration-200 hover:bg-[#2fa888] hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(60,186,153,0.38)] active:scale-[0.97] sm:px-5 sm:py-3 sm:text-md"
  >
    Explore PPC
    <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  </Link>

  {/* Outline — ghost teal pill */}
  <PPCButton/>
</div>
        </div>
      </div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// SECTION 4 — WEB DEV
// Vis: fade RIGHT  |  Con: fade LEFT
// ══════════════════════════════════════════════════════════════
function WebDevSection() {
  useScrollReveal("s-wd", () => {
    ["wd-pb","wd-stat"].forEach(c => document.querySelectorAll(`.${c}`).forEach(e => e.classList.add("go")));
    document.getElementById("v-wd")?.classList.add("rr-in");
    document.getElementById("c-wd")?.classList.add("rr-in");
    document.getElementById("h-wd")?.classList.add("rr-in");
  });
  return (
    <Section id="s-wd" glowLeft>
      <div id="h-wd" className="block lg:hidden mb-6 rr-fade-up [&.rr-in]:rr-in-active">
        <Label text="Website Development"/>
        <h2 className="font-['Sora'] text-2xl sm:text-[28px] font-bold text-[#0a2218] dark:text-[#F9FAFB] leading-[1.25] tracking-[-0.028em] mb-0">Website Development Services That Build <em className="not-italic text-[#3cba99]">Fast, Scalable,</em> and Conversion-Focused Websites</h2>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-16 items-center">
        {/* Vis: fades RIGHT */}
        <div id="v-wd" className="w-full drop-shadow-[0_6px_24px_rgba(60,186,153,0.10)] dark:drop-shadow-[0_6px_24px_rgba(0,0,0,0.30)] order-1 lg:order-2 rr-fade-right [&.rr-in]:rr-in-active">
          <svg viewBox="0 0 560 430" xmlns="http://www.w3.org/2000/svg" fill="none" shapeRendering="geometricPrecision" textRendering="geometricPrecision" className="w-full h-auto block">
            <rect x="0" y="0" width="560" height="430" rx="20" className="fill-white dark:fill-[#0B0E11] transition-colors"/><rect x="0" y="0" width="560" height="430" rx="20" className="stroke-[#c8ede4] dark:stroke-white/10" strokeWidth="1.5"/>
            <g className="wd-float1">
              <rect x="14" y="14" width="532" height="196" rx="12" fill="#f4fcf9" stroke="#c8ede4" strokeWidth="1.5"/>
              <rect x="14" y="14" width="532" height="36" rx="12" fill="#fff" stroke="#c8ede4" strokeWidth="1"/><rect x="14" y="36" width="532" height="14" fill="#fff"/>
              <circle cx="30" cy="32" r="4" fill="#f5c2b4"/><circle cx="44" cy="32" r="4" fill="#f5e0a0"/><circle cx="58" cy="32" r="4" fill="#a8e8d4"/>
              <rect x="72" y="24" width="240" height="16" rx="8" fill="#e4f5ef"/>
              <text x="192" y="36" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#3cba99">rankraze.com</text>
                <text x="452" y="36" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="9.5" fontWeight="700" fill="#0a2218">Desktop View</text>
              <rect x="28" y="58" width="504" height="24" rx="6" fill="#fff" stroke="#e0f0ea" strokeWidth="1"/>
              <text x="44" y="74" fontFamily="Sora,sans-serif" fontSize="9" fontWeight="700" fill="#0a2218">Rankraze</text>
              {["Home","Services","About","Contact"].map((n,i)=><text key={n} x={200+50*i} y="74" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#3a5550">{n}</text>)}
              <rect x="428" y="64" width="60" height="14" rx="7" fill="#3cba99"/>
              <text x="458" y="75" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="8" fontWeight="700" fill="#fff">Get Started</text>
              <rect x="28" y="90" width="240" height="110" rx="8" fill="#edf9f6"/>
              <text x="44" y="114" fontFamily="Sora,sans-serif" fontSize="12" fontWeight="700" fill="#0a2218">Grow Your Business</text>
              <text x="44" y="130" fontFamily="Sora,sans-serif" fontSize="12" fontWeight="700" fill="#3cba99">Digitally</text>
              <rect x="44" y="138" width="140" height="6" rx="3" fill="#c8ede4"/><rect x="44" y="148" width="110" height="6" rx="3" fill="#c8ede4"/>
              <rect x="44" y="164" width="70" height="20" rx="10" fill="#3cba99"/>
              <text x="79" y="178" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="8" fontWeight="700" fill="#fff">Get a Quote</text>
              <rect x="278" y="90" width="254" height="110" rx="8" fill="#ddf0ea"/>
              {[[310,150,20,30,"#9ae3cc"],[338,135,20,45,"#6dd4b5"],[366,120,20,60,"#3cba99"],[394,110,20,70,"#0f6e56"]].map(([x,y,w,h,f],i)=><rect key={i} x={x} y={y} width={w} height={h} rx="3" fill={f as string}/>)}
              <polyline points="320,150 348,135 376,120 404,110" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </g>
            <g className="wd-float2">
              <rect x="14" y="222" width="252" height="140" rx="12" fill="#fff" stroke="#c8ede4" strokeWidth="1.5"/>
              <text x="28" y="242" fontFamily="Sora,sans-serif" fontSize="9.5" fontWeight="700" fill="#0a2218">Tablet View</text>
              <rect x="28" y="250" width="130" height="100" rx="8" fill="#f4fcf9" stroke="#c8ede4" strokeWidth="1"/>
              <rect x="30" y="252" width="126" height="14" rx="3" fill="#edf9f6"/>
              <text x="44" y="263" fontFamily="Sora,sans-serif" fontSize="6" fontWeight="700" fill="#0a2218">Rankraze</text>
              <rect x="112" y="255" width="36" height="8" rx="4" fill="#3cba99"/>
              <rect x="32" y="270" width="70" height="40" rx="4" fill="#edf9f6"/>
              <rect x="32" y="272" width="50" height="5" rx="2" fill="#c8ede4"/><rect x="32" y="280" width="40" height="5" rx="2" fill="#c8ede4"/>
              <rect x="32" y="296" width="36" height="10" rx="5" fill="#3cba99"/>
              <rect x="108" y="270" width="46" height="40" rx="4" fill="#ddf0ea"/>
              <rect x="172" y="250" width="80" height="50" rx="8" fill="#edf9f6" stroke="#c8ede4" strokeWidth="1"/>
              <text x="212" y="268" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="8" fill="#7ab8ac">Page Speed</text>
              <text x="212" y="286" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="18" fontWeight="700" fill="#3cba99">98</text>
              <text x="212" y="297" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#7ab8ac">/ 100</text>
              {[{label:"Performance",y:316,w:77},{label:"Accessibility",y:334,w:72},{label:"Best Practices",y:352,w:68}].map((r)=>(<g key={r.label}><text x="172" y={r.y} fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#3a5550">{r.label}</text><rect x="172" y={r.y+4} width="80" height="6" rx="3" fill="#ddf0ea"/><rect className="wd-pb" x="172" y={r.y+4} width={r.w} height="6" rx="3" fill="#3cba99"/></g>))}
            </g>
            <g className="wd-float3">
              <rect x="278" y="222" width="120" height="140" rx="12" fill="#fff" stroke="#c8ede4" strokeWidth="1.5"/>
              <text x="292" y="242" fontFamily="Sora,sans-serif" fontSize="9.5" fontWeight="700" fill="#0a2218">Mobile View</text>
              <rect x="296" y="250" width="84" height="104" rx="10" fill="#f4fcf9" stroke="#c8ede4" strokeWidth="1"/>
              <rect x="298" y="252" width="80" height="10" rx="2" fill="#edf9f6"/>
              <rect x="298" y="265" width="80" height="10" rx="2" fill="#fff" stroke="#e0f0ea" strokeWidth="0.8"/>
              <text x="306" y="274" fontFamily="Sora,sans-serif" fontSize="5.5" fontWeight="700" fill="#0a2218">Rankraze</text>
              <rect x="298" y="278" width="80" height="28" rx="3" fill="#edf9f6"/>
              <text x="306" y="290" fontFamily="Sora,sans-serif" fontSize="6" fontWeight="700" fill="#0a2218">Grow Digitally</text>
              <rect x="306" y="293" width="30" height="8" rx="4" fill="#3cba99"/>
              <rect x="298" y="310" width="36" height="28" rx="4" fill="#ddf0ea"/><rect x="340" y="310" width="36" height="28" rx="4" fill="#c8ede4"/>
              <rect x="298" y="342" width="80" height="8" rx="4" fill="#e8f5f0"/>
              <rect x="324" y="352" width="30" height="3" rx="1.5" fill="#c8ede4"/>
            </g>
            <rect x="408" y="222" width="138" height="140" rx="12" fill="#0a2218" stroke="#1a4a36" strokeWidth="1"/>
            <text x="422" y="242" fontFamily="Sora,sans-serif" fontSize="9" fontWeight="700" fill="#3cba99">Code Quality</text>
            <text x="420" y="260" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#6dd4b5">import</text><text x="451" y="260" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#9ae3cc">React</text><text x="475" y="260" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#c5f0e4">from</text>
            <text x="420" y="275" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#3cba99">&apos;react&apos;</text>
            <text x="420" y="290" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#6dd4b5">const</text><text x="451" y="290" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#c5f0e4">App</text><text x="468" y="290" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#9ae3cc">=</text><text x="478" y="290" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#6dd4b5">()</text>
            <text x="420" y="305" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#9ae3cc">return</text>
            <text x="420" y="320" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#3cba99"> &lt;Hero /&gt;</text>
            <rect className="wd-cursor" x="464" y="312" width="1.5" height="10" rx="1" fill="#3cba99"/>
            {[{x:420,label:"A11y ✓"},{x:462,label:"SEO ✓"},{x:504,label:"Fast ✓",w:34}].map((b)=>(<g key={b.label}><rect x={b.x} y="330" width={b.w||36} height="14" rx="7" fill="#3cba99" opacity={0.15}/><text x={b.x+(b.w||36)/2} y="341" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#3cba99" fontWeight="600">{b.label}</text></g>))}
            <g transform="translate(14,372)">
              <rect x="0" y="0" width="532" height="50" rx="12" fill="#fff" stroke="#ddf0ea" strokeWidth="1"/>
              <line x1="177" y1="10" x2="177" y2="40" stroke="#e8f5f0" strokeWidth="1"/><line x1="355" y1="10" x2="355" y2="40" stroke="#e8f5f0" strokeWidth="1"/>
              <g className="wd-stat"><text x="88" y="24" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="13" fontWeight="700" fill="#3cba99">100+ Sites Built</text><text x="88" y="38" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#7ab8ac">Delivered on time</text></g>
              <g className="wd-stat"><text x="266" y="24" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="13" fontWeight="700" fill="#3cba99">98 Speed Score</text><text x="266" y="38" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#7ab8ac">Google PageSpeed avg</text></g>
              <g className="wd-stat"><text x="443" y="24" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="13" fontWeight="700" fill="#3cba99">5 Frameworks</text><text x="443" y="38" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#7ab8ac">React · Next.js · Django · Node · Tailwind</text></g>
            </g>
          </svg>
        </div>
        {/* Con: fades LEFT */}
        <div id="c-wd" className="order-2 lg:order-1 rr-fade-left [&.rr-in]:rr-in-active" style={{transitionDelay:"180ms"}}>
          <div className="hidden lg:block"><Label text="Website Development"/><h2 className="font-['Sora'] text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#0a2218] dark:text-[#F9FAFB] leading-[1.25] tracking-[-0.028em] mb-4">Website Development Services That Build <em className="not-italic text-[#3cba99]">Fast, Scalable,</em> and Conversion-Focused Websites</h2></div>
          <p className="text-[15px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.82] mb-6">A high-performing website is the foundation of every successful digital marketing strategy. At Rankraze, we build modern websites in Chennai using React, Wordpress, Django, Node.js, and Tailwind — optimized for speed, SEO, and user experience.</p>
          <Checklist items={["Custom-built websites optimized for speed and SEO","Modern frameworks like React, Next.js, and Django","Mobile-responsive and user-friendly design","Conversion-focused website architecture"]}/>
          <div className="flex flex-wrap gap-2 mb-4">
  {techStack.map(({ name, icon: Icon }) => (
    <span
      key={name}
      className="inline-flex items-center gap-2 bg-[#edf9f6] border border-[rgba(60,186,153,0.25)] rounded-full px-3 py-1 text-[11.5px] font-semibold text-[#0f6e56] transition-all duration-200 hover:bg-[#3cba99] hover:text-white"
    >
      <Icon className="w-3.5 h-3.5" />
      {name}
    </span>
  ))}
</div>
          <Pills items={["Speed Optimization","Responsive Design","SEO-Ready Code"]}/>



             <div className="flex flex-row flex-wrap gap-2">

  {/* Primary — solid teal pill */}
  <Link
    href="/web-development"
    className="group inline-flex items-center gap-1  rounded-full bg-[#3cba99] px-3 md:px-2 py-4 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(60,186,153,0.28)] transition-all duration-200 hover:bg-[#2fa888] hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(60,186,153,0.38)] active:scale-[0.97] sm:px-5 sm:py-3 sm:text-md"
  >
    Explore Websites
    <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  </Link>

  {/* Outline — ghost teal pill */}
 <WebsiteButton/>
</div>
        </div>
      </div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// SECTION 5 — BRANDING
// Vis: fade LEFT  |  Con: fade UP + scale
// ══════════════════════════════════════════════════════════════
function BrandingSection() {
  useScrollReveal("s-br", () => {
    ["br-ring","br-stat"].forEach(c => document.querySelectorAll(`.${c}`).forEach(e => e.classList.add("go")));
    document.getElementById("v-br")?.classList.add("rr-in");
    document.getElementById("c-br")?.classList.add("rr-in");
    document.getElementById("h-br")?.classList.add("rr-in");
  });
  return (
    <Section id="s-br">
      <div id="h-br" className="block lg:hidden mb-6 rr-fade-up [&.rr-in]:rr-in-active">
        <Label text="Branding Services"/>
        <h2 className="font-['Sora'] text-2xl sm:text-[28px] font-bold text-[#0a2218] dark:text-[#F9FAFB] leading-[1.25] tracking-[-0.028em] mb-0">Branding Services That Build a <em className="not-italic text-[#3cba99]">Strong and Memorable</em> Digital Identity</h2>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-16 items-center">
        {/* Vis: fades LEFT */}
        <div id="v-br" className="w-full drop-shadow-[0_6px_24px_rgba(60,186,153,0.10)] dark:drop-shadow-[0_6px_24px_rgba(0,0,0,0.30)] order-1 lg:order-1 rr-fade-left [&.rr-in]:rr-in-active">
          <svg viewBox="0 0 560 430" xmlns="http://www.w3.org/2000/svg" fill="none" shapeRendering="geometricPrecision" textRendering="geometricPrecision" className="w-full h-auto block">
            <rect x="0" y="0" width="560" height="430" rx="20" className="fill-white dark:fill-[#0B0E11] transition-colors"/><rect x="0" y="0" width="560" height="430" rx="20" className="stroke-[#c8ede4] dark:stroke-white/10" strokeWidth="1.5"/>
            <g className="br-float1">
              <rect x="14" y="14" width="532" height="110" rx="12" fill="#edf9f6" stroke="#c8ede4" strokeWidth="1.5"/>
              <rect x="28" y="28" width="190" height="82" rx="10" fill="#fff" stroke="#ddf0ea" strokeWidth="1"/>
              <rect x="44" y="42" width="34" height="34" rx="8" fill="#3cba99"/>
              <text x="61" y="64" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="16" fontWeight="700" fill="#fff">R</text>
              <text x="86" y="56" fontFamily="Sora,sans-serif" fontSize="12" fontWeight="700" fill="#0a2218">Rankraze</text>
              <text x="86" y="72" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#7ab8ac">Digital Marketing Agency</text>
              <text x="114" y="95" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#a0c8c0">Primary Logo</text>
              <rect x="230" y="28" width="140" height="82" rx="10" fill="#0a2218"/>
              <rect x="244" y="44" width="28" height="28" rx="7" fill="#3cba99"/>
              <text x="258" y="63" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="13" fontWeight="700" fill="#0a2218">R</text>
              <text x="280" y="57" fontFamily="Sora,sans-serif" fontSize="10" fontWeight="700" fill="#fff">Rankraze</text>
              <text x="280" y="70" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#3cba99">Digital Agency</text>
              <text x="300" y="95" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#3cba99">Dark Variant</text>
              <rect x="382" y="28" width="60" height="82" rx="10" fill="#3cba99"/>
              <text x="412" y="78" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="30" fontWeight="700" fill="#fff">R</text>
              <text x="412" y="98" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#edf9f6">Icon Mark</text>
              <rect x="454" y="28" width="78" height="82" rx="10" fill="#fff" stroke="#ddf0ea" strokeWidth="1"/>
              <text x="493" y="50" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#7ab8ac">Brand Style</text>
              <text x="493" y="65" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="8" fontWeight="700" fill="#0a2218">GUIDE</text>
              <rect x="468" y="72" width="50" height="1.5" fill="#3cba99"/>
              <text x="493" y="85" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#7ab8ac">v2.0 2024</text>
              <text x="493" y="100" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#3cba99">✓ Approved</text>
            </g>
            <rect x="14" y="134" width="248" height="74" rx="12" fill="#fff" stroke="#c8ede4" strokeWidth="1.5"/>
            <text x="28" y="152" fontFamily="Sora,sans-serif" fontSize="9.5" fontWeight="700" fill="#0a2218">Color Palette</text>
            {[{x:28,fill:"#3cba99",hex:"#3cba99"},{x:72,fill:"#0f6e56",hex:"#0f6e56"},{x:116,fill:"#0a2218",hex:"#0a2218"},{x:160,fill:"#edf9f6",hex:"#edf9f6",stroke:true},{x:204,fill:"#ffffff",hex:"#ffffff",stroke:true}].map((sw)=>(<g key={sw.hex}><rect x={sw.x} y="158" width="38" height="32" rx="6" fill={sw.fill} stroke={sw.stroke?"#c8ede4":undefined} strokeWidth={sw.stroke?1:0}/><text x={sw.x+19} y="200" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="#3a5550">{sw.hex}</text></g>))}
            <rect x="274" y="134" width="272" height="74" rx="12" fill="#edf9f6" stroke="#c8ede4" strokeWidth="1.5"/>
            <text x="290" y="152" fontFamily="Sora,sans-serif" fontSize="9.5" fontWeight="700" fill="#0a2218">Typography</text>
            <text x="290" y="170" fontFamily="Sora,sans-serif" fontSize="16" fontWeight="700" fill="#0a2218">Sora</text>
            <text x="342" y="170" fontFamily="DM Sans,sans-serif" fontSize="9" fill="#7ab8ac">Headings & Labels</text>
            <text x="290" y="188" fontFamily="DM Sans,sans-serif" fontSize="13" fill="#3a5550">DM Sans</text>
            <text x="356" y="188" fontFamily="DM Sans,sans-serif" fontSize="9" fill="#7ab8ac">Body & UI</text>
            <rect x="290" y="194" width="240" height="1" fill="#c8ede4"/>
            <text x="290" y="202" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#7ab8ac">Aa Bb Cc — 700 · 600 · 400 weights</text>
            <g className="br-float2">
              <rect x="14" y="218" width="162" height="146" rx="12" fill="#fff" stroke="#c8ede4" strokeWidth="1.5"/>
              <text
  x="28"
  y="238"
  fontFamily="Sora,sans-serif"
  fontSize="9.5"
  fontWeight="700"
  fill="#0a2218"
>
  Brand Guidelines
</text>

{[
  { label: "Visual Identity", icon: "palette" },
  { label: "Typography Rules", icon: "type" },
  { label: "Logo Usage", icon: "triangle" },
  { label: "Brand Voice", icon: "mic" },
].map((item, i) => (
  <g key={item.label}>
    
    {/* Background */}
    <rect
      x="28"
      y={246 + 22 * i}
      width="130"
      height="16"
      rx="5"
      fill="#edf9f6"
    />

    {/* ICON */}
    <g transform={`translate(32, ${250 + 22 * i}) scale(0.5)`} stroke="#0f6e56" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      
      {item.icon === "palette" && (
        <>
          <circle cx="12" cy="12" r="10" />
          <circle cx="8" cy="10" r="1" />
          <circle cx="12" cy="8" r="1" />
          <circle cx="16" cy="10" r="1" />
        </>
      )}

      {item.icon === "type" && (
        <>
          <path d="M4 6h16" />
          <path d="M12 6v12" />
        </>
      )}

      {item.icon === "triangle" && (
        <path d="M12 4l8 16H4z" />
      )}

      {item.icon === "mic" && (
        <>
          <rect x="9" y="2" width="6" height="10" rx="3" />
          <path d="M5 10a7 7 0 0 0 14 0" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </>
      )}

    </g>

    {/* TEXT */}
    <text
      x="48"
      y={258 + 22 * i}
      fontSize="8.5"
      fontFamily="Sora,sans-serif"
      fill="#0a2218"
    >
      {item.label}
    </text>

  </g>
))}
              <rect x="28" y="334" width="130" height="22" rx="8" fill="#3cba99"/>
              <text x="93" y="349" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="8.5" fontWeight="700" fill="#fff">Download PDF →</text>
            </g>
            <rect x="188" y="218" width="162" height="146" rx="12" fill="#edf9f6" stroke="#c8ede4" strokeWidth="1.5"/>
            <text x="202" y="238" fontFamily="Sora,sans-serif" fontSize="9.5" fontWeight="700" fill="#0a2218">Social Presence</text>
            <rect x="202" y="246" width="130" height="60" rx="8" fill="#fff" stroke="#ddf0ea" strokeWidth="1"/>
            <rect x="202" y="246" width="130" height="26" rx="8" fill="#3cba99"/>
            <rect x="202" y="260" width="130" height="12" fill="#3cba99"/>
            <circle cx="222" cy="272" r="14" fill="#fff" stroke="#edf9f6" strokeWidth="2"/>
            <circle cx="222" cy="272" r="10" fill="#3cba99"/>
            <text x="222" y="276" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="10" fontWeight="700" fill="#fff">R</text>
            <text x="240" y="278" fontFamily="Sora,sans-serif" fontSize="8" fontWeight="700" fill="#0a2218">Rankraze</text>
            <text x="240" y="290" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#7ab8ac">@rankraze_chennai</text>
            <text x="202" y="320" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#3a5550">Followers</text><text x="202" y="333" fontFamily="Sora,sans-serif" fontSize="13" fontWeight="700" fill="#3cba99">24.6K</text>
            <text x="260" y="320" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#3a5550">Engagement</text><text x="260" y="333" fontFamily="Sora,sans-serif" fontSize="13" fontWeight="700" fill="#3cba99">8.4%</text>
            <text x="202" y="350" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#3a5550">Brand Consistency</text>
            <rect x="202" y="354" width="130" height="6" rx="3" fill="#ddf0ea"/><rect x="202" y="354" width="120" height="6" rx="3" fill="#3cba99"/>
            <rect x="362" y="218" width="184" height="146" rx="12" fill="#fff" stroke="#c8ede4" strokeWidth="1.5"/>
            <text x="376" y="238" fontFamily="Sora,sans-serif" fontSize="9.5" fontWeight="700" fill="#0a2218">Brand Strength Score</text>
            <circle cx="426" cy="295" r="34" stroke="#e0f0ea" strokeWidth="7" fill="none"/>
            <circle className="br-ring" cx="426" cy="295" r="34" stroke="#3cba99" strokeWidth="7" fill="none" strokeLinecap="round" transform="rotate(-90 426 295)"/>
            <text x="426" y="291" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="16" fontWeight="700" fill="#0a2218">92</text>
            <text x="426" y="305" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#7ab8ac">/ 100</text>
            {[{label:"Recognition",val:"96%",y1:262,y2:274},{label:"Trust",val:"89%",y1:290,y2:302},{label:"Recall",val:"91%",y1:318,y2:330}].map((m)=>(<g key={m.label}><text x="474" y={m.y1} fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#3a5550">{m.label}</text><text x="474" y={m.y2} fontFamily="Sora,sans-serif" fontSize="10" fontWeight="700" fill="#3cba99">{m.val}</text></g>))}
            <g transform="translate(14,374)">
              <rect x="0" y="0" width="532" height="50" rx="12" fill="#fff" stroke="#ddf0ea" strokeWidth="1"/>
              <line x1="177" y1="10" x2="177" y2="40" stroke="#e8f5f0" strokeWidth="1"/><line x1="355" y1="10" x2="355" y2="40" stroke="#e8f5f0" strokeWidth="1"/>
              <g className="br-stat"><text x="88" y="24" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="13" fontWeight="700" fill="#3cba99">500+ Brands</text><text x="88" y="38" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#7ab8ac">Identities Created</text></g>
              <g className="br-stat"><text x="266" y="24" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="13" fontWeight="700" fill="#3cba99">92 Avg Score</text><text x="266" y="38" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#7ab8ac">Brand Strength</text></g>
              <g className="br-stat"><text x="443" y="24" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="13" fontWeight="700" fill="#3cba99">9+ Years</text><text x="443" y="38" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#7ab8ac">Brand Strategy Experience</text></g>
            </g>
          </svg>
        </div>
        {/* Con: fades UP + scale */}
        <div id="c-br" className="order-2 lg:order-2 rr-fade-up-scale [&.rr-in]:rr-in-active" style={{transitionDelay:"180ms"}}>
          <div className="hidden lg:block"><Label text="Branding Services"/><h2 className="font-['Sora'] text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#0a2218] dark:text-[#F9FAFB] leading-[1.25] tracking-[-0.028em] mb-4">Branding Services That Build a <em className="not-italic text-[#3cba99]">Strong and Memorable</em> Digital Identity</h2></div>
          <p className="text-[15px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.82] mb-6">A strong brand is more than just a logo — it's how customers recognize, trust, and remember your business. At Rankraze, we provide strategic branding services in Chennai that help businesses create a powerful identity across digital platforms.</p>
          <Checklist items={["Unique brand identity and visual design","Consistent messaging across digital channels","Professional logo and brand guideline creation","Strong brand recognition and customer trust"]}/>
          <Pills items={["Brand Identity Design","Brand Strategy","Brand Messaging","Digital Brand Presence"]}/>


  <div className="flex flex-row flex-wrap gap-2">
  {/* Primary — solid teal pill */}
  <Link
    href="/branding"
    className="group inline-flex items-center gap-2 rounded-full bg-[#3cba99] px-3 md:px-6 py-4 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(60,186,153,0.28)] transition-all duration-200 hover:bg-[#2fa888] hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(60,186,153,0.38)] active:scale-[0.97] sm:px-5 sm:py-3 sm:text-md"
  >
    Explore Branding
    <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  </Link>

  {/* Outline — ghost teal pill */}
  <BrandingButton/>
</div>
         
        </div>
      </div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// SECTION 6 — CONTENT MARKETING
// Vis: fade RIGHT + scale  |  Con: fade DOWN
// ══════════════════════════════════════════════════════════════
function ContentMarketingSection() {
  useScrollReveal("s-cm", () => {
    ["cm-bar","cm-line","cm-dot","cm-stat"].forEach(c =>
      document.querySelectorAll(`.${c}`).forEach(e => e.classList.add("go"))
    );
    document.getElementById("v-cm")?.classList.add("rr-in");
    document.getElementById("c-cm")?.classList.add("rr-in");
    document.getElementById("h-cm")?.classList.add("rr-in");
  });
  return (
    <Section id="s-cm" glowLeft>
      <div id="h-cm" className="block lg:hidden mb-6 rr-fade-up [&.rr-in]:rr-in-active">
        <Label text="Content Marketing"/>
        <h2 className="font-['Sora'] text-2xl sm:text-[28px] font-bold text-[#0a2218] dark:text-[#F9FAFB] leading-[1.25] tracking-[-0.028em] mb-0">Content Marketing Services That <em className="not-italic text-[#3cba99]">Attract, Educate,</em> and Convert Your Audience</h2>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-16 items-center">
        {/* Vis: fades RIGHT + scale */}
        <div id="v-cm" className="w-full drop-shadow-[0_6px_24px_rgba(60,186,153,0.10)] dark:drop-shadow-[0_6px_24px_rgba(0,0,0,0.30)] order-1 lg:order-2 rr-fade-right-scale [&.rr-in]:rr-in-active">
          <svg viewBox="0 0 560 430" xmlns="http://www.w3.org/2000/svg" fill="none" shapeRendering="geometricPrecision" textRendering="geometricPrecision" className="w-full h-auto block">
            <rect x="0" y="0" width="560" height="430" rx="20" className="fill-white dark:fill-[#0B0E11] transition-colors"/><rect x="0" y="0" width="560" height="430" rx="20" className="stroke-[#c8ede4] dark:stroke-white/10" strokeWidth="1.5"/>
            <line x1="132" y1="44" x2="142" y2="44" stroke="#c8ede4" strokeWidth="1.5" strokeDasharray="3,2"/>
            <line x1="260" y1="44" x2="270" y2="44" stroke="#c8ede4" strokeWidth="1.5" strokeDasharray="3,2"/>
            <line x1="388" y1="44" x2="398" y2="44" stroke="#c8ede4" strokeWidth="1.5" strokeDasharray="3,2"/>
            <g className="cm-float">
              <rect x="14" y="14" width="118" height="60" rx="10" fill="#edf9f6" stroke="#c8ede4" strokeWidth="1.2"/>
              <text x="44" y="40" fontFamily="DM Sans,sans-serif" fontSize="18">💡</text>
              <text x="63" y="36" fontFamily="Sora,sans-serif" fontSize="9" fontWeight="700" fill="#0a2218">Ideation</text>
              <text x="63" y="49" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#7ab8ac">Keyword &</text>
              <text x="63" y="60" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#7ab8ac">topic research</text>
              <rect x="24" y="66" width="12" height="4" rx="2" fill="#3cba99"/>
            </g>
            {[{x:142,fill:"#fff",icon:"✍️",title:"Creation",sub1:"SEO-optimized",sub2:"content writing",barFill:"#9ae3cc"},{x:270,fill:"#edf9f6",icon:"🚀",title:"Publishing",sub1:"Multi-channel",sub2:"distribution",barFill:"#6dd4b5"}].map((stage)=>(<g key={stage.title}><rect x={stage.x} y="14" width="118" height="60" rx="10" fill={stage.fill} stroke="#c8ede4" strokeWidth="1.2"/><text x={stage.x+30} y="40" fontFamily="DM Sans,sans-serif" fontSize="18">{stage.icon}</text><text x={stage.x+49} y="36" fontFamily="Sora,sans-serif" fontSize="9" fontWeight="700" fill="#0a2218">{stage.title}</text><text x={stage.x+49} y="49" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#7ab8ac">{stage.sub1}</text><text x={stage.x+49} y="60" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#7ab8ac">{stage.sub2}</text><rect x={stage.x+10} y="66" width="12" height="4" rx="2" fill={stage.barFill}/></g>))}
            <rect x="398" y="14" width="148" height="60" rx="10" fill="#0a2218" stroke="#1a4a36" strokeWidth="1.2"/>
            <text x="428" y="40" fontFamily="DM Sans,sans-serif" fontSize="18">📈</text>
            <text x="452" y="36" fontFamily="Sora,sans-serif" fontSize="9" fontWeight="700" fill="#3cba99">Growth</text>
            <text x="452" y="49" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#6dd4b5">Organic traffic</text>
            <text x="452" y="60" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#6dd4b5">& conversions</text>
            <circle cx="536" cy="22" r="6" fill="#3cba99"/>
            <circle className="cm-ping" cx="536" cy="22" r="6" stroke="#3cba99" strokeWidth="1.8" fill="none" style={{transformOrigin:"536px 22px"}}/>
            <rect x="14" y="84" width="248" height="130" rx="12" fill="#fff" stroke="#c8ede4" strokeWidth="1.5"/>
            <text x="28" y="104" fontFamily="Sora,sans-serif" fontSize="10" fontWeight="700" fill="#0a2218">Content Calendar</text>
            <text x="254" y="104" textAnchor="end" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#3cba99" fontWeight="600">January 2025</text>
            {["M","T","W","T","F","S","S"].map((d,i)=><text key={i} x={30+32*i} y="120" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="#a0c8c0">{d}</text>)}
            {[[null,"#3cba99",null,null,"#3cba99",null,null],[null,null,"#9ae3cc",null,null,"#3cba99",null],[null,"#6dd4b5",null,null,"#3cba99",null,null]].map((week,wi)=>week.map((color,di)=>(<g key={`${wi}-${di}`}><rect x={24+32*di} y={126+26*wi} width="28" height="22" rx="5" fill={color||"#f4fcf9"}/><text x={38+32*di} y={141+26*wi} textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill={color?"#fff":"#7ab8ac"} fontWeight={color?"700":"400"}>{wi*7+di+1}</text></g>)))}
            <rect x="274" y="84" width="272" height="130" rx="12" fill="#edf9f6" stroke="#c8ede4" strokeWidth="1.5"/>
            <text x="290" y="104" fontFamily="Sora,sans-serif" fontSize="10" fontWeight="700" fill="#0a2218">Content Performance</text>
            {[{label:"Organic Sessions",pct:"94%",y:122,w:224,fill:"#3cba99"},{label:"Avg. Time on Page",pct:"78%",y:148,w:186,fill:"#6dd4b5"},{label:"Social Shares",pct:"65%",y:174,w:155,fill:"#9ae3cc"},{label:"Lead Conversions",pct:"52%",y:200,w:124,fill:"#c5f0e4"}].map((row)=>(<g key={row.label}><text x="290" y={row.y} fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#3a5550">{row.label}</text><text x="540" y={row.y} textAnchor="end" fontFamily="Sora,sans-serif" fontSize="8.5" fontWeight="700" fill="#3cba99">{row.pct}</text><rect x="290" y={row.y+5} width="238" height="8" rx="4" fill="#ddf0ea"/><rect className="cm-bar" x="290" y={row.y+5} width={row.w} height="8" rx="4" fill={row.fill} style={{transformOrigin:`290px ${row.y+5}px`}}/></g>))}
            <rect x="14" y="224" width="532" height="142" rx="12" fill="#fff" stroke="#c8ede4" strokeWidth="1.5"/>
            <text x="28" y="244" fontFamily="Sora,sans-serif" fontSize="10" fontWeight="700" fill="#0a2218">Organic Traffic Growth</text>
            <text x="538" y="244" textAnchor="end" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="#3cba99" fontWeight="600">↑ 312% YoY</text>
            <line x1="18" y1="344" x2="542" y2="344" stroke="#e8f5f0" strokeWidth="1"/>
            {[[30,34,"#c5f0e4"],[100,50,"#9ae3cc"],[170,44,"#6dd4b5"],[240,68,"#3cba99"],[310,58,"#2ea882"],[380,88,"#0f6e56"]].map(([bx,h,fill],i)=>(<g key={i} className="cm-bar" transform={`translate(${bx},344)`} style={{transformOrigin:"0 0"}}><rect x="0" y={-(h as number)} width="52" height={h as number} rx="5" fill={fill as string}/></g>))}
            <polyline className="cm-line" points="56,310 126,294 196,300 266,276 336,286 406,256" stroke="#0a2218" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle className="cm-dot" cx="406" cy="256" r="5" fill="#0a2218" style={{transformOrigin:"406px 256px"}}/>
            {["Jan","Feb","Mar","Apr","May","Jun"].map((m,i)=>(<text key={m} x={56+70*i} y="358" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill={i===5?"#3cba99":"#a0c8c0"} fontWeight={i===5?"700":"400"}>{m}</text>))}
            <g transform="translate(14,374)">
              <rect x="0" y="0" width="532" height="50" rx="12" fill="#fff" stroke="#ddf0ea" strokeWidth="1"/>
              <line x1="177" y1="10" x2="177" y2="40" stroke="#e8f5f0" strokeWidth="1"/><line x1="355" y1="10" x2="355" y2="40" stroke="#e8f5f0" strokeWidth="1"/>
              <g className="cm-stat"><text x="88" y="24" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="13" fontWeight="700" fill="#3cba99">312% Growth</text><text x="88" y="38" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#7ab8ac">Avg Organic Traffic YoY</text></g>
              <g className="cm-stat"><text x="266" y="24" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="13" fontWeight="700" fill="#3cba99">50K+ Articles</text><text x="266" y="38" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#7ab8ac">Published for Clients</text></g>
              <g className="cm-stat"><text x="443" y="24" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="13" fontWeight="700" fill="#3cba99">94% Retention</text><text x="443" y="38" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#7ab8ac">Content Client Rate</text></g>
            </g>
          </svg>
        </div>
        {/* Con: fades DOWN */}
        <div id="c-cm" className="order-2 lg:order-1 rr-fade-down [&.rr-in]:rr-in-active" style={{transitionDelay:"180ms"}}>
          <div className="hidden lg:block"><Label text="Content Marketing"/><h2 className="font-['Sora'] text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#0a2218] dark:text-[#F9FAFB] leading-[1.25] tracking-[-0.028em] mb-4">Content Marketing Services That <em className="not-italic text-[#3cba99]">Attract, Educate,</em> and Convert Your Audience</h2></div>
          <p className="text-[15px] text-[#3a5550] dark:text-gray-200 leading-[1.82] mb-6">High-quality content is one of the most powerful ways to build authority and attract potential customers online. At Rankraze, we provide strategic content marketing services in Chennai that help businesses increase visibility and generate organic traffic.</p>
          <Checklist items={["SEO-optimized blog and website content","Content strategies that drive organic traffic","Engaging brand storytelling and audience education","Consistent content publishing for long-term growth"]}/>
          <Pills items={["Blog & Article Writing","SEO Content Strategy","Content Calendar","Traffic Growth"]}/>

          
  <div className="flex flex-row flex-wrap gap-2">
  {/* Primary — solid teal pill */}
  <Link
    href="/content-writing-agency-chennai"
    className="group inline-flex items-center gap-1 rounded-full bg-[#3cba99] px-3 md:px-6 py-4 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(60,186,153,0.28)] transition-all duration-200 hover:bg-[#2fa888] hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(60,186,153,0.38)] active:scale-[0.97] sm:px-5 sm:py-3 sm:text-md"
  >
    Explore Content
    <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  </Link>

  {/* Outline — ghost teal pill */}
 <ContentPlanButton/>
</div>
        </div>
      </div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════
// MAIN EXPORT
// ══════════════════════════════════════════════════════════════
export default function ServicesSection() {
  return (
    <>
      <style>{`

        /* ══════════════════════════════════════
           ENTRANCE ANIMATION CLASSES
           All start hidden, .rr-in-active = visible
        ══════════════════════════════════════ */

        /* Base: all animated elements start hidden */
        .rr-fade-left,
        .rr-fade-right,
        .rr-fade-up,
        .rr-fade-down,
        .rr-fade-left-scale,
        .rr-fade-right-scale,
        .rr-fade-up-scale {
          opacity: 0;
          will-change: opacity, transform;
          transition: opacity 0.85s cubic-bezier(0.22, 0.61, 0.36, 1),
                      transform 0.85s cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        /* Initial positions */
        .rr-fade-left        { transform: translate3d(-48px, 0, 0); }
        .rr-fade-right       { transform: translate3d(48px, 0, 0); }
        .rr-fade-up          { transform: translate3d(0, 28px, 0); }
        .rr-fade-down        { transform: translate3d(0, -28px, 0); }
        .rr-fade-left-scale  { transform: translate3d(-36px, 0, 0) scale(0.96); }
        .rr-fade-right-scale { transform: translate3d(36px, 0, 0)  scale(0.96); }
        .rr-fade-up-scale    { transform: translate3d(0, 28px, 0)  scale(0.96); }

        /* Active = fully visible */
        .rr-in-active {
          opacity: 1 !important;
          transform: translate3d(0, 0, 0) scale(1) !important;
        }

        /* Legacy rr-in for SVG class toggling */
        .rr-in { opacity:1 !important; transform:none !important; }

        /* ══ SVG animations ══ */
        .rr-fc,.br-float1,.cm-float{animation:floatY 4.2s ease-in-out 1.4s infinite;}
        .smm-f1{animation:floatY 4.0s ease-in-out 0.0s infinite;}
        .smm-f2{animation:floatY 4.5s ease-in-out 0.8s infinite;}
        .smm-f3{animation:floatY 3.9s ease-in-out 1.5s infinite;}
        .smm-f4{animation:floatY 4.2s ease-in-out 0.4s infinite;}
        .wd-float1{animation:floatY 4.2s ease-in-out 0.0s infinite;}
        .wd-float2{animation:floatY 4.0s ease-in-out 0.8s infinite;}
        .wd-float3{animation:floatY 3.8s ease-in-out 1.6s infinite;}
        .br-float2{animation:floatY 4.4s ease-in-out 1.0s infinite;}
        .rr-badge{transform-origin:24px 21px;animation:pulse 3s ease-in-out infinite;}
        .rr-bg,.smm-bg,.cm-bar{transform-origin:0 0;transform:scaleY(0);will-change:transform;}
        .rr-bg.go{animation:barGrowY .52s cubic-bezier(.22,.61,.36,1) both;}
        .rr-bg.go:nth-child(1){animation-delay:.40s}.rr-bg.go:nth-child(2){animation-delay:.52s}
        .rr-bg.go:nth-child(3){animation-delay:.64s}.rr-bg.go:nth-child(4){animation-delay:.76s}
        .rr-bg.go:nth-child(5){animation-delay:.88s}
        .smm-bg.go{animation:barGrowY .55s cubic-bezier(.22,.61,.36,1) both;}
        .smm-bg.go:nth-child(1){animation-delay:.40s}.smm-bg.go:nth-child(2){animation-delay:.55s}
        .smm-bg.go:nth-child(3){animation-delay:.70s}.smm-bg.go:nth-child(4){animation-delay:.85s}
        .cm-bar.go{animation:barGrowY .52s cubic-bezier(.22,.61,.36,1) both;}
        .cm-bar.go:nth-child(1){animation-delay:.35s}.cm-bar.go:nth-child(2){animation-delay:.50s}
        .cm-bar.go:nth-child(3){animation-delay:.65s}.cm-bar.go:nth-child(4){animation-delay:.80s}
        .smm-pb,.wd-pb{transform-origin:0 0;transform:scaleX(0);will-change:transform;}
        .smm-pb.go{animation:barGrowX .8s cubic-bezier(.22,.61,.36,1) both;}
        .smm-pb.go:nth-child(1){animation-delay:.8s}.smm-pb.go:nth-child(2){animation-delay:1.05s}
        .smm-pb.go:nth-child(3){animation-delay:1.3s}
        .wd-pb.go{animation:barGrowX .7s cubic-bezier(.22,.61,.36,1) both;}
        .wd-pb.go:nth-child(1){animation-delay:.4s}.wd-pb.go:nth-child(2){animation-delay:.65s}
        .wd-pb.go:nth-child(3){animation-delay:.9s}.wd-pb.go:nth-child(4){animation-delay:1.15s}
        .rr-tl{stroke-dasharray:280;stroke-dashoffset:280;}
        .rr-tl.go{animation:drawSeo 1.1s cubic-bezier(.22,.61,.36,1) .9s forwards;}
        .smm-tl{stroke-dasharray:300;stroke-dashoffset:300;}
        .smm-tl.go{animation:drawLine 1.1s cubic-bezier(.22,.61,.36,1) .9s forwards;}
        .cm-line{stroke-dasharray:400;stroke-dashoffset:400;}
        .cm-line.go{animation:drawLine 1.1s cubic-bezier(.22,.61,.36,1) .85s forwards;}
        .rr-td,.smm-dot-end,.cm-dot{opacity:0;}
        .rr-td.go{animation:dotPop .32s cubic-bezier(.34,1.56,.64,1) 2.0s forwards;}
        .smm-dot-end.go{animation:dotPop .32s cubic-bezier(.34,1.56,.64,1) 2.0s forwards;}
        .cm-dot.go{animation:dotPop .3s cubic-bezier(.34,1.56,.64,1) 2.0s forwards;}
        .rr-stat,.smm-stat,.ppc-stat,.wd-stat,.br-stat,.cm-stat{opacity:0;}
        .rr-stat.go{animation:fadeUp .42s ease-out both;}
        .rr-stat.go:nth-child(1){animation-delay:1.4s}.rr-stat.go:nth-child(2){animation-delay:1.58s}
        .rr-stat.go:nth-child(3){animation-delay:1.76s}
        .smm-stat.go{animation:fadeUp .42s ease-out both;}
        .smm-stat.go:nth-child(1){animation-delay:1.4s}.smm-stat.go:nth-child(2){animation-delay:1.6s}
        .smm-stat.go:nth-child(3){animation-delay:1.8s}
        .ppc-stat.go{animation:fadeUp .4s ease-out both;}
        .ppc-stat.go:nth-child(1){animation-delay:1.3s}.ppc-stat.go:nth-child(2){animation-delay:1.5s}
        .ppc-stat.go:nth-child(3){animation-delay:1.7s}
        .wd-stat.go{animation:fadeUp .4s ease-out both;}
        .wd-stat.go:nth-child(1){animation-delay:1.3s}.wd-stat.go:nth-child(2){animation-delay:1.5s}
        .wd-stat.go:nth-child(3){animation-delay:1.7s}
        .br-stat.go{animation:fadeUp .42s ease-out both;}
        .br-stat.go:nth-child(1){animation-delay:1.2s}.br-stat.go:nth-child(2){animation-delay:1.4s}
        .br-stat.go:nth-child(3){animation-delay:1.6s}
        .cm-stat.go{animation:fadeUp .4s ease-out both;}
        .cm-stat.go:nth-child(1){animation-delay:1.2s}.cm-stat.go:nth-child(2){animation-delay:1.4s}
        .cm-stat.go:nth-child(3){animation-delay:1.6s}
        .rr-ring{stroke-dasharray:163.4;stroke-dashoffset:163.4;}
        .rr-ring.go{animation:seoRing 1.1s cubic-bezier(.22,.61,.36,1) 1.2s forwards;}
        .br-ring{stroke-dasharray:220;stroke-dashoffset:220;}
        .br-ring.go{animation:ringFill 1.2s cubic-bezier(.22,.61,.36,1) .6s forwards;}
        .wd-cursor{animation:typeBlink 1.1s step-end infinite;}
        .smm-ping,.cm-ping{animation:ping 2.6s ease-out 2.8s infinite;}
        @keyframes floatY{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(0,-6px,0)}}
        @keyframes barGrowY{from{transform:scaleY(0)}to{transform:scaleY(1)}}
        @keyframes barGrowX{from{transform:scaleX(0)}to{transform:scaleX(1)}}
        @keyframes drawLine{from{stroke-dashoffset:400}to{stroke-dashoffset:0}}
        @keyframes drawSeo{from{stroke-dashoffset:280}to{stroke-dashoffset:0}}
        @keyframes dotPop{0%{transform:scale(0);opacity:0}70%{transform:scale(1.35);opacity:1}100%{transform:scale(1);opacity:1}}
        @keyframes fadeUp{from{opacity:0;transform:translate3d(0,8px,0)}to{opacity:1;transform:translate3d(0,0,0)}}
        @keyframes ping{0%{transform:scale(1);opacity:.9}80%{transform:scale(2.4);opacity:0}100%{transform:scale(2.4);opacity:0}}
        @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
        @keyframes typeBlink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes ringFill{from{stroke-dashoffset:220}to{stroke-dashoffset:30}}
        @keyframes seoRing{from{stroke-dashoffset:163.4}to{stroke-dashoffset:13}}
      `}</style>
      <SEOSection />
      <SMMSection />
      <PPCSection />
      <WebDevSection />
      <BrandingSection />
      <ContentMarketingSection />
    </>
  );
}