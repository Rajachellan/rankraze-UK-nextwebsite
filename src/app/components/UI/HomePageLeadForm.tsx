"use client";

import React, { useState } from 'react';
import apiInstance from '../../api/ContactFormAPI';
import { toast, Slide } from 'react-toastify';

export default function HomePageLeadForm () {
    type LeadformDetails = {
    name: string;
    email: string;
    phone: string;
    message: string;
    subject: string;
    };
    const [formDetail, setFormDetails] = useState<LeadformDetails>({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: '',
    });

    const handleUpdateSetFormDetails = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormDetails((prevFormDetails) => ({ ...prevFormDetails, [name]: value}));
    }

    const handleFormSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        try {
            await apiInstance.post("/api/form", formDetail);
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
        <form onSubmit={(e) => handleFormSubmit(e)} className="w-full px-8 py-20 flex items-center justify-evenly flex-col gap-4 shadow-[1px_0px_6px_rgba(0,0,0,0.04),-1px_0px_6px_rgba(0,0,0,0.04)] dark:shadow-[0px_3px_6px_rgba(255,255,255,0.15),0px_-2px_6px_rgba(255,255,255,0.1)] dark:border dark:border-orange-100 dark:text-white max-w-[520px] rounded-lg">
            <div className="w-full flex items-center justify-center text-center font-semibold text-lg text-gray-700 dark:text-gray-200">
                Get a Free Quote
            </div>
            <div className="w-full flex items-center justify-between gap-3.5">
                <input id='name' type="text" name='name' placeholder='name' value={formDetail.name} onChange={handleUpdateSetFormDetails} required className='w-1/2 px-4 border border-gray-200 rounded-md placeholder:capitalize placeholder:font-medium py-1.5 focus:outline-1 focus:outline-gray-400' />
                <input id='email' type="email" name='email' placeholder='email' value={formDetail.email} onChange={handleUpdateSetFormDetails} className='w-1/2 px-4 border border-gray-200 rounded-md placeholder:capitalize placeholder:font-medium py-1.5  focus:outline-1 focus:outline-gray-400' />
            </div>
            <div className="w-full flex items-center justify-center">
                <input id='phone' type="text" name='phone' placeholder='phone' value={formDetail.phone} onChange={handleUpdateSetFormDetails} required className='w-full px-4 border border-gray-200 rounded-md placeholder:capitalize placeholder:font-medium py-1.5  focus:outline-1 focus:outline-gray-400' />
            </div>
            <div className="w-full flex items-center justify-center">
                <input id='subject' type="text" name='subject' placeholder='subject' value={formDetail.subject} onChange={handleUpdateSetFormDetails} className='w-full px-4 border border-gray-200 rounded-md placeholder:capitalize placeholder:font-medium py-1.5  focus:outline-1 focus:outline-gray-400' />
            </div>
            <div className="w-full flex items-center justify-center">
                <textarea id='message' name='message' placeholder='message' value={formDetail.message} onChange={handleUpdateSetFormDetails} required className='w-full px-4 border border-gray-200 rounded-md placeholder:capitalize placeholder:font-medium py-1.5  focus:outline-1 focus:outline-gray-400' ></textarea>
            </div>
            <div className="w-full flex items-center justify-center">
                <button type="submit" className='w-full bg-[var(--primary-blue)] text-sm text-white font-medium py-1.5 text-center rounded-md dark:invert'>Submit</button>
            </div>
        </form>
        </>
    )
}