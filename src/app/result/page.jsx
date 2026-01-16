"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Zap, CheckCircle2, AlertCircle, XCircle } from "lucide-react";

export const dynamic = "force-dynamic";

function ResultContent() {
  const searchParams = useSearchParams();
  const score = Number(searchParams.get("score"));
  const level = searchParams.get("level");

  // Determine status and styling based on score
  const getScoreDetails = () => {
    if (score >= 90) {
      return {
        icon: <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />,
        emoji: "🎉",
        color: "from-green-400 to-emerald-600",
        borderColor: "border-green-500/50",
        shadowColor: "shadow-green-500/30",
        bgGlow: "bg-green-500/10",
        percentage: Math.round((score / 120) * 100),
        status: "Excellent",
        description: "Congratulations! Your business shows strong franchise potential. You have the systems, processes, and foundation needed to start franchising successfully."
      };
    } else if (score >= 70) {
      return {
        icon: <Zap className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />,
        emoji: "⚡",
        color: "from-blue-400 to-blue-600",
        borderColor: "border-blue-500/50",
        shadowColor: "shadow-blue-500/30",
        bgGlow: "bg-blue-500/10",
        percentage: Math.round((score / 120) * 100),
        status: "Good Progress",
        description: "You're on the right track! Your business has a solid foundation, but needs some refinement in systems and SOPs before franchising."
      };
    } else if (score >= 50) {
      return {
        icon: <TrendingUp className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />,
        emoji: "📈",
        color: "from-yellow-400 to-amber-600",
        borderColor: "border-yellow-500/50",
        shadowColor: "shadow-yellow-500/30",
        bgGlow: "bg-yellow-500/10",
        percentage: Math.round((score / 120) * 100),
        status: "Building Phase",
        description: "Your business has potential, but requires significant work on processes, branding, and systems before being franchise-ready."
      };
    } else {
      return {
        icon: <AlertCircle className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />,
        color: "from-orange-400 to-red-600",
        borderColor: "border-orange-500/50",
        shadowColor: "shadow-orange-500/30",
        bgGlow: "bg-orange-500/10",
        percentage: Math.round((score / 120) * 100),
        status: "Foundation Stage",
        description: "Focus on building a stronger business core first. Strengthen your operations, profitability, and systems before considering franchising."
      };
    }
  };

  const details = getScoreDetails();

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>

        <div className="absolute top-40 right-10 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-[#C9A227] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>


      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          {/* Main Result Card */}
          <div className={`bg-white/10 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 border-2 ${details.borderColor} shadow-2xl ${details.shadowColor}`}>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8 sm:mb-10"
            >

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
                Your Franchise Readiness
              </h1>

              <p className="text-gray-400 text-sm sm:text-base">
                By <span className="font-semibold text-blue-400">Ajith Kumar</span> – Franchise Business Coach
              </p>
            </motion.div>

            {/* Score Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center mb-8 sm:mb-10"
            >
              <div className={`relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full ${details.bgGlow} backdrop-blur-sm border-4 ${details.borderColor} shadow-2xl ${details.shadowColor} flex flex-col items-center justify-center mb-6`}>
                {/* Animated Progress Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - details.percentage / 100) }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className="text-amber-400" stopColor="currentColor" />
                      <stop offset="100%" className="text-yellow-500" stopColor="currentColor" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Score Display */}
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className={`text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r ${details.color} bg-clip-text text-transparent mb-2`}
                  >
                    {score}
                  </motion.div>
                  <div className="text-gray-400 text-sm sm:text-base font-semibold">out of 120</div>
                  <div className="text-white text-lg sm:text-xl font-bold mt-2">{details.percentage}%</div>
                </div>
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r ${details.color} text-white font-bold text-lg sm:text-xl shadow-lg`}
              >
                <span className="text-2xl sm:text-3xl">{details.emoji}</span>
                <span>{details.status}</span>
              </motion.div>
            </motion.div>

            {/* Level Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className={`${details.bgGlow} backdrop-blur-sm border ${details.borderColor} rounded-2xl p-6 sm:p-8 mb-8`}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {level}
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {details.description}
              </p>
            </motion.div>

            {/* Key Insights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">{Math.round((score / 120) * 100)}%</div>
                <div className="text-gray-400 text-xs sm:text-sm">Overall Score</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">30</div>
                <div className="text-gray-400 text-xs sm:text-sm">Questions Answered</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">6</div>
                <div className="text-gray-400 text-xs sm:text-sm">Areas Evaluated</div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="text-center space-y-4"
            >
              <a
                href="https://wa.me/91XXXXXXXXXX?text=I%20completed%20my%20Franchise%20Readiness%20Assessment%20and%20scored%20${score}/120"
                className="inline-block w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-base sm:text-lg"
              >
                📞 Book a Free Strategy Call
              </a>

              <p className="text-gray-400 text-xs sm:text-sm">
                Get personalized guidance on your franchise journey
              </p>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-center mt-6 text-gray-400 text-xs sm:text-sm"
          >
            <p>This assessment evaluates your business across 6 key areas:</p>
            <p className="text-gray-500 mt-1">Foundation • Operations • Brand • Finance • Team • Vision</p>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl font-semibold">Loading your results...</div>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}