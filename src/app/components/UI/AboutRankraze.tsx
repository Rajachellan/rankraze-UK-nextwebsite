'use client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, FC } from 'react'
import milestoneImg from '../../../../public/upload/Rankraze_Milestone.jpg'
interface StatItem {
    target: number
    suffix: string
    label: string
    isFloat: boolean
}
interface StatCellProps {
    stat: StatItem
    active: boolean
    index: number
}
interface BadgeProps {
    className?: string
    children: React.ReactNode
}
// ─────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────
const STATS: StatItem[] = [
    { target: 233, suffix: 'K+', label: 'Leads Generated', isFloat: false },
    { target: 2000, suffix: '+', label: 'Brands Trusted', isFloat: false },
    { target: 9, suffix: '+ Yrs', label: 'Experience', isFloat: false },
    { target: 4.8, suffix: '/5', label: 'Client Rating', isFloat: true },
]
// ─────────────────────────────────────────────────────────────
// HOOK: useCountUp
// ─────────────────────────────────────────────────────────────
function useCountUp(
    target: number,
    suffix: string,
    isFloat: boolean = false,
    active: boolean = false,
): string {
    const initial = isFloat
        ? `${target.toFixed(1)}${suffix}`
        : `${target.toLocaleString()}${suffix}`
    const [display, setDisplay] = useState<string>(initial)
    useEffect(() => {
        if (!active) return
        const DURATION = 1400
        const STEP = 16
        const steps = DURATION / STEP
        const inc = target / steps
        let cur = 0
        const iv = setInterval(() => {
            cur += inc
            if (cur >= target) {
                cur = target
                clearInterval(iv)
            }
            let disp: string
            if (isFloat) {
                disp = cur.toFixed(1)
            } else if (target >= 1000) {
                disp = (Math.round(cur / 10) * 10).toLocaleString()
            } else {
                disp = String(Math.round(cur))
            }
            setDisplay(`${disp}${suffix}`)
        }, STEP)
        return () => clearInterval(iv)
    }, [active, target, suffix, isFloat])
    return display
}
const StatCell: FC<StatCellProps> = ({ stat, active, index }) => {
    const display = useCountUp(stat.target, stat.suffix, stat.isFloat, active)
    return (
        <div className={`ab-stat px-3 py-4 text-center${index > 0 ? ' relative' : ''}`}>
            <p className="font-sora text-xl font-extrabold leading-none mb-1"
                style={{ color: '#3cba99' }}>
                {display}
            </p>
            <p className="text-[11px] font-medium leading-tight"
                style={{ color: '#7ab8ac' }}>
                {stat.label}
            </p>
        </div>
    )
}
// ─────────────────────────────────────────────────────────────
// SUB-COMPONENT: FloatingBadge
// ─────────────────────────────────────────────────────────────
const FloatingBadge: FC<BadgeProps> = ({ className = '', children }) => (
    <div className={['ab-badge hidden sm:flex', className].join(' ')}>
        {children}
    </div>
)
// ─────────────────────────────────────────────────────────────
// SVG ICONS
// ─────────────────────────────────────────────────────────────
const IconPerson: FC = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        stroke="#3cba99" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="7" r="4" />
        <path d="M4 13c0-2.2 1.8-4 4-4s4 1.8 4 4" />
    </svg>
)
const IconStar: FC = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        stroke="#ba7517" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2l1.5 3 3.5.5-2.5 2.5.6 3.5L8 10l-3.1 1.5.6-3.5L3 5.5 6.5 5z" />
    </svg>
)
// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT: AboutSection
// ─────────────────────────────────────────────────────────────
const AboutSection: FC = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const [visible, setVisible] = useState<boolean>(false)
    const [statsActive, setStatsActive] = useState<boolean>(false)

    useEffect(() => {
        const el = sectionRef.current
        if (!el || visible) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true)
                        setTimeout(() => setStatsActive(true), 400)
                        observer.disconnect()
                    }
                })
            },
            { rootMargin: '0px 0px -40px 0px', threshold: 0 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [visible])

    return (
        <section
            ref={sectionRef}
            id="about"
            aria-label="About Rankraze"
            className="ab-texture relative bg-white dark:bg-[#050D1A] overflow-hidden py-24 md:py-28 px-6 md:px-12"
        >
            {/* Keyframe definitions */}
            <style>{`
                @keyframes pillDotPulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50%       { opacity: 0.4; transform: scale(0.65); }
                }
                @keyframes pillShimmer {
                    0%   { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
            `}</style>

            {/* ── Top-right radial glow orb ── */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-36 -right-36 w-[500px] h-[500px] rounded-full z-0"
                style={{
                    background: 'radial-gradient(circle,rgba(60,186,153,.09) 0%,transparent 62%)',
                }}
            />

            {/* ── Inner max-width container ── */}
            <div className="relative z-10 max-w-[1140px] mx-auto">

                {/* ── Header: pill + heading ── */}
                <div className="relative z-10 max-w-[1140px] mx-auto text-center flex flex-col items-center">

                    {/* ── PILL — fade up + scale in, with pulsing dot ── */}
                    <div
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible
                                ? 'translateY(0) scale(1)'
                                : 'translateY(20px) scale(0.92)',
                            transition:
                                'opacity 0.65s cubic-bezier(.22,.61,.36,1) 0.05s, transform 0.65s cubic-bezier(.22,.61,.36,1) 0.05s',
                        }}
                        className="inline-flex items-center gap-2 my-5 bg-white dark:bg-[rgba(60,186,153,0.08)] border-[1.5px] border-[#3cba99] text-[#0f6e56] dark:text-[#3CBA99] font-['Sora'] text-[11px] font-bold tracking-[0.08em] uppercase px-4 py-2 rounded-full shadow-[0_0_0_4px_rgba(60,186,153,0.07)] leading-none"
                    >
                        {/* Pulsing dot — starts only after pill is visible */}
                        <span
                            className="w-[7px] h-[7px] bg-[#3cba99] rounded-full flex-shrink-0"
                            style={{
                                animation: visible
                                    ? 'pillDotPulse 2s ease-in-out infinite'
                                    : 'none',
                            }}
                        />
                        About Rankraze
                    </div>

                    {/* ── HEADING LINE 1 — slides up slightly after pill ── */}
                    <h2
                        className="font-sora text-3xl md:text-4xl font-extrabold leading-[1.18] tracking-[-0.03em] mb-3 max-w-[720px] text-[#0a2218] dark:text-[#E2EEFF]"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(28px)',
                            transition:
                                'opacity 0.8s cubic-bezier(.22,.61,.36,1) 0.22s, transform 0.8s cubic-bezier(.22,.61,.36,1) 0.22s',
                        }}
                    >
                        About Rankraze &mdash; Digital Marketing{' '}
                        <br className="hidden md:block" />
                        Agency in{' '}
                        {/* ── "Chennai" — extra stagger, own transition ── */}
                        <em
                            className="not-italic"
                            style={{
                                color: '#3cba99',
                                display: 'inline-block',
                                opacity: visible ? 1 : 0,
                                transform: visible ? 'translateY(0)' : 'translateY(18px)',
                                transition:
                                    'opacity 0.65s cubic-bezier(.22,.61,.36,1) 0.48s, transform 0.65s cubic-bezier(.22,.61,.36,1) 0.48s',
                            }}
                        >
                            Chennai
                        </em>
                    </h2>

                    {/* ── Animated underline accent — grows in after heading ── */}
                    <div
                        aria-hidden="true"
                        style={{
                            height: '3px',
                            borderRadius: '99px',
                            background: 'linear-gradient(90deg, #3cba99 0%, #5fe0c2 50%, #3cba99 100%)',
                            width: visible ? '64px' : '0px',
                            marginBottom: '2px',
                            transition: 'width 0.75s cubic-bezier(.22,.61,.36,1) 0.6s',
                        }}
                    />
                </div>

                {/* ── Two-column grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-30 items-center mt-10">

                    {/* ══ LEFT COLUMN — Content ══ */}
                    <div
                        className={
                            visible
                                ? 'animate-slide-in-left'
                                : 'opacity-0 -translate-x-8'
                        }
                    >
                        {/* 4-stat trust strip */}
                        <div
                            className="ab-stats-box grid grid-cols-4 border border-[#c8ede4] dark:border-[rgba(255,255,255,0.08)] rounded-2xl bg-white dark:bg-[#0A1628] overflow-hidden mb-7"
                        >
                            {STATS.map((stat, i) => (
                                <StatCell
                                    key={stat.label}
                                    stat={stat}
                                    active={statsActive}
                                    index={i}
                                />
                            ))}
                        </div>

                        {/* Gradient divider line */}
                        <div className="ab-divider" />

                        {/* Body paragraphs */}
                        <p
                            className="text-[15px] leading-[1.82] mb-4 text-[#3a5550] dark:text-[#94B4D4]"
                        >
                            Rankraze is a results-driven digital marketing agency in Chennai focused on helping
                            businesses grow through data-driven marketing strategies. Our team specialises in SEO,
                            Google Ads, social media marketing, and performance-focused campaigns designed to attract
                            the right audience and generate qualified leads.
                        </p>
                        <p
                            className="text-[15px] leading-[1.82] mb-7 text-[#3a5550] dark:text-[#94B4D4]"
                        >
                            Since our journey began, we have worked with businesses across healthcare, real estate,
                            education, ecommerce, and technology. By combining strategic insights, AI-powered marketing
                            tools, and creative campaign execution, we help brands strengthen their digital presence
                            and achieve sustainable growth.
                        </p>

                        {/* Micro CTA */}
                        <Link href="/about" className="ab-cta-link text-teal-800 dark:text-[#3CBA99] underline underline-offset-4 font-bold">
                            Learn More About Rankraze{' '}
                            <span className="ab-cta-arrow">&#8594;</span>
                        </Link>
                    </div>

                    {/* ══ RIGHT COLUMN — Milestone image ══ */}
                    <div
                        className={
                            visible
                                ? 'animate-slide-in-right'
                                : 'opacity-0 translate-x-8'
                        }
                    >
                        <div className="relative flex items-center justify-center px-6 md:px-10">
                            <div aria-hidden="true" className="ab-glow animate-glow-p" />
                            <div aria-hidden="true" className="ab-ring1 animate-ring-b" />
                            <div aria-hidden="true" className="ab-ring2 animate-ring-b2" />

                            <div className="flex justify-center items-center w-full">
                                <div className="relative group">
                                    <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-[#3cba99] via-[#5fe0c2] to-[#3cba99] opacity-50 blur-md group-hover:opacity-100 transition duration-500"></div>
                                    <div className="relative bg-white dark:bg-[#0A1628] rounded-2xl p-[6px] shadow-[0_10px_40px_rgba(60,186,153,0.18)]">
                                        <Image
                                            src={milestoneImg}
                                            alt="AI powered service in Chennai"
                                            width={800}
                                            height={800}
                                            className="rounded-xl object-cover w-full scale-[1.2] animate-float transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection