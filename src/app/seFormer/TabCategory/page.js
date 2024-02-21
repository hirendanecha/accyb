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
import { inter } from "../../fonts/fonts";
import Image from "next/image";
import Image1 from "../../../Icons/Image1.png";

const Img = styled(Image)(({ theme }) => ({
  width: "100% !important",
  height: "auto !important",
}));

export default function TabCategory() {
  const subCategory = [
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
    {
      img: Image1,
      title: "CATÉGORIE 2",
      heading: "Formation Scan & Cybersécurité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "3000€",
    },
    {
      img: Image1,
      title: "CATÉGORIE 3",
      heading: "Formation Scan & Cybersécurité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "3000€",
    },
    {
      img: Image1,
      title: "CATÉGORIE 4",
      heading: "Formation Scan & Cybersécurité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "3000€",
    },
    {
      img: Image1,
      title: "CATÉGORIE 5",
      heading: "Formation Scan & Cybersécurité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "3000€",
    },
    {
      img: Image1,
      title: "CATÉGORIE 6",
      heading: "Formation Scan & Cybersécurité",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "3000€",
    },
  ];
  const [content, setContent] = useState(
    subCategory?.filter((ele) => ele?.title == "CATÉGORIE 1")
  );
  const [currentCategory, setCurrentCategory] = useState("CATÉGORIE 1");
  const category = [
    "CATÉGORIE 1",
    "CATÉGORIE 2",
    "CATÉGORIE 3",
    "CATÉGORIE 4",
    "CATÉGORIE 5",
  ];

  const handleClick = (id) => {
    // console.log("id", id);
    setCurrentCategory(id);
    const aa = subCategory?.filter((ele) => ele?.title == id);
    setContent(aa);
  };
  return (
    <Box sx={{ padding: "0 16px" }}>
      <Container disableGutters maxWidth={"xl"}>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography
            sx={{
              color: "#222D55",
              fontWeight: 600,
              fontFamily: inter.style.fontFamily,
            }}
          >
            Scrollez pour dévouvrir
          </Typography>
          <Typography
            sx={{
              color: "#222D55",
              fontWeight: 600,
              fontFamily: inter.style.fontFamily,
            }}
          >
            Scrollez
          </Typography>
        </Box>
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
              minWidth: "900px",
            }}
          >
            {category?.map((ele, idx) => {
              return (
                <Button
                  onClick={() => handleClick(ele)}
                  key={idx}
                  sx={{
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
          justifyContent={"space-between"}
          rowSpacing={3}
        >
          {content?.map((ele, idx) => {
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
