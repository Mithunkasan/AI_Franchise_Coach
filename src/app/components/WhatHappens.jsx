"use client";

import { useState } from "react";

export default function WhatHappens() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    { title: "Franchise Operating System", description: "Comprehensive infrastructure for scalable operations" },
    { title: "Duplication-Ready SOPs", description: "Standardized procedures for consistent execution" },
    { title: "Financial Models & Structures", description: "FOFO / FOCO / FICO strategic frameworks" },
    { title: "Marketing Blueprint & Brand Architecture", description: "Complete brand positioning and growth strategy" },
    { title: "Franchise Training System", description: "End-to-end partner development programs" },
    { title: "AI Operations Automation", description: "Intelligent systems for efficiency optimization" },
    { title: "Legal & Compliance Framework", description: "Complete regulatory and structural guidance" },
    { title: "Partner Recruitment Strategy", description: "Systematic approach to franchisee acquisition" },
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative w-full min-h-screen bg-black py-12 px-5 overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
      />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What Happens When You Join?
          </h2>

          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            A complete franchise development transformation framework.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border border-yellow-500/20 rounded-xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition">

              {/* Accordion Header */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-yellow-500 font-extrabold text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-white text-base sm:text-lg font-tracking-wide ">
                    {item.title}
                  </h3>
                </div>

                {/* Icon */}
                <span className="text-yellow-500 text-1xl transition-transform duration-300"
                  style={{
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </button>

              {/* Accordion Body */}
              <div
                className={`px-5 overflow-hidden transition-all duration-500 ${
                  openIndex === i ? "max-h-40 py-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
