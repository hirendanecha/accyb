"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../fonts/fonts";

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/Images/BackgroundImg4.svg')",
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
                Découvrir{" "}
                <u
                  style={{
                    "text-decoration-thickness": "3px",
                    "text-underline-offset": "10px",
                  }}
                >
                  l’Observatoire
                </u>{" "}
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
                  L’observatoire cyber des territoires français d’Amérique vise
                  à établir et suivre le niveau de maturité des acteurs privés
                  et publics sur la cybersécurité, la protection des données et
                  les bonnes pratiques associées pour la conformité et la
                  maitrise des risques.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
