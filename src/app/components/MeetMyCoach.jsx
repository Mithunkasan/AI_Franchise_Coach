"use client";
import React, { useState } from "react";
import Image from "next/image";

const MeetMyCoach = () => {
  const [activeSection, setActiveSection] = useState("about");

  const statsData = [
    { icon: "🎯", number: "500+", label: "Franchises Scaled", gradient: "from-yellow-400 to-yellow-600" },
    { icon: "👥", number: "50M", label: "Entrepreneurs Reached", gradient: "from-yellow-300 to-amber-400" },
    { icon: "📢", number: "500+", label: "Seminars Conducted", gradient: "from-amber-400 to-yellow-500" },
    { icon: "📱", number: "500K", label: "Social Media Following", gradient: "from-yellow-400 to-amber-500" },
    { icon: "💰", number: "700K", label: "Paid Customers Served", gradient: "from-amber-300 to-yellow-400" },
    { icon: "🎓", number: "18K+", label: "Live Festivals Attended", gradient: "from-yellow-500 to-amber-600" }
  ];

  const achievements = [
    { title: "Certified Franchise Executive", org: "International Franchise Association", year: "2023" },
    { title: "Master Business Strategist", org: "Forbes Coaches Council", year: "2022" },
    { title: "Global Expansion Expert", org: "Entrepreneur Magazine", year: "2021" },
    { title: "Top 50 Business Coaches", org: "Inc. 5000", year: "2023" }
  ];

  return (
    <section className="relative bg-[#fffaf2] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-gray-400 text-xs tracking-widest uppercase font-semibold mb-2">
            Meet Your Coach
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            James Alexander
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-medium mb-2">
            Asia's Leading Business Success Coach
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Transforming ambitious entrepreneurs into scalable franchise empires with proven systems.
          </p>
        </div>

        {/* Profile Card */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-20">
          <div className="bg-white border border-gray-200 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden">
            <div className="p-6 sm:p-10 border-b border-gray-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <div className="relative shrink-0 group">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 
                  bg-[#dcc79c]  
                  group-hover:opacity-70 transition duration-500" />

                  {/* Image Container */}
                  <div
                    className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl 
               bg-[#dcc79c]  p-1
               shadow-[0_25px_60px_rgba(0,0,0,0.35)]
               animate-float
               hover:shadow-[0_35px_90px_rgba(245,158,11,0.6)]
               transition-all duration-500"
                  >
                    <div className="bg-white w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src="/coach.jpg"
                        alt="Coach"
                        width={144}
                        height={144}
                        className="object-cover w-full h-full scale-100 group-hover:scale-105 transition duration-500"
                        priority
                      />
                    </div>
                  </div>

                  {/* Badge */}
                  <span
                    className="absolute -bottom-3 -right-3 
               bg-[#dcc79c]  
               text-black text-[10px] sm:text-xs font-bold 
               px-3 sm:px-4 py-1 rounded-lg 
               shadow-[0_10px_30px_rgba(0,0,0,0.3)]
               animate-pulse"
                  >
                    TOP COACH
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                    James Alexander
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg mb-4">
                    Master Franchise Strategist
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mb-5 text-sm text-gray-600">
                    <span>20+ Years Experience</span>
                    <span>50+ Countries</span>
                    <span>$2.5B+ Value Created</span>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-[#dcc79c]  p-4 rounded-r-xl text-gray-700 italic text-sm leading-relaxed">
                    “My mission is to help you build a scalable, sellable, and sustainable franchise brand.”
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-10">
              {statsData.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-5
                  shadow-[0_12px_30px_rgba(0,0,0,0.1)]
                  hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
                  transition-all"
                >
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#dcc79c]  ${stat.gradient} flex items-center justify-center mb-4`}>
                    <span className="text-xl sm:text-2xl">{stat.icon}</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
            Professional Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6
                shadow-[0_12px_30px_rgba(0,0,0,0.1)]
                hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
                hover:border-[#dcc79c] transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h4 className="text-gray-900 font-semibold text-sm sm:text-base leading-snug">
                    {a.title}
                  </h4>
                  <span className="text-[#dcc79c] text-xs sm:text-sm font-medium whitespace-nowrap">
                    {a.year}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMyCoach;
