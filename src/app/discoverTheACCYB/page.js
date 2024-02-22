"use client";
import React from "react";
import HeroSection from "../../Components/discoverTheACCYB/HeroSection/page";
import OurKeyDates from "../../Components/discoverTheACCYB/OurKeyDates/page";
import OurMission from "../../Components/discoverTheACCYB/OurMission/page";
import OurService from "../../Components/discoverTheACCYB/OurService/page";
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
