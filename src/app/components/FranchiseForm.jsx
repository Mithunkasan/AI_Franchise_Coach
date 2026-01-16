"use client";
import { useState } from "react";
import * as React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function FranchiseForm() {
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: "",
        whatsapp: "",
        city: "",
        businessName: "",
        category: "",
        revenue: "",
        yearsInBusiness: "",
        outlets: "",
        systemised: "",
        replicable: "",
        startTime: ""
    });

    // Load professional fonts
    React.useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const validateStep1 = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = "Name must be at least 2 characters";
        }

        if (!formData.whatsapp.trim()) {
            newErrors.whatsapp = "WhatsApp number is required";
        } else if (!/^[\d\s+()-]{10,15}$/.test(formData.whatsapp.trim())) {
            newErrors.whatsapp = "Please enter a valid phone number";
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }

        if (!formData.businessName.trim()) {
            newErrors.businessName = "Business name is required";
        }

        if (!formData.category) {
            newErrors.category = "Please select a category";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};

        if (!formData.revenue) newErrors.revenue = "Please select revenue range";
        if (!formData.yearsInBusiness) newErrors.yearsInBusiness = "Please select years in business";
        if (!formData.outlets) newErrors.outlets = "Please select number of outlets";
        if (!formData.systemised) newErrors.systemised = "Please select systemisation level";
        if (!formData.replicable) newErrors.replicable = "Please select replicability status";
        if (!formData.startTime) newErrors.startTime = "Please select timeline";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep1()) {
            setStep(2);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        setStep(1);
        setErrors({});
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = async () => {
        if (!validateStep2()) return;

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/submissions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (!res.ok) {
                console.error("Submission failed:", result);
                setIsSubmitting(false);
                return;
            }

            console.log("Saved to DB:", result)
            setFormData({
                fullName: "",
                whatsapp: "",
                city: "",
                businessName: "",
                category: "",
                revenue: "",
                yearsInBusiness: "",
                outlets: "",
                systemised: "",
                replicable: "",
                startTime: ""
            });
            setStep(1);
            router.push("/congratulations");
        } catch (err) {
            console.error("Network or server error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const labelStyle = {
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.875rem',
        letterSpacing: '0.025em',
        fontWeight: 600
    };

    const inputStyle = {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: '0.9375rem'
    };

    const buttonStyle = {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        letterSpacing: '0.025em'
    };

    const errorStyle = {
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.8125rem',
        fontWeight: 500
    };

    const progressPercentage = step === 1 ? 50 : 100;

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 py-12">
            <div className="w-full max-w-2xl">

                <div className="text-center mb-8 px-2">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-black leading-tight mb-3 text-center"
                    >
                        {/* Top Text */}
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg sm:text-2xl md:text-4xl tracking-wide text-white"
                        >
                            User Identity & 
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 
          bg-gradient-to-r from-[#d4af37] via-[#f5e6a1] to-[#b8860b]
          bg-clip-text text-transparent font-extrabold relative 
          animate-shimmer"
                        >
                            Information Disclosure

                            {/* Gold Glow Pulse */}
                            <span className="absolute inset-0 blur-xl opacity-40 bg-gradient-to-r from-[#d4af37] via-[#f5e6a1] to-[#b8860b] -z-10 animate-pulseGlow"></span>
                        </motion.span>

                        {/* Gold Gradient Animated Text */}

                    </motion.h1>

                    <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
                        Please answer the short questionnairs so we have the details needed to help you on your call (takes 2-3 minutes).
                    </p>
                </div>

                {/* Card Container */}
                <div className="bg-black border border-yellow-600/30 rounded-2xl shadow-2xl p-8 backdrop-blur-sm shadow-lg shadow-yellow-500/30 border border-yellow-500/20">
                    {/* Heading */}

                    {/* ----------------------- STEP 1 ----------------------- */}
                    {step === 1 && (
                        <div className="space-y-5">
                            {/* Full Name */}
                            <div>
                                <label className="block text-yellow-500 mb-2.5" style={labelStyle}>
                                    FULL NAME <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.fullName}
                                    onChange={(e) => handleChange("fullName", e.target.value)}
                                    placeholder="Enter your full name"
                                    className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${errors.fullName ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-yellow-600/30 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                                        }`}
                                    style={inputStyle}
                                />
                                {errors.fullName && (
                                    <p className="text-red-400 mt-1.5" style={errorStyle}>{errors.fullName}</p>
                                )}
                            </div>

                            {/* WhatsApp Number */}
                            <div>
                                <label className="block text-yellow-500 mb-2.5" style={labelStyle}>
                                    WHATSAPP NUMBER <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="tel"
                                    value={formData.whatsapp}
                                    onChange={(e) => handleChange("whatsapp", e.target.value)}
                                    placeholder="+91 XXXXX XXXXX"
                                    className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${errors.whatsapp ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-yellow-600/30 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                                        }`}
                                    style={inputStyle}
                                />
                                {errors.whatsapp && (
                                    <p className="text-red-400 mt-1.5" style={errorStyle}>{errors.whatsapp}</p>
                                )}
                            </div>

                            {/* City */}
                            <div>
                                <label className="block text-yellow-500 mb-2.5" style={labelStyle}>
                                    CITY / LOCATION <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.city}
                                    onChange={(e) => handleChange("city", e.target.value)}
                                    placeholder="Enter your city"
                                    className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${errors.city ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-yellow-600/30 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                                        }`}
                                    style={inputStyle}
                                />
                                {errors.city && (
                                    <p className="text-red-400 mt-1.5" style={errorStyle}>{errors.city}</p>
                                )}
                            </div>

                            {/* Business Name */}
                            <div>
                                <label className="block text-yellow-500 mb-2.5" style={labelStyle}>
                                    BUSINESS NAME <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.businessName}
                                    onChange={(e) => handleChange("businessName", e.target.value)}
                                    placeholder="Enter your business name"
                                    className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${errors.businessName ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-yellow-600/30 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                                        }`}
                                    style={inputStyle}
                                />
                                {errors.businessName && (
                                    <p className="text-red-400 mt-1.5" style={errorStyle}>{errors.businessName}</p>
                                )}
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-yellow-500 mb-2.5" style={labelStyle}>
                                    BUSINESS CATEGORY <span className="text-red-400">*</span>
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => handleChange("category", e.target.value)}
                                    className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white focus:outline-none transition-all ${errors.category ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-yellow-600/30 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                                        }`}
                                    style={inputStyle}
                                >
                                    <option value="" className="bg-gray-900">Select category</option>
                                    <option value="food" className="bg-gray-900">Health</option>
                                    <option value="service" className="bg-gray-900">Food</option>
                                    <option value="retail" className="bg-gray-900">Boutique</option>
                                    <option value="food" className="bg-gray-900">Education</option>
                                    <option value="service" className="bg-gray-900">Fitness</option>
                                    <option value="retail" className="bg-gray-900">Retail</option>
                                    <option value="food" className="bg-gray-900">Beauty</option>
                                    <option value="service" className="bg-gray-900">IT</option>
                                    <option value="retail" className="bg-gray-900">Others</option>
                                    
                                </select>
                                {errors.category && (
                                    <p className="text-red-400 mt-1.5" style={errorStyle}>{errors.category}</p>
                                )}
                            </div>


                            {/* Next Button */}
                            <button
                                onClick={handleNext}
                                className="w-full mt-8 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black py-4 rounded-xl shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                                style={buttonStyle}
                            >
                                NEXT →
                            </button>
                        </div>
                    )}

                    {/* ----------------------- STEP 2 ----------------------- */}
                    {step === 2 && (
                        <div className="space-y-5">
                            {/* Annual Revenue */}
                            <div>
                                <label className="block text-yellow-500 mb-2.5" style={labelStyle}>
                                    CURRENT ANNUAL REVENUE <span className="text-red-400">*</span>
                                </label>
                                <select
                                    value={formData.revenue}
                                    onChange={(e) => handleChange("revenue", e.target.value)}
                                    className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white focus:outline-none transition-all ${errors.revenue ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-yellow-600/30 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                                        }`}
                                    style={inputStyle}
                                >
                                    <option value="" className="bg-gray-900">Select revenue range</option>
                                    <option value="<50L" className="bg-gray-900">{"<"} ₹50 lakh</option>
                                    <option value="50L-1Cr" className="bg-gray-900">₹50L – ₹1Cr</option>
                                    <option value="1Cr-5Cr" className="bg-gray-900">₹1Cr – ₹5Cr</option>
                                    <option value="5Cr+" className="bg-gray-900">₹5Cr+</option>
                                </select>
                                {errors.revenue && (
                                    <p className="text-red-400 mt-1.5" style={errorStyle}>{errors.revenue}</p>
                                )}
                            </div>

                            {/* Years in Business */}
                            <div>
                                <label className="block text-yellow-500 mb-2.5" style={labelStyle}>
                                    YEARS IN BUSINESS <span className="text-red-400">*</span>
                                </label>
                                <select
                                    value={formData.yearsInBusiness}
                                    onChange={(e) => handleChange("yearsInBusiness", e.target.value)}
                                    className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white focus:outline-none transition-all ${errors.yearsInBusiness ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-yellow-600/30 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                                        }`}
                                    style={inputStyle}
                                >
                                    <option value="" className="bg-gray-900">Select years</option>
                                    <option value="<1" className="bg-gray-900">{"<"}1 year</option>
                                    <option value="1-3" className="bg-gray-900">1–3 years</option>
                                    <option value="3-5" className="bg-gray-900">3–5 years</option>
                                    <option value="5+" className="bg-gray-900">5+ years</option>
                                </select>
                                {errors.yearsInBusiness && (
                                    <p className="text-red-400 mt-1.5" style={errorStyle}>{errors.yearsInBusiness}</p>
                                )}
                            </div>

                            {/* Outlets */}
                            <div>
                                <label className="block text-yellow-500 mb-2.5" style={labelStyle}>
                                    NUMBER OF OUTLETS <span className="text-red-400">*</span>
                                </label>
                                <select
                                    value={formData.outlets}
                                    onChange={(e) => handleChange("outlets", e.target.value)}
                                    className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white focus:outline-none transition-all ${errors.outlets ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-yellow-600/30 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                                        }`}
                                    style={inputStyle}
                                >
                                    <option value="" className="bg-gray-900">Select number</option>
                                    <option value="one" className="bg-gray-900">One</option>
                                    <option value="two" className="bg-gray-900">Two</option>
                                    <option value="3+" className="bg-gray-900">More than 3</option>
                                </select>
                                {errors.outlets && (
                                    <p className="text-red-400 mt-1.5" style={errorStyle}>{errors.outlets}</p>
                                )}
                            </div>

                            {/* Systemised */}
                            <div>
                                <label className="block text-yellow-500 mb-2.5" style={labelStyle}>
                                    BUSINESS SYSTEMISATION <span className="text-red-400">*</span>
                                </label>
                                <select
                                    value={formData.systemised}
                                    onChange={(e) => handleChange("systemised", e.target.value)}
                                    className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white focus:outline-none transition-all ${errors.systemised ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-yellow-600/30 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                                        }`}
                                    style={inputStyle}
                                >
                                    <option value="" className="bg-gray-900">Select level</option>
                                    <option value="fully" className="bg-gray-900">Fully Systemised</option>
                                    <option value="partially" className="bg-gray-900">Partially Systemised</option>
                                    <option value="not" className="bg-gray-900">Not Systemised</option>
                                </select>
                                {errors.systemised && (
                                    <p className="text-red-400 mt-1.5" style={errorStyle}>{errors.systemised}</p>
                                )}
                            </div>

                            {/* Replicable */}
                            <div>
                                <label className="block text-yellow-500 mb-2.5" style={labelStyle}>
                                    REPLICABILITY <span className="text-red-400">*</span>
                                </label>
                                <select
                                    value={formData.replicable}
                                    onChange={(e) => handleChange("replicable", e.target.value)}
                                    className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white focus:outline-none transition-all ${errors.replicable ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-yellow-600/30 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                                        }`}
                                    style={inputStyle}
                                >
                                    <option value="" className="bg-gray-900">Select status</option>
                                    <option value="yes" className="bg-gray-900">Yes, Fully Replicable</option>
                                    <option value="needs" className="bg-gray-900">Needs Improvement</option>
                                    <option value="unsure" className="bg-gray-900">Not Sure</option>
                                </select>
                                {errors.replicable && (
                                    <p className="text-red-400 mt-1.5" style={errorStyle}>{errors.replicable}</p>
                                )}
                            </div>

                            {/* Start franchising */}
                            <div>
                                <label className="block text-yellow-500 mb-2.5" style={labelStyle}>
                                    FRANCHISING TIMELINE <span className="text-red-400">*</span>
                                </label>
                                <select
                                    value={formData.startTime}
                                    onChange={(e) => handleChange("startTime", e.target.value)}
                                    className={`w-full px-4 py-3.5 bg-black/50 border rounded-xl text-white focus:outline-none transition-all ${errors.startTime ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-yellow-600/30 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                                        }`}
                                    style={inputStyle}
                                >
                                    <option value="" className="bg-gray-900">Select timeline</option>
                                    <option value="immediate" className="bg-gray-900">Immediately</option>
                                    <option value="3months" className="bg-gray-900">Within 3 Months</option>
                                    <option value="6-12months" className="bg-gray-900">6–12 Months</option>
                                    <option value="exploring" className="bg-gray-900">Just Exploring</option>
                                </select>
                                {errors.startTime && (
                                    <p className="text-red-400 mt-1.5" style={errorStyle}>{errors.startTime}</p>
                                )}
                            </div>

                            {/* Back + Submit */}
                            <div className="flex gap-4 mt-8">
                                <button
                                    onClick={handleBack}
                                    disabled={isSubmitting}
                                    className="flex-1 bg-black border border-yellow-600/30 text-yellow-500 hover:text-yellow-400 hover:border-yellow-500/50 py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={buttonStyle}
                                >
                                    ← BACK
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black py-4 rounded-xl shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    style={buttonStyle}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            SUBMITTING...
                                        </>
                                    ) : (
                                        "SUBMIT"
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Note */}
                <div className="text-center mt-6 space-y-2">
                    <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                        All information is confidential and secure
                    </p>
                    <p className="text-gray-500 text-xs" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                    </p>
                </div>
            </div>
        </div>
    );
}