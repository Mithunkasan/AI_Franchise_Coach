  "use client";

import { motion } from "framer-motion";

export default function WhyFranchise() {
  const benefits = [
    {
      metric: "10X",
      metricLabel: "Faster Expansion",
      title: "Grow Without Using Your Own Capital",
      desc: "Franchise partners fund new units, helping you expand rapidly while protecting your cash flow.",
    },
    {
      metric: "100%",
      metricLabel: "Brand Control",
      title: "Expand Without Losing Quality",
      desc: "Retain full control over SOPs, quality, and customer experience across every franchise location.",
    },
    {
      metric: "Nationwide",
      metricLabel: "Brand Reach",
      title: "Build a National-Level Brand",
      desc: "Scale into multiple major cities with local entrepreneurs driving the success of each unit.",
    },
    {
      metric: "3–5X",
      metricLabel: "Higher Valuation",
      title: "Increase Your Business Valuation",
      desc: "Brands with franchise systems typically earn significantly higher exit multiples.",
    },
    {
      metric: "Recurring",
      metricLabel: "Royalty Fees",
      title: "Earn Predictable Monthly Income",
      desc: "Royalties + renewals create long-term, compounding monthly revenue streams.",
    },
    {
      metric: "Legacy",
      metricLabel: "Future-Proof",
      title: "Create Generational Wealth",
      desc: "Build a replicable business model that continues to grow even without your daily involvement.",
    },
  ];

  return (
    <section className="w-full bg-black py-20 px-6 relative overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-yellow-500/10 blur-[110px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/10 blur-[110px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Why Franchise  Your Business?
          </h2>

          <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Transform your proven business model into a scalable franchise system that grows fast,
            builds wealth, and operates independently of you.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 
                         hover:border-yellow-400/30 transition-all duration-300"
            >
              {/* Gold Bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-l-xl" />

              {/* Metric */}
              <div className="text-center mb-4">
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight 
                                text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                  {b.metric}
                </div>
                <div className="text-[10px] tracking-wider text-gray-400 uppercase mt-1">
                  {b.metricLabel}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug tracking-tight">
                {b.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
