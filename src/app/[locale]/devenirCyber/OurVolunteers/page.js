import { Box, Container, Divider, Grid, Typography } from "@mui/material";
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
            justifyContent: "start",
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { lg: "39px", md: "35px", xs: "25px" },
              lineHeight: { lg: "60px", md: "50px", xs: "32px" },
              color: "#222D55",
            }}
          >
            1- Adhérer à l'ACCYB
          </Typography>{" "}
        </Box>
      </Container>
      <Divider
        variant="middle"
        sx={{
          display: { md: "block", xs: "none" },
          bgcolor: "#222D55",
          mt: { md: 3, xs: 5 },
          opacity: 0.3,
          borderBottomWidth: "1px",
          mb: 10,
        }}
      />
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
            Une gouvernance inclusive
          </Typography>
        </Box>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={2}
          mt={5}
          sx={{
            padding: "0 16px",
          }}
        >
          <Grid item xs={6} lg={3} md={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                bgcolor: "#fff",
                border: "1px solid black",
                borderRadius: "10px",
                display: "flex",
                height: { md: "122px", xs: "71px" },
                width: { md: "258px", xs: "152px" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                }}
              >
                ALTEN
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                }}
              >
                EN FRANCE
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} lg={3} md={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                bgcolor: "#fff",
                border: "1px solid black",
                borderRadius: "10px",
                display: "flex",
                height: { md: "122px", xs: "71px" },
                width: { md: "258px", xs: "152px" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                }}
              >
                ALTEN
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                }}
              >
                EN FRANCE
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} lg={3} md={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                bgcolor: "#fff",
                border: "1px solid black",
                borderRadius: "10px",
                display: "flex",
                height: { md: "122px", xs: "71px" },
                width: { md: "258px", xs: "152px" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                }}
              >
                ALTEN
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                }}
              >
                EN FRANCE
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} lg={3} md={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                bgcolor: "#fff",
                border: "1px solid black",
                borderRadius: "10px",
                display: "flex",
                height: { md: "122px", xs: "71px" },
                width: { md: "258px", xs: "152px" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                }}
              >
                ALTEN
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                }}
              >
                EN FRANCE
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
