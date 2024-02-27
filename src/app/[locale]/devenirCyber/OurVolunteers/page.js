import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";

export default function OurVolunteers() {
  return (
    <Box>
      <Container disableGutters maxWidth={"xl"}>
        <Box
          sx={{
            padding: "0 16px",
            mt: 5,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              textAlign: "center",
              fontSize: { lg: "55px", md: "45px", xs: "25px" },
              lineHeight: { lg: "60px", md: "50px", xs: "32px" },
              color: "#222D55",
              maxWidth: { lg: "60%", md: "60%", xs: "100%" },
            }}
          >
            Déjà plus d’une cinquentaine d’entités de renom font parties de nos
            bénévoles
          </Typography>
        </Box>
        <Grid
          container
          columnSpacing={2}
          rowSpacing={3}
          mt={5}
          sx={{
            padding: "0 16px",
          }}
        >
          <Grid item xs={12} lg={3} md={3}>
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
          <Grid item xs={12} lg={3} md={3}>
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
              <Typography>ALTEN</Typography>
              <Typography>EN FRANCE</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3} md={3}>
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
              <Typography>ALTEN</Typography>
              <Typography>EN FRANCE</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3} md={3}>
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
              <Typography>ALTEN</Typography>
              <Typography>EN FRANCE</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
