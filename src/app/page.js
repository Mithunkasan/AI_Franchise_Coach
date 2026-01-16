"use client";
import Hero from "./components/Hero";
import WhatHappens from "./components/WhatHappens";
import WhoFos from "./components/WhoFos";
import WhyFranchise from "./components/WhyFranchise";
import Learn from "./components/Learn";
import SuccessStories from "./components/SuccessStories";
import MeetMyCoach from "./components/MeetMyCoach";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatHappens />
      <WhoFos />
      <WhyFranchise />
      <Learn />
      <SuccessStories />
      <MeetMyCoach />
      <Testimonial/>
    </div>
  );
}
