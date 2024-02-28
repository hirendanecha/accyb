"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
export default function HeroSection() {
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
          marginTop: { md: 10, xs: 5 },
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
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                  flexDirection: { md: "row", xs: "column" },
                  gap: { md: 5, xs: 1 },
                  mt: 10,
                  maxWidth: { md: "unset", xs: "320px" },
                }}
              >
                <Button
                  variant="outlined"
                  endIcon={
                    <ArrowForwardIcon
                      sx={{
                        backgroundColor: "#7DB1FF",
                        background:
                          "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
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
                          animation:
                            "move-left 0.3s ease-in-out 0s 1 normal forwards",
                        },
                      }}
                    />
                  }
                  sx={{
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
                    // "& .MuiButton-endIcon": {
                    //   marginLeft: 2.2,
                    // },
                  }}
                >
                  Découvrir nos missions
                </Button>
                <Button
                  variant="outlined"
                  endIcon={
                    <ArrowForwardIcon
                      sx={{
                        backgroundColor: "#7DB1FF",
                        background:
                          "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
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
                          animation:
                            "move-left 0.3s ease-in-out 0s 1 normal forwards",
                        },
                      }}
                    />
                  }
                  sx={{
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
                    // "& .MuiButton-endIcon": {
                    //   marginLeft: 2.2,
                    // },
                  }}
                >
                  Découvrir nos missions
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
              }}
            >
              <Box mt={{ md: 5, xs: 2 }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#FFFFFF",
                    fontSize: { md: "14px", xs: "12px" },
                    lineHeight: { md: "22px", xs: "20px" },
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
                    fontSize: { md: "14px", xs: "12px" },
                    lineHeight: { md: "22px", xs: "20px" },
                  }}
                >
                  Après 2 ans de réflexion, le constat était indéniable du
                  besoin de cohérence et de cohésion des territoires en faveur
                  d’une stratégie de Cybersécurité adaptée aux territoires
                  français d’Amérique.
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
                  bottom: 0,
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
          </Grid>
          <Box
            sx={{
              display: { md: "none", xs: "flex" },
              flexDirection: { md: "row", xs: "column" },
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
                    backgroundColor: "#7DB1FF",
                    background:
                      "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
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
                      animation:
                        "move-left 0.3s ease-in-out 0s 1 normal forwards",
                    },
                  }}
                />
              }
              sx={{
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
                // "& .MuiButton-endIcon": {
                //   marginLeft: 2.2,
                // },
              }}
            >
              Découvrir nos missions
            </Button>
            <Button
              variant="outlined"
              endIcon={
                <ArrowForwardIcon
                  sx={{
                    backgroundColor: "#7DB1FF",
                    background:
                      "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
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
                      animation:
                        "move-left 0.3s ease-in-out 0s 1 normal forwards",
                    },
                  }}
                />
              }
              sx={{
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
                // "& .MuiButton-endIcon": {
                //   marginLeft: 2.2,
                // },
              }}
            >
              Découvrir nos missions
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
