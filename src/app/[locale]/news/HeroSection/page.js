"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Box, Button, CircularProgress, Container, Grid, Typography } from "@mui/material";
import { inter } from "../../../../fonts/fonts";
import { getAllEvents } from "../../../redux/action/eventActions/eventAction";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function App({ allEvents }) {
  const locales = useLocale();
  const router = useRouter();

  return (
    <>
      <Container
        disableGutters
        maxWidth={"xl"}
        sx={{ mt: { md: "125px", sm: "50px", xs: "10px" }, padding: { md: "0 40px", xs: "0 20px" } }}
      >
        <Box
          component={Swiper}
          slidesPerView={1}
          spaceBetween={10}
          speed={1200}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          sx={{
            "& .swiper-pagination": {
              display: "flex",
              alignItems: "center",
              position: "absolute",
              // left: { xl: "10% !important", xs: "1% !important" },
              // width: "100% !important",
              width: "1440px !important",
              maxWidth: "100% !important",
              left: { lg: "140% !important", md: "135% !important", xs: "120% !important" },
              transform: "translateX(-50%)",
              bottom: { md: "80px !important", xs: "40px !important" },
            },
            "& .swiper-pagination-bullet": {
              bgColor: "#5314A9",
              w: 10,
              h: 4,
              mx: "0.5rem !important",
              width: "8px !important",
              height: "8px !important",
              opacity: "1 !important",
              background: "#8B8D9C !important",
            },
            "& .swiper-pagination-bullet-active": {
              background: "#FFFFFF !important",
            },
          }}
          // style={{
          //   "--swiper-pagination-color": "#fffff",
          //   "--swiper-pagination-bullet-inactive-color": "#B0B3BE",
          //   "--swiper-pagination-bullet-inactive-opacity": "1",
          //   "--swiper-pagination-bullet-size": "10px",
          //   "--swiper-pagination-bullet-horizontal-gap": "8px",
          // }}
        >
          {allEvents?.events?.length > 0 ? (
            <>
              {allEvents?.events?.slice(0, 3)?.map((ele, idx) => {
                const data = ele?.description
                  .split("\n")
                  .slice(0, 4)
                  .map((line, index) => {
                    if (index === 0) {
                      return line.substring(0, 100) + "...";
                    } else {
                      return line;
                    }
                  })
                  .join("\n");
                return (
                  <SwiperSlide>
                    <Box
                      onClick={() => {
                        router.push(`/${locales}/event/${ele?._id}`);
                      }}
                      key={idx}
                      sx={{
                        cursor: "pointer",
                        backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.1), rgba(0, 0, 255, 0.1)), url(${ele?.pictureLink})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 100%",
                        backgroundPosition: "fixed",
                        height: { md: "700px", xs: "400px" },
                        width: "100%",
                        borderRadius: "20px",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={12} md={10} padding={{ md: "150px 50px", xs: "90px 10px" }}>
                          <Button
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                              textTransform: "uppercase",
                              padding: "15px 40px 15px 40px",
                              fontSize: { md: "14px", xs: "12px" },
                              color: "#FFFFFF",
                              display: "flex",
                              textAlign: "start",
                              borderRadius: "50px",
                              "&:hover": {
                                backgroundImage: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                              },
                            }}
                          >
                            Actualité
                          </Button>
                          <Box
                            mt={1}
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontSize: {
                                lg: "70px",
                                md: "60px",
                                sm: "40px",
                                xs: "30px",
                              },
                              flexDirection: "column",
                              textAlign: "start",
                              color: "#FFFFFF",
                              fontWeight: 400,
                              lineHeight: {
                                md: "75px",
                                sm: "50px",
                                xs: "40px",
                              },
                            }}
                          >
                            {ele?.title}
                            {/* <span
                          style={{
                            background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          cybercriminalité
                        </span>{" "} */}
                          </Box>
                          <Typography
                            dangerouslySetInnerHTML={{ __html: data }}
                            sx={{
                              display: "flex",
                              textAlign: "start",
                              fontSize: {
                                lg: "14px",
                                md: "13px",
                                sm: "13px",
                                xs: "12px",
                              },
                              color: "#FFFFFF",
                              fontWeight: 400,
                              lineHeight: { md: "25px", sm: "22px", xs: "20px" },
                              maxWidth: "550px !important",
                              mt: { md: 3, xs: 1 },
                              fontFamily: inter.style.fontFamily,
                            }}
                          ></Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              textAlign: "start",
                              fontSize: "12px",
                              color: "#FFFFFF",
                              fontWeight: 400,
                              lineHeight: { md: "25px", xs: "25px" },
                              maxWidth: "550px !important",
                              mt: 2,
                              fontFamily: inter.style.fontFamily,
                            }}
                          >
                            {dayjs(ele?.startDate).format("DD MMM YYYY")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </>
          ) : (
            <Grid item md={12} sx={{ cursor: "pointer", display: "flex", justifyContent: "center", mt: 20 }}>
              <CircularProgress sx={{ color: "#007A47" }} />
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );
}
