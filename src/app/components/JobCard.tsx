"use client"; // Needed for useParams

import { useParams } from "next/navigation";

const jobs = [
  {
    jobTitle: "Sales Executive",
    jobDescription:
      "This is the detailed job description for Sales Executive. Responsibilities include contacting clients, managing sales pipeline, and reporting to manager.",
    jobType: "Full-time",
    workExperience: "0–1 year",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    location: "Anna Nagar",
    responsibilities: [
      "Contacting clients",
      "Managing sales pipeline",
      "Reporting to manager",
      "Preparing sales reports",
    ],
    qualifications: [
      "Bachelor's degree in Business or related field",
      "Excellent communication skills",
      "Prior sales experience preferred",
    ],
    perks: [
      "Health insurance",
      "Paid leave",
      "Performance-based incentives",
    ],
    posted: "3 Days ago",
    employmentType: "Full-time", // same as jobType
  },
  {
    jobTitle: "Business Development Manager",
    jobDescription:
      "Lead business growth, manage clients and oversee team performance.",
    jobType: "Full-time",
    workExperience: "2–4 years",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    location: "Anna Nagar",
    responsibilities: [
      "Identify new business opportunities",
      "Manage client relationships",
      "Oversee team performance",
    ],
    qualifications: [
      "Bachelor's degree or higher",
      "Proven experience in business development",
      "Strong leadership skills",
    ],
    perks: ["Company car allowance", "Health benefits", "Bonus incentives"],
    posted: "1 Day ago",
    employmentType: "Full-time",
  },
];

export default function JobDetailPage() {
  const params = useParams();
  const { slug } = params;

  const job = jobs.find(
    (j) => j.jobTitle.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!job) return <p className="p-6 text-center">Job not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 dark:bg-black min-h-screen mt-20">
      {/* Job Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[var(--primary-blue)] dark:text-blue-500">
        {job.jobTitle}
      </h1>
      <p className="text-gray-500 mb-4 dark:text-gray-400">{job.posted}</p>

      {/* Job Location & Type */}
      <div className="flex flex-wrap gap-4 mb-6">
        <span className="text-gray-500 dark:text-gray-400">
          Location: {job.city}, {job.state}, {job.country}
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          Work Experience: {job.workExperience}
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          Job Type: {job.jobType}
        </span>
      </div>

      {/* Description */}
      <h2 className="text-2xl font-semibold mb-2 text-white dark:text-gray-300">Job Description</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        {job.jobDescription}
      </p>

      {/* Responsibilities */}
      {job.responsibilities && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-white dark:text-gray-300">Responsibilities</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Qualifications */}
      {job.qualifications && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-white dark:text-gray-300">Qualifications</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {job.qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Perks */}
      {job.perks && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-white dark:text-gray-300">Perks & Benefits</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {job.perks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Location */}
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        Exact Location: {job.location}
      </p>
    </div>
  );
}
