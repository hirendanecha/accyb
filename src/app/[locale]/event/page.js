"use client";
import React from "react";
import HeroSection from "../event/HeroSection/page";
import OurEvent from "../event/OurEvent/page";
import OurDetails from "../event/OurDetails/page";
export default function Event() {
  return (
    <>
      {/* {"hero section"} */}
      <HeroSection />
      <OurDetails />
      <OurEvent />
    </>
  );
}
