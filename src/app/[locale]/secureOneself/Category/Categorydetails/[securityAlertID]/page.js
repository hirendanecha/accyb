"use client";
import { Box, Container, Grid, Typography, Divider, Button } from "@mui/material";
import React, { useEffect } from "react";
import { inter } from "../../../../../../fonts/fonts";
import ShareIcon from "@mui/icons-material/Share";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useDispatch, useSelector } from "react-redux";
import { getSecurityAlertsById } from "../../../../../redux/action/securityAlerts/securityAlertAction";
import { useParams } from "next/navigation";
import dayjs from "dayjs";
import { getAllNews } from "../../../../../redux/action/newsActions/newsAction";
import FileDownloadIcon from "@mui/icons-material/FileDownload";


export default function CategoryDetails() {
  const dispatch = useDispatch();
  const params = useParams();

  const { securityAlertID } = params;
  console.log(securityAlertID, "id");

  const { getSecurityAlert } = useSelector((state) => state.securityAlerts);
  console.log(getSecurityAlert, "securityAlerts");

  const { allNews } = useSelector((state) => state.news);
  console.log(allNews, "allNews");

  useEffect(() => {
    dispatch(getSecurityAlertsById(securityAlertID))
      .unwrap()
      .then((res) => {
        console.log(res, "res");
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch(getAllNews())
      .unwrap()
      .then((res) => {
        console.log(res, "News response");
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, []);

  // const category = [
  //   {
  //     data: securityAlerts,
  //     key: "Category 1",
  //   },
  //   {
  //     data: [
  //       {
  //         title: "Les fondamentaux pour se sécuriser",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  //         time: "13.01.2024",
  //         heading: "Lorem ipsum",
  //       },
  //       {
  //         title: "Connaitre la menace",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  //         time: "13.01.2024",
  //         heading: "Lorem ipsum",
  //       },
  //       {
  //         title:
  //           "Définir la gouvernance de sécurité numérique adaptée à son organisation",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  //         time: "13.01.2024",
  //         heading: "Lorem ipsum",
  //       },
  //       {
  //         title: "Intégrer la sécurité  dans les projets",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  //         time: "13.01.2024",
  //         heading: "Lorem ipsum",
  //       },
  //       {
  //         title: "Structurer ses mesures de sécurité",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  //         time: "13.01.2024",
  //         heading: "Lorem ipsum",
  //       },
  //     ],
  //     key: "Category 2",
  //   },
  // ];
  return (
    <Box sx={{ position: "relative" }}>
      <div style={{ position: "absolute", right: 0, top: { md: 100, xs: 0 } }}>
        <svg
          width="597"
          height="499"
          viewBox="0 0 597 499"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.25" filter="url(#filter0_f_1430_1889)">
            <ellipse
              cx="364.5"
              cy="134.5"
              rx="204.5"
              ry="204.5"
              transform="rotate(-180 364.5 134.5)"
              fill="#61F4C0"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1430_1889"
              x="0"
              y="-230"
              width="729"
              height="729"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="80"
                result="effect1_foregroundBlur_1430_1889"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          paddingTop: { md: 30, xs: 20 },
          position: "relative",
        }}
      >
        <Container disableGutters maxWidth={"xl"} sx={{ padding: "0 16px" }}>
          <Box sx={{ position: "fixed", bottom: 30, left: 30 }}>
            <Box
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              sx={{
                cursor: "pointer",
                backgroundColor: "#222D55",
                padding: 3,
                borderRadius: "50%",
                height: "46px",
                width: "46px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowUpwardIcon sx={{ color: "#fff" }} />
            </Box>
          </Box>
          <Grid container>
            <Grid item xs={12} md={3}></Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center" }}>
                {getSecurityAlert?.Heading?.map((heading) => {
                  return (
                    <>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontWeight: 400,
                          fontSize: {
                            md: "16px",
                            xs: "10px",
                            lineHeight: "50px",
                          },
                          color: "#222D55",
                        }}
                      >
                        {heading}
                      </Typography>
                    </>
                  );
                })}

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                    fontSize: { md: "70px", xs: "20px", lineHeight: "40px" },
                    color: "#222D55",
                    lineHeight: "90px",
                  }}
                >
                  {getSecurityAlert?.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    mt: 5,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 600,
                      fontSize: { md: "12px", xs: "10px" },
                      color: "#222D55",
                    }}
                  >
                    {dayjs(getSecurityAlert?.date).format("DD.MM.YYYY")}
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
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                    color: "#222D55",
                    mt: 5,
                    fontSize: {
                      md: "20px",
                      xs: "10px",
                      lineHeight: "32px",
                      textAlign: "start",
                    },
                  }}
                  dangerouslySetInnerHTML={{
                    __html: getSecurityAlert?.description,
                  }}
                >
                  {/* {getSecurityAlert.description} */}
                </Typography>
                <a href={getSecurityAlert?.document}>
                <Button
                variant="outlined"
                endIcon={
                  <FileDownloadIcon
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
                  border: "1px solid var(--Blue-ACCYB, rgba(34, 45, 85, 0.2))",
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    border: "none",
                  },
                }}
              >
                Score CVSS v3.1: 8.8
              </Button>
              </a>
                {/* <Box>
                  <Typography
                    sx={{
                      mt: 5,
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 400,
                      fontSize: { md: "70px", xs: "20px", lineHeight: "50px" },
                      color: "#222D55",
                      lineHeight: "90px",
                      textAlign: "start",
                    }}
                  >
                    Et harum quidem rerum facilis
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 400,
                      color: "#222D55",
                      mt: 3,
                      fontSize: {
                        md: "20px",
                        xs: "10px",
                        lineHeight: "32px",
                        textAlign: "start",
                      },
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras at risus vitae magna consectetur interdum vel vitae
                    sem. Pellentesque vel dolor sit amet orci condimentum
                    vehicula. Cras lobortis tincidunt metus nec malesuada.
                    Aliquam rutrum felis dui, et efficitur nulla congue ut.
                    Fusce sit amet venenatis urna. Sed in consectetur purus, nec
                    fermentum massa. Praesent erat odio, imperdiet quis
                    condimentum at, mollis eget purus. Donec vel aliquet tortor,
                    sit amet egestas nisi.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      mt: 5,
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 400,
                      fontSize: { md: "70px", xs: "20px", lineHeight: "50px" },
                      color: "#222D55",
                      lineHeight: "90px",
                      textAlign: "start",
                    }}
                  >
                    Et harum quidem rerum facilis
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 400,
                      color: "#222D55",
                      mt: 3,
                      fontSize: {
                        md: "20px",
                        xs: "10px",
                        lineHeight: "32px",
                        textAlign: "start",
                      },
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras at risus vitae magna consectetur interdum vel vitae
                    sem. Pellentesque vel dolor sit amet orci condimentum
                    vehicula. Cras lobortis tincidunt metus nec malesuada.
                    Aliquam rutrum felis dui, et efficitur nulla congue ut.
                    Fusce sit amet venenatis urna. Sed in consectetur purus, nec
                    fermentum massa. Praesent erat odio, imperdiet quis
                    condimentum at, mollis eget purus. Donec vel aliquet tortor,
                    sit amet egestas nisi.
                  </Typography>
                </Box> */}
              </Box>
            </Grid>
            <Grid item xs={12} md={3}></Grid>
          </Grid>
          <Box>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontWeight: 400,
                fontSize: { md: "39px", xs: "20px" },
                color: "#222D55",
                lineHeight: "90px",
                textAlign: "start",
                mt: 25,
              }}
            >
              Découvrez nos autres articles
            </Typography>
            <Divider
              variant="middle"
              sx={{
                display: { md: "block", xs: "none" },
                bgcolor: "#FFFFFF",
                mt: 0.5,
                marginLeft: 0,
                marginRight: 0,
                borderBottomWidth: "1px",
              }}
            />
          </Box>
          <Grid container mt={5} columnSpacing={2} mb={15} >
            {allNews?.slice(0, 6)?.map((data, idx) => {
              const DescriptionData = data?.description
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
                <Grid item xs={12} md={6} key={idx} >
                  <Box
                    sx={{
                      height: "100%",
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      padding: 5,
                      position: "relative",
                      borderTop:
                        idx !== 0 && idx !== 1
                          ? "none"
                          : "1px solid rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "12px", xs: "10px" },
                        color: "#222D55",
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}
                    >
                      {data?.source}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "24px", xs: "18px" },
                        color: "#222D55",
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 500,
                        mt: 2,
                      }}
                    >
                      {data?.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "14px", xs: "12px" },
                        lineHeight: "22px",
                        color: "#222D55",
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 500,
                        mt: 2,
                      }}
                      dangerouslySetInnerHTML={{ __html: DescriptionData }}
                    >
                      {/* {data?.description} */}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "14px", xs: "12px" },
                        lineHeight: "22px",
                        color: "#222D55",
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 500,
                        mt: 2,
                      }}
                    >
                      {dayjs(data?.publishedDate).format("DD.MM.YYYY")}
                    </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        left: 50,
                        bottom: -40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 2,
                        backgroundColor: "white",
                        zIndex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: "45px",
                          height: "45px",
                          borderRadius: "50%",
                          border: "1px solid rgba(0, 0, 0, 0.3)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <ArrowForwardIcon
                          sx={{
                            color: "#222D55",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
