"use client";

import { useState, useEffect } from "react";

export default function WhatsAppLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [bottomOffset, setBottomOffset] = useState(24); // default bottom offset in px

  // Hide notification after 5 seconds
  useEffect(() => {
    const notificationTimer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    return () => clearTimeout(notificationTimer);
  }, []);

  // Scroll behavior: move button above footer when near bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const footerHeight = 200; // Footer height
      const threshold = 50; // Trigger before footer fully visible

      if (scrollTop + windowHeight >= fullHeight - threshold) {
        setBottomOffset(footerHeight + 16); // 16px above footer
      } else {
        setBottomOffset(24); // default bottom
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    console.log("WhatsApp clicked");
    setShowNotification(false);
  };

  return (
    <div
      className="fixed right-6 z-50 transition-all duration-300"
      style={{ bottom: `${bottomOffset}px` }}
    >
      {/* Notification Bubble */}
      {showNotification && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg animate-pulse">
          Chat with us!
        </div>
      )}

      {/* Pulse Animation Ring */}
      <div
        className={`absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75 ${
          isHovered ? "scale-150" : "scale-100"
        } transition-transform duration-300`}
      ></div>

      {/* Main WhatsApp Button */}
      <a
        href="https://wa.me/0123456789?text=Hello!%20I%20need%20assistance"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        className="w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform relative"
      >
        <img
          src="/what1.jpg"
          alt="WhatsApp"
          className="
            w-6 h-6
            sm:w-7 sm:h-7
            md:w-8 md:h-8
            lg:w-9 lg:h-9
            xl:w-10 xl:h-10
            object-contain
          "
        />
      </a>
    </div>
  );
}
