"use client";
import { Box, Container, Grid, Typography, Divider, Button } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
export default function NewForms() {
  const router = useRouter();
  const locales = useLocale();
  const category = [
    {
      data: [
        {
          title: "Les fondamentaux pour se sécuriser",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: "Lorem ipsum",
        },
        {
          title: "Connaitre la menace",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: "Lorem ipsum",
        },
        {
          title: "Définir la gouvernance de sécurité numérique adaptée à son organisation",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: "Lorem ipsum",
        },
        {
          title: "Intégrer la sécurité  dans les projets",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: "Lorem ipsum",
        },
        {
          title: "Structurer ses mesures de sécurité",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: "Lorem ipsum",
        },
      ],
      key: "Category 1",
    },
    {
      data: [
        {
          title: "Les fondamentaux pour se sécuriser",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: "Lorem ipsum",
        },
        {
          title: "Connaitre la menace",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: "Lorem ipsum",
        },
        {
          title: "Définir la gouvernance de sécurité numérique adaptée à son organisation",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: "Lorem ipsum",
        },
        {
          title: "Intégrer la sécurité  dans les projets",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: "Lorem ipsum",
        },
        {
          title: "Structurer ses mesures de sécurité",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: "Lorem ipsum",
        },
      ],
      key: "Category 2",
    },
  ];
  return (
    <Box
      sx={{
        mt: 20,
      }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Grid container>
          <Grid item xs={12} md={2.8} sx={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}>
            {category?.map((item, index) => {
              return (
                <Box key={index}>
                  {item === category[1] && (
                    <Divider
                      variant="middle"
                      sx={{
                        display: { md: "block", xs: "none" },
                        bgcolor: "rgba(0, 0, 0, 0.3)",
                        marginLeft: 0,
                        marginRight: 0,
                        borderBottomWidth: "1px",
                      }}
                    />
                  )}
                  <Box sx={{ padding: 3 }}>
                    <Typography
                      sx={{
                        color: "#222D55",
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 500,
                        fontSize: "15px",
                        textTransform: "uppercase",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {item?.key}
                    </Typography>
                  </Box>
                  {item?.data?.map((data, index) => {
                    return (
                      <>
                        <Divider
                          variant="middle"
                          sx={{
                            display: { md: "block", xs: "none" },
                            bgcolor: "rgba(0, 0, 0, 0.3)",
                            marginLeft: 0,
                            marginRight: 0,
                            borderBottomWidth: "1px",
                          }}
                        />
                        <Box sx={{ padding: 4 }} key={index}>
                          <Typography
                            sx={{
                              color: "#222D55",
                              fontFamily: inter.style.fontFamily,
                              fontWeight: 500,
                              fontSize: "18px",
                              display: "flex",
                              justifyContent: "start",
                            }}
                          >
                            {data?.title}
                          </Typography>
                        </Box>
                      </>
                    );
                  })}
                </Box>
              );
            })}
          </Grid>
          <Grid item md={0.4} />
          <Grid item xs={12} md={8.8}>
            <Box>
              <Typography
                sx={{
                  fontSize: { md: "39px", xs: "14px" },
                  color: "#222D55",
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                Catégorie 01
              </Typography>
              <Divider
                variant="middle"
                sx={{
                  display: { md: "block", xs: "none" },
                  bgcolor: "rgba(0, 0, 0, 0.3)",
                  marginLeft: 0,
                  mt: 2,
                  marginRight: 0,
                  borderBottomWidth: "1px",
                }}
              />
              <Grid container mt={5} columnSpacing={2}>
                {category[0]?.data?.map((data, idx) => {
                  return (
                    <Grid item xs={12} md={6} key={idx}>
                      <Box
                        sx={{
                          border: "1px solid rgba(0, 0, 0, 0.3)",
                          padding: 5,
                          position: "relative",
                          borderTop: idx !== 0 && idx !== 1 ? "none" : "1px solid rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { md: "12px", xs: "10px" },
                            color: "#222D55",
                            fontFamily: inter.style.fontFamily,
                            fontWeight: 600,
                            textTransform: "uppercase",
                          }}
                        >
                          {data?.heading}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { md: "24px", xs: "18px" },
                            color: "#222D55",
                            fontFamily: inter.style.fontFamily,
                            fontWeight: 500,
                            mt: 2,
                          }}
                        >
                          {data?.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { md: "14px", xs: "12px" },
                            lineHeight: "22px",
                            color: "#222D55",
                            fontFamily: inter.style.fontFamily,
                            fontWeight: 500,
                            mt: 2,
                          }}
                        >
                          {data?.description}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { md: "14px", xs: "12px" },
                            lineHeight: "22px",
                            color: "#222D55",
                            fontFamily: inter.style.fontFamily,
                            fontWeight: 500,
                            mt: 2,
                          }}
                        >
                          {data?.time}
                        </Typography>
                        <Box
                          sx={{
                            position: "absolute",
                            left: 50,
                            bottom: -40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 2,
                            backgroundColor: "white",
                          }}
                        >
                          <Box
                            onClick={() => router.push(`/${locales}/secureOneself/Category/Categorydetails`)}
                            sx={{
                              cursor: "pointer",
                              width: "45px",
                              height: "45px",
                              borderRadius: "50%",
                              border: "1px solid rgba(0, 0, 0, 0.3)",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <ArrowForwardIcon sx={{ color: "#222D55", width: "20px", height: "20px" }} />
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
              <Button
                variant="outlined"
                endIcon={
                  <AddIcon
                    sx={{
                      color: "#FFFFFF",
                      backgroundColor: "#7DB1FF",
                      background: "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                      borderRadius: "50%",
                      width: { md: "50px", xs: "40px" },
                      height: { md: "50px", xs: "40px" },
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
                        animation: "move-left 0.3s ease-in-out 0s 1 normal forwards",
                      },
                    }}
                  />
                }
                sx={{
                  mt: 5,
                  color: "#222D55",
                  border: "1px solid rgba(142, 155, 191, 0.3)",
                  borderRadius: "61px",
                  padding: "8px 30px",
                  fontSize: "12px",
                  fontWeight: 600,
                  background: "rgba(255, 255, 255, 0.1)",
                  ":hover": {
                    borderColor: "#8E9BBF",
                  },
                  fontFamily: inter.style.fontFamily,
                  // "& .MuiButton-endIcon": {
                  //   marginLeft: 2.2,
                  // },
                }}
              >
                découvrir plus
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
