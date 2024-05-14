"use client";
import React, { useEffect, useRef } from "react";
import HeroSection from "../../event/HeroSection/page";
import OurEvent from "../../event/OurEvent/page";
import OurDetails from "../../event/OurDetails/page";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getEventsById } from "../../../redux/action/eventActions/eventAction";
export default function Event() {
  const { getEvent, loading } = useSelector((state) => state.events);
  const initialized = useRef(false);
  const params = useParams();
  const dispatch = useDispatch();
  const { eventId } = params;

  useEffect(() => {
    if (initialized.current) return;

    initialized.current = true;
    if (eventId) {
      dispatch(getEventsById(eventId));
    }
  }, [eventId]);
  return (
    <>
      {/* {"hero section"} */}
      <HeroSection getEvent={getEvent} loading={loading} />
      <OurDetails getEvent={getEvent} />
      <OurEvent />
    </>
  );
}
