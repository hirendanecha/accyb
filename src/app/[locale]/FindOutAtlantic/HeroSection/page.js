"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/Images/BackgroundImg3.svg')",
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
          <Grid container>
            <Grid item xs={12} md={6} sx={{ padding: "0 16px" }}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  color: "#FFFFFF",
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
                Découvrir le{" "}
                <u
                  style={{
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "10px",
                  }}
                >
                  CSIRT-ATLANTIC
                </u>{" "}
              </Box>
              <Button
                variant="outlined"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  mt: 4,
                  color: "#FFFFFF",
                  border: "1px solid #D3D5DD",
                  borderRadius: "61px",
                  padding: { md: "18px 40px", xs: "18px 16px" },
                  fontSize: { md: "12px", xs: "10px" },
                  fontWeight: 600,
                  ":hover": {
                    borderColor: "white",
                  },
                }}
              >
                {`Horaires d'ouverture : Lundi au vendredi de 09h00 à 18h00`}
              </Button>
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
                padding: "0 16px",
              }}
            >
              <Box mt={5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#FFFFFF",
                    fontSize: { md: "15px", xs: "13px" },
                    lineHeight: { md: "25px", xs: "22px" },
                  }}
                >
                  Un Computer Security incident Response Team est un centre de
                  réponse aux incidents de sécurité.
                </Typography>
                <Button
                  variant="outlined"
                  endIcon={
                    <ArrowForwardIcon
                      sx={{
                        backgroundColor: "#FC0029",
                        borderRadius: "50%",
                        width: "46px",
                        height: "46px",
                        padding: 1.7,
                        marginRight: -3.5,
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
                    mt: { md: 4, xs: 2 },
                    color: "#FFFFFF",
                    border: "1px solid #FFFFFF",
                    borderRadius: "61px",
                    padding: "6px 40px",
                    fontSize: "12px",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 600,
                    ":hover": {
                      borderColor: "white",
                    },
                  }}
                >
                  RFC 2350
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
