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
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { inter } from "../../../app/fonts/fonts";
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
];

// Split Reviews in chunks of [{}, {}]
let [list, chunkSize] = [reviews.slice(), 2];
list = [...Array(Math.ceil(list.length / chunkSize))].map((_) =>
  list.splice(0, chunkSize)
);
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
            position: "absolute",
            left: { md: "25%", xs: "5%" },
            zIndex: 10,
          }}
        >
          <IconButton
            className="swiper-button-prev-testimonials"
            aria-label="Next Slide"
            title="Next Slide"
            sx={{ bgcolor: "#FC0029", width: 45, height: 45 }}
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
                opacity: 0.3,
              },
            }}
          >
            <SwiperSlide>
              <Grid container>
                <Grid item xs={12} sm={6} md={12}>
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
                          justifyContent: "start",
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
                          lineHeight: "25px",
                          display: "flex",
                          textAlign: "start",
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
                        gap: 1.5,
                        flexWrap: "wrap",
                        mt: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          border: "2px solid #FC0029",
                          color: "#FC0029",
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Particulier
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #FC0029",
                          color: "#FC0029",
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        TPE
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #FC0029",
                          color: "#FC0029",
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
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
                <Grid item xs={12} sm={6} md={12}>
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
                          justifyContent: "start",
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
                          lineHeight: "25px",
                          display: "flex",
                          textAlign: "start",
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
                        gap: 1.5,
                        flexWrap: "wrap",
                        mt: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          border: "2px solid #FC0029",
                          color: "#FC0029",
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Particulier
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #FC0029",
                          color: "#FC0029",
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        TPE
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #FC0029",
                          color: "#FC0029",
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
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
                <Grid item xs={12} sm={6} md={12}>
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
                          justifyContent: "start",
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
                          lineHeight: "25px",
                          display: "flex",
                          textAlign: "start",
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
                        gap: 1.5,
                        flexWrap: "wrap",
                        mt: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          border: "2px solid #FC0029",
                          color: "#FC0029",
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Particulier
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #FC0029",
                          color: "#FC0029",
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        TPE
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #FC0029",
                          color: "#FC0029",
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
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
                <Grid item xs={12} sm={6} md={12}>
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
                          justifyContent: "start",
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
                          lineHeight: "25px",
                          display: "flex",
                          textAlign: "start",
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
                        gap: 1.5,
                        flexWrap: "wrap",
                        mt: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          border: "2px solid #FC0029",
                          color: "#FC0029",
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Particulier
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #FC0029",
                          color: "#FC0029",
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        TPE
                      </Typography>
                      <Typography
                        sx={{
                          border: "2px solid #FC0029",
                          color: "#FC0029",
                          textTransform: "uppercase",
                          borderRadius: "50px",
                          width: "193px",
                          fontSize: "13px",
                          fontWeight: 500,
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
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
            sx={{ bgcolor: "#FC0029", width: 45, height: 45 }}
          >
            <ArrowForwardIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </Box>
      </Grid>
    </Box>
  );
}
