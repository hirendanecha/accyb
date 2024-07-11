"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { inter } from "../../../../fonts/fonts";
import Logo1 from "../../../../Icons/Partners/Logo1.svg";
import Logo2 from "../../../../Icons/Partners/Logo2.svg";
import Logo3 from "../../../../Icons/Partners/Logo3.svg";
import Logo4 from "../../../../Icons/Partners/Logo4.svg";
import Logo5 from "../../../../Icons/Supported/Logo1.svg";
import Logo6 from "../../../../Icons/Supported/Logo2.svg";
import Logo7 from "../../../../Icons/Supported/Logo3.svg";
import Logo8 from "../../../../Icons/Supported/Logo4.svg";
import Logo9 from "../../../../Icons/Supported/Logo1.jpg";
import Findimg1 from "../../../../Icons/Findimg1.svg";
import Findimg2 from "../../../../Icons/Findimg2.svg";
import Findimg3 from "../../../../Icons/Findimg3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import AddIcon from "@mui/icons-material/Add";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";

const Img = styled(Image)(({ theme }) => ({
  width: "100px !important",
  height: "97px !important",
}));
const Imges = styled(Image)(({ theme }) => ({
  width: "100px !important",
  height: "120px !important",
}));
const Imgs = styled(Image)(({ theme }) => ({
  width: "110px !important",
  height: "97px !important",
}));

export default function OurPartners() {
  const locales = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("vosinterlocuteurs");
  const partners = [
    {
      img: Logo1,
    },
    {
      img: Logo2,
    },
    {
      img: Logo3,
    },
    {
      img: Logo4,
    },
  ];
  const supported = [
    {
      img: Logo7,
    },
    {
      img: Logo8,
    },
    {
      img: Logo9,
    },
    // {
    //   img: Logo5,
    // },
    // {
    //   img: Logo6,
    // },
  ];
  const data = [
    {
      count: Findimg1,
      title: "cybermalveillance.gouv.fr",
      key: 1,
      item: ["particulier", "TPE", "ASSOCIATION"],
      button: "Cybermalveillance.gouv.fr",
      link: "https://www.cybermalveillance.gouv.fr/",
    },
    {
      count: Findimg2,
      title: "CSIRT-ATLANTIC",
      key: 2,
      item: [
        "PME",
        "ETI",
        "Collectivité locale",
        "Etablissement public",
        "ASSOCIATION",
      ],
      button: "declarer un incident",
      link: `/${locales}/alertreports/HandleFirstForm`,
    },
    {
      count: Findimg3,
      title: "CERT-FR",
      key: 3,
      item: [
        "OPÉRATEURS RÉGULÉS",
        " OPERATEURS REGULIERS",
      ],
      button: "cyber.gouv.fr)",
      link: "https://www.cert.ssi.gouv.fr/",
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

  useEffect(() => {
    if (search == "true") {
      document
        .getElementById("vosinterlocuteurs")
        .scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
    }
  }, []);

  return (
    <Box sx={{ padding: "0 16px", pb: 5 }} id="vosinterlocuteurs">
      <Box mt={20}>
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
                      backgroundColor: !match ? "#D24D58" : "",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      // height: "750px !important",
                      borderRight: "1px solid rgba(217, 217, 217, 0.2)",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "rgba(210, 77, 88, 0.2)",
                        padding: 5,
                        display: "flex",
                        justifyContent: "space-between",
                        height: "100%",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          display: "flex",
                          justifyContent: "center",
                          fontSize: { lg: "22px", md: "18px" },
                          color: "#FFFFFF",
                          textTransform: "uppercase",
                        }}
                      >
                        {ele?.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 3,
                        }}
                      >
                        {idxx === 0 && (
                          <Imges
                            src={ele?.count}
                            alt=""
                            width={900}
                            height={900}
                            sx={{
                              width: {
                                xs: "150px !important",
                                md: "200px !important",
                              },
                              height: {
                                xs: "100px !important",
                                md: "200px !important",
                              },
                            }}
                          />
                        )}
                        {idxx !== 0 && (
                          <Imges
                            src={ele?.count}
                            alt=""
                            width={900}
                            height={900}
                            sx={{
                              width: {
                                xs: "150px !important",
                                md: "120px !important",
                              },
                              height: {
                                xs: "100px !important",
                                md: "200px !important",
                              },
                            }}
                          />
                        )}
                      </Box>
                      <Box sx={{ height: "400px !important", pt: 10 }}>
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
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            const link = document.createElement("a");
                            link.href = `${ele?.link}`;
                            link.setAttribute("target", "_blank");
                            document.body.appendChild(link);
                            link.click();
                            link.remove();
                          }}
                          variant="outlined"
                          endIcon={
                            <ArrowForwardIcon
                              sx={{
                                backgroundColor: "#FFFFFF",
                                borderRadius: "50%",
                                width: { md: "50px", xs: "40px" },
                                height: { md: "50px", xs: "40px" },
                                padding: 1.7,
                                marginRight: -2,
                                color: "red",
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
                                  animation:
                                    "move-left 0.3s ease-in-out 0s 1 normal forwards",
                                },
                              }}
                            />
                          }
                          sx={{
                            color: "#FFFFFF",
                            border: "1px solid #FFFFFF",
                            borderRadius: "61px",
                            padding: "8px 30px",
                            fontSize: "12px",
                            fontWeight: 600,
                            background: "rgba(255, 255, 255, 0.1)",
                            ":hover": {
                              borderColor: "#8E9BBF",
                              border: "1px solid rgba(255, 255, 255, 0.5)",
                            },
                            fontFamily: inter.style.fontFamily,
                            // "& .MuiButton-endIcon": {
                            //   marginLeft: 2.2,
                            // },
                          }}
                        >
                          {ele?.button}
                        </Button>
                        {/* <AddIcon
                          onClick={() => handleBackgroundChange(idxx)}
                          sx={{
                            color: match ? "#7DB1FF" : "#ffffff",
                            borderRadius: "50%",
                            backgroundImage: !match ? "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)" : "",
                            backgroundColor: match ? "#FFFFFF" : "white",
                            width: { lg: 45, md: 40, xs: 30 },
                            padding: 0.7,
                            height: { lg: 45, md: 40, xs: 30 },
                          }}
                        /> */}
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
                        justifyContent: { md: "space-between", xs: "unset" },
                        height: "100%",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          display: "flex",
                          justifyContent: "center",
                          textTransform: "uppercase",
                          fontSize: { lg: "22px", md: "18px" },
                          color: "#FFFFFF",
                        }}
                      >
                        {ele?.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 5,
                        }}
                      >
                        <Imges
                          src={ele?.count}
                          alt=""
                          width={900}
                          height={900}
                        />
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
                                  fontSize: { md: "18px", xs: "14px" },
                                  mt: 3,
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
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          mb: 15,
          mt: { md: 10, xs: 2 },
          display: "flex",
          overflowX: "scroll",
          gap: 1,
          justifyContent: { md: "space-around", xs: "unset" },
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            gap: { md: 1, xs: 1 },
            flexWrap: "nowrap",
          }}
        >
          <Typography
            sx={{
              color: "#222D55",
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "14px", xs: "12px" },
              maxWidth: "100px",
              textAlign: "end",
              mr: 1,
            }}
          >
            Partenaires majeurs
          </Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ bgcolor: "#000000", height: "90px" }}
          />
          {partners?.map((ele, idx) => {
            return (
              <Box
                key={idx}
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: { md: "start", xs: "center" },
                  mb: 2,
                  mr: { md: 2, xs: 0 },
                }}
              >
                <Img src={ele.img} width={900} height={900} alt="img" />
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
            gap: 1,
            flexWrap: "nowrap",
          }}
        >
          <Typography
            sx={{
              color: "#222D55",
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "14px", xs: "12px" },
              maxWidth: "50px",
              textAlign: "end",
              mr: 1,
            }}
          >
            Soutenu par
          </Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ bgcolor: "#000000", height: "90px" }}
          />
          {supported?.map((ele, idx) => {
            return (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { md: "start", xs: "center" },
                  mb: 2,
                  mr: { md: 2, xs: 0 },
                }}
              >
                <Imgs src={ele.img} width={1200} height={1200} alt="img" />
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
