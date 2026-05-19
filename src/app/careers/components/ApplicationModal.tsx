"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { applyForJob, type Job as JobType } from "../../api/JobAPI";

interface ApplicationModalProps {
  isOpen: boolean;
  job: JobType | null;
  onClose: () => void;
}

export default function ApplicationModal({ isOpen, job, onClose }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    linkedinProfile: "",
    highestQualification: "",
    overallExperience: "",
    noticePeriod: "",
    resume: null as File | null,
  });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
    
    // Real-time validation for mobile number
    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length > 10) {
        return; // Prevent input more than 10 digits
      }
    }
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (file.size > maxSize) {
        setFormErrors(prev => ({ ...prev, resume: "File size must be less than 5MB" }));
        return;
      }
      
      setFormData(prev => ({ ...prev, resume: file }));
      setFormErrors(prev => ({ ...prev, resume: "" }));
    }
  };

  // Validate form data
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    // Full Name validation
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      errors.fullName = "Name must be at least 3 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      errors.fullName = "Name can only contain letters and spaces";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    // Mobile validation - exactly 10 digits
    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\s+/g, ''))) {
      errors.mobile = "Mobile number must be exactly 10 digits";
    }
    
    // Gender validation
    if (!formData.gender) {
      errors.gender = "Please select your gender";
    }
    
    // LinkedIn validation (optional but if provided, check format)
    if (formData.linkedinProfile && !/^https?:\/\/(www\.)?linkedin\.com\/in\/.+/.test(formData.linkedinProfile)) {
      errors.linkedinProfile = "Please enter a valid LinkedIn profile URL";
    }
    
    // Qualification validation
    if (!formData.highestQualification) {
      errors.highestQualification = "Qualification is required";
    }
    
    // Experience validation
    if (!formData.overallExperience.trim()) {
      errors.overallExperience = "Experience is required";
    }
    
    // Notice Period validation
    if (!formData.noticePeriod) {
      errors.noticePeriod = "Notice period is required";
    }
    
    // Resume validation
    if (!formData.resume) {
      errors.resume = "Resume is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit application
  async function handleSubmitApplication(e: React.FormEvent) {
    e.preventDefault();
    
    if (!job) {
      setSubmitMessage("No job selected. Please try again.");
      return;
    }
    
    // Validate form
    if (!validateForm()) {
      setSubmitMessage("Please fix the errors in the form before submitting.");
      return;
    }

    // Ensure resume is present and narrow the type for TypeScript
    const resumeFile = formData.resume;
    if (!resumeFile) {
      setSubmitMessage("Please attach your resume before submitting.");
      return;
    }

    try {
      setSubmitLoading(true);
      setSubmitMessage("");
      setFormErrors({});

      const result = await applyForJob({
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        gender: formData.gender,
        linkedinProfile: formData.linkedinProfile,
        highestQualification: formData.highestQualification,
        overallExperience: formData.overallExperience,
        noticePeriod: formData.noticePeriod,
        job: job._id,
        resume: resumeFile,
      });

      if (result.success) {
        setSubmitMessage(result.message);
        setTimeout(() => {
          onClose();
          setFormData({
            fullName: "",
            email: "",
            mobile: "",
            gender: "",
            linkedinProfile: "",
            highestQualification: "",
            overallExperience: "",
            noticePeriod: "",
            resume: null,
          });
          setSubmitMessage("");
        }, 2000);
      } else {
        setSubmitMessage(result.message);
      }
    } catch {
      setSubmitMessage("Failed to submit application. Please try again.");
    } finally {
      setSubmitLoading(false);
    }
  }

  if (!isOpen || !job) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#0A1628] border dark:border-[rgba(255,255,255,0.08)] p-4 md:p-8 lg:p-10 rounded-xl shadow-xl w-[90%] max-w-2xl relative max-h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white dark:bg-[#0A1628] border dark:border-[rgba(255,255,255,0.08)] w-8 h-8 mt-6 mr-5 rounded-full flex items-center justify-center shadow cursor-pointer transition-colors duration-300"
        >
          <X size={20} color="#088b3cff" strokeWidth={3} />
        </button>

        {/* Header with gradient */}
        <div className="text-center mb-8 pb-6 border-b-2 border-amber-500/20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-[#07334d] to-[#3DBC9C] bg-clip-text text-transparent">
            Apply for {job.jobTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Join our team and make an impact</p>
        </div>

        {submitMessage && (
          <div className={`mb-6 p-4 rounded-xl border-2 animate-pulse ${submitMessage.toLowerCase().includes('success') ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-500 text-green-700 dark:from-green-900/20 dark:to-emerald-900/20 dark:text-green-400' : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-500 text-red-700 dark:from-red-900/20 dark:to-rose-900/20 dark:text-red-400'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{submitMessage.toLowerCase().includes('success') ? '✓' : '⚠'}</span>
              <span className="font-semibold">{submitMessage}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmitApplication} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`border-2 ${formErrors.fullName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} p-3 rounded-lg focus:border-[#3DBC9C] focus:ring-2 focus:ring-[#3DBC9C]/20 dark:bg-gray-800 transition-all`}
              required
            />
            {formErrors.fullName && (
              <span className="text-red-500 text-sm mt-1 font-semibold">{formErrors.fullName}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className={`border-2 ${formErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} p-3 rounded-lg focus:border-[#3DBC9C] focus:ring-2 focus:ring-[#3DBC9C]/20 dark:bg-gray-800 transition-all`}
              required
            />
            {formErrors.email && (
              <span className="text-red-500 text-sm mt-1 font-semibold">{formErrors.email}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="mobile" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="Enter 10-digit mobile number"
              value={formData.mobile}
              onChange={handleInputChange}
              maxLength={10}
              className={`border-2 ${formErrors.mobile ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} p-3 rounded-lg focus:border-[#3DBC9C] focus:ring-2 focus:ring-[#3DBC9C]/20 dark:bg-gray-800 transition-all`}
              required
            />
            {formErrors.mobile && (
              <span className="text-red-500 text-sm mt-1 font-semibold">{formErrors.mobile}</span>
            )}
            {formData.mobile && !formErrors.mobile && formData.mobile.length === 10 && (
              <span className="text-green-500 text-sm mt-1 font-semibold flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Valid mobile number
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700 dark:text-gray-300">Gender <span className="text-red-500">*</span></label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-[#3DBC9C] transition-all">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-[#3DBC9C] focus:ring-[#3DBC9C]"
                />
                <span className="font-medium">Male</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-[#3DBC9C] transition-all">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-[#3DBC9C] focus:ring-[#3DBC9C]"
                />
                <span className="font-medium">Female</span>
              </label>
            </div>
            {formErrors.gender && (
              <span className="text-red-500 text-sm mt-1 font-semibold">{formErrors.gender}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="linkedinProfile" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
              LinkedIn Profile
            </label>
            <input
              id="linkedinProfile"
              name="linkedinProfile"
              type="text"
              placeholder="https://linkedin.com/in/yourprofile"
              value={formData.linkedinProfile}
              onChange={handleInputChange}
              className="border-2 border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:border-[#3DBC9C] focus:ring-2 focus:ring-[#3DBC9C]/20 dark:bg-gray-800 transition-all"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="highestQualification" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Highest Qualification <span className="text-red-500">*</span>
            </label>
            <select
              id="highestQualification"
              name="highestQualification"
              value={formData.highestQualification}
              onChange={handleInputChange}
              className="border-2 border-gray-300 dark:border-gray-600 px-4 py-3 rounded-lg focus:border-[#3DBC9C] focus:ring-2 focus:ring-[#3DBC9C]/20 dark:bg-gray-800 transition-all"
              required
            >
              <option value="">Select your qualification</option>
              <option value="Doctorate">🎓 Doctorate</option>
              <option value="Post Graduate">📚 Post Graduate</option>
              <option value="Under Graduate">📖 Under Graduate</option>
              <option value="Diploma">📜 Diploma</option>
              <option value="Others">📝 Others</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="overallExperience" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Overall Experience <span className="text-red-500">*</span>
            </label>
            <input
              id="overallExperience"
              name="overallExperience"
              type="text"
              placeholder="e.g., 3 years"
              value={formData.overallExperience}
              onChange={handleInputChange}
              className="border-2 border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:border-[#3DBC9C] focus:ring-2 focus:ring-[#3DBC9C]/20 dark:bg-gray-800 transition-all"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="noticePeriod" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Notice Period <span className="text-red-500">*</span>
            </label>
            <select
              id="noticePeriod"
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleInputChange}
              className="border-2 border-gray-300 dark:border-gray-600 px-4 py-3 rounded-lg focus:border-[#3DBC9C] focus:ring-2 focus:ring-[#3DBC9C]/20 dark:bg-gray-800 transition-all"
              required
            >
              <option value="">Select your notice period</option>
              <option value="Immediate Joining">⚡ Immediate Joining</option>
              <option value="Under 15 Days">📅 Under 15 Days</option>
              <option value="Under 1 Month">📆 Under 1 Month</option>
              <option value="Others">⏰ Others</option>
            </select>
          </div>
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="resume" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Upload Resume <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
                className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-4 rounded-lg w-full focus:border-[#3DBC9C] focus:ring-2 focus:ring-[#3DBC9C]/20 dark:bg-gray-800 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-[#3DBC9C] file:to-[#07334d] file:text-white hover:file:opacity-90 file:cursor-pointer"
                required
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={submitLoading}
              className="w-full bg-gradient-to-r from-[#3DBC9C] to-[#07334d] hover:from-[#07334d] hover:to-[#3DBC9C] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mt-6"
            >
              {submitLoading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting Application...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Submit Application
                  <span className="text-xl">→</span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
