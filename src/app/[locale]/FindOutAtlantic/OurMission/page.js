"use client";
import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../../../Icons/Discover/Img1.svg";
import Img2 from "../../../../Icons/Discover/Img2.svg";
import Img3 from "../../../../Icons/Discover/Img3.svg";
import Img4 from "../../../../Icons/Discover/Img4.svg";
import Img5 from "../../../../Icons/Discover/Img5.svg";
import Img6 from "../../../../Icons/Discover/Img6.svg";
import Img7 from "../../../../Icons/Discover/Img7.svg";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import { useAnimation } from "framer-motion";
import { inter } from "../../../../fonts/fonts";
const Img = styled(Image)(({ theme }) => ({
  width: "45px !important",
  height: "auto !important",
  [theme.breakpoints.down("lg")]: {
    width: "30px !important",
    height: "auto !important",
  },
}));
export default function OurMission() {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
      img: Img1,
      title: "Réception des incidents",
      description:
        "Mise en oeuvre d’une plateforme téléphonique et des moyens informatiques nécessaires à la réception des incidents informatiques.",
    },
    {
      img: Img2,
      title: "Évalutation des incidents",
      description: "Qualification et triages des incidents.",
    },
    {
      img: Img3,
      title: "Traitement des incidents",
      description:
        "Mise en relation avec des prestataires labellisés Expert Cyber ou qualifiés par l’ANSSI.",
    },
    {
      img: Img4,
      title: "Analyse des incidents",
      description: "Suivi des incidents.",
    },
    {
      img: Img5,
      title: "Appui à la réponse à incident",
      description:
        "Information et conseil relatifs aux poursuites juridictionelles. Accompagnement à la réponse.",
    },
    {
      img: Img6,
      title: "Coordination & coopération",
      description:
        "Relais et transfert des informations pertinentes vers le CERT-FR, Cybermalveillance.gouv, les autres CSIRT et l’interCERT-FR.",
    },
    {
      img: Img7,
      title: "Information des bénéficiaires",
      description:
        "Consolidation de l’incidentologie régionale et partage du résultat avec le CERT-FR. Information des bénéficiaires sur l’état de la menace.",
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
    console.log("Uploaded file:", file);
  };
  return (
    <Box sx={{ position: "relative" }}>
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
            Quelles sont nos missions ?
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
          right: 0,
          top: 0,
          display: { md: "block", xs: "none" },
        }}
      >
        <svg
          width="553"
          height="815"
          viewBox="0 0 553 815"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1" filter="url(#filter0_f_1856_4144)">
            <ellipse
              cx="407.424"
              cy="407.576"
              rx="270.576"
              ry="270.576"
              transform="rotate(-180 407.424 407.576)"
              fill="#FF274E"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1856_4144"
              x="0.495224"
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
                result="effect1_foregroundBlur_1856_4144"
              />
            </filter>
          </defs>
        </svg>
      </Box>
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
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    padding: { lg: 4, md: 3, sm: 3, xs: 2 },
                    backgroundColor: "transparent",
                    border: "2px solid",
                    borderImageSource:
                      "linear-gradient(46.93deg, #BE0011 -9.61%, #BE0011 78.14%)",
                    borderImageSlice: 1,
                    position: "relative",
                    borderRadius: "20px",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  {/* {index !== 0 && !mdDown ? (
                <Box
                  sx={{
                    position: "absolute",
                    top: -3,
                    right: -3,
                    height: "80px",
                    width: "80px",
                    borderLeft:
                      index % 2 ? "2px solid #7DB1FF" : "2px solid #97E6FF",
                    borderBottom:
                      index % 2 ? "2px solid #7DB1FF" : "2px solid #97E6FF",
                    borderRadius: "0 0 0% 30%",
                    zIndex: 0,
                    backgroundColor: "#fff",
                  }}
                />
              ) : (
                ""
              )} */}
                  {/* <Box
                  sx={{
                    position: "absolute",
                    top: -2,
                    right: "75px",
                    height: "50px",
                    width: "50px",
                    borderTop: "2px solid #7DB1FF",
                    borderRight: "2px solid #7DB1FF",
                    borderRadius: "0 30% 0% 0%",
                    backgroundColor:"red",
                    // transform: "translate(50%, -50%)",
                    zIndex: 0,
                    backgroundColor: "#fff",
                    // boxShadow: "0px 0px 0px 1000px #fff",
                  }}
                /> */}
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
                        <Typography
                          sx={{
                            fontSize: { lg: "12px", md: "11px", xs: "10px" },
                            fontWeight: 400,
                            lineHeight: { md: "18px", xs: "16px" },
                            fontFamily: inter.style.fontFamily,
                            color: "#222D55",
                            display: "flex",
                            mt: 1,
                            textAlign: "start",
                          }}
                        >
                          {ele?.description}
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
        <Box mt={{ md: 20, xs: 5, padding: "0 16px" }}>
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
          <Typography
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
          </Typography>
        </Box>
      </Container>
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
      <Container disableGutters maxWidth={"xl"}>
        {SecurityAlertsData?.map((ele, inx) => {
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
                      }}
                    >
                      {ele?.time}
                    </Typography>
                    <Box
                      sx={{
                        display: {
                          lg: "none",
                          md: "none",
                          sm: "none",
                          xs: "block",
                        },
                      }}
                    >
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
                <Grid item md={6} sm={4} xs={12}>
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
                    {ele?.description}
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
                      textTransform: "capitalize",
                      fontWeight: 600,
                    }}
                  >
                    {ele?.status}
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
      </Container>
    </Box>
  );
}
