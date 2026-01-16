import React from "react";

const RegisterButton = () => {
  return (
    <div
      className="
        text-white text-sm font-semibold
        px-5 py-4 rounded-md cursor-pointer
        bg-gradient-to-r from-[#d4af37] to-[#b8860b] 
        bg-[length:200%_200%]
        animate-gradientShift
        shadow-[0_8px_15px_-5px_#f5c699]
        hover:shadow-yellow-500/60 transition-all duration-300 hover:scale-105
        transition-all duration-300
      "
    >
      REGISTER NOW AT ₹99/- ONLY
    </div>
  );
};

export default RegisterButton;
