"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { inter } from "../../../../fonts/fonts";

export default function App() {
  return (
    <>
      <Container disableGutters maxWidth={"xl"} sx={{ mt: { md: "125px", sm: "50px", xs: "10px" }, padding: "0 40px" }}>
        <Box
          component={Swiper}
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
          sx={{
            "& .swiper-pagination": {
              display: "flex",
              alignItems: "center",
              position: "absolute",
              // left: { xl: "10% !important", xs: "1% !important" },
              // width: "100% !important",
              width: "1440px !important",
              maxWidth: "100% !important",
              left: { lg: "140% !important", md: "135% !important", xs: "125% !important" },
              transform: "translateX(-50%)",
              bottom: { md: "260px !important", xs: "30px !important" },
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
          // style={{
          //   "--swiper-pagination-color": "#fffff",
          //   "--swiper-pagination-bullet-inactive-color": "#B0B3BE",
          //   "--swiper-pagination-bullet-inactive-opacity": "1",
          //   "--swiper-pagination-bullet-size": "10px",
          //   "--swiper-pagination-bullet-horizontal-gap": "8px",
          // }}
        >
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: "url('/News/Slider1.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: { lg: "contain", md: "cover", xs: "cover" },
                backgroundPosition: "fixed",
                height: { md: "800px", xs: "550px" },
                width: "100%",
              }}
            >
              <Grid container>
                <Grid item xs={12} md={10} padding={{ md: "150px 50px", xs: "150px 10px" }}>
                  <Button
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      textTransform: "uppercase",
                      padding: "15px 40px 15px 40px",
                      fontSize: { md: "14px", xs: "12px" },
                      color: "#FFFFFF",
                      display: "flex",
                      textAlign: "start",
                      borderRadius: "50px",
                      "&:hover": {
                        backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      },
                    }}
                  >
                    événement
                  </Button>
                  <Box
                    mt={1}
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {
                        lg: "70px",
                        md: "60px",
                        sm: "40px",
                        xs: "30px",
                      },
                      flexDirection: "column",
                      textAlign: "start",
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: {
                        md: "75px",
                        sm: "50px",
                        xs: "40px",
                      },
                    }}
                  >
                    24e Panorama <br />
                    de la{" "}
                    <span
                      style={{
                        background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      cybercriminalité
                    </span>{" "}
                  </Box>
                  <Typography
                    sx={{
                      display: "flex",
                      textAlign: "start",
                      fontSize: {
                        lg: "14px",
                        md: "13px",
                        sm: "13px",
                        xs: "12px",
                      },
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: { md: "25px", sm: "22px", xs: "20px" },
                      maxWidth: "550px !important",
                      mt: { md: 3, xs: 1 },
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea.
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      textAlign: "start",
                      fontSize: "12px",
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: { md: "25px", xs: "25px" },
                      maxWidth: "550px !important",
                      mt: 2,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    01.01.2024
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: "url('/News/Slider1.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: { lg: "contain", md: "cover", xs: "cover" },
                backgroundPosition: "fixed",
                height: { md: "800px", xs: "550px" },
                width: "100%",
              }}
            >
              <Grid container>
                <Grid item xs={12} md={10} padding={{ md: "150px 50px", xs: "150px 10px" }}>
                  <Button
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      textTransform: "uppercase",
                      padding: "15px 40px 15px 40px",
                      fontSize: { md: "14px", xs: "12px" },
                      color: "#FFFFFF",
                      display: "flex",
                      textAlign: "start",
                      borderRadius: "50px",
                      "&:hover": {
                        backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      },
                    }}
                  >
                    événement
                  </Button>
                  <Box
                    mt={1}
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {
                        lg: "70px",
                        md: "60px",
                        sm: "40px",
                        xs: "30px",
                      },
                      flexDirection: "column",
                      textAlign: "start",
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: {
                        md: "75px",
                        sm: "50px",
                        xs: "40px",
                      },
                    }}
                  >
                    24e Panorama <br />
                    de la{" "}
                    <span
                      style={{
                        background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      cybercriminalité
                    </span>{" "}
                  </Box>
                  <Typography
                    sx={{
                      display: "flex",
                      textAlign: "start",
                      fontSize: {
                        lg: "14px",
                        md: "13px",
                        sm: "13px",
                        xs: "12px",
                      },
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: { md: "25px", sm: "22px", xs: "20px" },
                      maxWidth: "550px !important",
                      mt: { md: 3, xs: 1 },
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea.
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      textAlign: "start",
                      fontSize: "12px",
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: { md: "25px", xs: "25px" },
                      maxWidth: "550px !important",
                      mt: 2,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    01.01.2024
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                backgroundImage: "url('/News/Slider1.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: { lg: "contain", md: "cover", xs: "cover" },
                backgroundPosition: "fixed",
                height: { md: "800px", xs: "550px" },
                width: "100%",
              }}
            >
              <Grid container>
                <Grid item xs={12} md={10} padding={{ md: "150px 50px", xs: "150px 10px" }}>
                  <Button
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      textTransform: "uppercase",
                      padding: "15px 40px 15px 40px",
                      fontSize: { md: "14px", xs: "12px" },
                      color: "#FFFFFF",
                      display: "flex",
                      textAlign: "start",
                      borderRadius: "50px",
                      "&:hover": {
                        backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      },
                    }}
                  >
                    événement
                  </Button>
                  <Box
                    mt={1}
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {
                        lg: "70px",
                        md: "60px",
                        sm: "40px",
                        xs: "30px",
                      },
                      flexDirection: "column",
                      textAlign: "start",
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: {
                        md: "75px",
                        sm: "50px",
                        xs: "40px",
                      },
                    }}
                  >
                    24e Panorama <br />
                    de la{" "}
                    <span
                      style={{
                        background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      cybercriminalité
                    </span>{" "}
                  </Box>
                  <Typography
                    sx={{
                      display: "flex",
                      textAlign: "start",
                      fontSize: {
                        lg: "14px",
                        md: "13px",
                        sm: "13px",
                        xs: "12px",
                      },
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: { md: "25px", sm: "22px", xs: "20px" },
                      maxWidth: "550px !important",
                      mt: { md: 3, xs: 1 },
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea.
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      textAlign: "start",
                      fontSize: "12px",
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: { md: "25px", xs: "25px" },
                      maxWidth: "550px !important",
                      mt: 2,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    01.01.2024
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
        </Box>
      </Container>
    </>
  );
}
