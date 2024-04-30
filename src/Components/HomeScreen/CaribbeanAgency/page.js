"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Button, Container, Divider, Grid, Typography, keyframes } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { motion, useAnimation } from "framer-motion";
import { inter } from "../../../fonts/fonts";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useLocale, useTranslations } from "next-intl";
import { title } from "process";
import { useRouter } from "next/navigation";

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

export default function CaribbeanAgency() {
  const locales = useLocale();
  const router = useRouter();
  const t = useTranslations("HeroSection");
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const lgUp = useMediaQuery(425);

  console.log(lgUp, "lgUp");

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

  const handleContactUsClick = (event) => {
    event.preventDefault();
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(90deg, #1C2141 0%, #203DA3 100.35%)",
      }}
    >
      <Box
        component={Swiper}
        sx={{
          "& .swiper-pagination": {
            display: "flex",
            alignItems: "center",
            position: "absolute",
            // left: { xl: "10% !important", xs: "1% !important" },
            // width: "100% !important",
            width: "1440px !important",
            maxWidth: "100% !important",
            left: { md: "50% !important", xs: "55% !important" },
            transform: "translateX(-50%)",
            bottom: { md: "130px !important", xs: "55px !important" },
          },
          "& .swiper-pagination-bullet": {
            bgColor: "#5314A9",
            w: 10,
            h: 4,
            mx: "0.5rem !important",
            width: "8px !important",
            height: "8px !important",
            opacity: "1 !important",
            background: "#8B8D9C !important",
          },
          "& .swiper-pagination-bullet-active": {
            background: "#FFFFFF !important",
          },
        }}
        slidesPerView={1}
        spaceBetween={10}
        speed={1200}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: "url('/Images/Img1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { lg: "900px", md: "950px", sm: "900px", xs: "770px" },
              width: "100%",
            }}
          >
            {/* <Container disableGutters maxWidth={"xl"}></Container> */}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: "url('/Images/Img2.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { lg: "900px", md: "950px", sm: "900px", xs: "770px" },
              width: "100%",
            }}
          >
            {/* <Container disableGutters maxWidth={"xl"}></Container> */}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: "url('/Images/Img3.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { lg: "900px", md: "950px", sm: "900px", xs: "770px" },
              width: "100%",
            }}
          >
            {/* <Container disableGutters maxWidth={"xl"}></Container> */}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: "url('/Images/Img4.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { lg: "900px", md: "950px", sm: "900px", xs: "770px" },
              width: "100%",
            }}
          >
            {/* <Container disableGutters maxWidth={"xl"}></Container> */}
          </Box>
        </SwiperSlide>
        <Box sx={{ position: "absolute", zIndex: 100, top: 0, left: 0, width: "100%" }}>
          <Container disableGutters maxWidth={"xl"}>
            <Box sx={{ padding: "0 16px" }}>
              <Grid container>
                <Grid item xs={12} md={12} lg={12} ref={ref}>
                  {/* <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}> */}
                  <Box
                    sx={{
                      fontSize: {
                        lg: "76.5",
                        md: "75",
                        sm: "60px",
                        xs: "35px",
                      },
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: {
                        lg: "80px",
                        md: "75px",
                        sm: "70px",
                        xs: "50px",
                      },
                      maxWidth: { md: "650px !important", xs: "550px" },
                      paddingTop: { md: 30, xs: 20 },
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("title1")}{" "}
                    <u
                      style={{
                        textDecorationThickness: "3px",
                        textUnderlineOffset: "10px",
                      }}
                    >
                      {t("title2")}
                    </u>{" "}
                    {t("title3")}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { lg: "22px", md: "20px", xs: "18px" },
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: { md: "32px", xs: "25px" },
                      maxWidth: "800px !important",
                      mt: 3,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("description")}
                  </Typography>
                  {/* </motion.div> */}

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { md: "row", xs: "column" },
                      gap: { md: 5, xs: 1 },
                      mt: 5,
                      maxWidth: { md: "unset", xs: "320px" },
                    }}
                  >
                    <Button
                      onClick={() => {
                        router.push(`${locales}/discoverTheACCYB?mission=true`);
                      }}
                      variant="outlined"
                      endIcon={
                        <ArrowForwardIcon
                          sx={{
                            backgroundColor: "#7DB1FF",
                            background: "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                            borderRadius: "50%",
                            width: { md: "50px", xs: "40px" },
                            height: { md: "50px", xs: "40px" },
                            padding: 1.7,
                            marginRight: -2,
                            ml: 3,
                            ":hover": {
                              "@keyframes move-left": {
                                "0%": {
                                  rotate: "0deg",
                                },
                                "100%": {
                                  rotate: "-35deg",
                                },
                              },
                              animation: "move-left 0.3s ease-in-out 0s 1 normal forwards",
                            },
                          }}
                        />
                      }
                      sx={{
                        color: "#FFFFFF",
                        border: "1px solid rgba(142, 155, 191, 0.3)",
                        borderRadius: "61px",
                        padding: "8px 30px",
                        fontSize: "12px",
                        fontWeight: 600,
                        background: "rgba(255, 255, 255, 0.1)",
                        ":hover": {
                          borderColor: "#8E9BBF",
                        },
                        fontFamily: inter.style.fontFamily,
                        "& .MuiButton-endIcon": {
                          marginLeft: 2.2,
                        },
                      }}
                    >
                      {t("button1")}
                    </Button>
                    {/* <Button
                      variant="outlined"
                      endIcon={
                        <ArrowForwardIcon
                          sx={{
                            backgroundColor: "#7DB1FF",
                            background: "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                            borderRadius: "50%",
                            width: { md: "50px", xs: "40px" },
                            height: { md: "50px", xs: "40px" },
                            padding: 1.7,
                            marginRight: -2,
                            ":hover": {
                              "@keyframes move-left": {
                                "0%": {
                                  rotate: "0deg",
                                },
                                "100%": {
                                  rotate: "-35deg",
                                },
                              },
                              animation: "move-left 0.3s ease-in-out 0s 1 normal forwards",
                            },
                          }}
                        />
                      }
                      sx={{
                        color: "#FFFFFF",
                        border: "1px solid rgba(142, 155, 191, 0.3)",
                        borderRadius: "61px",
                        fontSize: "12px",
                        padding: "8px 30px",
                        fontWeight: 600,
                        background: "rgba(255, 255, 255, 0.1)",
                        fontFamily: inter.style.fontFamily,
                        ":hover": {
                          borderColor: "#8E9BBF",
                        },
                      }}
                    >
                      {t("button2")}
                    </Button> */}
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} position={"relative"}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      position: "absolute",
                      right: 0,
                      bottom: { lg: -150, md: -215, sm: -285, xs: -285 },
                    }}
                  >
                    <Box
                      onClick={handleContactUsClick}
                      sx={{
                        display: "flex",
                        gap: 2,
                        cursor: "pointer",
                        alignItems: "center",
                        mr: { md: 3, xs: 0 },
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "#FFFFFF",
                            fontSize: "20px",
                            fontWeight: 400,
                            fontFamily: inter.style.fontFamily,
                          }}
                        >
                          Scroll
                        </Typography>
                      </Box>
                      <ArrowDownwardIcon sx={{ color: "#FFFFFF" }} />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}