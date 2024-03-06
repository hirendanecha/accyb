"use client";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { inter } from "../../../../fonts/fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import AddIcon from "@mui/icons-material/Add";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

export default function OurPartners() {
  const data = [
    {
      count: "01",
      key: 1,
      item: ["particulier", "TPE", "Association locale"],
    },
    {
      count: "02",
      key: 2,
      item: [
        "Organismes publics nationaux",
        "opérateurs d’importance vitale (OIV)",
        "opérateurs de services essentiels (OSE)",
      ],
    },
    {
      count: "03",
      key: 3,
      item: [
        "PME",
        "ETI",
        "Collectivité locale",
        "Etablissement public",
        "Association régionale et nationale",
      ],
    },
  ];
  const [id, setId] = useState([1]);
  const handleBackgroundChange = (key) => {
    if (id.includes(key + 1)) {
      const dat = id.filter((el) => el !== key + 1);
      setId(dat);
    } else {
      setId([...id, key + 1]);
    }
  };

  return (
    <Box sx={{ padding: "0 16px" }}>
      <Box mt={15}>
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            display: "flex",
            justifyContent: "center",
            fontWeight: 400,
            textAlign: "center",
            lineHeight: "40px",
            color: "#222D55",
            fontSize: { lg: "75px", md: "65px", xs: "35px" },
          }}
        >
          Vos interlocuteurs privilégiés
        </Typography>
      </Box>
      <Grid container mt={10} sx={{ display: { md: "flex", xs: "none" } }}>
        <Grid
          item
          md={2.5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#222D55",
              fontSize: "24px",
              fontWeight: 500,
            }}
          >
            Vous êtes...
          </Typography>
        </Grid>
        <Grid item md={9.5}>
          <Box
            component={Swiper}
            slidesPerView={3}
            // spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            sx={{
              maxWidth: { md: "unset", xs: "1440px !important" },
            }}
          >
            {data?.map((ele, idxx) => {
              const match = id.includes(ele?.key);
              return (
                <>
                  <SwiperSlide
                    key={idxx}
                    style={{
                      backgroundImage: match
                        ? "url('/Images/Slider/Slider1.png')"
                        : "",
                      backgroundColor: !match ? "#222D55" : "",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "750px",
                      width: "100%",
                      borderRight: "1px solid rgba(217, 217, 217, 0.2)",
                    }}
                  >
                    <Box
                      sx={{
                        padding: 5,
                        display: "flex",
                        justifyContent: "space-between",
                        height: "100%",
                        flexDirection: "column",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            display: "flex",
                            justifyContent: "center",
                            fontSize: { lg: "22px", md: "18px" },
                            color: "#FFFFFF",
                          }}
                        >
                          {ele?.count}
                        </Typography>
                      </Box>
                      <Box sx={{ height: "400px", pt: 10 }}>
                        {ele?.item?.map((el, idx) => {
                          return (
                            <Box key={`${idx}${idx}`}>
                              <Typography
                                sx={{
                                  fontFamily: inter.style.fontFamily,
                                  background: match
                                    ? "#FFFFFF"
                                    : "-webkit-linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                                  WebkitBackgroundClip: "text",
                                  backgroundClip: "text",
                                  color: "transparent",
                                  fontSize: { lg: "22px", md: "14px" },
                                  mt: 1,
                                  maxWidth: { lg: "300px", md: "100%" },
                                  textTransform: "uppercase",
                                  fontWeight: 600,
                                }}
                              >
                                {el}
                              </Typography>
                              <Divider
                                variant="middle"
                                sx={{
                                  bgcolor: "#FFFFFF",
                                  mt: 1,
                                  opacity: "20%",
                                  borderBottomWidth: "1px",
                                  marginLeft: "0px !important",
                                  marginRight: "0px !important",
                                }}
                              />
                            </Box>
                          );
                        })}
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <AddIcon
                          onClick={() => handleBackgroundChange(idxx)}
                          sx={{
                            color: match ? "#7DB1FF" : "#ffffff",
                            borderRadius: "50%",
                            backgroundImage: !match
                              ? "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)"
                              : "",
                            backgroundColor: match ? "#FFFFFF" : "white",
                            width: { lg: 45, md: 40, xs: 30 },
                            padding: 0.7,
                            height: { lg: 45, md: 40, xs: 30 },
                          }}
                        />
                      </Box>
                    </Box>
                  </SwiperSlide>
                </>
              );
            })}
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        mt={{ md: 10, xs: 5 }}
        sx={{ display: { md: "none", xs: "block" } }}
      >
        <Grid
          item
          md={2.5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#222D55",
              fontSize: "24px",
              fontWeight: 500,
              pb: 3,
            }}
          >
            Vous êtes...
          </Typography>
        </Grid>
        <Grid item md={9.5}>
          <Box
            component={Swiper}
            slidesPerView={1.3}
            spaceBetween={10}
            freeMode={true}
            modules={[Navigation, FreeMode, Pagination]}
            className="mySwiper"
            navigation={{
              nextEl: ".swiper-button-next-testimonials",
              prevEl: ".swiper-button-prev-testimonials",
              enabled: true,
            }}
          >
            {data?.map((ele, idxx) => {
              const match = id.includes(ele?.key);
              return (
                <>
                  <SwiperSlide
                    key={idxx}
                    style={{
                      backgroundImage: "url('/Images/Slider/Slider1.png')",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "550px",
                      // width: "100%",
                      borderRight: "1px solid rgba(217, 217, 217, 0.2)",
                    }}
                  >
                    <Box
                      sx={{
                        padding: 5,
                        display: "flex",
                        justifyContent: "space-between",
                        height: "100%",
                        flexDirection: "column",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            display: "flex",
                            justifyContent: "center",
                            fontSize: "40px",
                            color: "#FFFFFF",
                          }}
                        >
                          {ele?.count}
                        </Typography>
                      </Box>
                      <Box>
                        {ele?.item?.map((el, idx) => {
                          return (
                            <Box key={`${idx}${idx}`}>
                              <Typography
                                sx={{
                                  fontFamily: inter.style.fontFamily,
                                  background: "#FFFFFF",
                                  WebkitBackgroundClip: "text",
                                  backgroundClip: "text",
                                  color: "transparent",
                                  fontSize: "18px",
                                  mt: 1,
                                  maxWidth: "300px",
                                  textTransform: "uppercase",
                                  fontWeight: 600,
                                }}
                              >
                                {el}
                              </Typography>
                              <Divider
                                variant="middle"
                                sx={{
                                  bgcolor: "#FFFFFF",
                                  mt: 1,
                                  opacity: "20%",
                                  borderBottomWidth: "1px",
                                  marginLeft: "0px !important",
                                  marginRight: "0px !important",
                                }}
                              />
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  </SwiperSlide>
                </>
              );
            })}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 1,
                pb: 2,
                mt: 2,
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
        </Grid>
      </Grid>
    </Box>
  );
}
