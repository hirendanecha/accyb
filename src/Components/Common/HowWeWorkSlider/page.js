"use client";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { inter } from "../../../fonts/fonts";
const reviews = [
  {
    rating: 5,
    review:
      "We Chose Squareshot because it’s the perfect combination of convenience and quality. Team takes care of getting us high-quality images quickly and efficiently.",
    reviewer: "Leslie Alexander",
    position: "UI/UX Designer",
    // img: Client1Img,
  },
  {
    rating: 5,
    review:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    reviewer: "Esther Howard",
    position: "Nursing Assistant",
    // img: Client2Img,
  },
  {
    rating: 5,
    review:
      "Quote testimonials are ads or artwork that display positive statements about your company from a brand evangelist or a delighted customer. The quote is usually accompanied by an image of the person being quoted to make the message more relatable to the target audience.",
    reviewer: "Savannah Nguyen",
    position: "Dog Trainer",
    // img: Client3Img,
  },
  {
    rating: 5,
    review:
      "We Chose Squareshot because it’s the perfect combination of convenienc.",
    reviewer: "Ronald Richards",
    position: "President of Sales",
    // img: Client4Img,
  },
  {
    rating: 5,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    reviewer: "Dianne Russell",
    position: "Web Designer",
    // img: Client5Img,
  },
  {
    rating: 5,
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    reviewer: "Eleanor Pena",
    position: "Marketing Coordinator",
    // img: Client6Img,
  },
  {
    rating: 5,
    review:
      "We Chose Squareshot because it’s the perfect combination of convenience and quality. Team takes care of getting us high-quality images quickly and efficiently.",
    reviewer: "Leslie Alexander",
    position: "UI/UX Designer",
    // img: Client1Img,
  },
  {
    rating: 5,
    review:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    reviewer: "Esther Howard",
    position: "Nursing Assistant",
    // img: Client2Img,
  },
  {
    rating: 5,
    review:
      "Quote testimonials are ads or artwork that display positive statements about your company from a brand evangelist or a delighted customer. The quote is usually accompanied by an image of the person being quoted to make the message more relatable to the target audience.",
    reviewer: "Savannah Nguyen",
    position: "Dog Trainer",
    // img: Client3Img,
  },
  {
    rating: 5,
    review:
      "We Chose Squareshot because it’s the perfect combination of convenienc.",
    reviewer: "Ronald Richards",
    position: "President of Sales",
    // img: Client4Img,
  },
  {
    rating: 5,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    reviewer: "Dianne Russell",
    position: "Web Designer",
    // img: Client5Img,
  },
  {
    rating: 5,
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    reviewer: "Eleanor Pena",
    position: "Marketing Coordinator",
    // img: Client6Img,
  },
  {
    rating: 5,
    review:
      "We Chose Squareshot because it’s the perfect combination of convenienc.",
    reviewer: "Ronald Richards",
    position: "President of Sales",
    // img: Client4Img,
  },
  {
    rating: 5,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    reviewer: "Dianne Russell",
    position: "Web Designer",
    // img: Client5Img,
  },
  {
    rating: 5,
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    reviewer: "Eleanor Pena",
    position: "Marketing Coordinator",
    // img: Client6Img,
  },
  {
    rating: 5,
    review:
      "We Chose Squareshot because it’s the perfect combination of convenienc.",
    reviewer: "Ronald Richards",
    position: "President of Sales",
    // img: Client4Img,
  },
  {
    rating: 5,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    reviewer: "Dianne Russell",
    position: "Web Designer",
    // img: Client5Img,
  },
  {
    rating: 5,
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    reviewer: "Eleanor Pena",
    position: "Marketing Coordinator",
    // img: Client6Img,
  },
  {
    rating: 5,
    review:
      "We Chose Squareshot because it’s the perfect combination of convenienc.",
    reviewer: "Ronald Richards",
    position: "President of Sales",
    // img: Client4Img,
  },
  {
    rating: 5,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    reviewer: "Dianne Russell",
    position: "Web Designer",
    // img: Client5Img,
  },
  {
    rating: 5,
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    reviewer: "Eleanor Pena",
    position: "Marketing Coordinator",
    // img: Client6Img,
  },
  {
    rating: 5,
    review:
      "We Chose Squareshot because it’s the perfect combination of convenienc.",
    reviewer: "Ronald Richards",
    position: "President of Sales",
    // img: Client4Img,
  },
  {
    rating: 5,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    reviewer: "Dianne Russell",
    position: "Web Designer",
    // img: Client5Img,
  },
  {
    rating: 5,
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    reviewer: "Eleanor Pena",
    position: "Marketing Coordinator",
    // img: Client6Img,
  },
  {
    rating: 5,
    review:
      "We Chose Squareshot because it’s the perfect combination of convenienc.",
    reviewer: "Ronald Richards",
    position: "President of Sales",
    // img: Client4Img,
  },
  {
    rating: 5,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    reviewer: "Dianne Russell",
    position: "Web Designer",
    // img: Client5Img,
  },
  {
    rating: 5,
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    reviewer: "Eleanor Pena",
    position: "Marketing Coordinator",
    // img: Client6Img,
  },
  {
    rating: 5,
    review:
      "We Chose Squareshot because it’s the perfect combination of convenienc.",
    reviewer: "Ronald Richards",
    position: "President of Sales",
    // img: Client4Img,
  },
  {
    rating: 5,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    reviewer: "Dianne Russell",
    position: "Web Designer",
    // img: Client5Img,
  },
  {
    rating: 5,
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    reviewer: "Eleanor Pena",
    position: "Marketing Coordinator",
    // img: Client6Img,
  },
];

// Split Reviews in chunks of [{}, {}]
let [list, chunkSize] = [reviews.slice(), 2];
list = [...Array(Math.ceil(list.length / chunkSize))].map((_) =>
  list.splice(0, chunkSize)
);
export default function HowToWorkSlider() {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 10, sm: 10, lg: 15, xl: 20 },
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "start",
          position: "relative",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: { lg: "block", md: " none", xs: "none" },
            position: "absolute",
            left: { md: "25%", xs: "5%" },
            zIndex: 10,
            top: 60,
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
          component={Swiper}
          keyboard={true}
          modules={[Navigation, Keyboard, Pagination]}
          slidesPerView={1.7}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-testimonials",
            prevEl: ".swiper-button-prev-testimonials",
            enabled: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1.7,
            },
          }}
          centeredSlides={true}
          centeredSlidesBounds={true}
          allowTouchMove={false}
          sx={{
            "& .swiper-slide:not(.swiper-slide-active)": {
              opacity: { lg: 0.3, md: 1, xs: 1 },
            },
          }}
        >
          <SwiperSlide>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={12} md={12} lg={12}>
                <Box
                  sx={{
                    bgcolor: "#fff",
                    padding: { md: 5, xs: 0.2 },
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h2"
                    color="#007A47"
                    sx={{
                      textTransform: "capitalize",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      mt: 3,
                      fontFamily: inter.style.fontFamily,
                      fontSize: { lg: "40px", md: "30px", xs: "20px" },
                    }}
                  >
                    Conseil d’administration
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      justifyContent: "center",
                      display: "flex",
                      textAlign: "center",
                      fontSize: { lg: "14px", md: "12px", xs: "10px" },
                      mt: 3,
                      mb: { md: 1, xs: 5 },
                      maxWidth: "100%",
                    }}
                  >
                    Le conseil d’administration détermine les axes stratégiques
                    et les orientations de l’activité de l’association ainsi que
                    les grands principes de fonctionnement de l’Association et
                    veille à leur mise en œuvre.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={12} md={12} lg={12}>
                <Box
                  sx={{
                    bgcolor: "#fff",
                    padding: { md: 5, xs: 0.2 },
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h2"
                    color="#007A47"
                    sx={{
                      textTransform: "capitalize",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      mt: 3,
                      fontFamily: inter.style.fontFamily,
                      fontSize: { lg: "40px", md: "30px", xs: "20px" },
                    }}
                  >
                    Conseil d’administration
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      justifyContent: "center",
                      display: "flex",
                      textAlign: "center",
                      fontSize: { lg: "14px", md: "12px", xs: "10px" },
                      mt: 3,
                      mb: { md: 1, xs: 5 },
                      maxWidth: "100%",
                    }}
                  >
                    Le conseil d’administration détermine les axes stratégiques
                    et les orientations de l’activité de l’association ainsi que
                    les grands principes de fonctionnement de l’Association et
                    veille à leur mise en œuvre.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={12} md={12} lg={12}>
                <Box
                  sx={{
                    bgcolor: "#fff",
                    padding: { md: 5, xs: 0.2 },
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h2"
                    color="#007A47"
                    sx={{
                      textTransform: "capitalize",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      mt: 3,
                      fontFamily: inter.style.fontFamily,
                      fontSize: { lg: "40px", md: "30px", xs: "20px" },
                    }}
                  >
                    Conseil d’administration
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      justifyContent: "center",
                      display: "flex",
                      textAlign: "center",
                      fontSize: { lg: "14px", md: "12px", xs: "10px" },
                      mt: 3,
                      mb: { md: 1, xs: 5 },
                      maxWidth: "100%",
                    }}
                  >
                    Le conseil d’administration détermine les axes stratégiques
                    et les orientations de l’activité de l’association ainsi que
                    les grands principes de fonctionnement de l’Association et
                    veille à leur mise en œuvre.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={12} md={12} lg={12}>
                <Box
                  sx={{
                    bgcolor: "#fff",
                    padding: { md: 5, xs: 0.2 },
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h2"
                    color="#007A47"
                    sx={{
                      textTransform: "capitalize",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      mt: 3,
                      fontFamily: inter.style.fontFamily,
                      fontSize: { lg: "40px", md: "30px", xs: "20px" },
                    }}
                  >
                    Conseil d’administration
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      justifyContent: "center",
                      display: "flex",
                      textAlign: "center",
                      fontSize: { lg: "14px", md: "12px", xs: "10px" },
                      mt: 3,
                      mb: { md: 1, xs: 5 },
                      maxWidth: "100%",
                    }}
                  >
                    Le conseil d’administration détermine les axes stratégiques
                    et les orientations de l’activité de l’association ainsi que
                    les grands principes de fonctionnement de l’Association et
                    veille à leur mise en œuvre.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={12} md={12} lg={12}>
                <Box
                  sx={{
                    bgcolor: "#fff",
                    padding: { md: 5, xs: 0.2 },
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h2"
                    color="#007A47"
                    sx={{
                      textTransform: "capitalize",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      mt: 3,
                      fontFamily: inter.style.fontFamily,
                      fontSize: { lg: "40px", md: "30px", xs: "20px" },
                    }}
                  >
                    Conseil d’administration
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      justifyContent: "center",
                      display: "flex",
                      textAlign: "center",
                      fontSize: { lg: "14px", md: "12px", xs: "10px" },
                      mt: 3,
                      mb: { md: 1, xs: 5 },
                      maxWidth: "100%",
                    }}
                  >
                    Le conseil d’administration détermine les axes stratégiques
                    et les orientations de l’activité de l’association ainsi que
                    les grands principes de fonctionnement de l’Association et
                    veille à leur mise en œuvre.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
        </Box>
        <Box
          className="swiper-button-next-testimonials"
          sx={{
            display: { lg: "block", md: " none", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: { md: "75%", xs: "85%" },
            top: 60,
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
        component={Swiper}
        keyboard={true}
        modules={[Navigation, Keyboard, Pagination, Autoplay]}
        slidesPerView={2}
        spaceBetween={24}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-testimonials",
          prevEl: ".swiper-button-prev-testimonials",
          enabled: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          600: { slidesPerView: 2 },
          1200: { slidesPerView: 5 },
        }}
        allowTouchMove={false}
        mt={{ md: 12, xs: 0 }}
        sx={{
          "& .swiper-pagination": { position: "static", mt: 10 },
          "& .swiper-pagination-bullet": {
            bgcolor: "#5314A9",
            width: 4,
            height: 4,
            mx: "0.5rem !important",
          },
        }}
      >
        {list?.map((chunks, i) => (
          <SwiperSlide key={150 + i}>
            <Grid container spacing={3}>
              {chunks.map((review, j) => {
                return (
                  <Grid item xs={12} sm={6} md={12} key={j + 256}>
                    <Box
                      sx={{
                        bgcolor: "#fff",
                        border: "1px solid black",
                        padding: { md: 5, xs: 2 },
                        borderRadius: "10px",
                        transform: {
                          md: j === 0 ? "" : "translateX(-50%)",
                          xs: j === 0 ? "" : "translateX(-50%)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                        }}
                      >
                        ALTEN
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                        }}
                      >
                        EN FRANCE
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </SwiperSlide>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 5 }}>
        <Box
          sx={{
            display: { lg: "none", md: "flex" },
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <IconButton
            className="swiper-button-prev-testimonials"
            aria-label="Next Slide"
            title="Next Slide"
            sx={{
              bgcolor: "#007A47",
              width: 45,
              height: 45,
              "&:hover": {
                backgroundColor: "#007A47",
              },
            }}
          >
            <ArrowBackIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </Box>
        <Box
          className="swiper-button-next-testimonials"
          sx={{
            display: { lg: "none", md: "flex" },
          }}
        >
          <IconButton
            aria-label="Next Slide"
            title="Next Slide"
            sx={{
              bgcolor: "#007A47",
              width: 45,
              height: 45,
              "&:hover": {
                backgroundColor: "#007A47",
              },
            }}
          >
            <ArrowForwardIcon
              sx={{
                color: "#FFFFFF",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
