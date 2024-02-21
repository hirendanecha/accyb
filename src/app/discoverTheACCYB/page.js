"use client";
import React from "react";
import HeroSection from "../discoverTheACCYB/HeroSection/page";
import OurKeyDates from "../discoverTheACCYB/OurKeyDates/page";
import OurMission from "../discoverTheACCYB/OurMission/page";
import OurService from "../discoverTheACCYB/OurService/page";
import HowToWorkSlider from "../../Components/Common/HowWeWorkSlider/page";

export default function DiscoverTheACCYB() {
  return (
    <>
      {/* {"hero section"} */}
      <HeroSection />
      {/* {"Our key dates"} */}
      <OurKeyDates />
      {/* {"what are our mission"} */}
      <OurMission />
      {/* {"our service"} */}
      <OurService />
      {/* {"testimonials"} */}
      <HowToWorkSlider />
    </>
  );
}