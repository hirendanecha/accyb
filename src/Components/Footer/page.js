import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import React from "react";
import Logo from "../../Icons/Footer/Logo.svg";
import partner1 from "../../Icons/Footer/partner1.svg";
import partner2 from "../../Icons/Footer/partner2.svg";

export default function Footer() {
  return (
    <>
      <Box id="footer" sx={{ padding: "0 30px", mt: 8 }}>
        <Typography
          sx={{
            color: "#222D55",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "36px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Retrouvez-nous sur les réseaux
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 2 }}>
          <LinkedInIcon />
          <XIcon />
        </Box>
        <Divider
          variant="middle"
          sx={{
            bgcolor: "#8E9BBF",
            mt: { md: 6, xs: 2 },
            borderBottomWidth: "1px",
          }}
        />
        <Grid container mt={8}>
          <Grid item md={12}>
            <Grid container>
              <Grid
                item
                lg={2.4}
                md={12}
                xs={12}
                justifyContent={{ lg: "unset", xs: "center" }}
                display={"flex"}
                pb={{ lg: 0, xs: 10 }}
              >
                <Image src={Logo} height={138} width={138} alt="logo" />
              </Grid>
              <Grid
                item
                lg={2.4}
                md={3}
                sm={6}
                xs={12}
                textAlign={{ md: "unset", xs: "center" }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      pb: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    financé par
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "20px",
                      mt: 2,
                      justifyContent: { md: "unset", xs: "center" },
                    }}
                  >
                    <Image
                      src={partner1}
                      height={81}
                      width={73}
                      alt="partner1"
                    />
                    <Image
                      src={partner2}
                      height={81}
                      width={73}
                      alt="partner2"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                lg={2.4}
                md={3}
                sm={6}
                xs={12}
                mt={{ md: 0, xs: 5 }}
                textAlign={{ md: "unset", xs: "center" }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    pb: 2,
                    textTransform: "uppercase",
                  }}
                >
                  Découvrir l’ACCYB
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    Nos dates clefs
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    Quelles sont nos missions ?
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    Découvrir les services de l’ACCYB
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    Les conseils
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                lg={2.4}
                md={3}
                sm={6}
                xs={12}
                mt={{ md: 0, xs: 5 }}
                textAlign={{ md: "unset", xs: "center" }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    pb: 2,
                    textTransform: "uppercase",
                  }}
                >
                  Découvrir le CSIRT-ATLANTIC
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    Quelles sont nos missions ?
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    Découvrez les services du C-SIRT-ATLANTIC
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    Lorem ipsum
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    Lorem ipsum
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                lg={2.4}
                md={3}
                sm={6}
                xs={12}
                mt={{ md: 0, xs: 5 }}
                textAlign={{ md: "unset", xs: "center" }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    pb: 2,
                    textTransform: "uppercase",
                  }}
                >
                  Découvrir l’Observatoire
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    Quelles sont nos missions ?
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    Découvrez les services de l’Observatoire
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    Lorem ipsum
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    Lorem ipsum
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          backgroundColor: "#222D55",
          padding: 2,
          mt: 5,
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            textTransform: "uppercase",
            fontSize: { md: "13px", xs: "11px" },
            fontWeight: 500,
          }}
        >
          mentions légales
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            textTransform: "uppercase",
            fontSize: { md: "13px", xs: "11px" },
            fontWeight: 500,
          }}
        >
          politique de confidentialité
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            textTransform: "uppercase",
            fontSize: { md: "13px", xs: "11px" },
            fontWeight: 500,
          }}
        >
          protection des données personnelles
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            textTransform: "uppercase",
            fontSize: { md: "13px", xs: "11px" },
            fontWeight: 500,
          }}
        >
          plan du site
        </Typography>
      </Box>
    </>
  );
}
