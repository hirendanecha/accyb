import React from "react";
import HeroSection from "../discoverTheObservatory/HeroSection/page";
import OurMission from "../discoverTheObservatory/OurMission/page";
import OurService from "../discoverTheObservatory/OurService/page";
import CaseStudies from "../discoverTheObservatory/CaseStudies/page";
import OurPartners from "../discoverTheObservatory/OurPartners/page";
import HowWeWork from "../discoverTheObservatory/HowWeWork/page";
import { Box } from "@mui/material";

export default function DiscoverTheObservatory() {
  return (
    <>
      <HeroSection />
      <OurMission />
      <OurService />
      <CaseStudies />
      <Box mt={10}>
        <HowWeWork />
      </Box>
      <OurPartners />
    </>
  );
}
