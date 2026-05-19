import Image from "next/image";
import { Bot,ShoppingCart,HeartPulse,Landmark,BookOpenText,Gavel} from "lucide-react"
import Link from "next/link";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";
import { Metadata } from "next";

export const metadata={
    title: "Custom AI Solutions in India | Rankraze",
    description: "Boost your business efficiency with Rankraze custom AI solutions. We build scalable, AI-driven systems tailored for startups & enterprises across India.",
    
    keywords: [
        "custom AI solutions",
        "AI development company India",
        "AI consulting services",
        "AI software solutions",
        "Chennai AI developers",
        "custom machine learning solutions",
        "AI for business automation",
        "AI development in Chennai",
        "Rankraze AI services",
        "tailored AI applications",
        "enterprise AI solutions",
        "AI strategy consulting",
        "AI services India",
        "deep learning development Chennai",
        "AI integration for startups",
        "AI-powered business tools",
        "custom NLP solutions India",
        "artificial intelligence development company",
        "AI development for enterprises",
        "AI services in Tamil Nadu"
    ],
 
    alternates: {
        canonical: "https://rankraze.us/custom-ai-solutions",
    },

    openGraph: {
        title: "Custom AI Solutions in India | Rankraze",
        description: "Boost your business efficiency with Rankraze custom AI solutions. We build scalable, AI-driven systems tailored for startups & enterprises across India.",
        url: "https://rankraze.us/custom-ai-solutions",
        siteName: "Rankraze",
        images: [
        {
            url: "upload/services/custom-ai-1.webp",
            width: 2460,
            height: 1984,
            alt: "custom-ai-1",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}

export default function CustomaisolutionsPage(){
    return(
        <>
          <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
  <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
    <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0">
        {/* left */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5 ">
        <h1 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
        Unlock the Full Potential of AI—Tailored to Your Business Needs
        </h1>
        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4 py-3">
        Custom AI Solutions to Automate, Predict, and Optimize Your Business.
        </p>
        <Link
          href={"https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1"}
          className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">
          Get Started Today
        </Link>
      </div>
{/* right */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center py-2.5">
        <Image
             src="/upload/services/custom-ai-1.webp"
             alt="client-logo-1"
             width={1024}
             height={826}
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
                               src="/upload/services/custom-ai-2.webp"
                               alt="image-not-found.webp"
                               width={1024} height={683}
                               className="rounded-xl shadow-2xs "
                               />
                           </div>
                           <div className="w-full md:w-1/2 flex flex-col items justify-center p-2.5 gap-3 md:gap-4 xl:gap-5">
                               <h2 className="text-2xl md:text-3xl lg:text-4xl capitalize font-bold text-gray-800 dark:text-gray-200">
                              Custom AI Solutions
                               </h2>
                               <p className="text-300 leading-relaxed text-justify text-black dark:text-gray-400 tracking-wide xl:pr-12 2xl:pr-20">
                               At <span className="font-semibold">Rankraze</span>, we specialize in delivering <span className="font-semibold">custom AI solutions </span> that are built specifically around your business goals, challenges, and data. Off-the-shelf AI tools can only take you so far. That’s why we design intelligent systems from the ground up—ensuring they align with your operations, scale with your growth, and generate real impact.

                               Whether you’re aiming to automate workflows, improve customer experience, or gain deeper insights from your data, our AI experts will craft a solution that’s precise, efficient, and future-ready.
                               </p>
                              
                           </div>
                       </div>
           <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl relative overflow-hidden">
                      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                          <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                              What We Offer
                          </h2>
                          <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5">
                              <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                  <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                     
                                      <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">AI Strategy & Consulting</h3>
                                      <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                         We help you define the right use cases for AI, assess feasibility, and develop a clear roadmap—from ideation to implementation.
                                      </p>
                                  </div>
                                  <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                      <div className="h-full"></div>
                                      <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                  </div>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                  <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                      
                                      <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Custom Model Development</h3>
                                      <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                         We build AI models tailored to your data and business logic, using advanced machine learning and deep learning frameworks like TensorFlow, PyTorch, and OpenAI technologies.
                                      </p>
                                  </div>
                                  <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                      <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                      <div className="h-full"></div>
                                  </div>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                  <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                     
                                      <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Natural Language Processing (NLP)</h3>
                                      <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                         From smart chatbots to document classification and sentiment analysis, we create NLP systems that understand and interpret language like a human.
                                      </p>
                                  </div>
                                  <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                      <div className="h-full"></div>
                                      <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                  </div>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                  <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                      
                                      <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Computer Vision Solutions</h3>
                                      <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                          Leverage image and video data for object detection, facial recognition, defect detection, and more—with real-time, high-accuracy models.
                                      </p>
                                  </div>
                                  <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                      <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                      <div className="h-full"></div>
                                  </div>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                  <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                      
                                      <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">AI Integration & Automation</h3>
                                      <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                          We integrate AI seamlessly into your digital ecosystem—whether it’s a mobile app, web platform, CRM, ERP, or cloud infrastructure.
                                      </p>
                                  </div>
                                  <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                      <div className="h-full"></div>
                                      <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                  </div>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                  <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                     
                                      <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Ongoing Optimization & Support</h3>
                                      <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                         AI is not a one-time effort. We continuously monitor, retrain, and optimize your models to keep them relevant and accurate as your data evolves.
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
         Why Choose Rankraze?
        </h2>
      </div>
{/* right */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center py-2.5">
        <ul className="space-y-3">
      <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
        <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B"/>
        <span>Custom-built solutions—no generic shortcuts</span>
      </li>

      <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
        <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B" />
        <span>Experienced team of AI engineers, data scientists, and domain experts</span>
      </li>

      <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
        <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B" />
        <span>End-to-end development, from planning to deployment and beyond</span>
      </li>
       <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
        <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B" />
        <span>Scalable architectures designed for growth</span>
      </li>
       <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
        <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B"/>
        <span>Transparent process with regular updates and measurable outcomes</span>
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
    <p className="text-lg md:text-xl text-white leading-snug font-bold ml-20">Let’s Build the Future Together</p>
    <p className="text-base md:text-lg  leading-snug ml-20">
      Whether you’re just starting your AI journey or looking to scale your existing capabilities, Rankraze is here to turn your vision into reality with powerful, tailor-made AI solutions.
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
             <h2 className="text-4xl   dark:text-[var(--card-foreground)] font-bold py-3">Industries We Serve</h2>
           
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
                   <p className="text-gray-700 text-center text-base dark:text-gray-400 dark:text-gray-400">Diagnosis support, patient insights, predictive analytics.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300 rounded-md cursor-pointer">
                    <Landmark size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                       Finance
                    </h3>
                  <p className="text-gray-700 text-center text-base dark:text-gray-400">Fraud detection, risk scoring, algorithmic trading.</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300  cursor-pointer">
                    <BookOpenText size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                       Education
                    </h3>
                 <p className="text-gray-700 text-center text-base dark:text-gray-400" >Student assistance, admissions help, learning support.</p>
                </div>
                 
                 <div className="w-full md:w-1/3 flex flex-col items-center justify-start p-5 md:p-6 lg:p-7 gap-4 border border-gray-300 rounded-md cursor-pointer">
                    <Gavel size={40} color="#3DBC9B" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize text-center">
                      Legal & Compliance
                    </h3>
              <p className="text-gray-700 text-center text-base dark:text-gray-400" >Contract analysis, legal research automation.</p>
                </div>
            </div>
             <section className="w-full mb-10 grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
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