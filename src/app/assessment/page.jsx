"use client";
import { useState } from "react";
import { CheckCircle2, TrendingUp, Target, Zap, Award, Brain, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function FranchiseAssessment() {
  const router = useRouter();
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const allQuestions = sections.flatMap(s =>
    s.questions.map(q => ({ ...q, category: s.title }))
  );

  const totalQuestions = allQuestions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  const answeredCount = Object.keys(answers).length;

  const handleSelect = (value) => {
    const currentQ = allQuestions[currentQuestion];
    setAnswers({ ...answers, [currentQ.id]: value });

    // Auto-advance to next question after a brief moment
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowConfetti(true);
      }
    }, 400);
  };

  const goToQuestion = (index) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentQuestion(index);
    }
  };

  const currentQ = allQuestions[currentQuestion];
  const currentAnswer = answers[currentQ.id];

  const calculateScore = () => {
    const values = Object.values(answers);
    return values.reduce((a, b) => a + b, 0);
  };

  const handleSubmit = () => {
    const total = calculateScore();
    let level = "";
    if (total >= 90) level = "Fully Ready – Begin Franchising Now";
    else if (total >= 70) level = "Partially Ready – Needs System & SOP Work";
    else if (total >= 50) level = "Foundation Ready – Improve Processes & Branding";
    else level = "Not Yet Ready – Build Stronger Business Core First";

    router.push(`/result?score=${total}&level=${encodeURIComponent(level)}`);
  };

  const getScoreColor = (value) => {
    if (value === 1) return "from-red-500 to-red-600";
    if (value === 2) return "from-orange-500 to-orange-600";
    if (value === 3) return "from-yellow-500 to-amber-600";
    return "from-green-500 to-emerald-600";
  };

  const getCategoryIcon = (category) => {
    if (category.includes("FOUNDATION")) return <Target className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (category.includes("OPERATIONS")) return <Zap className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (category.includes("BRAND")) return <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (category.includes("FINANCE")) return <Award className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (category.includes("TEAM")) return <Brain className="w-4 h-4 sm:w-5 sm:h-5" />;
    return <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />;
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background elements - hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>

        <div className="absolute top-40 right-10 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-[#C9A227] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>


      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4 sm:mb-6 md:mb-8"
        >

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-4">
            <span className="block bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Franchise Readiness
            </span>
            <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-2">
              Assessment
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-1 sm:mb-2 px-2">
            Analyze your business strengths and discover exactly what you need to succeed in franchising
          </p>

          <p className="text-gray-400 text-xs sm:text-sm">
            By <span className="font-semibold text-blue-400">Ajith Kumar</span> – Franchise Business Coach
          </p>
        </motion.div>

        {/* Progress Bar with Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-4 sm:mb-6 md:mb-8 border border-white/20 shadow-2xl"
        >
          <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 xs:gap-0 mb-3 sm:mb-4">
            <div>
              <p className="text-white font-bold text-base sm:text-lg md:text-xl">
                Question {currentQuestion + 1} of {totalQuestions}
              </p>
              <p className="text-gray-300 text-xs sm:text-sm">{Math.round(progress)}% Complete</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  {answeredCount}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm">Answered</p>
              </div>
            </div>
          </div>

          <div className="relative h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer bg-[length:200%_auto]"></div>
            </motion.div>
          </div>

          {/* Mini progress dots - Scrollable on mobile */}
          <div className="flex gap-1 mt-3 sm:mt-4 overflow-x-auto pb-2 hide-scrollbar">
            {allQuestions.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => goToQuestion(idx)}
                className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full text-[10px] sm:text-xs font-bold transition-all ${answers[q.id]
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg scale-110'
                    : idx === currentQuestion
                      ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg ring-2 ring-white/50'
                      : 'bg-white/20 text-gray-400 hover:bg-white/30'
                  }`}
              >
                {idx < 9 ? `0${idx + 1}` : idx + 1}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-2xl mb-4 sm:mb-6 md:mb-8"
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white/20">
              {getCategoryIcon(currentQ.category)}
              <span className="hidden xs:inline">
                {currentQ.category.replace("🔹 ", "").split("(")[0].trim()}
              </span>
              <span className="xs:hidden">
                {currentQ.category.replace("🔹 ", "").split(":")[1]?.split("(")[0].trim() || "Question"}
              </span>
            </div>

            {/* Question */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-snug sm:leading-relaxed">
              {currentQ.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 sm:space-y-4">
              {currentQ.options.map((opt) => {
                const isSelected = currentAnswer === opt.value;
                return (
                  <motion.button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 transition-all ${isSelected
                        ? `bg-gradient-to-r ${getScoreColor(opt.value)} border-transparent text-white shadow-2xl`
                        : "bg-white/5 border-white/20 text-gray-200 hover:bg-white/10 hover:border-white/40"
                      }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center font-black text-xl sm:text-2xl flex-shrink-0 ${isSelected
                            ? "bg-white/20 text-white"
                            : "bg-white/10 text-gray-400"
                          }`}
                      >
                        {opt.value}
                      </div>
                      <span className={`text-sm sm:text-base md:text-lg font-medium leading-snug ${isSelected ? 'text-white' : 'text-gray-200'}`}>
                        {opt.label.replace(/^\(\d+\)\s*/, "")}
                      </span>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto"
                        >
                          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Helper text */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-500/10 border border-blue-400/30 rounded-lg sm:rounded-xl">
              <p className="text-blue-300 text-xs sm:text-sm text-center leading-relaxed">
                💡 <span className="font-semibold">Pro Tip:</span> Choose the option that honestly reflects your current business state
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
          <button
            onClick={() => goToQuestion(currentQuestion - 1)}
            disabled={currentQuestion === 0}
            className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:cursor-not-allowed text-white font-bold text-sm sm:text-base rounded-lg sm:rounded-xl transition-all backdrop-blur-sm border border-white/20 disabled:opacity-50"
          >
            ← Previous
          </button>

          {currentQuestion < totalQuestions - 1 ? (
            <button
              onClick={() => goToQuestion(currentQuestion + 1)}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-bold text-sm sm:text-base rounded-lg sm:rounded-xl transition-all shadow-lg"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={answeredCount < totalQuestions}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold text-sm sm:text-base rounded-lg sm:rounded-xl transition-all shadow-lg disabled:opacity-50"
            >
              {answeredCount < totalQuestions
                ? `Complete ${totalQuestions - answeredCount} more`
                : "🎉 Get Your Results"}
            </button>
          )}
        </div>

        {/* Confetti celebration on completion */}
        {showConfetti && answeredCount === totalQuestions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl animate-bounce">🎉</div>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
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
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Extra small devices (phones, less than 576px) */
        @media (max-width: 575px) {
          .xs\:inline {
            display: inline;
          }
          .xs\:hidden {
            display: none;
          }
          .xs\:flex-row {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
}

const sections = [
  {
    title: "🔹 SECTION 1: BUSINESS FOUNDATION (1–6)",
    questions: [
      {
        id: 1,
        question: "Is your business currently profitable?",
        options: [
          { label: "(1) Not yet profitable", value: 1 },
          { label: "(2) Barely breaking even", value: 2 },
          { label: "(3) Moderate profit with fluctuations", value: 3 },
          { label: "(4) Consistent profit for 12+ months", value: 4 },
        ],
      },
      {
        id: 2,
        question: "Do you have a unique product or service compared to competitors?",
        options: [
          { label: "(1) Common product/service", value: 1 },
          { label: "(2) Some differentiation", value: 2 },
          { label: "(3) Clearly positioned brand", value: 3 },
          { label: "(4) Unique & proven business USP", value: 4 },
        ],
      },
      {
        id: 3,
        question: "Can your business operate without you for 7+ days?",
        options: [
          { label: "(1) Not at all", value: 1 },
          { label: "(2) With lots of struggle", value: 2 },
          { label: "(3) With some monitoring", value: 3 },
          { label: "(4) Runs smoothly without me", value: 4 },
        ],
      },
      {
        id: 4,
        question: "How stable is your customer demand?",
        options: [
          { label: "(1) Unpredictable sales", value: 1 },
          { label: "(2) Seasonal spikes", value: 2 },
          { label: "(3) Moderate stability", value: 3 },
          { label: "(4) Consistent monthly demand", value: 4 },
        ],
      },
      {
        id: 5,
        question: "Do you have multiple successful outlets or pilots?",
        options: [
          { label: "(1) Only one", value: 1 },
          { label: "(2) Planning second", value: 2 },
          { label: "(3) Two or more tested outlets", value: 3 },
          { label: "(4) Proven success across 3+ outlets", value: 4 },
        ],
      },
      {
        id: 6,
        question: "Have you documented your business processes?",
        options: [
          { label: "(1) Nothing written", value: 1 },
          { label: "(2) Only basic notes", value: 2 },
          { label: "(3) Few written SOPs", value: 3 },
          { label: "(4) Full operation manual & training system", value: 4 },
        ],
      },
    ],
  },
  {
    title: "🔹 SECTION 2: OPERATIONS & SYSTEMS (7–12)",
    questions: [
      {
        id: 7,
        question: "Do you track your key performance indicators (KPIs)?",
        options: [
          { label: "(1) No KPIs", value: 1 },
          { label: "(2) Informally monitored", value: 2 },
          { label: "(3) Monthly tracking", value: 3 },
          { label: "(4) Regular dashboard with analysis", value: 4 },
        ],
      },
      {
        id: 8,
        question: "How structured is your staff training system?",
        options: [
          { label: "(1) No formal training", value: 1 },
          { label: "(2) Verbal training only", value: 2 },
          { label: "(3) Training checklist exists", value: 3 },
          { label: "(4) Full video/manual-based system", value: 4 },
        ],
      },
      {
        id: 9,
        question: "Is your supply chain reliable and standardized?",
        options: [
          { label: "(1) Unreliable vendors", value: 1 },
          { label: "(2) Multiple issues", value: 2 },
          { label: "(3) Mostly stable", value: 3 },
          { label: "(4) Fully standardized supply partners", value: 4 },
        ],
      },
      {
        id: 10,
        question: "Do you have a consistent quality control process?",
        options: [
          { label: "(1) No QC system", value: 1 },
          { label: "(2) Occasionally checked", value: 2 },
          { label: "(3) Quality monitored regularly", value: 3 },
          { label: "(4) Documented and automated QC system", value: 4 },
        ],
      },
      {
        id: 11,
        question: "Do you have a customer feedback or CRM system?",
        options: [
          { label: "(1) No system", value: 1 },
          { label: "(2) Basic manual collection", value: 2 },
          { label: "(3) Regular feedback via forms/social media", value: 3 },
          { label: "(4) CRM integrated with analytics", value: 4 },
        ],
      },
      {
        id: 12,
        question: "Can your operations be easily taught to a new franchisee?",
        options: [
          { label: "(1) Not easily", value: 1 },
          { label: "(2) Needs lot of personal training", value: 2 },
          { label: "(3) Some structure available", value: 3 },
          { label: "(4) Fully replicable step-by-step", value: 4 },
        ],
      },
    ],
  },
  {
    title: "🔹 SECTION 3: BRAND & MARKET (13–18)",
    questions: [
      {
        id: 13,
        question: "How well-known is your brand in your city or region?",
        options: [
          { label: "(1) Unknown", value: 1 },
          { label: "(2) Small local reach", value: 2 },
          { label: "(3) Moderate awareness", value: 3 },
          { label: "(4) Recognized and trusted brand", value: 4 },
        ],
      },
      {
        id: 14,
        question: "Do you have a clear marketing and branding strategy?",
        options: [
          { label: "(1) No strategy", value: 1 },
          { label: "(2) Random promotions", value: 2 },
          { label: "(3) Marketing calendar exists", value: 3 },
          { label: "(4) Brand & campaign systemized", value: 4 },
        ],
      },
      {
        id: 15,
        question: "Do you have a website and digital presence?",
        options: [
          { label: "(1) None", value: 1 },
          { label: "(2) Basic social media only", value: 2 },
          { label: "(3) Website with social media", value: 3 },
          { label: "(4) Strong online + lead generation system", value: 4 },
        ],
      },
      {
        id: 16,
        question: "Do you understand your customer persona clearly?",
        options: [
          { label: "(1) Not defined", value: 1 },
          { label: "(2) Rough idea", value: 2 },
          { label: "(3) Defined but not tracked", value: 3 },
          { label: "(4) Documented with data & behavior insight", value: 4 },
        ],
      },
      {
        id: 17,
        question: "Is your business protected legally (logo, trademark, etc.)?",
        options: [
          { label: "(1) No protection", value: 1 },
          { label: "(2) Application in progress", value: 2 },
          { label: "(3) Trademark filed", value: 3 },
          { label: "(4) Fully trademarked & legal documentation ready", value: 4 },
        ],
      },
      {
        id: 18,
        question: "Is there proven market demand in other cities?",
        options: [
          { label: "(1) Not sure", value: 1 },
          { label: "(2) Planning research", value: 2 },
          { label: "(3) Some data available", value: 3 },
          { label: "(4) Market research report ready", value: 4 },
        ],
      },
    ],
  },
  {
    title: "🔹 SECTION 4: FINANCE & ECONOMICS (19–23)",
    questions: [
      {
        id: 19,
        question: "Do you know your cost and profit structure per unit?",
        options: [
          { label: "(1) Not clear", value: 1 },
          { label: "(2) Approximate idea", value: 2 },
          { label: "(3) Documented for one outlet", value: 3 },
          { label: "(4) Clear & consistent for all units", value: 4 },
        ],
      },
      {
        id: 20,
        question: "Have you defined your franchise pricing/tariff?",
        options: [
          { label: "(1) Not yet", value: 1 },
          { label: "(2) Rough idea only", value: 2 },
          { label: "(3) Basic model created", value: 3 },
          { label: "(4) Finalized tariff & ROI plan ready", value: 4 },
        ],
      },
      {
        id: 21,
        question: "Do you maintain proper financial records (P&L, balance sheet)?",
        options: [
          { label: "(1) No proper records", value: 1 },
          { label: "(2) Partial data", value: 2 },
          { label: "(3) Managed by accountant", value: 3 },
          { label: "(4) Full transparency & reporting system", value: 4 },
        ],
      },
      {
        id: 22,
        question: "Can you offer sustainable ROI to franchisees?",
        options: [
          { label: "(1) Not calculated", value: 1 },
          { label: "(2) Unsure", value: 2 },
          { label: "(3) Expected ROI known", value: 3 },
          { label: "(4) Proven ROI with pilot franchise", value: 4 },
        ],
      },
      {
        id: 23,
        question: "Do you have access to advisors or financial mentors?",
        options: [
          { label: "(1) None", value: 1 },
          { label: "(2) Occasional advice", value: 2 },
          { label: "(3) Regular CA/mentor", value: 3 },
          { label: "(4) Strategic financial board / advisor", value: 4 },
        ],
      },
    ],
  },
  {
    title: "🔹 SECTION 5: TEAM, LEADERSHIP & SUPPORT (24–27)",
    questions: [
      {
        id: 24,
        question: "Do you have a leadership or management team (not just you)?",
        options: [
          { label: "(1) Only me", value: 1 },
          { label: "(2) 1–2 helpers", value: 2 },
          { label: "(3) Small leadership team", value: 3 },
          { label: "(4) Full management team", value: 4 },
        ],
      },
      {
        id: 25,
        question: "Are you ready to train and support franchisees regularly?",
        options: [
          { label: "(1) Not ready", value: 1 },
          { label: "(2) Unsure how", value: 2 },
          { label: "(3) Partially planned", value: 3 },
          { label: "(4) Full support model prepared", value: 4 },
        ],
      },
      {
        id: 26,
        question: "Do you have a franchise manager or coordinator role defined?",
        options: [
          { label: "(1) No role", value: 1 },
          { label: "(2) Planning to hire", value: 2 },
          { label: "(3) Role defined but unfilled", value: 3 },
          { label: "(4) Active franchise manager/team in place", value: 4 },
        ],
      },
      {
        id: 27,
        question: "Do you have a CRM or tech tool for franchise communication?",
        options: [
          { label: "(1) None", value: 1 },
          { label: "(2) WhatsApp/manual only", value: 2 },
          { label: "(3) Basic tools like Google Sheets", value: 3 },
          { label: "(4) Dedicated CRM or platform", value: 4 },
        ],
      },
    ],
  },
  {
    title: "🔹 SECTION 6: VISION, MINDSET & FUTURE (28–30)",
    questions: [
      {
        id: 28,
        question: "Do you have a 3-year franchise expansion vision?",
        options: [
          { label: "(1) No vision", value: 1 },
          { label: "(2) Rough ideas", value: 2 },
          { label: "(3) Written target", value: 3 },
          { label: "(4) Clear roadmap with milestones", value: 4 },
        ],
      },
      {
        id: 29,
        question: "Are you mentally ready to shift from operator to franchisor mindset?",
        options: [
          { label: "(1) Not yet", value: 1 },
          { label: "(2) Slightly ready", value: 2 },
          { label: "(3) Open to learning", value: 3 },
          { label: "(4) Fully prepared & coachable", value: 4 },
        ],
      },
      {
        id: 30,
        question: "Are you committed to invest time & money in system building before selling franchises?",
        options: [
          { label: "(1) No, want quick results", value: 1 },
          { label: "(2) Maybe, depends on cost", value: 2 },
          { label: "(3) Yes, within next 3 months", value: 3 },
          { label: "(4) Absolutely, I'm ready to invest now", value: 4 },
        ],
      },
    ],
  },
];