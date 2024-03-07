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
  width: "45px !important",
  height: "auto !important",
  [theme.breakpoints.down("lg")]: {
    width: "30px !important",
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
            mt: { md: 20, xs: 5 },
            padding: "0 16px",
          }}
        >
          <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { md: "70px", xs: "28px", lineHeight: "50px" },
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
      <Container disableGutters maxWidth={"xl"} ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
          <Grid
            container
            mt={{ md: 5, xs: 3 }}
            columnSpacing={1}
            rowSpacing={3}
            sx={{ padding: "0 16px", overflow: "hidden" }}
          >
            {activites?.map((ele, index) => {
              return (
                <Grid item xs={12} lg={4} md={6} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      padding: { lg: 5, md: 3, sm: 5, xs: 3 },
                      backgroundColor: "transparent",
                      border: "2px solid #7DB1FF",
                      position: "relative",
                      borderRadius: "20px",
                      // overflow: "hidden",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "-2px",
                        right: "-2px",
                        width: "50px",
                        height: "50px",
                        bgcolor: "#ffffff",
                        borderBottomLeftRadius: "1rem",
                        // borderWidth: "2px",
                        // borderColor: "#7DB1FF",
                        // borderStyle: "solid",
                        zIndex: 5,
                        "::before": {
                          content: "''",
                          position: "absolute",
                          width: "25px",
                          height: "25px",
                          top: 0,
                          left: "1px",
                          transform: "translateX(-100%)",
                          borderTopRightRadius: "16px",
                          border:
                            index % 2
                              ? "2px solid #7DB1FF"
                              : "2px solid #7DB1FF",
                          borderBottomWidth: "0",
                          borderLeftWidth: "0",
                        },
                        "::after": {
                          content: "''",
                          position: "absolute",
                          width: "25px",
                          height: "25px",
                          bottom: "1px",
                          right: 0,
                          transform: "translateY(100%)",
                          borderTopRightRadius: "16px",
                          border:
                            index % 2
                              ? "2px solid #7DB1FF"
                              : "2px solid #7DB1FF",
                          borderBottomWidth: "0",
                          borderLeftWidth: "0",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          content: "''",
                          position: "absolute",
                          bottom: "-1px",
                          left: "-1px",
                          width: "25px",
                          height: "25px",
                          border:
                            index % 2
                              ? "2px solid #7DB1FF"
                              : "2px solid #7DB1FF",
                          borderTopWidth: "0",
                          borderRightWidth: "0",
                          borderBottomLeftRadius: "20px",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        content: "''",
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "25px",
                        height: "100px",
                        bgcolor: "#ffffff",
                        transform: "rotateZ(-45deg)",
                        transformOrigin: "-25px 50px",
                      }}
                    ></Box>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        alignItems: "center",

                        height: "100%",
                        position: "relative",
                        zIndex: 1,
                        gap: { lg: 1.5, md: 2, sm: 3, xs: 3 },
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
                            height: { lg: "119.82px", sm: "100px", xs: "80px" },
                            width: { lg: "119.82px", sm: "100px", xs: "80px" },
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
                        <Box>
                          <Typography
                            sx={{
                              fontSize: { lg: "25px", md: "20px", xs: "18px" },
                              fontWeight: 400,
                              lineHeight: { md: "27px", xs: "22px" },
                              fontFamily: inter.style.fontFamily,
                              color: "#222D55",
                              display: "flex",
                              textAlign: "start",
                              maxWidth: { lg: "350px", xs: "100px" },
                            }}
                          >
                            {ele?.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: { lg: "12px", md: "11px", xs: "10px" },
                              fontWeight: 400,
                              lineHeight: { md: "18px", xs: "16px" },
                              fontFamily: inter.style.fontFamily,
                              color: "#222D55",
                              display: "flex",
                              mt: 1,
                              textAlign: "start",
                            }}
                          >
                            {ele?.description}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </Container>
    </>
  );
}
