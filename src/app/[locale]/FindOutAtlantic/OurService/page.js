"use client";
import React, { useEffect, useRef, useState } from "react";
import Tech from "../../../../Icons/Discover/Img1.svg";
import Doctor from "../../../../Icons/Discover/Img4.svg";
import Adviser from "../../../../Icons/MajorActivity/Adviser.svg";
import Announce from "../../../../Icons/Announce.svg";
import Eye from "../../../../Icons/MajorActivity/Eye.svg";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import { inter } from "../../../../fonts/fonts";
import Image from "next/image";

const Img = styled(Image)(({ theme }) => ({
  width: "39px !important",
  height: "auto !important",
  [theme.breakpoints.down("lg")]: {
    width: "30px !important",
    height: "auto !important",
  },
}));

export default function OurService() {
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
  const ourservice = [
    {
      img: "",
      title: "Répondre",
      description:
        "Offrir une réponse de premier niveau pour les incidents cyber survenant chez ses bénéficiaires (triage et qualification des signalements) ;",
    },
    {
      img: Adviser,
      title: "Répondre",
      description:
        "Rediriger ses bénéficiaires vers des prestataires territoriaux pour la remédiation de l’incident ;",
    },
    {
      img: Adviser,
      title: "Manager",
      description: "Suivre le traitement de l’incident jusqu’à sa clôture",
    },
    {
      img: Eye,
      title: "Agir",
      description:
        "Agir comme un relai entre le CERT-FR, les prestataires régionaux, les services de Police et de Gendarmerie et les bénéficiaires",
    },
    {
      img: Announce,
      title: "Représentation",
      description:
        "Consolider les statistiques d’incidentologie à l’échelle inter-régionale (Guadeloupe, Guyane, Saint-Barthélemy et Saint-Martin).",
    },
  ];
  return (
    <Box>
      <Box sx={{ position: "relative", display: { md: "block", xs: "none" } }}>
        <div style={{ position: "absolute", left: 0, top: -200 }}>
          <svg
            width="736"
            height="1320"
            viewBox="0 0 736 1320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4" filter="url(#filter0_f_1430_2660)">
              <ellipse
                cx="89"
                cy="660"
                rx="174"
                ry="187"
                transform="rotate(-180 89 660)"
                fill="#FF3838"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1430_2660"
                x="-557.622"
                y="0.37793"
                width="1293.24"
                height="1319.24"
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
                  stdDeviation="236.311"
                  result="effect1_foregroundBlur_1430_2660"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div style={{ position: "absolute", right: 0 }}>
          <svg
            width="393"
            height="885"
            viewBox="0 0 393 885"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.15" filter="url(#filter0_f_1430_2659)">
              <ellipse
                cx="442.5"
                cy="442.5"
                rx="282.5"
                ry="282.5"
                transform="rotate(-180 442.5 442.5)"
                fill="#FF274E"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1430_2659"
                x="-0.000488281"
                y="0.000488281"
                width="885"
                height="885"
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
                  result="effect1_foregroundBlur_1430_2659"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </Box>
      <Container disableGutters maxWidth={"xl"}>
        <Box pt={{ md: 30, xs: 10 }}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              color: "#222D55",
              padding: "0 16px",
            }}
          >
            Nos services
          </Typography>
          <Box
            mt={1}
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: {
                md: "75px",
                sm: "60px",
                xs: "30px",
              },
              color: "#222D55",
              fontWeight: 400,
              lineHeight: {
                md: "85px",
                sm: "75px",
                xs: "40px",
              },
              maxWidth: "900px !important",
              padding: "0 16px",
            }}
          >
            Découvrir{" "}
            <span
              style={{
                color: "#BE0011",
              }}
            >
              les services
            </span>{" "}
            de l’ACCYB
          </Box>
        </Box>
      </Container>
      <Divider
        variant="middle"
        sx={{
          display: { md: "block", xs: "none" },
          bgcolor: "#222D55",
          mt: 5,
          opacity: "20%",
          borderBottomWidth: "1px",
        }}
      />
      <Container disableGutters maxWidth={"xl"}>
        <Grid
          container
          mt={5}
          columnSpacing={2}
          rowSpacing={2}
          sx={{
            padding: "0 16px",
          }}
        >
          {ourservice?.map((ele, index) => {
            return (
              <Grid item xs={12} lg={4} md={6} key={index}>
                <Box sx={{ height: "100%" }}>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      alignItems: "center",

                      height: "100%",
                      position: "relative",
                      zIndex: 1,
                      gap: { lg: 3, md: 2, xs: 2 },
                      mt: { md: 0, xs: 1.5 },
                    }}
                  >
                    <Grid item xs={3} sm={3}>
                      <Box
                        sx={{
                          borderRadius: "50%",
                          backgroundColor: "#BE0011",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: { lg: "119px", sm: "120px", xs: "80px" },
                          width: { lg: "119px", sm: "120px", xs: "80px" },
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
                    {/* <Grid item sm={1}></Grid> */}
                    <Grid item xs={8} sm={8}>
                      <Box ref={ref}>
                        {/* <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={controls}
                    > */}
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: { md: "14px", xs: "12px" },
                            fontWeight: 400,
                            lineHeight: "22px",
                            color: "#20388F",
                            display: "flex",
                            textAlign: "start",
                            textTransform: "uppercase",
                          }}
                        >
                          {ele?.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            mt: { md: 1, xs: 0.1 },
                            fontSize: { md: "16px", xs: "12px" },
                            fontWeight: 400,
                            lineHeight: { md: "24px", xs: "18px" },
                            color: "#20388F",
                            display: "flex",
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
    </Box>
  );
}
