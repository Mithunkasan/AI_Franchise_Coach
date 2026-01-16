"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CongratulationsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 sm:p-6 md:p-10 relative overflow-hidden">

      {/* Soft Gold Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-500/10 blur-[100px] sm:blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-500/10 blur-[100px] sm:blur-[130px] rounded-full" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="
          relative bg-[#0b0b0b]/80 backdrop-blur-xl 
          border border-white/10 rounded-2xl sm:rounded-3xl 
          p-6 sm:p-10 lg:p-12
          shadow-[0_0_30px_rgba(255,215,0,0.12)]
          max-w-md sm:max-w-lg w-full text-center
        "
      >

        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 140, delay: 0.2 }}
          className="flex justify-center mb-5 sm:mb-6"
        >
          <CheckCircle className="
            w-16 h-16 sm:w-20 sm:h-20 
            text-yellow-400 
            drop-shadow-[0_0_10px_rgba(255,215,0,0.45)]
          " />
        </motion.div>

        {/* Title */}
        <h1 className="
          text-2xl sm:text-3xl md:text-4xl 
          font-extrabold 
          bg-gradient-to-r from-yellow-300 to-yellow-500 
          bg-clip-text text-transparent
        ">
          Congratulations!
        </h1>

        {/* Message */}
        <p className="
          text-gray-300 mt-3 sm:mt-4 
          text-sm sm:text-base md:text-lg 
          leading-relaxed
        ">
          You’ve successfully completed the assessment.<br />
          You're now one step closer to scaling your business through franchising!
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 space-y-4">

          {/* Assessment Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/assessment")}
            className="
              w-full py-3 sm:py-4 
              rounded-xl 
              font-bold text-black text-base sm:text-lg 
              bg-gradient-to-r from-[#d4af37] to-[#b8860b]
              shadow-[0_0_18px_rgba(255,215,0,0.4)]
              hover:shadow-[0_0_28px_rgba(255,215,0,0.6)]
              transition-all
            "
          >
            Eligibility Assessment Test
          </motion.button>

          {/* WhatsApp Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open("https://wa.me/XXXXXXXXXX", "_blank")}
            className="
              w-full py-3 sm:py-4 
              rounded-xl 
              font-bold 
              text-base sm:text-lg 
              border border-yellow-500/40 
              text-yellow-300 
              bg-[#111]/70 backdrop-blur-md
              hover:bg-yellow-500 hover:text-black
              transition-all
            "
          >
            Join Our WhatsApp Community
          </motion.button>

        </div>
      </motion.div>
    </div>
  );
}
