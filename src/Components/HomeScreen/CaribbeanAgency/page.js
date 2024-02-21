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
import { inter } from "../../../app/fonts/fonts";
export default function CaribbeanAgency() {
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
          backgroundImage: "url('/Images/BackgroundImg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { md: "970px", xs: "690px" },
          width: "100%",
        }}
      >
        <Container disableGutters maxWidth={"xl"}>
          <Box sx={{ padding: "0 16px" }}>
            <Grid container>
              <Grid item xs={12} lg={6} ref={ref}>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
                  <Box
                    sx={{
                      fontSize: {
                        lg: "85px",
                        md: "75px",
                        sm: "60px",
                        xs: "35px",
                      },
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: {
                        lg: "90px",
                        md: "85px",
                        sm: "75px",
                        xs: "50px",
                      },
                      maxWidth: "750px !important",
                      paddingTop: { md: 30, xs: 20 },
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    Agence{" "}
                    <u
                      style={{
                        "text-decoration-thickness": "3px",
                        "text-underline-offset": "10px",
                      }}
                    >
                      Caribéenne
                    </u>{" "}
                    pour la Cybersécurité
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
                    L’ACCYB, l’autorité de référence dans le domaine de la
                    cybersécurité sur les territoires français d’Amérique.
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
                          width: "50px",
                          height: "50px",
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
                      border: "1px solid #FFFFFF",
                      borderRadius: "61px",
                      padding: "8px 30px",
                      fontSize: "12px",
                      fontWeight: 600,
                      ":hover": {
                        borderColor: "white",
                      },
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    Découvrir nos missionsss
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
                          width: "50px",
                          height: "50px",
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
                      border: "1px solid #FFFFFF",
                      borderRadius: "61px",
                      fontSize: "12px",
                      padding: "8px 30px",
                      fontWeight: 600,
                      fontFamily: inter.style.fontFamily,
                      ":hover": {
                        borderColor: "white",
                      },
                    }}
                  >
                    Découvrir notre écosystème
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} position={"relative"}>
                <Box
                  sx={{
                    display: { lg: "flex", xs: "none" },
                    gap: 2,
                    cursor: "pointer",
                    alignItems: "center",
                    position: "absolute",
                    right: 10,
                    bottom: -50,
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

            <Divider
              variant="middle"
              sx={{
                display: { md: "block", xs: "none" },
                bgcolor: "#8E9BBF",
                mt: { md: 12, xs: 5 },
                borderBottomWidth: "1px",
              }}
            />
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
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
