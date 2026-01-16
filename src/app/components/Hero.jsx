"use client";
import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import RegisterButton from "./RegisterButton";


export default function Hero() {
  const router = useRouter();
  useEffect(() => {
    let time = 15 * 60;

    const countdownEl = document.getElementById("countdown");

    const update = () => {
      const m = String(Math.floor(time / 60)).padStart(2, "0");
      const s = String(time % 60).padStart(2, "0");
      countdownEl.textContent = `${m}:${s}`;
      time--;
      if (time < 0) time = 15 * 60;
    };

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const messages = [
      "Those who are interested… they are investing 💰",
      "People are joining right now 🚀",
      "Seats are filling fast! Grab yours 🔥",
      "Success comes to those who act quickly ⚡",
    ];

    let index = 0;
    let charIndex = 0;
    let deleting = false;

    const el = document.getElementById("loopText");

    const typeLoop = () => {
      if (!el) return;

      const current = messages[index];

      // RESPONSIVE check: small screens = shorter text speed
      const isMobile = window.innerWidth < 480;

      const typeSpeed = isMobile ? 55 : 70;
      const deleteSpeed = isMobile ? 35 : 45;

      if (!deleting) {
        el.textContent = current.slice(0, charIndex++);
        if (charIndex > current.length) {
          deleting = true;
          setTimeout(typeLoop, 1300);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIndex--);
        if (charIndex === 0) {
          deleting = false;
          index = (index + 1) % messages.length;
        }
      }

      setTimeout(typeLoop, deleting ? deleteSpeed : typeSpeed);
    };

    typeLoop();
  }, []);




  return (<section className="relative min-h-screen w-full bg-black text-white overflow-hidden pt-10 ">

    {/* ================= MAIN CONTENT ================= */}
    <div className="relative z-10 w-full min-h-fit flex flex-col items-center justify-start pt-0 px-4 sm:px-2 lg:px-8">

      {/* ----------- LOGO ----------- */}
      <div className="text-center mb-8 px-0 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Logo */}
          <img
            src="/sitelogo.jpeg"
            alt="AI Franchise Coach Logo"
            className="
        w-[240px]
        sm:w-[280px]
        md:w-[320px]
        lg:w-[460px]
        xl:w-[500px]
        h-auto
        mx-auto
      "
          />

          {/* Optional soft glow (matches your gold theme) */}
          <span
            className="
        absolute inset-0
        rounded-full
        opacity-30
        -z-10
      "
          />
        </motion.div>
      </div>


      {/* ----------- YOUTUBE VIDEO ----------- */}
      <div className="w-full max-w-md mx-auto mb-10">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg shadow-yellow-500/30 border border-yellow-500/20">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/lBINfBTHqwE"
            title="FEOS Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* ----------- BUTTONS ----------- */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10 w-full px-4">
        <button
          onClick={() => router.push("/booking")}
          className="group w-full sm:w-auto px-4 py-4
        bg-gradient-to-r from-[#d4af37] to-[#b8860b] rounded-lg 
         font-black tracking-wide uppercase text-xs sm:text-sm shadow-lg shadow-yellow-500/40
        hover:shadow-yellow-500/60 transition-all duration-300 hover:scale-105 text-black text-center"
        >
      BOOK MY EXPERT CALL
        </button>

        <button
          onClick={() => router.push("/booking")}
          className="group w-full sm:w-auto px-4 py-4
        bg-white/5 backdrop-blur-xl border border-[#d4af37]/40 
        hover:border-[#d4af37] hover:bg-white/10 rounded-lg 
         font-black tracking-wide uppercase text-xs sm:text-sm text-[#f5e6a1]
        transition-all duration-300 hover:scale-105 text-center"
        >
         FRANCHISE ELIGIBILITY ASSESSMENT
        </button>
      </div>

      {/* ----------- TRUSTED BY SECTION ----------- */}
      <div className="mt-0 mb-12 w-full flex flex-col items-center">

        <div className="flex  flex-wrap justify-center opacity-80">
          <img src="/trusted/img1.jfif" className="h-6 sm:h-8  rounded-full object-contain" />
          <img src="/trusted/img2.jfif" className="h-6 sm:h-8  rounded-full object-contain" />
          <img src="/trusted/img3.jfif" className="h-6 sm:h-8  rounded-full object-contain" />
          <img src="/trusted/img4.jfif" className="h-6 sm:h-8  rounded-full object-contain" />
          <img src="/trusted/img5.jfif" className="h-6 sm:h-8  rounded-full object-contain" />
          <img src="/trusted/img6.jfif" className="h-6 sm:h-8  rounded-full object-contain" />
          <img src="/trusted/img7.jfif" className="h-6 sm:h-8  rounded-full object-contain" />
          <img src="/trusted/img8.jfif" className="h-6 sm:h-8  rounded-full object-contain" />
        </div>
      </div>

    </div>
    <div className="w-full flex flex-col items-center text-center px-4 ">

      {/* OUTER WRAPPER */}
      <div className="relative w-full max-w-md pt-3 overflow-visible mb-0">

        {/* ===== COUNTDOWN FLOATING TIMER ===== */}
        <div
          className="absolute -top-8 left-1/2 -translate-x-1/2 
      z-20
      bg-black/50 backdrop-blur-xl px-6 py-3 rounded-xl
      border border-yellow-500/50 shadow-lg shadow-yellow-400/50"
        >
          <span
            id="countdown"
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-widest
        drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]"
          >
            15:00
          </span>
        </div>

        {/* ===== MAIN BOX ===== */}
        <div
          className="relative z-1 bg-white/5 border border-yellow-500/30 rounded-2xl 
      px-6 py-10 shadow-xl backdrop-blur-xl overflow-visible mt-0 sm: mt-0"
        >
          <h2
            className="text-transparent bg-clip-text bg-gradient-to-r 
        from-[#d4af37] via-[#f5e6a1] to-[#b8860b]
        text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide animate-goldBlink"
          >
         STARTS ON 09th January 2026
         <h2>(9.00AM - 1.00 PM IST)</h2>
         <h2 style={{color:"white",
          fontSize:"13px",paddingTop:"20px",fontWeight:'lighter'
         }}>Language -Basic English</h2>
          </h2>
          <div style={{paddingTop:"20px",}}><RegisterButton /></div>

        </div>
      </div>
    </div>
    <div className="mt-0 text-center w-full px-4 pt-5 mb-0">
      <h3
        id="loopText"
        className="
      text-transparent 
      bg-clip-text 
      bg-gradient-to-r from-[#ffd66b] via-[#fff3c4] to-[#ffb300]
      font-extrabold tracking-wide
      text-base sm:text-lg md:text-xl lg:text-2xl
      leading-snug break-words

      relative
      animate-shimmer-bright

      min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem]  /* 👈 keeps space */
      flex items-center justify-center
    "
      ></h3>
    </div>


  </section>

  );
}
