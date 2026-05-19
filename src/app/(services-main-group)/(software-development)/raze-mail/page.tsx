import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";
import { RazeMailHero } from "./RazeMailHero";
import { RazeMailPlatformShowcase } from "./RazeMailPlatformShowcase";
import {
  Mail,
  Clock,
  Rocket,
  Layers,
  TrendingUp,
  Building2,
  ShoppingCart,
  GraduationCap,
  Briefcase,
  HeartPulse,
  ArrowRight,
  Check,
  Users,
  Plug,
} from "lucide-react";

const LEAD_FORM =
  "https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1";

export const metadata: Metadata = {
  title: "Raze Mail | Email Automation & Bulk Campaign Software | Rankraze",
  description:
    "Automate bulk email campaigns, create reusable templates, manage subscribers, and track performance from one simple platform. Easy migration, no coding required.",
  keywords: [
    "Raze Mail",
    "email automation software",
    "bulk email campaigns",
    "email marketing platform",
    "drip campaigns",
    "email template builder",
    "subscriber management",
    "campaign analytics",
    "Mailchimp alternative",
    "email workflow automation",
  ],
  alternates: {
    canonical: "https://rankraze.com/raze-mail",
  },
  openGraph: {
    title: "Raze Mail | Email Automation & Bulk Campaign Software | Rankraze",
    description:
      "Automate bulk email campaigns, smart workflows, and faster outreach from one centralized platform.",
    url: "https://rankraze.com/raze-mail",
    siteName: "Rankraze",
    images: [
      {
        url: "/upload/software-develop1.webp",
        width: 826,
        height: 590,
        alt: "Raze Mail email automation software",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const TRUSTED_LOGOS = [
  { src: "/brand-logo/IIT_Madras.webp", alt: "IIT Madras", className: "px-2" },
  { src: "/brand-logo/murugappa.webp", alt: "Murugappa", className: "px-2" },
  { src: "/brand-logo/Bajaj_Finserv_logo.webp", alt: "Bajaj Finserv", className: "px-2" },
  { src: "/brand-logo/pizza-hut.webp", alt: "Pizza Hut", className: "px-2" },
  { src: "/brand-logo/Johnson-Lifts-LOGO.webp", alt: "Johnson Lifts", className: "px-2" },
];

const WHY_CHOOSE = [
  {
    icon: Clock,
    title: "Save time on repetitive campaign tasks",
    body: "Many marketing teams spend hours repeating the same campaign setup process every week. Raze Mail helps reduce repetitive work through automation workflows, reusable templates, and centralized campaign management.",
  },
  {
    icon: Rocket,
    title: "Launch campaigns faster",
    body: "Creating campaigns from scratch slows execution, especially during product launches, promotions, or seasonal campaigns. Raze Mail simplifies the process with ready-to-use templates, workflow automation, and faster campaign setup tools.",
  },
  {
    icon: Layers,
    title: "Manage large contact lists easily",
    body: "As subscriber databases grow, organizing audiences manually becomes difficult and time-consuming. Raze Mail helps businesses manage contacts using segmentation, tagging, and structured audience management tools.",
  },
  {
    icon: Mail,
    title: "Improve campaign consistency",
    body: "Consistent communication plays a major role in building trust and maintaining brand identity. With reusable templates and workflow-based automation, Raze Mail helps businesses maintain consistent messaging and design.",
  },
  {
    icon: TrendingUp,
    title: "Scale outreach without extra complexity",
    body: "Scaling email marketing often creates operational challenges when workflows become scattered across multiple tools. Raze Mail centralizes campaign creation, automation, subscriber management, and reporting into one platform.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Import & organize contacts",
    desc: "Upload subscriber lists, segment audiences, and organize contacts based on campaign goals.",
  },
  {
    n: "2",
    title: "Create automated campaigns",
    desc: "Build campaigns using reusable templates, schedule emails, and automate workflows.",
  },
  {
    n: "3",
    title: "Track performance & optimize",
    desc: "Monitor campaign performance, analyze engagement metrics, and improve future campaigns using reporting insights.",
  },
];

const INDUSTRIES = [
  {
    icon: ShoppingCart,
    title: "Ecommerce businesses",
    items: [
      "Promotional campaigns",
      "Abandoned cart emails",
      "Product announcements",
      "Customer retention workflows",
    ],
  },
  {
    icon: Building2,
    title: "SaaS companies",
    items: ["Onboarding sequences", "Product updates", "Feature announcements", "Lead nurturing"],
  },
  {
    icon: Briefcase,
    title: "Agencies",
    items: [
      "Multi-client campaign management",
      "Reusable templates",
      "Campaign reporting",
      "Workflow standardization",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education & training",
    items: ["Course announcements", "Enrollment campaigns", "Reminder sequences", "Student engagement"],
  },
  {
    icon: Users,
    title: "Recruitment & HR",
    items: [
      "Candidate follow-ups",
      "Onboarding communication",
      "Internal announcements",
      "Recruitment campaigns",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare & service businesses",
    items: ["Appointment reminders", "Awareness campaigns", "Customer communication", "Follow-up emails"],
  },
];

const RESULTS = [
  {
    title: "Faster campaign execution",
    body: "A growing marketing agency reduced campaign setup time significantly by reusing automation workflows and standardized templates. Instead of rebuilding campaigns repeatedly, the team created reusable systems that improved operational efficiency.",
  },
  {
    title: "Improved audience engagement",
    body: "An ecommerce business improved campaign engagement by segmenting subscribers more effectively and automating follow-up communication—sending more relevant campaigns to different audience groups.",
  },
  {
    title: "Reduced manual work",
    body: "A small business previously managing campaigns manually used automation workflows to reduce repetitive operational tasks, freeing the team to focus on strategy instead of repetitive execution work.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Raze Mail simplified our campaign workflow completely. We reduced manual campaign setup time and improved consistency across our email marketing.",
    name: "Marketing Director",
    role: "B2B services company",
  },
  {
    quote:
      "Managing bulk campaigns became much easier after switching to Raze Mail. The workflow automation saved our team a lot of time.",
    name: "Ecommerce business owner",
    role: "Online retail",
  },
  {
    quote:
      "The template builder and automation workflows helped us standardize client campaigns without creating extra operational overhead.",
    name: "Agency founder",
    role: "Digital marketing agency",
  },
];

const PRICING = [
  {
    name: "Starter",
    blurb: "Best for small businesses and growing teams.",
    features: [
      "Bulk email campaigns",
      "Email templates",
      "Campaign analytics",
      "Subscriber management",
    ],
  },
  {
    name: "Growth",
    blurb: "Built for scaling marketing operations.",
    features: [
      "Advanced automation workflows",
      "Audience segmentation",
      "Integrations",
      "Enhanced reporting",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    blurb: "Designed for large-scale campaign management.",
    features: [
      "Advanced workflows",
      "API access",
      "Dedicated support",
      "Custom operational support",
    ],
  },
];

const FAQ = [
  {
    q: "What is email automation software?",
    a: "Email automation software helps businesses automate repetitive email marketing tasks such as scheduling campaigns, sending follow-up emails, managing workflows, and tracking engagement.",
  },
  {
    q: "Can I send bulk emails with Raze Mail?",
    a: "Yes. Raze Mail supports bulk email campaigns, audience segmentation, scheduled delivery, and workflow automation for large-scale outreach.",
  },
  {
    q: "Is Raze Mail suitable for small businesses?",
    a: "Yes. The platform is designed for both small businesses and growing teams that want to simplify email campaign management.",
  },
  {
    q: "Does Raze Mail support reusable email templates?",
    a: "Yes. Businesses can create reusable email templates using the built-in drag-and-drop editor.",
  },
  {
    q: "Can I automate follow-up emails?",
    a: "Yes. Raze Mail supports automated workflows, follow-up sequences, onboarding emails, and trigger-based automation.",
  },
  {
    q: "Does Raze Mail integrate with other platforms?",
    a: "Yes. The platform supports integrations with CRM tools, ecommerce systems, websites, and third-party workflow tools.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes. Businesses can explore the platform using the free trial before committing to a paid plan.",
  },
  {
    q: "Can beginners use Raze Mail?",
    a: "Yes. The platform is designed to be user-friendly and does not require coding knowledge.",
  },
  {
    q: "How secure is Raze Mail?",
    a: "Raze Mail follows secure infrastructure practices to help businesses manage campaigns and subscriber data safely.",
  },
  {
    q: "How does Raze Mail compare to Mailchimp?",
    a: "Raze Mail supports bulk email automation, workflow management, reusable templates, and campaign analytics similar to modern email marketing platforms.",
  },
];

const RELATED_LINKS: { href: string; label: string }[] = [
  { href: "/email-marketing", label: "Email marketing services (Chennai)" },
  { href: "/blogs", label: "Email marketing & automation insights" },
  { href: "/contact-us", label: "Talk to our team" },
];

export default function RazeMailPage() {
  return (
    <>
      <RazeMailHero leadFormUrl={LEAD_FORM} trustedLogos={TRUSTED_LOGOS} />

      <section
        id="book-demo"
        className="w-full grid place-items-center mt-12 md:mt-16 px-4 md:px-6 lg:px-10 scroll-mt-24 text-[var(--text-black)]"
      >
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-10 items-start rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-[#161B22]/40 p-6 md:p-10">
          <div className="flex flex-col justify-center gap-3">
            <h2 className="text-2xl md:text-3xl font-semibold dark:text-gray-200">Book a demo</h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              Share your details and our team will walk you through Raze Mail—bulk campaigns, templates,
              automation, and reporting tailored to your workflow.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              {["Migration & onboarding support", "No obligation after the call", "Same-day response on business days"].map(
                (line) => (
                  <li key={line} className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-[var(--primary-green)] shrink-0 mt-0.5" />
                    {line}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="w-full min-w-0">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl xl:text-[38px] font-semibold dark:text-gray-200">
              Automate bulk email campaigns without manual work
            </h2>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
              Most businesses don&apos;t struggle because they lack email ideas. The real challenge starts
              when campaigns become repetitive, scattered, and difficult to manage at scale. Raze Mail
              helps you automate bulk email workflows from one centralized platform.
            </p>
          </div>
          <ul className="md:w-1/2 space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
            {[
              "Send bulk email campaigns quickly",
              "Automate follow-up sequences",
              "Schedule campaigns in advance",
              "Organize subscriber lists efficiently",
              "Personalize campaigns for different audiences",
              "Track campaign performance from one dashboard",
            ].map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="w-full max-w-7xl mt-8 text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
          Instead of manually handling every campaign step, businesses can build repeatable workflows that
          save time and improve consistency.
        </p>
      </section>

      <RazeMailPlatformShowcase leadFormUrl={LEAD_FORM} />

      <section id="why" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-10">
          Why marketing teams choose Raze Mail
        </h2>
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-6">
          {WHY_CHOOSE.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#161B22]/80"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#EFF6FF] dark:bg-blue-950/40 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[var(--primary-blue)]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-gray-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="how" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-4">
          How Raze Mail works
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          The workflow is designed to reduce operational complexity while helping teams move faster.
        </p>
        <div className="w-full max-w-7xl grid md:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="text-center px-2">
              <div className="w-14 h-14 rounded-full border-2 border-[var(--primary-green)] text-[var(--primary-green)] font-bold text-xl flex items-center justify-center mx-auto mb-4 bg-white dark:bg-[#161B22]">
                {s.n}
              </div>
              <h3 className="font-semibold text-lg dark:text-gray-100 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 bg-gray-50 dark:bg-[#0B0E11] py-16">
        <div className="w-full max-w-7xl">
          <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-3">
            Built for different industries &amp; campaign types
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base">
            Different industries use email marketing differently. Raze Mail is flexible enough to support
            multiple campaign types and workflows.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="bg-white dark:bg-[#161B22] rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <Icon className="w-6 h-6 text-[var(--primary-green)] mb-3" strokeWidth={1.75} />
                  <h3 className="font-semibold dark:text-gray-100 mb-3">{ind.title}</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1.5">
                    {ind.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="text-[var(--primary-green)]">•</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-3xl xl:text-[38px] font-semibold dark:text-gray-200 mb-4">
              Integrates with your existing marketing stack
            </h2>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-4">
              Switching to a new platform becomes difficult when workflows are deeply connected to multiple
              tools. Raze Mail is designed to integrate with commonly used platforms so businesses can
              continue operating without major disruptions.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Potential integrations include CRM platforms, ecommerce tools, WordPress websites, analytics
              platforms, automation tools, and API-based systems—so you can build connected workflows instead
              of managing disconnected marketing operations.
            </p>
          </div>
          <ul className="lg:w-1/2 grid sm:grid-cols-2 gap-3 text-sm">
            {[
              "CRM platforms",
              "Ecommerce tools",
              "WordPress websites",
              "Analytics platforms",
              "Automation tools",
              "API-based systems",
            ].map((line) => (
              <li
                key={line}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#E5F7F3]/50 dark:bg-teal-950/20 border border-[#3CBA99]/20"
              >
                <Plug className="w-4 h-4 text-[var(--primary-green)] shrink-0" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-10">
          Real results from businesses using Raze Mail
        </h2>
        <div className="w-full max-w-7xl grid md:grid-cols-3 gap-6">
          {RESULTS.map((r) => (
            <article
              key={r.title}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161B22]"
            >
              <h3 className="font-semibold dark:text-gray-100 mb-3">{r.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 bg-gray-50 dark:bg-[#0B0E11] py-16">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-10">
          What customers say about Raze Mail
        </h2>
        <div className="w-full max-w-7xl grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="p-6 rounded-xl bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="text-sm">
                <cite className="not-italic font-semibold text-gray-900 dark:text-gray-100">{t.name}</cite>
                <span className="block text-gray-500 dark:text-gray-400 text-xs mt-1">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="pricing" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-4">
          Flexible pricing for teams of every size
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-10 max-w-xl mx-auto">
          Free trial available, transparent pricing structure, scalable plans, and no hidden charges.
          Contact us for current plan pricing in your region.
        </p>
        <div className="w-full max-w-7xl grid md:grid-cols-3 gap-6 items-stretch">
          {PRICING.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col p-8 rounded-xl border ${
                plan.highlight
                  ? "border-[var(--primary-green)] shadow-md ring-2 ring-[var(--primary-green)]/20 bg-white dark:bg-[#161B22]"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161B22]"
              }`}
            >
              {plan.highlight && (
                <span className="text-xs font-bold uppercase text-[var(--primary-green)] mb-2">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-semibold dark:text-gray-100">{plan.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-6">{plan.blurb}</p>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3">Includes:</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="w-4 h-4 text-[var(--primary-green)] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={LEAD_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm font-medium py-2.5 rounded-lg bg-linear-to-br from-[var(--primary-green)] to-[var(--primary-blue)] text-white"
              >
                Start free trial
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          <Link
            href={LEAD_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center capitalize text-sm text-white px-6 py-2.5 rounded-lg bg-[var(--primary-green)] hover:opacity-95"
          >
            Book demo
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center capitalize text-sm px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600"
          >
            Learn more
          </Link>
        </div>
      </section>

      <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10">
        <h2 className="text-2xl font-semibold text-center dark:text-gray-200 mb-6">
          Learn more about email automation &amp; campaign strategy
        </h2>
        <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 text-sm">
          {RELATED_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-flex items-center gap-1 text-[var(--primary-green)] dark:text-teal-300 hover:underline"
              >
                {l.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="w-full grid place-items-center mt-20 mb-10 px-4 md:px-6 lg:px-10 py-14 rounded-2xl max-w-7xl mx-auto bg-linear-to-br from-[var(--primary-green)] to-[var(--primary-blue)] text-white">
        <div className="text-center max-w-3xl px-4">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Start automating email campaigns with Raze Mail
          </h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8">
            Simplify bulk email marketing, automate repetitive workflows, and manage campaigns from one
            centralized platform—newsletters, onboarding, promotions, or retention workflows with less manual
            effort.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href={LEAD_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#0f766e] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100"
            >
              Start free trial
            </Link>
            <Link
              href="#book-demo"
              className="inline-flex items-center border-2 border-white px-6 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10"
            >
              Schedule demo
            </Link>
          </div>
          <p className="mt-6 text-xs md:text-sm text-white/80">
            Onboarding assistance · Migration support · Fast implementation guidance
          </p>
        </div>
      </section>

      <section id="faq" className="w-full grid place-items-center mt-10 px-4 md:px-6 lg:px-10 pb-16 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center dark:text-gray-200 mb-8">Frequently asked questions</h2>
        <div className="w-full max-w-3xl space-y-3">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#161B22] px-4 py-3 open:shadow-sm"
            >
              <summary className="cursor-pointer font-medium text-gray-900 dark:text-gray-100 list-none flex justify-between items-center gap-2 [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="text-[var(--primary-green)] text-lg group-open:rotate-45 motion-safe:transition-transform motion-reduce:transition-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed pb-1">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
