"use client";
import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, Divider, styled } from "@mui/material";
import { inter } from "../../../../fonts/fonts";
import Image from "next/image";
import ClientMeeting from "../../../../../public/ClientMeeting.svg";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getNewsById } from "../../../redux/action/newsActions/newsAction";
import Event1 from "../../../../Icons/Event1.svg";
import Event2 from "../../../../Icons/Event2.svg";
import ShareIcon from "@mui/icons-material/Share";

import Image1 from "../../../../Icons/Image1.png";
import Image2 from "../../../../Icons/Image2.png";
import Image3 from "../../../../Icons/Image3.png";
const Img = styled(Image)(({ theme }) => ({
  borderRadius: "10px",
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
export default function Page() {
  const params = useParams();
  const { newsid } = params;
  const dispatch = useDispatch();
  const { getNews } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsById(newsid));
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Grid container padding={"0 20px"}>
          <Grid item xs={12} md={3} sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", top: "50%" }}>
              <Box
                sx={{
                  backgroundColor: "#222D55",
                  padding: 3,
                  borderRadius: "50%",
                  height: "46px",
                  width: "46px",
                  display: { md: "flex", xs: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowUpwardIcon sx={{ color: "#fff" }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: { md: 40, xs: 20 } }}>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <Typography
                  sx={{
                    mt: 5,
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                    fontSize: { md: "40px", xs: "20px" },
                    color: "#222D55",
                    lineHeight: { md: "60px", xs: "40px" },
                    textAlign: "start",
                  }}
                >
                  {getNews?.title}
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{ __html: getNews?.description }}
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                    color: "#222D55",
                    mt: { md: 3, xs: 1 },
                    fontSize: {
                      md: "20px",
                      xs: "12px",
                      lineHeight: { md: "32px", xs: "20px" },
                      textAlign: "start",
                    },
                  }}
                >
                  {/* {getNews?.description} */}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 600,
                    color: "#222D55",
                    mt: { md: 3, xs: 1 },
                    fontSize: {
                      md: "20px",
                      xs: "12px",
                      lineHeight: "32px",
                      textAlign: "start",
                    },
                  }}
                >
                  Source : {getNews?.source}
                </Typography>
              </Box>
            </Box>
            <Box mt={5}>
              <Img src={getNews?.attachment[0]} height={900} width={900} alt="img" />
            </Box>
          </Grid>
          <Container disableGutters maxWidth={"xl"}>
            <Typography sx={{ color: "#222D55", fontSize: { md: "39px", xs: "24px" }, mt: 10 }}>
              Découvrez nos autres articles
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
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
