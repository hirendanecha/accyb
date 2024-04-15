import { Box, Grid, Rating, Stack, Typography, keyframes, styled } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import Personnes from "../../Icons/personnes.svg";
import Calque from "../../Icons/Cal.svg";
import Light from "../../Icons/Info.svg";
import Key from "../../Icons/Doc.svg";
import Dna from "../../Icons/Dna.svg";
import Bell from "../../Icons/Bell.svg";
import CountUp from "react-countup";
import { inter } from "../../fonts/fonts";
import { useTranslations } from "next-intl";

const Img = styled(Image)(({ theme }) => ({
  width: "34px !important",
  height: "auto !important",
}));

export default function InfoSlider() {
  const t = useTranslations("infoSlider");
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const upAnimation = keyframes`
  from {
    transform: translateY(-40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
  const infoslider = [
    {
      img: Dna,
      title: "85",
      description: t("slider5"),
    },
    {
      img: Calque,
      title: "73",
      description: t("slider2"),
    },
    {
      img: Key,
      title: "96",
      description: t("slider4"),
    },
    {
      img: Personnes,
      title: "175",
      description: t("slider1"),
    },
    {
      img: Light,
      title: "32",
      description: t("slider3"),
    },
    {
      img: Bell,
      title: "59",
      description: t("slider6"),
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flex: 1,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          flexWrap: "nowrap",
          gap: 3,
          animation: "350s slide infinite linear",
        }}
      >
        {infoslider?.map((ele, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                minWidth: { md: "450px", xs: "320px" },
                display: "flex",
                padding: 3,
                gap: 3,
                position: "relative",
                backgroundColor: "#222D55",
                alignItems: "center",
                // Other styles...
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                },
              }}
            >
              <Box
                sx={{
                  height: "98px",
                  width: "98px",
                  borderRadius: "50%",
                  backgroundColor: "#1B2341",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #8E9BBF",
                }}
              >
                <Img src={ele?.img} height={900} width={900} alt="img" />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "50px", md: "40px", xs: "35px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    display: "flex",
                    textAlign: "start",
                    // animation: `${
                    //   scrollPosition >= 500 ? upAnimation : ""
                    // } 2s ease-out`,
                  }}
                >
                  {scrollPosition >= 300 ? (
                    <CountUp
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                      start={0}
                      end={ele?.title}
                      duration={3}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {ele?.title}
                    </span>
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "16px", md: "15px", xs: "13px" },
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    display: "flex",
                    textAlign: "start",
                    maxWidth: "140px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {ele?.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
        {infoslider?.map((ele, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                minWidth: { md: "450px", xs: "320px" },
                display: "flex",
                padding: 3,
                gap: 3,
                position: "relative",
                backgroundColor: "#222D55",
                alignItems: "center",
                // Other styles...
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                },
              }}
            >
              <Box
                sx={{
                  height: "98px",
                  width: "98px",
                  borderRadius: "50%",
                  backgroundColor: "#1B2341",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #8E9BBF",
                }}
              >
                <Img src={ele?.img} height={900} width={900} alt="img" />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "50px", md: "40px", xs: "35px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    display: "flex",
                    textAlign: "start",
                    // animation: `${
                    //   scrollPosition >= 500 ? upAnimation : ""
                    // } 2s ease-out`,
                  }}
                >
                  {scrollPosition >= 300 ? (
                    <CountUp
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                      start={0}
                      end={ele?.title}
                      duration={3}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {ele?.title}
                    </span>
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "16px", md: "15px", xs: "13px" },
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    display: "flex",
                    textAlign: "start",
                    maxWidth: "140px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {ele?.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
        {infoslider?.map((ele, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                minWidth: { md: "450px", xs: "320px" },
                display: "flex",
                padding: 3,
                gap: 3,
                position: "relative",
                backgroundColor: "#222D55",
                alignItems: "center",
                // Other styles...
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                },
              }}
            >
              <Box
                sx={{
                  height: "98px",
                  width: "98px",
                  borderRadius: "50%",
                  backgroundColor: "#1B2341",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #8E9BBF",
                }}
              >
                <Img src={ele?.img} height={900} width={900} alt="img" />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "50px", md: "40px", xs: "35px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    display: "flex",
                    textAlign: "start",
                    // animation: `${
                    //   scrollPosition >= 500 ? upAnimation : ""
                    // } 2s ease-out`,
                  }}
                >
                  {scrollPosition >= 300 ? (
                    <CountUp
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                      start={0}
                      end={ele?.title}
                      duration={3}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {ele?.title}
                    </span>
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "16px", md: "15px", xs: "13px" },
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    display: "flex",
                    textAlign: "start",
                    maxWidth: "140px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {ele?.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
        {infoslider?.map((ele, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                minWidth: { md: "450px", xs: "320px" },
                display: "flex",
                padding: 3,
                gap: 3,
                position: "relative",
                backgroundColor: "#222D55",
                alignItems: "center",
                // Other styles...
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                },
              }}
            >
              <Box
                sx={{
                  height: "98px",
                  width: "98px",
                  borderRadius: "50%",
                  backgroundColor: "#1B2341",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #8E9BBF",
                }}
              >
                <Img src={ele?.img} height={900} width={900} alt="img" />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "50px", md: "40px", xs: "35px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    display: "flex",
                    textAlign: "start",
                    // animation: `${
                    //   scrollPosition >= 500 ? upAnimation : ""
                    // } 2s ease-out`,
                  }}
                >
                  {scrollPosition >= 300 ? (
                    <CountUp
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                      start={0}
                      end={ele?.title}
                      duration={3}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {ele?.title}
                    </span>
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "16px", md: "15px", xs: "13px" },
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    display: "flex",
                    textAlign: "start",
                    maxWidth: "140px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {ele?.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
        {infoslider?.map((ele, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                minWidth: { md: "450px", xs: "320px" },
                display: "flex",
                padding: 3,
                gap: 3,
                position: "relative",
                backgroundColor: "#222D55",
                alignItems: "center",
                // Other styles...
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                },
              }}
            >
              <Box
                sx={{
                  height: "98px",
                  width: "98px",
                  borderRadius: "50%",
                  backgroundColor: "#1B2341",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #8E9BBF",
                }}
              >
                <Img src={ele?.img} height={900} width={900} alt="img" />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "50px", md: "40px", xs: "35px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    display: "flex",
                    textAlign: "start",
                    // animation: `${
                    //   scrollPosition >= 500 ? upAnimation : ""
                    // } 2s ease-out`,
                  }}
                >
                  {scrollPosition >= 300 ? (
                    <CountUp
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                      start={0}
                      end={ele?.title}
                      duration={3}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {ele?.title}
                    </span>
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "16px", md: "15px", xs: "13px" },
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    display: "flex",
                    textAlign: "start",
                    maxWidth: "140px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {ele?.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
        {infoslider?.map((ele, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                minWidth: { md: "450px", xs: "320px" },
                display: "flex",
                padding: 3,
                gap: 3,
                position: "relative",
                backgroundColor: "#222D55",
                alignItems: "center",
                // Other styles...
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                },
              }}
            >
              <Box
                sx={{
                  height: "98px",
                  width: "98px",
                  borderRadius: "50%",
                  backgroundColor: "#1B2341",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #8E9BBF",
                }}
              >
                <Img src={ele?.img} height={900} width={900} alt="img" />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "50px", md: "40px", xs: "35px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    display: "flex",
                    textAlign: "start",
                    // animation: `${
                    //   scrollPosition >= 500 ? upAnimation : ""
                    // } 2s ease-out`,
                  }}
                >
                  {scrollPosition >= 300 ? (
                    <CountUp
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                      start={0}
                      end={ele?.title}
                      duration={3}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {ele?.title}
                    </span>
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "16px", md: "15px", xs: "13px" },
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    display: "flex",
                    textAlign: "start",
                    maxWidth: "140px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {ele?.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
        {infoslider?.map((ele, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                minWidth: { md: "450px", xs: "320px" },
                display: "flex",
                padding: 3,
                gap: 3,
                position: "relative",
                backgroundColor: "#222D55",
                alignItems: "center",
                // Other styles...
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                },
              }}
            >
              <Box
                sx={{
                  height: "98px",
                  width: "98px",
                  borderRadius: "50%",
                  backgroundColor: "#1B2341",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #8E9BBF",
                }}
              >
                <Img src={ele?.img} height={900} width={900} alt="img" />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "50px", md: "40px", xs: "35px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    display: "flex",
                    textAlign: "start",
                    // animation: `${
                    //   scrollPosition >= 500 ? upAnimation : ""
                    // } 2s ease-out`,
                  }}
                >
                  {scrollPosition >= 300 ? (
                    <CountUp
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                      start={0}
                      end={ele?.title}
                      duration={3}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {ele?.title}
                    </span>
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "16px", md: "15px", xs: "13px" },
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    display: "flex",
                    textAlign: "start",
                    maxWidth: "140px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {ele?.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
        {infoslider?.map((ele, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                minWidth: { md: "450px", xs: "320px" },
                display: "flex",
                padding: 3,
                gap: 3,
                position: "relative",
                backgroundColor: "#222D55",
                alignItems: "center",
                // Other styles...
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                },
              }}
            >
              <Box
                sx={{
                  height: "98px",
                  width: "98px",
                  borderRadius: "50%",
                  backgroundColor: "#1B2341",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #8E9BBF",
                }}
              >
                <Img src={ele?.img} height={900} width={900} alt="img" />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "50px", md: "40px", xs: "35px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    display: "flex",
                    textAlign: "start",
                    // animation: `${
                    //   scrollPosition >= 500 ? upAnimation : ""
                    // } 2s ease-out`,
                  }}
                >
                  {scrollPosition >= 300 ? (
                    <CountUp
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                      start={0}
                      end={ele?.title}
                      duration={3}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {ele?.title}
                    </span>
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "16px", md: "15px", xs: "13px" },
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    display: "flex",
                    textAlign: "start",
                    maxWidth: "140px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {ele?.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
        {infoslider?.map((ele, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                minWidth: { md: "450px", xs: "320px" },
                display: "flex",
                padding: 3,
                gap: 3,
                position: "relative",
                backgroundColor: "#222D55",
                alignItems: "center",
                // Other styles...
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                },
              }}
            >
              <Box
                sx={{
                  height: "98px",
                  width: "98px",
                  borderRadius: "50%",
                  backgroundColor: "#1B2341",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #8E9BBF",
                }}
              >
                <Img src={ele?.img} height={900} width={900} alt="img" />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "50px", md: "40px", xs: "35px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    display: "flex",
                    textAlign: "start",
                    // animation: `${
                    //   scrollPosition >= 500 ? upAnimation : ""
                    // } 2s ease-out`,
                  }}
                >
                  {scrollPosition >= 300 ? (
                    <CountUp
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                      start={0}
                      end={ele?.title}
                      duration={3}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {ele?.title}
                    </span>
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "16px", md: "15px", xs: "13px" },
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    display: "flex",
                    textAlign: "start",
                    maxWidth: "140px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {ele?.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
        {infoslider?.map((ele, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                minWidth: { md: "450px", xs: "320px" },
                display: "flex",
                padding: 3,
                gap: 3,
                position: "relative",
                backgroundColor: "#222D55",
                alignItems: "center",
                // Other styles...
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                },
              }}
            >
              <Box
                sx={{
                  height: "98px",
                  width: "98px",
                  borderRadius: "50%",
                  backgroundColor: "#1B2341",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #8E9BBF",
                }}
              >
                <Img src={ele?.img} height={900} width={900} alt="img" />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "50px", md: "40px", xs: "35px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    display: "flex",
                    textAlign: "start",
                    // animation: `${
                    //   scrollPosition >= 500 ? upAnimation : ""
                    // } 2s ease-out`,
                  }}
                >
                  {scrollPosition >= 300 ? (
                    <CountUp
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                      start={0}
                      end={ele?.title}
                      duration={3}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {ele?.title}
                    </span>
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "16px", md: "15px", xs: "13px" },
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    display: "flex",
                    textAlign: "start",
                    maxWidth: "140px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {ele?.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
        {infoslider?.map((ele, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                minWidth: { md: "450px", xs: "320px" },
                display: "flex",
                padding: 3,
                gap: 3,
                position: "relative",
                backgroundColor: "#222D55",
                alignItems: "center",
                // Other styles...
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                },
              }}
            >
              <Box
                sx={{
                  height: "98px",
                  width: "98px",
                  borderRadius: "50%",
                  backgroundColor: "#1B2341",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #8E9BBF",
                }}
              >
                <Img src={ele?.img} height={900} width={900} alt="img" />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "50px", md: "40px", xs: "35px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    display: "flex",
                    textAlign: "start",
                    // animation: `${
                    //   scrollPosition >= 500 ? upAnimation : ""
                    // } 2s ease-out`,
                  }}
                >
                  {scrollPosition >= 300 ? (
                    <CountUp
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                      start={0}
                      end={ele?.title}
                      duration={3}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {ele?.title}
                    </span>
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "16px", md: "15px", xs: "13px" },
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    display: "flex",
                    textAlign: "start",
                    maxWidth: "140px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {ele?.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
        {infoslider?.map((ele, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                minWidth: { md: "450px", xs: "320px" },
                display: "flex",
                padding: 3,
                gap: 3,
                position: "relative",
                backgroundColor: "#222D55",
                alignItems: "center",
                // Other styles...
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                },
              }}
            >
              <Box
                sx={{
                  height: "98px",
                  width: "98px",
                  borderRadius: "50%",
                  backgroundColor: "#1B2341",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #8E9BBF",
                }}
              >
                <Img src={ele?.img} height={900} width={900} alt="img" />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "50px", md: "40px", xs: "35px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    display: "flex",
                    textAlign: "start",
                    // animation: `${
                    //   scrollPosition >= 500 ? upAnimation : ""
                    // } 2s ease-out`,
                  }}
                >
                  {scrollPosition >= 300 ? (
                    <CountUp
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                      start={0}
                      end={ele?.title}
                      duration={3}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {ele?.title}
                    </span>
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "16px", md: "15px", xs: "13px" },
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    display: "flex",
                    textAlign: "start",
                    maxWidth: "140px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {ele?.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
        {infoslider?.map((ele, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                minWidth: { md: "450px", xs: "320px" },
                display: "flex",
                padding: 3,
                gap: 3,
                position: "relative",
                backgroundColor: "#222D55",
                alignItems: "center",
                // Other styles...
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                },
              }}
            >
              <Box
                sx={{
                  height: "98px",
                  width: "98px",
                  borderRadius: "50%",
                  backgroundColor: "#1B2341",
                  padding: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #8E9BBF",
                }}
              >
                <Img src={ele?.img} height={900} width={900} alt="img" />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { lg: "50px", md: "40px", xs: "35px" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    display: "flex",
                    textAlign: "start",
                    // animation: `${
                    //   scrollPosition >= 500 ? upAnimation : ""
                    // } 2s ease-out`,
                  }}
                >
                  {scrollPosition >= 300 ? (
                    <CountUp
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                      start={0}
                      end={ele?.title}
                      duration={3}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {ele?.title}
                    </span>
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "16px", md: "15px", xs: "13px" },
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    display: "flex",
                    textAlign: "start",
                    maxWidth: "140px",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {ele?.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
