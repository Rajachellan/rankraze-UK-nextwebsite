"use client";


import { useState } from "react";
import type { Job, JobApplicationData } from "../../api/JobAPI";
import { applyForJob } from "../../api/JobAPI";

interface JobDetailClientProps {
  job: Job;
}

export default function JobDetailClient({ job }: JobDetailClientProps) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.resume) {
      alert("Please fill all fields and upload your resume");
      return;
    }

    setSubmitting(true);
    try {
      const applicationData: JobApplicationData = {
        ...formData,
        job: job._id,
        resume: formData.resume,
      };

      await applyForJob(applicationData);
      setSubmitSuccess(true);
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

      setTimeout(() => {
        setShowApplicationForm(false);
        setSubmitSuccess(false);
      }, 3000);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to submit application");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 dark:bg-black min-h-screen mt-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[var(--primary-blue)] dark:text-blue-500">
        {job.jobTitle}
      </h1>
      <p className="text-gray-500 mb-4 dark:text-gray-400">
        {job.posted || new Date(job.createdAt).toLocaleDateString()}
      </p>

      <div className="flex flex-wrap gap-4 mb-6">
        <span className="text-black dark:text-gray-400">
          Location: {job.city}, {job.state}, {job.country}
        </span>
        <span className="text-black dark:text-gray-400">
          Work Experience: {job.workExperience}
        </span>
        <span className="text-black dark:text-gray-400">
          Job Type: {job.jobType}
        </span>
      </div>

      <button
        onClick={() => setShowApplicationForm(true)}
        className="mb-8 px-8 py-3 bg-[var(--primary-green)] text-white rounded-md hover:opacity-90 transition-opacity font-semibold"
      >
        Apply Now
      </button>

      <h2 className="text-2xl font-semibold mb-2 text-black dark:text-gray-300">
        Job Description
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        {job.jobDescription}
      </p>

      {job.responsibilities && job.responsibilities.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-black dark:text-gray-300">
            Responsibilities
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {job.qualifications && job.qualifications.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-black dark:text-gray-300">
            Qualifications
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {job.qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {job.perks && job.perks.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-black dark:text-gray-300">
            Perks & Benefits
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {job.perks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-4 text-gray-500 dark:text-gray-400">
        Exact Location: {job.location}
      </p>

      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Apply for {job.jobTitle}
              </h2>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
              >
                X
              </button>
            </div>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Application submitted successfully! We&apos;ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Mobile *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Gender *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  LinkedIn Profile *
                </label>
                <input
                  type="url"
                  name="linkedinProfile"
                  value={formData.linkedinProfile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Highest Qualification *
                </label>
                <select
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select Qualification</option>
                  <option value="High School">High School</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Under Graduate">Under Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                  <option value="Doctorate">Doctorate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Overall Experience *
                </label>
                <input
                  type="text"
                  name="overallExperience"
                  value={formData.overallExperience}
                  onChange={handleInputChange}
                  placeholder="e.g., 2 years"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Notice Period *
                </label>
                <select
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select Notice Period</option>
                  <option value="Immediate">Immediate</option>
                  <option value="Under 15 Days">Under 15 Days</option>
                  <option value="1 Month">1 Month</option>
                  <option value="2 Months">2 Months</option>
                  <option value="3 Months">3 Months</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Resume (PDF, DOC, DOCX) *
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-6 py-3 bg-[var(--primary-green)] text-white rounded-md hover:opacity-90 transition-opacity font-semibold disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
