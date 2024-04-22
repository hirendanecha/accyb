"use client";
import { Box, Button, Container, Divider, Grid, IconButton, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { inter } from "../../../../fonts/fonts";
import Image from "next/image";
import Event1 from "../../../../Icons/Event1.svg";
import Event2 from "../../../../Icons/Event2.svg";
import Image1 from "../../../../Icons/Image1.png";
import Image2 from "../../../../Icons/Image2.png";
import Image3 from "../../../../Icons/Image3.png";
import ShareIcon from "@mui/icons-material/Share";
import { SwiperSlide, Swiper } from "swiper/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Img = styled(Image)(({ theme }) => ({
  width: "100% !important",
  height: "auto !important",
}));
const Imgs = styled(Image)(({ theme }) => ({
  width: "292px !important",
  height: "auto !important",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: "auto !important",
  },
}));

export default function OurEvents() {
  const subCategory = [
    {
      img: Event1,
      title: "Janvier",
      heading: "24e Panorama de la cybercriminalité Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ... Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      time: "13.01.2024",
    },
    {
      img: Event2,
      title: "Janvier",
      heading: "24e Panorama de la cybercriminalité Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ... Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      time: "13.01.2024",
    },
    {
      img: Event1,
      title: "avril",
      heading: "24e Panorama de la cybercriminalité Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ... Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      time: "13.01.2024",
    },
    {
      img: Event2,
      title: "avril",
      heading: "24e Panorama de la cybercriminalité Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ... Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      time: "13.01.2024",
    },
  ];
  const [content, setContent] = useState(subCategory?.filter((ele) => ele?.title == "Janvier"));
  const [currentCategory, setCurrentCategory] = useState("Janvier");
  const category = [
    "Janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "Octobre",
    "novembre",
    "décembre",
  ];

  const handleClick = (id) => {
    setCurrentCategory(id);
    const aa = subCategory?.filter((ele) => ele?.title == id);
    setContent(aa);
  };
  const articles = [
    {
      img: Image1,
      title: "Actualité",
      heading: "Calendrier de l’Avent Cyber 2023",
      description: "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
      time: "13.01.2024",
    },
    {
      img: Image2,
      title: "Actualité",
      heading: "Calendrier de l’Avent Cyber 2023",
      description: "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
      time: "13.01.2024",
    },
    {
      img: Image3,
      title: "Actualité",
      heading: "Calendrier de l’Avent Cyber 2023",
      description: "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
      time: "13.01.2024",
    },
    {
      img: Image1,
      title: "Actualité",
      heading: "Calendrier de l’Avent Cyber 2023",
      description: "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
      time: "13.01.2024",
    },
    {
      img: Image2,
      title: "Actualité",
      heading: "Calendrier de l’Avent Cyber 2023",
      description: "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
      time: "13.01.2024",
    },
    {
      img: Image3,
      title: "Actualité",
      heading: "Calendrier de l’Avent Cyber 2023",
      description: "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
      time: "13.01.2024",
    },
  ];
  useEffect(() => {
    setCurrentCategory(category[new Date().getMonth()]);
  }, []);
  return (
    <Box sx={{ padding: "0 16px" }}>
      <Container disableGutters maxWidth={"xl"}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            sx={{
              color: "#222D55",
              fontSize: { md: "39px", xs: "24px" },
              mt: { md: 0, xs: 4 },
            }}
          >
            Nos événements
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              gap: 1,
              mt: { md: 0, xs: 4 },
            }}
          >
            <Box
              sx={{
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
                  width: { md: 45, xs: 40 },
                  height: { md: 45, xs: 40 },
                }}
              >
                <ArrowBackIcon sx={{ color: "#FFFFFF" }} />
              </IconButton>
            </Box>
            <Box
              className="swiper-button-next-testimonials"
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                aria-label="Next Slide"
                title="Next Slide"
                sx={{
                  backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                  width: { md: 45, xs: 40 },
                  height: { md: 45, xs: 40 },
                }}
              >
                <ArrowForwardIcon sx={{ color: "#FFFFFF" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider
        variant="middle"
        sx={{
          display: { md: "block", xs: "none" },
          bgcolor: "#222D55",
          mt: 1,
          opacity: "20%",
          borderBottomWidth: "1px",
        }}
      />

      <Container disableGutters maxWidth={"xl"}>
        <Box
          sx={{
            mt: 4,
            cursor: "grab",
          }}
        >
          <Swiper
            spaceBetween={10} // Adjust as needed
            slidesPerView={6.5} // Adjust as needed
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 2.5,
              },
              600: {
                slidesPerView: 3.5,
              },
              960: {
                slidesPerView: 4.5,
              },
              1200: {
                slidesPerView: 5.1,
              },
              1400: {
                slidesPerView: 6.1,
              },
              1600: {
                slidesPerView: 6.5,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next-testimonials",
              prevEl: ".swiper-button-prev-testimonials",
              enabled: true,
            }}
            modules={[Navigation, Keyboard, Pagination]}
            loop={true}
            scrollbar={{ draggable: true }}
            className="mySwiper"
          >
            {category?.map((ele, idx) => (
              <SwiperSlide key={idx}>
                <Button
                  onClick={() => handleClick(ele)}
                  sx={{
                    width: {
                      lg: "220px",
                      md: "200px",
                      sm: "150px",
                      xs: "100%",
                    },
                    fontFamily: inter.style.fontFamily,
                    backgroundImage:
                      currentCategory === ele
                        ? "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)"
                        : "transparent",
                    border: currentCategory === ele ? "" : "1px solid #D3D5DD",
                    textTransform: "uppercase",
                    padding: "15px 40px",
                    fontSize: { md: "14px", xs: "12px" },
                    color: currentCategory === ele ? "#FFFFFF" : "#222D55",
                    borderRadius: "50px",
                    "&:hover": {
                      backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  {ele}
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Grid
          container
          mt={{ md: 10, xs: 5 }}
          justifyContent={"center"}
          columnSpacing={3}
          rowSpacing={{ md: 0, xs: 3 }}
        >
          {content?.length > 0 ? (
            content?.map((ele) => {
              return (
                <>
                  <Grid item xs={12} md={6} lg={6}>
                    <Img src={ele?.img} width={900} height={900} alt="img" />
                    <Box>
                      <Typography
                        sx={{
                          backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                          width: "max-content",
                          padding: "8px 15px 8px 15px",
                          fontSize: "12px",
                          mt: 3,
                          color: "#FFFFFF",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          fontFamily: inter.style.fontFamily,
                        }}
                      >
                        {ele?.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          mt: 1,
                          width: { md: "450px", xs: "100%" },
                          lineHeight: "36px",
                          color: "#222D55",
                          fontFamily: inter.style.fontFamily,
                        }}
                      >
                        {ele?.heading}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          mt: 1,
                          width: { md: "450px", xs: "100%" },
                          lineHeight: "22px",
                          color: "#222D55",
                          fontFamily: inter.style.fontFamily,
                        }}
                      >
                        {ele?.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 500,
                            mt: 2,
                            fontSize: "14px",
                            color: "#222D55",
                            fontFamily: inter.style.fontFamily,
                          }}
                        >
                          {ele?.time}
                        </Typography>
                        <Box
                          sx={{
                            border: "1px solid #222D55",
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", // This centers the icon vertically
                          }}
                        >
                          <ShareIcon
                            sx={{
                              height: "20px",
                              width: "20px",
                              color: "#222D55",
                              cursor: "pointer",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </>
              );
            })
          ) : (
            <Box
              sx={{
                display: "flex",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                }}
              >
                No Event Found
              </Typography>
            </Box>
          )}
        </Grid>
        <Typography sx={{ color: "#222D55", fontSize: { md: "39px", xs: "24px" }, mt: 8 }}>Articles</Typography>
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
      <Container disableGutters maxWidth={"xl"}>
        <Grid container mt={3} justifyContent={"space-between"} rowSpacing={3}>
          {articles?.map((ele, idx) => {
            return (
              <>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      flexDirection: { lg: "row", md: "column", xs: "column" },
                    }}
                  >
                    <Box>
                      <Imgs src={ele?.img} width={295} height={220} alt="image1" />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
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
                        {ele?.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontWeight: 600,
                          fontSize: "18px",
                          maxWidth: { lg: "230px", md: "100%" },
                          color: "#222D55",
                        }}
                      >
                        {ele?.heading}
                      </Typography>
                      <Typography
                        mt={1}
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          color: "#222D55",
                          fontSize: "14px",
                          maxWidth: "350px",
                        }}
                      >
                        {ele?.description}
                      </Typography>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: { md: 3, xs: 2 },
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontSize: 14,
                                fontWeight: 600,
                                color: "13.01.2024",
                              }}
                            >
                              {ele?.time}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              border: "1px solid #222D55",
                              width: "36px",
                              mr: 3,
                              height: "36px",
                              borderRadius: "50%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center", // This centers the icon vertically
                            }}
                          >
                            <ShareIcon
                              sx={{
                                height: "16px",
                                width: "16px",
                                color: "#222D55",
                                cursor: "pointer",
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
