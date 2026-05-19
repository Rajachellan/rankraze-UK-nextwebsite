import Image from "next/image";
import Link from "next/link";
import {ChevronsRight,HousePlus,ShoppingCart,CarFront,ShieldMinus,Forklift,GraduationCap,Hospital,ChevronsLeftRight} from "lucide-react"
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Future-Ready AI Solutions - Rankraze",
    description: "Explore future-ready AI solutions by RankRaze to boost growth, automate tasks, and stay ahead in a competitive digital world.",
    
keywords: [
    
],



                
    alternates: {
        canonical: "https://rankraze.us/future-ready-ai-solutions",
    },

    openGraph: {
        title: "Future-Ready AI Solutions - Rankraze",
        description: "Future-ready AI from Rankraze—generative AI, agents, and RAG systems built for real US business workflows, security, and scale.",
        url: "https://rankraze.us/future-ready-ai-solutions",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/services/future-ai-2.webp",
            width: 321,
            height: 398,
            alt: "future-ai-2",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}
export default function FutureReadyAisolutionsPage(){
    return(
        <>
           <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
  <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#0384fc,#52c7a8),linear-gradient(to_bottom,#0384fc,#52c7a8)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
    <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0">
       <div className="w-full  md:w-2/5 flex items-center justify-center py-2.5">
        <Image
             src="/upload/services/future-ai-2.webp"
             alt="client-logo-1"
             width={321}
             height={398}
             className="w-full object-cover rounded-lg static"
           />
      </div>
        {/* left */}
      <div className="w-full md:w-3/3 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5 ">
        <h1 className="text-4xl lg:text-4xl xl:text-[42px] font-semibold text-center px-3 md:px-30  text-white md:text-left capitalize dark:text-gray-200 pr-4">
        AI Development Company in Texas
        </h1>
        <p className="text-sm md:text-2xl text-gray-700 px-3 md:px-30 text-white dark:text-gray-300 text-center md:text-left pr-4 py-3">
         Future-Ready AI Solutions 
        </p>
        <Link
          href="/contact-us"
          className="group overflow-hidden capitalize text-md mx-3 md:mx-30 text-black px-6 py-2.5 
                    relative bg-white rounded-lg"
        >
          <span
            className="absolute left-0 top-0 h-full w-0 bg-[var(--primary-blue)]
                      transition-all duration-500 rounded ease-out 
                      group-hover:w-full"
          ></span>

          <span className="relative z-10 group-hover:text-white transition-colors duration-500">
            Contact Us
          </span>
        </Link>


        
      </div>
{/* right */}
      <div className="w-full md:w-1/2 lg:w-3/4 flex items-center justify-center py-2.5">
        <Image
             src="/upload/services/future-ai-1.webp"
             alt="client-logo-1"
             width={545}
             height={584}
             className="w-full object-cover rounded-lg static"
           />
      </div>
    </div>
   
  </div>
</section>

  <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
  <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 ">
    <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0">
      
        <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center py-2.5">
        <Image
             src="/upload/future-ai-3.webp"
             alt="client-logo-1"
             width={730}
             height={472}
             className="w-full object-cover rounded-lg static"
           />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5 ">
        <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
        Redefining Innovation with AI-Powered Intelligence
        </h2>
        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4 py-3">
         At Rankraze, we help businesses future-proof their operations with cutting-edge AI development Services in Dallas. From Generative AI to AI Agents and RAG-based systems, we bring scalable, intelligent, and real-world solutions that solve your most pressing business challenges. As a forward-thinking AI development company, we blend strategy, data science, and automation to help you lead the AI revolution. 
        </p>
       
      </div>
    </div>
    <div className="absolute flex items-end justify-start w-full h-full bottom-0 left-0 -z-10 opacity-100 dark:opacity-75 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-cover bg-bottom"></div>
  </div>
</section>
 <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative bg-[#f0faf7] dark:bg-[var(--popover)] py-10 md:py-20">
    <h2 className="lg:text-4xl md:text-3xl tetx-xl font-semibold mt-10">Top AI Development Services We Offer</h2>
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 lg:gap-8 max-w-7xl">
      {/* card 1 */}
      <div className="w-full rounded-xl flex flex-row justify-between items-start p-5 md:p-6 lg:p-7 bg-white dark:bg-[#2d1d40] gap-4">
          
          <div className="flex flex-col gap-2 ">
              <h3 className="lg:text-2xl text-xl font-semibold text-gray-800  dark:text-gray-300 capitalize">
              Generative AI Solutions
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
              Harness the power of LLMs to generate content, code, and conversation. Build tools like smart assistants, content generators, and internal knowledge bots. 
              </p>
                <Image
              src="/upload/ai-service-1.webp"
              alt="client-logo-1"
              width={512}
              height={512}
              className="w-14 h-14 my-4 object-cover rounded-lg static dark:bg-white "
            />
          </div>
      </div>

      {/* card 2 */}
      <div className="w-full rounded-xl flex flex-row justify-between bg-white items-start p-5 md:p-6   dark:bg-[#2d1d40] lg:p-7 gap-4">
        

          <div className="flex flex-col gap-2">
              <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
                    AI Agents for Automation
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
            Deploy autonomous AI agents that can perform multi-step tasks—responding to emails, scheduling meetings, analyzing reports—without human input.
              </p>
              <Image
              src="/upload/ai-service-2.webp"
              alt="client-logo-1"
              width={512}
              height={512}
              className="w-14 h-14 my-4 object-cover rounded-lg dark:bg-white static"
            />
          </div>
      </div>

    {/* card 3 */}
      <div className="w-full rounded-xl flex flex-row justify-between bg-white items-start  dark:bg-[#2d1d40]  p-5 md:p-6 lg:p-7 gap-4">
      
          <div className="flex flex-col gap-2">
              <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
              Retrieval-Augmented Generation (RAG)
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
                Combine real-time data with generative models for accurate, contextual responses. Perfect for chatbots, knowledge bases, and customer support tools.
              </p>
              <Image
              src="/upload/ai-service-3.webp"
              alt="client-logo-1"
              width={512}
              height={512}
              className="w-14 h-14 my-4 object-cover dark:bg-white rounded-lg static"
            />
          </div>
      </div>
      {/* card 4 */}
      <div className="w-full rounded-xl flex flex-row justify-between items-start p-5 md:p-6 lg:p-7  dark:bg-[#2d1d40] bg-white  gap-4">
          
          <div className="flex flex-col gap-2 ">
              <h3 className="lg:text-2xl text-xl font-semibold text-gray-800  dark:text-gray-300 capitalize">
              Custom AI Software Development
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
              We design AI apps tailored to your needs—from predictive models to recommendation engines.
              </p>
              <Image
              src="/upload/ai-service-4.webp"
              alt="client-logo-1"
              width={512}
              height={512}
              className="w-14 h-14 my-4 object-cover dark:bg-white rounded-lg static"
            />
          </div>
      </div>

      {/* card 1 */}
      <div className="w-full rounded-xl flex flex-row items-start  dark:bg-[#2d1d40] p-5 md:p-6 lg:p-7 bg-white  gap-4">
          
          <div className="flex flex-col gap-2 ">
              <h3 className="lg:text-2xl text-xl font-semibold text-gray-800  dark:text-gray-300 capitalize">
              Machine Learning as a Service (MLaaS)
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
              Easily integrate machine learning into your workflows with hosted model training, APIs, and performance dashboards.
              </p>
              <Image
              src="/upload/ai-service-5.webp"
              alt="client-logo-1"
              width={512}
              height={512}
              className="w-14 h-14 my-4 object-cover dark:bg-white rounded-lg static"
            />
          </div>
      </div>

      {/* card 2 */}
      <div className="w-full rounded-xl flex flex-row bg-white items-start p-5 md:p-6   dark:bg-[#2d1d40] lg:p-7 gap-4">
        

          <div className="flex flex-col gap-2">
              <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
                AI-Driven Analytics & BI
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
            Turn massive datasets into actionable business insights using AI-powered data visualization and forecasting.
              </p>
              <Image
              src="/upload/ai-service-6.webp"
              alt="client-logo-1"
              width={512}
              height={512}
              className="w-14 h-14 my-4 object-cover dark:bg-white rounded-lg static"
            />
          </div>
      </div>

      {/* card 3 */}
      <div className="w-full rounded-xl flex flex-row bg-white items-start dark:bg-[#2d1d40] p-5 md:p-6 lg:p-7 gap-4">
          <div className="flex flex-col gap-2">
              <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
              AI-Powered Computer Vision
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
              Automate image recognition, object detection, surveillance, and video analytics with advanced CV tools.
              </p>
              <Image
              src="/upload/ai-service-7.webp"
              alt="client-logo-1"
              width={512}
              height={512}
              className="w-14 h-14 my-4 object-cover dark:bg-white rounded-lg static"
            />
          </div>
      </div>
      {/* card 4 */}
        <div className="w-full rounded-xl flex flex-row bg-white items-start dark:bg-[#2d1d40] p-5 md:p-6 lg:p-7 gap-4">
          <div className="flex flex-col gap-2">
              <h3 className="lg:text-2xl text-xl font-semibold text-gray-800 dark:text-gray-300 capitalize">
              NLP & Voice AI
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 tracking-wide">
              Build multilingual chatbots, voice assistants, and AI-based language tools using our NLP and speech recognition capabilities.
              </p>
              <Image
              src="/upload/ai-service-8.webp"
              alt="client-logo-1"
              width={512}
              height={512}
              className="w-14 h-14 my-4 object-cover dark:bg-white rounded-lg static"
            />
          </div>
      </div>
    </div>  
 </section>

  <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl dark:shadow-white">
     <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0">
         {/* left */}
       <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5 ">
         <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
          Redefining Innovation with AI-Powered Intelligence
         </h2>
       </div>
 {/* right */}
       <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center py-2.5">
         <ul className="space-y-3">
       <li className="flex gap-2 items-start">
         <ChevronsRight className="w-5 h-5 text-blue-600" color="#3DBC9B"/>
         <span>
          AI-Powered Virtual Employees</span>
       </li>
 
       <li className="flex gap-2 items-start">
         <ChevronsRight className="w-5 h-5 text-blue-600" color="#3DBC9B" />
         <span>Voice Cloning & AI Avatars</span>
       </li>
 
       <li className="flex gap-2 items-start">
         <ChevronsRight className="w-5 h-5 text-blue-600" color="#3DBC9B" />
         <span>AI-Generated Videos & Marketing Assets</span>
       </li>
        <li className="flex gap-2 items-start">
         <ChevronsRight className="w-5 h-5 text-blue-600" color="#3DBC9B" />
         <span>
          Predictive Maintenance for Manufacturing</span>
       </li>
        <li className="flex gap-2 items-start">
         <ChevronsRight className="w-5 h-5 text-blue-600" color="#3DBC9B"/>
         <span>
          AI in Cybersecurity</span>
       </li>
         <li className="flex gap-2 items-start">
         <ChevronsRight className="w-5 h-5 text-blue-600" color="#3DBC9B"/>
         <span>

        HR Automation</span>
       </li>
       <li className="flex gap-2 items-start">
         <ChevronsRight className="w-5 h-5 text-blue-600" color="#3DBC9B"/>
         <span>
         E-Commerce AI</span>
       </li>
     </ul>
       </div>
     </div>
   </div>
   
    <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl dark:shadow-white">
      <div className="text-center py-3">
          <h2 className="text-4xl  dark:text-white font-bold py-3">Industries We Serve</h2>
        
      </div>
      <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6 lg:mt-9 xl:mt-12">
          <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300 dark:border-gray-50 rounded-md  cursor-pointer">
              <ShoppingCart  size={40} color="#3DBC9B" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100 capitalize text-center">
                Health Care
              </h3>
            
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300 rounded-md cursor-pointer">
              <HousePlus  size={40} color="#3DBC9B" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                Real Estate
              </h3>
            
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300 rounded-md cursor-pointer">
              <Forklift size={40} color="#3DBC9B" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                Logistics
              </h3>
          
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300  cursor-pointer">
              <ShoppingCart size={40} color="#3DBC9B" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
              Retail & E-commerce
              </h3>
          
          </div>
          
          <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300 rounded-md cursor-pointer">
              <ShieldMinus size={40} color="#3DBC9B" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                Fin Tech
              </h3>
        
          </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6 lg:mt-9 xl:mt-12">
          <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300 dark:border-gray-50 rounded-md  cursor-pointer">
              <GraduationCap  size={40} color="#3DBC9B" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                Education
              </h3>
            
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300 rounded-md cursor-pointer">
              <Hospital size={40} color="#3DBC9B" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                Travel & Hospitality
              </h3>
            
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300 rounded-md cursor-pointer">
              <CarFront size={40} color="#3DBC9B" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                Automotive
              </h3>
            
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300  cursor-pointer">
              <ChevronsLeftRight size={40} color="#3DBC9B" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                SaaS & IT
              </h3>
          
          </div>
          
          
      </div>
    </div>

  <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl dark:shadow-white">
     <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-10">
        {/* left */}
       <div className="w-full md:w-5/12 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5 ">
          <Image
             src="/upload/future-ai-4.webp"
             alt="client-logo-1"
             width={1160}
             height={1352}
             className="w-auto h-auto my-4 object-cover rounded-lg static"
           />
       </div>
        {/* right */}
       <div className="w-full md:w-7/12 flex items-center justify-center py-2.5">
         <ul className="space-y-3">
          <h2 className="text-black text-4xl 4xl:text-5xl font-bold dark:text-[var(--foreground)]">Industries We Serve</h2>
      <p className="text-gray-600 dark:text-[var(--primary)] ">
 <ChevronsRight className="w-5 h-5 text-blue-600 inline"  color="#3DBC9B"/>
          <span className="text-gray-600 text-xl font-bold dark:text-[var(--primary)]"> Gen AI Experts: </span>We work with the latest LLMs (GPT-4o, Claude 3, Gemini, LLaMA).
      </p>
        
       <p  className="text-gray-600 dark:text-[var(--primary)]">
<ChevronsRight className="w-5 h-5 text-blue-600 inline " color="#3DBC9B"/>
          <span className="text-gray-600 text-xl font-bold dark:text-[var(--primary)]"> AI Strategy Consulting:</span> Get advisory support from ideation to deployment.
       </p>
        <p  className="text-gray-600 dark:text-[var(--primary)]">
          <ChevronsRight className="w-5 h-5 text-blue-600 inline" color="#3DBC9B"/>
          <span className="text-gray-600 text-xl font-bold dark:text-[var(--primary)]"> Startup to Enterprise Scale: </span> We support MVPs, POCs, and full-scale enterprise deployments.
        </p>
        <p  className="text-gray-600 dark:text-[var(--primary)]">
           <ChevronsRight className="w-5 h-5 text-blue-600 inline " color="#3DBC9B"/>
          <span className="text-gray-600 text-xl font-bold dark:text-[var(--primary)]">Robust Security Standards:  </span>End-to-end encryption, GDPR, and AI ethics compliance.
        </p>
       <p  className="text-gray-600 dark:text-[var(--primary)]">
        <ChevronsRight className="w-5 h-5 text-blue-600 inline " color="#3DBC9B"/>
          <span className="text-gray-600 text-xl font-bold dark:text-[var(--primary)]"> Gen AI Experts: </span>Results-Driven Delivery: Our AI projects deliver Measurable ROI   
       </p>
      <p  className="text-gray-600 dark:text-[var(--primary)]">
         <ChevronsRight className="w-5 h-5 text-blue-600 inline" color="#3DBC9B"/>
          <span className="text-gray-600 text-xl font-bold dark:text-[var(--primary)]"> Gen AI Experts: </span>We work with the latest LLMs (GPT-4o, Claude 3, Gemini, LLaMA).
      </p>    
     </ul>
       </div>
     </div>
     
     <div className="w-full flex flex-col md:flex-row items-stretch justify-center mt-10 md:mt-30 gap-3.5 md:gap-5 lg:gap-8 max-w-7xl">
<div className="bg-[var(--primary-blue)] w-full flex flex-col md:flex-row items-center md:items-stretch h-auto md:h-40 lg:h-56 px-4 md:px-8 lg:px-12 py-4 gap-4 md:gap-0 ">

  <div className="w-full md:w-3/5 flex flex-col justify-center items-start px-2 md:px-4 text-white text-center md:text-left">
  <h2 className="text-base md:text-2xl font-semibold leading-snug ml-20">
    Talk to Our AI Consultants Today
    </h2>
    <p className="text-base md:text-lg text-gray-200 leading-snug ml-20">
     Looking to build an AI-powered tool or integrate automation into your business? Let Rankraze be your technology partner. Book a free AI strategy session now!
    </p>
  </div>

  <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center">
    <Link
      href="/contact-us"
      className="overflow-hidden capitalize text-sm md:text-base text-white px-5 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg"
    >
     Contact Us
    </Link>
  </div>

</div>
</div>
  </div>

  <section className="section-padding dark:bg-[var(--popover)] p-10 bg-white">
    <div className="container-custom">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
        
          <h2 className="heading-medium text-center text-2xl md:text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">

        {/* Accordion Item 1 */}
  <div className="bg-gray-50 rounded-md overflow-hidden shadow
  ">
    <input type="radio" name="accordion" id="acc1" className="peer hidden" defaultChecked />
    <label
      htmlFor="acc1"
      className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
    >
      <span className="text-sm font-bold text-black peer-checked:text-white">
        What is Generative AI and how can business use it?
      </span>
    </label>
    <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
      Generative AI can create content, images, code, and conversations. Businesses use it for customer service, marketing, training, and automation.
    </div>
  </div>

  {/* Accordion Item 2 */}
  <div className="bg-gray-50 rounded-md overflow-hidden shadow
  ">
    <input type="radio" name="accordion" id="acc2" className="peer hidden" />
    <label
      htmlFor="acc2"
      className="flex justify-between p-5 cursor-pointer bg-white   peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]"
    >
      <span className="text-sm font-bold text-black peer-checked:text-white">
        What is RAG in AI?
      </span>
    </label>
    <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
      RAG (Retrieval-Augmented Generation) merges real-time search with LLMs to give more accurate and up-to-date responses.
    </div>
  </div>


          {/* Accordion Item 3 */}
          <div className="bg-gray-50 rounded-md overflow-hidden shadow
          ">
            <input type="radio" name="accordion" id="acc3" className="peer hidden" />
            <label htmlFor="acc3" className="flex justify-between p-5 cursor-pointer  bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
              <span className="text-sm font-bold text-black"> Are AI agents replacing employees?</span>
              
            </label>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
            
  Not replacing but augmenting! AI agents handle repetitive tasks, allowing employees to focus on strategic work. 
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="bg-gray-50 rounded-md overflow-hidden shadow
          ">
            <input type="radio" name="accordion" id="acc4" className="peer hidden" />
            <label htmlFor="acc4" className="flex justify-between p-5 cursor-pointer bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
              <span className="text-sm font-bold text-black">Can AI be integrated into existing legacy systems?</span>
              
            </label>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
            Yes. With APIs and middleware, we integrate AI into CRMs, ERPs, and custom applications. 
            </div>
          </div>

          {/* Accordion Item 5 */}
          <div className="bg-gray-50 rounded-md overflow-hidden shadow
          ">
            <input type="radio" name="accordion" id="acc5" className="peer hidden" />
            <label htmlFor="acc5" className="flex justify-between p-5 cursor-pointer  bg-white  transition-all duration-300 peer-checked:bg-gradient-to-br peer-checked:from-[#3DBC9C] peer-checked:to-[#36aaf1]">
              <span className="text-sm font-bold text-black">How long does it take to build an AI solution?</span>
              
            </label>
            <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96 p-0 peer-checked:p-5 text-gray-600 text-sm">
              It depends. A basic chatbot takes 2–4 weeks; complex AI systems may take 2–6 months. 
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  </>
)
}