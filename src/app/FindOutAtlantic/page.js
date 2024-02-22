"use client";
import React from "react";
import HeroSection from "../findOutAtlantic/HeroSection/page";
import OurMission from "../findOutAtlantic/OurMission/page";
import OurService from "../findOutAtlantic/OurService/page";
import OurPartners from "../findOutAtlantic/OurPartners/page";
import OurOperationSlider from "../../Components/Common/OurOperationSlider/page";
import { Box } from "@mui/material";

export default function DiscoverTheACCYB() {
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
