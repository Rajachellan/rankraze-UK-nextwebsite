import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Best Software Development Company in Chennai | Rankraze India",
    description: "Rankraze Technology is a leading software development company in Chennai, India. We offer the best custom software development services, tool based on client’s requirements and market demands.",
    
    keywords: [
 "Software Development Company in Chennai",
"Software Development Company in India",
"Software Consulting and Development",
"Software Development Company",
"custom software development company",
"software development company",
"custom software development",
"software development",
"Software Development Company India",
"Top Custom Software Development Company",
"Custom Software Development Services",
"Top Custom Software Development Company in India",

    ],

    alternates: {
        canonical: "https://rankraze.com/software-development",
    },

    openGraph: {
        title: "Best Software Development Company in Chennai | Rankraze India",
        description: "Rankraze Technology is a leading software development company in Chennai, India. We offer the best custom software development services, tool based on client’s requirements and market demands.",
        url: "https://rankraze.com/software-development",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/software-develop1.webp",
            width: 826,
            height: 590,
            alt: "Software-Development.webp",
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
            <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                        <h1 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                            Software Development Company in Chennai, India
                        </h1>
                        <Link href={"https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1"} target="_blank" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">request quote</Link>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-2.5">
                        <ContactForm />
                    </div>
                </div>
                <div className="absolute flex items-end justify-start w-full h-full bottom-0 left-0 -z-10 opacity-100 dark:opacity-75 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-cover bg-bottom">
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        About Rankraze
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        <span className="font-black">Rankraze</span> is one of the leading software development companies in Chennai, India. We specialize in developing our own CRM software and project management tool. We enable businesses, including start-ups, SMEs, and Fortune 500 companies, to use our expertise and skills to meet their short and long-term software development requirements with a number of software solutions, such as website development, app development, and eCommerce development.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        If you are looking for a software solution in Chennai, India, then Rankraze is the perfect choice for you. Our team of experienced and skilled professionals will work closely with you to understand your requirements and help you evolve into the best and most user-friendly solution possible. So, what are you waiting for? Contact us today and get the best software solution for your business!
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/software-develop1.webp"}
                    alt="Software Development Company in Chennai, India"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full flex flex-col items-start justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Why we are the best Software Solution Team?
                    </h2>
                    <ul className="text-sm md:text-base pl-1 flex flex-col gap-1 md:gap-1.5 lg:gap-2 xl:gap-2.5 list-disc marker:text-[var(--primary-green)] text-gray-500 dark:text-gray-400">
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>We have a team of highly skilled and experienced developers who are experts in CRM software development.Flutter is simple and easy to use.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>We use the latest and updated technology to develop our software, ensuring that it is always up-to-date and compliant with the latest industry standards.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>We offer a comprehensive suite of services, from software development to implementation and training.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>We are passionate about helping our clients succeed and will go above and beyond to make sure that you are satisfied with our software.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>We have a proven track record of success, with satisfied clients who have seen palpable results from using our software.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center capitalize dark:text-gray-200 pr-4">
                        The services we offer
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-center text-sm md:text-base">
                        We offer a wide range of services to help businesses of all sizes succeed. From custom software development to enterprise resource planning (ERP) implementations, we have the experience and expertise to help you achieve your goals.
                    </p>
                    <ul className="w-full text-sm md:text-base pl-1 flex items-center justify-center gap-1 md:gap-1.5 lg:gap-2 xl:gap-2.5 list-disc marker:text-[var(--primary-green)] text-gray-500 dark:text-gray-400 flex-wrap">
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>Agile software development</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>Business process automation</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>Custom software development</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>Enterprise software development</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>Application development</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>Software product development</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>Data Analysis and Reporting</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>Mobile app development</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>Web app development</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>eCommerce development</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>UI/UX design</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span>IOT app development</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}