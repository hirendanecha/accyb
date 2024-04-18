import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";

export default function OurCommunity() {
  const data = [
    {
      description: "Consultation stratégique",
    },
    {
      description: "Suivi de maturité cyber",
    },
    {
      description: "Veille d'exposition internet",
    },
    {
      description: "Assistance en gestion de crise",
    },
    {
      description: "Sensibilisation des adhérents",
    },
    {
      description: "Alertes avancées",
    },
    {
      description: "Exercice de crise",
    },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#222D55",
          position: "relative",
          borderRadius: "20px 20px 0 0",
          overflow: "hidden",
          mt: { md: 20, xs: 13 },
        }}
      >
        <Container disableGutters maxWidth={"xl"}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50px",
              height: "50px",
              bgcolor: "#ffffff",
              borderBottomLeftRadius: "1rem",
              zIndex: 5,
              "::before": {
                content: "''",
                position: "absolute",
                width: "20px",
                height: "20px",
                top: "10px",
                left: "-10px",
                transform: "translateX(-100%)",
                boxShadow: "5px -5px 0 5px #222D55",
                borderTopRightRadius: "0.75rem",
              },
              "::after": {
                content: "''",
                position: "absolute",
                width: "20px",
                height: "20px",
                bottom: "-10px",
                right: "10px",
                transform: "translateY(100%)",
                boxShadow: "5px -5px 0 5px #222D55",
                borderTopRightRadius: "0.75rem",
              },
            }}
          ></Box>
          <Box
            sx={{
              content: "''",
              position: "absolute",
              top: 0,
              right: 0,
              width: "25px",
              height: "100px",
              bgcolor: "#ffffff",
              transform: "rotateZ(-45deg)",
              transformOrigin: "-25px 50px",
            }}
          ></Box>
          <Box
            sx={{
              padding: "0 16px",
              mt: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                textAlign: "center",
                fontSize: { lg: "55px", md: "45px", sm: "35px", xs: "25px" },
                lineHeight: { md: "60px", sm: "50px", xs: "35px" },
                color: "#222D55",
                maxWidth: { lg: "57%", md: "100%" },
                background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Des services exclusifs
            </Typography>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 5,
              py: 8,
              flexWrap: "wrap",
            }}
          >
            {data?.map((ele) => {
              return (
                <>
                  <Box
                    sx={{
                      border: "1px solid #B3D7C8",
                      borderRadius: "50%",
                      height: { md: "260px", xs: "165px" },
                      width: { md: "260px", xs: "165px" },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "45px",
                        fontWQeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      {ele?.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWQeight: 500,
                        color: "#FFFFFF",
                        maxWidth: "180px",
                        textTransform: "uppercase",
                        mt: 1,
                      }}
                    >
                      {ele?.description}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Box> */}
          <Grid container rowSpacing={5} justifyContent={"center"} sx={{ py: 8 }}>
            {data?.map((ele, idx) => {
              return (
                <>
                  {idx === 0 && <Grid item lg={1} xs={0}></Grid>}
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={2.5}
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                  >
                    <Box
                      sx={{
                        border: "1px solid #B3D7C8",
                        borderRadius: "50%",
                        height: { md: "220px", sm: "220px", xs: "200px" },
                        width: { md: "220px", sm: "220px", xs: "200px" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { md: "14px", sm: "12px", xs: "10px" },
                          fontWQeight: 500,
                          color: "#FFFFFF",
                          maxWidth: "150px",
                          textTransform: "uppercase",
                          mt: 1,
                        }}
                      >
                        {ele?.description}
                      </Typography>
                    </Box>
                  </Grid>
                  {idx == 3 && <Grid item lg={1} xs={0}></Grid>}
                </>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
