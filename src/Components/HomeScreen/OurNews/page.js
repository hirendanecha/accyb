"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import Annousment from "../../../Icons/Anounsment.svg";
import Image1 from "../../../Icons/Image1.png";
import Image2 from "../../../Icons/Image2.png";
import Image3 from "../../../Icons/Image3.png";
import { motion, useAnimation } from "framer-motion";
import { inter } from "../../../fonts/fonts";
import { useTranslations } from "next-intl";

const Img = styled(Image)(({ theme }) => ({
  width: "100% !important",
  height: "auto !important",
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
export default function OurNews() {
  const t = useTranslations("OurNews");
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
  const data = [
    {
      img: Image1,
      title: t("event2"),
      heading: t("heading2"),
      description: t("description2"),
      time: t("date2"),
    },
    {
      img: Image2,
      title: t("event2"),
      heading: t("heading2"),
      description: t("description2"),
      time: t("date2"),
    },
    {
      img: Image3,
      title: t("event2"),
      heading: t("heading2"),
      description: t("description2"),
      time: t("date2"),
    },
  ];
  const lgDown = useMediaQuery(1300);
  return (
    <Box
      sx={{
        backgroundColor: "#222D55",
        position: "relative",
        borderRadius: "20px 20px 0 0",
        // height: "100vh",
        overflow: "hidden",
        mt: 10,
        pb: 10,
      }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50px",
            height: "50px",
            bgcolor: "#ffffff",
            borderBottomLeftRadius: "1rem",
            zIndex: 5,
            "::before": {
              content: "''",
              position: "absolute",
              width: "20px",
              height: "20px",
              top: "10px",
              left: "-10px",
              transform: "translateX(-100%)",
              boxShadow: "5px -5px 0 5px #222D55",
              borderTopRightRadius: "0.75rem",
            },
            "::after": {
              content: "''",
              position: "absolute",
              width: "20px",
              height: "20px",
              bottom: "-10px",
              right: "10px",
              transform: "translateY(100%)",
              boxShadow: "5px -5px 0 5px #222D55",
              borderTopRightRadius: "0.75rem",
            },
          }}
        ></Box>
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
        <Box sx={{ padding: !lgDown ? "0 30px" : "0 15px" }} ref={ref}>
          <Box
            sx={{
              display: { md: "flex", xs: "block" },
              flexDirection: { xs: "column-reverse", md: "row" },
              justifyContent: "space-between",
              pt: { md: 15, xs: 10 },
            }}
          >
            <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { md: "75px", xs: "40px", lineHeight: "50px" },
                  color: "#7DB1FF",
                }}
              >
                {t("title")}
              </Typography>
            </motion.div>
            <Button
              variant="outlined"
              endIcon={
                <ArrowForwardIcon
                  sx={{
                    backgroundColor: "#7DB1FF",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                    width: "50px",
                    height: "50px",
                    color: "#FFFFFF",
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
                      animation:
                        "move-left 0.3s ease-in-out 0s 1 normal forwards",
                    },
                  }}
                />
              }
              sx={{
                mt: { md: 0, xs: 2 },
                color: "#222D55",
                backgroundColor: "#FFFFFF",
                border: "1px solid #FFFFFF",
                borderRadius: "61px",
                padding: "8px 30px",
                fontSize: "12px",
                fontFamily: inter.style.fontFamily,
                fontWeight: 600,
                ":hover": {
                  color: "white",
                  border: "1px solid #FFFFFF",
                },
              }}
            >
              {t("button")}
            </Button>
          </Box>
          <Divider
            variant="middle"
            sx={{
              bgcolor: "#8E9BBF",
              mt: { md: 5, xs: 5 },
              borderBottomWidth: "1px",
            }}
          />
          <Grid
            container
            columnSpacing={10}
            px={!lgDown ? "50px" : "0px"}
            pt={5}
          >
            <Grid item xs={12} md={12} lg={6} mt={2}>
              <Img src={Annousment} width={900} height={900} alt="img" />
              <Box ref={ref}>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
                  <Typography
                    sx={{
                      backgroundColor: "#007A47",
                      width: "max-content",
                      padding: "8px 15px 8px 15px",
                      fontSize: "12px",
                      mt: 3,
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("events1")}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      mt: 1,
                      width: { md: "450px", xs: "100%" },
                      lineHeight: "36px",
                      color: "#FFFFFF",
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("heading1")}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      mt: 1,
                      width: { md: "450px", xs: "100%" },
                      lineHeight: "22px",
                      color: "#FFFFFF",
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("description1")}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 500,
                        mt: 2,
                        fontSize: "14px",
                        color: "#FFFFFF",
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {t("date1")}
                    </Typography>
                    <Box
                      sx={{
                        border: "1px solid #FFFFFF",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center", // This centers the icon vertically
                      }}
                    >
                      <ShareIcon
                        sx={{
                          height: "20px",
                          width: "20px",
                          color: "#FFFFFF",
                          cursor: "pointer",
                        }}
                      />
                    </Box>
                  </Box>
                </motion.div>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={6} mt={{ lg: "unset", xs: 10 }}>
              {data?.map((ele, idx) => {
                return (
                  <Box key={idx}>
                    <Box
                      sx={{
                        display: { md: "flex", xs: "block" },
                        flexDirection: { md: "row", xs: "column" },
                        gap: 3,
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Img
                          src={ele?.img}
                          alt="img2"
                          style={{ height: "auto", width: "100%" }}
                          width={900}
                          height={900}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: "16px",
                        }}
                      >
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography
                            sx={{
                              backgroundColor: "#007A47",
                              width: "max-content",
                              padding: 1,
                              fontSize: "12px",
                              mb: 2,
                              padding: "8px 15px 8px 15px",
                              cursor: "pointer",
                              color: "#FFFFFF",
                              textTransform: "uppercase",
                              fontFamily: inter.style.fontFamily,
                            }}
                          >
                            {ele?.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontFamily: inter.style.fontFamily,
                              fontSize: "18px",
                              maxWidth: { lg: "230px", md: "100%" },
                              color: "#FFFFFF",
                            }}
                          >
                            {ele?.heading}
                          </Typography>
                          <Typography
                            mt={2}
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "14px",
                              maxWidth: "280px",
                              fontFamily: inter.style.fontFamily,
                            }}
                          >
                            {ele?.description}
                          </Typography>
                          <Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mt: 1,
                              }}
                            >
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: "#FFFFFF",
                                    fontFamily: inter.style.fontFamily,
                                  }}
                                >
                                  {ele?.time}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  border: "1px solid #FFFFFF",
                                  width: "36px",
                                  height: "36px",
                                  borderRadius: "50%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center", // This centers the icon vertically
                                }}
                              >
                                <ShareIcon
                                  sx={{
                                    height: "16px",
                                    width: "16px",
                                    color: "#FFFFFF",
                                    cursor: "pointer",
                                  }}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </CardContent>
                      </Box>
                    </Box>
                    {idx !== data.length - 1 ? (
                      <Divider
                        orientation="vertical"
                        sx={{
                          mt: 2,
                          mb: 2,
                          height: "1px", // Adjust height as needed
                          backgroundColor: "#8E9BBF", // Example color
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
