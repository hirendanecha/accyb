"use client";
import { Box, Container, Divider, Typography, styled } from "@mui/material";
import React from "react";
import Logo1 from "../../../Icons/Partners/Logo1.svg";
import Logo2 from "../../../Icons/Partners/Logo2.svg";
import Logo3 from "../../../Icons/Partners/Logo3.svg";
import Logo4 from "../../../Icons/Partners/Logo4.svg";
import Logo5 from "../../../Icons/Supported/Logo1.svg";
import Logo6 from "../../../Icons/Supported/Logo2.svg";
import Logo7 from "../../../Icons/Supported/Logo3.svg";
import Logo8 from "../../../Icons/Supported/Logo4.svg";
import Logo9 from "../../../Icons/Supported/Logo5.svg";
import Image from "next/image";
import InfoSlider from "../../../Components/InfoSlider/page";
import { inter } from "../../../fonts/fonts";
import { useTranslations } from "next-intl";

const Img = styled(Image)(({ theme }) => ({
  width: "90px !important",
  height: "97px !important",
}));

export default function Partenaires() {
  const t = useTranslations("partners");
  const partners = [
    {
      img: Logo1,
    },
    {
      img: Logo2,
    },
    {
      img: Logo3,
    },
    {
      img: Logo4,
    },
  ];
  const supported = [
    {
      img: Logo6,
    },
    {
      img: Logo5,
    },
    {
      img: Logo7,
    },
    {
      img: Logo8,
    },
    {
      img: Logo9,
    },
  ];
  return (
    <Box sx={{ padding: "0 16px" }}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          mt: 6,
          display: "flex",
          overflowX: "scroll",
          justifyContent: { md: "space-around", xs: "unset" },
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            gap: { md: 2, xs: 1 },
            flexWrap: "nowrap",
          }}
        >
          <Typography
            sx={{
              color: "#222D55",
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "14px", xs: "12px" },
              maxWidth: "100px",
              textAlign: "end",
              mr: 1,
            }}
          >
            Partenaires majeurs
          </Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ bgcolor: "#000000", height: "90px" }}
          />
          {partners?.map((ele, idx) => {
            return (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: { md: "start", xs: "center" },
                  mb: 2,
                  mr: { md: 2, xs: 0 },
                }}
              >
                <Img src={ele.img} width={900} height={900} alt="img" />
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            gap: 2,
            flexWrap: "nowrap",
          }}
        >
          <Typography
            sx={{
              color: "#222D55",
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "14px", xs: "12px" },
              maxWidth: "100px",
              textAlign: "end",
              mr: 1,
            }}
          >
            Avec le soutien de
          </Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ bgcolor: "#000000", height: "90px" }}
          />
          {supported?.map((ele, idx) => {
            return (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: { md: "start", xs: "center" },
                  mb: 2,
                  mr: { md: 2, xs: 0 },
                }}
              >
                <Img src={ele.img} width={100} height={100} alt="img" />
              </Box>
            );
          })}
        </Box>
      </Container>
      <Divider
        variant="middle"
        sx={{
          display: { md: "block", xs: "none" },
          bgcolor: "#222D55",
          mt: { md: 8, xs: 5 },
          opacity: "20%",
          borderBottomWidth: "1px",
        }}
      />
      <Box mt={8}>
        <InfoSlider />
      </Box>
    </Box>
  );
}
