"use client";
import React, { useEffect, useRef, useState } from "react";
import Photo1 from "../../../../Icons/Discover/Photo1.svg";
import Photo2 from "../../../../Icons/Discover/Photo2.svg";
import Photo3 from "../../../../Icons/Discover/Photo3.svg";
import Photo4 from "../../../../Icons/Discover/Photo4.svg";
import Photo5 from "../../../../Icons/Discover/Photo5.svg";
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
import { inter } from "../../../../fonts/fonts";
const Img = styled(Image)(({ theme }) => ({
  width: "63px !important",
  height: "auto !important",
  [theme.breakpoints.down("lg")]: {
    width: "40px !important",
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
      img: Photo1,
      title: "Panorama de la maturité Cyber",
    },
    {
      img: Photo2,
      title: "Panorama de la e-confiance",
    },
    {
      img: Photo3,
      title: "Panorama de la formation",
    },
    {
      img: Photo4,
      title: "Météo de la menace",
    },
    {
      img: Photo5,
      title: "Cartographie de l’incidentologie",
    },
  ];
  return (
    <Box sx={{ position: "relative" }}>
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
              fontFamily: inter.style.fontFamily,
              color: "#222D55",
            }}
          >
            Nos services
          </Typography>
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
            Découvrir{" "}
            <span
              style={{
                color: "#7DB1FF",
              }}
            >
              les services
            </span>{" "}
            de l’ACCYB
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
          right: 0,
          top: 0,
          display: { md: "block", xs: "none" },
        }}
      >
        <svg
          width="512"
          height="955"
          viewBox="0 0 512 955"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1" filter="url(#filter0_f_1856_3893)">
            <ellipse
              cx="477.5"
              cy="477.5"
              rx="317.5"
              ry="317.5"
              transform="rotate(-180 477.5 477.5)"
              fill="#3964FF"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1856_3893"
              x="0"
              y="0"
              width="955"
              height="955"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="80"
                result="effect1_foregroundBlur_1856_3893"
              />
            </filter>
          </defs>
        </svg>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 100,
          display: { md: "block", xs: "none" },
        }}
      >
        <svg
          width="434"
          height="955"
          viewBox="0 0 434 955"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="80"
                result="effect1_foregroundBlur_1856_3894"
              />
            </filter>
          </defs>
        </svg>
      </Box>

      <Container disableGutters maxWidth={"xl"}>
        <Grid
          container
          mt={5}
          columnSpacing={2}
          rowSpacing={2}
          sx={{ padding: "0 16px" }}
        >
          {activites?.map((ele, index) => {
            return (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    padding: { lg: 6, md: 3, sm: 3, xs: 2 },
                    backgroundColor: "transparent",
                    border: "2px solid",
                    borderImageSource:
                      "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
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
                          backgroundColor: "#222D55",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid #7DB1FF",
                          height: { lg: "119.55px", sm: "100px", xs: "80px" },
                          width: { lg: "119.55px", sm: "100px", xs: "80px" },
                        }}
                      >
                        <Img
                          src={ele?.img}
                          height={900}
                          width={900}
                          alt="img"
                        />
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
