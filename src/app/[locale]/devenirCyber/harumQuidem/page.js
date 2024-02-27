import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HarumQuidem() {
  return (
    <Box>
      <Container disableGutters maxWidth={"xl"}>
        <Box
          sx={{
            padding: "0 16px",
            mt: 15,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "55px", xs: "45px" },
                  color: "#222D55",
                  lineHeight: { md: "60px", xs: "50px" },
                  fontWeight: 400,
                  maxWidth: { md: "500px", xs: "100%" },
                }}
              >
                Et harum quidem rerum facilis
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  color: "#222D55",
                  fontSize: { md: "22px", xs: "18px" },
                  lineHeight: { md: "32px", xs: "28px" },
                  fontFamily: inter.style.fontFamily,
                  maxWidth: "600px",
                }}
              >
                Devenir bénévole cyber At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi
                sint occaecati cupidit.
              </Typography>
              <Button
                variant="outlined"
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      backgroundColor: "#222D55",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      color: "#ffffff",
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
                  color: "#222D55",
                  border: "1px solid #222D55",
                  borderRadius: "61px",
                  padding: "8px 30px",
                  fontSize: "12px",
                  mt: 3,
                  fontWeight: 600,
                  background: "rgba(255, 255, 255, 0.1)",
                  fontFamily: inter.style.fontFamily,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                je veux devenir bénévole
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            background:
              "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
            borderRadius: "20px",
            overflow: "hidden",
            mt: { md: 20, xs: 10 },
          }}
        >
          <Grid container padding={{ md: 8, xs: 3 }}>
            <Grid item xs={12} md={6}>
              {" "}
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "55px", xs: "35px" },
                  color: "#FFFFFF",
                  lineHeight: { md: "60px", xs: "40px" },
                  fontWeight: 400,
                  maxWidth: { md: "500px", xs: "100%" },
                }}
              >
                Je veux devenir bénévole cyber !
              </Typography>
              <Typography
                sx={{
                  mt: { md: 2, xs: 3 },
                  color: "#FFFFFF",
                  fontSize: { md: "22px", xs: "18px" },
                  lineHeight: { md: "32px", xs: "24px" },
                  fontFamily: inter.style.fontFamily,
                  maxWidth: { md: "450px", xs: "100%" },
                }}
              >
                Remplissez le formulaire d’adhésion. Durée maximale : 25
                minutes. Aucune carte de crédit n’est requise. Aucun engagement.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display={"flex"}
              justifyContent={{ md: "center", xs: "start" }}
              alignItems={"flex-end"}
            >
              <Button
                variant="outlined"
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      background:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      color: "#ffffff",
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
                  color: "#222D55",
                  borderRadius: "61px",
                  padding: "8px 30px",
                  fontSize: "12px",
                  mt: { md: 3, xs: 5 },
                  fontWeight: 600,
                  background: "#ffffff",
                  fontFamily: inter.style.fontFamily,
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    border: "none",
                  },
                }}
              >
                je veux devenir bénévole
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
