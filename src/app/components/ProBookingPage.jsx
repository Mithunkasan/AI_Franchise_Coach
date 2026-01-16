"use client";
import { useState } from "react";
import { format } from "date-fns";
import FranchiseForm from "./FranchiseForm";
export default function ProBooking() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const times = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 md:p-10 mt-40 bg-black rounded-2xl 
      shadow-[0_0_25px_rgba(255,215,0,0.3)] border border-[#3d3d3d] mt-10 mb-20">

      {/* HEADER */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 
          bg-gradient-to-r from-[#d4af37] via-[#f5e6a1] to-[#b8860b] 
          bg-clip-text text-transparent tracking-wide"
      >
        Book a Professional Consultation
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* DATE PICKER */}
        <div>
          <label className="text-sm font-semibold text-[#d4af37] mb-2 block">
            Select Date
          </label>

          <input
            type="date"
            className="w-full p-3 rounded-lg border border-[#d4af37]/40 
              bg-[#0d0d0d] text-[#f5e6a1] cursor-pointer
              focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          {selectedDate && (
            <p className="mt-3 text-base font-semibold text-white">
              Selected Date:{" "}
              <span className="text-white font-bold">
                {format(new Date(selectedDate), "MMMM dd, yyyy")}
              </span>
            </p>
          )}
        </div>

        {/* TIME PICKER */}
        <div>
          <label className="text-sm font-semibold text-[#d4af37] mb-2 block">
            Select Time
          </label>

          <div className="grid grid-cols-3 gap-3">
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 text-sm rounded-lg border transition font-medium ${selectedTime === time
                    ? "bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black border-[#d4af37] shadow-lg scale-[1.03]"
                    : "bg-[#1a1a1a] text-[#f5e6a1] border-[#3d3d3d] hover:bg-[#2a2a2a]"
                  }`}
              >
                {time}
              </button>
            ))}
          </div>

          {selectedTime && (
            <p className="mt-3 text-base font-semibold text-white">
              Selected Time:{" "}
              <span className="text-[#d4af37] font-bold">{selectedTime}</span>
            </p>
          )}
        </div>
      </div>
      <FranchiseForm />
    </div>
  );
}
