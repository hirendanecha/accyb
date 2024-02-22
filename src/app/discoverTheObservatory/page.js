import React from "react";
import HeroSection from "../../Components/discoverTheObservatory/HeroSection/page";
import OurMission from "../../Components/discoverTheObservatory/OurMission/page";
import OurService from "../../Components/discoverTheObservatory/OurService/page";
import CaseStudies from "../../Components/discoverTheObservatory/CaseStudies/page";
import OurPartners from "../../Components/discoverTheObservatory/OurPartners/page";
import HowWeWork from "../../Components/discoverTheObservatory/HowWeWork/page";
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
