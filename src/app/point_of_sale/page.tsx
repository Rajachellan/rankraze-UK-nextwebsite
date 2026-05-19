"use client";

import { useState } from "react";
import Link from "next/link";
import {  ShoppingBag } from 'lucide-react';
const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+971", country: "UAE" },
  { code: "+65", country: "Singapore" },
];

const countries = [
  "India", "United States", "United Kingdom", "Australia",
  "Canada", "Singapore", "UAE", "Germany", "France", "Japan",
];

const languages = ["English", "Tamil", "Hindi", "Telugu", "Kannada", "Malayalam"];

const companySizes = [
  "1 - 5 employees",
  "6 - 20 employees",
  "21 - 50 employees",
  "51 - 200 employees",
  "201 - 500 employees",
  "500+ employees",
];

const primaryInterests = [
  "Use it in my company",
  "Digital Marketing",
  "SEO Services",
  "Web Development",
  "Social Media Marketing",
  "Google Ads",
  "ORM Services",
];

export default function GetStarted() {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneCode: "+91",
    phone: "",
    country: "India",
    language: "English",
    companySize: "1 - 5 employees",
    primaryInterest: "Use it in my company",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", form);
    alert("Form submitted successfully!");
  };

  return (
    <main className="min-h-screen bg-[#ffffff] mt-20 flex flex-col items-center justify-start py-12 px-4">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-8 gap-2">
        <h1
          className="text-5xl font-bold text-gray-900"
         
        >
          Get{" "}
          <span className="relative inline-block">
            Started
            {/* teal underline squiggle */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6 C40 2, 80 2, 120 5 C160 8, 180 2, 198 4"
                stroke="#3DBC9E"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </h1>
        <p className="text-sm text-gray-500 mt-3 font-medium tracking-wide">
          Free instant access. No credit card required.
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">

        {/* App Selection Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div className="flex items-center gap-3">
            {/* Point of Sale icon */}
            <div className="w-8 h-8 rounded-md bg-[#ECFDF5] flex items-center justify-center text-lg">
              <ShoppingBag size={20} color="#3DBC9E" />
            </div>
            <span className="text-sm font-semibold text-gray-800">Point of Sale</span>
          </div>
          <button className="text-xs font-medium text-[#3DBC9E] border border-[#3DBC9E] rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors duration-200">
            Change apps selection
          </button>
        </div>

        {/* Form Fields */}
        <div className="bg-gray-50 px-6 py-6 flex flex-col gap-3">

          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="First and Last Name"
              className="w-full bg-white border border-[#8bddb7] rounded-lg px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3DBC9E] focus:border-transparent transition-all duration-200 " required
            />
          </div>

          {/* Company Name */}
          <div>
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full bg-white border border-[#8bddb7] rounded-lg px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3DBC9E] focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Email + Phone */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="w-full sm:w-1/2">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-white border border-[#8bddb7] rounded-lg px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3DBC9E] focus:border-transparent transition-all duration-200" required
              />
            </div>
            <div className="w-full sm:w-1/2 flex gap-2">
              <select
                name="phoneCode"
                value={form.phoneCode}
                onChange={handleChange}
                className="bg-white border border-[#8bddb7] rounded-lg px-2 py-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3DBC9E] focus:border-transparent transition-all duration-200 w-24 flex-shrink-0"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="flex-1 bg-white border border-[#8bddb7] rounded-lg px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3DBC9E] focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Country + Language */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="w-full sm:w-1/2 relative">
              <label className="absolute top-2 left-4 text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                Country
              </label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full bg-white border border-[#8bddb7] rounded-lg px-4 pt-6 pb-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3DBC9E] focus:border-transparent transition-all duration-200 appearance-none"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="w-full sm:w-1/2 relative">
              <label className="absolute top-2 left-4 text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                Language
              </label>
              <select
                name="language"
                value={form.language}
                onChange={handleChange}
                className="w-full bg-white border border-[#8bddb7] rounded-lg px-4 pt-6 pb-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3DBC9E] focus:border-transparent transition-all duration-200 appearance-none"
              >
                {languages.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Company Size + Primary Interest */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="w-full sm:w-1/2 relative">
              <label className="absolute top-2 left-4 text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                Company size
              </label>
              <select
                name="companySize"
                value={form.companySize}
                onChange={handleChange}
                className="w-full bg-white border border-[#8bddb7] rounded-lg px-4 pt-6 pb-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3DBC9E] focus:border-transparent transition-all duration-200 appearance-none"
              >
                {companySizes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="w-full sm:w-1/2 relative">
              <label className="absolute top-2 left-4 text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                Primary Interest
              </label>
              <select
                name="primaryInterest"
                value={form.primaryInterest}
                onChange={handleChange}
                className="w-full bg-white border border-[#8bddb7] rounded-lg px-4 pt-6 pb-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3DBC9E] focus:border-transparent transition-all duration-200 appearance-none"
              >
                {primaryInterests.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center mt-1">
            By clicking on{" "}
            <span className="font-bold text-gray-700">Start Now</span>, you
            accept our{" "}
            <Link href="#" className="text-[#3DBC9E] underline underline-offset-2 hover:text-[#2fa882] transition-colors">
              Subscription Agreement
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#3DBC9E] underline underline-offset-2 hover:text-[#2fa882] transition-colors">
              Privacy Policy
            </Link>
          </p>

          {/* Submit Button */}
          <Link href="https://hotel.rankanalytics.in/"
            
            className="w-full mt-1 py-3.5 rounded-lg text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.99] hover:bg-[#c2f8df] bg-[#3DBC9E] hover:text-[#3DBC9E] text-center hover:border-[#3DBC9E] hover:border"
          >
            Start Now
          </Link>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        © {new Date().getFullYear()} Rankraze. All rights reserved.
      </p>
    </main>
  );
}