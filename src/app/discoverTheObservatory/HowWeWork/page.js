"use client";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { inter } from "../../../app/fonts/fonts";

export default function HowToWorkSlider() {
  return (
    <Box component="section">
      <Box>
        <Typography
          className={inter.className}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "#222D55",
            fontSize: "18px",
            textTransform: "uppercase",
          }}
        >
          Notre fonctionnement
        </Typography>
        <Typography
          className={inter.className}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "#222D55",
            fontSize: "60px",
          }}
        >
          At vero eos
        </Typography>
      </Box>
      <Grid
        container
        sx={{ display: "flex", alignItems: "start", position: "relative" }}
      >
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: { lg: "block", md: " none", xs: "none" },
            position: "absolute",
            left: { md: "25%", xs: "5%" },
            zIndex: 10,
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
        <Grid item xs={12} md={12}>
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
              600: { slidesPerView: 1 },
              800: { slidesPerView: 1 },
              1000: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            sx={{
              "& .swiper-pagination": { position: "static", mt: 16 },
              "& .swiper-pagination-bullet": {
                bgcolor: "#5314A9",
                width: 4,
                height: 4,
                mx: "0.5rem !important",
              },
              "& .swiper-slide:not(.swiper-slide-prev, .swiper-slide-next)": {
                opacity: { lg: 0.3, md: 1, xs: 1 },
              },
            }}
          >
            <SwiperSlide>
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      padding: 5,
                      borderRadius: "10px",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "#060760",
                          fontSize: "29px",
                          display: "flex",
                          justifyContent: { md: "start", xs: "center" },
                          lineHeight: "30px",
                          fontWeight: 500,
                        }}
                      >
                        Cybermalveillance
                      </Typography>
                      <Typography
                        sx={{
                          mt: 3,
                          color: "#060760",
                          fontSize: "14px",
                          lineHeight: { md: "25px", xs: "22px" },
                          justifyContent: { md: "start", xs: "center" },
                          display: "flex",
                          textAlign: { md: "start", xs: "center" },
                        }}
                      >
                        Le conseil d’administration détermine les axes
                        stratégiques et les orientations de l’activité de
                        l’association ainsi que les grands principes de
                        fonctionnement de l’Association et veille à leur mise en
                        œuvre.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: { md: 1.5, xs: 0.8 },
                        flexWrap: "wrap",
                        justifyContent: { md: "start", xs: "center" },
                        mt: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          borderImageSlice: 1,
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#7DB1FF",
                        }}
                      >
                        Particulier
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          textTransform: "uppercase",
                          borderImageSlice: 1,
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          color: "#7DB1FF",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        TPE
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          textTransform: "uppercase",
                          borderImageSlice: 1,

                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          color: "#7DB1FF",
                          justifyContent: "center",
                        }}
                      >
                        Association locale
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      padding: 5,
                      borderRadius: "10px",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "#060760",
                          fontSize: "29px",
                          display: "flex",
                          justifyContent: { md: "start", xs: "center" },
                          lineHeight: "30px",
                          fontWeight: 500,
                        }}
                      >
                        Cybermalveillance
                      </Typography>
                      <Typography
                        sx={{
                          mt: 3,
                          color: "#060760",
                          fontSize: "14px",
                          lineHeight: { md: "25px", xs: "22px" },
                          justifyContent: { md: "start", xs: "center" },
                          display: "flex",
                          textAlign: { md: "start", xs: "center" },
                        }}
                      >
                        Le conseil d’administration détermine les axes
                        stratégiques et les orientations de l’activité de
                        l’association ainsi que les grands principes de
                        fonctionnement de l’Association et veille à leur mise en
                        œuvre.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: { md: 1.5, xs: 0.8 },
                        flexWrap: "wrap",
                        justifyContent: { md: "start", xs: "center" },
                        mt: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          borderImageSlice: 1,
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#7DB1FF",
                        }}
                      >
                        Particulier
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          textTransform: "uppercase",
                          borderImageSlice: 1,
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          color: "#7DB1FF",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        TPE
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          textTransform: "uppercase",
                          borderImageSlice: 1,

                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          color: "#7DB1FF",
                          justifyContent: "center",
                        }}
                      >
                        Association locale
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      padding: 5,
                      borderRadius: "10px",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "#060760",
                          fontSize: "29px",
                          display: "flex",
                          justifyContent: { md: "start", xs: "center" },
                          lineHeight: "30px",
                          fontWeight: 500,
                        }}
                      >
                        Cybermalveillance
                      </Typography>
                      <Typography
                        sx={{
                          mt: 3,
                          color: "#060760",
                          fontSize: "14px",
                          lineHeight: { md: "25px", xs: "22px" },
                          justifyContent: { md: "start", xs: "center" },
                          display: "flex",
                          textAlign: { md: "start", xs: "center" },
                        }}
                      >
                        Le conseil d’administration détermine les axes
                        stratégiques et les orientations de l’activité de
                        l’association ainsi que les grands principes de
                        fonctionnement de l’Association et veille à leur mise en
                        œuvre.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: { md: 1.5, xs: 0.8 },
                        flexWrap: "wrap",
                        justifyContent: { md: "start", xs: "center" },
                        mt: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          borderImageSlice: 1,
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#7DB1FF",
                        }}
                      >
                        Particulier
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          textTransform: "uppercase",
                          borderImageSlice: 1,
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          color: "#7DB1FF",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        TPE
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          textTransform: "uppercase",
                          borderImageSlice: 1,

                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          color: "#7DB1FF",
                          justifyContent: "center",
                        }}
                      >
                        Association locale
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      padding: 5,
                      borderRadius: "10px",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "#060760",
                          fontSize: "29px",
                          display: "flex",
                          justifyContent: { md: "start", xs: "center" },
                          lineHeight: "30px",
                          fontWeight: 500,
                        }}
                      >
                        Cybermalveillance
                      </Typography>
                      <Typography
                        sx={{
                          mt: 3,
                          color: "#060760",
                          fontSize: "14px",
                          lineHeight: { md: "25px", xs: "22px" },
                          justifyContent: { md: "start", xs: "center" },
                          display: "flex",
                          textAlign: { md: "start", xs: "center" },
                        }}
                      >
                        Le conseil d’administration détermine les axes
                        stratégiques et les orientations de l’activité de
                        l’association ainsi que les grands principes de
                        fonctionnement de l’Association et veille à leur mise en
                        œuvre.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: { md: 1.5, xs: 0.8 },
                        flexWrap: "wrap",
                        justifyContent: { md: "start", xs: "center" },
                        mt: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          borderImageSlice: 1,
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#7DB1FF",
                        }}
                      >
                        Particulier
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          textTransform: "uppercase",
                          borderImageSlice: 1,
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          color: "#7DB1FF",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        TPE
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          textTransform: "uppercase",
                          borderImageSlice: 1,

                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          color: "#7DB1FF",
                          justifyContent: "center",
                        }}
                      >
                        Association locale
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      padding: 5,
                      borderRadius: "10px",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "#060760",
                          fontSize: "29px",
                          display: "flex",
                          justifyContent: { md: "start", xs: "center" },
                          lineHeight: "30px",
                          fontWeight: 500,
                        }}
                      >
                        Cybermalveillance
                      </Typography>
                      <Typography
                        sx={{
                          mt: 3,
                          color: "#060760",
                          fontSize: "14px",
                          lineHeight: { md: "25px", xs: "22px" },
                          justifyContent: { md: "start", xs: "center" },
                          display: "flex",
                          textAlign: { md: "start", xs: "center" },
                        }}
                      >
                        Le conseil d’administration détermine les axes
                        stratégiques et les orientations de l’activité de
                        l’association ainsi que les grands principes de
                        fonctionnement de l’Association et veille à leur mise en
                        œuvre.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: { md: 1.5, xs: 0.8 },
                        flexWrap: "wrap",
                        justifyContent: { md: "start", xs: "center" },
                        mt: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          borderImageSlice: 1,
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#7DB1FF",
                        }}
                      >
                        Particulier
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          textTransform: "uppercase",
                          borderImageSlice: 1,
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          color: "#7DB1FF",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        TPE
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #7DB1FF",
                          textTransform: "uppercase",
                          borderImageSlice: 1,

                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          color: "#7DB1FF",
                          justifyContent: "center",
                        }}
                      >
                        Association locale
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
          </Box>
        </Grid>
        <Box
          className="swiper-button-next-testimonials"
          sx={{
            display: { lg: "block", md: " none", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: { md: "75%", xs: "85%" },
            zIndex: 10,
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
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          alignItems: "center",
        }}
      >
        {" "}
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: { lg: "none", xs: "block" },
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
            display: { lg: "none", xs: "block" },
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
  );
}
