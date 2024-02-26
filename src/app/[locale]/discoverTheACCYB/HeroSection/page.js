"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";

export default function HeroSection() {
  return (
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
          marginTop: { md: 10, xs: 0 },
        }}
      >
        <Container disableGutters maxWidth={"xl"}>
          <Grid container sx={{ padding: "0 16px" }}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontFamily: inter.style.fontFamily,
                }}
              >
                Découvrir l’ACCYB
              </Typography>
              <Box
                mt={1}
                sx={{
                  fontFamily: inter.style.fontFamily,
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
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "10px",
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
                  sx={{
                    fontFamily: inter.style.fontFamily,
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
                  sx={{
                    fontFamily: inter.style.fontFamily,
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
        </Container>
      </Box>
    </Box>
  );
}