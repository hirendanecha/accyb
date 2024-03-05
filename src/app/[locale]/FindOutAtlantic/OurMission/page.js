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
  return (
    <Box>
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
    </Box>
  );
}
