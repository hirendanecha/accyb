import { Box, Grid, Rating, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import Personnes from "@/Icons/personnes.svg";
import Calque from "@/Icons/Calque.svg";
import Light from "@/Icons/Light.svg";
import Key from "@/Icons/Key.svg";
import Dna from "@/Icons/Dna.svg";
import Bell from "@/Icons/Bell.svg";

const Img = styled(Image)(({ theme }) => ({
  width: "34px !important",
  height: "auto !important",
}));

export default function InfoSlider() {
  const infoslider = [
    {
      img: Personnes,
      title: "175",
      description: "personnes sensibilisées",
    },
    {
      img: Calque,
      title: "73",
      description: "Ambassadeurs embarqués",
    },
    {
      img: Light,
      title: "32",
      description: "Alertes diffusées",
    },
    {
      img: Key,
      title: "96",
      description: "Diagnostics cyber réalisés",
    },
    {
      img: Dna,
      title: "85",
      description: "Bénéficiaires embarqués",
    },
    {
      img: Bell,
      title: "59",
      description: "Vulnérabilités détectées",
    },
  ];
  return (
    <>
      <Box
        component={Swiper}
        slidesPerView={4}
        spaceBetween={20}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
      >
        <Grid container pb={10}>
          {infoslider?.map((ele) => {
            return (
              <>
                <SwiperSlide>
                  <Grid item md={3} xs={6}>
                    <Box
                      sx={{
                        display: "flex",
                        padding: 3,
                        gap: 3,
                        position: "relative",
                        backgroundColor: "#222D55",
                        // Other styles...
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "3px",
                          background:
                            "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          height: "98px",
                          width: "98px",
                          borderRadius: "50%",
                          backgroundColor: "#1B2341",
                          padding: 4,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid #8E9BBF",
                        }}
                      >
                        <Img src={ele?.img} height={900} width={900} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "50px",
                            fontWeight: 600,
                            color: "#FFFFFF",
                            display: "flex",
                            textAlign: "start",
                          }}
                        >
                          {ele?.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            fontWeight: 500,
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                            display: "flex",
                            textAlign: "start",
                          }}
                        >
                          {ele?.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </SwiperSlide>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
