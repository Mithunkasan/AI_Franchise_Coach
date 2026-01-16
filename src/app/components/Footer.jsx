import React from "react";
import RegisterButton from "./RegisterButton";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-gray-900">
      <div
        className="
          w-full flex flex-row justify-between items-center
          px-3 sm:px-6 md:px-16 lg:px-24
          py-4
        "
      >
        {/* Left Side: Price & Offer */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#ff7f6b] font-bold text-[16px] sm:text-[20px] md:text-[25px]">
              ₹99
            </span>
            <span className="text-[#d7c49a] font-bold text-[12px] sm:text-[14px] md:text-[18px] line-through">
              ₹999
            </span>
          </div>
          <span className="text-white font-medium text-[10px] sm:text-[12px] md:text-[13px] mt-1 sm:mt-0">
            Offer Ends in 15 Mins
          </span>
        </div>

        {/* Right Side: Register Button */}
        <div className="flex justify-end">
          <RegisterButton text="REGISTER NOW AT ₹99/- ONLY" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
