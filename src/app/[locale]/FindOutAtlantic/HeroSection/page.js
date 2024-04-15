"use client";
import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import LogoAccyb from "../../../../Icons/LogoAccyb.svg";
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
  const locals = useLocale();
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
        height: { md: "770px", xs: "850px" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          marginTop: { md: 10, xs: 5 },
        }}
      >
        <Container disableGutters maxWidth={"xl"}>
          <Grid container display={"flex"} justifyContent={"space-between"}>
            <Grid
              item
              xs={12}
              lg={6}
              mt={{ xs: 0, md: 15 }}
              sx={{ padding: "0 16px", display: "flex", flexDirection: "column", justifyContent: "center" }}
            >
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
                  onClick={() => router.push(`/${locals}/alerteslist`)}
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
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                display: "flex",
                maxWidth: "550px !important",
                padding: "0 16px",
                position: "relative",
              }}
            >
              <Box>
                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "end" }, mt: { lg: 5, xs: 2 } }}>
                  <Img src={LogoAccyb} alt="LogoAccyb" height={151} width={151} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#FFFFFF",
                    mt: { lg: 5, xs: 2 },
                    fontSize: { md: "15px", xs: "13px" },
                    lineHeight: { md: "25px", xs: "22px" },
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
                    mt: { lg: 5, xs: 2 },
                    fontSize: { md: "15px", xs: "13px" },
                    lineHeight: { md: "25px", xs: "22px" },
                    maxWidth: "300px",
                  }}
                >
                  Horaires d'ouverture : <br />
                  Lundi au vendredi (hors jours fériés) de 8h30 à 12h30 - 14h00 à 17h00
                </Typography>
                <Box
                  sx={{
                    display: { lg: "flex", xs: "none" },
                    gap: 2,
                    cursor: "pointer",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 0,
                    right: 30,
                    top: 500,
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
              </Box>
            </Grid>
            <Box
              sx={{
                display: { md: "none", xs: "block" },
                gap: { md: 5, xs: 1 },
                mt: 5,
                maxWidth: { md: "unset", xs: "320px" },
              }}
            >
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
                  padding: "8px 30px",
                  mt: 1,
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
