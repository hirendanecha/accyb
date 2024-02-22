"use client";
import React, { useEffect, useRef, useState } from "react";
import Tech from "../../../Icons/Discover/Img1.svg";
import Doctor from "../../../Icons/Discover/Img4.svg";
import Adviser from "../../../Icons/MajorActivity/Adviser.svg";
import Scan from "../../../Icons/Discover/Img3.svg";
import Key from "../../../Icons/Discover/Img5.svg";
import Tower from "../../../Icons/Discover/Img6.svg";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import { useAnimation } from "framer-motion";
import { inter } from "../../../app/fonts/fonts";
const Img = styled(Image)(({ theme }) => ({
  width: "39px !important",
  height: "auto !important",
  [theme.breakpoints.down("lg")]: {
    width: "30px !important",
    height: "auto !important",
  },
}));
export default function OurMission() {
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
  const activites = [
    {
      img: Tech,
      title: "Alertes de sécurité",
    },
    {
      img: Adviser,
      title: "réponses à incident",
    },
    {
      img: Scan,
      title: "Veille exposition à incident",
    },
    {
      img: Doctor,
      title: "Alerte avancée",
    },
  ];
  return (
    <Box>
      <Container disableGutters maxWidth={"xl"}>
        <Box
          ref={ref}
          sx={{
            padding: "0 16px",
            mt: { md: 20, xs: 10 },
          }}
        >
          {/* <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}> */}
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontWeight: 400,
              fontSize: { md: "70px", xs: "40px", lineHeight: "50px" },
              color: "#222D55",
            }}
          >
            Quelles sont nos missions ?
          </Typography>
          {/* </motion.div> */}
          <Divider
            variant="middle"
            sx={{
              bgcolor: "#8E9BBF",
              mt: { md: 3, xs: 5 },
              borderBottomWidth: "1px",
              mb: 10,
            }}
          />
        </Box>
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
                    border: "2px solid #BE0011",
                    borderImageSlice: 1,
                    position: "relative",
                    borderRadius: "20px",
                    overflow: "hidden",
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
                          backgroundColor: "#BE0011",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: { lg: "160px", sm: "120px", xs: "80px" },
                          width: { lg: "160px", sm: "120px", xs: "80px" },
                        }}
                      >
                        {/* <Img src={ele?.img} height={900} width={900} alt="img" /> */}
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
                            fontSize: { lg: "38px", md: "30px", xs: "18px" },
                            fontWeight: 400,
                            lineHeight: { md: "42px", xs: "25px" },
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
