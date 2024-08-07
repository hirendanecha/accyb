"use client";
import React, { useEffect, useRef } from "react";
import { Box, Container, Grid, Typography, Divider, styled, Button } from "@mui/material";
import { inter } from "../../../../fonts/fonts";
import Image from "next/image";
import E1 from "../../../../Icons/clarity_event.svg";
import E2 from "../../../../Icons/teenyicons_pin.svg";
import E3 from "../../../../Icons/person.svg";
import E4 from "../../../../Icons/euro.svg";
import E5 from "../../../../Icons/home.svg";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getEventsById } from "../../../redux/action/eventActions/eventAction";
import { daysToWeeks } from "date-fns";
import dayjs from "dayjs";

const Img = styled(Image)(({ theme }) => ({
  borderRadius: "10px",
  width: "30px !important",
  height: "auto !important",
}));

const data = [
  {
    icon: E1,
    title: "mardi 27 février ",
    time: "de 09:00 à 17:00",
  },
  {
    icon: E2,
    title: "23 Rue Lardenoy - ",
    time: " 97109 BASSE-TERRE",
  },
  {
    icon: E3,
    title: "Public visé ",
    time: "Lorem isum",
  },
  {
    icon: E4,
    title: "Gratuit / ",
    time: "payant",
  },
  {
    icon: E5,
    title: "Accès : Libre / ",
    time: "sur inscription",
  },
];

export default function Page({ getEvent }) {
  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Container disableGutters maxWidth={"xl"} sx={{ padding: "0 16px" }}>
        <Grid container>
          <Grid item xs={12} md={3} sx={{ position: "relative" }}>
            <Box sx={{ position: "fixed", bottom: 55,left:100 }}>
              <Box
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
                sx={{
                  backgroundColor: "#222D55",
                  padding: 3,
                  borderRadius: "50%",
                  height: "46px",
                  width: "46px",
                  display: { md: "flex", xs: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <ArrowUpwardIcon sx={{ color: "#fff" }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", gap: 2 }}>
              <Box>
                <Img src={E1} />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "16px", xs: "14px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  {dayjs(getEvent?.startDate).format("DD/MM/YYYY HH:mm")}
                  {"\n"} To {`\n`} {dayjs(getEvent?.endDate).format("DD/MM/YYYY HH:mm")}
                </Typography>
              </Box>
            </Box>
            <Divider
              variant="middle"
              sx={{
                bgcolor: "#222D55",
                mt: 2,
                mb: 2,
                opacity: 0.3,
                marginLeft: 0,
                marginRight: 0,
                borderBottomWidth: "1px",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", gap: 2 }}>
              <Box>
                <Img src={E2} />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "16px", xs: "14px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  {getEvent?.location || "-"}
                </Typography>
              </Box>
            </Box>
            <Divider
              variant="middle"
              sx={{
                bgcolor: "#222D55",
                mt: 2,
                mb: 2,
                opacity: 0.3,
                marginLeft: 0,
                marginRight: 0,
                borderBottomWidth: "1px",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", gap: 2 }}>
              <Box>
                <Img src={E3} />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "16px", xs: "14px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  {getEvent?.targetAudience[0]}
                </Typography>
              </Box>
            </Box>
            <Divider
              variant="middle"
              sx={{
                bgcolor: "#222D55",
                mt: 2,
                mb: 2,
                opacity: 0.3,
                marginLeft: 0,
                marginRight: 0,
                borderBottomWidth: "1px",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", gap: 2 }}>
              <Box>
                <Img src={E4} />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "16px", xs: "14px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  {getEvent?.eventType === "free" ? "Free" : "Gratuit" || "-"}
                </Typography>
              </Box>
            </Box>
            <Divider
              variant="middle"
              sx={{
                bgcolor: "#222D55",
                mt: 2,
                mb: 2,
                opacity: 0.3,
                marginLeft: 0,
                marginRight: 0,
                borderBottomWidth: "1px",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", gap: 2 }}>
              <Box>
                <Img src={E5} />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "16px", xs: "14px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  {getEvent?.access}
                </Typography>
              </Box>
            </Box>
            <Divider
              variant="middle"
              sx={{
                bgcolor: "#222D55",
                mt: 2,
                mb: 2,
                opacity: 0.3,
                marginLeft: 0,
                marginRight: 0,
                borderBottomWidth: "1px",
              }}
            />
            <Box sx={{ textAlign: "center" }}>
              <Box>
                {/* <Typography
                  sx={{
                    mt: 10,
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                    fontSize: { md: "40px", xs: "20px" },
                    color: "#222D55",
                    lineHeight: { md: "60px", xs: "30px" },
                    textAlign: "start",
                  }}
                >
                  {getEvent?.access}
                </Typography> */}
                <Typography
                  dangerouslySetInnerHTML={{ __html: getEvent?.description }}
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                    color: "#222D55",
                    mt: 3,
                    fontSize: {
                      md: "18px",
                      xs: "10px",
                      lineHeight: { md: "32px", xs: "40px" },
                      textAlign: "start",
                    },
                  }}
                >
                  {/* {getEvent?.description} */}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
           
            </Box>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item md={0.5}></Grid>
          <Grid item xs={12} md={5.25}>
            <Box
              sx={{
                backgroundColor: "#222D55",
                position: "relative",
                borderRadius: "20px 20px 20px 20px",
                overflow: "hidden",
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
                    boxShadow: "5px -5px 0 5px #222D55",
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
                    boxShadow: "5px -5px 0 5px #222D55",
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
              <Box
                sx={{
                  padding: { md: "50px 80px", xs: "10px 30px" },
                  mt: 10,
                  mb: 10,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    textAlign: "start",
                    fontSize: { lg: "39px", md: "30px", sm: "25px", xs: "18px" },
                    color: "#222D55",
                    background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Programme
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{ __html: getEvent?.programType }}
                  mt={1}
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#FFFFFF",
                    fontSize: "14px",
                    maxWidth: "350px",
                  }}
                >
                  {/* {ele?.description} */}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={0.5}></Grid>
          <Grid item xs={12} md={5.25}>
            <Box
              sx={{
                backgroundColor: "#222D55",
                position: "relative",
                borderRadius: "20px 20px 20px 20px",
                overflow: "hidden",
                mt: { md: 20, xs: 13 },
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
                    boxShadow: "5px -5px 0 5px #222D55",
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
                    boxShadow: "5px -5px 0 5px #222D55",
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
              <Box
                sx={{
                  padding: { md: "50px 80px", xs: "10px 30px" },
                  mt: 10,
                  mb: 10,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    textAlign: "start",
                    fontSize: { lg: "39px", md: "30px", sm: "25px", xs: "18px" },
                    color: "#222D55",
                    background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Les intervenants
                </Typography>
                {getEvent?.speakers?.map((ele, idx) => {
                  console.log(ele, "ele");
                  return (
                    <Box
                      key={idx}
                      sx={{
                        mt: 2,
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Box>
                        <svg width="33" height="24" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_d_2564_3559)">
                            <path
                              d="M17.9998 13.9998C21.6832 13.9998 24.6665 11.0165 24.6665 7.33317C24.6665 3.64984 21.6832 0.666504 17.9998 0.666504C14.3165 0.666504 11.3332 3.64984 11.3332 7.33317C11.3332 11.0165 14.3165 13.9998 17.9998 13.9998ZM17.9998 17.3332C13.5498 17.3332 4.6665 19.5665 4.6665 23.9998V27.3332H31.3332V23.9998C31.3332 19.5665 22.4498 17.3332 17.9998 17.3332Z"
                              fill="#007A47"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_2564_3559"
                              x="0.666504"
                              y="0.666504"
                              width="34.6665"
                              height="34.6665"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2564_3559" />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2564_3559"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          textAlign: "start",
                          fontSize: { lg: "22px", md: "18px", xs: "14px" },
                          color: "#ffffff",
                        }}
                      >
                        {ele}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Grid>
          <Grid item md={0.5}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
