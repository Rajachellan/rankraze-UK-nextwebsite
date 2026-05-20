"use client";

import Image from "next/image";
import { useState } from "react";

export default function  MapAndLocationMatch () {
    type MapAndLocationMatchProps = {
        country:string,
        address:string,
        phone:string,
        email:string,
        imgUrl:string,
    }

    const locationDetails:MapAndLocationMatchProps[] = [
        {
            country: "USA",
            address: "2801 W, Royal lane, Apt # 1905, Irving, TX - 75063.",
            phone: "+1 (919) 455-1241",
            email: "info@rankraze.us",
            imgUrl: "/upload/usa-skt.webp",
        },
        {
            country: "India",
            address: "2nd Floor, Karuna Conclave, AD 42 & 45, 4th Ave, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040",
            phone: "+91 99622 62210 - 04448067255",
            email: "info@rankraze.us",
            imgUrl: "/upload/india-skt.webp",
        },
        {
            country: "Canada",
            address: "5025 Sources Blvd suite 126, Pierrefonds-Roxboro, Quebec H8Y 3H8, Canada.",
            phone: "+44 7404 979307",
            email: "info@rankraze.ca",
            imgUrl: "/upload/canada-skt.webp",
        },
        {
            country: "France",
            address: "37 Rue du Comte Emmery, 57070 Metz, France.",
            phone: "+33651805164",
            email: "info@rankraze.fr",
            imgUrl: "/upload/france-skt.webp",
        },
        {
            country: "UAE",
            address: "Artesia Tower, Damac Hills, Dubai UAE.",
            phone: "+971 0507747916",
            email: "info@rankraze.ae",
            imgUrl: "/upload/dubai-skt.webp",
        },
        {
            country: "UK",
            address: "Capital Office, 124 City Road, London, EC1V 2NX.",
            phone: "+44 7404 979307",
            email: "info@rankraze.co.uk",
            imgUrl: "/upload/uk-skt.webp",
        },
        {
            country: "Australia",
            address: "4 Greenhouse St, Austral NSW 2179, Australia.",
            phone: "+61 406 567 394",
            email: "info@rankraze.us.au",
            imgUrl: "/upload/aus-skt.webp",
        },
    ]

    const [currentLocationIndex, setLocationIndex] = useState(0);
    return (
        <>
        <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 max-w-7xl mb-2.5 relative">
            <div className={`w-full md:w-[30%] relative inset-shadow-xl shadow-white`}>
                <div className="absolute w-full h-full bg-[auto_100%] md:bg-cover bg-right md:bg-center bg-no-repeat -z-10 opacity-20 dark:opacity-35 grayscale-100 dark:invert dark:brightness-100" style={{
                    backgroundImage: `url(${locationDetails[currentLocationIndex]?.imgUrl})`,
                }}></div>
                <div className="w-full h-full flex-col flex justify-evenly items-center p-5 border border-gray-100 rounded-sm shadow shadow-gray-300 dark:border-[#b8fff2] z-10">
                    <div className="w-full flex flex-col gap-2.5">
                        <div className="w-full flex items-stretch justify-center gap-3">
                            <div className="w-5 p-2">
                                <i className="ri-map-pin-line text-2xl text-[var(--primary-green)]"></i>
                            </div>
                            <div className="w-full p-2 felx flex-col">
                                <h3 className="inline-block font-bold dark:text-[#6bffe4]">{locationDetails[currentLocationIndex]?.country} Office</h3>
                                <span className="inline-block font-light text-gray-900 dark:text-[#b8fff2] text-sm md:text-base">{locationDetails[currentLocationIndex]?.address}</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2.5">
                        <div className="w-full flex items-stretch justify-center gap-3">
                            <div className="w-5 p-2">
                                <i className="ri-phone-line text-2xl text-[var(--primary-green)]"></i>
                            </div>
                            <div className="w-full p-2 flex flex-col">
                                <h4 className="inline-block font-bold dark:text-[#6bffe4]">Phone</h4>
                                <span className="inline-block font-light text-gray-900 dark:text-[#b8fff2] text-sm md:text-base">{locationDetails[currentLocationIndex]?.phone}</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2.5">
                        <div className="w-full flex items-stretch justify-center gap-3">
                            <div className="w-5 p-2">
                                <i className="ri-mail-line text-2xl text-[var(--primary-green)]"></i>
                            </div>
                            <div className="w-full p-2 flex flex-col">
                                <h4 className="inline-block font-bold dark:text-[#6bffe4]">Email</h4>
                                <span className="inline-block font-light text-gray-900 dark:text-[#b8fff2] text-sm md:text-base">{locationDetails[currentLocationIndex]?.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[70%] relative p-3.5 border border-gray-100 dark:border-[rgba(255,255,255,0.08)] rounded-sm shadow shadow-[#BDF7EC] dark:shadow-none bg-white dark:bg-[#0A1628] transition-colors duration-300">
                <Image 
                src="/upload/location_worldmap_image.webp"
                alt="Map and Location Match"
                width={1000}
                height={500}
                style={{ objectFit: "cover" }}
                className="h-full w-auto md:w-full md:h-auto"
                />
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[41.6%] left-[23%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(0)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[35%] left-[28.5%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(2)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[32.5%] left-[46%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(3)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[45%] left-[58.8%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(4)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[29%] left-[44.4%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(5)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[50%] left-[65%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(1)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
                <div className="w-3.5 h-3.5 absolute flex items-center justify-center rounded-full top-[74%] left-[85.4%]  bg-[var(--primary-green)] z-10 cursor-pointer before:content-[''] before:w-full before:h-full before:rounded-full before:bg-[var(--primary-green)] before:animate-ping before:absolute before:top-0 before:left-0 before:-z-10 before:scale-150"
                onClick={() => setLocationIndex(6)}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-950 z-10"></div>
                </div>
            </div>
        </div>
        </>
    )
}