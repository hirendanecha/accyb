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
  resize: "stratch",
}));
const Imgs = styled(Image)(({ theme }) => ({
  width: "310px !important",
  height: "auto !important",
  resize: "stratch",
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

  const [bgColor, setBgColor] = useState("#222D55");
  const [textColor, setTextColor] = useState("#7DB1FF");
  const [isVisible2, setIsVisible2] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const targetScrollPosition = 2145;
      if (scrollY >= targetScrollPosition) {
        setBgColor("#fff");
        setTextColor("#222D55");
        setShow(true);
      } else {
        setBgColor("#222D55");
        setTextColor("#7DB1FF");
        setShow(false);
      }
      const stopAnimation = 2140;
      if (scrollY >= stopAnimation) {
        setIsVisible2(true);
      } else {
        setIsVisible2(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      title: t("event3"),
      heading: t("heading3"),
      description: t("description3"),
      time: t("date3"),
    },
    {
      img: Image3,
      title: t("event4"),
      heading: t("heading4"),
      description: t("description4"),
      time: t("date4"),
    },
  ];
  const lgDown = useMediaQuery(1300);
  const smDown = useMediaQuery(600);
  return (
    <Box
      sx={{
        backgroundColor: bgColor, // Set background color dynamically
        position: "relative",
        transition: "background-color 0.3s ease",
        overflow: "hidden",
        mt: 10,
        pb: 10,
      }}
    >
      <Container disableGutters maxWidth={"xl"} ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
          {!isVisible2 && smDown ? (
            <>
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
                    boxShadow: `5px -5px 0 5px ${bgColor}`,
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
                    boxShadow: `5px -5px 0 5px ${bgColor}`,
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
            </>
          ) : (
            ""
          )}
          <Box sx={{ padding: !lgDown ? "0 30px" : "0 15px" }}>
            <Box
              sx={{
                display: { md: "flex", xs: "block" },
                flexDirection: { xs: "column-reverse", md: "row" },
                justifyContent: "space-between",
                pt: { md: 15, xs: 10 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { md: "75px", xs: "40px", lineHeight: "50px" },
                  color: textColor,
                }}
              >
                {t("title")}
              </Typography>
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
                  color: show ? "#FFFFFF" : "#222D55",
                  backgroundColor: show ? "#222D55" : "#FFFFFF",
                  border: "1px solid #FFFFFF",
                  borderRadius: "61px",
                  padding: "8px 30px",
                  display: { md: "flex", xs: "none" },
                  fontSize: "12px",
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 600,
                  ":hover": {
                    color: "textColor",
                    border: "1px solid #FFFFFF",
                    backgroundColor: show ? "#222D55" : "#FFFFFF",
                  },
                }}
              >
                {t("button")}
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>

      <Divider
        variant="middle"
        sx={{
          bgcolor: "#FFFFFF",
          mt: { md: 5, xs: 5 },
          mb: 3,
          opacity: show ? "100%" : "20%",
          borderBottomWidth: "1px",
        }}
      />
      <Container disableGutters maxWidth={"xl"}>
        <Grid
          sx={{ padding: !lgDown ? "0 30px" : "0 15px" }}
          container
          columnSpacing={10}
          px={!lgDown ? "50px" : "0px"}
          pt={5}
        >
          <Grid item xs={12} md={12} lg={6} mt={2}>
            <Img src={Annousment} width={900} height={900} alt="img" />
            <Box ref={ref}>
              <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 3,
                  }}
                >
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
                      marginTop: "auto",
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("events1")}
                  </Typography>
                  <Box
                    sx={{
                      border: show ? "1px solid #007A47" : "1px solid #FFFFFF",
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      display: { md: "none", xs: "flex" },
                      justifyContent: "center",
                      alignItems: "center", // This centers the icon vertically
                    }}
                  >
                    <ShareIcon
                      sx={{
                        height: "13px",
                        width: "13px",
                        color: show ? "#007A47" : "#FFFFFF",
                        cursor: "pointer",
                      }}
                    />
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "24px",
                    mt: 1,
                    width: { md: "450px", xs: "100%" },
                    lineHeight: "36px",
                    color: textColor,
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
                    color: textColor,
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
                      color: textColor,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("date1")}
                  </Typography>
                  <Box
                    sx={{
                      border: show ? "1px solid #007A47" : "1px solid #FFFFFF",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      display: { md: "flex", xs: "none" },
                      justifyContent: "center",
                      alignItems: "center", // This centers the icon vertically
                    }}
                  >
                    <ShareIcon
                      sx={{
                        height: "20px",
                        width: "20px",
                        color: show ? "#007A47" : "#FFFFFF",
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
                      <Imgs
                        src={ele?.img}
                        alt="img2"
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
                      <CardContent sx={{ flex: "1 0 auto", padding: 0 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            py: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              backgroundColor: "#007A47",
                              width: "max-content",
                              padding: 1,
                              padding: "8px 15px 8px 15px",
                              cursor: "pointer",
                              color: "#ffffff",
                              textTransform: "uppercase",
                              fontFamily: inter.style.fontFamily,
                            }}
                          >
                            {ele?.title}
                          </Typography>
                          <Box
                            sx={{
                              border: show
                                ? "1px solid #007A47"
                                : "1px solid #FFFFFF",
                              width: "28px",
                              height: "28px",
                              borderRadius: "50%",
                              display: { md: "none", xs: "flex" },
                              justifyContent: "center",
                              alignItems: "center", // This centers the icon vertically
                            }}
                          >
                            <ShareIcon
                              sx={{
                                height: "13px",
                                width: "13px",
                                color: show ? "#007A47" : "#FFFFFF",
                                cursor: "pointer",
                              }}
                            />
                          </Box>
                        </Box>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontFamily: inter.style.fontFamily,
                            fontSize: "18px",
                            lineHeight: "30px",
                            maxWidth: { lg: "360px", md: "100%" },
                            color: textColor,
                          }}
                        >
                          {ele?.heading}
                        </Typography>
                        <Typography
                          mt={1}
                          sx={{
                            color: textColor,
                            fontSize: "15px",
                            lineHeight: "20px",
                            maxWidth: { md: "280px", xs: "100%" },
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
                              mt: 3,
                            }}
                          >
                            <Box>
                              <Typography
                                sx={{
                                  fontSize: 14,
                                  fontWeight: 600,
                                  color: textColor,
                                  fontFamily: inter.style.fontFamily,
                                }}
                              >
                                {ele?.time}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                border: show
                                  ? "1px solid #007A47"
                                  : "1px solid #FFFFFF",
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                display: { md: "flex", xs: "none" },
                                justifyContent: "center",
                                alignItems: "center", // This centers the icon vertically
                              }}
                            >
                              <ShareIcon
                                sx={{
                                  height: "18px",
                                  width: "18px",
                                  color: show ? "#007A47" : "#FFFFFF",
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
                      variant="middle"
                      sx={{
                        bgcolor: "#FFFFFF",
                        mt: 1,
                        mb: 1,
                        opacity: show ? "100%" : "20%",
                        borderBottomWidth: "1px",
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
        {/* {"button"} */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
              color: show ? "#FFFFFF" : "#222D55",
              backgroundColor: show ? "#222D55" : "#FFFFFF",
              border: "1px solid #FFFFFF",
              borderRadius: "61px",
              padding: "8px 30px",
              display: { md: "none", xs: "flex" },
              fontSize: "12px",
              fontFamily: inter.style.fontFamily,
              fontWeight: 600,
              ":hover": {
                color: "textColor",
                border: "1px solid #FFFFFF",
                backgroundColor: show ? "#222D55" : "#FFFFFF",
              },
            }}
          >
            {t("button")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
