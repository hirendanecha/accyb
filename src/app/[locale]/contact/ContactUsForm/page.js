import React from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import { inter } from "../../../../fonts/fonts";

export default function ContactUsForm() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingTop: { md: 30, xs: 20 },
      }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Box>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              textAlign: "center",
              fontSize: { md: "70px", xs: "26px" },
              lineHeight: { lg: "90px", md: "50px", xs: "32px" },
              color: "#222D55",
              maxWidth: { lg: "60%", md: "60%", xs: "100%" },
              display: "flex",
              justifyContent: "start",
            }}
          >
            Contact ACCYB
          </Typography>
        </Box>
        <Divider
          variant="middle"
          sx={{
            bgcolor: "#222D55",
            mt: 2,
            opacity: 0.3,
            marginLeft: 0,
            marginRight: 0,
            borderBottomWidth: "1px",
          }}
        />

        <Grid container columnSpacing={5}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 600,
                  fontSize: { md: "12px", xs: "10px" },
                  mt: { md: 6, xs: 2 },
                  color: "#222D55",
                  lineHeight: "36px",
                  textTransform: "uppercase",
                }}
              >
                email
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { md: "39px", xs: "26px" },
                  color: "#222D55",
                  lineHeight: "36px",
                }}
              >
                contact@accyb.com
              </Typography>
            </Box>
            <Divider
              variant="middle"
              sx={{
                bgcolor: "#222D55",
                mt: { md: 6, xs: 2 },
                opacity: 0.3,
                marginLeft: 0,
                marginRight: 0,
                borderBottomWidth: "1px",
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 600,
                  fontSize: { md: "12px", xs: "10px" },
                  color: "#222D55",
                  lineHeight: "36px",
                  textTransform: "uppercase",
                  mt: { md: 6, xs: 2 },
                }}
              >
                Téléphonne
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { md: "39px", xs: "26px" },
                  color: "#222D55",
                  lineHeight: "36px",
                }}
              >
                06.XX.XX.XX.XX
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#222D55",
                  lineHeight: "36px",
                  textTransform: "uppercase",
                  mt: { md: 6, xs: 2 },
                }}
              >
                adresse
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { md: "39px", xs: "26px" },
                  color: "#222D55",
                  lineHeight: "56px",
                  maxWidth: { md: "80%", xs: "100%" },
                }}
              >
                60 chemin De Reynald, Roujol, 97170 Petit-Bourg
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: { md: 30, xs: 10 } }}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              textAlign: "center",
              fontSize: { md: "70px", xs: "26px" },
              lineHeight: { lg: "90px", md: "50px", xs: "32px" },
              color: "#222D55",
              display: "flex",
              justifyContent: "start",
            }}
          >
            Contact CSIRT-ATLANTIC
          </Typography>
        </Box>
        <Divider
          variant="middle"
          sx={{
            bgcolor: "#222D55",
            mt: 2,
            opacity: 0.3,
            marginLeft: 0,
            marginRight: 0,
            borderBottomWidth: "1px",
          }}
        />

        <Grid container columnSpacing={5}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 600,
                  fontSize: { md: "12px", xs: "10px" },
                  mt: { md: 6, xs: 2 },
                  color: "#222D55",
                  lineHeight: "36px",
                  textTransform: "uppercase",
                }}
              >
                email
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { md: "39px", xs: "26px" },
                  color: "#222D55",
                  lineHeight: "36px",
                }}
              >
                contact@accyb.com
              </Typography>
            </Box>
            <Divider
              variant="middle"
              sx={{
                bgcolor: "#222D55",
                mt: { md: 6, xs: 2 },
                opacity: 0.3,
                marginLeft: 0,
                marginRight: 0,
                borderBottomWidth: "1px",
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 600,
                  fontSize: { md: "12px", xs: "10px" },
                  color: "#222D55",
                  lineHeight: "36px",
                  textTransform: "uppercase",
                  mt: { md: 6, xs: 2 },
                }}
              >
                Téléphonne
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { md: "39px", xs: "26px" },
                  color: "#222D55",
                  lineHeight: "36px",
                }}
              >
                06.XX.XX.XX.XX
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 600,
                  fontSize: { md: "12px", xs: "10px" },
                  color: "#222D55",
                  lineHeight: "36px",
                  textTransform: "uppercase",
                  mt: { md: 6, xs: 2 },
                }}
              >
                horaires
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { md: "39px", xs: "26px" },
                  color: "#222D55",
                  lineHeight: { md: "56px", xs: "36px" },
                  maxWidth: { md: "80%", xs: "100%" },
                }}
              >
                Du lundi au vendredi (hors jours fériés) de 8h30 à 12h30 - 14h00 à 17h00
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
