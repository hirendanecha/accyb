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
    <Box
      component="section"
      sx={{
        padding : "0 30px",
        pt: { xs: 28, sm: 28, lg: 32, xl: 30 },
      }}
    >
      <Grid
        container
        columnSpacing={2}
        rowSpacing={6}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} md={2.5}>
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
              sx={{ bgcolor: "#007A47", width: 45, height: 45 }}
            >
              <ArrowBackIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography
            className={inter.className}
            sx={{ justifyContent: "center", display: "flex" }}
          >
            Notre fonctionnement
          </Typography>
          <Typography
            className={inter.className}
            variant="h2"
            color="#007A47"
            sx={{
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              mt: 3,
              fontSize: { lg: "64px", md: "50px", xs: "40px" },
            }}
          >
            Conseil d’administration
          </Typography>
          <Typography
            className={inter.className}
            sx={{
              justifyContent: "center",
              display: "flex",
              textAlign: "center",
              mt: 3,
            }}
          >
            Le conseil d’administration détermine les axes stratégiques et les
            orientations de l’activité de l’association ainsi que les grands
            principes de fonctionnement de l’Association et veille à leur mise
            en œuvre.
          </Typography>
        </Grid>
        <Grid item xs={12} md={2.5}>
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
              sx={{ bgcolor: "#007A47", width: 45, height: 45 }}
            >
              <ArrowForwardIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
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
            sx={{ bgcolor: "#007A47", width: 45, height: 45 }}
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
            sx={{ bgcolor: "#007A47", width: 45, height: 45 }}
          >
            <ArrowForwardIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </Box>
        <Box></Box>
      </Box>
      <Box
        component={Swiper}
        keyboard={true}
        pagination={{ clickable: true }}
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
          1200: { slidesPerView: 5 },
        }}
        mt={12}
        sx={{
          "& .swiper-pagination": { position: "static", mt: 16 },
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
              {chunks.map((review, j) => (
                <Grid item xs={12} sm={6} md={12} key={j + 256}>
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      border: "1px solid black",
                      padding: 5,
                      borderRadius: "10px",
                    }}
                  >
                    <Typography>ALTEN</Typography>
                    <Typography>EN FRANCE</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </SwiperSlide>
        ))}
      </Box>
    </Box>
  );
}
