"use client";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";

export default function HeroSection() {
  return (
    <Box sx={{ position: "relative" }}>
      <div style={{ position: "absolute", right: 0, top: { md: 100, xs: 0 } }}>
        <svg width="597" height="499" viewBox="0 0 597 499" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.25" filter="url(#filter0_f_1430_1889)">
            <ellipse cx="364.5" cy="134.5" rx="204.5" ry="204.5" transform="rotate(-180 364.5 134.5)" fill="#61F4C0" />
          </g>
          <defs>
            <filter
              id="filter0_f_1430_1889"
              x="0"
              y="-230"
              width="729"
              height="729"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_1430_1889" />
            </filter>
          </defs>
        </svg>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          paddingTop: { md: 50, xs: 20 },
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
                  color: "#222D55",
                  fontWeight: 400,
                  lineHeight: {
                    md: "85px",
                    sm: "75px",
                    xs: "50px",
                  },
                  maxWidth: "680px !important",
                }}
              >
                Les{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Formations
                </span>
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
                    color: "#222D55",
                    fontSize: { md: "15px", xs: "13px" },
                    lineHeight: { md: "25px", xs: "22px" },
                  }}
                >
                  Découvrir l'écosystème de formation numérique sur nos territoires ultramarins français de la zone
                  Caraïbes.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider
            variant="middle"
            sx={{
              bgcolor: "#CDD1DD",
              mt: { md: 6, xs: 2 },
              borderBottomWidth: "1px",
            }}
          />
        </Container>
      </Box>
    </Box>
  );
}
