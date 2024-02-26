"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { inter } from "../../../../fonts/fonts";
import Image from "next/image";
import Image2 from "../../../../Icons/Event2.svg";
import Image1 from "../../../../Icons/Event1.svg";
import ShareIcon from "@mui/icons-material/Share";

const Img = styled(Image)(({ theme }) => ({
  width: "100% !important",
  height: "auto !important",
}));

export default function OurEvents() {
  const subCategory = [
    {
      img: Image1,
      title: "Janvier",
      heading: "24e Panorama de la cybercriminalité Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      time: "13.01.2024",
    },
    {
      img: Image2,
      title: "Janvier",
      heading: "24e Panorama de la cybercriminalité Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      time: "13.01.2024",
    },
  ];
  const [content, setContent] = useState(
    subCategory?.filter((ele) => ele?.title == "Janvier")
  );
  const [currentCategory, setCurrentCategory] = useState("Janvier");
  const category = [
    "Janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "Octobre",
    "novembre",
    "décembre",
  ];

  const handleClick = (id) => {
    // console.log("id", id);
    setCurrentCategory(id);
    const aa = subCategory?.filter((ele) => ele?.title == id);
    setContent(aa);
  };
  const articles = [
    {
      img: Image1,
      title: "CATÉGORIE 1",
      heading: "Formation Scan & Cybersécurité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "3000€",
    },
    {
      img: Image1,
      title: "CATÉGORIE 1",
      heading: "Formation Scan & Cybersécurité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "3000€",
    },
    {
      img: Image1,
      title: "CATÉGORIE 1",
      heading: "Formation Scan & Cybersécurité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "3000€",
    },
    {
      img: Image1,
      title: "CATÉGORIE 1",
      heading: "Formation Scan & Cybersécurité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "3000€",
    },
    {
      img: Image1,
      title: "CATÉGORIE 1",
      heading: "Formation Scan & Cybersécurité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "3000€",
    },
    {
      img: Image1,
      title: "CATÉGORIE 1",
      heading: "Formation Scan & Cybersécurité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "3000€",
    },
  ];
  return (
    <Box sx={{ padding: "0 16px" }}>
      <Container disableGutters maxWidth={"xl"}>
        <Typography
          sx={{ color: "#222D55", fontSize: { md: "39px", xs: "24px" } }}
        >
          Nos événements
        </Typography>
        <Box
          sx={{
            overflowX: "auto",
            width: "100%",
            display: "flex",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: { md: 5, xs: 2 },
              overflowX: "scroll",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {category?.map((ele, idx) => {
              return (
                <Button
                  onClick={() => handleClick(ele)}
                  key={idx}
                  sx={{
                    minWidth: "180px",
                    fontFamily: inter.style.fontFamily,
                    backgroundImage:
                      currentCategory == ele
                        ? "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)"
                        : "transparent",
                    border: !currentCategory == ele ? "" : "1px solid #D3D5DD",
                    textTransform: "uppercase",
                    padding: "15px 40px 15px 40px",
                    fontSize: { md: "14px", xs: "12px" },
                    color: currentCategory == ele ? "#FFFFFF" : "#222D55",
                    borderRadius: "50px",
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  {ele}
                </Button>
              );
            })}
          </Box>
        </Box>
        <Grid
          container
          mt={{ md: 10, xs: 5 }}
          justifyContent={"center"}
          columnSpacing={3}
          rowSpacing={{ md: 0, xs: 3 }}
        >
          {content?.length > 0 ? (
            content?.map((ele) => {
              return (
                <>
                  <Grid item xs={12} md={6} lg={6}>
                    <Img src={ele?.img} width={900} height={900} alt="img" />
                    <Box>
                      <Typography
                        sx={{
                          backgroundImage:
                            "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                          width: "max-content",
                          padding: "8px 15px 8px 15px",
                          fontSize: "12px",
                          mt: 3,
                          color: "#FFFFFF",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          fontFamily: inter.style.fontFamily,
                        }}
                      >
                        {ele?.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          mt: 1,
                          width: { md: "450px", xs: "100%" },
                          lineHeight: "36px",
                          color: "#222D55",
                          fontFamily: inter.style.fontFamily,
                        }}
                      >
                        {ele?.heading}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          mt: 1,
                          width: { md: "450px", xs: "100%" },
                          lineHeight: "22px",
                          color: "#222D55",
                          fontFamily: inter.style.fontFamily,
                        }}
                      >
                        {ele?.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 500,
                            mt: 2,
                            fontSize: "14px",
                            color: "#222D55",
                            fontFamily: inter.style.fontFamily,
                          }}
                        >
                          {ele?.time}
                        </Typography>
                        <Box
                          sx={{
                            border: "1px solid #222D55",
                            width: "35px",
                            height: "35px",
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
                              color: "#222D55",
                              cursor: "pointer",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </>
              );
            })
          ) : (
            <Box
              sx={{
                display: "flex",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                }}
              >
                No Event Found
              </Typography>
            </Box>
          )}
        </Grid>
        <Typography
          sx={{ color: "#222D55", fontSize: { md: "39px", xs: "24px" }, mt: 8 }}
        >
          Articles
        </Typography>
        <Divider
          variant="middle"
          sx={{
            display: { md: "block", xs: "none" },
            bgcolor: "#D3D5DD",
            mt: 2,
            borderBottomWidth: "1px",
          }}
        />
        <Grid container mt={3} justifyContent={"space-between"} rowSpacing={3}>
          {articles?.map((ele, idx) => {
            return (
              <>
                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      flexDirection: { lg: "row", md: "column", xs: "column" },
                    }}
                  >
                    <Box>
                      <Img
                        src={ele?.img}
                        width={295}
                        height={220}
                        alt="image1"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          backgroundImage:
                            "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                          width: "max-content",
                          padding: 1,
                          fontSize: "12px",
                          mb: 1,
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
                          fontFamily: inter.style.fontFamily,
                          fontWeight: 600,
                          fontSize: "18px",
                          maxWidth: { lg: "230px", md: "100%" },
                          color: "#222D55",
                        }}
                      >
                        {ele?.heading}
                      </Typography>
                      <Typography
                        mt={1}
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          color: "#222D55",
                          fontSize: "14px",
                          maxWidth: "350px",
                        }}
                      >
                        {ele?.description}
                      </Typography>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 1,
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontSize: 14,
                                fontWeight: 600,
                                color: "3000€",
                              }}
                            >
                              {ele?.time}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
