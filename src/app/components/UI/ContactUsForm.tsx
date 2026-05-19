"use client";

import { useState } from "react";
import apiInstance from '../../api/ContactFormAPI';
import { toast, Slide } from 'react-toastify';

export default function ContactUsForm () {
    type FormDetails = {
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
    }
    const [formDetails, setFormDetails] = useState<FormDetails>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleFormInputs = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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

            } 
        catch {
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
        <h2 className="text-lg md:text-2xl font-bold text-white capitalize">feel free to contact us</h2>
        <form onSubmit={(e) => handleSubmit(e)} className="grid grid-cols-3 gap-1.5 w-full items-start justify-center">
            <div className="col-span-3 md:col-span-1">
                <input type="text" value={formDetails.name} name="name" placeholder="Name" onChange={(e) => handleFormInputs(e)} required
                className="w-full text-sm md:text-base bg-white px-2.5 py-1.5 md:py-1 rounded-md text-gray-600 font-medium focus:outline-0 placeholder:text-gray-500 placeholder:font-semibold" />
            </div>
            <div className="col-span-3 md:col-span-1">
                <input type="email" value={formDetails.email} name="email" placeholder="Email" onChange={(e) => handleFormInputs(e)} required
                className="w-full text-sm md:text-base bg-white px-2.5 py-1.5 md:py-1 rounded-md text-gray-600 font-medium focus:outline-0 placeholder:text-gray-500 placeholder:font-semibold" />
            </div>
            <div className="col-span-3 md:col-span-1">
                <input type="text" value={formDetails.phone} name="phone" placeholder="Phone" onChange={(e) => handleFormInputs(e)} required
                className="w-full text-sm md:text-base bg-white px-2.5 py-1.5 md:py-1 rounded-md text-gray-600 font-medium focus:outline-0 placeholder:text-gray-500 placeholder:font-semibold" />
            </div>
            <div className="col-span-3">
                <input type="text" value={formDetails.subject} name="subject" placeholder="Subject" onChange={(e) => handleFormInputs(e)} required
                className="w-full text-sm md:text-base bg-white px-2.5 py-1.5 md:py-1 rounded-md text-gray-600 font-medium focus:outline-0 placeholder:text-gray-500 placeholder:font-semibold" />
            </div>
            <div className="col-span-3">
                <textarea value={formDetails.message} name="message" placeholder="Message" onChange={(e) => handleFormInputs(e)} required
                    className="w-full text-sm md:text-base bg-white px-2.5 py-1 rounded-md text-gray-600 font-medium focus:outline-0 placeholder:text-gray-500 placeholder:font-semibold min-h-20 md:min-h-24 lg:min-h-32">
                </textarea>
            </div>
            <div className="col-span-1">
                <button type="submit" className="text-white text-sm md:text-base font-medium px-3 py-1.5 cursor-pointer rounded-md shadow-sm relative group bg-[#3dbc83] before:content-[''] before:absolute before:w-full before:h-full before:top-1.5 before:left-1.5 before:shadow-2xl before:shadow-[] before:rounded-md before:-z-10 transform transition-transform duration-300 hover:scale-110">
                    Submit 
                    <i className="ri-arrow-right-double-line inline md:inline-block"></i>
                </button>
            </div>
        </form>
        </>
    )
}