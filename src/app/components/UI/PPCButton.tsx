"use client";


import { createPortal } from "react-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import { X, Send, CheckCircle2, Loader2, FilePen, PartyPopper } from "lucide-react";

// ─── types ────────────────────────────────────────────────────
type FieldType = "text" | "email" | "tel" | "url" | "select" | "textarea" | "checkbox-group";

interface Field {
    name: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    required?: boolean;
    options?: string[];
}

// ─── form fields ──────────────────────────────────────────────
const FIELDS: Field[] = [
    { name: "name", label: "Full Name", type: "text", placeholder: "Eg. Your name", required: false },
    { name: "email", label: "Email", type: "email", placeholder: "you@company.com", required: true },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true },
    { name: "website", label: "Website URL", type: "url", placeholder: "https://yourwebsite.com", required: false },

    {
        name: "message", label: " Message", type: "textarea",
        placeholder: "Enter your  message...", required: false
    },
];

const ACCENT = "#2ea882";

// ─── single field renderer ────────────────────────────────────
function FormField({ field, value, onChange }: {
    field: Field;
    value: string | string[];
    onChange: (v: string | string[]) => void;
}) {
    const base =
        "w-full rounded-xl border border-[#e0ede9] bg-[#f7fdfb] px-4 py-[10px] " +
        "text-[13px] text-[#0a2218] placeholder:text-[#9ab8b0] outline-none " +
        "transition-all duration-200 focus:bg-white focus:border-[#2ea882] focus:ring-2 focus:ring-[#2ea882]/20";

    if (field.type === "select") return (
        <div className="relative">
            <select
                value={value as string}
                onChange={e => onChange(e.target.value)}
                className={`${base} appearance-none cursor-pointer pr-9`}
            >
                <option value="">Select an option…</option>
                {field.options?.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7ab8ac]"
                viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6l4 4 4-4" />
            </svg>
        </div>
    );

    if (field.type === "textarea") return (
        <textarea
            value={value as string}
            onChange={e => onChange(e.target.value)}
            placeholder={field.placeholder}
            rows={3}
            className={`${base} resize-none min-h-[80px]`}
        />
    );

    if (field.type === "checkbox-group") {
        const checked = Array.isArray(value) ? value : [];
        return (
            <div className="flex flex-wrap gap-2">
                {field.options?.map(opt => {
                    const on = checked.includes(opt);
                    return (
                        <button
                            key={opt}
                            type="button"
                            onClick={e => {
                                e.preventDefault();
                                e.stopPropagation();
                                onChange(on ? checked.filter(v => v !== opt) : [...checked, opt]);
                            }}
                            style={on ? { background: ACCENT, borderColor: ACCENT, color: "#fff" } : {}}
                            className="text-[11.5px] font-medium px-3 py-1.5 rounded-full border border-[#d4ede7] bg-[#f7fdfb] text-[#3a5550] hover:border-[#2ea882] hover:text-[#0f6e56] transition-all duration-150 cursor-pointer select-none"
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>
        );
    }

    return (
        <input
            type={field.type}
            value={value as string}
            onChange={e => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={base}
        />
    );
}

// ─── modal (rendered via portal into document.body) ───────────
function PPCPlanModal({ onClose }: { onClose: () => void }) {
    const [data, setData] = useState<Record<string, string | string[]>>({});
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const overlayRef = useRef<HTMLDivElement>(null);

    // lock body scroll + Escape to close
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setStatus("submitting");
        // replace with your real API call
        await new Promise(r => setTimeout(r, 1600));
        setStatus("success");
    };

    // pair short text fields side-by-side, wide fields full-width
    const rows: Field[][] = [];
    let i = 0;
    while (i < FIELDS.length) {
        const f = FIELDS[i];
        const isWide = f.type === "textarea" || f.type === "checkbox-group" || f.type === "select";
        if (!isWide && i + 1 < FIELDS.length && !["textarea", "checkbox-group", "select"].includes(FIELDS[i + 1].type)) {
            rows.push([FIELDS[i], FIELDS[i + 1]]); i += 2;
        } else {
            rows.push([f]); i += 1;
        }
    }

    const modal = (
        <div
            ref={overlayRef}
            onMouseDown={e => { if (e.target === overlayRef.current) onClose(); }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6"
            style={{
                background: "rgba(10,34,24,0.55)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
            }}
        >
            {/* Card */}
            <div
                onMouseDown={e => e.stopPropagation()}
                className="relative w-full max-w-[600px] rounded-2xl bg-white shadow-[0_40px_90px_rgba(10,34,24,0.22)] flex flex-col overflow-hidden"
                style={{
                    animation: "cpModalIn 0.26s cubic-bezier(0.22,0.61,0.36,1) both",
                    maxHeight: "calc(100dvh - 2rem)",
                }}
            >
                {/* keyframe injected inline so no global CSS needed */}
                <style>{`
          @keyframes cpModalIn {
            from { opacity: 0; transform: translateY(20px) scale(0.97); }
            to   { opacity: 1; transform: translateY(0)     scale(1);    }
          }
        `}</style>

                {/* ── Header ─────────────────────────────────────────── */}
                <div
                    className="flex-shrink-0 flex items-start gap-4 px-6 pt-6 pb-5 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${ACCENT}14 0%, ${ACCENT}05 100%)` }}
                >
                    {/* glow blob */}
                    <div
                        className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-[0.12]"
                        style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }}
                    />
                    {/* icon */}
                    <div
                        className="w-11 h-11 min-w-[44px] rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: `${ACCENT}1a`, border: `1.5px solid ${ACCENT}30` }}
                    >
                        <FilePen color="#3CBA99" />
                    </div>
                    {/* text */}
                    <div className="flex-1 min-w-0">
                        <div
                            className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.08em] uppercase mb-1 px-2.5 py-0.5 rounded-full"
                            style={{ background: `${ACCENT}15`, color: ACCENT }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
                            PPC & GOOGLE ADS
                        </div>
                        <h2 className="font-['Sora',sans-serif] text-[17px] font-bold text-[#0a2218] leading-[1.25] tracking-[-0.02em] mb-0.5">
                            Get Your PPC Strategy
                        </h2>
                        <p className="text-[12px] text-[#5a8078] leading-[1.55]">
                           Drive targeted traffic and maximize ROI with data-driven PPC and Google Ads campaigns tailored to your goals.
                        </p>
                    </div>
                    {/* close */}
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="w-8 h-8 min-w-[32px] rounded-full flex items-center justify-center text-[#7ab8ac] hover:bg-[#e8f5f0] hover:text-[#0a2218] transition-all duration-150 cursor-pointer flex-shrink-0"
                    >
                        <X size={15} />
                    </button>
                </div>

                {/* ── Body ───────────────────────────────────────────── */}
                {status === "success" ? (
                    /* success screen */
                    <div className="flex flex-col items-center gap-3 px-8 py-12 text-center flex-shrink-0">
                        <div
                            className="w-14 h-14 rounded-full flex items-center justify-center"
                            style={{ background: `${ACCENT}15` }}
                        >
                            <CheckCircle2 size={30} style={{ color: ACCENT }} />
                        </div>
                        <div className="grid">
                            <h3 className="flex items-center gap-2 font-['Sora',sans-serif] text-[18px] font-bold text-[#0a2218]">
                                You&apos;re all set!
                                <PartyPopper color="#3CBA99" />
                            </h3>
                        </div>

                        <p className="text-[13px] text-[#5a8078] leading-[1.65] max-w-[340px]">
                            Thanks for reaching out! Our team will review your details and get back to you within{" "}
                            <strong className="text-[#0a2218]">24 hours</strong>.
                        </p>
                        <button
                            type="button"
                            onClick={onClose}
                            className="mt-1 px-7 py-2.5 rounded-full text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                            style={{ background: ACCENT, boxShadow: `0 8px 20px ${ACCENT}40` }}
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    /* form */
                    <form onSubmit={handleSubmit} className="flex flex-col min-h-0">
                        {/* scrollable fields — scrollbar hidden */}
                        <div
                            className="overflow-y-auto overscroll-contain px-6 pt-4 pb-2"
                            style={{ scrollbarWidth: "none" }}
                        >
                            <style>{`.cp-scroll::-webkit-scrollbar { display: none; }`}</style>
                            <div className="space-y-3">
                                {rows.map((row, ri) => (
                                    <div key={ri} className={row.length === 2 ? "grid grid-cols-2 gap-3" : ""}>
                                        {row.map(f => (
                                            <div key={f.name}>
                                                <label className="block text-[11.5px] font-semibold text-[#1c3d34] mb-1">
                                                    {f.label}
                                                    {f.required && (
                                                        <span className="ml-0.5" style={{ color: ACCENT }}>*</span>
                                                    )}
                                                </label>
                                                <FormField
                                                    field={f}
                                                    value={data[f.name] ?? (f.type === "checkbox-group" ? [] : "")}
                                                    onChange={v => setData(p => ({ ...p, [f.name]: v }))}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* sticky footer */}
                       <div className="flex-shrink-0 px-6 pt-3 pb-5 flex flex-wrap gap-2 items-center justify-center border-t border-[#f0faf6] mt-2">
  <button
    type="submit"
    disabled={status === "submitting"}
    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 cursor-pointer"
    style={{ background: ACCENT, boxShadow: `0 6px 20px ${ACCENT}38` }}
  >
    {status === "submitting" ? (
      <><Loader2 size={13} className="animate-spin" />Submitting…</>
    ) : (
      <><Send size={12} />Submit Request</>
    )}
  </button>
</div>
                    </form>
                )}
            </div>
        </div>
    );

    return createPortal(modal, document.body);
}

// ─── exported button — drop-in replacement for the <Link> ────
export default function PPCPlanButton() {
    const [open, setOpen] = useState(false);
    const openModal = useCallback(() => setOpen(true), []);
    const closeModal = useCallback(() => setOpen(false), []);

    // SSR guard — portal only mounts client-side
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    return (
        <>
           
            <button
                type="button"
                onClick={e => { e.preventDefault(); e.stopPropagation(); openModal(); }}
                className="group inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#3cba99] bg-transparent px-3 md:px-6 py-4 text-sm font-medium text-[#0a5c45] transition-all duration-200 hover:bg-[var(--primary-green)] hover:text-white hover:-translate-y-px active:scale-[0.97] sm:px-5 sm:py-3 sm:text-md cursor-pointer"
            >
                Get PPC Plan
                <svg
                    className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5"
                    viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
            </button>

           
            {mounted && open && <PPCPlanModal onClose={closeModal} />}
        </>
    );
}