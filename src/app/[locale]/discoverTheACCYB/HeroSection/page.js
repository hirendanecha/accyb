"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTranslations } from "next-intl";
export default function HeroSection() {
  const t = useTranslations("DiscoverTheACCYB");
  const handleContactUsClick = (event) => {
    event.preventDefault();
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMissionClick = (event) => {
    event.preventDefault();
    const footerElement = document.getElementById("mission");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceClick = (event) => {
    event.preventDefault();
    const footerElement = document.getElementById("services");
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
                {`${t("HeroSectiontitle1")}`}{<br></br>}
                <u
                  style={{
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "10px",
                  }}
                >
                  {`${t("HeroSectiontitle2")}`}
                </u>{" "}
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
                  onClick={handleMissionClick}
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
                  {`${t("HeroSectionButton1")}`}
                </Button>
                <Button
                  onClick={handleServiceClick}
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
                  {`${t("HeroSectionButton2")}`}
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
                  {`${t("HeroSectionDesciption")}`}
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
              {`${t("HeroSectionButton1")}`}
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
              {`${t("HeroSectionButton2")}`}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
