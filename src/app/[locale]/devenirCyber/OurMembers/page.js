"use client";
import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Sliderimg from "../../../../Icons/Sliderimg.svg";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Img = styled(Image)(({ theme }) => ({
  width: "258px !important",
  height: "122px !important",
  [theme.breakpoints.down("md")]: {
    width: "200px !important",
    height: "auto !important",
  },
}));

export default function OurMembers() {
  return (
    <Box>
      <Container disableGutters maxWidth={"xl"}>
        <Box
          sx={{
            padding: "0 16px",
            mt: { md: 20, xs: 5 },
            display: "flex !important",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              textAlign: "center",
              fontSize: { lg: "55px", md: "45px", xs: "25px" },
              lineHeight: { lg: "60px", md: "50px", xs: "32px" },
              color: "#222D55",
            }}
          >
            Cotisation transparente
          </Typography>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              textAlign: "center",
              fontSize: { lg: "22px", md: "18px", xs: "14px" },
              color: "#222D55",
              mt: 2,
            }}
          >
            Cout en fonction de la taille
          </Typography>
        </Box>
        <Box sx={{ mt: { md: 20, xs: 0 }, mb: 10 }}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              textAlign: "center",
              fontSize: { lg: "55px", md: "45px", xs: "25px" },
              lineHeight: { lg: "60px", md: "50px", xs: "32px" },
              color: "#222D55",
            }}
          >
            Nos membres
          </Typography>
        </Box>
      </Container>
      <Swiper
        className="mySwiper"
        slidesPerView={6.2}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4.5,
          },
          1440: {
            slidesPerView: 6.2,
          },
          1920: {
            slidesPerView: 6.2,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Img src={Sliderimg} alt="Logo" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Img src={Sliderimg} alt="Logo" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Img src={Sliderimg} alt="Logo" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Img src={Sliderimg} alt="Logo" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Img src={Sliderimg} alt="Logo" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Img src={Sliderimg} alt="Logo" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Img src={Sliderimg} alt="Logo" />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
