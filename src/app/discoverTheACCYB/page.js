"use client";
import { Box, Divider, Grid, Typography, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { inter } from "../fonts/fonts";
import { motion, useAnimation } from "framer-motion";
import Tech from "../../Icons/Discover/Img1.svg";
import Doctor from "../../Icons/Discover/Img4.svg";
import Adviser from "../../Icons/MajorActivity/Adviser.svg";
import Scan from "../../Icons/Discover/Img3.svg";
import Key from "../../Icons/Discover/Img5.svg";
import Tower from "../../Icons/Discover/Img6.svg";
import Image from "next/image";
import HowToWorkSlider from "../../Components/Common/HowWeWorkSlider/page";
const Img = styled(Image)(({ theme }) => ({
  width: "39px !important",
  height: "auto !important",
  [theme.breakpoints.down("lg")]: {
    width: "30px !important",
    height: "auto !important",
  },
}));

export default function DiscoverTheACCYB() {
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
      img: Tech,
      title: "Actions de sensibilisations des bénéficiaires et du grand public",
    },
    {
      img: Adviser,
      title: "Centre de réponses à incident via le CSIRT-ATLANTIC",
    },
    {
      img: Scan,
      title: "Scan de vulnérabilités pour les membres adhérents",
    },
    {
      img: Doctor,
      title: "Diagnostique via mon aide cyber",
    },
    {
      img: Key,
      title: "Suivi de l’état cyber des bénéficiaires",
    },
    {
      img: Tower,
      title: "Diffusion d’alertes de sécurité",
    },
  ];
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
    <>
      {/* {"hero section"} */}
      <Box
        sx={{
          backgroundImage: "url('/Images/BackgroundImg1.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { md: "770px", xs: "690px" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            marginTop: 10,
          }}
        >
          <Grid container sx={{ padding: "0 30px" }}>
            <Grid item xs={12} md={6}>
              <Typography
                className={inter.className}
                sx={{
                  color: "#FFFFFF",
                }}
              >
                Découvrir l’ACCYB
              </Typography>
              <Box
                mt={1}
                className={inter.className}
                sx={{
                  fontSize: {
                    md: "75px",
                    sm: "60px",
                    xs: "35px",
                  },
                  color: "#FFFFFF",
                  fontWeight: 400,
                  lineHeight: {
                    md: "85px",
                    sm: "75px",
                    xs: "50px",
                  },
                  maxWidth: "650px !important",
                }}
              >
                L’agence{" "}
                <u
                  style={{
                    "text-decoration-thickness": "3px",
                    "text-underline-offset": "10px",
                  }}
                >
                  Caribéenne
                </u>{" "}
                pour la Cybersécurité
              </Box>
            </Grid>
            <Grid item md={2}></Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                alignItems: "center",
                maxWidth: "550px !important",
              }}
            >
              <Box mt={{ md: 5, xs: 2 }}>
                <Typography
                  className={inter.className}
                  sx={{
                    color: "#FFFFFF",
                    fontSize: { md: "15px", xs: "13px" },
                    lineHeight: { md: "25px", xs: "22px" },
                  }}
                >
                  L’Agence Caribéenne pour la Cybersécurité est une initiative
                  fondée par les collectivités territoriales de Guadeloupe,
                  Guyane et Saint-Barthélemy
                </Typography>
                <Typography
                  mt={{ md: 5, xs: 1.5 }}
                  className={inter.className}
                  sx={{
                    color: "#FFFFFF",
                    fontSize: { md: "15px", xs: "13px" },
                    lineHeight: { md: "25px", xs: "22px" },
                  }}
                >
                  Après 2 ans de réflexion, le constat était indéniable du
                  besoin de cohérence et de cohésion des territoires en faveur
                  d’une stratégie de Cybersécurité adaptée aux territoires
                  français d’Amérique.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* {"Our key dates"} */}
      <Box
      // sx={{
      //   backgroundImage: "url('/Images/BackgroundImg2.svg')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
      >
        <Box
          ref={ref}
          sx={{
            padding: { md: "0 30px", xs: "0 10px" },
            mt: { md: 20, xs: 10 },
          }}
        >
          {/* <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}> */}
          <Typography
            className={inter.className}
            sx={{
              fontWeight: 400,
              fontSize: { md: "70px", xs: "40px", lineHeight: "50px" },
              color: "#222D55",
            }}
          >
            Nos dates clés
          </Typography>
          {/* </motion.div> */}
          <Divider
            variant="middle"
            sx={{
              bgcolor: "#8E9BBF",
              mt: { md: 3, xs: 5 },
              borderBottomWidth: "1px",
              mb: 10,
            }}
          />
        </Box>
        <Box
          sx={{
            paddingLeft: { md: "80px", xs: "0px" },
            display: { lg: "block", md: "none", xs: "none" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              pb: 70,
            }}
          >
            <Box
              sx={{
                border: "1px solid #B3D7C8",
                padding: 10,
                borderRadius: "50%",
                height: "354px",
                width: "354px",
                position: "absolute",
                top: 0,
                bottom: 0,
              }}
            >
              <Typography
                className={inter.className}
                sx={{
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
                  marginLeft: "33px",
                }}
              >
                04 juin 2021
              </Typography>
              <Typography
                className={inter.className}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Délibération
              </Typography>
              <Typography
                className={inter.className}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                de la Région
              </Typography>
              <Typography
                className={inter.className}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Guadeloupe
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #B3D7C8",
                padding: 10,
                borderRadius: "50%",
                height: "354px",
                width: "354px",
                position: "absolute",
                top: 150,
                bottom: 0,
                left: 250,
              }}
            >
              <Typography
                className={inter.className}
                sx={{
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
                  marginLeft: "33px",
                }}
              >
                04 juin 2021
              </Typography>
              <Typography
                className={inter.className}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Délibération
              </Typography>
              <Typography
                className={inter.className}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                de la Région
              </Typography>
              <Typography
                className={inter.className}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Guadeloupe
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #B3D7C8",
                padding: 10,
                borderRadius: "50%",
                height: "354px",
                width: "354px",
                top: 0,
                bottom: 0,
                position: "absolute",
                left: 500,
              }}
            >
              <Typography
                className={inter.className}
                sx={{
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
                  marginLeft: "33px",
                }}
              >
                04 juin 2021
              </Typography>
              <Typography
                className={inter.className}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Délibération
              </Typography>
              <Typography
                className={inter.className}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                de la Région
              </Typography>
              <Typography
                className={inter.className}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Guadeloupe
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #B3D7C8",
                padding: 10,
                borderRadius: "50%",
                height: "354px",
                width: "354px",
                position: "absolute",
                top: 150,
                bottom: 0,
                left: 750,
              }}
            >
              <Typography
                className={inter.className}
                sx={{
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
                  marginLeft: "33px",
                }}
              >
                04 juin 2021
              </Typography>
              <Typography
                className={inter.className}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Délibération
              </Typography>
              <Typography
                className={inter.className}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                de la Région
              </Typography>
              <Typography
                className={inter.className}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Guadeloupe
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* {"medium screen"} */}
        <Box
          sx={{
            paddingLeft: "50px",
            display: { lg: "none", md: "block", xs: "none" },
          }}
        >
          <Grid container rowSpacing={5}>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "354px",
                  width: "354px",
                }}
              >
                <Typography
                  className={inter.className}
                  sx={{
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
                    marginLeft: "33px",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  de la Région
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Guadeloupe
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "354px",
                  width: "354px",
                }}
              >
                <Typography
                  className={inter.className}
                  sx={{
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
                    marginLeft: "33px",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  de la Région
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Guadeloupe
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "354px",
                  width: "354px",
                }}
              >
                <Typography
                  className={inter.className}
                  sx={{
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
                    marginLeft: "33px",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  de la Région
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Guadeloupe
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "354px",
                  width: "354px",
                }}
              >
                <Typography
                  className={inter.className}
                  sx={{
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
                    marginLeft: "33px",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  de la Région
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Guadeloupe
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* {"mobile screen"} */}
        <Box
          sx={{
            paddingLeft: { md: "50px", xs: "0px" },
            display: { lg: "none", md: "none", xs: "block" },
          }}
        >
          <Grid container rowSpacing={2}>
            <Grid
              item
              md={6}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "250px",
                  width: "250px",
                }}
              >
                <Typography
                  className={inter.className}
                  sx={{
                    color: "#222D55",
                    fontSize: "16px",
                    width: "100px",
                    textWrap: "wrap",
                    color: "#007A47",
                    fontWeight: "300",
                    textTransform: "uppercase",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    mt: 1,
                    color: "#222D55",
                    lineHeight: "18px",
                    fontSize: "14px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération de la Région Guadeloupe
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "250px",
                  width: "250px",
                }}
              >
                <Typography
                  className={inter.className}
                  sx={{
                    color: "#222D55",
                    fontSize: "16px",
                    width: "100px",
                    textWrap: "wrap",
                    color: "#007A47",
                    fontWeight: "300",
                    textTransform: "uppercase",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    mt: 1,
                    color: "#222D55",
                    lineHeight: "18px",
                    fontSize: "14px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération de la Région Guadeloupe
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "250px",
                  width: "250px",
                }}
              >
                <Typography
                  className={inter.className}
                  sx={{
                    color: "#222D55",
                    fontSize: "16px",
                    width: "100px",
                    textWrap: "wrap",
                    color: "#007A47",
                    fontWeight: "300",
                    textTransform: "uppercase",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    mt: 1,
                    color: "#222D55",
                    lineHeight: "18px",
                    fontSize: "14px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération de la Région Guadeloupe
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "250px",
                  width: "250px",
                }}
              >
                <Typography
                  className={inter.className}
                  sx={{
                    color: "#222D55",
                    fontSize: "16px",
                    width: "100px",
                    textWrap: "wrap",
                    color: "#007A47",
                    fontWeight: "300",
                    textTransform: "uppercase",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  className={inter.className}
                  sx={{
                    display: "flex",
                    mt: 1,
                    color: "#222D55",
                    lineHeight: "18px",
                    fontSize: "14px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération de la Région Guadeloupe
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* {"what are our mission"} */}
      <Box padding={{ md: "0 30px", xs: "0 15px" }}>
        <Box
          ref={ref}
          sx={{
            padding: { md: "0 30px", xs: "0 10px" },
            mt: { md: 20, xs: 10 },
          }}
        >
          {/* <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}> */}
          <Typography
            className={inter.className}
            sx={{
              fontWeight: 400,
              fontSize: { md: "70px", xs: "40px", lineHeight: "50px" },
              color: "#222D55",
            }}
          >
            Quelles sont nos missions ?
          </Typography>
          {/* </motion.div> */}
          <Divider
            variant="middle"
            sx={{
              bgcolor: "#8E9BBF",
              mt: { md: 3, xs: 5 },
              borderBottomWidth: "1px",
              mb: 10,
            }}
          />
        </Box>
        <Grid container mt={5} columnSpacing={2} rowSpacing={2}>
          {activites?.map((ele, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    padding: { lg: 6, md: 3, sm: 3, xs: 2 },
                    backgroundColor: "transparent",
                    border: "2px solid",
                    borderImageSource:
                      "linear-gradient(46.93deg, #228A2C -9.61%, #2FD7B9 78.14%)",
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
                      gap: { lg: 3, md: 2, xs: 2 },
                    }}
                  >
                    <Grid item xs={3} sm={4}>
                      <Box
                        sx={{
                          borderRadius: "50%",
                          backgroundColor: "#007A47",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid #8E9BBF",
                          height: { lg: "160px", sm: "120px", xs: "80px" },
                          width: { lg: "160px", sm: "120px", xs: "80px" },
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
                          className={inter.className}
                          sx={{
                            fontSize: { lg: "38px", md: "30px", xs: "18px" },
                            fontWeight: 400,
                            lineHeight: { md: "42px", xs: "25px" },
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
      </Box>
      {/* {"our service"} */}
      <Box padding={"0 30px"} mt={30}>
        <Typography
          className={inter.className}
          sx={{
            color: "#222D55",
          }}
        >
          Nos services
        </Typography>
        <Box
          mt={1}
          className={inter.className}
          sx={{
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
                          className={inter.className}
                          sx={{
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
                          className={inter.className}
                          sx={{
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
      </Box>
      <Box padding={"0 30px"}>
        <HowToWorkSlider />
      </Box>
    </>
  );
}
