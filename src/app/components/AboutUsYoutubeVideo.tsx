"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export default function AboutUsYoutubeVideo() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <button className="w-8 md:w-16 lg:w-24 grid place-items-center aspect-square bg-gray-100 rounded-full relative cursor-pointer" onClick={() => setIsOpen(true)}>
            <i className="ri-play-fill text-2xl md:text-5xl lg:text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#3CBA99]"></i>
            <div className="w-10/12 aspect-square bg-gray-200 rounded-full absolute cursor-pointer -z-10 animate-ping [animation-delay:0s]  [animation-duration:3s]"></div>
            <div className="w-10/12 aspect-square bg-gray-200 rounded-full absolute cursor-pointer -z-10 animate-ping [animation-delay:0.4s]  [animation-duration:3s]"></div>
            <div className="w-10/12 aspect-square bg-gray-200 rounded-full absolute cursor-pointer -z-10 animate-ping [animation-delay:0.8s]  [animation-duration:3s]"></div>
        </button>

        {isOpen && (
            createPortal(
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 bg-opacity-75">
                    <div className="relative w-11/12 max-w-3xl aspect-video bg-black rounded-lg shadow-lg">
                        <button
                            className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
                            onClick={() => setIsOpen(false)}
                        >   &times;
                        </button>
                        <iframe 
                            src="https://www.youtube.com/embed/TqiaGdqEUsM?feature=oembed?playlist=TqiaGdqEUsM&mute=0&autoplay=0&loop=no&controls=0&start=0&end="
                            className="w-full h-full rounded-lg"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>,
                document.body
            )
        )}  
        </>
    );
}