"use client";
import React, { useEffect, useRef, useState } from "react";
import Image1 from "../../../../Icons/Discover/Image1.svg";
import Image2 from "../../../../Icons/Discover/Image2.svg";
import Image3 from "../../../../Icons/Discover/Image3.svg";
import Image4 from "../../../../Icons/Discover/Image4.svg";
import Image5 from "../../../../Icons/Discover/Image5.svg";
import Image6 from "../../../../Icons/Discover/Image6.svg";
import Image7 from "../../../../Icons/Discover/Image7.svg";
import Image8 from "../../../../Icons/Discover/Image8.svg";
import { Box, Container, Divider, Grid, Typography, styled } from "@mui/material";
import Image from "next/image";
import { useAnimation } from "framer-motion";
import { inter } from "../../../../fonts/fonts";
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
      img: Image1,
      title: "Diagnostic cybersécurité",
    },
    {
      img: Image5,
      title: "Consultation stratégique",
    },
    {
      img: Image2,
      title: "Sensibilisation des adhérents et du grand public",
    },
    {
      img: Image6,
      title: "Suivi de maturité Cyber",
    },
    {
      img: Image3,
      title: "Ambassadeur cyber",
    },
    {
      img: Image4,
      title: "Documentation de référence",
    },
    // {
    //   img: Image7,
    //   title: "Sensibilisation des adhérents",
    // },
    // {
    //   img: Image8,
    //   title: "Exercice de cyber-crise",
    // },
  ];
  return (
    <Box sx={{ position: "relative" }} id="services" pb={15}>
      <Container disableGutters maxWidth={"xl"}>
        <Box
          ref={ref}
          sx={{
            mt: { md: 20, xs: 10 },
            padding: "0 16px",
          }}
        >
          {/* <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}> */}
          <Typography
            sx={{
              fontWeight: 400,
              mt: { md: 4, xs: 2 },
              fontSize: { md: "70px", xs: "40px", lineHeight: "50px" },
              color: "#222D55",
              fontFamily: inter.style.fontFamily,
            }}
          >
            Nos services
          </Typography>
          {/* </motion.div> */}
        </Box>
      </Container>

      <Divider
        variant="middle"
        sx={{
          bgcolor: "#222D55",
          mt: { md: 3, xs: 5 },
          opacity: "20%",
          borderBottomWidth: "1px",
          mb: { md: 10, xs: 4 },
        }}
      />
      {/* <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          display: { md: "block", xs: "none" },
        }}
      >
        <svg width="465" height="955" viewBox="0 0 465 955" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.1" filter="url(#filter0_f_1856_4411)">
            <ellipse cx="477.5" cy="477.5" rx="317.5" ry="317.5" transform="rotate(-180 477.5 477.5)" fill="#61F4C0" />
          </g>
          <defs>
            <filter
              id="filter0_f_1856_4411"
              x="0"
              y="0"
              width="955"
              height="955"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_1856_4411" />
            </filter>
          </defs>
        </svg>
      </Box> */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 100,
          display: { md: "block", xs: "none" },
        }}
      >
        <svg width="494" height="955" viewBox="0 0 494 955" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.1" filter="url(#filter0_f_1856_4412)">
            <path
              d="M-301 477.5C-301 302.15 -158.85 160 16.5 160C191.85 160 334 302.15 334 477.5C334 652.85 191.85 795 16.5 795C-158.85 795 -301 652.85 -301 477.5Z"
              fill="#61F4C0"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1856_4412"
              x="-461"
              y="0"
              width="955"
              height="955"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_1856_4412" />
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
                      background: "linear-gradient(46.93deg, #228A2C -9.61%, #2FD7B9 78.14%)",
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
                        border: "2px solid #2FD7B9",
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
                        border: "2px solid #2FD7B9",
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
                        border: "2px solid #2FD7B9",
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
                      gap: { lg: 3, md: 2, sm: 3, xs: 3 },
                    }}
                  >
                    <Grid item xs={3} sm={4}>
                      <Box
                        sx={{
                          borderRadius: "50%",
                          backgroundColor: "#007A47",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid #8E9BBF",
                          height: { lg: "119.82px", sm: "100px", xs: "80px" },
                          width: { lg: "119.82px", sm: "100px", xs: "80px" },
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
                            fontSize: { lg: "25px", md: "20px", xs: "18px" },
                            fontWeight: 400,
                            lineHeight: { md: "27px", xs: "22px" },
                            fontFamily: inter.style.fontFamily,
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
