"use client";
import { Box, Button, CircularProgress, Container, Divider, Grid, IconButton, Typography, styled } from "@mui/material";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../../redux/action/eventActions/eventAction";
import { getAllNews } from "../../../redux/action/newsActions/newsAction";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import dayjs from "dayjs";
const Img = styled(Image)(({ theme }) => ({
  width: "100% !important",
  height: "60% !important",
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
  const { allEvents, eventLoading } = useSelector((state) => state.events);
  const { allNews } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const locales = useLocale();
  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState(new Date().getMonth() + 1);
  const category = [
    {
      id: 1,
      name: "Janvier",
    },
    {
      id: 2,
      name: "février",
    },
    {
      id: 3,
      name: "mars",
    },
    {
      id: 4,
      name: "avril",
    },
    {
      id: 5,
      name: "mai",
    },
    {
      id: 6,
      name: "juin",
    },
    {
      id: 7,
      name: "juillet",
    },
    {
      id: 8,
      name: "août",
    },
    {
      id: 9,
      name: "septembre",
    },
    {
      id: 10,
      name: "Octobre",
    },
    {
      id: 11,
      name: "novembre",
    },
    {
      id: 12,
      name: "décembre",
    },
  ];

  useEffect(() => {
    dispatch(getAllEvents({ month: currentCategory }));
    dispatch(getAllNews());
    // dispatch(getAllEvents());
  }, []);

  const handleClick = (id) => {
    dispatch(getAllEvents({ month: id }));
    setCurrentCategory(id);
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
  return (
    <Box sx={{ padding: "0 16px", mt: 4 }}>
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
            {category?.map((ele, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <Button
                    onClick={() => handleClick(ele?.id)}
                    sx={{
                      width: {
                        lg: "220px",
                        md: "200px",
                        sm: "150px",
                        xs: "100%",
                      },
                      fontFamily: inter.style.fontFamily,
                      backgroundImage:
                        currentCategory == ele?.id
                          ? "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)"
                          : "transparent",
                      border: currentCategory == ele?.id ? "" : "1px solid #D3D5DD",
                      textTransform: "uppercase",
                      padding: "15px 40px",
                      fontSize: { md: "14px", xs: "12px" },
                      color: currentCategory == ele?.id ? "#FFFFFF" : "#222D55",
                      borderRadius: "50px",
                      "&:hover": {
                        backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {ele?.name}
                  </Button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
        <Grid
          container
          mt={{ md: 10, xs: 0 }}
          justifyContent={"center"}
          columnSpacing={3}
          rowSpacing={{ md: 5, xs: 10 }}
        >
          {eventLoading ? (
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Grid>
          ) : (
            <>
              {allEvents?.events?.length > 0 ? (
                allEvents?.events?.map((ele, idx) => {
                  let month = category?.find((el) => el?.id == currentCategory)?.name;
                  return (
                    <>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        key={idx}
                        onClick={() => router?.push(`/${locales}/event/${ele?._id}`)}
                        sx={{ cursor: "pointer" }}
                      >
                        <Img src={ele?.pictureLink} width={900} height={900} alt="img" />
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
                            {month}
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
                            {ele?.title}
                          </Typography>
                          <Typography
                            dangerouslySetInnerHTML={{ __html: ele?.description }}
                            sx={{
                              fontSize: "14px",
                              mt: 1,
                              width: { md: "450px", xs: "100%" },
                              lineHeight: "22px",
                              color: "#222D55",
                              fontFamily: inter.style.fontFamily,
                            }}
                          ></Typography>
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
                              {dayjs(ele?.date).format("DD MMM YYYY")}
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
            </>
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
          {allNews?.length > 0 ? (
            <>
              {allNews?.map((ele, idx) => {
                return (
                  <>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={{ cursor: "pointer" }}
                      onClick={() => router?.push(`/${locales}/news/${ele?._id}`)}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: 3,
                          flexDirection: { lg: "row", md: "column", xs: "column" },
                        }}
                      >
                        <Box>
                          <Imgs src={ele?.attachment[0]} width={295} height={220} alt="image1" />
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
                            {ele?.source[0]}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontWeight: 600,
                              fontSize: "18px",
                              maxWidth: { lg: "300px", md: "100%" },
                              color: "#222D55",
                            }}
                          >
                            {ele?.title}
                          </Typography>
                          <Typography
                            dangerouslySetInnerHTML={{ __html: ele?.description }}
                            mt={1}
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              color: "#222D55",
                              fontSize: "14px",
                              maxWidth: "350px",
                            }}
                          ></Typography>
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
                                  {dayjs(ele?.publishedDate).format("DD MMM YYYY")}
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
            </>
          ) : (
            <Grid item md={12} sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}>
              <CircularProgress sx={{ color: "#007A47" }} />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
