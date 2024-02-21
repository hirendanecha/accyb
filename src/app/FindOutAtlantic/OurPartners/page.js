import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../app/fonts/fonts";

export default function OurPartners() {
  return (
    <Box sx={{ padding: "0 16px" }}>
      <Container disableGutters maxWidth={"xl"}>
        <Box mt={10}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              color: "#222D55",
              fontSize: "18px",
              textTransform: "uppercase",
            }}
          >
            Notre fonctionnement
          </Typography>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              display: "flex",
              justifyContent: "center",
              fontWeight: 400,
              textAlign: "center",
              color: "#FC0029",
              fontSize: "60px",
            }}
          >
            At vero eos
          </Typography>
        </Box>
        <Grid container gap={2} mt={5}>
          <Grid item lg={2}></Grid>
          <Grid item xs={12} lg={2} md={4}>
            <Box
              sx={{
                bgcolor: "#fff",
                border: "1px solid black",
                padding: 6,
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                }}
              >
                ALTEN
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                }}
              >
                EN FRANCE
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={2} md={4}>
            <Box
              sx={{
                bgcolor: "#fff",
                border: "1px solid black",
                padding: 6,
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                }}
              >
                ALTEN
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                }}
              >
                EN FRANCE
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={2} md={4}>
            <Box
              sx={{
                bgcolor: "#fff",
                border: "1px solid black",
                padding: 6,
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                }}
              >
                ALTEN
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                }}
              >
                EN FRANCE
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={2} md={4}>
            <Box
              sx={{
                bgcolor: "#fff",
                border: "1px solid black",
                padding: 6,
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                }}
              >
                ALTEN
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                }}
              >
                EN FRANCE
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={2}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
