"use client";

import { useEffect, useRef, useState } from "react";

export default function Learn() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const modules = [
    {
      title: "Make Your Business Franchise-Ready",
      desc: "Turn your operations into a repeatable system that can scale across locations.",
      time: "25 min",
      img: "img1.jpg",
      pos: "left",
    },
    {
      title: "AI Tools That Automate Your Business",
      desc: "Use modern AI tools that reduce workload and boost efficiency.",
      time: "20 min",
      img: "img2.jpg",
      pos: "right",
    },
    {
      title: "7 Pillars of Franchise Operating System",
      desc: "Learn the exact structure top franchises follow worldwide.",
      time: "30 min",
      img: "img3.jpg",
      pos: "left",
    }
  ];

  // Simple one-time fade animation for entire section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black py-20 px-6 overflow-hidden mt-0"
    >
      {/* Header */}
      <div
        className={`text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Master Franchise Scaling in 3 Hours
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          A fast-track workshop to help you scale your franchise the right way.
        </p>
      </div>

      {/* Cards Grid - No Scrolling */}
      <div
        className={`max-w-6xl mx-auto mt-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {modules.map((m, i) => (
            <div
              key={i}
              className="transition-all duration-700"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Card Container */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden h-full flex flex-col hover:bg-white/10 transition-colors duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Time badge positioned over image */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-yellow-400 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
                    ⏱ {m.time}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-3">
                    {m.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed flex-grow">
                    {m.desc}
                  </p>
                  {/* Optional: Add a button or action item */}
                  <button className="mt-6 text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors duration-300 text-left">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}