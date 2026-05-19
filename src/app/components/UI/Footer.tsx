
import Image from 'next/image';
import Link from 'next/link';
export default function Footer () {
    return (
        <>
        <footer className="flex flex-col items-center justify-center mt-20 text-[var(--text-black)] gap-6 w-full px-3 md:px-8 lg:px-10 dark:bg-[#050D1A] transition-colors duration-300">
            <div className="w-full flex flex-col items-center justify-center p-1.5 md:p-5 xl:p-6 2xl:p-8 relative before:content-[''] before:absolute before:w-full before:h-full before:rounded-3xl before:bg-linear-to-br before:from-[#37A8FD] before:to-[#3DBB9D] dark:before:bg-[linear-gradient(135deg,#111827_0%,#050d1a_100%)] dark:before:border dark:before:border-white/5 before:-z-10 transition-colors duration-300">
                <div className="w-full grid grid-cols-2 md:flex items-stretch justify-between max-w-5xl p-4 gap-3 xl:gap-5">
                    <div className="w-full md:w-2/5 col-span-2 flex flex-col items-start justify-start pr-2.5">
                        <Image
                            src="/rankraze-logo-dark.webp"
                            alt="Logo"
                            width={270}
                            height={60}
                            sizes="(max-width: 768px) 208px, 270px"
                            className="w-full max-w-52 md:max-w-[270px] h-auto"
                            style={{ height: 'auto' }}
                        />
                        <span className="text-sm font-medium text-white mt-2 p-1.5 text-left">
                            We’re a full-service creative digital agency in Dallas, Texas, USA and we can help your business grow. Rankraze specializes in creating engaging digital experiences, including website design, branding, digital marketing and content marketing
                        </span>
                        <div className="flex gap-2.5 mt-2">
                            <Link href="https://www.facebook.com/Rankraze" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-[var(--primary-blue)] transition-all duration-300">
                                <i className="ri-facebook-fill text-lg"></i>
                            </Link>
                            <Link href="https://www.instagram.com/rankraze/" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-[var(--primary-blue)] transition-all duration-300">
                                <i className="ri-instagram-line text-lg"></i>
                            </Link>
                            <Link href="https://in.linkedin.com/company/rankrazetechnologies" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-[var(--primary-blue)] transition-all duration-300">
                                <i className="ri-linkedin-fill text-lg"></i>
                            </Link>
                            <Link href="https://www.youtube.com/@Rankraze" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-[var(--primary-blue)] transition-all duration-300">
                                <i className="ri-youtube-fill text-lg"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/5 flex flex-col items-start justify-start capitalize gap-3 p-1.5">
                        <h4 className="text-lg font-bold text-white">
                            services
                        </h4>
                        <ul className="w-full flex flex-col items-start justify-start gap-0.5">
                            <li className=''>
                                <Link href="/seo-services-in-texas" className='text-sm text-white hover:text-[var(--primary-blue)]'>SEO Services</Link>
                            </li>
                            <li className=''>
                                <Link href="/social-media-marketing-services-in-texas" className='text-sm text-white hover:text-[var(--primary-blue)]'>Social Media Marketing</Link>
                            </li>
                            <li className=''>
                                <Link href="/ppc-management-services-in-dallas" className='text-sm text-white hover:text-[var(--primary-blue)]'>PPC Services</Link>
                            </li>
                            <li className=''>
                                <Link href="/content-writing-services-dallas" className='text-sm text-white hover:text-[var(--primary-blue)]'>Content Writing Agency</Link>
                            </li>
                            <li className=''>
                                <Link href="/online-reputation-management-services-in-texas" className='text-sm text-white hover:text-[var(--primary-blue)]'>Online Reputation Management</Link>
                            </li>
                            <li className=''>
                                <Link href="/web-designing" className='text-sm text-white hover:text-[var(--primary-blue)]'>Web Designing</Link>
                            </li>
                            <li className=''>
                                <Link href="/vernacular-multilingual-marketing" className='text-sm text-white hover:text-[var(--primary-blue)]'>Vernacular Marketing</Link>
                            </li>
                            <li className=''>
                                <Link href="/influencer-marketing" className='text-sm text-white hover:text-[var(--primary-blue)]'>Influencer Marketing</Link>
                            </li>
                            <li className=''>
                                <Link href="/sentiment-analysis-services" className='text-sm text-white hover:text-[var(--primary-blue)]'>Sentiment Analysis</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/5 flex flex-col items-start justify-start capitalize gap-3 p-1.5">
                        <h4 className="text-lg font-bold text-white">
                            services
                        </h4>
                        <ul className="w-full flex flex-col items-start justify-start gap-0.5">
                            <li className=''>
                                <Link href="/video-marketing" className='text-sm text-white hover:text-[var(--primary-blue)] '>Video Marketing</Link>
                            </li>
                            <li className=''>
                                <Link href="/video-production-services" className='text-sm text-white hover:text-[var(--primary-blue)]'>Video Production Services</Link>
                            </li>
                            <li className=''>
                                <Link href="/2d-and-3d-animation-services-in-dallas" className='text-sm text-white hover:text-[var(--primary-blue)]'>2D and 3D Animation</Link>
                            </li>
                            <li className=''>
                                <Link href="/mobile-app-development" className='text-sm text-white hover:text-[var(--primary-blue)]'>Mobile App Development</Link>
                            </li>
                            <li className=''>
                                <Link href="/web-hosting" className='text-sm text-white hover:text-[var(--primary-blue)]'>Web Hosting</Link>
                            </li>
                            <li className=''>
                                <Link href="/web-analytic" className='text-sm text-white hover:text-[var(--primary-blue)]'>Web Analytics</Link>
                            </li>
                            <li className=''>
                                <Link href="/augmented-reality-development-in-texas" className='text-sm text-white hover:text-[var(--primary-blue)]'>Augmented Reality Development</Link>
                            </li>
                            <li className=''>
                                <Link href="/virtual-reality-development-company-dallas" className='text-sm text-white hover:text-[var(--primary-blue)]'>Virtual Reality Development</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/5 flex flex-col items-start justify-start capitalize gap-3 p-1.5">
                        <h4 className="text-lg font-bold text-white">
                            company
                        </h4>
                        <ul className="w-full flex flex-col items-start justify-start gap-0.5">
                            <li className=''>
                                <Link href="/about-rankraze-digital-marketing-agency" className='text-sm text-white hover:text-[var(--primary-blue)]'>About Us</Link>
                            </li>
                            <li className=''>
                                <Link href="/careers" className='text-sm text-white hover:text-[var(--primary-blue)]'>Careers</Link>
                            </li>
                            <li className=''>
                                <Link href="/blogs" className='text-sm text-white hover:text-[var(--primary-blue)]'>Article & News</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-9 md:h-24 xl:h-[150px] relative">
                    <div className="w-full h-full flex items-center justify-center p-0.5 md:p-2 absolute top-[40%]">
                        <span className="inline-block text-5xl md:text-9xl xl:text-[200px] font-bold text-white dark:text-[#292639] capitalize font-sans leading-none">
                            rankraze
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-5xl p-2 md:p-4 mt-5 md:mt-10 flex flex-col md:flex-row items-center justify-between text-gray-400">
                <span className="text-sm font-light">Copyright © 2026 Rankraze, All rights reserved.</span>
                <div className="grid grid-cols-3 place-items-center md:flex items-center justify-center mt-2.5 gap-1.5 md:gap-2.5 text-[10px] md:text-sm font-light">
                   <Link
                        href="/terms-and-conditions"
                        className="inline-block text-sm md:text-sm"
                        >
                        Terms of Services
                        </Link>

                    <Link href="/privacy-policy" className="inline-block text-sm md:text-sm ">
                        Privacy Policy
                    </Link>
                    <Link href="/refund-policy" className="inline-block text-sm  md:text-sm">
                        Refund Policy
                    </Link>
                    <span className=''></span>
                    <Link href="/contact-us/" className="inline-block text-sm md:text-sm">
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
        </>
    )
}