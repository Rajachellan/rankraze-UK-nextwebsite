"use client";

import { useState } from "react";
import Link from "next/link";

export default function SlideOutDrawer () {
    const [hiddenContactUs, setHiddenContactUs] = useState(true)
    return (
        <>
        <div className="fixed transform -rotate-90 origin-bottom flex items-center justify-center right-0 top-1/2 -translate-y-1/2 cursor-pointer overflow-visible translate-x-1/2 z-50">
            <ul className="w-full h-full flex flex-row-reverse">
                <li>
                    <button onClick={() => setHiddenContactUs(!hiddenContactUs)} 
                     aria-label="Open menu"
                    className="h-full w-full px-2 flex items-center justify-center bg-black dark:bg-white rounded-tr-md">
                        <i className={`${hiddenContactUs ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} text-white dark:text-black`}></i>
                    </button>
                </li>
                <li className={`${hiddenContactUs ? 'translate-y-full' : 'slide-top' }`}>
                    <div className="w-full h-full shadow-2xl relative bg-[var(--primary-blue)] dark:bg-white rounded-tl-md group">
                        <Link href={"contact-us"}>
                            <div className="px-8 py-3.5 flex items-center justify-center">
                                <span className=" whitespace-nowrap text-white dark:text-[var(--primary-blue)] text-sm xl:text-base tracking-wider font-medium [word-spacing:0.5rem]">contact us</span>
                            </div>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
        </>
    )
}