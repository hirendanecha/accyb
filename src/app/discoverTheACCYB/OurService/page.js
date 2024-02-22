"use client";
import React, { useEffect, useRef, useState } from "react";
import Tech from "../../../Icons/Discover/Img1.svg";
import Doctor from "../../../Icons/Discover/Img4.svg";
import Adviser from "../../../Icons/MajorActivity/Adviser.svg";
import Scan from "../../../Icons/Discover/Img3.svg";
import Key from "../../../Icons/Discover/Img5.svg";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import { inter } from "../../fonts/fonts";
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
      img: Tech,
      title: "Représentation",
      description:
        "Offrir une réponse de premier niveau pour les incidents cyber survenant chez ses bénéficiaires (triage et qualification des signalements) ;",
    },
    {
      img: Adviser,
      title: "Représentation",
      description:
        "Rediriger ses bénéficiaires vers des prestataires territoriaux pour la remédiation de l’incident ;",
    },
    {
      img: Scan,
      title: "Représentation",
      description: "Suivre le traitement de l’incident jusqu’à sa clôture",
    },
    {
      img: Doctor,
      title: "Représentation",
      description:
        "Agir comme un relai entre le CERT-FR, les prestataires régionaux, les services de Police et de Gendarmerie et les bénéficiaires",
    },
    {
      img: Key,
      title: "Représentation",
      description:
        "Consolider les statistiques d’incidentologie à l’échelle inter-régionale (Guadeloupe, Guyane, Saint-Barthélemy et Saint-Martin).",
    },
  ];
  return (
    <Box mt={{ md: 30, xs: 10 }} sx={{ padding: "0 16px" }}>
      <Container disableGutters maxWidth={"xl"}>
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            color: "#222D55",
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
          }}
        >
          Découvrir{" "}
          <span
            style={{
              color: "#007A47",
            }}
          >
            les services
          </span>{" "}
          de l’ACCYB
        </Box>
        <Divider
          variant="middle"
          sx={{
            display: { md: "block", xs: "none" },
            bgcolor: "#D3D5DD",
            mt: 5,
            borderBottomWidth: "1px",
          }}
        />
        <Grid container mt={5} columnSpacing={2} rowSpacing={2}>
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
                          backgroundColor: "#007A47",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid #8E9BBF",
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
                            color: "#222D55",
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
                            color: "#222D55",
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
