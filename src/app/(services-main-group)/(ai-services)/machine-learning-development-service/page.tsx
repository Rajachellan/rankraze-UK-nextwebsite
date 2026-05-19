import Image from "next/image";
import { Bot} from "lucide-react"
import Link from "next/link";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";
import { Metadata } from "next";
export const metadata:Metadata = {
    title: "Machine Learning Development Services in India – Rankraze",
    description: "Get custom Machine Learning development services from Rankraze. AI-driven solutions for business automation. Serving clients in Chennai, India, & globally.",
    
keywords: [
    "machine learning development services",
    "AI development company India",
    "machine learning developers in Chennai",
    "ML consulting services",
    "artificial intelligence solutions India",
    "machine learning services Chennai",
    "predictive analytics development",
    "deep learning development India",
    "custom ML solutions",
    "AI app development India",
    "data science services Chennai",
    "AI software development",
    "machine learning company in Chennai",
    "AI consulting India",
    "ML model development services",
    "ML app development India",
    "Rankraze machine learning",
    "AI solutions in Chennai",
    "ML integration services India",
    "AI development services Chennai"
],



                
    alternates: {
        canonical: "https://rankraze.com/machine-learning-development-service",
    },

    openGraph: {
        title: "Machine Learning Development Services in India – Rankraze",
        description: "Get custom Machine Learning development services from Rankraze. AI-driven solutions for business automation. Serving clients in Chennai, India, & globally.",
        url: "https://rankraze.com/machine-learning-development-service",
        siteName: "Rankraze",
        images: [
        {
            url: "upload/services/machine-learning-1.webp",
            width: 695,
            height: 630,
            alt: "NLP-1.webp",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}
export default function MachinelearningdevelopmentservicesPage(){
    return(
        <>
          <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
  <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
    <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0">
        {/* left */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5 ">
        <h1 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
         AI-Powered Solutions, Built for Your Business
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
             src="/upload/services/machine-learning-1.webp"
             alt="client-logo-1"
             width={695}
             height={630}
             className="w-full object-cover rounded-lg static"
           />
      </div>
    </div>
    <div className="absolute flex items-end justify-start w-full h-full bottom-0 left-0 -z-10 opacity-100 dark:opacity-75 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-cover bg-bottom"></div>
  </div>
</section>

     <section className="w-full grid place-items-center dark:bg-[var(--popover)] mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-9 md:gap-12 lg:gap-14 xl:gap-16 bg-gray-100 pt-20">
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl mt-2.5 md:mt-6">
                <div className="w-full md:w-1/2  px-8 md:px-10 lg:px-16 xl:px-24">
                    <Image 
                    src="/upload/services/machine-learning-2.webp"
                    alt="business-consultant-mobile.webp"
                    width={487} height={576}
                    className="rounded-xl shadow-2xs "
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items justify-center p-2.5 gap-3 md:gap-4 xl:gap-5">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl capitalize font-bold text-gray-800 dark:text-gray-200">
                     Machine Learning Development Service
                    </h2>
                    <p className="text-sm leading-relaxed text-justify text-black dark:text-gray-400 tracking-wide xl:pr-12 2xl:pr-20">
                     Unlock the power of artificial intelligence with Rankraze’s end-to-end Machine Learning (ML) development services. We help businesses of all sizes harness data-driven intelligence to automate processes, uncover insights, and drive smarter decision-making. 
Our ML solutions are custom-built to solve real-world problems across industries such as healthcare, finance, retail, logistics, and more. Whether you’re looking to predict customer behavior, detect anomalies, or optimize operations, our team of AI experts delivers scalable and impactful solutions tailored to your unique needs.
                    </p>
                   
                </div>
            </div>
           <section className="w-full grid place-items-center lg:mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl relative overflow-hidden">
                      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                          <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                            What We Offer
                          </h2>
                          <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5">
                              <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                  <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                     
                                      <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">ML Consulting & Strategy</h3>
                                      <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                         We start by understanding your business challenges and identifying the best machine learning approach for your goals. From ideation to use-case validation, we help you build a roadmap for AI adoption.
                                      </p>
                                  </div>
                                  <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                      <div className="h-full"></div>
                                      <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                  </div>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                  <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                    
                                      <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Data Engineering</h3>
                                      <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                        We collect, clean, and organize your data to ensure it’s ML-ready. Our team handles structured, unstructured, and semi-structured data with expertise, building reliable pipelines for real-time and batch processing.
                                      </p>
                                  </div>
                                  <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                      <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                      <div className="h-full"></div>
                                  </div>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                  <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                     
                                      <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Model Development</h3>
                                      <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                         Using cutting-edge algorithms and frameworks like TensorFlow, PyTorch, and Scikit-learn, we develop and train custom ML models tailored to your problem—be it classification, regression, clustering, or recommendation systems.
                                      </p>
                                  </div>
                                  <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                      <div className="h-full"></div>
                                      <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                  </div>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                  <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                     
                                      <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Deployment & Integration</h3>
                                      <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                         We integrate machine learning models into your applications, cloud platforms, or on-premise systems with secure APIs and scalable architecture. Our solutions are built to perform in production, not just in a lab
                                      </p>
                                  </div>
                                  <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                      <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                                      <div className="h-full"></div>
                                  </div>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                                  <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                                     
                                      <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Model Monitoring & Maintenance</h3>
                                      <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                         Our work doesn’t stop at deployment. We continuously monitor model performance, manage drift, and retrain models as needed to ensure consistent accuracy and efficiency over time.
                                      </p>
                                  </div>
                                  <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                                      <div className="h-full"></div>
                                      <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
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
        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4 py-3">
      Delivering Innovation Through Experience, Precision, and Speed. 
        </p>
       
      </div>
{/* right */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center py-2.5">
        <ul className="space-y-3">
      <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
        <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B"/>
        <span>Deep expertise in AI & ML technologies</span>
      </li>

      <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
        <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B" />
        <span>Domain-specific solutions tailored to your industry</span>
      </li>
 
      <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
        <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B" />
        <span>Agile development with rapid prototypingfor data mining</span>
      </li>
       <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
        <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B" />
        <span>Scalable, production-ready models</span>
      </li>
       <li className="flex gap-2 items-start dark:text-[var(--card-foreground)]">
        <Bot className="w-5 h-5 text-blue-600" color="#3DBC9B"/>
        <span>Transparent communication and end-to-end support</span>
      </li>
      
    </ul>
      </div>
    </div>
  </div>
<div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl">
<div className="bg-[var(--primary-blue)] w-full flex flex-col md:flex-row items-center md:items-stretch h-auto md:h-40 lg:h-56 px-4 md:px-8 lg:px-12 py-4 gap-4 md:gap-0 ">
  <div className="w-full md:w-1/5 h-40 md:h-full flex justify-center items-center">
    <Image
      src="/upload/services/machine-learning-3.webp"
      alt="business-consultant-mobile.webp"
      width={418}
      height={626}
      className="w-auto h-full  object-cover  rounded-xl shadow-2xs"
    />
  </div>

  <div className="w-full md:w-3/5 flex flex-col justify-center items-start px-2 md:px-4 text-white text-center md:text-left">
    <p className="text-base md:text-lg font-semibold leading-snug ml-20">
      Ready to bring machine learning into your business?
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
        
    <div className="text-center mt-10">
               <h2 className="text-4xl  font-semibold dark:text-[var(--card-foreground)]">Types of ML Solutions We Build</h2>
               </div>
<div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-8 max-w-7xl ">

  <div className="relative w-full md:w-3/5 flex flex-col items-start justify-start px-2 gap-2 border-gray-00">
    <h3 className="md:text-2xl text-xl font-semibold text-black  dark:text-[var(--card-foreground)] capitalize text-start">
      Predictive Analytics
    </h3>
    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-justify">
      Forecast trends, sales, or demand with high precision.
    </p>
  </div>

  <div className="relative w-full md:w-3/5 flex flex-col items-start justify-start px-2 gap-2 border-gray-00">
    <h3 className="md:text-2xl text-xl font-semibold text-black dark:text-[var(--card-foreground)] capitalize text-start">
      Recommendation Engines
    </h3>
    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-justify">
      Deliver personalized product or content suggestions.
    </p>
  </div>

  <div className="relative w-full md:w-2/3 flex flex-col items-start justify-start px-2 gap-2 border-gray-00">
    <h3 className="md:text-2xl text-xl font-semibold text-black dark:text-[var(--card-foreground)] capitalize text-start">
      Anomaly Detection
    </h3>
    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-justify">
      Identify fraud, errors, or operational issues in real time.
    </p>
  </div>

</div>

<div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-3.5 md:gap-5 lg:gap-3 max-w-7xl">

  <div className="relative w-full md:w-1/3 flex flex-col items-start justify-start px-2 gap-2 border-gray-00">
    <h3 className="md:text-2xl text-xl font-semibold text-black dark:text-[var(--card-foreground)] capitalize text-start">
      Computer Vision
    </h3>
    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-justify">
      Enable image classification, object detection, and facial recognition.
    </p>
  </div>

  <div className="relative w-full md:w-1/3 flex flex-col items-start justify-start px-2 gap-2 border-gray-00">
    <h3 className="md:text-2xl text-xl font-semibold text-black dark:text-[var(--card-foreground)] capitalize text-start">
      Natural Language Processing (NLP)
    </h3>
    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-justify">
      Automate language understanding, sentiment analysis, and chatbot functions.
    </p>
  </div>

  <div className="relative w-full md:w-1/3 flex flex-col items-start justify-start px-2 gap-2 border-gray-00">
    <h3 className="md:text-2xl text-xl font-semibold text-black dark:text-[var(--card-foreground)] capitalize text-start">
      Time Series Forecasting
    </h3>
    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 tracking-wide text-justify">
      Analyze patterns over time for better decision-making.
    </p>
  </div>

</div>

             <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
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