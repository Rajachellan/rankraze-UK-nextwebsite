import Image from "next/image";
import { Bot,ShoppingCart,HeartPulse,Landmark,Truck,Gavel} from "lucide-react"
import Link from "next/link";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "AI-Powered Chatbot Development Services | Rankraze US",
    description: "Rankraze builds AI chatbots and conversational assistants for websites, apps, and support teams—deployed for US brands with monitoring and iteration.",
    
keywords: [
    "AI chatbot services",
    "chatbot development company",
    "AI chatbot development USA",
    "AI chatbot Dallas",
    "chatbot services in Texas",
    "AI bots for business",
    "custom chatbot development",
    "AI-powered customer support",
    "conversational AI USA",
    "chatbot agency Texas",
    "WhatsApp chatbot",
    "AI chatbot for websites",
    "chatbot developers USA",
    "AI chatbot services in Dallas",
    "intelligent chatbot solution",
    "chatbot company in Texas",
    "voice chatbot development",
    "NLP chatbot developers",
    "Rankraze chatbot services",
    "chatbot for ecommerce"
],




                
    alternates: {
        canonical: "https://rankraze.us/ai-powered-chatbot-services",
    },

    openGraph: {
        title: "AI-Powered Chatbot Development Services | Rankraze India",
        description: "Boost customer engagement with AI-powered chatbot services from Rankraze. We build intelligent bots for websites, apps & more. Available across India & globally.",
        url: "https://rankraze.us/ai-powered-chatbot-services",
        siteName: "Rankraze",
        images: [
        {
            url: "upload/services/ai-powered-chatbot-1.webp",
            width: 399,
            height: 438,
            alt: "ai-powered-chatbot-services",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}


export default function AipoweredchatbotPage(){
    return(
        <>
        <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0">
                    {/* left */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5 ">
                    <h1 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Smarter Conversations. Better Engagement. Real Results.
                    </h1>
                
                    <Link
                    href={"https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1"}
                    className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">
                    Get Started Today
                    </Link>
                </div>
            {/* right */}
                <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center py-2.5">
                    <Image
                        src="/upload/services/ai-powered-chatbot-1.webp"
                        alt="client-logo-1"
                        width={399}
                        height={438}
                        className="w-full object-cover rounded-lg static"
                    />
                </div>
                </div>
                <div className="absolute flex items-end justify-start w-full h-full bottom-0 left-0 -z-10 opacity-100 dark:opacity-75 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-cover bg-bottom"></div>
            </div>
        </section>

        <section className="w-full grid place-items-center dark:bg-[var(--popover)] mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-9 md:gap-12 lg:gap-14 xl:gap-16 bg-gray-100 pt-20">
             <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6">
                           <div className="w-full md:w-1/2  ">
                               <Image 
                               src="/upload/services/ai-powered-chatbot-2.webp"
                               alt="image-not-found.webp"
                               width={1024} height={630}
                               className="rounded-xl shadow-2xs "
                               />
                           </div>
                           <div className="w-full md:w-1/2 flex flex-col items justify-center p-2.5 gap-3 md:gap-4 xl:gap-5">
                               <h2 className="text-2xl md:text-3xl lg:text-4xl capitalize font-bold text-gray-800 dark:text-gray-200">
                              AI-Powered Chatbot Services
                               </h2>
                               <p className="text-300 leading-relaxed text-justify text-black dark:text-gray-400 tracking-wide xl:pr-12 2xl:pr-20">
Enhance customer experiences, automate support, and streamline operations with <span className="font-bold">AI-powered chatbots</span> from <span className="font-bold">Rankraze</span>. Our intelligent chatbots go far beyond scripted responses—they understand natural language, learn from interactions, and deliver meaningful conversations in real time.

Whether it’s customer service, lead generation, internal support, or e-commerce assistance, we design chatbots that are fully customized to your business needs and communication goals. 
                               </p>
                              
                           </div>
                       </div>
              <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl relative overflow-hidden">
                        <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                            <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                               What Our AI Chatbots Can Do
                            </h2>
                            <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5">
                                <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                    <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                      
                                        <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">24/7 Customer Support</h3>
                                        <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-md">
                                           Provide instant, round-the-clock responses to common customer queries—reducing wait times and support costs.
                                        </p>
                                    </div>
                                    <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                        <div className="h-full"></div>
                                        <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                    <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                        
                                        <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Multilingual Capabilities</h3>
                                        <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                           Engage with global audiences using chatbots that communicate fluently in multiple languages with contextual accuracy.
                                        </p>
                                    </div>
                                    <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                        <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                        <div className="h-full"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                    <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                        
                                        <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Omnichannel Integration</h3>
                                        <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                           Deploy across websites, mobile apps, WhatsApp, Facebook Messenger, Slack, and more—ensuring seamless communication across platforms.
                                        </p>
                                    </div>
                                    <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                        <div className="h-full"></div>
                                        <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                    <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                        
                                        <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Conversational Intelligence</h3>
                                        <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                       Powered by advanced NLP models like GPT, BERT, and Dialogflow, our chatbots understand intent, sentiment, and context for human-like interactions.
                                        </p>
                                    </div>
                                    <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                        <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                        <div className="h-full"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                    <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                        
                                        <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Lead Qualification & Conversion</h3>
                                        <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                           Automate lead capture, qualification, and handoff to sales teams—boosting your conversion rate without increasing workload.
                                        </p>
                                    </div>
                                    <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                        <div className="h-full"></div>
                                        <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                    <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                       
                                        <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Internal Process Automation</h3>
                                        <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                          Build bots that handle HR queries, IT support tickets, employee onboarding, and more to streamline internal operations.
                                        </p>
                                    </div>
                                    <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                        <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                        <div className="h-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl dark:shadow-white">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0">
                    {/* left */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5 ">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                    Why Choose Rankraze for Chatbots?
                    </h2>
                </div>
            {/* right */}
                <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center py-2.5">
                    <ul className="space-y-3">
                <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
                    <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B"/>
                    <span>AI-first architecture built for scalability and performance</span>
                </li>

                <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
                    <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B" />
                    <span>Custom NLP models tuned to your business vocabulary</span>
                </li>

                <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
                    <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B" />
                    <span>Integration with CRM, ERP, and backend systems</span>
                </li>
                <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
                    <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B" />
                    <span>Human handoff functionality with live agent support</span>
                </li>
                <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
                    <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B"/>
                    <span>Continuous learning and optimization for smarter responses over time</span>
                </li>
                
                </ul>
                </div>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl">
            <div className="bg-[var(--primary-blue)] w-full flex flex-col md:flex-row items-center md:items-stretch h-auto md:h-40 lg:h-56 px-4 md:px-8 lg:px-12 py-4 gap-4 md:gap-0 ">
            <div className="w-full md:w-1/5 h-40 md:h-full flex justify-center items-center">
                <Image
                src="/upload/services/custom-ai-3.webp"
                alt="business-consultant-mobile.webp"
                width={418}
                height={626}
                className="w-auto h-full  object-cover  rounded-xl shadow-2xs"
                />
            </div>

            <div className="w-full md:w-3/5 flex flex-col justify-center items-start px-2 md:px-4 text-white text-center md:text-left">
                <p className="text-lg md:text-xl text-white leading-snug font-bold ml-20">Your Virtual Assistant Is Just a Step Away</p>
                <p className="text-base md:text-lg  leading-snug ml-20">
                Transform how you engage with customers and teams.
            Let Rankraze build your next-gen AI chatbot—intelligent, efficient, and always available.
                </p>
            </div>

            <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center">
                <Link
                href={"https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1"}
                className="overflow-hidden capitalize text-sm md:text-base text-white px-5 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg"
                >
                Get a Free Consultation
                </Link>
            </div>

            </div>
            </div>

                           <div className="text-center py-3">
             <h2 className="text-4xl font-bold py-3 dark:text-[var(--card-foreground)]">Industries We Serve</h2>
           <p className="lg:text-xl md:text-lg tetx-sm ">Rankraze provides AI-driven computer vision services for various industries, including: </p>
             </div>
               <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6 lg:mt-9 xl:mt-12">
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300 dark:border-gray-50 rounded-md  cursor-pointer">
                    <ShoppingCart  size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                        Retail
                    </h3>
                   <p className="text-gray-700 text-center text-base dark:text-gray-400"> Recommendation engines, customer segmentation.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300 rounded-md cursor-pointer">
                    <HeartPulse  size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                        HealthCare
                    </h3>
                   <p className="text-gray-700 text-center text-base dark:text-gray-400">Diagnosis support, patient insights, predictive analytics.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300 rounded-md cursor-pointer">
                    <Landmark size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                       Finance
                    </h3>
                  <p className="text-gray-700 text-center text-base dark:text-gray-400">Fraud detection, risk scoring, algorithmic trading.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300  cursor-pointer">
                    <Truck size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                      Logistics
                    </h3>
                 <p className="text-gray-700 text-center text-base dark:text-gray-400" >Demand forecasting, route optimization.</p>
                </div>
                 
                 <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300 rounded-md cursor-pointer">
                    <Gavel size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                      Legal & Compliance
                    </h3>
              <p className="text-gray-700 text-center text-base dark:text-gray-400" >Contract analysis, legal research automation.</p>
                </div>
            </div>
            <section className="w-full grid place-items-center mb-10 mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
                        <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
                            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
                                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                                        Get in Touch with Rankraze
                                    </h2>
                                    <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                                        Get free Consultation and Discover What NLP Can Do for Your Business.
                                    </p>
                                    
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-2.5">
                                    <ContactForm />
                                </div>
                            </div>
                            <div className="absolute flex items-end justify-start w-full h-full bottom-0 left-0 -z-10 opacity-100 dark:opacity-75 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-cover bg-bottom">
                            </div>
                        </div>
            </section>
        </section>
        </>
    )
}