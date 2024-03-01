"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  keyframes,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { motion, useAnimation } from "framer-motion";
import { inter } from "../../../fonts/fonts";
import { useTranslations } from "next-intl";
import { title } from "process";
export default function CaribbeanAgency() {
  const t = useTranslations("HeroSection");
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
        background: "linear-gradient(90deg, #1C2141 0%, #203DA3 100.35%)",
      }}
    >
      <Box
        sx={{
          backgroundImage: "url('/Images/BackgroundImg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { lg: "970px", md: "950px", sm: "900px", xs: "770px" },
          width: "100%",
        }}
      >
        <Container disableGutters maxWidth={"xl"}>
          <Box sx={{ padding: "0 16px" }}>
            <Grid container>
              <Grid item xs={12} md={12} lg={12} ref={ref}>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
                  <Box
                    sx={{
                      fontSize: {
                        lg: "85px",
                        md: "80px",
                        sm: "60px",
                        xs: "35px",
                      },
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: {
                        lg: "90px",
                        md: "85px",
                        sm: "85px",
                        xs: "50px",
                      },
                      maxWidth: { md: "750px !important", xs: "550px" },
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
                      lineHeight: { md: "40px", xs: "25px" },
                      maxWidth: "550px !important",
                      mt: 3,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("description")}
                  </Typography>
                </motion.div>

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
                    variant="outlined"
                    endIcon={
                      <ArrowForwardIcon
                        sx={{
                          backgroundColor: "#7DB1FF",
                          background:
                            "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
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
                            animation:
                              "move-left 0.3s ease-in-out 0s 1 normal forwards",
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
                  <Button
                    variant="outlined"
                    endIcon={
                      <ArrowForwardIcon
                        sx={{
                          backgroundColor: "#7DB1FF",
                          background:
                            "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
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
                            animation:
                              "move-left 0.3s ease-in-out 0s 1 normal forwards",
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
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                position={"relative"}
                sx={{ display: { md: "block", xs: "none" } }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    cursor: "pointer",
                    alignItems: "center",
                    position: "absolute",
                    right: 10,
                    bottom: { md: -70, xs: -60 },
                  }}
                >
                  <Box onClick={handleContactUsClick}>
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
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Divider
          variant="middle"
          sx={{
            // display: { md: "block", xs: "none" },
            bgcolor: "#FFFFFF",
            mt: { md: 12, xs: 10 },
            opacity: "30%",
            borderBottomWidth: "1px",
          }}
        />
        <Container disableGutters maxWidth={"xl"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              gap: 2,
              mt: 5,
              mr: 1.5,
            }}
          >
            <Box>
              <FiberManualRecordIcon
                sx={{ color: "#FFFFFF", width: "10px", height: "10px" }}
              />
            </Box>
            <Box>
              <FiberManualRecordIcon
                sx={{ color: "#8E9BBF", width: "10px", height: "10px" }}
              />
            </Box>
            <Box>
              <FiberManualRecordIcon
                sx={{ color: "#8E9BBF", width: "10px", height: "10px" }}
              />
            </Box>
            <Box>
              <FiberManualRecordIcon
                sx={{ color: "#8E9BBF", width: "10px", height: "10px" }}
              />
            </Box>
            <Grid item xs={12} md={12} display={{ md: "none", xs: "block" }} ml={2}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <Box onClick={handleContactUsClick}>
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
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
