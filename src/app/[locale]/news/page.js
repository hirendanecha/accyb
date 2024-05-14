"use client";
import React, { useEffect, useRef } from "react";
import HeroSection from "./HeroSection/page";
import OurEvents from "./OurEvents/page";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../redux/action/eventActions/eventAction";

export default function News() {
  const { allEvents } = useSelector((state) => state.events);
  const initialized = useRef(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (initialized.current) return;

    initialized.current = true;
    dispatch(getAllEvents());
  }, []);

  return (
    <>
      <HeroSection allEvents={allEvents} />
      <OurEvents />
    </>
  );
}
