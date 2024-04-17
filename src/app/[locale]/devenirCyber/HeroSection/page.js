"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Divider, Grid, Typography, keyframes } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { motion, useAnimation } from "framer-motion";
import { inter } from "../../../../fonts/fonts";
import { useTranslations } from "next-intl";
import { title } from "process";
export default function HeroSection() {
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
          backgroundImage: "url('/Images/BackgroundImg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { md: "900px", xs: "650px" },
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
                        lg: "64px",
                        md: "54px",
                        sm: "45px",
                        xs: "30px",
                      },
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: {
                        lg: "76px",
                        md: "60px",
                        sm: "54px",
                        xs: "40px",
                      },
                      maxWidth: { md: "1000px !important", xs: "550px" },
                      paddingTop: { md: 30, xs: 20 },
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    Favorisez les échanges d’idées et de retours d’expérience autour de la cybersécurité
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { lg: "22px", md: "20px", xs: "18px" },
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: { md: "32px", xs: "25px" },
                      maxWidth: "750px !important",
                      mt: 3,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    Devenir bénévole cyber At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupidit.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Divider
          variant="middle"
          sx={{
            display: { md: "block", xs: "none" },
            bgcolor: "#FFFFFF",
            mt: 5,
            opacity: "20%",
            borderBottomWidth: "1px",
          }}
        />
        <Container disableGutters maxWidth={"xl"}>
          <Grid item xs={12} md={12} position={"relative"} mt={3}>
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
        </Container>
      </Box>
    </Box>
  );
}
