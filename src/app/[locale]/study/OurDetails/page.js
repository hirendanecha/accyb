"use client";
import React from "react";
import { Box, Container, Grid, Typography, Divider, styled } from "@mui/material";
import { inter } from "../../../../fonts/fonts";
import Image from "next/image";
import ClientMeeting from "../../../../../public/ClientMeeting.svg";

const Img = styled(Image)(({ theme }) => ({
  borderRadius: "10px",
  width: "100% !important",
  height: "auto !important",
}));
export default function page() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Grid container>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  color: "#222D55",
                  fontSize: {
                    md: "20px",
                    xs: "10px",
                    lineHeight: "32px",
                    textAlign: "start",
                  },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at risus vitae magna consectetur interdum
                vel vitae sem. Pellentesque vel dolor sit amet orci condimentum vehicula. Cras lobortis tincidunt metus
                nec malesuada. Aliquam rutrum felis dui, et efficitur nulla congue ut. Fusce sit amet venenatis urna.
                Sed in consectetur purus, nec fermentum massa. Praesent erat odio, imperdiet quis condimentum at, mollis
                eget purus. Donec vel aliquet tortor, sit amet egestas nisi.
              </Typography>
              <Box>
                <Typography
                  sx={{
                    mt: 5,
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                    fontSize: { md: "70px", xs: "20px", lineHeight: "50px" },
                    color: "#222D55",
                    lineHeight: "90px",
                    textAlign: "start",
                  }}
                >
                  Et harum quidem rerum facilis
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                    color: "#222D55",
                    mt: 3,
                    fontSize: {
                      md: "20px",
                      xs: "10px",
                      lineHeight: "32px",
                      textAlign: "start",
                    },
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at risus vitae magna consectetur
                  interdum vel vitae sem. Pellentesque vel dolor sit amet orci condimentum vehicula. Cras lobortis
                  tincidunt metus nec malesuada. Aliquam rutrum felis dui, et efficitur nulla congue ut. Fusce sit amet
                  venenatis urna. Sed in consectetur purus, nec fermentum massa. Praesent erat odio, imperdiet quis
                  condimentum at, mollis eget purus. Donec vel aliquet tortor, sit amet egestas nisi.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <Typography
                  sx={{
                    mt: 5,
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                    fontSize: { md: "70px", xs: "20px", lineHeight: "50px" },
                    color: "#222D55",
                    lineHeight: "90px",
                    textAlign: "start",
                  }}
                >
                  Et harum quidem rerum facilis
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                    color: "#222D55",
                    mt: 3,
                    fontSize: {
                      md: "20px",
                      xs: "10px",
                      lineHeight: "32px",
                      textAlign: "start",
                    },
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at risus vitae magna consectetur
                  interdum vel vitae sem. Pellentesque vel dolor sit amet orci condimentum vehicula. Cras lobortis
                  tincidunt metus nec malesuada. Aliquam rutrum felis dui, et efficitur nulla congue ut. Fusce sit amet
                  venenatis urna. Sed in consectetur purus, nec fermentum massa. Praesent erat odio, imperdiet quis
                  condimentum at, mollis eget purus. Donec vel aliquet tortor, sit amet egestas nisi.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 600,
                    color: "#222D55",
                    mt: 3,
                    fontSize: {
                      md: "20px",
                      xs: "10px",
                      lineHeight: "32px",
                      textAlign: "start",
                    },
                  }}
                >
                  Source : lorem ipsum dolores sit amet
                </Typography>
              </Box>
            </Box>
            <Box mt={5}>
              <Img src={ClientMeeting} height={900} width={900} alt="img" />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
