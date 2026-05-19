"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Mail, Briefcase, Users, User, CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";
import apiInstance from '../../api/ContactFormAPI';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMessage?: string;
}

interface ToastState {
  show: boolean;
  type: "success" | "error";
  message: string;
}

export default function ContactFormModal({ isOpen, onClose, defaultMessage = "Select Service" }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: defaultMessage,
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, type: "success", message: "" });

  const formDropDown = [
    "Select Service",
    "Digital Marketing",
    "SEO Services",
    "Google Ads / Paid Marketing",
    "Social Media Marketing",
    "Website Development",
    "Software / Web Application Development",
    "Mobile App Development",
    "Branding & Design",
    "AI / Automation Solutions",
    "Not Sure Yet (Need Expert Guidance)",
  ]

  // Show toast notification
  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: "success", message: "" }), 5000);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", phone: "", email: "" };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await apiInstance.post("/api/form", formData);
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: defaultMessage,
        message: "",
      });

      showToast("success", "Form submitted, we'll respond soon!");
    } catch {
      showToast("error", "Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-1.5 md:p-4">
          {/* Toast Notification */}
          <AnimatePresence>
            {toast.show && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className={`fixed top-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl ${toast.type === "success"
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : "bg-red-50 border border-red-200 text-red-800"
                  }`}
              >
                {toast.type === "success" ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
                <span className="font-medium text-sm">{toast.message}</span>
                <button
                  onClick={() => setToast({ show: false, type: "success", message: "" })}
                  className="ml-2 hover:opacity-70"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="grid md:grid-cols-2 h-full">
              {/* Left Side - Image & Info */}
              <div className="relative order-2 md:order-1 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 flex flex-col justify-between gap-3.5 lg:gap-5">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary-green)] rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-white">Get Your Custom Quote</span>
                  </div> */}

                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    Start Your Digital
                    <span className="block text-[var(--primary-green)]">Journey Today</span>
                  </h2>

                  <p className="text-sm md:text-sm xl:text-base 3xl:text-lg text-gray-300 mb-8">
                    Our digital marketing specialists will craft a personalized strategy designed to grow your business online.
                  </p>

                  {/* Features */}
                  <div className="space-y-3 md:space-y-4">
                    {[
                      { icon: MapPin, text: "Proven SEO & Performance Marketing" },
                      { icon: Briefcase, text: "End-to-End Digital Growth Partner" },
                      { icon: Users, text: "A Decade of Digital Expertise" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 md:gap-3 text-white/90">
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-[var(--primary-green)]" />
                        </div>
                        <span className="text-sm md:text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Image - Stock workspace image */}
                <div className="hidden md:block relative z-10 mt-3.5 rounded-2xl overflow-hidden h-full">
                  <Image
                    width={1024}
                    height={1024}
                    src="/upload/contact-form-img.webp" alt="Rankraze Digital Marketing Services" className="object-cover w-full h-auto" />
                </div>

                <div className="block md:hidden mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    🔒 Your information is secure and will never be shared with third parties.
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="relative order-1 md:order-2 p-6 md:p-8 lg:p-12">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Strategy Consultation</h3>
                  <p className="text-sm md:text-base text-gray-600">Fill in your details and we&apos;ll get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 md:space-y-5 dark:text-gray-900">
                  {/* Name */}
                  <div>
                    {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label> */}
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl text-sm md:text-base border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900/20 ${errors.name ? "border-red-500" : "border-gray-200 focus:border-gray-900"
                          }`}
                        placeholder="Full Name"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    {/* <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label> */}
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl text-sm md:text-base border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900/20 ${errors.phone ? "border-red-500" : "border-gray-200 focus:border-gray-900"
                          }`}
                        placeholder="Mobile Number"
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label> */}
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl text-sm md:text-base border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900/20 ${errors.email ? "border-red-500" : "border-gray-200 focus:border-gray-900"
                          }`}
                        placeholder="Email ID"
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl text-sm md:text-base border-2 border-gray-200 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20 transition-colors bg-white"
                  >
                    {
                      formDropDown.map((menu, index) => (
                        <option value={menu} key={index} disabled={menu === "Select Service"} >{menu}</option>
                      ))
                    }
                  </select>
                  <div className="w-full">
                    {/* <label htmlFor="seats" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Seats
                      </label> */}
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl text-sm md:text-base border-2 border-gray-200 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20 transition-colors"
                      placeholder="Briefly tell us about your requirement (optional)"
                      maxLength={300}
                    >
                    </textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gray-900/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>

                {/* Trust Badge */}
                <div className="hidden md:block mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    🛡️ Your information is 100% secure. We never share your data with third parties.
                  </p>
                  <p className="text-sm text-gray-500 text-center">
                    ⭐ Trusted by growing businesses & startups
                  </p>
                </div>

              </div>
            </div>
          </motion.div >
        </div >
      )
      }
    </AnimatePresence >
  );
}
