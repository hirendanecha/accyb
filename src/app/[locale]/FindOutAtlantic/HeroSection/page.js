"use client";
import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Image from "next/image";
import Logo from "../../../../Icons/Logo.svg";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
const Img = styled(Image)(({ theme }) => ({
  width: "151px !important",
  height: "151px !important",
  [theme.breakpoints.down("sm")]: {
    width: "100px !important",
    height: "100px !important",
  },
}));

export default function HeroSection() {
  const router = useRouter();
  const locale = useLocale();
  const handleContactUsClick = (event) => {
    event.preventDefault();
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      sx={{
        backgroundImage: "url('/Images/BackgroundImg3.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { md: "770px", xs: "800px" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          marginTop: { md: 10, xs: 6 },
        }}
      >
        <Container disableGutters maxWidth={"xl"}>
          <Grid container display={"flex"} justifyContent={"space-between"}>
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
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                  flexDirection: { md: "row", xs: "column" },
                  gap: { md: 5, xs: 1 },
                  mt: 5,
                  maxWidth: { md: "unset", xs: "320px" },
                }}
              >
                <Button
                  onClick={() => router.push(`/${locale}/alerteslist`)}
                  variant="outlined"
                  endIcon={
                    <ArrowForwardIcon
                      sx={{
                        backgroundColor: "#FC0029",
                        borderRadius: "50%",
                        width: { md: "50px", xs: "40px" },
                        height: { md: "50px", xs: "40px" },
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
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#FFFFFF",
                    border: "1px solid rgba(142, 155, 191, 0.3)",
                    borderRadius: "61px",
                    padding: "8px 30px",
                    fontSize: "12px",
                    fontWeight: 600,
                    background: "rgba(255, 255, 255, 0.1)",
                    ":hover": {
                      borderColor: "#8E9BBF",
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                    },
                    fontFamily: inter.style.fontFamily,
                    "& .MuiButton-endIcon": {
                      marginLeft: 2.2,
                    },
                  }}
                >
                  voir nos alertes de sécurité
                </Button>
                <Button
                  variant="outlined"
                  endIcon={
                    <ArrowForwardIcon
                      sx={{
                        backgroundColor: "#FC0029",
                        borderRadius: "50%",
                        width: { md: "50px", xs: "40px" },
                        height: { md: "50px", xs: "40px" },
                        padding: 1.7,
                        marginRight: -2,
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
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#FFFFFF",
                    border: "1px solid rgba(142, 155, 191, 0.3)",
                    borderRadius: "61px",
                    fontSize: "12px",
                    padding: "8px 30px",
                    fontWeight: 600,
                    background: "rgba(255, 255, 255, 0.1)",
                    fontFamily: inter.style.fontFamily,
                    ":hover": {
                      borderColor: "#8E9BBF",
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                    },
                  }}
                >
                  RFC 2350
                </Button>
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
                position: "relative",
                padding: "0 16px",
              }}
            >
              <Box mt={{ md: -15, xs: 5 }}>
                <Box sx={{ display: "flex", justifyContent: { lg: "flex-end", xs: "center" } }}>
                  <Img src={Logo} alt="logo" />
                </Box>
                <Typography
                  sx={{
                    mt: { md: 5, xs: 3 },
                    fontFamily: inter.style.fontFamily,
                    color: "#FFFFFF",
                    fontSize: { md: "14px", xs: "12px" },
                    lineHeight: { md: "22px", xs: "20px" },
                  }}
                >
                  Le CSIRT-ATLANTIC est le centre d'assistance cyber unique pour les bénéficiaires de taille
                  intermédiaire des territoires français d'Amérique. Il est au cœur du dispositif national de CSIRT
                  régionaux soutenu par l'ANSSI, engagé dans des actions de prévention, protection et partage
                  d'information communautaire cyber.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#FFFFFF",
                    mt: 2,
                    fontSize: { md: "14px", xs: "12px" },
                    lineHeight: { md: "22px", xs: "20px" },
                  }}
                >
                  Horaires d'ouverture :
                  <br />
                  Lundi au vendredi (hors jours fériés)
                  <br />
                  de 8h30 à 12h30 - 14h00 à 17h00
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { lg: "flex", xs: "none" },
                  gap: 2,
                  cursor: "pointer",
                  alignItems: "center",
                  position: "absolute",
                  right: 10,
                  bottom: -50,
                }}
              >
                <Box onClick={handleContactUsClick}>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "20px",
                      fontWeight: 400,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    Scroll
                  </Typography>
                </Box>

                <ArrowDownwardIcon sx={{ color: "#FFFFFF" }} />
              </Box>
            </Grid>
            <Box
              sx={{
                display: { md: "none", xs: "block" },
                flexDirection: { md: "row", xs: "column" },
                gap: { md: 5, xs: 1 },
                mt: 5,
                ml: 1,
                maxWidth: { md: "unset", xs: "320px" },
              }}
            >
              <Button
                onClick={() => router.push(`/${locale}/alerteslist`)}
                variant="outlined"
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      backgroundColor: "#FC0029",
                      borderRadius: "50%",
                      width: { md: "50px", xs: "40px" },
                      height: { md: "50px", xs: "40px" },
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
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#FFFFFF",
                  border: "1px solid rgba(142, 155, 191, 0.3)",
                  borderRadius: "61px",
                  padding: "8px 30px",
                  fontSize: "12px",
                  fontWeight: 600,
                  background: "rgba(255, 255, 255, 0.1)",
                  ":hover": {
                    borderColor: "#8E9BBF",
                  },
                  fontFamily: inter.style.fontFamily,
                  "& .MuiButton-endIcon": {
                    marginLeft: 2.2,
                  },
                }}
              >
                voir nos alertes de sécurité
              </Button>
              <Button
                variant="outlined"
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      backgroundColor: "#FC0029",
                      borderRadius: "50%",
                      width: { md: "50px", xs: "40px" },
                      height: { md: "50px", xs: "40px" },
                      padding: 1.7,
                      marginRight: -2,
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
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#FFFFFF",
                  border: "1px solid rgba(142, 155, 191, 0.3)",
                  borderRadius: "61px",
                  fontSize: "12px",
                  mt: 2,
                  padding: "8px 30px",
                  fontWeight: 600,
                  background: "rgba(255, 255, 255, 0.1)",
                  fontFamily: inter.style.fontFamily,
                  ":hover": {
                    borderColor: "#8E9BBF",
                  },
                }}
              >
                RFC 2350
              </Button>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
