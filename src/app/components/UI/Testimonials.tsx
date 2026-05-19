"use client";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "The Rankraze team is highly professional. They delivered a scalable React Native app ahead of schedule.",
    author: "Yadav",
  },
  {
    quote:
      "Rankraze helped us migrate to React with Zero downtime.Our new app loads faster and ranks better on search engines.",
    author: "Santhosh",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  const next = () => setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Client Testimonials
        </h2>
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl text-gray-300 hover:text-gray-600"
        >
          ‹
        </button>
        <p className="text-xl md:text-2xl italic text-gray-600 leading-relaxed">
          “{testimonials[index].quote}”
        </p>

        <p className="mt-6 font-semibold text-gray-700">
          {testimonials[index].author}
        </p>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-gray-300 hover:text-gray-600"
        >
          ›
        </button>
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                index === i ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
