"use client";
import React from "react";
import HeroSection from "../../Components/FindOutAtlantic/HeroSection/page";
import OurMission from "../../Components/FindOutAtlantic/OurMission/page";
import OurService from "../../Components/FindOutAtlantic/OurService/page";
import OurPartners from "../../Components/FindOutAtlantic/OurPartners/page";
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
