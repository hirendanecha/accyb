"use client";
import React, { useRef, useState } from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { inter } from "../../../../fonts/fonts";

export default function OurService() {
  return (
    <>
      <Box mt={{ md: 30, xs: 10 }} sx={{ padding: "0 16px" }}>
        <Container disableGutters maxWidth={"xl"}>
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
            }}
          >
            Nos missions
          </Box>
        </Container>

        <Divider
          variant="middle"
          sx={{
            display: { md: "block", xs: "none" },
            bgcolor: "#222D55",
            mt: 2,
            opacity: "20%",
            borderBottomWidth: "1px",
          }}
        />
      </Box>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        style={{ marginTop: 50 }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  background:
                    "linear-gradient(133.47deg, #007A47 -0.34%, rgba(0, 122, 71, 0) 98.52%)",
                  padding: 10,
                  borderRadius: "116px 0px 0px 0px",
                }}
              >
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "38px",
                    fontWeight: 400,
                    lineHeight: "42px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  Observatoire
                </Typography>
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    fontFamily: inter.style.fontFamily,
                    maxWidth: "263px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Rediriger ses bénéficiaires vers des prestataires territoriaux
                  pour la remédiation de l’incident ;
                </Typography>
              </Box>
            </Grid>
            <Grid item md={1.5}></Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  background:
                    "linear-gradient(133.47deg, #007A47 -0.34%, rgba(0, 122, 71, 0) 98.52%)",
                  padding: 10,
                  borderRadius: "116px 0px 0px 0px",
                }}
              >
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "38px",
                    fontWeight: 400,
                    lineHeight: "42px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  Observatoire
                </Typography>
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    fontFamily: inter.style.fontFamily,
                    maxWidth: "263px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Rediriger ses bénéficiaires vers des prestataires territoriaux
                  pour la remédiation de l’incident ;
                </Typography>
              </Box>
            </Grid>
            <Grid item md={1.5}></Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  background:
                    "linear-gradient(133.47deg, #007A47 -0.34%, rgba(0, 122, 71, 0) 98.52%)",
                  padding: 10,
                  borderRadius: "116px 0px 0px 0px",
                }}
              >
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "38px",
                    fontWeight: 400,
                    lineHeight: "42px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  Observatoire
                </Typography>
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Rediriger ses bénéficiaires vers des prestataires territoriaux
                  pour la remédiation de l’incident ;
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  background:
                    "linear-gradient(133.47deg, #007A47 -0.34%, rgba(0, 122, 71, 0) 98.52%)",
                  padding: 10,
                  borderRadius: "116px 0px 0px 0px",
                }}
              >
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "38px",
                    fontWeight: 400,
                    lineHeight: "42px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  Observatoire
                </Typography>
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    fontFamily: inter.style.fontFamily,
                    maxWidth: "263px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Rediriger ses bénéficiaires vers des prestataires territoriaux
                  pour la remédiation de l’incident ;
                </Typography>
              </Box>
            </Grid>
            <Grid item md={1.5}></Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  background:
                    "linear-gradient(133.47deg, #007A47 -0.34%, rgba(0, 122, 71, 0) 98.52%)",
                  padding: 10,
                  borderRadius: "116px 0px 0px 0px",
                }}
              >
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "38px",
                    fontWeight: 400,
                    lineHeight: "42px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  Observatoire
                </Typography>
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    fontFamily: inter.style.fontFamily,
                    maxWidth: "263px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Rediriger ses bénéficiaires vers des prestataires territoriaux
                  pour la remédiation de l’incident ;
                </Typography>
              </Box>
            </Grid>
            <Grid item md={1.5}></Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  background:
                    "linear-gradient(133.47deg, #007A47 -0.34%, rgba(0, 122, 71, 0) 98.52%)",
                  padding: 10,
                  borderRadius: "116px 0px 0px 0px",
                }}
              >
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "38px",
                    fontWeight: 400,
                    lineHeight: "42px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  Observatoire
                </Typography>
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Rediriger ses bénéficiaires vers des prestataires territoriaux
                  pour la remédiation de l’incident ;
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  background:
                    "linear-gradient(133.47deg, #007A47 -0.34%, rgba(0, 122, 71, 0) 98.52%)",
                  padding: 10,
                  borderRadius: "116px 0px 0px 0px",
                }}
              >
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "38px",
                    fontWeight: 400,
                    lineHeight: "42px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  Observatoire
                </Typography>
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    fontFamily: inter.style.fontFamily,
                    maxWidth: "263px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Rediriger ses bénéficiaires vers des prestataires territoriaux
                  pour la remédiation de l’incident ;
                </Typography>
              </Box>
            </Grid>
            <Grid item md={1.5}></Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  background:
                    "linear-gradient(133.47deg, #007A47 -0.34%, rgba(0, 122, 71, 0) 98.52%)",
                  padding: 10,
                  borderRadius: "116px 0px 0px 0px",
                }}
              >
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "38px",
                    fontWeight: 400,
                    lineHeight: "42px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  Observatoire
                </Typography>
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    fontFamily: inter.style.fontFamily,
                    maxWidth: "263px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Rediriger ses bénéficiaires vers des prestataires territoriaux
                  pour la remédiation de l’incident ;
                </Typography>
              </Box>
            </Grid>
            <Grid item md={1.5}></Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  background:
                    "linear-gradient(133.47deg, #007A47 -0.34%, rgba(0, 122, 71, 0) 98.52%)",
                  padding: 10,
                  borderRadius: "116px 0px 0px 0px",
                }}
              >
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "38px",
                    fontWeight: 400,
                    lineHeight: "42px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  Observatoire
                </Typography>
                <Typography
                  sx={{
                    color: "#222D55",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Rediriger ses bénéficiaires vers des prestataires territoriaux
                  pour la remédiation de l’incident ;
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
