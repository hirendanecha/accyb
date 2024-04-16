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
import Image1 from "../../../../Icons/Image1.png";

import Logo1 from "../../../../Icons/Partners/Logo1.svg";
import Logo2 from "../../../../Icons/Partners/Logo2.svg";
import Logo3 from "../../../../Icons/Partners/Logo3.svg";
import Logo4 from "../../../../Icons/Partners/Logo4.svg";
import Logo5 from "../../../../Icons/Supported/Logo1.svg";
import Logo6 from "../../../../Icons/Supported/Logo2.svg";
import Logo7 from "../../../../Icons/Supported/Logo3.svg";
import Logo8 from "../../../../Icons/Supported/Logo4.svg";
import Logo9 from "../../../../Icons/Supported/Logo1.jpg";

const Imgs = styled(Image)(({ theme }) => ({
  width: "110px !important",
  height: "97px !important",
}));

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { inter } from "../../../../fonts/fonts";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const partners = [
  {
    img: Logo1,
  },
  {
    img: Logo2,
  },
  {
    img: Logo3,
  },
  {
    img: Logo4,
  },
];
const supported = [
  {
    img: Logo7,
  },
  {
    img: Logo8,
  },
  {
    img: Logo9,
  },
  {
    img: Logo5,
  },
  {
    img: Logo6,
  },
];

const data = [
  {
    img: Image1,
    title: "ACTUALITÉ",
    heading: "Calendrier de l’Avent Cyber 2023",
    description: "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
    time: "13.01.2024",
  },
  {
    img: Image1,
    title: "ACTUALITÉ",
    heading: "Calendrier de l’Avent Cyber 2023",
    description: "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
    time: "13.01.2024",
  },
  {
    img: Image1,
    title: "ACTUALITÉ",
    heading: "Calendrier de l’Avent Cyber 2023",
    description: "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
    time: "13.01.2024",
  },
];
const Img = styled(Image)(({ theme }) => ({
  width: "100% !important",
  height: "auto !important",
}));
export default function CaseStudies() {
  const locales = useLocale();
  const router = useRouter();
  return (
    <>
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
          <Box sx={{ padding: { md: "0 20px 0 20px", xs: "0 20px 0 20px" } }}>
            <Grid
              container
              columnSpacing={2}
              mt={5}
              rowSpacing={6}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    justifyContent: "start",
                    display: "flex",
                    color: "#FFFFFF",
                  }}
                >
                  Nos projets
                </Typography>
                <Typography
                  variant="h2"
                  color="#007A47"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "start",
                    textAlign: "start",
                    mt: 3,
                    color: "#FFFFFF",
                    fontSize: { lg: "64px", md: "50px", xs: "40px" },
                  }}
                >
                  Études de cas
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
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
                        backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
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
                        backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
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
              slidesPerView={1}
              spaceBetween={24}
              navigation={{
                nextEl: ".swiper-button-next-testimonials",
                prevEl: ".swiper-button-prev-testimonials",
                enabled: true,
              }}
              breakpoints={{
                600: { slidesPerView: 2 },
                1200: { slidesPerView: 2 },
                1000: { slidesPerView: 2 },
                1440: { slidesPerView: 1 },
                1500: { slidesPerView: 2 },
                1600: { slidesPerView: 2 },
              }}
              mt={6}
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
                <Grid container>
                  <Grid item xs={12} md={11}>
                    <Box
                      onClick={() => router.push(`/${locales}/study`)}
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                        gap: 3,
                        flexDirection: { lg: "row", md: "column", xs: "column" },
                      }}
                    >
                      <Box>
                        <Image src={Image1} width={295} height={220} alt="image1" />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: "16px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                            width: "max-content",
                            padding: 1,
                            fontSize: "12px",
                            mb: 1,
                            padding: "8px 15px 8px 15px",
                            cursor: "pointer",
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                          }}
                        >
                          tag
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontFamily: inter.style.fontFamily,
                            fontSize: "18px",
                            maxWidth: { lg: "230px", md: "100%" },
                            color: "#FFFFFF",
                          }}
                        >
                          Calendrier de l’Avent Cyber 2023
                        </Typography>
                        <Typography
                          mt={1}
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            color: "#FFFFFF",
                            fontSize: "14px",
                            maxWidth: "350px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore ...
                        </Typography>
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              mt: 1,
                            }}
                          >
                            <Box>
                              <Typography
                                sx={{
                                  fontFamily: inter.style.fontFamily,
                                  fontSize: 14,
                                  fontWeight: 600,
                                  color: "#FFFFFF",
                                }}
                              >
                                13.01.2024
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid container>
                  <Grid item xs={12} md={11}>
                    <Box
                      onClick={() => router.push(`/${locales}/study`)}
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                        gap: 3,
                        flexDirection: { lg: "row", md: "column", xs: "column" },
                      }}
                    >
                      <Box>
                        <Image src={Image1} width={295} height={220} alt="image1" />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: "16px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                            width: "max-content",
                            padding: 1,
                            fontSize: "12px",
                            mb: 1,
                            padding: "8px 15px 8px 15px",
                            cursor: "pointer",
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                          }}
                        >
                          tag
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontFamily: inter.style.fontFamily,
                            fontSize: "18px",
                            maxWidth: { lg: "230px", md: "100%" },
                            color: "#FFFFFF",
                          }}
                        >
                          Calendrier de l’Avent Cyber 2023
                        </Typography>
                        <Typography
                          mt={1}
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            color: "#FFFFFF",
                            fontSize: "14px",
                            maxWidth: "350px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore ...
                        </Typography>
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              mt: 1,
                            }}
                          >
                            <Box>
                              <Typography
                                sx={{
                                  fontFamily: inter.style.fontFamily,
                                  fontSize: 14,
                                  fontWeight: 600,
                                  color: "#FFFFFF",
                                }}
                              >
                                13.01.2024
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid container>
                  <Grid item xs={12} md={11}>
                    <Box
                      onClick={() => router.push(`/${locales}/study`)}
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                        gap: 3,
                        flexDirection: { lg: "row", md: "column", xs: "column" },
                      }}
                    >
                      <Box>
                        <Image src={Image1} width={295} height={220} alt="image1" />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: "16px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                            width: "max-content",
                            padding: 1,
                            fontSize: "12px",
                            mb: 1,
                            padding: "8px 15px 8px 15px",
                            cursor: "pointer",
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                          }}
                        >
                          tag
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontFamily: inter.style.fontFamily,
                            fontSize: "18px",
                            maxWidth: { lg: "230px", md: "100%" },
                            color: "#FFFFFF",
                          }}
                        >
                          Calendrier de l’Avent Cyber 2023
                        </Typography>
                        <Typography
                          mt={1}
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            color: "#FFFFFF",
                            fontSize: "14px",
                            maxWidth: "350px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore ...
                        </Typography>
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              mt: 1,
                            }}
                          >
                            <Box>
                              <Typography
                                sx={{
                                  fontFamily: inter.style.fontFamily,
                                  fontSize: 14,
                                  fontWeight: 600,
                                  color: "#FFFFFF",
                                }}
                              >
                                13.01.2024
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid container>
                  <Grid item xs={12} md={11}>
                    <Box
                      onClick={() => router.push(`/${locales}/study`)}
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                        gap: 3,
                        flexDirection: { lg: "row", md: "column", xs: "column" },
                      }}
                    >
                      <Box>
                        <Image src={Image1} width={295} height={220} alt="image1" />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: "16px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                            width: "max-content",
                            padding: 1,
                            fontSize: "12px",
                            mb: 1,
                            padding: "8px 15px 8px 15px",
                            cursor: "pointer",
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                          }}
                        >
                          tag
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontFamily: inter.style.fontFamily,
                            fontSize: "18px",
                            maxWidth: { lg: "230px", md: "100%" },
                            color: "#FFFFFF",
                          }}
                        >
                          Calendrier de l’Avent Cyber 2023
                        </Typography>
                        <Typography
                          mt={1}
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            color: "#FFFFFF",
                            fontSize: "14px",
                            maxWidth: "350px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore ...
                        </Typography>
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              mt: 1,
                            }}
                          >
                            <Box>
                              <Typography
                                sx={{
                                  fontFamily: inter.style.fontFamily,
                                  fontSize: 14,
                                  fontWeight: 600,
                                  color: "#FFFFFF",
                                }}
                              >
                                13.01.2024
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, pb: 8 }}>
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
                    backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
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
                    backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
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
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          mt: { md: 10, xs: 2 },
          display: "flex",
          overflowX: "scroll",
          gap: 1,
          justifyContent: { md: "space-around", xs: "unset" },
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            gap: { md: 1, xs: 1 },
            flexWrap: "nowrap",
          }}
        >
          <Typography
            sx={{
              color: "#222D55",
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "14px", xs: "12px" },
              maxWidth: "100px",
              textAlign: "end",
              mr: 1,
            }}
          >
            Partenaires majeurs
          </Typography>
          <Divider orientation="vertical" variant="middle" sx={{ bgcolor: "#000000", height: "90px" }} />
          {partners?.map((ele, idx) => {
            return (
              <Box
                key={idx}
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: { md: "start", xs: "center" },
                  mb: 2,
                  mr: { md: 2, xs: 0 },
                }}
              >
                <Img src={ele.img} width={900} height={900} alt="img" />
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            gap: 1,
            flexWrap: "nowrap",
          }}
        >
          <Typography
            sx={{
              color: "#222D55",
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "14px", xs: "12px" },
              maxWidth: "100px",
              textAlign: "end",
              mr: 1,
            }}
          >
            Avec le soutien de
          </Typography>
          <Divider orientation="vertical" variant="middle" sx={{ bgcolor: "#000000", height: "90px" }} />
          {supported?.map((ele, idx) => {
            return (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { md: "start", xs: "center" },
                  mb: 2,
                  mr: { md: 2, xs: 0 },
                }}
              >
                <Imgs src={ele.img} width={1200} height={1200} alt="img" />
              </Box>
            );
          })}
        </Box>
      </Container>
    </>
  );
}
