"use client";
import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../../../Icons/Discover/Img1.svg";
import Img2 from "../../../../Icons/Discover/Img2.svg";
import Img3 from "../../../../Icons/Discover/Img3.svg";
import Img4 from "../../../../Icons/Discover/Img4.svg";
import Img5 from "../../../../Icons/Discover/Img5.svg";
import Img6 from "../../../../Icons/Discover/Img6.svg";
import Img7 from "../../../../Icons/Discover/Img7.svg";
import Img8 from "../../../../Icons/Discover/Alerte1.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import dayjs from "dayjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import { useAnimation } from "framer-motion";
import { inter } from "../../../../fonts/fonts";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { getAllSecurityAlerts } from "../../../redux/action/securityAlerts/securityAlertAction";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";

const Img = styled(Image)(({ theme }) => ({
  width: "45px !important",
  height: "auto !important",
  [theme.breakpoints.down("lg")]: {
    width: "30px !important",
    height: "auto !important",
  },
}));
export default function OurMission() {
  const router = useRouter();
  const locales = useLocale();
  const controls = useAnimation();
  const searchParams = useSearchParams();
  const search = searchParams.get("services");
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const { allSecurityAlerts } = useSelector((state) => state.securityAlerts);
  // const allSecurityAlerts = useSelector((state) => {console.log(state,'state');});
  console.log(loading, "loading");
  console.log(allSecurityAlerts, "allSecurityAlerts");

  useEffect(() => {
    dispatch(getAllSecurityAlerts())
      .unwrap()
      .then((res) => {
        console.log(res);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (search == "true") {
      document.getElementById("services").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [isVisible, controls]);
  const activites = [
    {
      img: Img8,
      title: "Exercice de cyber-crise",
    },
    {
      img: Img1,
      title: "Réception des incidents",
    },
    {
      img: Img2,
      title: "Évalutation des incidents",
    },
    {
      img: Img3,
      title: "Traitement des incidents",
    },
    {
      img: Img4,
      title: "Analyse des incidents",
    },
    {
      img: Img5,
      title: "Appui à la réponse à incident",
    },
    {
      img: Img6,
      title: "Coordination & coopération",
    },
    {
      img: Img7,
      title: "Information des bénéficiaires",
    },
  ];
  const SecurityAlertsData = [
    {
      time: "11/01/2024",
      title: "CERTFR-2024-ALE-001",
      description:
        "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
      status: "Alerte en cours",
    },
    {
      time: "09/02/2024",
      title: "CERTFR-2024-ALE-004",
      description: "[MàJ] Vulnérabilité dans Fortinet FortiOS",
      status: "Alerte en cours",
    },
    {
      time: "15/02/2024",
      title: "CERTFR-2024-ALE-005",
      description: "Vulnérabilité dans Microsoft Outlook",
      status: "Alerte en cours",
    },
    {
      time: "05/02/2024",
      title: "CERTFR-2024-ALE-003",
      description: "Incident affectant les solutions AnyDesk",
      status: "Alerte en cours",
    },
    {
      time: "12/01/2024",
      title: "CERTFR-2024-ALE-002",
      description: "[MàJ] Multiples Vulnérabilités dans GitLab",
      status: "Alerte en cours",
    },
  ];
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Handle the uploaded file, e.g., upload it to a server or process it.
  };
  return (
    <>
      <head>
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/${locales}/secureOneself/Category/Categorydetails/${ele?._id}`}
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image" content={ele?.document} />
      </head>
      <Box sx={{ position: "relative" }} id="services">
        <Container disableGutters maxWidth={"xl"}>
          <Box
            ref={ref}
            sx={{
              padding: "0 16px",
              mt: { md: 20, xs: 10 },
            }}
          >
            {/* <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}> */}
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontWeight: 400,
                fontSize: { md: "70px", xs: "40px", lineHeight: "50px" },
                color: "#222D55",
              }}
            >
              Nos services
            </Typography>
          </Box>
        </Container>

        {/* </motion.div> */}
        <Divider
          variant="middle"
          sx={{
            bgcolor: "#222D55",
            mt: { md: 3, xs: 5 },
            opacity: "20%",
            borderBottomWidth: "1px",
            mb: 10,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 100,
            display: { md: "block", xs: "none" },
          }}
        >
          <svg
            width="467"
            height="815"
            viewBox="0 0 467 815"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.1" filter="url(#filter0_f_1856_4145)">
              <path
                d="M-211 407.576C-211 258.141 -89.8588 137 59.5761 137C209.011 137 330.152 258.141 330.152 407.576C330.152 557.011 209.011 678.152 59.576 678.152C-89.8589 678.152 -211 557.011 -211 407.576Z"
                fill="#FF274E"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1856_4145"
                x="-347.353"
                y="0.646835"
                width="813.858"
                height="813.858"
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
                  stdDeviation="68.1766"
                  result="effect1_foregroundBlur_1856_4145"
                />
              </filter>
            </defs>
          </svg>
        </Box>
        <Container disableGutters maxWidth={"xl"}>
          <Grid
            container
            mt={5}
            columnSpacing={2}
            rowSpacing={2}
            sx={{ padding: "0 16px" }}
          >
            {activites?.map((ele, index) => {
              return (
                <Grid item xs={12} lg={4} md={6} mt={2} key={index}>
                  <Box
                    sx={{
                      // display: "flex",
                      // padding: { lg: 5, md: 3, sm: 5, xs: 3 },
                      // backgroundColor: "transparent",
                      // // border:
                      // //   index % 2 ? "2px solid #7DB1FF" : "2px solid #97E6FF",
                      // border: "2px solid transparent",
                      // borderImageSlice: 1,
                      // borderImage:
                      //   "linear-gradient(to right, #7DB1FF, #97E6FF) 1",
                      // position: "relative",
                      // borderRadius: "20px",
                      // // overflow: "hidden",
                      // height: "100%",
                      position: "relative",
                      padding: { lg: 5, md: 3, sm: 5, xs: 3 },
                      height: "100%",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        borderRadius: "20px",
                        padding: "2px",
                        background:
                          "linear-gradient(46.93deg, #BE0011 -9.61%, #BE0011 78.14%)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        width: "50px",
                        height: "50px",
                        bgcolor: "#ffffff",
                        borderBottomLeftRadius: "1rem",
                        // borderWidth: "2px",
                        // borderColor: "#7DB1FF",
                        // borderStyle: "solid",
                        zIndex: 5,
                        "::before": {
                          content: "''",
                          position: "absolute",
                          width: "28px",
                          height: "28px",
                          top: 0,
                          left: "1px",
                          transform: "translateX(-100%)",
                          borderTopRightRadius: "16px",
                          border: "2px solid #BE0011",
                          borderBottomWidth: "0",
                          borderLeftWidth: "0",
                        },
                        "::after": {
                          content: "''",
                          position: "absolute",
                          width: "28px",
                          height: "28px",
                          bottom: "1px",
                          right: 0,
                          transform: "translateY(100%)",
                          borderTopRightRadius: "16px",
                          border: "2px solid #BE0011",
                          borderBottomWidth: "0",
                          borderLeftWidth: "0",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          content: "''",
                          position: "absolute",
                          bottom: "-1px",
                          left: "-1px",
                          width: "25px",
                          height: "25px",
                          border: "2px solid #BE0011",
                          borderTopWidth: "0",
                          borderRightWidth: "0",
                          borderBottomLeftRadius: "20px",
                        }}
                      />
                    </Box>
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
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        alignItems: "center",

                        height: "100%",
                        position: "relative",
                        zIndex: 1,
                        gap: { lg: 1.5, md: 2, sm: 3, xs: 3 },
                      }}
                    >
                      <Grid item xs={3} sm={4}>
                        <Box
                          sx={{
                            borderRadius: "50%",
                            backgroundColor: "#BE0011",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "1px solid #8E9BBF",
                            height: { lg: "119.82px", sm: "100px", xs: "80px" },
                            width: { lg: "119.82px", sm: "100px", xs: "80px" },
                          }}
                        >
                          <Img
                            src={ele?.img}
                            height={900}
                            width={900}
                            alt="img"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={8} sm={7}>
                        <Box ref={ref}>
                          {/* <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                      > */}
                          <Typography
                            sx={{
                              fontSize: { lg: "25px", md: "20px", xs: "18px" },
                              fontWeight: 400,
                              lineHeight: { md: "27px", xs: "22px" },
                              fontFamily: inter.style.fontFamily,
                              color: "#222D55",
                              display: "flex",
                              textAlign: "start",
                              maxWidth: { lg: "350px", xs: "250px" },
                            }}
                          >
                            {ele?.title}
                          </Typography>
                          {/* </motion.div> */}
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Container disableGutters maxWidth={"xl"}>
          <Box
            sx={{
              padding: "0 16px",
              display: { md: "flex !important", xs: "block !important" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
            mt={{
              md: 20,
              xs: 5,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { md: "70px", xs: "40px", lineHeight: "50px" },
                  color: "#222D55",
                }}
              >
                Alertes de sécurité
              </Typography>
              {/* <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontWeight: 400,
                mt: { md: 3, xs: 1 },
                fontSize: { md: "14px", xs: "10px", lineHeight: "20px" },
                color: "#222D55",
              }}
            >
              Les alertes sont des documents destinés à prévenir d'un danger
              immédiat
            </Typography> */}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: { md: "unset", xs: "center" },
              }}
            >
              <Button
                onClick={() => router.push(`/${locales}/alerteslist`)}
                variant="outlined"
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      backgroundColor: "#7DB1FF",
                      background:
                        "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
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
                        animation:
                          "move-left 0.3s ease-in-out 0s 1 normal forwards",
                      },
                    }}
                  />
                }
                sx={{
                  color: "#fff",
                  border: "1px solid #222D55",
                  borderRadius: "61px",
                  padding: "8px 30px",
                  fontSize: { md: "12px", xs: "10px" },
                  mt: 3,
                  fontWeight: 600,
                  background: "#222D55",
                  fontFamily: inter.style.fontFamily,
                  "&:hover": {
                    backgroundColor: "transparent",
                    border: "1px solid #222D55",
                    color: "#222D55",
                  },
                }}
              >
                toutes les alertes
              </Button>
            </Box>
          </Box>
          <Divider
            variant="middle"
            sx={{
              bgcolor: "#222D55",
              mt: { md: 3, xs: 5 },
              opacity: "20%",
              borderBottomWidth: "1px",
              mb: 2,
            }}
          />
        </Container>

        <Container disableGutters maxWidth={"xl"}>
          <Grid
            container
            alignItems={"center"}
            rowSpacing={0.6}
            sx={{
              padding: "0 16px",
            }}
          >
            <Grid item md={1} sm={2} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 600,
                    // color: "#222D55",
                    textTransform: "uppercase",
                    color: "#222D55",
                  }}
                >
                  Date de publication
                </Typography>
                <Box
                  sx={{
                    display: {
                      lg: "none",
                      md: "none",
                      sm: "none",
                      xs: "flex",
                    },
                    gap: 1,
                  }}
                >
                  <Box>
                    <input
                      accept="application/pdf"
                      style={{ display: "none" }}
                      id="pdf-upload-button"
                      type="file"
                    />
                    <label htmlFor="pdf-share-button">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="21"
                          cy="21"
                          r="20.5962"
                          stroke="#222D55"
                          stroke-width="0.807692"
                        />
                        <path
                          d="M24.4328 28.9952C23.7878 28.9952 23.2395 28.7575 22.788 28.2821C22.3365 27.8067 22.1107 27.2295 22.1107 26.5503C22.1107 26.4553 22.1172 26.3566 22.1301 26.2545C22.143 26.1524 22.1623 26.0608 22.1881 25.9799L16.7312 22.6386C16.5118 22.8423 16.2667 23.0021 15.9958 23.1178C15.7249 23.2335 15.4411 23.2911 15.1444 23.2906C14.4993 23.2906 13.9511 23.0529 13.4995 22.5775C13.048 22.1021 12.8223 21.5248 12.8223 20.8457C12.8223 20.1666 13.048 19.5894 13.4995 19.114C13.9511 18.6386 14.4993 18.4009 15.1444 18.4009C15.4411 18.4009 15.7249 18.4588 15.9958 18.5745C16.2667 18.6902 16.5118 18.8497 16.7312 19.0528L22.1881 15.7116C22.1623 15.6301 22.143 15.5385 22.1301 15.4369C22.1172 15.3353 22.1107 15.2367 22.1107 15.1411C22.1107 14.462 22.3365 13.8847 22.788 13.4094C23.2395 12.934 23.7878 12.6963 24.4328 12.6963C25.0779 12.6963 25.6262 12.934 26.0777 13.4094C26.5292 13.8847 26.755 14.462 26.755 15.1411C26.755 15.8202 26.5292 16.3975 26.0777 16.8729C25.6262 17.3483 25.0779 17.586 24.4328 17.586C24.1361 17.586 23.8523 17.5284 23.5814 17.4132C23.3105 17.298 23.0654 17.1383 22.8461 16.934L17.3891 20.2753C17.4149 20.3568 17.4342 20.4486 17.4471 20.5507C17.46 20.6529 17.4665 20.7512 17.4665 20.8457C17.4665 20.9408 17.46 21.0394 17.4471 21.1416C17.4342 21.2437 17.4149 21.3352 17.3891 21.4162L22.8461 24.7575C23.0654 24.5537 23.3105 24.3943 23.5814 24.2791C23.8523 24.1639 24.1361 24.106 24.4328 24.1055C25.0779 24.1055 25.6262 24.3432 26.0777 24.8186C26.5292 25.294 26.755 25.8712 26.755 26.5503C26.755 27.2295 26.5292 27.8067 26.0777 28.2821C25.6262 28.7575 25.0779 28.9952 24.4328 28.9952Z"
                          fill="#222D55"
                        />
                      </svg>
                    </label>
                  </Box>
                  <Box>
                    <input
                      accept="application/pdf"
                      style={{ display: "none" }}
                      id="pdf-upload-button"
                      type="file"
                      onChange={handleFileUpload}
                    />
                    <label htmlFor="pdf-upload-button">
                      <svg
                        style={{ cursor: "pointer" }}
                        width="32"
                        height="32"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.1561 22.211C25.9431 22.001 25.4701 21.89 24.7501 21.88C24.1845 21.8806 23.6197 21.9221 23.0601 22.004C22.7841 21.845 22.4991 21.671 22.2761 21.462C21.6751 20.901 21.1731 20.122 20.8611 19.265C20.8811 19.185 20.8991 19.115 20.9151 19.043C20.9151 19.043 21.2541 17.12 21.1641 16.47C21.1574 16.407 21.1427 16.3452 21.1201 16.286L21.0911 16.21C20.9991 15.998 20.8181 15.773 20.5351 15.785L20.3641 15.78C20.0481 15.78 19.7911 15.941 19.7241 16.183C19.5191 16.94 19.7311 18.072 20.1141 19.538L20.0161 19.777C19.7411 20.447 19.3971 21.122 19.0931 21.717L19.0531 21.794C18.7331 22.42 18.4431 22.951 18.1801 23.401L17.9091 23.545C17.8891 23.555 17.4241 23.802 17.3151 23.868C16.3891 24.421 15.7761 25.048 15.6741 25.546C15.6421 25.705 15.6661 25.908 15.8301 26.002L16.0931 26.134C16.2037 26.1903 16.326 26.2197 16.4501 26.22C17.1091 26.22 17.8751 25.399 18.9301 23.558C20.1771 23.1549 21.4541 22.8513 22.7491 22.65C23.6751 23.171 24.8141 23.533 25.5321 23.533C25.6601 23.533 25.7701 23.521 25.8591 23.497C25.9908 23.465 26.1063 23.386 26.1841 23.275C26.3231 23.065 26.3521 22.776 26.3141 22.48C26.2902 22.376 26.2355 22.2815 26.1571 22.209L26.1561 22.211ZM16.3071 25.72C16.4271 25.391 16.9031 24.741 17.6071 24.164C17.6511 24.128 17.7601 24.026 17.8601 23.931C17.1241 25.105 16.6311 25.573 16.3071 25.719V25.72ZM20.4761 16.12C20.6881 16.12 20.8091 16.654 20.8191 17.155C20.8291 17.656 20.7121 18.008 20.5671 18.268C20.4471 17.883 20.3881 17.276 20.3881 16.879C20.3881 16.879 20.3791 16.12 20.4761 16.12ZM19.2321 22.961C19.3801 22.697 19.5331 22.418 19.6901 22.122C20.0731 21.398 20.3141 20.832 20.4941 20.367C20.8321 20.9934 21.2822 21.5523 21.8221 22.016C21.8871 22.071 21.9571 22.127 22.0291 22.182C20.9631 22.393 20.0431 22.649 19.2321 22.961ZM25.9521 22.901C25.8871 22.942 25.7011 22.965 25.5821 22.965C25.1961 22.965 24.7181 22.789 24.0491 22.501C24.3061 22.482 24.5421 22.472 24.7541 22.472C25.1411 22.472 25.2561 22.47 25.6341 22.567C26.0121 22.664 26.0171 22.86 25.9521 22.9V22.901Z"
                          fill="#222D55"
                        />
                        <path
                          d="M27.341 16.579C26.994 16.106 26.51 15.552 25.979 15.021C25.448 14.49 24.894 14.006 24.421 13.659C23.615 13.068 23.224 13 23 13H15.25C14.561 13 14 13.561 14 14.25V27.75C14 28.439 14.561 29 15.25 29H26.75C27.439 29 28 28.439 28 27.75V18C28 17.776 27.932 17.385 27.341 16.579ZM25.271 15.729C25.751 16.209 26.127 16.641 26.405 17H23.999V14.595C24.358 14.873 24.792 15.249 25.271 15.729ZM27 27.75C27 27.886 26.886 28 26.75 28H15.25C15.1839 27.9992 15.1208 27.9726 15.0741 27.9259C15.0274 27.8792 15.0008 27.8161 15 27.75V14.25C15 14.115 15.115 14 15.25 14H23V17.5C23 17.6326 23.0527 17.7598 23.1464 17.8536C23.2402 17.9473 23.3674 18 23.5 18H27V27.75Z"
                          fill="#222D55"
                        />
                        <circle
                          cx="21"
                          cy="21"
                          r="20.5962"
                          stroke="#222D55"
                          stroke-width="0.807692"
                        />
                      </svg>
                    </label>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={2} sm={3} xs={12}>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: { md: "center", sm: "start" },
                  fontFamily: inter.style.fontFamily,
                  textTransform: "uppercase",
                  color: "#222D55",
                }}
              >
                Référence
              </Typography>
            </Grid>
            <Grid
              item
              md={2}
              sm={2}
              xs={12}
              sx={{
                display: {
                  lg: "none",
                  md: "none",
                  sm: "none",
                  xs: "block",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "12px",
                  color: "#BE0011",
                  textTransform: "capitalize",
                  fontWeight: 600,
                }}
              >
                Descriptif
              </Typography>
            </Grid>
            <Grid item md={6} sm={4} xs={12}>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: inter.style.fontFamily,
                  maxWidth: "623px",
                  textTransform: "uppercase",
                  color: "#222D55",
                  fontWeight: 600,
                }}
              >
                Descriptif
              </Typography>
            </Grid>
            <Grid
              item
              md={2}
              sm={2}
              xs={12}
              sx={{
                display: {
                  lg: "block",
                  md: "block",
                  sm: "block",
                  xs: "none",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  color: "#222D55",
                  fontWeight: 600,
                }}
              >
                Type
              </Typography>
            </Grid>
            <Grid
              item
              md={1}
              sm={1}
              xs={12}
              sx={{
                display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                justifyContent: "space-around",
              }}
            >
              {/* <input
                    accept="application/pdf"
                    style={{ display: "none" }}
                    id="pdf-upload-button"
                    type="file"
                    onChange={handleFileUpload}
                  />
                  <a
                    href={''}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <label htmlFor="pdf-upload-button">
                      <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="21"
                          cy="21"
                          r="20.5962"
                          stroke="#222D55"
                          stroke-width="0.807692"
                        />
                        <path
                          d="M24.4328 28.9952C23.7878 28.9952 23.2395 28.7575 22.788 28.2821C22.3365 27.8067 22.1107 27.2295 22.1107 26.5503C22.1107 26.4553 22.1172 26.3566 22.1301 26.2545C22.143 26.1524 22.1623 26.0608 22.1881 25.9799L16.7312 22.6386C16.5118 22.8423 16.2667 23.0021 15.9958 23.1178C15.7249 23.2335 15.4411 23.2911 15.1444 23.2906C14.4993 23.2906 13.9511 23.0529 13.4995 22.5775C13.048 22.1021 12.8223 21.5248 12.8223 20.8457C12.8223 20.1666 13.048 19.5894 13.4995 19.114C13.9511 18.6386 14.4993 18.4009 15.1444 18.4009C15.4411 18.4009 15.7249 18.4588 15.9958 18.5745C16.2667 18.6902 16.5118 18.8497 16.7312 19.0528L22.1881 15.7116C22.1623 15.6301 22.143 15.5385 22.1301 15.4369C22.1172 15.3353 22.1107 15.2367 22.1107 15.1411C22.1107 14.462 22.3365 13.8847 22.788 13.4094C23.2395 12.934 23.7878 12.6963 24.4328 12.6963C25.0779 12.6963 25.6262 12.934 26.0777 13.4094C26.5292 13.8847 26.755 14.462 26.755 15.1411C26.755 15.8202 26.5292 16.3975 26.0777 16.8729C25.6262 17.3483 25.0779 17.586 24.4328 17.586C24.1361 17.586 23.8523 17.5284 23.5814 17.4132C23.3105 17.298 23.0654 17.1383 22.8461 16.934L17.3891 20.2753C17.4149 20.3568 17.4342 20.4486 17.4471 20.5507C17.46 20.6529 17.4665 20.7512 17.4665 20.8457C17.4665 20.9408 17.46 21.0394 17.4471 21.1416C17.4342 21.2437 17.4149 21.3352 17.3891 21.4162L22.8461 24.7575C23.0654 24.5537 23.3105 24.3943 23.5814 24.2791C23.8523 24.1639 24.1361 24.106 24.4328 24.1055C25.0779 24.1055 25.6262 24.3432 26.0777 24.8186C26.5292 25.294 26.755 25.8712 26.755 26.5503C26.755 27.2295 26.5292 27.8067 26.0777 28.2821C25.6262 28.7575 25.0779 28.9952 24.4328 28.9952Z"
                          fill="#222D55"
                        />
                      </svg>
                    </label>
                  </a>
                  

                  <a href={'  '} download>
                    <svg
                      style={{ cursor: "pointer" }}
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.1561 22.211C25.9431 22.001 25.4701 21.89 24.7501 21.88C24.1845 21.8806 23.6197 21.9221 23.0601 22.004C22.7841 21.845 22.4991 21.671 22.2761 21.462C21.6751 20.901 21.1731 20.122 20.8611 19.265C20.8811 19.185 20.8991 19.115 20.9151 19.043C20.9151 19.043 21.2541 17.12 21.1641 16.47C21.1574 16.407 21.1427 16.3452 21.1201 16.286L21.0911 16.21C20.9991 15.998 20.8181 15.773 20.5351 15.785L20.3641 15.78C20.0481 15.78 19.7911 15.941 19.7241 16.183C19.5191 16.94 19.7311 18.072 20.1141 19.538L20.0161 19.777C19.7411 20.447 19.3971 21.122 19.0931 21.717L19.0531 21.794C18.7331 22.42 18.4431 22.951 18.1801 23.401L17.9091 23.545C17.8891 23.555 17.4241 23.802 17.3151 23.868C16.3891 24.421 15.7761 25.048 15.6741 25.546C15.6421 25.705 15.6661 25.908 15.8301 26.002L16.0931 26.134C16.2037 26.1903 16.326 26.2197 16.4501 26.22C17.1091 26.22 17.8751 25.399 18.9301 23.558C20.1771 23.1549 21.4541 22.8513 22.7491 22.65C23.6751 23.171 24.8141 23.533 25.5321 23.533C25.6601 23.533 25.7701 23.521 25.8591 23.497C25.9908 23.465 26.1063 23.386 26.1841 23.275C26.3231 23.065 26.3521 22.776 26.3141 22.48C26.2902 22.376 26.2355 22.2815 26.1571 22.209L26.1561 22.211ZM16.3071 25.72C16.4271 25.391 16.9031 24.741 17.6071 24.164C17.6511 24.128 17.7601 24.026 17.8601 23.931C17.1241 25.105 16.6311 25.573 16.3071 25.719V25.72ZM20.4761 16.12C20.6881 16.12 20.8091 16.654 20.8191 17.155C20.8291 17.656 20.7121 18.008 20.5671 18.268C20.4471 17.883 20.3881 17.276 20.3881 16.879C20.3881 16.879 20.3791 16.12 20.4761 16.12ZM19.2321 22.961C19.3801 22.697 19.5331 22.418 19.6901 22.122C20.0731 21.398 20.3141 20.832 20.4941 20.367C20.8321 20.9934 21.2822 21.5523 21.8221 22.016C21.8871 22.071 21.9571 22.127 22.0291 22.182C20.9631 22.393 20.0431 22.649 19.2321 22.961ZM25.9521 22.901C25.8871 22.942 25.7011 22.965 25.5821 22.965C25.1961 22.965 24.7181 22.789 24.0491 22.501C24.3061 22.482 24.5421 22.472 24.7541 22.472C25.1411 22.472 25.2561 22.47 25.6341 22.567C26.0121 22.664 26.0171 22.86 25.9521 22.9V22.901Z"
                        fill="#222D55"
                      />
                      <path
                        d="M27.341 16.579C26.994 16.106 26.51 15.552 25.979 15.021C25.448 14.49 24.894 14.006 24.421 13.659C23.615 13.068 23.224 13 23 13H15.25C14.561 13 14 13.561 14 14.25V27.75C14 28.439 14.561 29 15.25 29H26.75C27.439 29 28 28.439 28 27.75V18C28 17.776 27.932 17.385 27.341 16.579ZM25.271 15.729C25.751 16.209 26.127 16.641 26.405 17H23.999V14.595C24.358 14.873 24.792 15.249 25.271 15.729ZM27 27.75C27 27.886 26.886 28 26.75 28H15.25C15.1839 27.9992 15.1208 27.9726 15.0741 27.9259C15.0274 27.8792 15.0008 27.8161 15 27.75V14.25C15 14.115 15.115 14 15.25 14H23V17.5C23 17.6326 23.0527 17.7598 23.1464 17.8536C23.2402 17.9473 23.3674 18 23.5 18H27V27.75Z"
                        fill="#222D55"
                      />
                      <circle
                        cx="21"
                        cy="21"
                        r="20.5962"
                        stroke="#222D55"
                        stroke-width="0.807692"
                      />
                    </svg>
                  </a>
                  <input
                    accept="application/pdf"
                    style={{ display: "none" }}
                    id="pdf-upload-button"
                    type="file"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="pdf-upload-button">
                    <Link href={' '}></Link>
                  </label> */}
            </Grid>
          </Grid>
          <Divider
            variant="middle"
            sx={{
              bgcolor: "#222D55",
              mt: { md: 3, xs: 5 },
              opacity: "20%",
              borderBottomWidth: "1px",
              mb: 2,
            }}
          />
          {loading && (
            <>
              <Stack
                sx={{
                  color: "grey.500",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                spacing={2}
                direction="row"
              >
                <CircularProgress
                  color="inherit"
                  sx={{ width: "50px", height: "50px", color: "red" }}
                />
              </Stack>
            </>
          )}

          {!loading &&
            allSecurityAlerts?.slice(0, 5)?.map((ele, inx) => {
              return (
                <>
                  <Grid
                    container
                    alignItems={"center"}
                    rowSpacing={0.6}
                    sx={{
                      padding: "0 16px",
                    }}
                  >
                    <Grid item md={1} sm={2} xs={12}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontFamily: inter.style.fontFamily,
                            fontWeight: 600,
                            // color: "#222D55",
                          }}
                        >
                          {dayjs(ele?.date).format("DD.MM.YYYY")}
                        </Typography>
                        <Box
                          sx={{
                            display: {
                              lg: "none",
                              md: "none",
                              sm: "none",
                              xs: "flex",
                            },
                            gap: 1,
                          }}
                        >
                          <Box>
                            <input
                              accept="application/pdf"
                              style={{ display: "none" }}
                              id="pdf-upload-button"
                              type="file"
                            />
                            <label htmlFor="pdf-share-button">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 42 42"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="21"
                                  cy="21"
                                  r="20.5962"
                                  stroke="#222D55"
                                  stroke-width="0.807692"
                                />
                                <path
                                  d="M24.4328 28.9952C23.7878 28.9952 23.2395 28.7575 22.788 28.2821C22.3365 27.8067 22.1107 27.2295 22.1107 26.5503C22.1107 26.4553 22.1172 26.3566 22.1301 26.2545C22.143 26.1524 22.1623 26.0608 22.1881 25.9799L16.7312 22.6386C16.5118 22.8423 16.2667 23.0021 15.9958 23.1178C15.7249 23.2335 15.4411 23.2911 15.1444 23.2906C14.4993 23.2906 13.9511 23.0529 13.4995 22.5775C13.048 22.1021 12.8223 21.5248 12.8223 20.8457C12.8223 20.1666 13.048 19.5894 13.4995 19.114C13.9511 18.6386 14.4993 18.4009 15.1444 18.4009C15.4411 18.4009 15.7249 18.4588 15.9958 18.5745C16.2667 18.6902 16.5118 18.8497 16.7312 19.0528L22.1881 15.7116C22.1623 15.6301 22.143 15.5385 22.1301 15.4369C22.1172 15.3353 22.1107 15.2367 22.1107 15.1411C22.1107 14.462 22.3365 13.8847 22.788 13.4094C23.2395 12.934 23.7878 12.6963 24.4328 12.6963C25.0779 12.6963 25.6262 12.934 26.0777 13.4094C26.5292 13.8847 26.755 14.462 26.755 15.1411C26.755 15.8202 26.5292 16.3975 26.0777 16.8729C25.6262 17.3483 25.0779 17.586 24.4328 17.586C24.1361 17.586 23.8523 17.5284 23.5814 17.4132C23.3105 17.298 23.0654 17.1383 22.8461 16.934L17.3891 20.2753C17.4149 20.3568 17.4342 20.4486 17.4471 20.5507C17.46 20.6529 17.4665 20.7512 17.4665 20.8457C17.4665 20.9408 17.46 21.0394 17.4471 21.1416C17.4342 21.2437 17.4149 21.3352 17.3891 21.4162L22.8461 24.7575C23.0654 24.5537 23.3105 24.3943 23.5814 24.2791C23.8523 24.1639 24.1361 24.106 24.4328 24.1055C25.0779 24.1055 25.6262 24.3432 26.0777 24.8186C26.5292 25.294 26.755 25.8712 26.755 26.5503C26.755 27.2295 26.5292 27.8067 26.0777 28.2821C25.6262 28.7575 25.0779 28.9952 24.4328 28.9952Z"
                                  fill="#222D55"
                                />
                              </svg>
                            </label>
                          </Box>
                          <Box>
                            <input
                              accept="application/pdf"
                              style={{ display: "none" }}
                              id="pdf-upload-button"
                              type="file"
                              onChange={handleFileUpload}
                            />
                            <label htmlFor="pdf-upload-button">
                              <svg
                                style={{ cursor: "pointer" }}
                                width="32"
                                height="32"
                                viewBox="0 0 42 42"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M26.1561 22.211C25.9431 22.001 25.4701 21.89 24.7501 21.88C24.1845 21.8806 23.6197 21.9221 23.0601 22.004C22.7841 21.845 22.4991 21.671 22.2761 21.462C21.6751 20.901 21.1731 20.122 20.8611 19.265C20.8811 19.185 20.8991 19.115 20.9151 19.043C20.9151 19.043 21.2541 17.12 21.1641 16.47C21.1574 16.407 21.1427 16.3452 21.1201 16.286L21.0911 16.21C20.9991 15.998 20.8181 15.773 20.5351 15.785L20.3641 15.78C20.0481 15.78 19.7911 15.941 19.7241 16.183C19.5191 16.94 19.7311 18.072 20.1141 19.538L20.0161 19.777C19.7411 20.447 19.3971 21.122 19.0931 21.717L19.0531 21.794C18.7331 22.42 18.4431 22.951 18.1801 23.401L17.9091 23.545C17.8891 23.555 17.4241 23.802 17.3151 23.868C16.3891 24.421 15.7761 25.048 15.6741 25.546C15.6421 25.705 15.6661 25.908 15.8301 26.002L16.0931 26.134C16.2037 26.1903 16.326 26.2197 16.4501 26.22C17.1091 26.22 17.8751 25.399 18.9301 23.558C20.1771 23.1549 21.4541 22.8513 22.7491 22.65C23.6751 23.171 24.8141 23.533 25.5321 23.533C25.6601 23.533 25.7701 23.521 25.8591 23.497C25.9908 23.465 26.1063 23.386 26.1841 23.275C26.3231 23.065 26.3521 22.776 26.3141 22.48C26.2902 22.376 26.2355 22.2815 26.1571 22.209L26.1561 22.211ZM16.3071 25.72C16.4271 25.391 16.9031 24.741 17.6071 24.164C17.6511 24.128 17.7601 24.026 17.8601 23.931C17.1241 25.105 16.6311 25.573 16.3071 25.719V25.72ZM20.4761 16.12C20.6881 16.12 20.8091 16.654 20.8191 17.155C20.8291 17.656 20.7121 18.008 20.5671 18.268C20.4471 17.883 20.3881 17.276 20.3881 16.879C20.3881 16.879 20.3791 16.12 20.4761 16.12ZM19.2321 22.961C19.3801 22.697 19.5331 22.418 19.6901 22.122C20.0731 21.398 20.3141 20.832 20.4941 20.367C20.8321 20.9934 21.2822 21.5523 21.8221 22.016C21.8871 22.071 21.9571 22.127 22.0291 22.182C20.9631 22.393 20.0431 22.649 19.2321 22.961ZM25.9521 22.901C25.8871 22.942 25.7011 22.965 25.5821 22.965C25.1961 22.965 24.7181 22.789 24.0491 22.501C24.3061 22.482 24.5421 22.472 24.7541 22.472C25.1411 22.472 25.2561 22.47 25.6341 22.567C26.0121 22.664 26.0171 22.86 25.9521 22.9V22.901Z"
                                  fill="#222D55"
                                />
                                <path
                                  d="M27.341 16.579C26.994 16.106 26.51 15.552 25.979 15.021C25.448 14.49 24.894 14.006 24.421 13.659C23.615 13.068 23.224 13 23 13H15.25C14.561 13 14 13.561 14 14.25V27.75C14 28.439 14.561 29 15.25 29H26.75C27.439 29 28 28.439 28 27.75V18C28 17.776 27.932 17.385 27.341 16.579ZM25.271 15.729C25.751 16.209 26.127 16.641 26.405 17H23.999V14.595C24.358 14.873 24.792 15.249 25.271 15.729ZM27 27.75C27 27.886 26.886 28 26.75 28H15.25C15.1839 27.9992 15.1208 27.9726 15.0741 27.9259C15.0274 27.8792 15.0008 27.8161 15 27.75V14.25C15 14.115 15.115 14 15.25 14H23V17.5C23 17.6326 23.0527 17.7598 23.1464 17.8536C23.2402 17.9473 23.3674 18 23.5 18H27V27.75Z"
                                  fill="#222D55"
                                />
                                <circle
                                  cx="21"
                                  cy="21"
                                  r="20.5962"
                                  stroke="#222D55"
                                  stroke-width="0.807692"
                                />
                              </svg>
                            </label>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item md={2} sm={3} xs={12}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "#BE0011",
                          fontWeight: 600,
                          display: "flex",
                          justifyContent: { md: "center", sm: "start" },
                          fontFamily: inter.style.fontFamily,
                        }}
                      >
                        {ele?.Heading[1]}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      md={2}
                      sm={2}
                      xs={12}
                      sx={{
                        display: {
                          lg: "none",
                          md: "none",
                          sm: "none",
                          xs: "block",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "12px",
                          color: "#BE0011",
                          textTransform: "capitalize",
                          fontWeight: 600,
                        }}
                      >
                        {ele?.status}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      sm={4}
                      xs={12}
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        router.push(
                          `/${locales}/secureOneself/Category/Categorydetails/${ele?._id}`
                        );
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "23px",
                            md: "18px",
                            sm: "15px",
                            xs: "16px",
                          },
                          fontFamily: inter.style.fontFamily,
                          maxWidth: "623px",
                        }}
                      >
                        {ele?.title}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      md={2}
                      sm={2}
                      xs={12}
                      sx={{
                        display: {
                          lg: "block",
                          md: "block",
                          sm: "block",
                          xs: "none",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "12px",
                          color: "#BE0011",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                      >
                        {ele?.type}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      md={1}
                      sm={1}
                      xs={12}
                      sx={{
                        display: {
                          lg: "flex",
                          md: "flex",
                          sm: "flex",
                          xs: "none",
                        },
                        justifyContent: "space-around",
                      }}
                    >
                      {/* <input
                      accept="application/pdf"
                      style={{ display: "none" }}
                      id="pdf-upload-button"
                      type="file"
                      // onChange={handleFileUpload}
                    /> */}

                      <a
                        href={ele?.document}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          if (navigator.share) {
                            navigator.share({
                              url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locales}/secureOneself/Category/Categorydetails/${ele?._id}`,
                              title: ele?.document,
                              data: {
                                "og:url": `${process.env.NEXT_PUBLIC_BASE_URL}/${locales}/secureOneself/Category/Categorydetails/${ele?._id}`,
                                "og:image": ele?.document,
                              },
                            });
                          } else {
                            navigator.clipboard
                              .writeText(
                                `${process.env.NEXT_PUBLIC_BASE_URL}/${locales}/secureOneself/Category/Categorydetails/${ele?._id}`
                              )
                              .then(() => {
                                toast.success("Link copied to clipboard");
                              });
                          }
                        }}
                      >
                        <label htmlFor="pdf-upload-button">
                          <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="21"
                              cy="21"
                              r="20.5962"
                              stroke="#222D55"
                              stroke-width="0.807692"
                            />
                            <path
                              d="M24.4328 28.9952C23.7878 28.9952 23.2395 28.7575 22.788 28.2821C22.3365 27.8067 22.1107 27.2295 22.1107 26.5503C22.1107 26.4553 22.1172 26.3566 22.1301 26.2545C22.143 26.1524 22.1623 26.0608 22.1881 25.9799L16.7312 22.6386C16.5118 22.8423 16.2667 23.0021 15.9958 23.1178C15.7249 23.2335 15.4411 23.2911 15.1444 23.2906C14.4993 23.2906 13.9511 23.0529 13.4995 22.5775C13.048 22.1021 12.8223 21.5248 12.8223 20.8457C12.8223 20.1666 13.048 19.5894 13.4995 19.114C13.9511 18.6386 14.4993 18.4009 15.1444 18.4009C15.4411 18.4009 15.7249 18.4588 15.9958 18.5745C16.2667 18.6902 16.5118 18.8497 16.7312 19.0528L22.1881 15.7116C22.1623 15.6301 22.143 15.5385 22.1301 15.4369C22.1172 15.3353 22.1107 15.2367 22.1107 15.1411C22.1107 14.462 22.3365 13.8847 22.788 13.4094C23.2395 12.934 23.7878 12.6963 24.4328 12.6963C25.0779 12.6963 25.6262 12.934 26.0777 13.4094C26.5292 13.8847 26.755 14.462 26.755 15.1411C26.755 15.8202 26.5292 16.3975 26.0777 16.8729C25.6262 17.3483 25.0779 17.586 24.4328 17.586C24.1361 17.586 23.8523 17.5284 23.5814 17.4132C23.3105 17.298 23.0654 17.1383 22.8461 16.934L17.3891 20.2753C17.4149 20.3568 17.4342 20.4486 17.4471 20.5507C17.46 20.6529 17.4665 20.7512 17.4665 20.8457C17.4665 20.9408 17.46 21.0394 17.4471 21.1416C17.4342 21.2437 17.4149 21.3352 17.3891 21.4162L22.8461 24.7575C23.0654 24.5537 23.3105 24.3943 23.5814 24.2791C23.8523 24.1639 24.1361 24.106 24.4328 24.1055C25.0779 24.1055 25.6262 24.3432 26.0777 24.8186C26.5292 25.294 26.755 25.8712 26.755 26.5503C26.755 27.2295 26.5292 27.8067 26.0777 28.2821C25.6262 28.7575 25.0779 28.9952 24.4328 28.9952Z"
                              fill="#222D55"
                            />
                          </svg>
                        </label>
                      </a>

                      <a href={ele?.document} download>
                        <svg
                          style={{ cursor: "pointer" }}
                          width="42"
                          height="42"
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26.1561 22.211C25.9431 22.001 25.4701 21.89 24.7501 21.88C24.1845 21.8806 23.6197 21.9221 23.0601 22.004C22.7841 21.845 22.4991 21.671 22.2761 21.462C21.6751 20.901 21.1731 20.122 20.8611 19.265C20.8811 19.185 20.8991 19.115 20.9151 19.043C20.9151 19.043 21.2541 17.12 21.1641 16.47C21.1574 16.407 21.1427 16.3452 21.1201 16.286L21.0911 16.21C20.9991 15.998 20.8181 15.773 20.5351 15.785L20.3641 15.78C20.0481 15.78 19.7911 15.941 19.7241 16.183C19.5191 16.94 19.7311 18.072 20.1141 19.538L20.0161 19.777C19.7411 20.447 19.3971 21.122 19.0931 21.717L19.0531 21.794C18.7331 22.42 18.4431 22.951 18.1801 23.401L17.9091 23.545C17.8891 23.555 17.4241 23.802 17.3151 23.868C16.3891 24.421 15.7761 25.048 15.6741 25.546C15.6421 25.705 15.6661 25.908 15.8301 26.002L16.0931 26.134C16.2037 26.1903 16.326 26.2197 16.4501 26.22C17.1091 26.22 17.8751 25.399 18.9301 23.558C20.1771 23.1549 21.4541 22.8513 22.7491 22.65C23.6751 23.171 24.8141 23.533 25.5321 23.533C25.6601 23.533 25.7701 23.521 25.8591 23.497C25.9908 23.465 26.1063 23.386 26.1841 23.275C26.3231 23.065 26.3521 22.776 26.3141 22.48C26.2902 22.376 26.2355 22.2815 26.1571 22.209L26.1561 22.211ZM16.3071 25.72C16.4271 25.391 16.9031 24.741 17.6071 24.164C17.6511 24.128 17.7601 24.026 17.8601 23.931C17.1241 25.105 16.6311 25.573 16.3071 25.719V25.72ZM20.4761 16.12C20.6881 16.12 20.8091 16.654 20.8191 17.155C20.8291 17.656 20.7121 18.008 20.5671 18.268C20.4471 17.883 20.3881 17.276 20.3881 16.879C20.3881 16.879 20.3791 16.12 20.4761 16.12ZM19.2321 22.961C19.3801 22.697 19.5331 22.418 19.6901 22.122C20.0731 21.398 20.3141 20.832 20.4941 20.367C20.8321 20.9934 21.2822 21.5523 21.8221 22.016C21.8871 22.071 21.9571 22.127 22.0291 22.182C20.9631 22.393 20.0431 22.649 19.2321 22.961ZM25.9521 22.901C25.8871 22.942 25.7011 22.965 25.5821 22.965C25.1961 22.965 24.7181 22.789 24.0491 22.501C24.3061 22.482 24.5421 22.472 24.7541 22.472C25.1411 22.472 25.2561 22.47 25.6341 22.567C26.0121 22.664 26.0171 22.86 25.9521 22.9V22.901Z"
                            fill="#222D55"
                          />
                          <path
                            d="M27.341 16.579C26.994 16.106 26.51 15.552 25.979 15.021C25.448 14.49 24.894 14.006 24.421 13.659C23.615 13.068 23.224 13 23 13H15.25C14.561 13 14 13.561 14 14.25V27.75C14 28.439 14.561 29 15.25 29H26.75C27.439 29 28 28.439 28 27.75V18C28 17.776 27.932 17.385 27.341 16.579ZM25.271 15.729C25.751 16.209 26.127 16.641 26.405 17H23.999V14.595C24.358 14.873 24.792 15.249 25.271 15.729ZM27 27.75C27 27.886 26.886 28 26.75 28H15.25C15.1839 27.9992 15.1208 27.9726 15.0741 27.9259C15.0274 27.8792 15.0008 27.8161 15 27.75V14.25C15 14.115 15.115 14 15.25 14H23V17.5C23 17.6326 23.0527 17.7598 23.1464 17.8536C23.2402 17.9473 23.3674 18 23.5 18H27V27.75Z"
                            fill="#222D55"
                          />
                          <circle
                            cx="21"
                            cy="21"
                            r="20.5962"
                            stroke="#222D55"
                            stroke-width="0.807692"
                          />
                        </svg>
                      </a>
                      <input
                        accept="application/pdf"
                        style={{ display: "none" }}
                        id="pdf-upload-button"
                        type="file"
                        onChange={handleFileUpload}
                      />
                      <label htmlFor="pdf-upload-button">
                        <Link href={ele?.document}></Link>
                      </label>
                    </Grid>
                  </Grid>
                  <Divider
                    variant="middle"
                    sx={{
                      bgcolor: "#222D55",
                      mt: { md: 3, xs: 5 },
                      opacity: "20%",
                      borderBottomWidth: "1px",
                      mb: 2,
                    }}
                  />
                </>
              );
            })}
          {/* <Typography
          sx={{
            padding: "0 16px",
            fontFamily: inter.style.fontFamily,
            fontWeight: 400,
            mt: { md: 3, xs: 1 },
            fontSize: "14px",
            color: "#222D55",
          }}
        >
          En cas d'incident, les bons réflexes en cas d'intrusion sur un système
          d'information sont à retrouver ici.
        </Typography> */}
          {/* <Box sx={{ display: "flex", justifyContent: "center", mt: { md: 10, xs: 5 } }}>
          <Button
            onClick={() => router.push(`/${locales}/alerteslist`)}
            variant="outlined"
            endIcon={
              <ArrowForwardIcon
                sx={{
                  backgroundColor: "#7DB1FF",
                  background: "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
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
              color: "#fff",
              border: "1px solid #222D55",
              borderRadius: "61px",
              padding: "8px 30px",
              fontSize: { md: "12px", xs: "10px" },
              mt: 3,
              fontWeight: 600,
              background: "#222D55",
              fontFamily: inter.style.fontFamily,
              "&:hover": {
                backgroundColor: "transparent",
                border: "1px solid #222D55",
                color: "#222D55",
              },
            }}
          >
            toutes les alertes
          </Button>
        </Box> */}
        </Container>
        <ToastContainer />
      </Box>
    </>
  );
}
