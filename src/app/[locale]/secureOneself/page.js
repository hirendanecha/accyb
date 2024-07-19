import React from "react";
import HeroSection from "../secureOneself/HeroSection/page";
import Category from "../secureOneself/Category/page";

export const metadata = {
  title: "ACCYBB11",
  description: "Caribbean Cybersecurity Agency (CCYBA)",
  imageurl: `https://accyb.vercel.app/Thumbnail1.png`,
  websiteurl: `https://accyb.vercel.app`,
};
export default function secureOneself() {
  
  return (
    <>
      <HeroSection />
      <Category />
    </>
  );
}
