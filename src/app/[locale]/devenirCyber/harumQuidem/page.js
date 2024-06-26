"use client";
import { Box, Button, Container, Divider, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import harum from "../../../../Icons/Devenicyber.png";

const Img = styled(Image)(({ theme }) => ({
  width: "541 !important",
  height: "632px !important",

  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: "auto !important",
  },
}));
export default function HarumQuidem() {
  return (
    <Box>
      <Container disableGutters maxWidth={"xl"}>
        <Box
          sx={{
            background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
            borderRadius: "20px",
            overflow: "hidden",
            padding: "0 16px",
            mt: { md: 20, xs: 10 },
            position: "relative",
            mt: { md: 20, xs: 10 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50px",
              height: "50px",
              bgcolor: "#ffffff",
              borderBottomLeftRadius: "1rem",
              zIndex: 5,
              "::before": {
                content: "''",
                position: "absolute",
                width: "20px",
                height: "20px",
                top: "10px",
                left: "-10px",
                transform: "translateX(-100%)",
                boxShadow: "5px -5px 0 5px #97E6FF",
                borderTopRightRadius: "0.75rem",
              },
              "::after": {
                content: "''",
                position: "absolute",
                width: "20px",
                height: "20px",
                bottom: "-10px",
                right: "10px",
                transform: "translateY(100%)",
                boxShadow: "5px -5px 0 5px #97E6FF",
                borderTopRightRadius: "0.75rem",
              },
            }}
          ></Box>
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
          <Grid container padding={{ md: 8, xs: 3 }}>
            <Grid item xs={12} md={6}>
              {" "}
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "55px", xs: "26px" },
                  color: "#FFFFFF",
                  lineHeight: { md: "60px", xs: "33px" },
                  fontWeight: 400,
                  maxWidth: { md: "600px", xs: "100%" },
                }}
              >
                Rejoindre l'ACCYB en tant qu'Adhérent !
              </Typography>
              <Typography
                sx={{
                  mt: { md: 2, xs: 3 },
                  color: "#FFFFFF",
                  fontSize: { md: "22px", xs: "14px" },
                  lineHeight: { md: "32px", xs: "22px" },
                  fontFamily: inter.style.fontFamily,
                  maxWidth: { md: "450px", xs: "100%" },
                }}
              >
                Remplissez le formulaire d’adhésion. Durée maximale : 25 minutes. Aucune carte de crédit n’est requise.
                Aucun engagement.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display={"flex"}
              justifyContent={{ md: "center", xs: "start" }}
              alignItems={"flex-end"}
            >
              <Button
                variant="outlined"
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
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
                  background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                  borderRadius: "61px",
                  padding: "8px 30px",
                  fontSize: { md: "12px", xs: "10px" },
                  mt: { md: 3, xs: 5 },
                  fontWeight: 600,
                  background: "#ffffff",
                  fontFamily: inter.style.fontFamily,
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    border: "none",
                  },
                }}
              >
                remplir le formulaire
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            padding: "0 16px",
            mt: { md: 15, xs: 10 },
            display: "flex",
            justifyContent: "start",
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { lg: "39px", md: "35px", xs: "20px" },
              lineHeight: { lg: "60px", md: "50px", xs: "32px" },
              color: "#222D55",
            }}
          >
            2 - Devenir Ambassadeur cyber
          </Typography>{" "}
        </Box>
        <Divider
          variant="middle"
          sx={{
            bgcolor: "#222D55",
            mt: 3,
            opacity: 0.3,
            borderBottomWidth: "1px",
            mb: 10,
          }}
        />
        <Box
          sx={{
            padding: "0 16px",
            mt: { md: 15, xs: 3 },
            display: "flex",
            justifyContent: "space-between",
            pb: { md: 0, xs: 10 },
          }}
        >
          <Grid container columnSpacing={10}>
            <Grid item xs={12} md={5} display={"flex"} justifyContent={{ md: "end", xs: "center" }}>
              <Img src={harum} alt="harum" />
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                height: { md: "100%", xs: "400px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { md: "space-around", xs: "center" },
                  height: "100%",
                  mt: { md: 0, xs: 5 },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: { md: "24px", xs: "18px" },
                      color: "#222D55",
                      lineHeight: { md: "60px", xs: "33px" },
                      fontWeight: 500,
                      maxWidth: { md: "500px", xs: "100%" },
                    }}
                  >
                    Qui sont-ils ?
                  </Typography>
                  <Typography
                    sx={{
                      color: "#222D55",
                      fontSize: { md: "22px", xs: "14px" },
                      lineHeight: { md: "32px", xs: "20px" },
                      fontWeight: 500,
                      fontFamily: inter.style.fontFamily,
                      maxWidth: "600px",
                    }}
                  >
                    Devenir bénévole cyber At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      mt: 2,
                      fontFamily: inter.style.fontFamily,
                      fontSize: { md: "24px", xs: "18px" },
                      color: "#222D55",
                      lineHeight: { md: "60px", xs: "33px" },
                      fontWeight: 500,
                      maxWidth: { md: "500px", xs: "100%" },
                    }}
                  >
                    Quelles sont leurs missions ?
                  </Typography>
                  <Typography
                    sx={{
                      color: "#222D55",
                      fontSize: { md: "22px", xs: "14px" },
                      lineHeight: { md: "32px", xs: "20px" },
                      fontWeight: 500,
                      fontFamily: inter.style.fontFamily,
                      maxWidth: "600px",
                    }}
                  >
                    Devenir bénévole cyber At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      mt: 2,
                      fontFamily: inter.style.fontFamily,
                      fontSize: { md: "24px", xs: "18px" },
                      color: "#222D55",
                      lineHeight: { md: "60px", xs: "33px" },
                      fontWeight: 500,
                      maxWidth: { md: "500px", xs: "100%" },
                    }}
                  >
                    Pourquoi devenir Ambassadeur Cyber ?
                  </Typography>
                  <Typography
                    sx={{
                      color: "#222D55",
                      fontSize: { md: "22px", xs: "14px" },
                      lineHeight: { md: "32px", xs: "20px" },
                      fontWeight: 500,
                      fontFamily: inter.style.fontFamily,
                      maxWidth: "600px",
                    }}
                  >
                    Devenir bénévole cyber At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
