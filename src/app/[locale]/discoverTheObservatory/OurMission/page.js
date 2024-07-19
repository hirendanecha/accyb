"use client";
import React, { useEffect, useRef, useState } from "react";
import Photo1 from "../../../../Icons/Discover/Photo1.svg";
import Photo2 from "../../../../Icons/Discover/Photo2.svg";
import Photo3 from "../../../../Icons/Discover/Photo3.svg";
import Photo4 from "../../../../Icons/Discover/Photo4.svg";
import Photo5 from "../../../../Icons/Discover/Photo5.svg";
import { Box, Container, Divider, Grid, Typography, styled } from "@mui/material";
import Image from "next/image";
import { useAnimation } from "framer-motion";
import { inter } from "../../../../fonts/fonts";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
const Img = styled(Image)(({ theme }) => ({
  width: "63px !important",
  height: "auto !important",
  [theme.breakpoints.down("lg")]: {
    width: "40px !important",
    height: "auto !important",
  },
}));
export default function OurMission() {
  const t = useTranslations("DiscovertheObservatory_OurServices")
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const searchParams = useSearchParams();
  const search = searchParams.get("services");

  useEffect(() => {
    if (search == "true") {
      document.getElementById("services").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }, []);

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
  const activites = [
    {
      img: Photo1,
      title: `${t("title1")}`,
    },
    {
      img: Photo2,
      title: `${t("title2")}`,
    },
    {
      img: Photo3,
      title: `${t("title3")}`,
    },
    {
      img: Photo4,
      title: `${t("title4")}`,
    },
    {
      img: Photo5,
      title: `${t("title5")}`,
    },
  ];
  return (
    <Box sx={{ position: "relative" }} id="services">
      <Container disableGutters maxWidth={"xl"}>
        <Box
          ref={ref}
          sx={{
            mt: { md: 20, xs: 10 },
            padding: "0 16px",
          }}
        >
          {/* <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}> */}

          <Box
            mt={1}
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: {
                md: "75px",
                sm: "60px",
                xs: "30px",
              },
              color: "#222D55",
              fontWeight: 400,
              lineHeight: {
                md: "85px",
                sm: "75px",
                xs: "40px",
              },
              maxWidth: "900px !important",
            }}
          >
            {`${t("Title")}`}
          </Box>
          {/* </motion.div> */}
        </Box>
      </Container>

      <Divider
        variant="middle"
        sx={{
          bgcolor: "#222D55",
          mt: { md: 3, xs: 5 },
          mb: { md: 10, xs: 4 },
          opacity: "20%",
          borderBottomWidth: "1px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 100,
          display: { md: "block", xs: "none" },
        }}
      >
        <svg width="434" height="955" viewBox="0 0 434 955" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.1" filter="url(#filter0_f_1856_3894)">
            <path
              d="M-361 477.5C-361 302.15 -218.85 160 -43.5 160C131.85 160 274 302.15 274 477.5C274 652.85 131.85 795 -43.5 795C-218.85 795 -361 652.85 -361 477.5Z"
              fill="#3964FF"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1856_3894"
              x="-521"
              y="0"
              width="955"
              height="955"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_1856_3894" />
            </filter>
          </defs>
        </svg>
      </Box>

      <Container disableGutters maxWidth={"xl"}>
        <Grid container mt={5} columnSpacing={2} rowSpacing={2} sx={{ padding: "0 16px" }}>
          {activites?.map((ele, index) => {
            return (
              <Grid item xs={12} lg={4} md={6} mt={2} key={index}>
                <Box
                  sx={{
                    // display: "flex",
                    // padding: { lg: 5, md: 3, sm: 5, xs: 3 },
                    // backgroundColor: "transparent",
                    // // border:
                    // //   index % 2 ? "2px solid #7DB1FF" : "2px solid #97E6FF",
                    // border: "2px solid transparent",
                    // borderImageSlice: 1,
                    // borderImage:
                    //   "linear-gradient(to right, #7DB1FF, #97E6FF) 1",
                    // position: "relative",
                    // borderRadius: "20px",
                    // // overflow: "hidden",
                    // height: "100%",
                    position: "relative",
                    padding: { lg: 5, md: 3, sm: 5, xs: 3 },
                    height: "100%",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      borderRadius: "20px",
                      padding: "2px",
                      background: "linear-gradient(90deg, #222D55 -7.37%, #222D55 68.51%)",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "0px",
                      right: "0px",
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
                        width: "28px",
                        height: "28px",
                        top: 0,
                        left: "1px",
                        transform: "translateX(-100%)",
                        borderTopRightRadius: "16px",
                        border: "2px solid #222D55",
                        borderBottomWidth: "0",
                        borderLeftWidth: "0",
                      },
                      "::after": {
                        content: "''",
                        position: "absolute",
                        width: "28px",
                        height: "28px",
                        bottom: "1px",
                        right: 0,
                        transform: "translateY(100%)",
                        borderTopRightRadius: "16px",
                        border: "2px solid #222D55",
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
                        border: "2px solid #222D55",
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
                      gap: { lg: 3, md: 2, xs: 2 },
                    }}
                  >
                    <Grid item xs={3} sm={4}>
                      <Box
                        sx={{
                          borderRadius: "50%",
                          backgroundColor: "#222D55",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid #7DB1FF",
                          height: { lg: "119.55px", sm: "100px", xs: "80px" },
                          width: { lg: "119.55px", sm: "100px", xs: "80px" },
                        }}
                      >
                        <Img src={ele?.img} height={900} width={900} alt="img" />
                      </Box>
                    </Grid>
                    <Grid item xs={8} sm={7}>
                      <Box ref={ref}>
                        {/* <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={controls}
                        > */}
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: { lg: "25px", md: "20px", xs: "18px" },
                            fontWeight: 400,
                            lineHeight: { md: "27px", xs: "20px" },
                            color: "#222D55",
                            display: "flex",
                            textAlign: "start",
                            maxWidth: { lg: "350px", xs: "250px" },
                          }}
                        >
                          {ele?.title}
                        </Typography>
                        {/* </motion.div> */}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
