"use client";
import React from "react";
import HeroSection from "../FindOutAtlantic/HeroSection/page";
import OurMission from "../FindOutAtlantic/OurMission/page";
import OurService from "../FindOutAtlantic/OurService/page";
import OurPartners from "../FindOutAtlantic/OurPartners/page";
import { Box } from "@mui/material";
import Partenaires from "../../../Components/HomeScreen/Partenaires/page";

export default function FindOutAtlantic() {
  return (
    <>
      {/* {"hero section"} */}
      <HeroSection />
      {/* {"out mission"} */}
      <OurService />
      {/* {"Our Service"} */}
      <OurMission />
      {/* {"our operation"} */}
      <OurPartners />
    </>
  );
}
