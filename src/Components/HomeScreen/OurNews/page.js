"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import Annousment from "@/Icons/Anounsment.svg";
import Image1 from "@/Icons/Image1.svg";
import Image2 from "@/Icons/Image2.svg";
import Image3 from "@/Icons/Image3.svg";
const Img = styled(Image)(({ theme }) => ({
  width: "100% !important",
  height: "auto !important",
}));
export default function OurNews() {
  const data = [
    {
      img: Image1,
      title: "ACTUALITÉ",
      heading: "Calendrier de l’Avent Cyber 2023",
      description:
        "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
      time: "13.01.2024",
    },
    {
      img: Image2,
      title: "ACTUALITÉ",
      heading: "Calendrier de l’Avent Cyber 2023",
      description:
        "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
      time: "13.01.2024",
    },
    {
      img: Image3,
      title: "ACTUALITÉ",
      heading: "Calendrier de l’Avent Cyber 2023",
      description:
        "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
      time: "13.01.2024",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#222D55",
        position: "relative",
        borderRadius: "20px",
        // height: "100vh",
        mt: 10,
        pb: 10,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "80px",
          width: "80px",
          borderLeft: "1px solid #222D55",
          borderBottom: "1px solid #222D55",
          borderRadius: "0 0 0% 30%",
          zIndex: 0,
          backgroundColor: "#fff",
        }}
      />
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          right : 60,
          height: "80px",
          width: "80px",
          borderTop: "1px solid #7DB1FF",
          borderRight: "1px solid #7DB1FF",
          borderRadius: "0 30% 0% 0%",
        //   backgroundColor: "red",
          // transform: "translate(50%, -50%)",
          zIndex: 0,
          backgroundColor: "#222D55",
          // boxShadow: "0px 0px 0px 1000px #fff",
        }}
      /> */}
      <Box sx={{ padding: "0 30px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: 15,
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { md: "75px", xs: "50px", lineHeight: "50px" },
              color: "#7DB1FF",
            }}
          >
            Nos actualités
          </Typography>
          <Button
            variant="outlined"
            endIcon={
              <ArrowForwardIcon
                sx={{
                  backgroundColor: "#7DB1FF",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                  width: "50px",
                  height: "50px",
                  color: "#FFFFFF",
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
              backgroundColor: "#FFFFFF",
              border: "1px solid #FFFFFF",
              borderRadius: "61px",
              padding: "8px 30px",
              fontSize: "12px",
              fontWeight: 600,
              ":hover": {
                color: "white",
                border: "1px solid #FFFFFF",
              },
            }}
          >
            voir toute NOS PUBLICATIONS
          </Button>
        </Box>
        <Divider
          variant="middle"
          sx={{
            bgcolor: "#8E9BBF",
            mt: { md: 5, xs: 5 },
            borderBottomWidth: "1px",
          }}
        />
        <Grid container columnSpacing={10} px={"50px"} pt={5}>
          <Grid item xs={12} md={6}>
            <Img src={Annousment} width={900} height={900} alt="img" />
            <Typography
              sx={{
                backgroundColor: "#007A47",
                width: "max-content",
                padding: "8px 15px 8px 15px",
                fontSize: "12px",
                mt: 3,
                color: "#FFFFFF",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Événement
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                mt: 1,
                width: "450px",
                lineHeight: "36px",
                color: "#FFFFFF",
              }}
            >
              24e Panorama de la cybercriminalité Lorem ipsum dolor sit amet
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                mt: 1,
                width: "450px",
                lineHeight: "22px",
                color: "#FFFFFF",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  mt: 2,
                  fontSize: "14px",
                  color: "#FFFFFF",
                }}
              >
                13.01.2024
              </Typography>
              <Box
                sx={{
                  border: "1px solid #FFFFFF",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center", // This centers the icon vertically
                }}
              >
                <ShareIcon
                  sx={{
                    height: "20px",
                    width: "20px",
                    color: "#FFFFFF",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {data?.map((ele, idx) => {
              return (
                <>
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      gap: 3,
                    }}
                  >
                    <Box>
                      <Image
                        src={ele?.img}
                        alt="img2"
                        width={295}
                        height={220}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "16px",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography
                          sx={{
                            backgroundColor: "#007A47",
                            width: "max-content",
                            padding: 1,
                            fontSize: "12px",
                            mb: 2,
                            padding: "8px 15px 8px 15px",
                            cursor: "pointer",
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                          }}
                        >
                          {ele?.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "18px",
                            color: "#FFFFFF",
                          }}
                        >
                          {ele?.heading}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          mt={2}
                          sx={{ color: "#FFFFFF" }}
                        >
                          {ele?.description}
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          borderRadius: "16px",
                          alignContent: "center",
                          alignItems: "center",
                          margin: "16px",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: "16px",
                            marginTop: "2px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 14,
                              fontWeight: 600,
                              color: "#FFFFFF",
                            }}
                          >
                            {ele?.time}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            border: "1px solid #FFFFFF",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", // This centers the icon vertically
                          }}
                        >
                          <ShareIcon
                            sx={{
                              height: "20px",
                              width: "20px",
                              color: "#FFFFFF",
                              cursor: "pointer",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {idx !== data.length - 1 ? (
                    <Divider
                      orientation="vertical"
                      sx={{
                        mt: 2,
                        mb: 2,
                        height: "1px", // Adjust height as needed
                        backgroundColor: "#8E9BBF", // Example color
                      }}
                    />
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
