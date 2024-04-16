import React from "react";
import HeroSection from "../discoverTheObservatory/HeroSection/page";
import OurMission from "../discoverTheObservatory/OurMission/page";
import OurService from "../discoverTheObservatory/OurService/page";
import CaseStudies from "../discoverTheObservatory/CaseStudies/page";
import OurPartners from "../discoverTheObservatory/OurPartners/page";

export default function DiscoverTheObservatory() {
  return (
    <>
      <HeroSection />
      <OurService />
      <OurMission />
      <CaseStudies />
      {/* <OurPartners /> */}
    </>
  );
}
