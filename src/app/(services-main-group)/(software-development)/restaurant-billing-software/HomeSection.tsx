"use client";
import { useState } from "react";
import {
  Receipt,
  LayoutGrid,
  ChefHat,
  Package,
  Menu,
  Clock,
  QrCode,
  Globe,
  BarChart2,
  Bell,
  Calculator,
  ShoppingCart,
  Users,
  CalendarCheck,
  TrendingUp,
  Shield,
  PieChart,
  Award,
  Calendar,
  DollarSign,
  Building2,
  ListTree,
  UserCog,
  Radio,
  ChevronDown,
  UtensilsCrossed,
  Hotel,
  CloudLightning,
  Zap,
  Target,Gift, Phone,

  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image"

/* ─── FONTS ────────────────────────────────────────────────────────────
   Add to your app/layout.jsx or globals.css:
   @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

   Add to tailwind.config.js fontFamily:
     dmSerif: ['"DM Serif Display"', 'serif'],
     dmSans:  ['"DM Sans"', 'sans-serif'],
   ─────────────────────────────────────────────────────────────────── */

const FAQ_DATA = [
  { q: "Do I need any hardware to get started?", a: "No special hardware is required. RestroSuite runs on any Android tablet, iPad, laptop, or desktop browser. If you want a receipt printer or cash drawer, we support all standard thermal printers — but it's optional to start." },
  { q: "Can I use RestroSuite offline if the internet goes down?", a: "Yes. RestroSuite has an offline mode that keeps your POS running even without internet. Orders, KOTs and bills work normally — everything syncs automatically once you're back online." },
  { q: "How long does setup and training take?", a: "Most restaurants are fully set up within 4–6 hours. Our onboarding team handles the initial configuration, menu setup, and staff training — typically done in a single session either in-person or via video call." },
  { q: "Is it GST-compliant? Can I file returns from the software?", a: "Yes, all bills are GST-compliant with CGST/SGST/IGST breakdowns. You can export GSTR-1 compatible reports directly from the software. We don't file returns for you, but the export is formatted exactly as needed." },
  { q: "Can I integrate with Swiggy, Zomato or other delivery platforms?", a: "Yes — Swiggy and Zomato integration is available on the Growth and Enterprise plans. Orders from these platforms appear directly in your dashboard alongside dine-in orders, making operations seamless." },
  { q: "What happens after the 14-day free trial?", a: "After your trial you choose a plan and continue. Your data is preserved completely. If you don't upgrade, your account is paused — not deleted. We'll reach out to understand your needs before anything changes." },
  { q: "Do you offer support in Tamil and other regional languages?", a: "Yes. Our support team communicates in Tamil, Hindi, and English. The software interface is available in English, and regional language menus (for customer-facing QR menus) are supported for Tamil, Telugu, and Hindi." },
];

/* ─── Feature Items ─── */
const FEAT = {
  pos: [
    { icon: Receipt,        title: "Fast billing & GST invoicing",   desc: "Generate GST-compliant bills in seconds. Supports cash, card, UPI, and split payments." },
    { icon: LayoutGrid,     title: "Table & floor management",       desc: "Visual table map, seat tracking, merge/split bills and table transfer — all on one screen." },
    { icon: ChefHat,        title: "KOT to kitchen instantly",       desc: "Orders sent directly to kitchen display or printer the moment the waiter confirms." },
    { icon: Package,        title: "Takeaway & delivery billing",    desc: "Handle dine-in, takeaway, and delivery orders with separate workflows and labels." },
  ],
  menu: [
    { icon: Menu,           title: "Digital menu builder",     desc: "Create categories, add items with photos, prices, variants and modifiers — no coding needed." },
    { icon: Clock,          title: "Time-based menus",         desc: "Auto-switch breakfast, lunch and dinner menus. Set happy hour pricing automatically." },
    { icon: QrCode,         title: "QR code digital menu",    desc: "Customers scan and browse your menu on their phone — live updates reflect instantly." },
    { icon: Globe,          title: "Multi-language support",  desc: "Display menus in Tamil, Hindi, English and more — great for local and tourist customers." },
  ],
  inventory: [
    { icon: BarChart2,      title: "Real-time stock tracking",     desc: "Track raw materials, semi-processed and finished items. Auto-deduct on each order." },
    { icon: Bell,           title: "Low stock alerts",             desc: "Set reorder levels. Get alerts before you run out of key ingredients." },
    { icon: Calculator,     title: "Recipe-level costing",         desc: "Map ingredients to each dish. Know your exact food cost and margin per item." },
    { icon: ShoppingCart,   title: "Purchase order management",    desc: "Raise POs, record deliveries and manage vendor bills — all within the software." },
  ],
  staff: [
    { icon: Users,          title: "Staff profiles & roles",      desc: "Add waiters, cashiers, kitchen staff with individual logins and access permissions." },
    { icon: CalendarCheck,  title: "Attendance & shift tracking", desc: "Clock-in/clock-out tracking. Generate daily and monthly attendance reports easily." },
    { icon: TrendingUp,     title: "Performance insights",         desc: "See which staff member handled most orders, collected most payments and got best ratings." },
    { icon: Shield,         title: "Role-based permissions",       desc: "Control who can apply discounts, cancel orders or view financial reports." },
  ],
  reports: [
    { icon: PieChart,       title: "Daily sales summary",   desc: "One-click end-of-day report — revenue, orders, voids, discounts and collection mode breakdown." },
    { icon: Award,          title: "Best-seller analysis",  desc: "Know your top 10 items by quantity and revenue. Spot slow-movers and trim the menu." },
    { icon: Calendar,       title: "Weekly & monthly MIS",  desc: "Full business intelligence reports with trend graphs — shareable as PDF or Excel." },
    { icon: DollarSign,     title: "GST & tax reports",      desc: "Auto-generated GSTR-1 compatible reports. No more manual spreadsheets at month-end." },
  ],
  multi: [
    { icon: Building2,      title: "Centralized multi-branch control",  desc: "Manage all your outlets from one login. Compare revenue, orders and staff across branches." },
    { icon: ListTree,       title: "Shared or independent menus",       desc: "Push the same menu to all branches, or customize per location — your choice." },
    { icon: UserCog,        title: "Organization-level roles",           desc: "Set owner, manager, branch manager and staff roles with appropriate access at each level." },
    { icon: Radio,          title: "Real-time consolidated reports",    desc: "See combined and per-branch P&L, best-sellers and staff performance in one dashboard." },
  ],
};

type FeatureTabId = keyof typeof FEAT;

const TABS: { id: FeatureTabId; label: string }[] = [
  { id: "pos",       label: "POS & Billing" },
  { id: "menu",      label: "Menu Management" },
  { id: "inventory", label: "Inventory" },
  { id: "staff",     label: "Staff & Shifts" },
  { id: "reports",   label: "Reports & Analytics" },
  { id: "multi",     label: "Multi-Branch" },
];

/* ─── Feature Visuals ─── */
function PosVisual() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] dark:bg-[#161B22]/95 dark:border-gray-700/80 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] flex flex-col gap-3 transition-colors duration-300">
      <div className="flex justify-between text-[0.82rem] font-bold text-gray-800 dark:text-gray-100">
        <span>Live Billing Screen</span><span className="text-[#3DBC9B]">● Active</span>
      </div>
      {[
        { dot:"#3DBC9B", name:"Chicken Biryani", qty:"×2", price:"₹460", tag:"Added",   tc:"bg-[#ECFDF5] text-[#3DBC9B]" },
        { dot:"#3DBC9B", name:"Mango Lassi",     qty:"×1", price:"₹80",  tag:"Added",   tc:"bg-[#ECFDF5] text-[#3DBC9B]" },
        { dot:"#3DBC9B", name:"Gulab Jamun",     qty:"×2", price:"₹120", tag:"Pending", tc:"bg-[#ECFDF5] text-[#3DBC9B]" },
      ].map((r)=>(
        <div key={r.name} className="flex items-center gap-3 bg-gray-50 dark:bg-[#0B0E11] rounded-lg px-4 py-3 border border-gray-100 dark:border-gray-700/80 text-[0.82rem]">
          <span className="w-2 h-2 rounded-full shrink-0" style={{background:r.dot}}/>
          <span className="font-semibold text-gray-800 dark:text-gray-100 flex-1">{r.name}</span>
          <span className="text-gray-500 dark:text-gray-400 w-8 text-center">{r.qty}</span>
          <span className="font-semibold text-gray-800 dark:text-gray-100 w-14 text-right">{r.price}</span>
          <span className={`px-2 py-0.5 rounded-full text-[0.68rem] font-semibold ${r.tc}`}>{r.tag}</span>
        </div>
      ))}
      <div className="border-t border-gray-100 dark:border-gray-700 pt-3 space-y-1.5">
        <div className="flex justify-between text-[0.82rem] text-gray-500 dark:text-gray-400"><span>Subtotal</span><span>₹660</span></div>
        <div className="flex justify-between text-[0.82rem] text-gray-500 dark:text-gray-400"><span>GST (5%)</span><span>₹33</span></div>
        <div className="flex justify-between text-[1rem] font-bold text-gray-800 dark:text-gray-100"><span>Total</span><span>₹693</span></div>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div className="bg-gray-100 dark:bg-gray-800/80 rounded-lg py-2.5 text-center text-[0.8rem] font-semibold text-gray-500 dark:text-gray-400">Send KOT</div>
        <div className="rounded-lg py-2.5 text-center text-[0.8rem] font-semibold text-white" style={{background:"linear-gradient(to bottom right,#3DBC9B,#3DBC9B)"}}>Print Bill</div>
      </div>
    </div>
  );
}

function MenuVisual() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] dark:bg-[#161B22]/95 dark:border-gray-700/80 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] flex flex-col gap-3 transition-colors duration-300">
      <div className="text-[0.82rem] font-bold text-gray-800 dark:text-gray-100">Menu Manager</div>
      <div className="flex gap-2 flex-wrap">
        {["Starters","Main Course","Desserts","Beverages"].map((c,i)=>(
          <span key={c} className={`px-3 py-1 rounded-full text-[0.75rem] font-semibold ${i===0?"text-white":"bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"}`} style={i===0?{background:"linear-gradient(to right,#3DBC9B,#3DBC9B)"}:{}}>{c}</span>
        ))}
      </div>
      {[
        { dot:"#3DBC9B", name:"Paneer Tikka",    qty:"Veg",     price:"₹220", tag:"Active", tc:"bg-[#ECFDF5] text-[#3DBC9B]" },
        { dot:"#3DBC9B", name:"Chicken Wings",   qty:"Non-veg", price:"₹320", tag:"Active", tc:"bg-[#ECFDF5] text-[#3DBC9B]" },
        { dot:"#3DBC9B", name:"Veg Spring Roll",  qty:"Veg",     price:"₹180", tag:"Hidden", tc:"bg-[#ECFDF5] text-[#3DBC9B]" },
      ].map((r)=>(
        <div key={r.name} className="flex items-center gap-3 bg-gray-50 dark:bg-[#0B0E11] rounded-lg px-4 py-3 border border-gray-100 dark:border-gray-700/80 text-[0.82rem]">
          <span className="w-2 h-2 rounded-full shrink-0" style={{background:r.dot}}/>
          <span className="font-semibold text-gray-800 dark:text-gray-100 flex-1">{r.name}</span>
          <span className="text-gray-500 dark:text-gray-400 w-14 text-center">{r.qty}</span>
          <span className="font-semibold text-gray-800 dark:text-gray-100 w-14 text-right">{r.price}</span>
          <span className={`px-2 py-0.5 rounded-full text-[0.68rem] font-semibold ${r.tc}`}>{r.tag}</span>
        </div>
      ))}
    </div>
  );
}

function InventoryVisual() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] dark:bg-[#161B22]/95 dark:border-gray-700/80 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] flex flex-col gap-3 transition-colors duration-300">
      <div className="flex justify-between text-[0.82rem] font-bold text-gray-800 dark:text-gray-100">
        <span>Inventory Status</span><span className="text-[#3DBC9B]">⚠ 3 low stock alerts</span>
      </div>
      {[
        { dot:"#3DBC9B", name:"Basmati Rice",    qty:"42 kg", st:"In stock",  tag:"OK",      tc:"bg-[#ECFDF5] text-[#3DBC9B]" },
        { dot:"#3DBC9B", name:"Chicken (Whole)", qty:"8 kg",  st:"Low",       tag:"Reorder", tc:"bg-[#ECFDF5] text-[#3DBC9B]" },
        { dot:"#3DBC9B", name:"Tomatoes",        qty:"2 kg",  st:"Critical",  tag:"Urgent",  tc:"bg-[#ECFDF5] text-[#3DBC9B]" },
        { dot:"#3DBC9B", name:"Cooking Oil",     qty:"18 L",  st:"In stock",  tag:"OK",      tc:"bg-[#ECFDF5] text-[#3DBC9B]" },
      ].map((r)=>(
        <div key={r.name} className="flex items-center gap-3 bg-gray-50 dark:bg-[#0B0E11] rounded-lg px-4 py-3 border border-gray-100 dark:border-gray-700/80 text-[0.82rem]">
          <span className="w-2 h-2 rounded-full shrink-0" style={{background:r.dot}}/>
          <span className="font-semibold text-gray-800 dark:text-gray-100 flex-1">{r.name}</span>
          <span className="text-gray-500 dark:text-gray-400 w-10">{r.qty}</span>
          <span className="text-gray-800 dark:text-gray-100 w-16 text-right">{r.st}</span>
          <span className={`px-2 py-0.5 rounded-full text-[0.68rem] font-semibold ${r.tc}`}>{r.tag}</span>
        </div>
      ))}
    </div>
  );
}

function StaffVisual() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] dark:bg-[#161B22]/95 dark:border-gray-700/80 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] flex flex-col gap-3 transition-colors duration-300">
      <div className="text-[0.82rem] font-bold text-gray-800 dark:text-gray-100">Staff On Shift Today</div>
      {[
        { dot:"#3DBC9B", name:"Ravi Kumar", role:"Cashier", tag:"On duty",  tc:"bg-[#ECFDF5] text-[#3DBC9B]" },
        { dot:"#3DBC9B", name:"Priya S.",   role:"Waiter",  tag:"On duty",  tc:"bg-[#ECFDF5] text-[#3DBC9B]" },
        { dot:"#3DBC9B", name:"Arun M.",    role:"Chef",    tag:"Break",    tc:"bg-[#ECFDF5] text-[#3DBC9B]" },
        { dot:"#3DBC9B", name:"Deepa R.",   role:"Manager", tag:"Off today",tc:"bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400" },
      ].map((r)=>(
        <div key={r.name} className="flex items-center gap-3 bg-gray-50 dark:bg-[#0B0E11] rounded-lg px-4 py-3 border border-gray-100 dark:border-gray-700/80 text-[0.82rem]">
          <span className="w-2 h-2 rounded-full shrink-0" style={{background:r.dot}}/>
          <span className="font-semibold text-gray-800 dark:text-gray-100 flex-1">{r.name}</span>
          <span className="text-[0.75rem] text-gray-500 dark:text-gray-400 flex-1">{r.role}</span>
          <span className={`px-2 py-0.5 rounded-full text-[0.68rem] font-semibold ${r.tc}`}>{r.tag}</span>
        </div>
      ))}
    </div>
  );
}

function ReportsVisual() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] dark:bg-[#161B22]/95 dark:border-gray-700/80 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] flex flex-col gap-3 transition-colors duration-300">
      <div className="flex justify-between text-[0.82rem] font-bold text-gray-800 dark:text-gray-100">
        <span>This Week's Performance</span><span className="text-[#3DBC9B]">↑ 18% vs last week</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 dark:bg-[#0B0E11] rounded-lg p-3 border border-transparent dark:border-gray-700/60"><div className="text-[0.72rem] text-gray-500 dark:text-gray-400 mb-1">Total Revenue</div><div className="text-[1.2rem] font-bold text-gray-800 dark:text-gray-100">₹1,84,220</div></div>
        <div className="bg-gray-50 dark:bg-[#0B0E11] rounded-lg p-3 border border-transparent dark:border-gray-700/60"><div className="text-[0.72rem] text-gray-500 dark:text-gray-400 mb-1">Total Orders</div><div className="text-[1.2rem] font-bold text-gray-800 dark:text-gray-100">892</div></div>
      </div>
      <div className="text-[0.82rem] font-bold text-gray-800 dark:text-gray-100">Top Items This Week</div>
      {[["Biryani","90%","#3DBC9B","₹42k"],["Thali","68%","#3DBC9B","₹31k"],["Lassi","45%","#3DBC9B","₹18k"]].map(([l,w,c,v])=>(
        <div key={l} className="flex items-center gap-2 text-[0.7rem]">
          <span className="text-gray-500 dark:text-gray-400 w-10">{l}</span>
          <div className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"><div className="h-full rounded-full" style={{width:w,background:c}}/></div>
          <span className="font-semibold text-gray-800 dark:text-gray-100 w-8 text-right">{v}</span>
        </div>
      ))}
    </div>
  );
}

function MultiVisual() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] dark:bg-[#161B22]/95 dark:border-gray-700/80 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] flex flex-col gap-3 transition-colors duration-300">
      <div className="text-[0.82rem] font-bold text-gray-800 dark:text-gray-100">All Branches — Live Revenue</div>
      {[
        { dot:"#3DBC9B", name:"Irving (Demo HQ)", sub:"14 tables", rev:"₹12,840" },
        { dot:"#3DBC9B", name:"T. Nagar",         sub:"10 tables", rev:"₹9,220"  },
        { dot:"#3DBC9B", name:"OMR Branch",        sub:"8 tables",  rev:"₹6,390"  },
      ].map((r)=>(
        <div key={r.name} className="flex items-center gap-3 bg-gray-50 dark:bg-[#0B0E11] rounded-lg px-4 py-3 border border-gray-100 dark:border-gray-700/80 text-[0.82rem]">
          <span className="w-2 h-2 rounded-full shrink-0" style={{background:r.dot}}/>
          <span className="font-semibold text-gray-800 dark:text-gray-100 flex-1">{r.name}</span>
          <span className="text-[0.75rem] text-gray-500 dark:text-gray-400 flex-1">{r.sub}</span>
          <span className="font-bold text-gray-800 dark:text-gray-100">{r.rev}</span>
        </div>
      ))}
      <div className="border-t border-gray-100 dark:border-gray-700 pt-3 flex justify-between text-[0.85rem] font-bold text-gray-800 dark:text-gray-100">
        <span>Total Revenue Today</span><span>₹28,450</span>
      </div>
    </div>
  );
}

const VISUALS = { pos:<PosVisual/>, menu:<MenuVisual/>, inventory:<InventoryVisual/>, staff:<StaffVisual/>, reports:<ReportsVisual/>, multi:<MultiVisual/> };

/* ═══════════════════════════════════════════════════════════ */
export default function RestroSuitePage() {
  const [activeTab, setActiveTab] = useState<FeatureTabId>("pos");
  const [openFaq,   setOpenFaq]   = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const serif = "font-[family-name:var(--font-dm-serif,'DM_Serif_Display',serif)]";

  return (
    <div className="font-[family-name:var(--font-dm-sans,'DM_Sans',sans-serif)] text-gray-800 bg-white dark:bg-[var(--prim-dark-bg)] dark:text-gray-100 leading-relaxed antialiased mt-20 transition-colors duration-300">

      {/* ─── HERO ─── */}
      <section className="px-[5%] pt-[100px] pb-20 relative overflow-hidden text-[var(--text-black)] dark:text-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-[#DAF8F1] to-transparent dark:from-[#0D2244]/70 dark:to-transparent pointer-events-none rounded-b-4xl -z-10 transition-colors duration-300"/>
        <div className="max-w-[1200px]  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 bg-white dark:bg-[#161B22]/95 text-[#3DBC9B] dark:text-[#5EEAD4] px-3.5 py-1.5 rounded-full text-[0.8rem] font-semibold mb-6 border border-[rgba(61,188,155,0.3)] dark:border-[#5EEAD4]/35 shadow-[0px_2px_6px_rgba(0,0,0,0.06)] dark:shadow-[0_0_20px_rgba(94,234,212,0.08)] transition-colors duration-300">
              <span className="w-[7px] h-[7px] bg-[#3DBC9B] rounded-full"/>
              Trusted by 500+ F&B Businesses across India
            </div> <br />
            <h1 className="capitalize text-xl xl:text-4xl font-black text-gray-900 dark:text-gray-100 inline">
              Run your restaurant<br/>like a <em className="not-italic italic" style={{WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundImage:"linear-gradient(to right,#3DBC9B,#3DBC9B)"}}>pro.</em><br/>Grow it faster.
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 first-letter:uppercase font-medium py-5">
              All-in-one restaurant & hotel management software — POS billing, table management, KOT, inventory, staff & real-time reports. No complexity, just results.
            </p>
            <div className="flex gap-3.5 flex-wrap mb-12">
              <a href="/point_of_sale" className="inline-flex items-center px-8 py-3.5 rounded-md text-sm font-semibold text-white hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(61,188,155,0.35)] transition-all no-underline" style={{background:"linear-gradient(to bottom right,#3DBC9B,#3DBC9B)"}}>Start Free 14-Day Trial →</a>
              <a href="#demo" className="inline-flex items-center px-8 py-[13px] rounded-md text-sm font-semibold border border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:-translate-y-1 hover:shadow-[0px_3px_6px_rgba(0,0,0,0.07)] dark:border-gray-600 dark:bg-[#161B22]/95 dark:text-gray-200 dark:hover:border-[#5EEAD4]/40 dark:hover:shadow-[0_0_20px_rgba(94,234,212,0.12)] transition-all no-underline">Book a Live Demo</a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex">
                {[["RS","#3DBC9B"],["MK","#3DBC9B"],["AP","#3DBC9B"],["VR","#3DBC9B"]].map(([i,c],idx)=>(
                  <span key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-[var(--prim-dark-bg)] flex items-center justify-center text-[0.7rem] font-bold text-white" style={{background:c,marginLeft:idx===0?0:-8}}>{i}</span>
                ))}
              </div>
              <p className="text-[0.85rem] text-gray-500 dark:text-gray-400"><strong className="text-gray-800 dark:text-gray-100">500+ restaurants</strong> switched from manual billing this year</p>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="bg-white dark:bg-[#161B22]/95 rounded-2xl shadow-[0px_4px_16px_rgba(0,0,0,0.10)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.45)] border border-gray-200 dark:border-gray-700/80 overflow-hidden transition-colors duration-300">
            <div className="px-5 py-3.5 flex items-center gap-2 dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.15)]" style={{background:"linear-gradient(to right,#3DBC9B,#3DBC9B)"}}>
              <span className="w-2.5 h-2.5 rounded-full bg-white/30"/><span className="w-2.5 h-2.5 rounded-full bg-white/30"/><span className="w-2.5 h-2.5 rounded-full bg-white/30"/>
              <span className="text-[0.78rem] text-white/80 font-medium ml-2">RestroSuite Dashboard — Live View</span>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-[#0B0E11] transition-colors duration-300">
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label:"Today's Revenue", val:"₹28,450", change:"↑ 14% vs yesterday",   cc:"text-[#3DBC9B]" },
                  { label:"Orders Today",    val:"142",     change:"↑ 22 from last week",    cc:"text-[#3DBC9B]" },
                  { label:"Active Tables",   val:"8/14",    change:"57% occupied",            cc:"text-[#3DBC9B]" },
                ].map((s)=>(
                  <div key={s.label} className="bg-white dark:bg-[#161B22]/90 rounded-xl p-3.5 border border-gray-100 dark:border-gray-700/80 shadow-[0px_2px_6px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-colors duration-300">
                    <div className="text-[0.72rem] text-gray-500 dark:text-gray-400 font-medium mb-1">{s.label}</div>
                    <div className={` text-[1.3rem] font-bold text-gray-800 dark:text-gray-100`}>{s.val}</div>
                    <div className={`text-[0.7rem] font-semibold ${s.cc}`}>{s.change}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white dark:bg-[#161B22]/90 rounded-xl p-4 border border-gray-100 dark:border-gray-700/80 mb-3 shadow-[0px_2px_6px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-colors duration-300">
                <div className="flex justify-between items-center text-[0.78rem] font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  <span>Live Orders</span><span className="text-gray-400 dark:text-gray-500 font-normal">Updated just now</span>
                </div>
                {[
                  { num:"#1042", table:"Table 4",  items:"Biryani, Lassi ×2",   amt:"₹680",   status:"New",       sc:"bg-[#ECFDF5] text-[#3DBC9B]]" },
                  { num:"#1041", table:"Table 7",  items:"Thali ×3, Dessert",    amt:"₹1,240", status:"Preparing", sc:"bg-[#ECFDF5] text-[#3DBC9B]" },
                  { num:"#1040", table:"Takeaway", items:"Wrap ×2, Cold coffee", amt:"₹480",   status:"Done",      sc:"bg-[#ECFDF5] text-[#3DBC9B]" },
                ].map((o)=>(
                  <div key={o.num} className="flex items-center gap-2.5 py-2 border-b border-gray-50 dark:border-gray-700/80 last:border-0 last:pb-0 text-[0.78rem]">
                    <span className="font-semibold text-gray-800 dark:text-gray-100 w-14">{o.num}</span>
                    <span className="text-gray-500 dark:text-gray-400 flex-1">{o.table}</span>
                    <span className="text-gray-500 dark:text-gray-400">{o.items}</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-100 w-14 text-right">{o.amt}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[0.68rem] font-semibold ${o.sc}`}>{o.status}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white dark:bg-[#161B22]/90 rounded-xl p-3.5 border border-gray-100 dark:border-gray-700/80 shadow-[0px_2px_6px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-colors duration-300">
                  <div className="text-[0.72rem] text-gray-500 dark:text-gray-400 font-medium mb-2">Top Selling Items</div>
                  {[["Biryani","85%","#3DBC9B","42"],["Thali","62%","#3DBC9B","31"],["Wrap","44%","#3DBC9B","22"]].map(([l,w,c,v])=>(
                    <div key={l} className="flex items-center gap-2 mb-1.5 text-[0.7rem]">
                      <span className="text-gray-500 dark:text-gray-400 w-10">{l}</span>
                      <div className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"><div className="h-full rounded-full" style={{width:w,background:c}}/></div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100 w-6 text-right">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white dark:bg-[#161B22]/90 rounded-xl p-3.5 border border-gray-100 dark:border-gray-700/80 shadow-[0px_2px_6px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-colors duration-300">
                  <div className="text-[0.72rem] text-gray-500 dark:text-gray-400 font-medium mb-2">Kitchen Queue (KOT)</div>
                  {[["T4","#3DBC9B","Biryani × 1, Lassi × 2"],["T7","#3DBC9B","Veg Thali × 3"],["TO","#3DBC9B","Wrap × 2, Coffee × 1"]].map(([b,c,t])=>(
                    <div key={b} className="flex items-center gap-2 mb-2">
                      <span className="w-[22px] h-[22px] rounded-[6px] flex items-center justify-center text-[0.6rem] font-bold text-white shrink-0" style={{background:c}}>{b}</span>
                      <span className="text-[0.75rem] text-gray-700 dark:text-gray-300">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRANDS ─── */}
   <div className="px-[5%] py-12 border-b border-gray-100 dark:border-gray-800">
  <div className="max-w-[1200px] mx-auto">
    
    <div className="text-xl font-bold whitespace-normal my-3 text-center text-gray-800 dark:text-gray-100 mx-auto">
      Trusted by restaurants, cafes, hotels & cloud kitchens across India
    </div>

    <div className="flex items-center justify-center mt-20 gap-10 flex-wrap">

      {[
        "/upload/rms/spice_garden.png",
        "/upload/rms/breveandbite.png",
        "/upload/rms/buffet.jpg",
        "/upload/rms/magistic.jpg",
        "/upload/rms/quickbite.avif",
        "/upload/rms/the_cloud_bite_kitchen-removebg-preview.png",
      ].map((src, i) => (
        <div
          key={i}
          className="w-[140px] h-[70px] flex items-center justify-center bg-white dark:bg-[#161B22]/80 rounded-md border border-transparent dark:border-gray-700/50 transition-colors duration-300"
        >
          <Image
            src={src}
            alt="brand logo"
            width={120}
            height={60}
            className="object-contain transition duration-300"
          />
        </div>
      ))}

    </div>
  </div>
</div>

      {/* ─── FOR WHO ─── */}
      <section className="px-[5%] py-24 bg-gray-50 dark:bg-[#0B0E11] transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[#3DBC9B] dark:text-[#5EEAD4] text-[0.78rem] font-bold uppercase tracking-[0.06em] px-3.5 py-1.5 rounded-full mb-4 border border-[rgba(61,188,155,0.3)] dark:border-[#5EEAD4]/35 bg-white dark:bg-[#161B22]/90 transition-colors duration-300">Built for everyone in F&B</span>
            <h2 className={` text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4`}>One platform. Every type of <em className="not-italic italic" style={{WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundImage:"linear-gradient(to right,#3DBC9B,#3DBC9B)"}}>food business.</em></h2>
            <p className="text-[1.05rem] text-gray-500 dark:text-gray-400 max-w-[560px] mx-auto leading-[1.7]">Whether you run a single cafe or a multi-branch hotel chain, RestroSuite adapts to your operations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: UtensilsCrossed, bg:"#DAF8F1", title:"Restaurants & Cafes", desc:"Full dine-in management — tables, orders, KOT, billing and staff performance in one screen." },
              { icon: Hotel,           bg:"#EFF6FF", title:"Hotels with F&B",      desc:"Manage your restaurant, room service, bar and banquet from a single integrated dashboard." },
              { icon: CloudLightning,  bg:"#ECFDF5", title:"Cloud Kitchens",       desc:"Handle multiple brands, Swiggy/Zomato order sync, packaging tracking and delivery billing." },
              { icon: Zap,             bg:"#F5F3FF", title:"QSRs & Food Chains",   desc:"High-volume, fast-turn billing with multi-branch control, centralized menu and real-time MIS." },
            ].map((c)=>(
              <div key={c.title} className="bg-white dark:bg-[#161B22]/95 rounded-xl p-7 border border-gray-200 dark:border-gray-700/80 shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] dark:shadow-[0_8px_28px_rgba(0,0,0,0.4)] hover:-translate-y-4 hover:shadow-[0px_5px_10px_rgba(0,0,0,0.07),0px_-5px_10px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_12px_32px_rgba(94,234,212,0.08)] transform transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background:c.bg}}>
                  <c.icon size={22} color="#3DBC9B" strokeWidth={1.5} className="dark:opacity-95"/>
                </div>
                <h3 className="font-bold text-[1.05rem] text-gray-800 dark:text-gray-100 mb-2">{c.title}</h3>
                <p className="text-[0.88rem] text-gray-500 dark:text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="px-[5%] py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#EFF6FF] dark:bg-[#161B22]/90 text-[#3DBC9B] dark:text-[#5EEAD4] text-[0.78rem] font-bold uppercase tracking-[0.06em] px-3.5 py-1.5 rounded-full mb-4 border border-[rgba(55,167,255,0.2)] dark:border-[#5EEAD4]/25 transition-colors duration-300">Simple setup</span>
            <h2 className={` text-4xl ] font-bold leading-[1.2] text-gray-800 dark:text-gray-100 mb-4`}>Up and running in <em className="not-italic italic" style={{WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundImage:"linear-gradient(to right,#3DBC9B,#3DBC9B)"}}>under a day.</em></h2>
            <p className="text-[1.05rem] text-gray-500 dark:text-gray-400 max-w-[560px] mx-auto leading-[1.7]">No technical team needed. Our onboarding team handles setup, training, and go-live support.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gray-200 dark:bg-gray-700"/>
            {[
              { n:"1", title:"Sign up & configure",   desc:"Create your account, add your menu, set up tables and branches in under 30 minutes." },
              { n:"2", title:"Train your team",        desc:"Our team conducts a live onboarding session — staff gets comfortable in one sitting." },
              { n:"3", title:"Go live & take orders",  desc:"Start billing, sending KOTs, and tracking inventory from day one — no downtime." },
              { n:"4", title:"Grow with insights",     desc:"Use daily reports, best-seller data, and staff performance to make smarter decisions." },
            ].map((s)=>(
              <div key={s.n} className="text-center px-4 relative z-10">
                <div className={`w-14 h-14 rounded-full border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-[#161B22]/95 flex items-center justify-center  text-[1.3rem] font-bold mx-auto mb-5 shadow-[0px_2px_6px_rgba(0,0,0,0.07)] dark:shadow-[0_0_20px_rgba(94,234,212,0.12)] transition-colors duration-300`} style={{color:"#3DBC9B"}}>{s.n}</div>
                <h3 className="font-bold text-[1rem] text-gray-800 dark:text-gray-100 mb-2">{s.title}</h3>
                <p className="text-[0.85rem] text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <div className="px-[5%] py-12 dark:shadow-[inset_0_0_60px_rgba(0,0,0,0.2)]" style={{background:"linear-gradient(to bottom right,#3DBC9B,#3DBC9B)"}}>
        <div className="max-w-[1200px] mx-auto font-bold grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[["500+","Active Businesses"],["2.3L+","Orders Processed Monthly"],["99.9%","Platform Uptime"],["4.8★","Average Customer Rating"]].map(([n,l])=>(
            <div key={l} className="text-center">
              <span className={`block  text-[2.5rem] text-white`}>{n}</span>
              <div className="text-[0.88rem] text-white/75 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── FEATURES ─── */}
      
      <section id="features" className="px-[5%] py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#ECFDF5] dark:bg-[#161B22]/90 text-[#3DBC9B] dark:text-[#5EEAD4] text-[0.78rem] font-bold uppercase tracking-[0.06em] px-3.5 py-1.5 rounded-full mb-4 border border-[rgba(61,188,155,0.2)] dark:border-[#5EEAD4]/25 transition-colors duration-300">Full feature suite</span>
            <h2 className={` text-[clamp(1.9rem,3vw,2.7rem)] leading-[1.2] text-gray-800 dark:text-gray-100 mb-4 font-bold`}>Everything your restaurant needs — <em className="not-italic italic" style={{WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundImage:"linear-gradient(to right,#3DBC9B,#3DBC9B)"}}>nothing it doesn&apos;t.</em></h2>
            <p className="text-[1.05rem] text-gray-500 dark:text-gray-400 max-w-[560px] mx-auto leading-[1.7]">Explore the modules built to handle every corner of your food business operations.</p>
          </div>
          {/* Tabs */}
          <div className="flex gap-2 flex-wrap mb-12">
            {TABS.map((t)=>(
              <button key={t.id} onClick={()=>setActiveTab(t.id)} className={`px-5 py-2 rounded-full border text-[0.88rem] font-semibold cursor-pointer transition-all ${activeTab===t.id?"text-white border-transparent":"bg-white text-gray-500 border-gray-200 hover:border-gray-400 dark:bg-[#161B22]/90 dark:text-gray-400 dark:border-gray-600 dark:hover:border-[#5EEAD4]/35"}`} style={activeTab===t.id?{background:"linear-gradient(to right,#3DBC9B,#3DBC9B)",border:"none"}:{}}>{t.label}</button>
            ))}
          </div>
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid gap-5">
              {FEAT[activeTab].map((f)=>{
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-600 shadow-[0px_2px_6px_rgba(0,0,0,0.06)] dark:shadow-[0_0_16px_rgba(94,234,212,0.08)] transition-colors duration-300" style={{background:"linear-gradient(to bottom right,#DAF8F1,#EFF6FF)"}}>
                      <Icon size={18} color="#3DBC9B" strokeWidth={1.5} className="dark:opacity-90"/>
                    </div>
                    <div>
                      <h4 className="font-bold text-[0.95rem] text-gray-800 dark:text-gray-100 mb-1">{f.title}</h4>
                      <p className="text-[0.85rem] text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {VISUALS[activeTab]}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="px-[5%] py-24 bg-gray-50 dark:bg-[#0B0E11] transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#ECFDF5] dark:bg-[#161B22]/90 text-[#3DBC9B] dark:text-[#5EEAD4] text-[0.78rem] font-bold uppercase tracking-[0.06em] px-3.5 py-1.5 rounded-full mb-4 border border-[rgba(56,167,111,0.2)] dark:border-[#5EEAD4]/25 transition-colors duration-300">Simple pricing</span>
            <h2 className={` text-[clamp(1.9rem,3vw,2.7rem)] leading-[1.2] text-gray-800 dark:text-gray-100 font-bold mb-4`}>Plans that grow <em className="not-italic italic" style={{WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundImage:"linear-gradient(to right,#3DBC9B,#3DBC9B)"}}>with your business.</em></h2>
            <p className="text-[1.05rem] text-gray-500 dark:text-gray-400 max-w-[560px] mx-auto leading-[1.7]">No hidden fees, no per-transaction charges. Pay for what you need. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[900px] mx-auto items-start">

            {/* Starter */}
            <div className="bg-white dark:bg-[#161B22]/95 rounded-2xl p-9 border border-gray-200 dark:border-gray-700/80 shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors duration-300">
              <div className="text-[0.78rem] font-bold uppercase tracking-[0.08em] text-gray-400 dark:text-gray-500 mb-3">Starter</div>
              <div className={` text-[1.5rem] text-gray-800 dark:text-gray-100 mb-2`}>Starter</div>
              <p className="text-[0.85rem] text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">Perfect for single-outlet cafes and small restaurants getting started.</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[1.1rem] font-bold text-gray-800 dark:text-gray-100">₹</span>
                <span className={` text-[3rem] text-gray-800 dark:text-gray-100 leading-none`}>1,499</span>
                <span className="text-[0.85rem] text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <p className="text-[0.78rem] text-gray-400 dark:text-gray-500 mb-7">Billed annually · ₹1,799/mo monthly</p>
              <div className="h-px bg-gray-100 dark:bg-gray-700 mb-6"/>
              <ul className="space-y-3 mb-8">
                {[["✓","1 outlet, up to 20 tables",true],["✓","POS billing & GST invoicing",true],["✓","KOT & kitchen management",true],["✓","Menu management (digital + QR)",true],["✓","Basic inventory tracking",true],["✓","Daily & weekly reports",true],["✓","5 staff logins",true],["✕","Multi-branch management",false],["✕","Advanced analytics",false]].map(([sym,txt,ok],i)=>(
                  <li key={i} className="flex items-start gap-2.5 text-[0.88rem] text-gray-600 dark:text-gray-300">
                    <span className={`mt-0.5 shrink-0 font-bold ${ok?"text-[#3DBC9B] dark:text-[#5EEAD4]":"text-gray-300 dark:text-gray-600"}`}>{sym}</span>{txt}
                  </li>
                ))}
              </ul>
              <Link href="/point_of_sale" className="w-full flex items-center justify-center py-3.5 rounded-md text-[0.9rem] font-semibold border border-gray-200 text-gray-700 hover:border-gray-400 hover:-translate-y-1 hover:shadow-[0px_3px_6px_rgba(0,0,0,0.07)] dark:border-gray-600 dark:bg-[#0B0E11] dark:text-gray-200 dark:hover:border-[#5EEAD4]/40 transform transition-all no-underline">Get Started Free →</Link>
            </div>

            {/* Growth */}
            <div className="bg-white dark:bg-[#161B22]/95 rounded-2xl p-9 border-2 border-[#3DBC9B] dark:border-[#5EEAD4]/50 shadow-[0px_5px_16px_rgba(61,188,155,0.18)] dark:shadow-[0_8px_36px_rgba(94,234,212,0.15)] relative transition-colors duration-300">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[0.72rem] font-bold px-4 py-1 rounded-full whitespace-nowrap" style={{background:"linear-gradient(to right,#3DBC9B,#3DBC9B)"}}>Most Popular</div>
              <div className="text-[0.78rem] font-bold uppercase tracking-[0.08em] text-gray-400 dark:text-gray-500 mb-3">Growth</div>
              <div className={` text-[1.5rem] text-gray-800 dark:text-gray-100 mb-2`}>Growth</div>
              <p className="text-[0.85rem] text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">For growing restaurants and hotels that need more power and insights.</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[1.1rem] font-bold text-gray-800 dark:text-gray-100">₹</span>
                <span className={` text-[3rem] text-gray-800 dark:text-gray-100 leading-none`}>3,299</span>
                <span className="text-[0.85rem] text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <p className="text-[0.78rem] text-gray-400 dark:text-gray-500 mb-7">Billed annually · ₹3,999/mo monthly</p>
              <div className="h-px bg-gray-100 dark:bg-gray-700 mb-6"/>
              <ul className="space-y-3 mb-8">
                {["Up to 3 outlets, unlimited tables","Everything in Starter","Advanced inventory & recipes","Staff attendance & payroll","Customer loyalty program","Online ordering integration","15 staff logins","Priority support (12-hr)","GST & MIS reports"].map((txt,i)=>(
                  <li key={i} className="flex items-start gap-2.5 text-[0.88rem] text-gray-600 dark:text-gray-300">
                    <span className="mt-0.5 shrink-0 font-bold text-[#3DBC9B] dark:text-[#5EEAD4]">✓</span>{txt}
                  </li>
                ))}
              </ul>
              <Link href="/point_of_sale" className="w-full flex items-center justify-center py-3.5 rounded-md text-[0.9rem] font-semibold text-white hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(61,188,155,0.35)] transform transition-all no-underline" style={{background:"linear-gradient(to right,#3DBC9B,#3DBC9B)"}}>Start Free Trial →</Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white dark:bg-[#161B22]/95 rounded-2xl p-9 border border-gray-200 dark:border-gray-700/80 shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors duration-300">
              <div className="text-[0.78rem] font-bold uppercase tracking-[0.08em] text-gray-400 dark:text-gray-500 mb-3">Enterprise</div>
              <div className={` text-[1.5rem] text-gray-800 dark:text-gray-100 mb-2`}>Enterprise</div>
              <p className="text-[0.85rem] text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">For hotel chains, large restaurant groups, and multi-city operations.</p>
              <div className="flex items-center mb-2">
                <span className={` text-[2rem] text-gray-800 dark:text-gray-100`}>Custom</span>
              </div>
              <p className="text-[0.78rem] text-gray-400 dark:text-gray-500 mb-7">Tailored pricing based on branches & volume</p>
              <div className="h-px bg-gray-100 dark:bg-gray-700 mb-6"/>
              <ul className="space-y-3 mb-8">
                {["Unlimited outlets & tables","Everything in Growth","Dedicated account manager","Custom integrations & API","White-label option","Unlimited staff logins","24/7 SLA support","On-site training & setup","Advanced BI & data exports"].map((txt,i)=>(
                  <li key={i} className="flex items-start gap-2.5 text-[0.88rem] text-gray-600 dark:text-gray-300">
                    <span className="mt-0.5 shrink-0 font-bold text-[#3DBC9B] dark:text-[#5EEAD4]">✓</span>{txt}
                  </li>
                ))}
              </ul>
              <Link href="/point_of_sale" className="w-full flex items-center justify-center py-3.5 rounded-md text-[0.9rem] font-semibold border border-gray-200 text-gray-700 hover:border-gray-400 hover:-translate-y-1 hover:shadow-[0px_3px_6px_rgba(0,0,0,0.07)] dark:border-gray-600 dark:bg-[#0B0E11] dark:text-gray-200 dark:hover:border-[#5EEAD4]/40 transform transition-all no-underline">Talk to Sales →</Link>
            </div>
          </div>
          <p className="text-center mt-8 text-[0.88rem] text-gray-500 dark:text-gray-400">All plans include a <strong className="text-gray-800 dark:text-gray-100">14-day free trial</strong>. No credit card required. Cancel anytime.</p>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimonials" className="px-[5%] py-24 bg-gray-50 dark:bg-[#0B0E11] transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-white dark:bg-[#161B22]/90 text-[#3DBC9B] dark:text-[#5EEAD4] text-[0.78rem] font-bold uppercase tracking-[0.06em] px-3.5 py-1.5 rounded-full mb-4 border border-[rgba(61,188,155,0.3)] dark:border-[#5EEAD4]/35 transition-colors duration-300">Real results</span>
            <h2 className={` text-[clamp(1.9rem,3vw,2.7rem)] leading-[1.2] text-gray-800 dark:text-gray-100 font-bold mb-4`}>Loved by restaurants <em className="not-italic italic" style={{WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundImage:"linear-gradient(to right,#3DBC9B,#3DBC9B)"}}>across India.</em></h2>
            <p className="text-[1.05rem] text-gray-500 dark:text-gray-400 max-w-[560px] mx-auto leading-[1.7]">From small cafes in Texas to regional chains—here&apos;s what our customers say.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { ini:"RS", bg:"#3DBC9B", quote:"We used to lose 30 minutes every day reconciling cash manually. RestroSuite's daily report takes 2 minutes. The KOT system alone saved us so much kitchen chaos.", name:"Ramesh Subramanian", role:"Owner, Spice Garden Restaurant — Texas" },
              { ini:"MK", bg:"#3DBC9B", quote:"Managing 3 branches was a nightmare before this. Now I check everything from my phone — revenue, orders, staff attendance — all live. Game changer for our hotel's F&B.", name:"Meera Krishnan", role:"F&B Manager, Hotel Majestic — Coimbatore" },
              { ini:"AP", bg:"#3DBC9B", quote:"Best decision for our cloud kitchen. The Swiggy/Zomato order sync is brilliant. Our packaging errors dropped to zero after the first week. Support team is super responsive.", name:"Arjun Pillai", role:"Founder, Cloud Bites Kitchen — Bangalore" },
            ].map((t)=>(
              <div key={t.ini} className="bg-white dark:bg-[#161B22]/95 rounded-xl p-7 border border-gray-200 dark:border-gray-700/80 shadow-[0px_3px_6px_rgba(0,0,0,0.07),0px_-3px_6px_rgba(0,0,0,0.07)] dark:shadow-[0_8px_28px_rgba(0,0,0,0.4)] hover:-translate-y-4 hover:shadow-[0px_5px_10px_rgba(0,0,0,0.07),0px_-5px_10px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_12px_32px_rgba(94,234,212,0.08)] transform transition-all duration-300">
                <div className="text-[#FBBF24] dark:text-[#FCD34D] text-[0.9rem] tracking-[2px] mb-4">★★★★★</div>
                <p className="text-[0.95rem] text-gray-600 dark:text-gray-300 leading-[1.7] mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-[0.85rem] shrink-0" style={{background:t.bg}}>{t.ini}</div>
                  <div>
                    <div className="text-[0.88rem] font-bold text-gray-800 dark:text-gray-100">{t.name}</div>
                    <div className="text-[0.78rem] text-gray-500 dark:text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="px-[5%] py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#EFF6FF] dark:bg-[#161B22]/90 text-[#3DBC9B] dark:text-[#5EEAD4] text-[0.78rem] font-bold uppercase tracking-[0.06em] px-3.5 py-1.5 rounded-full mb-4 border border-[rgba(55,167,255,0.2)] dark:border-[#5EEAD4]/25 transition-colors duration-300">Common questions</span>
            <h2 className={` text-[clamp(1.9rem,3vw,2.7rem)] leading-[1.2] font-bold text-gray-800 dark:text-gray-100`}>Everything you need to <em className="not-italic italic" style={{WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundImage:"linear-gradient(to right,#3DBC9B,#3DBC9B)"}}>know.</em></h2>
          </div>
          <div className="max-w-[780px] mx-auto space-y-4">
            {FAQ_DATA.map((f,i)=>(
              <div key={i} className="border border-gray-200 dark:border-gray-700/80 rounded-xl overflow-hidden shadow-[0px_2px_6px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-colors duration-300">
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full flex justify-between items-center gap-4 px-6 py-5 text-[0.95rem] font-semibold text-gray-800 dark:text-gray-100 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 text-left bg-white dark:bg-[#161B22]/95 transition-colors">
                  {f.q}
                  <ChevronDown size={18} className={`shrink-0 transition-transform duration-200 ${openFaq===i?"rotate-180 text-[#3DBC9B] dark:text-[#5EEAD4]":"text-gray-400 dark:text-gray-500"}`}/>
                </button>
                {openFaq===i && (
                  <div className="px-6 pb-5 pt-4 text-[0.9rem] text-gray-500 dark:text-gray-400 leading-[1.7] bg-white dark:bg-[#161B22]/95 border-t border-gray-100 dark:border-gray-700">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* ─── DEMO FORM ─── */}
       <section id="demo" className="px-[5%] py-24 relative overflow-hidden dark:shadow-[inset_0_0_80px_rgba(0,0,0,0.25)]" style={{background:"linear-gradient(to bottom right,#3DBC9B,#37A7FF)"}}>
        <div className="absolute inset-0 opacity-10 dark:opacity-[0.07] pointer-events-none" style={{backgroundImage:"radial-gradient(circle at 20% 50%,white 1px,transparent 1px),",backgroundSize:"40px 40px"}}/>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative">
          <div>
            <span className="inline-block bg-white/20 text-white text-[0.78rem] font-bold uppercase tracking-[0.06em] px-3.5 py-1.5 rounded-full mb-4">Book a Demo</span>
            <h2 className={` text-[clamp(1.9rem,3vw,2.7rem)] leading-[1.2] text-white font-bold  mb-4`}>See it live in <em className="text-white/80 not-italic italic">30 minutes.</em></h2>
            <p className="text-[1.05rem] text-white/75 max-w-[560px] leading-[1.7]">Our team will walk you through the software with your own menu and setup — so you see exactly what it looks like for your business.</p>
           <div className="mt-9 space-y-4">
  {(
    [
      [Target, "Personalised demo with your menu & table layout"],
      [Zap, "Live Q&A — ask anything, no sales pressure"],
      [Gift, "Free 14-day trial immediately after the call"],
      [Phone, "Onboarding support included — we set it up for you"],
    ] as [LucideIcon, string][]
  ).map(([Icon, txt]) => (
    <div key={txt} className="flex items-center gap-3 text-[0.9rem] text-white/80">
      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
        <Icon size={18} />
      </div>
      {txt}
    </div>
  ))}
</div>
          </div>
          <div className="bg-white dark:bg-[#161B22]/95 rounded-2xl p-10 shadow-[0px_5px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_48px_rgba(0,0,0,0.5)] border border-transparent dark:border-gray-700/60 transition-colors duration-300">
            <h3 className={` text-[1.4rem] text-gray-800 dark:text-gray-100 font-bold mb-1.5`}>Book your free demo</h3>
            <p className="text-[0.85rem] text-gray-500 dark:text-gray-400 mb-7">Fill in your details and we&apos;ll confirm a slot within 4 business hours.</p>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-[0.82rem] font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Your name *</label><input type="text" placeholder="Name" className="w-full px-3.5 py-2.5 border border-gray-200 dark:border-gray-600 rounded-md text-[0.9rem] text-gray-800 dark:text-gray-100 dark:bg-[#0B0E11] outline-none focus:border-[#3DBC9B] dark:focus:border-[#5EEAD4] transition-colors shadow-[0px_1px_3px_rgba(0,0,0,0.04)]"/></div>
              <div><label className="block text-[0.82rem] font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Phone number *</label><input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-3.5 py-2.5 border border-gray-200 dark:border-gray-600 rounded-md text-[0.9rem] text-gray-800 dark:text-gray-100 dark:bg-[#0B0E11] outline-none focus:border-[#3DBC9B] dark:focus:border-[#5EEAD4] transition-colors shadow-[0px_1px_3px_rgba(0,0,0,0.04)]"/></div>
            </div>
            <div className="mt-4"><label className="block text-[0.82rem] font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Business email</label><input type="email" placeholder="your@gmail.com" className="w-full px-3.5 py-2.5 border border-gray-200 dark:border-gray-600 rounded-md text-[0.9rem] text-gray-800 dark:text-gray-100 dark:bg-[#0B0E11] outline-none focus:border-[#3DBC9B] dark:focus:border-[#5EEAD4] transition-colors shadow-[0px_1px_3px_rgba(0,0,0,0.04)]"/></div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-[0.82rem] font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Type of business *</label>
                <select className="w-full px-3.5 py-2.5 border border-gray-200 dark:border-gray-600 rounded-md text-[0.9rem] text-gray-800 dark:text-gray-100 outline-none focus:border-[#3DBC9B] dark:focus:border-[#5EEAD4] transition-colors bg-white dark:bg-[#0B0E11] shadow-[0px_1px_3px_rgba(0,0,0,0.04)]">
                  <option value="">Select type</option>
                  {["Standalone Restaurant","Cafe / Bakery","Hotel with Restaurant","Cloud Kitchen","QSR / Food Chain","Bar / Lounge","Other"].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[0.82rem] font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Number of outlets</label>
                <select className="w-full px-3.5 py-2.5 border border-gray-200 dark:border-gray-600 rounded-md text-[0.9rem] text-gray-800 dark:text-gray-100 outline-none focus:border-[#3DBC9B] dark:focus:border-[#5EEAD4] transition-colors bg-white dark:bg-[#0B0E11] shadow-[0px_1px_3px_rgba(0,0,0,0.04)]">
                  <option value="">Select</option>
                  {["1 outlet","2–3 outlets","4–10 outlets","10+ outlets"].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-[0.82rem] font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Anything specific you want to see?</label>
              <textarea placeholder="e.g. I want to see how the KOT works, or how GST reports are generated..." rows={3} className="w-full px-3.5 py-2.5 border border-gray-200 dark:border-gray-600 rounded-md text-[0.9rem] text-gray-800 dark:text-gray-100 dark:bg-[#0B0E11] outline-none focus:border-[#3DBC9B] dark:focus:border-[#5EEAD4] transition-colors resize-y min-h-[90px] shadow-[0px_1px_3px_rgba(0,0,0,0.04)]"/>
            </div>
            <button onClick={()=>setSubmitted(true)} disabled={submitted} className={`w-full mt-4 py-3.5 rounded-md text-[0.95rem] font-semibold border-none transition-all cursor-pointer text-white ${submitted?"opacity-90":""}`} style={submitted?{background:"#3DBC9B"}:{background:"linear-gradient(to right,#3DBC9B,#37A7FF)"}}>
              {submitted ? "✓ Demo Booked! We'll confirm within 4 hours." : "Book My Free Demo →"}
            </button>
            <p className="text-[0.75rem] text-gray-400 dark:text-gray-500 text-center mt-3">No spam, ever. Your details are only used to schedule the demo.</p>
          </div>
        </div>
      </section>
 
    </div>
  );
}