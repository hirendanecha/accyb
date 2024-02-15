"use client";
import {
  Box,
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
import { inter } from "../../../app/fonts/fonts";

const Img = styled(Image)(({ theme }) => ({
  width: "60px !important",
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
      title: "Statistique des territoires",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      img: Doctor,
      title: "Diagnostic Cybersécurité",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      img: Annousment,
      title: "Sensibilisation du grand public",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      img: Adviser,
      title: "Réponse à incident",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      img: Eye,
      title: "Veille d'exposition internet",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      img: Tower,
      title: "Alerte avancée",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
  ];
  return (
    <Box
      ref={ref}
      sx={{
        padding: { md: "0 30px", xs: "0 10px" },
        mt: { md: 20, xs: 10 },
      }}
    >
      <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
        <Typography
          className={inter.className}
          sx={{
            fontWeight: 400,
            fontSize: { md: "70px", xs: "40px", lineHeight: "50px" },
            color: "#222D55",
          }}
        >
          Nos activités majeurs
        </Typography>
      </motion.div>
      <Divider
        variant="middle"
        sx={{
          bgcolor: "#8E9BBF",
          mt: { md: 3, xs: 5 },
          borderBottomWidth: "1px",
        }}
      />
      <Grid container mt={5} columnSpacing={2} rowSpacing={2}>
        {activites?.map((ele, index) => {
          return (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  display: "flex",
                  padding: { lg: 6, md: 3, sm: 3, xs: 2 },
                  backgroundColor: "transparent",
                  border: index % 2 ? "2px solid #7DB1FF" : "2px solid #97E6FF",
                  position: "relative",
                  borderRadius: "20px",
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
                        height: { lg: "160px", sm: "120px", xs: "80px" },
                        width: { lg: "160px", sm: "120px", xs: "80px" },
                      }}
                    >
                      <Img src={ele?.img} height={900} width={900} alt="img" />
                    </Box>
                  </Grid>
                  <Grid item xs={8} sm={7}>
                    <Box ref={ref}>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                      >
                        <Typography
                          className={inter.className}
                          sx={{
                            fontSize: { lg: "36px", md: "30px", xs: "18px" },
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
                          className={inter.className}
                          sx={{
                            mt: 1,
                            fontSize: { lg: "18px", md: "16px", xs: "14px" },
                            fontWeight: 500,
                            lineHeight: { lg: "28px", md: "22px", xs: "20px" },
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
    </Box>
  );
}
