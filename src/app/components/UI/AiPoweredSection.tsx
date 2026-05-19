"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { TrendingUp, Clock, ArrowRight } from "lucide-react";

import Image from "next/image";
export default function AIPoweredMarketing() {
  const sectionRef = useRef<HTMLElement>(null);
  const [fired,  setFired]  = useState(false);
  const [cntIn,  setCntIn]  = useState(false);
  const [visIn,  setVisIn]  = useState(false);
  const [b1In,   setB1In]   = useState(false);
  const [b2In,   setB2In]   = useState(false);
  const [b3In,   setB3In]   = useState(false);
  const [ctaIn,  setCtaIn]  = useState(false);

  const trigger = useCallback(() => {
    if (fired) return;
    setFired(true);
    setCntIn(true);
    setVisIn(true);
    setCtaIn(true);
  }, [fired]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || fired) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trigger();
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [trigger, fired]);

  return (
    <>
      <style>{`


        @keyframes dotPulse {
          0%,100%{ transform:scale(1);   opacity:1  }
          50%    { transform:scale(1.5); opacity:.5 }
        }
        .ai-dot { animation: dotPulse 2.2s ease-in-out infinite; }

        @keyframes ringBreath {
          0%,100%{ opacity:.6; transform:translate(-50%,-50%) scale(1);     }
          50%    { opacity:1;  transform:translate(-50%,-50%) scale(1.012); }
        }
        .ai-ring-outer {
          position:absolute; width:108%; height:108%;
          border-radius:28px; border:1.5px solid rgba(60,186,153,.18);
          top:50%; left:50%; transform:translate(-50%,-50%);
          pointer-events:none;
          animation: ringBreath 4s ease-in-out infinite;
        }
        .ai-ring-inner {
          position:absolute; width:104%; height:104%;
          border-radius:24px; border:1px solid rgba(60,186,153,.10);
          top:50%; left:50%; transform:translate(-50%,-50%);
          pointer-events:none;
          animation: ringBreath 4s ease-in-out .8s infinite;
        }

        @keyframes glowPulse {
          0%,100%{ opacity:.7; transform:translate(-50%,-50%) scale(1);    }
          50%    { opacity:1;  transform:translate(-50%,-50%) scale(1.06); }
        }
        .ai-glow {
          position:absolute; width:85%; height:85%;
          background:radial-gradient(ellipse,rgba(60,186,153,.14) 0%,transparent 68%);
          border-radius:50%; top:50%; left:50%;
          transform:translate(-50%,-50%);
          pointer-events:none;
          animation: glowPulse 5s ease-in-out infinite;
        }

        @keyframes imgFloat {
          0%,100%{ transform:translateY(0px)  rotate(0deg);   }
          33%    { transform:translateY(-10px) rotate(.3deg);  }
          66%    { transform:translateY(-6px)  rotate(-.2deg); }
        }
        .ai-img-card {
          position:relative; z-index:2; width:100%;
          border-radius:20px; overflow:hidden;
          box-shadow: 0 8px 24px rgba(60,186,153,.12),
                      0 32px 64px rgba(10,34,24,.12),
                      0 0 0 1.5px rgba(60,186,153,.18);
          animation: imgFloat 5s ease-in-out infinite;
          will-change:transform; background:#fff;
        }

        @keyframes badgeFloat1 {
          0%,100%{ transform:translate(0,0);       }
          50%    { transform:translate(-4px,-8px);  }
        }
        @keyframes badgeFloat2 {
          0%,100%{ transform:translate(0,0);      }
          50%    { transform:translate(4px,-8px);  }
        }
        @keyframes badgeFloat3 {
          0%,100%{ transform:translate(0,0);      }
          50%    { transform:translate(6px,-6px);  }
        }
        .ai-b1 { animation: badgeFloat1 4.8s ease-in-out .4s  infinite; }
        .ai-b2 { animation: badgeFloat2 5.2s ease-in-out 1.2s infinite; }
        .ai-b3 { animation: badgeFloat3 4.4s ease-in-out .8s  infinite; }

        @keyframes livePing {
          0%  { box-shadow:0 0 0 0   rgba(60,186,153,.6); }
          70% { box-shadow:0 0 0 8px rgba(60,186,153,0);  }
          100%{ box-shadow:0 0 0 0   rgba(60,186,153,0);  }
        }
        .ai-live-dot {
          width:8px; height:8px;
          background:#3cba99; border-radius:50%;
          animation: livePing 1.8s ease-out infinite;
        }

        .ai-bullet {
          opacity:0;
          transform:translate3d(-16px,0,0);
          transition: opacity .55s cubic-bezier(.22,.61,.36,1),
                      transform .55s cubic-bezier(.34,1.3,.64,1);
        }
        .ai-bullet.in { opacity:1; transform:translate3d(0,0,0); }
        .ai-bullet.in:nth-child(1){ transition-delay:.3s;  }
        .ai-bullet.in:nth-child(2){ transition-delay:.44s; }
        .ai-bullet.in:nth-child(3){ transition-delay:.58s; }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden px-5 sm:px-8 md:px-12 py-20 font-['DM_Sans',sans-serif] bg-white dark:bg-[var(--prim-dark-bg)] transition-colors duration-300"
      >
        <div className="max-w-[1180px] mx-auto relative z-10">

          <div className="flex flex-col items-center justify-center gap-4 mb-10 mt-10">
            {/* Pill */}
            <div style={{
  opacity: visIn ? 1 : 0,
  transform: visIn
    ? "translate3d(0,0,0)"
    : "translate3d(0,36px,0)", 
  transition:
    "opacity .85s cubic-bezier(.22,.61,.36,1) .18s, transform .85s cubic-bezier(.22,.61,.36,1) .18s",
}} className="inline-flex items-center gap-2 bg-white dark:bg-[rgba(60,186,153,0.08)] border-[1.5px] border-[#3cba99] text-[#0f6e56] dark:text-[#3CBA99] font-['Sora'] text-[11px] font-bold tracking-[0.08em] uppercase px-4 py-2 rounded-full shadow-[0_0_0_4px_rgba(60,186,153,0.07)] leading-none">
              <span className="ai-dot w-[7px] h-[7px] bg-[#3cba99] rounded-full flex-shrink-0 inline-block" />
              AI-Powered Marketing
            </div>

            {/* H2 */}
            <h2 style={{
  opacity: visIn ? 1 : 0,
  transform: visIn
    ? "translate3d(0,0,0)"
    : "translate3d(0,36px,0)", 
  transition:
    "opacity .85s cubic-bezier(.22,.61,.36,1) .18s, transform .85s cubic-bezier(.22,.61,.36,1) .18s",
}} className="font-['Sora']  text-3xl lg:text-[32px] text-center font-bold text-[#0a2218] dark:text-[#E2EEFF] leading-[1.25] tracking-[-0.028em]">
              AI-Powered Digital Marketing Agency in
              <br className="hidden sm:block" />
              <em className="not-italic text-[#3cba99]"> Texas</em>
            </h2>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div
              className="order-1 lg:order-2"
              style={{
                opacity:   visIn ? 1 : 0,
                transform: visIn ? "translate3d(0,0,0)" : "translate3d(36px,0,0)",
                transition: "opacity .85s cubic-bezier(.22,.61,.36,1) .18s, transform .85s cubic-bezier(.22,.61,.36,1) .18s",
              }}
            >
              <div className="w-full max-w-[800px] mx-auto">
  <Image
    src="/upload/ai_powered_service.webp"
    alt="AI powered digital marketing services"
    width={800}
    height={600}
    className="w-full h-auto rounded-xl object-cover animate-float"
    sizes="(max-width: 1024px) 100vw, 800px"
    quality={75}
  />
</div>
            </div>

            <div
              className="order-2 lg:order-1"
              style={{
                opacity:   cntIn ? 1 : 0,
                transform: cntIn ? "translate3d(0,0,0)" : "translate3d(-36px,0,0)",
                transition: "opacity .85s cubic-bezier(.22,.61,.36,1), transform .85s cubic-bezier(.22,.61,.36,1)",
              }}
            >
              <p className="text-[15px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.82] mb-8">
                Artificial intelligence is transforming how businesses approach digital marketing. At
                Rankraze, we combine human expertise with AI-powered insights to create smarter
                strategies that deliver measurable results.
              </p>

              <div className="w-[44px] h-[2.5px] bg-gradient-to-r from-[#3cba99] to-transparent rounded mb-8" />

              <div className="flex flex-col gap-[22px] mb-9">
                {[
                  {
                    title: "AI-Driven Data Analysis",
                    desc:  "Identify high-performing keywords, audience behavior, and campaign insights using advanced analytics.",
                  },
                  {
                    title: "Predictive Campaign Optimization",
                    desc:  "AI predicts marketing performance and optimizes SEO, ads, and content strategies faster and more accurately.",
                  },
                  {
                    title: "Real-Time Performance Insights",
                    desc:  "Track campaign performance instantly and improve marketing decisions using live data and AI-powered reporting.",
                  },
                ].map((b) => (
                  <div
                    key={b.title}
                    className={`ai-bullet flex items-start gap-[14px] group${ctaIn ? " in" : ""}`}
                  >
                    <div className="w-[26px] h-[26px] min-w-[26px] bg-[#3cba99] rounded-full flex items-center justify-center flex-shrink-0 mt-[1px] shadow-[0_4px_14px_rgba(60,186,153,0.32)] transition-all duration-[220ms] group-hover:scale-110 group-hover:shadow-[0_6px_20px_rgba(60,186,153,0.45)]">
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="1,4.5 4,7.5 10,1" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-['Sora'] text-[14.5px] font-bold text-[#0a2218] dark:text-[#E2EEFF] mb-1 leading-[1.25]">{b.title}</div>
                      <div className="text-[13.5px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.65]">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-5 bg-white dark:bg-[#0A1628] border-[1.5px] border-[#c8ede4] dark:border-[rgba(255,255,255,0.08)] rounded-[14px] shadow-[0_4px_20px_rgba(60,186,153,0.09)] relative overflow-hidden transition-all duration-[250ms] hover:border-[#3cba99] hover:shadow-[0_8px_32px_rgba(60,186,153,0.15)]"
                style={{
                  opacity:   ctaIn ? 1 : 0,
                  transform: ctaIn ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity .6s cubic-bezier(.22,.61,.36,1) .15s, transform .6s cubic-bezier(.22,.61,.36,1) .15s, border-color .25s, box-shadow .25s",
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#3cba99] to-[#9ae3cc] rounded-r-[2px]" />
                <div className="flex-1 pl-1">
                  <div className="font-['Sora'] text-[14px] font-bold text-[#0a2218] dark:text-[#E2EEFF] mb-[2px]">
                    See how AI can improve your marketing
                  </div>
                  <div className="text-[12.5px] text-[#7ab8ac] dark:text-[#6A8FA8]">Free strategy session &mdash; no obligation</div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#3cba99] text-white font-['Sora'] text-[13px] font-bold px-[22px] py-3 rounded-[9px] whitespace-nowrap flex-shrink-0 transition-all duration-[180ms] hover:bg-[#2ea882] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(60,186,153,0.30)] group w-full sm:w-auto justify-center"
                >
                  Get Your Free Strategy
                  <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-[180ms] group-hover:translate-x-[5px]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}