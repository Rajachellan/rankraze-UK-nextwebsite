"use client";
import { useState } from "react";
import JobCard from "./JobCard";

const jobs = [
  { posted: "2 days ago", title: "React Developer", location: "Irving, TX", experience: "1–3 years" },
  { posted: "3 days ago", title: "UI/UX Designer", location: "Dallas, TX", experience: "2–4 years" },
  { posted: "4 days ago", title: "Node.js Developer", location: "Remote (US)", experience: "2–5 years" },
  { posted: "1 week ago", title: "Digital Marketing", location: "Remote", experience: "0–2 years" },
  { posted: "2 weeks ago", title: "QA Tester", location: "Austin, TX", experience: "0–1 years" },
  { posted: "1 month ago", title: "Sales Manager", location: "Irving, TX", experience: "3–6 years" },
];
const ITEMS_PAGE = 4;

export default function JobPagination() {
  const [page, setPage] = useState(0);

  const start = page * ITEMS_PAGE;
  const pageJobs = jobs.slice(start, start + ITEMS_PAGE);

  const totalPages = Math.ceil(jobs.length / ITEMS_PAGE);

  return (
    <div className="flex flex-col items-center gap-6">

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pageJobs.map((job, i) => (
          <JobCard key={i} {...job} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex gap-4 mt-2">
        <button
          disabled={page === 0}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 border rounded disabled:opacity-40"
        >
          Prev
        </button>

        <span className="font-semibold">
          {page + 1} / {totalPages}
        </span>

        <button
          disabled={page + 1 === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 border rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
