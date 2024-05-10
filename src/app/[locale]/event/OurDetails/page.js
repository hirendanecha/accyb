"use client";
import React, { useEffect } from "react";
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

export default function Page() {
  const params = useParams();
  const { eventId } = params;
  const dispatch = useDispatch();
  const { getEvent } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getEventsById(eventId));
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
      <Container disableGutters maxWidth={"xl"} sx={{ padding: "0 16px" }}>
        <Grid container>
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
          <Grid item xs={12} md={6}>
            {data?.map((ele, idx) => {
              return (
                <>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", gap: 2 }}>
                    <Box>
                      <Img src={ele?.icon} />
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "16px",
                          color: "#222D55",
                          fontWeight: 600,
                        }}
                      >
                        {ele?.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "16px",
                          color: "#222D55",
                          fontWeight: 600,
                        }}
                      >
                        {ele?.time}
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
                </>
              );
            })}
            <Box sx={{ textAlign: "center" }}>
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
                  {getEvent?.access}
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{ __html: getEvent?.description }}
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
                  {/* {getEvent?.description} */}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
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
                    }}
                  />
                }
                sx={{
                  background: "transparent",
                  borderRadius: "61px",
                  padding: "8px 30px",
                  fontSize: { md: "12px", xs: "10px" },
                  mt: { md: 3, xs: 5 },
                  fontWeight: 600,
                  background: "#ffffff",
                  fontFamily: inter.style.fontFamily,
                  border: "1px solid rgba(34, 45, 85, 0.3)",
                  "&:hover": {
                    background: "#ffffff",
                    border: "1px solid rgba(34, 45, 85, 0.3)",
                  },
                }}
              >
                remplir le formulaire
              </Button>
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
                  padding: "50px 80px",
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
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box>
                    <svg width="33" height="24" viewBox="0 0 43 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_2564_3543)">
                        <path
                          d="M16.4969 24.7498L4.85938 13.1123L7.76875 10.2029L16.4969 18.931L35.2292 0.19873L38.1385 3.10811L16.4969 24.7498Z"
                          fill="#007A47"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_2564_3543"
                          x="0.859375"
                          y="0.19873"
                          width="41.2793"
                          height="32.5513"
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
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2564_3543" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2564_3543" result="shape" />
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
                    Lorem ispum dolores
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box>
                    <svg width="33" height="24" viewBox="0 0 43 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_2564_3543)">
                        <path
                          d="M16.4969 24.7498L4.85938 13.1123L7.76875 10.2029L16.4969 18.931L35.2292 0.19873L38.1385 3.10811L16.4969 24.7498Z"
                          fill="#007A47"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_2564_3543"
                          x="0.859375"
                          y="0.19873"
                          width="41.2793"
                          height="32.5513"
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
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2564_3543" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2564_3543" result="shape" />
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
                    Lorem ispum dolores
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box>
                    <svg width="33" height="24" viewBox="0 0 43 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_2564_3543)">
                        <path
                          d="M16.4969 24.7498L4.85938 13.1123L7.76875 10.2029L16.4969 18.931L35.2292 0.19873L38.1385 3.10811L16.4969 24.7498Z"
                          fill="#007A47"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_2564_3543"
                          x="0.859375"
                          y="0.19873"
                          width="41.2793"
                          height="32.5513"
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
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2564_3543" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2564_3543" result="shape" />
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
                    Lorem ispum dolores
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box>
                    <svg width="33" height="24" viewBox="0 0 43 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_2564_3543)">
                        <path
                          d="M16.4969 24.7498L4.85938 13.1123L7.76875 10.2029L16.4969 18.931L35.2292 0.19873L38.1385 3.10811L16.4969 24.7498Z"
                          fill="#007A47"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_2564_3543"
                          x="0.859375"
                          y="0.19873"
                          width="41.2793"
                          height="32.5513"
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
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2564_3543" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2564_3543" result="shape" />
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
                    Lorem ispum dolores
                  </Typography>
                </Box>
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
                  padding: "50px 80px",
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
                <Box
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
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2564_3559" result="shape" />
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
                    John doh
                  </Typography>
                </Box>
                <Box
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
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2564_3559" result="shape" />
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
                    Laurent Kiudre
                  </Typography>
                </Box>
                <Box
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
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2564_3559" result="shape" />
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
                    Jeanne Basset
                  </Typography>
                </Box>
                <Box
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
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2564_3559" result="shape" />
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
                    Aurélie Plebour
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={0.5}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
