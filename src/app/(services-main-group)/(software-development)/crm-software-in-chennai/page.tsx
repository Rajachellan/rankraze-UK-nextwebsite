import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";
import { CRMHero } from "./CRMHero";
import { Users, BarChart2, Zap, Layers, Check, ArrowRight, Building2, ShoppingCart, GraduationCap, HeartPulse, Briefcase, Car, Home, DollarSign, Wrench } from "lucide-react";

const LEAD_FORM = "https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1";

export const metadata: Metadata = {
  title: "CRM Software in Chennai | AI-Powered Sales & Service CRM for Businesses",
  description: "Looking for the best CRM software in Chennai? Manage leads, sales, service, automation, customer support, and team productivity with Rankraze CRM. Get a 1-month free trial with mobile app access.",
  keywords: ["CRM software Chennai","CRM software India","sales CRM","service CRM","lead management software","CRM for small business","mobile CRM app","AI CRM software","automotive CRM","real estate CRM","cloud CRM Chennai"],
  alternates: { canonical: "https://rankraze.com/crm-software-in-chennai" },
  openGraph: {
    title: "CRM Software in Chennai | AI-Powered Sales & Service CRM",
    description: "Manage leads, sales, service, automation, and customer relationships with Rankraze CRM. 1-month free trial with mobile app access.",
    url: "https://rankraze.com/crm-software-in-chennai",
    siteName: "Rankraze",
    images: [{ url: "/upload/software-develop1.webp", width: 826, height: 590, alt: "CRM Software in Chennai", type: "image/webp" }],
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

const FEATURES = [
  { icon: Users, title: "Lead Management", body: "Capture, organize, and track leads from websites, calls, ads, social media, and campaigns in one dashboard." },
  { icon: BarChart2, title: "Sales Pipeline Management", body: "Monitor every stage of your sales process and improve closing rates with better visibility." },
  { icon: Zap, title: "Marketing Automation", body: "Automate email campaigns, reminders, lead nurturing, and customer engagement workflows." },
  { icon: Layers, title: "Service Management", body: "Handle customer service tickets, complaints, support requests, and SLA tracking efficiently." },
  { icon: Check, title: "Quote & Invoice Management", body: "Generate quotations and invoices quickly while maintaining customer records centrally." },
  { icon: Users, title: "Task & Activity Tracking", body: "Assign tasks, monitor employee activities, schedule follow-ups, and improve productivity." },
  { icon: Zap, title: "Workflow Automation", body: "Reduce manual work by automating repetitive business processes and notifications." },
  { icon: BarChart2, title: "Analytics & Reporting", body: "Access real-time reports for sales performance, lead tracking, team productivity, and customer behavior." },
  { icon: Layers, title: "Mobile CRM App", body: "Access your CRM anywhere using our mobile application available on Android devices." },
  { icon: Users, title: "Customer Segmentation", body: "Segment customers based on interests, behavior, services, or purchase history for better targeting." },
  { icon: Zap, title: "Communication Integration", body: "Connect calls, emails, WhatsApp communication, and follow-ups within one platform." },
  { icon: Check, title: "Secure Cloud-Based CRM", body: "Your customer data remains secure with controlled access, encrypted storage, and cloud-based infrastructure." },
];

const CUSTOM_CRM = [
  { title: "Sales CRM Software", body: "Improve lead conversion, automate follow-ups, and track sales team performance efficiently." },
  { title: "Service CRM Software", body: "Perfect for service-based businesses that need ticketing, complaint management, field service coordination, and customer support tracking." },
  { title: "Automotive CRM Software", body: "Manage inquiries, vehicle sales, customer service reminders, and dealership operations from one CRM platform." },
  { title: "Cloud-Based CRM Solutions", body: "Access your CRM securely from anywhere with real-time cloud synchronization." },
  { title: "Mobile CRM Development", body: "Empower teams with mobile-first CRM access for sales and field operations." },
];

const INDUSTRIES = [
  { icon: Home, title: "Real Estate", body: "Track property leads, automate follow-ups, and manage client communication effectively." },
  { icon: ShoppingCart, title: "Retail & E-Commerce", body: "Manage customer engagement, order tracking, and repeat customer marketing campaigns." },
  { icon: Car, title: "Automotive Industry", body: "Handle test drive inquiries, service reminders, customer records, and dealership workflows." },
  { icon: HeartPulse, title: "Healthcare", body: "Manage appointments, patient communication, support requests, and service coordination." },
  { icon: DollarSign, title: "Finance & Banking", body: "Improve client management, document tracking, and communication workflows." },
  { icon: GraduationCap, title: "Education Institutions", body: "Track student inquiries, admissions, communication, and support management." },
  { icon: Wrench, title: "Service Businesses", body: "Perfect for AC services, RO services, plumbing, electrical works, appliance repair, pest control, solar services, and maintenance businesses." },
  { icon: Briefcase, title: "Small Businesses & Startups", body: "Affordable CRM software solutions built for growing businesses and teams." },
];

const BENEFITS = [
  { title: "Centralized Customer Data", body: "Access all customer details, conversations, history, and activities from one place." },
  { title: "Better Lead Conversion", body: "Track every lead properly and reduce missed opportunities." },
  { title: "Improved Team Collaboration", body: "Sales, support, and marketing teams can work together more efficiently." },
  { title: "Increased Productivity", body: "Automation reduces repetitive manual work and saves valuable time." },
  { title: "Data-Driven Decisions", body: "Use reports and analytics to improve business strategies and performance." },
  { title: "Scalable Business Growth", body: "Our CRM grows with your business requirements and future expansion." },
  { title: "Easy-to-Use Interface", body: "Simple UI/UX design helps teams adopt the software quickly without a complicated learning curve." },
];

const MOBILE_FEATURES = [
  "Access customer data instantly",
  "Update lead status in real time",
  "Schedule follow-ups",
  "Track field operations",
  "Receive reminders & notifications",
  "Manage customer communication on the go",
];

const TRUST_POINTS = [
  "1 Month Free Trial Available",
  "Mobile CRM Access",
  "Cloud-Based Platform",
  "Sales & Service Automation",
  "Industry-Specific Customization",
  "Ongoing Support & Training",
  "Scalable CRM Architecture",
];

const FAQ = [
  { q: "What is CRM software?", a: "CRM (Customer Relationship Management) software helps businesses manage customer interactions, leads, sales processes, support requests, and communication from one centralized platform." },
  { q: "What are the 4 types of CRM?", a: "The four major types of CRM are: Operational CRM, Analytical CRM, Collaborative CRM, and Strategic CRM. Each type focuses on improving customer management, automation, analytics, or collaboration." },
  { q: "How much does CRM software cost in India?", a: "CRM software pricing in India depends on features, users, customization, and business requirements. Rankraze offers flexible and budget-friendly CRM solutions for businesses of all sizes." },
  { q: "Is your CRM suitable for small businesses?", a: "Yes. Our CRM software is designed for startups, small businesses, service providers, and growing enterprises." },
  { q: "Do you provide custom CRM software development in Chennai?", a: "Yes. We provide customized CRM software development based on industry requirements and workflow needs." },
  { q: "Does the CRM include mobile app access?", a: "Yes. Our CRM software includes mobile app functionality for field teams, sales teams, and service management." },
  { q: "Can your CRM software integrate with other tools?", a: "Yes. Our CRM can integrate with communication tools, websites, marketing platforms, and business systems depending on your requirements." },
  { q: "Is your CRM secure?", a: "Yes. We use secure cloud infrastructure, user access control, and protected data management practices to keep customer information safe." },
  { q: "Do you offer a free CRM trial?", a: "Yes. We provide a 1-month free trial so businesses can test the CRM before implementation." },
  { q: "Which industries can use your CRM software?", a: "Our CRM software is suitable for real estate, automotive, education, healthcare, finance, retail, field services, startups, and service-based businesses." },
];

const SCHEMA = {
  softwareApp: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Rankraze CRM",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Android",
    "description": "AI-powered CRM software for sales, service, and business growth in Chennai.",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR", "description": "1-month free trial" },
    "provider": { "@type": "Organization", "name": "Rankraze", "url": "https://rankraze.com" },
  },
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rankraze",
    "description": "CRM software provider in Chennai offering AI-powered sales and service CRM solutions.",
    "url": "https://rankraze.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Chennai", "addressRegion": "Tamil Nadu", "addressCountry": "IN" },
  },
  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  },
};

export default function CRMPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA.softwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA.localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA.faqSchema) }} />

      <CRMHero leadFormUrl={LEAD_FORM} trustedLogos={TRUSTED_LOGOS} />

      {/* Book Demo */}
      <section id="book-demo" className="w-full grid place-items-center mt-12 md:mt-16 px-4 md:px-6 lg:px-10 scroll-mt-24 text-(--text-black)">
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-10 items-start rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-[#161B22]/40 p-6 md:p-10">
          <div className="flex flex-col justify-center gap-3">
            <h2 className="text-2xl md:text-3xl font-semibold dark:text-gray-200">Request a Free Demo</h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              Share your details and our team will walk you through Rankraze CRM—lead management, sales pipeline, automation, and reporting tailored to your business workflow.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              {["1-month free trial included", "Mobile app access from day one", "Same-day response on business days"].map((line) => (
                <li key={line} className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-[var(--primary-green)] shrink-0 mt-0.5" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full min-w-0">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Why businesses need CRM */}
      <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl xl:text-[38px] font-semibold dark:text-gray-200">Why Businesses Need CRM Software Today</h2>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              Customer expectations are changing rapidly. Businesses that still manage leads through spreadsheets, WhatsApp chats, or disconnected systems often struggle with missed follow-ups, poor tracking, and inconsistent customer experiences. With digital competition increasing across Chennai and India, businesses need a centralized CRM system to stay organized and competitive.
            </p>
          </div>
          <ul className="md:w-1/2 space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
            {["Track every customer interaction","Manage leads from multiple channels","Automate repetitive tasks","Improve team collaboration","Increase sales conversion rates","Deliver faster customer support","Generate detailed reports and insights","Scale operations without confusion"].map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-3">All-in-One CRM Software Features</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base">Our CRM software combines sales, service, automation, and customer management into one easy-to-use platform.</p>
        <div className="w-full max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#161B22]/80">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#EFF6FF] dark:bg-teal-950/40 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[var(--primary-green)]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-gray-100 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Custom CRM */}
      <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 bg-gray-50 dark:bg-[#0B0E11] py-16">
        <div className="w-full max-w-7xl">
          <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-3">Custom CRM Software Development in Chennai</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base">Every business operates differently. We build scalable CRM systems tailored for startups, SMEs, and enterprises.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOM_CRM.map((item) => (
              <div key={item.title} className="bg-white dark:bg-[#161B22] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold dark:text-gray-100 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href={LEAD_FORM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-linear-to-br from-[var(--primary-green)] to-[var(--primary-blue)] px-7 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95 transition-opacity">
              Get a Customized CRM Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-3">CRM Software for Different Industries</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base">Our CRM software is designed to support businesses across multiple industries.</p>
        <div className="w-full max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <div key={ind.title} className="bg-white dark:bg-[#161B22] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <Icon className="w-6 h-6 text-[var(--primary-green)] mb-3" strokeWidth={1.75} />
                <h3 className="font-semibold dark:text-gray-100 mb-2">{ind.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{ind.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24 bg-gray-50 dark:bg-[#0B0E11] py-16">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-10">Benefits of Choosing Rankraze CRM Software</h2>
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-6">
          {BENEFITS.map((item) => (
            <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#161B22]/80">
              <Check className="w-6 h-6 text-[var(--primary-green)] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold dark:text-gray-100 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Chennai */}
      <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl xl:text-[38px] font-semibold dark:text-gray-200">Why Businesses in Chennai Choose Rankraze CRM</h2>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-sm md:text-base">Unlike generic CRM tools, our CRM software is designed by a team that actively works in digital marketing, lead generation, customer acquisition, and software development. This gives us practical understanding of real business challenges.</p>
          </div>
          <ul className="md:w-1/2 space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
            {["Sales workflows","Lead management challenges","Customer retention","Marketing automation","Service business operations","Conversion optimization"].map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mobile CRM */}
      <section id="mobile" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24 bg-gray-50 dark:bg-[#0B0E11] py-16">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl xl:text-[38px] font-semibold dark:text-gray-200">Mobile CRM App for Sales &amp; Service Teams</h2>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-sm md:text-base">Your business doesn&apos;t stop when you leave the office. Our mobile CRM application allows your team to stay connected and productive from anywhere, helping businesses improve response times and customer satisfaction significantly.</p>
          </div>
          <ul className="md:w-1/2 space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
            {MOBILE_FEATURES.map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust Points */}
      <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-10">Trusted CRM Solution for Growing Businesses</h2>
        <div className="w-full max-w-4xl grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRUST_POINTS.map((point) => (
            <div key={point} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161B22]">
              <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0" />
              <span className="text-sm font-medium dark:text-gray-200">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full grid place-items-center mt-20 mb-10 px-4 md:px-6 lg:px-10 py-14 rounded-2xl max-w-7xl mx-auto bg-linear-to-br from-[var(--primary-green)] to-[var(--primary-blue)] text-white">
        <div className="text-center max-w-3xl px-4">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">Supercharge Your Sales &amp; Customer Management</h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8">Start using an AI-powered CRM software designed to help businesses improve sales performance, customer relationships, and operational efficiency.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={LEAD_FORM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-[#0f766e] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100">
              Start Free Trial
            </Link>
            <Link href="#book-demo" className="inline-flex items-center border-2 border-white px-6 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10">
              Talk to CRM Expert
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="w-full grid place-items-center mt-10 px-4 md:px-6 lg:px-10 pb-16 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center dark:text-gray-200 mb-8">Frequently Asked Questions</h2>
        <div className="w-full max-w-3xl space-y-3">
          {FAQ.map((item) => (
            <details key={item.q} className="group border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#161B22] px-4 py-3 open:shadow-sm">
              <summary className="cursor-pointer font-medium text-gray-900 dark:text-gray-100 list-none flex justify-between items-center gap-2 [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="text-[var(--primary-green)] text-lg group-open:rotate-45 motion-safe:transition-transform motion-reduce:transition-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed pb-1">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
