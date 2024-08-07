"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTranslations } from "next-intl";
export default function HeroSection() {
  const t = useTranslations("DiscovertheObservatory");
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
                {`${t("Title")}`}{<br></br>}
                <u
                  style={{
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "10px",
                  }}
                >
                  {`${t("Title1")}`}
                </u>{" "}
              </Box>
            </Grid>
            <Grid item md={2}></Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                position: "relative",
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
                    fontWeight: "normal",
                    fontSize: { md: "15px", xs: "13px" },
                    lineHeight: { md: "25px", xs: "22px" },
                  }}
                >
                  {`${t("Description")}`}{" "}
                  <span style={{ fontWeight: 600 }}>
                  {`${t("DescriptionSpan")}`}
                  </span>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { lg: "flex", xs: "none" },
                  gap: 2,
                  cursor: "pointer",
                  alignItems: "center",
                  position: "absolute",
                  bottom: 0,
                  right: 30,
                  top: 280,
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
        </Container>
      </Box>
    </Box>
  );
}
