"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Divider, Grid, Icon, Typography, styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Picto3 from "../../../../Icons/Picto3.svg";
import Discover1 from "../../../../Icons/Discover1.svg";
import Discover3 from "../../../../Icons/Discover3.svg";
// import required modules
import { Pagination } from "swiper/modules";
import { inter } from "../../../../fonts/fonts";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function OurService() {
  const t = useTranslations("DiscovertheObservatory_OurMissions")
  const searchParams = useSearchParams();
  const search = searchParams.get("mission");
  useEffect(() => {
    if (search == "true") {
      document.getElementById("mission").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }, []);
  const data = [
    {
      icon: Discover3,
      title: `${t("title1")}`,
      description:`${t("detail1")}`,
    },
    {
      icon: Picto3,
      title: `${t("title2")}`,
      description: `${t("detail2")}`,
    },
    {
      icon: Discover1,
      title: `${t("title3")}`,
      description:`${t("detail3")}`,
    },
    {
      icon: Discover3,
      title: `${t("title1")}`,
      description:`${t("detail1")}`,
    },
    {
      icon: Picto3,
      title: `${t("title2")}`,
      description: `${t("detail2")}`,
    },
    {
      icon: Discover1,
      title: `${t("title3")}`,
      description:`${t("detail3")}`,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  const Img = styled(Image)(({ theme }) => ({
    width: "100% !important",
    height: "auto !important",
    [theme.breakpoints.down("sm")]: {
      width: "40px !important",
      height: "40px !important",
    },
  }));
  return (
    <>
      <Box mt={{ md: 30, xs: 10 }} sx={{ padding: "0 16px" }} id="mission">
        <Container disableGutters maxWidth={"xl"}>
          <Box
            mt={1}
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: {
                md: "75px",
                sm: "60px",
                xs: "30px",
              },
              color: "#222D55",
              fontWeight: 400,
              lineHeight: {
                md: "85px",
                sm: "75px",
                xs: "40px",
              },
            }}
          >
            {`${t("Title")}`}
          </Box>
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
      </Box>

      <Box
        component={Swiper}
        keyboard={true}
        slidesPerView={2.5}
        breakpoints={{
          1440: { slidesPerView: 2.4, spaceBetween: 30 },
          900: { slidesPerView: 2.4 },
          600: { slidesPerView: 1.9 },
          300: { slidesPerView: 1.9, spaceBetween: 90 },
        }}
        loop={true}
        spaceBetween={30}
        sx={{
          marginTop: 10,
        }}
        modules={[Pagination]}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {data?.map((ele, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    sx={{
                      marginTop: "30px",
                      marginLeft: { md: "20px", xs: "-150px" },
                    }}
                  >
                    <Box
                      sx={{
                        background: "linear-gradient(133.47deg, #E1E7FE -0.34%, rgba(0, 122, 71, 0) 98.52%)",
                        rotate: index === activeIndex + 1 ? "10deg" : "0deg",
                        borderRadius: "116px 0px 0px 0px",
                        height: {
                          lg: "325px",
                          md: "300",
                          sm: "280px",
                          xs: "210px",
                        },
                        width: {
                          lg: "325px",
                          md: "300",
                          sm: "280px",
                          xs: "210px",
                        },
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          height: "100px",
                          pl: { md: 7, xs: 6 },
                          pt: { md: 7, xs: 6 },
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#222D55",
                            fontSize: { lg: "38px", md: "30px", xs: "20px" },
                            fontWeight: 400,
                            lineHeight: { md: "42px", xs: "22px" },
                            fontFamily: inter.style.fontFamily,
                            marginLeft: { md: "-150px", xs: "-60px" },
                            rotate: index === activeIndex + 1 ? "-10deg" : "0deg",
                          }}
                        >
                          {ele?.title}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          height: "225px",
                          pb: { md: 7, xs: 6 },
                          pl: { md: 7, xs: 6 },
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#222D55",
                            fontSize: { lg: "14px", md: "12px", xs: "10px" },
                            fontWeight: 400,
                            lineHeight: { md: "22px", xs: "14px" },
                            fontFamily: inter.style.fontFamily,
                            maxWidth: "263px",
                            display: "flex",
                            rotate: index === activeIndex + 1 ? "-10deg" : "0deg",
                            justifyContent: "center",
                            mt: { md: 2, xs: 0 },
                          }}
                        >
                          {ele?.description}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          left: { md: -30, xs: -10 },
                          bottom: 50,
                          rotate: index === activeIndex + 1 ? "-10deg" : "0deg",
                        }}
                      >
                        <Img src={ele.icon} height={68} width={68} alt="picto" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
            </>
          );
        })}
      </Box>
    </>
  );
}
