import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";

export default function OurCommunity() {
  const data = [
    {
      title: "90%",
      description: "De renouvellement d’adhésion",
    },
    {
      title: "+200",
      description: "Attaques gérées",
    },
    {
      title: "90%",
      description: "De renouvellement d’adhésion",
    },
    {
      title: "-65%",
      description: "De fraude informatique",
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
          mt: 20,
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
                background:
                  "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Bien plus qu’une adhésion... une communauté, un réseau !
            </Typography>
          </Box>
          <Box
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
                      height: "260px",
                      width: "260px",
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
          </Box>
        </Container>
      </Box>
    </>
  );
}
