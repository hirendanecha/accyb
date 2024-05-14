"use client";
import { Box, Button, CircularProgress, Container, Divider, Grid, IconButton, Typography, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
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
import { getAllEvents } from "../../../redux/action/eventActions/eventAction";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
const Img = styled(Image)(({ theme }) => ({
  width: "100% !important",
  height: "auto !important",
}));
const Imgs = styled(Image)(({ theme }) => ({
  width: "292px !important",
  height: "220px !important",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: "auto !important",
  },
}));

export default function OurEvents() {
  const { allEvents } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = useLocale();
  const initialized = useRef(false);
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
  useEffect(() => {
    if (initialized.current) {
      return;
    } else {
      initialized.current = true;
      dispatch(getAllEvents())
        .unwrap()
        .then((res) => {
          // console.log(res);
        });
    }
  }, []);

  useEffect(() => {}, []);
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
          {allEvents?.events?.length > 0 ? (
            <>
              {allEvents?.events?.map((ele, idx) => {
                const data = ele?.description
                  .split("\n")
                  .slice(0, 4)
                  .map((line, index) => {
                    if (index === 0) {
                      return line.substring(0, 150) + "...";
                    } else {
                      return line;
                    }
                  })
                  .join("\n");
                return (
                  <>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      key={idx}
                      sx={{ cursor: "pointer" }}
                      onClick={() => router.push(`/${locale}/event/${ele?._id}`)}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: 3,
                          flexDirection: { lg: "row", md: "column", xs: "column" },
                        }}
                      >
                        <Box>
                          <Imgs
                            src={ele?.pictureLink}
                            width={295}
                            height={220}
                            alt="image1"
                            sx={{
                              borderRadius: "10px",
                            }}
                          />
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
                            Actualité
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
                            {ele?.title}
                          </Typography>
                          <Typography
                            dangerouslySetInnerHTML={{ __html: data }}
                            mt={1}
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              color: "#222D55",
                              fontSize: "14px",
                              maxWidth: "350px",
                            }}
                          >
                            {/* {ele?.description} */}
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
                                  {dayjs(ele?.startDate).format("DD.MM.YYYY")}
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
