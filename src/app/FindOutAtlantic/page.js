"use client";
import React from "react";
import HeroSection from "../../Components/findOutAtlantic/HeroSection/page";
import OurMission from "../../Components/findOutAtlantic/OurMission/page";
import OurService from "../../Components/findOutAtlantic/OurService/page";
import OurPartners from "../../Components/findOutAtlantic/OurPartners/page";
import OurOperationSlider from "../../Components/Common/OurOperationSlider/page";
import { Box } from "@mui/material";

export default function FindOutAtlantic() {
  return (
    <>
      {/* {"hero section"} */}
      <HeroSection />
      {/* {"out mission"} */}
      <OurMission />
      {/* {"Our Service"} */}
      <OurService />
      {/* {"our operation"} */}
      <Box mt={{ md: 30, xs: 10 }}>
        <OurOperationSlider />
      </Box>
      <OurPartners />
    </>
  );
}
