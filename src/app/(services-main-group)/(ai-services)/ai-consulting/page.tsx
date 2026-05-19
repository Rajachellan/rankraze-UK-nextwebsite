import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BookUser, File, Settings } from 'lucide-react';
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Top AI Consulting Services in India | Rankraze Experts",
    description: "Accelerate your business with Rankraze AI consulting services. Get tailored AI strategies, automation, and insights to boost growth and innovation.",
    
    keywords: [
        "Ai consulting services in india",
        "Top AI consulting company",
        "ai consulting services",
        "Artificial intelligence consulting services",
        "AI Consulting",
        "AI Consultancy",
        "AI Consulting Company",
        "Artificial Intelligence Services and Consulting",
        "Expert AI Consulting Services in India",

    ],
                
    alternates: {
        canonical: "https://rankraze.com/ai-consulting",
    },

    openGraph: {
        title: "Top AI Consulting Services in India | Rankraze Experts",
        description: "Accelerate your business with Rankraze AI consulting services. Get tailored AI strategies, automation, and insights to boost growth and innovation.",
        url: "https://rankraze.com/ai-consulting",
        siteName: "Rankraze",
        images: [
        {
            url: "upload/ai-consulting-banner.webp",
            width: 733,
            height: 654,
            alt: "ai-consulting.webp",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}

export default function page () {
    return (
        <>
        <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 pt-10 md:pt-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-linear-to-b before:from-[#ecfffa] before:to-[#eef9ff] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                        <h1 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                            AI consulting services
                        </h1>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            Rankraze offers expert AI consulting services to help businesses enhance operations and innovate products using advanced AI models like GPT, Gemini, Llama, PaLM, and Mistral. From strategy to implementation, Rankraze guides you through every step of your AI journey.
                        </p>
                        <Link href={"https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1"} target="_blank" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">Learn More</Link>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center pt-2.5">
                        <Image 
                            src={"/upload/ai-consulting-banner.webp"}
                            alt="Reputation Management Services in chennai"
                            width={800} height={600} layout="responsive"
                            objectFit="cover"          
                            className="rounded-xl invert-[30%]"                                 
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        AI consulting company
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        We offer end-to-end AI consulting services designed to help you unlock the full potential of artificial intelligence, driving improvements across your operations and product offerings. Our team works closely with you to understand your specific goals and challenges, crafting tailored AI strategies and solutions that deliver measurable impact. With deep expertise in generative AI and advanced models like GPT, Gemini, Llama, PaLM, and Mistral, we develop cutting-edge solutions for a wide range of applications. Whether you’re aiming to streamline processes with intelligent automation or harness the creative power of generative AI, we support you at every stage of your AI journey.
                    </p>
                    <Link href="/contact-us" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">Schedule a consultation</Link>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/AI.webp"}
                    alt="Reputation Management Services in chennai"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl relative overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                    AI Consulting Services
                </h2>
                <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5">
                    <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                        <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                            <Image 
                                src="/icons/ai-services/AI-Consulting-and-Strategy-Development.webp" 
                                alt="AI-Strategy-Development" 
                                width={124}
                                height={124}
                                className="w-6 md:w-8 lg:w-11 xl:w-16 dark:invert-100"
                            />
                            <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">AI Strategy Development</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                We start with a comprehensive consultation to gain a deep understanding of your business objectives, challenges, and long-term goals. By collaborating with key stakeholders, we gather valuable insights to shape a strategy tailored to your specific needs. Based on this, we create a clear implementation roadmap that defines the steps and timelines for seamlessly integrating AI into your operations.
                            </p>
                        </div>
                        <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                            <div className="h-full"></div>
                            <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                        <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                            <Image 
                                src="/icons/ai-services/AI-mapping.webp" 
                                alt="AI-Strategy-Development" 
                                width={124}
                                height={124}
                                className="w-6 md:w-8 lg:w-11 xl:w-16 dark:invert-100"
                            />
                            <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">AI Opportunity Mapping</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                We analyze your organization&apos;s operations and data to uncover high-potential AI use cases. By evaluating where AI can deliver the most value—through improved efficiency, innovation, or growth—we help you identify and prioritize initiatives with the highest impact. This strategic mapping provides a clear, ROI-focused roadmap aligned with your long-term business objectives.
                            </p>
                        </div>
                        <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                            <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                            <div className="h-full"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                        <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                            <Image 
                                src="/icons/ai-services/domain.webp" 
                                alt="AI-Strategy-Development" 
                                width={124}
                                height={124}
                                className="w-6 md:w-8 lg:w-11 xl:w-16 dark:invert-100"
                            />
                            <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Domain-Specific Model Development</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                We conduct an in-depth analysis of your industry to understand its unique challenges and complexities. Using this knowledge, we fine-tune leading foundation models like GPT, Llama, PaLM, Claude, Gemini, Mixtral, or Mistral, combining them with your proprietary data. Through meticulous testing and validation, we ensure the model is precisely aligned with your business needs.
                            </p>
                        </div>
                        <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                            <div className="h-full"></div>
                            <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                        <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                            <Image 
                                src="/icons/ai-services/Generative-AI.webp" 
                                alt="AI-Strategy-Development" 
                                width={124}
                                height={124}
                                className="w-6 md:w-8 lg:w-11 xl:w-16 dark:invert-100"
                            />
                            <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Generative AI Solutions Development</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                We deliver end-to-end generative AI solutions tailored to your goals—from intuitive UX/UI design to seamless model integration. Whether you&apos;re building a chatbot, content generation tool, or intelligent AI agent, our expertise ensures a streamlined development process that transforms your ideas into impactful GenAI products.
                            </p>
                        </div>
                        <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                            <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                            <div className="h-full"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                        <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                            <Image 
                                src="/icons/ai-services/AI-Consulting-and-Strategy-Development-2.webp" 
                                alt="AI-Strategy-Development" 
                                width={124}
                                height={124}
                                className="w-6 md:w-8 lg:w-11 xl:w-16 dark:invert-100"
                            />
                            <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">Data Engineering</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                Our data engineering services support the entire data lifecycle—from sourcing and cleaning to structuring and enriching. We specialize in data mining, analysis, annotation, and labeling to prepare high-quality datasets. This ensures your AI models are built on a strong foundation for accurate, effective machine learning.
                            </p>
                        </div>
                        <div className="absolute h-full aspect-square grid grid-rows-2 -z-10 group-hover:rotate-180 transition-all duration-[1s] scale-150 ease-in-out">
                            <div className="h-full"></div>
                            <div className="h-full bg-linear-to-b from-[var(--primary-blue)] to-[var(--primary-green)] opacity-75 dark:invert-100"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 group rounded-2xl border border-dashed border-gray-400 relative overflow-hidden box-border p-1">
                        <div className="h-full bg-white dark:bg-[#292639] w-full flex flex-col items-start center-start gap-2.5 px-8 py-8 rounded-2xl">
                            <Image 
                                src="/icons/ai-services/AI-Consulting-and-Strategy-Development-3.webp" 
                                alt="AI-Strategy-Development" 
                                width={124}
                                height={124}
                                className="w-6 md:w-8 lg:w-11 xl:w-16 dark:invert-100"
                            />
                            <h3 className="capitalize md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium md:font-semibold lg:font-bold">AI Integration</h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm md:text-sm">
                                Beyond development, we specialize in smoothly integrating AI solutions into your existing systems and workflows. Our team ensures a seamless transition, making AI an embedded, functional part of your operations so you can fully capitalize on its transformative potential.
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
        <section className="w-full h-fit grid place-items-center dark:bg-none mt-10 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative pb-3.5">
            <div className="flex flex-col md:flex-row items-center justify-center dark:bg-none mt-10 text-[var(--text-black)] gap-4 w-full max-w-5xl mb-2.5 bg-[#113B5C] rounded-2xl relative">
                <div className="w-full md:w-1/4 flex items-center justify-center z-10">
                    <Image
                        src={"/upload/ai-robot-1.webp"}
                        alt="Ai-image"
                        width={840}
                        height={710}
                        className="w-full max-w-32"
                    />
                </div>
                <div className="w-full md:w-2/4 flex flex-col z-10 gap-2.5">
                    <p className="text-sm md:text-base lg:text-lg text-gray-100 text-center md:text-left tracking-tight md:tracking-tight">
                        Maximize the power of AI with customized expert guidance aligned to your business goals.
                    </p>
                </div>
                <div className="w-full md:w-1/4 flex items-center justify-center z-10">
                    <Link href="/contact-us" className="text-sm md:text-sm xl:text-base text-white font-medium px-3.5 py-2.5 rounded-md relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-br before:from-[#3DBC9C] before:to-[#37A8F9] before:top-0 before:left-0 before:rounded-md hover:before: before:-z-10 hover:before:from-[#37A8F9] hover:before:to-[#3DBC9C]">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-5 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl relative overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 my-20 z-10">
                <h2 className="text-2xl xl:text-4xl font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                    Why Choose Rankraze
                </h2>
                <div className="w-full grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2.5 gap-5 mt-3.5">
                    <div className="flex items-stretch justify-center gap-1.5 px-3.5 py-2.5 rounded-md border-[2px] border-dashed border-gray-400">
                        <div className="grid place-items-center">
                            < BookUser className="text-[var(--primary-green)] w-10 h-10 lg:w-12 lg:h-12 stroke-1" />
                        </div>
                        <div className="w-full ">
                           
                            <h3 className="text-xl xl:text-3xl font-semibold text-center md:text-left capitalize dark:text-gray-200">
                                Experience and Expertise
                            </h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide dark:text-gray-400 text-sm md:text-sm">
                                Rankraze delivers expert AI development and consulting, offering tailored solutions backed by deep industry experience—making us a trusted partner in your AI journey.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center gap-1.5 px-3.5 py-2.5 rounded-md border-[2px] border-dashed border-gray-400">
                        <div className="grid place-items-center">
                            < File className="text-[var(--primary-green)] w-10 h-10 lg:w-12 lg:h-12 stroke-1" />
                        </div>
                        <div className="w-full">
                            <h3 className="text-xl xl:text-3xl font-semibold text-center md:text-left capitalize dark:text-gray-200">
                                End-to-End Development
                            </h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm dark:text-gray-400 md:text-sm">
                                We follow a structured, goal-driven process—from use case identification to deployment and maintenance—ensuring AI solutions align perfectly with your business goals.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center gap-1.5 px-3.5 py-2.5 rounded-md border-[2px] border-dashed border-gray-400">
                        <div className="grid place-items-center">
                            < Settings className="text-[var(--primary-green)] w-10 h-10 lg:w-12 lg:h-12 stroke-1" />
                        </div>
                        <div className="w-full">
                            <h3 className="text-xl xl:text-3xl font-semibold text-center md:text-left capitalize dark:text-gray-200">
                                Extensive Technical Skills
                            </h3>
                            <p className="text-gray-500 text-left leading-relaxed tracking-wide text-sm dark:text-gray-400 md:text-sm">
                                Our team excels in machine learning, Python, TensorFlow, and Hadoop, with expertise in top foundation models like GPT, Llama, and Gemini to build robust generative AI solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
              <section className="w-full grid place-items-center  px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
                        <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20">
                            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0 z-10">
                                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                                    <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                                        Get in Touch with Rankraze
                                    </h2>
                                    <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                                        Get free Consultation and Discover What AI Consulting Can Do for Your Business.
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