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
        <Typography sx={{ color: "#222D55", fontSize: { md: "39px", xs: "24px" }, mt: 10 }}>
          Découvrez nos autres événements
        </Typography>
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
      <Container disableGutters maxWidth={"xl"}>
        <Box
          sx={{
            background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
            borderRadius: "20px",
            overflow: "hidden",
            padding: "0 16px",
            mt: { md: 20, xs: 10 },
            position: "relative",
            mt: { md: 20, xs: 10 },
          }}
        >
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
                boxShadow: "5px -5px 0 5px #97E6FF",
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
                boxShadow: "5px -5px 0 5px #97E6FF",
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
          <Grid container padding={{ md: 8, xs: 3 }}>
            <Grid item xs={12} md={6}>
              {" "}
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "55px", xs: "26px" },
                  color: "#FFFFFF",
                  lineHeight: { md: "60px", xs: "33px" },
                  fontWeight: 400,
                  maxWidth: { md: "800px", xs: "100%" },
                }}
              >
                Formulaire d'inscription pour les événements
              </Typography>
              <Typography
                sx={{
                  mt: { md: 2, xs: 3 },
                  color: "#FFFFFF",
                  fontSize: { md: "22px", xs: "14px" },
                  lineHeight: { md: "32px", xs: "22px" },
                  fontFamily: inter.style.fontFamily,
                  maxWidth: { md: "450px", xs: "100%" },
                }}
              >
                Remplissez le formulaire d’adhésion. Durée maximale : 25 minutes. Aucune carte de crédit n’est requise.
                Aucun engagement.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display={"flex"}
              justifyContent={{ md: "center", xs: "start" }}
              alignItems={"flex-end"}
            >
              <Button
                variant="outlined"
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      color: "#ffffff",
                      padding: 1.7,
                      marginRight: -2,
                      ml: 3,
                      ":hover": {
                        "@keyframes move-left": {
                          "0%": {
                            rotate: "0deg",
                          },
                          "100%": {
                            rotate: "-35deg",
                          },
                        },
                        animation: "move-left 0.3s ease-in-out 0s 1 normal forwards",
                      },
                    }}
                  />
                }
                sx={{
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                  borderRadius: "61px",
                  padding: "8px 30px",
                  fontSize: { md: "12px", xs: "10px" },
                  mt: { md: 3, xs: 5 },
                  fontWeight: 600,
                  background: "#ffffff",
                  fontFamily: inter.style.fontFamily,
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    border: "none",
                  },
                }}
              >
                remplir le formulaire
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
