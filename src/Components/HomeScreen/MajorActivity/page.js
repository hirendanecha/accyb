"use client";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Stack from "../../../Icons/MajorActivity/Stack.svg";
import Doctor from "../../../Icons/MajorActivity/Doctor.svg";
import Annousment from "../../../Icons/MajorActivity/Annousment.svg";
import Adviser from "../../../Icons/MajorActivity/Adviser.svg";
import Eye from "../../../Icons/MajorActivity/Eye.svg";
import Tower from "../../../Icons/MajorActivity/Tower.svg";
import { motion, useAnimation } from "framer-motion";
import { inter } from "../../../fonts/fonts";
import { useTranslations } from "next-intl";

const Img = styled(Image)(({ theme }) => ({
  width: "50px !important",
  height: "auto !important",
  [theme.breakpoints.down("lg")]: {
    width: "40px !important",
    height: "auto !important",
  },
  [theme.breakpoints.down("xs")]: {
    width: "0px !important",
    height: "auto !important",
  },
}));

export const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};
export default function MajorActivity() {
  const t = useTranslations("majorActivities");
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [isVisible, controls]);
  const mdDown = useMediaQuery(1200);
  const activites = [
    {
      img: Stack,
      title: t("title1"),
      description: t("description1"),
    },
    {
      img: Doctor,
      title: t("title2"),
      description: t("description2"),
    },
    {
      img: Annousment,
      title: t("title3"),
      description: t("description3"),
    },
    {
      img: Adviser,
      title: t("title4"),
      description: t("description4"),
    },
    {
      img: Eye,
      title: t("title5"),
      description: t("description5"),
    },
    {
      img: Tower,
      title: t("title6"),
      description: t("description6"),
    },
  ];
  return (
    <>
      <Container disableGutters maxWidth={"xl"}>
        <Box
          ref={ref}
          sx={{
            mt: { md: 20, xs: 10 },
            padding: "0 16px",
          }}
        >
          <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { md: "70px", xs: "40px", lineHeight: "50px" },
                color: "#222D55",
                fontFamily: inter.style.fontFamily,
              }}
            >
              {t("title")}
            </Typography>
          </motion.div>
        </Box>
      </Container>

      <Divider
        variant="middle"
        sx={{
          display: { md: "block", xs: "none" },
          bgcolor: "#222D55",
          mt: 5,
          opacity: "20%",
          borderBottomWidth: "1px",
        }}
      />
      <Container disableGutters maxWidth={"xl"}>
        <Grid
          container
          mt={5}
          columnSpacing={2}
          rowSpacing={2}
          sx={{ padding: "0 16px" }}
        >
          {activites?.map((ele, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    padding: { lg: 6, md: 3, sm: 3, xs: 2 },
                    backgroundColor: "transparent",
                    border:
                      index % 2 ? "2px solid #7DB1FF" : "2px solid #97E6FF",
                    position: "relative",
                    borderRadius: index == 0 ? "0px" : "20px",
                    // overflow: "hidden",
                    height: "100%",
                  }}
                >
                  {/* {index !== 0 && !mdDown ? (
                  <Box
                    sx={{
                      position: "absolute",
                      top: -3,
                      right: -3,
                      height: "80px",
                      width: "80px",
                      borderLeft:
                        index % 2 ? "2px solid #7DB1FF" : "2px solid #97E6FF",
                      borderBottom:
                        index % 2 ? "2px solid #7DB1FF" : "2px solid #97E6FF",
                      borderRadius: "0 0 0% 30%",
                      zIndex: 0,
                      backgroundColor: "#fff",
                    }}
                  />
                ) : (
                  ""
                )} */}
                  {/* <Box
                    sx={{
                      position: "absolute",
                      top: -2,
                      right: "75px",
                      height: "50px",
                      width: "50px",
                      borderTop: "2px solid #7DB1FF",
                      borderRight: "2px solid #7DB1FF",
                      borderRadius: "0 30% 0% 0%",
                      backgroundColor:"red",
                      // transform: "translate(50%, -50%)",
                      zIndex: 0,
                      backgroundColor: "#fff",
                      // boxShadow: "0px 0px 0px 1000px #fff",
                    }}
                  /> */}
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      alignItems: "center",

                      height: "100%",
                      position: "relative",
                      zIndex: 1,
                      gap: { lg: 3, md: 2, xs: 2 },
                    }}
                  >
                    <Grid item xs={3} sm={4}>
                      <Box
                        sx={{
                          borderRadius: "50%",
                          backgroundColor: "#1B2341",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid #8E9BBF",
                          height: { lg: "140px", sm: "120px", xs: "80px" },
                          width: { lg: "140px", sm: "120px", xs: "80px" },
                        }}
                      >
                        <Img
                          src={ele?.img}
                          height={900}
                          width={900}
                          alt="img"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8} sm={7}>
                      <Box ref={ref}>
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={controls}
                        >
                          <Typography
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontSize: { lg: "32px", md: "30px", xs: "18px" },
                              fontWeight: { lg: 500, xs: 600 },
                              lineHeight: { md: "42px", xs: "25px" },
                              color: "#222D55",
                              display: "flex",
                              textAlign: "start",
                              maxWidth: { lg: "320px", xs: "250px" },
                            }}
                          >
                            {ele?.title}
                          </Typography>
                          <Typography
                            sx={{
                              mt: 1,
                              fontSize: { lg: "16px", md: "16px", xs: "14px" },
                              fontWeight: 400,
                              lineHeight: {
                                lg: "25px",
                                md: "22px",
                                xs: "20px",
                              },
                              fontFamily: inter.style.fontFamily,
                              color: "#222D55",
                              display: "flex",
                              textAlign: "start",
                              width: { lg: "350px", md: "250px", xs: "230px" },
                            }}
                          >
                            {ele?.description}
                          </Typography>
                        </motion.div>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
