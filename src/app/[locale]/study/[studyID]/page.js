"use client";
import React, { useEffect } from "react";
import HeroSection from "../HeroSection/page";
import OurDetails from "../OurDetails/page";
import OtherStudies from "../OtherStudies/page";
import { useDispatch, useSelector } from "react-redux";
import { getCaseStudiesById } from "../../../redux/action/caseStudiesActions/caseStudiesAction";
import { useParams } from "next/navigation";

export default function Study() {
  const param = useParams();
  const { studyID } = param;
  console.log(studyID, "studyID");

  const dispatch = useDispatch();
  const {getcaseStudies} = useSelector((state) => state.caseStudies);
  console.log(getcaseStudies, "getcaseStudies");

  useEffect(() => {
    dispatch(getCaseStudiesById(studyID))
      .unwrap()
      .then((res) => {
        console.log(res, "res");
      });
  }, []);
  return (
    <>
      <HeroSection studyDetails={getcaseStudies} />
      <OurDetails studyDetails={getcaseStudies} />
      <OtherStudies />
    </>
  );
}
