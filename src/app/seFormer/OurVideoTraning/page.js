"use client";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import VideoTraning from "../../../Icons/VideoTraning.svg";
import ShareIcon from "@mui/icons-material/Share";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { inter } from "../../../app/fonts/fonts";
import Image from "next/image";
// const data = [
//   {
//     img: Image1,
//     title: "ACTUALITÉ",
//     heading: "Calendrier de l’Avent Cyber 2023",
//     description:
//       "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
//     time: "13.01.2024",
//   },
//   {
//     img: Image1,
//     title: "ACTUALITÉ",
//     heading: "Calendrier de l’Avent Cyber 2023",
//     description:
//       "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
//     time: "13.01.2024",
//   },
//   {
//     img: Image1,
//     title: "ACTUALITÉ",
//     heading: "Calendrier de l’Avent Cyber 2023",
//     description:
//       "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
//     time: "13.01.2024",
//   },
// ];
const Img = styled(Image)(({ theme }) => ({
  width: "100% !important",
  height: "auto !important",
}));
export default function CaseStudies() {
  return (
    <Box
      sx={{
        backgroundColor: "#222D55",
        position: "relative",
        borderRadius: "20px 20px 0 0",
        overflow: "hidden",
        mt: 20,
      }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50px",
            height: "50px",
            bgcolor: "#ffffff",
            borderBottomLeftRadius: "1rem",
            zIndex: 5,
            "::before": {
              content: "''",
              position: "absolute",
              width: "20px",
              height: "20px",
              top: "10px",
              left: "-10px",
              transform: "translateX(-100%)",
              boxShadow: "5px -5px 0 5px #222D55",
              borderTopRightRadius: "0.75rem",
            },
            "::after": {
              content: "''",
              position: "absolute",
              width: "20px",
              height: "20px",
              bottom: "-10px",
              right: "10px",
              transform: "translateY(100%)",
              boxShadow: "5px -5px 0 5px #222D55",
              borderTopRightRadius: "0.75rem",
            },
          }}
        ></Box>
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
        <Box>
          <Grid
            container
            columnSpacing={2}
            mt={5}
            rowSpacing={6}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: { md: "0 20px 0 20px", xs: "0 20px 0 20px" },
            }}
          >
            <Grid item xs={12} md={8}>
              <Typography
                className={inter.className}
                sx={{
                  justifyContent: "start",
                  display: "flex",
                  fontSize: { lg: "75px", md: "65px", sm: "40px", xs: "30px" },
                  color: "#FFFFFF",
                }}
              >
                Nos formations vidéos
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", justifyContent: "end", gap: 1 }}>
                <Box
                  sx={{
                    display: { md: "flex", xs: "none" },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    className="swiper-button-prev-testimonials"
                    aria-label="Next Slide"
                    title="Next Slide"
                    sx={{
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: 45,
                      height: 45,
                    }}
                  >
                    <ArrowBackIcon sx={{ color: "#FFFFFF" }} />
                  </IconButton>
                </Box>
                <Box
                  className="swiper-button-next-testimonials"
                  sx={{
                    display: { md: "flex", xs: "none" },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    aria-label="Next Slide"
                    title="Next Slide"
                    sx={{
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: 45,
                      height: 45,
                    }}
                  >
                    <ArrowForwardIcon sx={{ color: "#FFFFFF" }} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            component={Swiper}
            keyboard={true}
            // pagination={{ clickable: true }}
            modules={[Navigation, Keyboard, Pagination]}
            slidesPerView={3.5}
            spaceBetween={150}
            navigation={{
              nextEl: ".swiper-button-next-testimonials",
              prevEl: ".swiper-button-prev-testimonials",
              enabled: true,
            }}
            breakpoints={{
              300: { slidesPerView: 1 },
              400: { slidesPerView: 1.2 },
              600: { slidesPerView: 1.6 },
              800: { slidesPerView: 2.1 },
              1000: { slidesPerView: 2.5 },
              1200: { slidesPerView: 2.9 },
              1260: { slidesPerView: 3.1 },
              1400: { slidesPerView: 3.5 },
              1440: { slidesPerView: 3.5 },
              1920: { slidesPerView: 3.5 },
            }}
            mt={{ md: 6, xs: 0 }}
            sx={{
              "& .swiper-pagination": {
                position: "static",
                mt: { md: 16, xs: 5 },
              },
              "& .swiper-pagination-bullet": {
                bgcolor: "#5314A9",
                width: 4,
                height: 4,
                mx: "0.5rem !important",
              },
            }}
          >
            <SwiperSlide>
              <Box sx={{ padding: { md: "0 0 0 20px", xs: "0 0 0 10px" } }}>
                <Box>
                  <Image
                    src={VideoTraning}
                    width={423}
                    height={233}
                    alt="video-traning"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: 1.5,
                  }}
                >
                  <Typography
                    className={inter.className}
                    sx={{
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: "max-content",
                      fontSize: "12px",
                      mb: 1,
                      padding: "10px 20px 10px 20px",
                      cursor: "pointer",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                    }}
                  >
                    tag
                  </Typography>
                  <Typography sx={{ fontSize: "18px", color: "#FFFFFF" }}>
                    Calendrier de l’Avent Cyber 2023
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ padding: { md: "0 0 0 20px", xs: "0 0 0 10px" } }}>
                <Box>
                  <Image
                    src={VideoTraning}
                    width={423}
                    height={233}
                    alt="video-traning"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: 1.5,
                  }}
                >
                  <Typography
                    className={inter.className}
                    sx={{
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: "max-content",
                      fontSize: "12px",
                      mb: 1,
                      padding: "10px 20px 10px 20px",
                      cursor: "pointer",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                    }}
                  >
                    tag
                  </Typography>
                  <Typography sx={{ fontSize: "18px", color: "#FFFFFF" }}>
                    Calendrier de l’Avent Cyber 2023
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ padding: { md: "0 0 0 20px", xs: "0 0 0 10px" } }}>
                <Box>
                  <Image
                    src={VideoTraning}
                    width={423}
                    height={233}
                    alt="video-traning"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: 1.5,
                  }}
                >
                  <Typography
                    className={inter.className}
                    sx={{
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: "max-content",
                      fontSize: "12px",
                      mb: 1,
                      padding: "10px 20px 10px 20px",
                      cursor: "pointer",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                    }}
                  >
                    tag
                  </Typography>
                  <Typography sx={{ fontSize: "18px", color: "#FFFFFF" }}>
                    Calendrier de l’Avent Cyber 2023
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ padding: { md: "0 0 0 20px", xs: "0 0 0 10px" } }}>
                <Box>
                  <Image
                    src={VideoTraning}
                    width={423}
                    height={233}
                    alt="video-traning"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: 1.5,
                  }}
                >
                  <Typography
                    className={inter.className}
                    sx={{
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: "max-content",
                      fontSize: "12px",
                      mb: 1,
                      padding: "10px 20px 10px 20px",
                      cursor: "pointer",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                    }}
                  >
                    tag
                  </Typography>
                  <Typography sx={{ fontSize: "18px", color: "#FFFFFF" }}>
                    Calendrier de l’Avent Cyber 2023
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ padding: { md: "0 0 0 20px", xs: "0 0 0 10px" } }}>
                <Box>
                  <Image
                    src={VideoTraning}
                    width={423}
                    height={233}
                    alt="video-traning"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: 1.5,
                  }}
                >
                  <Typography
                    className={inter.className}
                    sx={{
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      width: "max-content",
                      fontSize: "12px",
                      mb: 1,
                      padding: "10px 20px 10px 20px",
                      cursor: "pointer",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                    }}
                  >
                    tag
                  </Typography>
                  <Typography sx={{ fontSize: "18px", color: "#FFFFFF" }}>
                    Calendrier de l’Avent Cyber 2023
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              pb: 8,
              mt: 5,
            }}
          >
            <Box
              sx={{
                display: { md: "none", xs: "block" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                className="swiper-button-prev-testimonials"
                aria-label="Next Slide"
                title="Next Slide"
                sx={{
                  backgroundImage:
                    "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                  width: 45,
                  height: 45,
                }}
              >
                <ArrowBackIcon sx={{ color: "#FFFFFF" }} />
              </IconButton>
            </Box>
            <Box
              className="swiper-button-next-testimonials"
              sx={{
                display: { md: "none", xs: "block" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                aria-label="Next Slide"
                title="Next Slide"
                sx={{
                  backgroundImage:
                    "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                  width: 45,
                  height: 45,
                }}
              >
                <ArrowForwardIcon sx={{ color: "#FFFFFF" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
