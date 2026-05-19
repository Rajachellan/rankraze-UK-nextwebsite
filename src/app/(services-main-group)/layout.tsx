import React from "react";
import Link from "next/link";
import Image from "next/image";
import LatestBogs from "../components/LatestBlogs";
import ContactFormModalButtonOne from "../components/UI/ContactFormModalButtonOne"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <section className="w-full h-fit grid place-items-center dark:bg-none mt-10 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative pb-3.5">

                <div className="w-full flex-col md:flex-row max-w-7xl flex items-stretch justify-center mt-8 md:mt-12 lg:mt-14 py-3 md:py-6 xl:py-12 gap-3.5">
                    <div className="w-full md:w-1/2 p-3.5 grid place-items-center">
                        <h2 className="text-2xl lg:text-4xl xl:text-[40px] capitalize text-center md:text-left font-bold px-4 md:px-10 leading-tight dark:text-gray-200">
                            trusted by 2,000+ world-class brands and organizations of all sizes
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2 overflow-hidden max-h-[30vh] relative before:absolute before:content-[''] before:w-full before:h-5 before:left-0 before:bottom-0 before:z-10 before:bg-gradient-to-t before:from-[#ffffff] dark:before:from-[#292639] before:to-transparent after:absolute after:content-[''] after:h-5 after:w-full after:right-0 after:top-0 after:bottom-0 after:z-10 after:bg-gradient-to-t after:from-transparent after:to-[#ffffff] dark:after:to-[#292639]">
                        <div className="w-full h-[1536px] grid grid-cols-4 auto-rows-[75px] md:auto-rows-[100px] gap-2.5 p-1.5 slide-y-loop dark:grayscale-100 dark:invert dark:brightness-100">
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/Anna-University-1-1.webp"}
                                    alt="client-logo-1"
                                    width={100}
                                    height={100}
                                    className="w-full p-1"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/appolo.webp"}
                                    alt="client-logo-2"
                                    width={100}
                                    height={100}
                                    className="h-full px-1 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/Bajaj_Finserv_logo.webp"}
                                    alt="client-logo-3"
                                    width={100}
                                    height={50}
                                    className="h-full px-1 py-7 md:py-9"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/Cars-india.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-1 py-7 md:py-9"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/Clearone-1-1.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-1.5 md:px-5 py-9"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/europe-1.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-1.5 md:px-5"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/IIT_Madras.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-8"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/irqs-2-1.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/Johnson-Lifts-LOGO.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/k-link.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/motilal-oswal-logo.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-1.5 md:px-4"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/mp-developers-1-1.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-5"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/murugappa.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/arunexcello.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-5 py-4 md:py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/NDTV-2.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/omkar-share-banner.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-4 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/pizza-hut.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-7"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/puruvankara-1.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-7"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/renault-nissan.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/shizen-energy.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-5 py-7"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/shriram-finance-logo.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-7"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/silkway.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-1.5 py-5 md:py-8"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/TAFE-Logo.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-1 py-5 md:py-8"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/tradeachievers_official-1.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-4"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/ttgroup_logo.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-1.5 md:px-3.5 py-8"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/virginia-tech.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-2 md:px-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/yagen-logo.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-2 md:px-7"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/mv_logo_full.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-2 md:px-7"
                                />
                            </div>

                            {/* second copy */}
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/Anna-University-1-1.webp"}
                                    alt="client-logo-1"
                                    width={100}
                                    height={100}
                                    className="w-full p-1"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/appolo.webp"}
                                    alt="client-logo-2"
                                    width={100}
                                    height={100}
                                    className="h-full px-1 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/Bajaj_Finserv_logo.webp"}
                                    alt="client-logo-3"
                                    width={100}
                                    height={50}
                                    className="h-full px-1 py-7 md:py-9"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/Cars-india.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-1 py-7 md:py-9"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/Clearone-1-1.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-1.5 md:px-5 py-9"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/europe-1.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-1.5 md:px-5"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/IIT_Madras.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-1 py-5 md:py-8"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/irqs-2-1.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-5 md:py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/Johnson-Lifts-LOGO.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/k-link.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/motilal-oswal-logo.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-1.5 md:px-4"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/mp-developers-1-1.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-5"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/murugappa.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/arunexcello.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-5 py-4 md:py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/NDTV-2.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/omkar-share-banner.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-4 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/pizza-hut.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-7"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/puruvankara-1.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-7"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/renault-nissan.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/shizen-energy.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-5 py-7"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/shriram-finance-logo.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-7"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/silkway.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-1.5 py-5 md:py-8"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/TAFE-Logo.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-1 py-5 md:py-8"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/tradeachievers_official-1.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="h-full px-0.5 py-4"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/ttgroup_logo.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-1.5 md:px-3.5 py-8"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/virginia-tech.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-2 md:px-6"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/yagen-logo.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-2 md:px-7"
                                />
                            </div>
                            <div className="flex w-full items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md shadow-[0px_2px_6px_rgba(0,0,0,0.07),0px_-2px_6px_rgba(0,0,0,0.07)]">
                                <Image
                                    src={"/brand-logo/mv_logo_full.webp"}
                                    alt="client-logo-4"
                                    width={100}
                                    height={50}
                                    className="w-full px-2 md:px-7"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center dark:bg-none mt-10 text-[var(--text-black)] gap-4 w-full max-w-5xl p-6 md:p-8 lg:p-10 mb-2.5 bg-[#dffff1] rounded-2xl relative before:content-[''] before:w-full before:h-full before:absolute before:bg-[url('/upload/background-style.webp')] before:bg-cover before:bg-no-repeat before:opacity-45 before:rounded-2xl before:bg-center before:z-0">
                    <div className="w-full md:w-2/3 flex flex-col z-10 gap-2.5">
                        <h2 className="text-2xl md:text-4xl text-gray-800 text-center md:text-left font-bold z-10">
                            Request a Free Quote
                        </h2>
                        <p className="text-[10px] md:text-sm lg:text-sm text-gray-600 text-center md:text-left tracking-tight md:tracking-tight">Revolutionize your brand with our award-winning digital marketing services!</p>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center justify-center z-10">
                        <ContactFormModalButtonOne Button={"Get Quote"} Dark={false} />
                    </div>
                </div>
                <LatestBogs />

            </section>
        </>
    )
}