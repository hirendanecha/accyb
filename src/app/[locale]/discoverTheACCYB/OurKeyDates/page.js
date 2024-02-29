"use client";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";
import Logo1 from "../../../../Icons/OurKeyDates/Image1.svg";
import Logo2 from "../../../../Icons/OurKeyDates/Image2.svg";
import Logo3 from "../../../../Icons/OurKeyDates/Image3.svg";
import Logo4 from "../../../../Icons/OurKeyDates/Image4.svg";
import Logo5 from "../../../../Icons/OurKeyDates/Image5.svg";
import Logo6 from "../../../../Icons/OurKeyDates/Image6.svg";
import Image from "next/image";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";

export default function OurKeyDates() {
  return (
    <Box
    // sx={{
    //   backgroundImage: "url('/Images/BackgroundImg2.svg')",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Box
          sx={{
            mt: { md: 20, xs: 5 },
            padding: "0 16px",
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontWeight: 400,
              fontSize: { md: "70px", xs: "40px", lineHeight: "50px" },
              color: "#222D55",
            }}
          >
            Nos dates clés
          </Typography>
        </Box>
      </Container>
      <Divider
        variant="middle"
        sx={{
          display: { md: "block", xs: "none" },
          bgcolor: "#222D55",
          mt: { md: 3, xs: 5 },
          opacity: "20%",
          borderBottomWidth: "1px",
          mb: 10,
        }}
      />
      <Container disableGutters maxWidth={"xl"} sx={{ padding: "0 16px" }}>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {" "}
          <Grid container>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", gap: 4 }}>
                <Box>
                  <svg
                    width="52"
                    height="230"
                    viewBox="0 0 52 230"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="25.5"
                      y1="230"
                      x2="25.5"
                      y2="80"
                      stroke="#007A47"
                    />
                    <circle cx="26" cy="26" r="25.5" stroke="#007A47" />
                    <circle cx="26" cy="26" r="4" fill="#007A47" />
                  </svg>
                </Box>
                <Box mt={-3}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "center",
                      mt: 0.5,
                      color: "#222D55",
                      width: "100px",
                      fontSize: "36px",
                      lineHeight: "38px",
                      color: "#007A47",
                      fontWeight: "300",
                      textTransform: "uppercase",
                    }}
                  >
                    04 juin 2021
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "center",
                      mt: 2,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    Délibération
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "center",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    de la Région
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "center",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    Guadeloupe
                  </Typography>
                  <Box mt={1}>
                    <Image src={Logo1} width={70} height={70} alt="logo1" />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", gap: 4 }}>
                <Box>
                  <svg
                    width="52"
                    height="230"
                    viewBox="0 0 52 230"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="25.5"
                      y1="230"
                      x2="25.5"
                      y2="80"
                      stroke="#007A47"
                    />
                    <circle cx="26" cy="26" r="25.5" stroke="#007A47" />
                    <circle cx="26" cy="26" r="4" fill="#007A47" />
                  </svg>
                </Box>
                <Box mt={-3}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "center",
                      mt: 0.5,
                      color: "#222D55",
                      width: "100px",
                      fontSize: "36px",
                      lineHeight: "38px",
                      color: "#007A47",
                      fontWeight: "300",
                      textTransform: "uppercase",
                    }}
                  >
                    24 AVRIL 2022
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 2,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    Délibération
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    de la Collectivité
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    territoriale
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    de Guyane
                  </Typography>
                  <Box mt={1}>
                    <Image src={Logo2} width={70} height={70} alt="logo1" />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", gap: 4 }}>
                <Box>
                  <svg
                    width="52"
                    height="230"
                    viewBox="0 0 52 230"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="25.5"
                      y1="230"
                      x2="25.5"
                      y2="80"
                      stroke="#007A47"
                    />
                    <circle cx="26" cy="26" r="25.5" stroke="#007A47" />
                    <circle cx="26" cy="26" r="4" fill="#007A47" />
                  </svg>
                </Box>
                <Box mt={-3}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      width: "100px",
                      fontSize: "36px",
                      lineHeight: "38px",
                      color: "#007A47",
                      fontWeight: "300",
                      textTransform: "uppercase",
                    }}
                  >
                    26 septembre 2022
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 2,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    Signature de la convention de
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    création du centre de
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    ressources cyber avec le SGDSN
                  </Typography>
                  <Box mt={1}>
                    <Image src={Logo3} width={70} height={70} alt="logo1" />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={2}>
              <svg
                width="227"
                height="45"
                viewBox="0 0 227 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H216.843L227 22.5L216.843 45H0L10.1566 22.5L0 0Z"
                  fill="#007A47"
                />
              </svg>
            </Grid>
            <Grid item xs={12} md={2}>
              <svg
                width="227"
                height="45"
                viewBox="0 0 227 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H216.843L227 22.5L216.843 45H0L10.1566 22.5L0 0Z"
                  fill="#007A47"
                />
              </svg>
            </Grid>
            <Grid item xs={12} md={2}>
              <svg
                width="227"
                height="45"
                viewBox="0 0 227 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H216.843L227 22.5L216.843 45H0L10.1566 22.5L0 0Z"
                  fill="#007A47"
                />
              </svg>
            </Grid>
            <Grid item xs={12} md={2}>
              <svg
                width="227"
                height="45"
                viewBox="0 0 227 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H216.843L227 22.5L216.843 45H0L10.1566 22.5L0 0Z"
                  fill="#007A47"
                />
              </svg>
            </Grid>
            <Grid item xs={12} md={2}>
              <svg
                width="227"
                height="45"
                viewBox="0 0 227 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H216.843L227 22.5L216.843 45H0L10.1566 22.5L0 0Z"
                  fill="#007A47"
                />
              </svg>
            </Grid>
            <Grid item xs={12} md={2}>
              <svg
                width="227"
                height="45"
                viewBox="0 0 227 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H216.843L227 22.5L216.843 45H0L10.1566 22.5L0 0Z"
                  fill="#007A47"
                />
              </svg>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", gap: 4, justifyContent: "end" }}>
                <Box>
                  <svg
                    style={{ rotate: "180deg" }}
                    width="52"
                    height="230"
                    viewBox="0 0 52 230"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="25.5"
                      y1="230"
                      x2="25.5"
                      y2="80"
                      stroke="#007A47"
                    />
                    <circle cx="26" cy="26" r="25.5" stroke="#007A47" />
                    <circle cx="26" cy="26" r="4" fill="#007A47" />
                  </svg>
                </Box>
                <Box>
                  <Box mt={1}>
                    <Image src={Logo4} width={70} height={70} alt="logo1" />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      width: "100px",
                      fontSize: "36px",
                      lineHeight: "38px",
                      color: "#007A47",
                      fontWeight: "300",
                      textTransform: "uppercase",
                    }}
                  >
                    04 février 2022
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 2,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    Délibération
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    de la Collectivité
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    d’Outre-Mer
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    de Saint-Barthélemy
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", gap: 4, justifyContent: "end" }}>
                <Box>
                  <svg
                    style={{ rotate: "180deg" }}
                    width="52"
                    height="230"
                    viewBox="0 0 52 230"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="25.5"
                      y1="230"
                      x2="25.5"
                      y2="80"
                      stroke="#007A47"
                    />
                    <circle cx="26" cy="26" r="25.5" stroke="#007A47" />
                    <circle cx="26" cy="26" r="4" fill="#007A47" />
                  </svg>
                </Box>
                <Box>
                  <Box mt={1}>
                    <Image src={Logo5} width={70} height={70} alt="logo1" />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      width: "100px",
                      fontSize: "36px",
                      lineHeight: "38px",
                      color: "#007A47",
                      fontWeight: "300",
                      textTransform: "uppercase",
                    }}
                  >
                    12 Juillet 2022
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 2,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    LOREM
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    IPSUM DOLORES
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    SIT DEUM
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", gap: 4, justifyContent: "end" }}>
                <Box>
                  <svg
                    style={{ rotate: "180deg" }}
                    width="52"
                    height="230"
                    viewBox="0 0 52 230"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="25.5"
                      y1="230"
                      x2="25.5"
                      y2="80"
                      stroke="#007A47"
                    />
                    <circle cx="26" cy="26" r="25.5" stroke="#007A47" />
                    <circle cx="26" cy="26" r="4" fill="#007A47" />
                  </svg>
                </Box>
                <Box>
                  <Box mt={1}>
                    <Image src={Logo6} width={70} height={70} alt="logo1" />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      width: "100px",
                      fontSize: "36px",
                      lineHeight: "38px",
                      color: "#007A47",
                      fontWeight: "300",
                      textTransform: "uppercase",
                    }}
                  >
                    11 MAI 2023
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 2,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    Délibération
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    de la Collectivité
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    d’Outre-Mer
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    de Saint-Martin
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          {" "}
          <Timeline position="alternate">
            <TimelineItem sx={{ mt: 5 }}>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  fontFamily: inter.style.fontFamily,
                  fontSize: { sm: "15px", xs: "14px" },
                }}
                color="#007A47"
              >
                04 juin 2021
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <Image src={Logo1} alt="logo1" width={100} height={100} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { sm: "15px", xs: "14px" },
                  }}
                  component="span"
                >
                  Délibération <br />
                  de la Région <br />
                  Guadeloupe
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem sx={{ mt: 5 }}>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  fontFamily: inter.style.fontFamily,
                  fontSize: { sm: "15px", xs: "14px" },
                }}
                color="#007A47"
              >
                24 AVRIL 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <Image src={Logo2} alt="logo2" width={100} height={100} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  fontFamily: inter.style.fontFamily,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { sm: "15px", xs: "14px" },
                  }}
                >
                  Délibération <br />
                  de la Collectivité <br />
                  territoriale <br />
                  de Guyane
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem sx={{ mt: 5 }}>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  fontFamily: inter.style.fontFamily,
                  fontSize: { sm: "15px", xs: "14px" },
                }}
                color="#007A47"
              >
                26 septembre 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <Image src={Logo3} alt="logo3" width={100} height={100} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { sm: "15px", xs: "14px" },
                  }}
                  component="span"
                >
                  Signature de la convention de <br />
                  création du centre de <br />
                  ressources cyber avec le SGDSN
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem sx={{ mt: 5 }}>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  fontFamily: inter.style.fontFamily,
                  fontSize: { sm: "15px", xs: "14px" },
                }}
                color="#007A47"
              >
                04 février 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <Image src={Logo4} alt="logo4" width={100} height={100} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  sx={{
                    fontSize: {
                      sm: "15px",
                      xs: "14px",
                      fontFamily: inter.style.fontFamily,
                    },
                  }}
                >
                  Délibération <br />
                  de la Collectivité <br />
                  d’Outre-Mer <br />
                  de Saint-Barthélemy
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem sx={{ mt: 5 }}>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  fontFamily: inter.style.fontFamily,
                  fontSize: { sm: "15px", xs: "14px" },
                }}
                color="#007A47"
              >
                12 Juillet 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <Image src={Logo5} alt="logo5" width={100} height={100} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { sm: "15px", xs: "14px" },
                  }}
                  ś
                >
                  LOREM <br />
                  IPSUM DOLORES <br />
                  SIT DEUM
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem sx={{ mt: 5 }}>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  fontFamily: inter.style.fontFamily,
                  fontSize: { sm: "15px", xs: "14px" },
                }}
                color="#007A47"
              >
                11 MAI 2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <Image src={Logo6} alt="logo6" width={100} height={100} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  sx={{
                    fontSize: { sm: "14px", xs: "15px" },
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  Délibération <br />
                  de la Collectivité <br />
                  d’Outre-Mer <br />
                  de Saint-Martin
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
}
