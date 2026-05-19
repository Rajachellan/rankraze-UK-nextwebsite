"use client";

import React, { useState } from 'react';
import apiInstance from '../../api/ContactFormAPI';
import { toast, Slide } from 'react-toastify';

interface FromDetails {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formDetails, setFormDetails] = useState<FromDetails>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleFormSetterFunction = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFormSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        try {
            await apiInstance.post("/api/form", formDetails);
            setFormDetails({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });

            toast.success("Form submitted, we'll respond soon!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            });

        } catch {
            toast.error('Form submission failed, try again', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            });
        }
    }

    return (
        <>
        <div className="w-full max-w-[480px] px-4 py-6 bg-white dark:bg-[#292639] rounded-lg shadow-2xs border border-gray-100 dark:border-gray-500 relative mt-6">
            <div className="absolute py-1.5 px-3.5 top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-[var(--primary-blue)] dark:bg-white rounded-md">
                <p className='text-sm lg:text-base font-medium text-white dark:text-[var(--primary-blue)] text-center inline-block'>Send Us a Message</p>
            </div>
            <form onSubmit={(e) => handleFormSubmit(e)} className="w-full p-2.5 flex flex-col items-center justify-center gap-2.5 md:3 lg:gap-4 xl:gap-5">
                <div className="w-full flex gap-1.5 lg:gap-2.5">
                    <input type='text' name='name' required value={formDetails.name} placeholder='name' onChange={(e) => handleFormSetterFunction(e)} className="w-1/2 py-1.5 px-2.5 placeholder:text-gray-400 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-transparent focus:bg-transparent border border-gray-100 dark:border-gray-500 dark:focus:border-gray-300 focus:outline-0 focus:border-gray-500 focus:placeholder:text-gray-300 dark:focus:placeholder:text-gray-500 rounded-sm transform transition-all duration-300"/>
                    <input type='text' name='phone' required value={formDetails.phone} placeholder='phone' onChange={(e) => handleFormSetterFunction(e)} className="w-1/2 py-1.5 px-2.5 placeholder:text-gray-400 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-transparent focus:bg-transparent border border-gray-100 dark:border-gray-500 dark:focus:border-gray-300 focus:outline-0 focus:border-gray-500 focus:placeholder:text-gray-300 dark:focus:placeholder:text-gray-500 rounded-sm transform transition-all duration-300"/>
                </div>
                <input type='email' name='email' required value={formDetails.email} placeholder='email' onChange={(e) => handleFormSetterFunction(e)} className="w-full py-1.5 px-2.5 placeholder:text-gray-400 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-transparent focus:bg-transparent border border-gray-100 dark:border-gray-500 dark:focus:border-gray-300 focus:outline-0 focus:border-gray-500 focus:placeholder:text-gray-300 dark:focus:placeholder:text-gray-500 rounded-sm transform transition-all duration-300"/>
                <input type='text' name='subject' required value={formDetails.subject} placeholder='subject' onChange={(e) => handleFormSetterFunction(e)} className="w-full py-1.5 px-2.5 placeholder:text-gray-400 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-transparent focus:bg-transparent border border-gray-100 dark:border-gray-500 dark:focus:border-gray-300 focus:outline-0 focus:border-gray-500 focus:placeholder:text-gray-300 dark:focus:placeholder:text-gray-500 rounded-sm transform transition-all duration-300"/>
                <textarea name='message'  value={formDetails.message} placeholder='message' onChange={(e) => handleFormSetterFunction(e)} className="w-full min-h-24 py-1.5 px-2.5 placeholder:text-gray-400 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-transparent focus:bg-transparent border border-gray-100 dark:border-gray-500 dark:focus:border-gray-300 focus:outline-0 focus:border-gray-500 focus:placeholder:text-gray-300 dark:focus:placeholder:text-gray-500 rounded-sm transform transition-all duration-300"></textarea>
                <div className="w-full px-2.5 flex items-center justify-center">
                    <button type="submit" className="relative overflow-hidden text-sm px-4 py-1.5 rounded-md bg-[var(--primary-blue)] font-light text-white cursor-pointer before:content-[''] before:absolute before:w-full before:h-5 before:scale-x-200 before:bg-[#ffffff56] before:top-1/2 before:left-1/2 before:rotate-45 before:-translate-x-[150%] before:transform before:transition-all before:duration-500 hover:before:translate-x-full before:ease-in-out">
                        submit
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}