"use client";

import React, { useState, useEffect, useRef } from "react";
import ThemeSwitch from "../ThemeSwitch";
import MobileNavigationBar from "./NavigationMobile";

export default function Header ({
    data
} : {
    data: React.ReactNode
}) {
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    // Mobile drop down menu option


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 0) return;

            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`w-full flex items-center justify-center h-20 fixed z-50 top-0 left-0 bg-white dark:bg-[var(--prim-dark-bg)]
                            transition-transform duration-400 ease-in-out
                            ${visible ? "translate-y-0" : "-translate-y-full"}
                            opacity-100 transition-opacity duration-500 ease-in-out
                            ${visible ? "opacity-100" : "opacity-0"}`}>
            {/* Desktop Navigation Bar "data" have desktop nav bar */}                    
            { data }
            
            {/* Out side Header Dark mode toggle */}
            <div className="sm:hidden 2lg:block xl:hidden absolute top-full right-0 rounded-full bg-white dark:bg-transparent mt-2">
                <ThemeSwitch />
            </div>

            {/* Mobile & Tablet Navigation Bar */}
            <MobileNavigationBar />
        </header>
    )
}