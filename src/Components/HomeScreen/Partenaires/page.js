"use client";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
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
import { inter } from "../../../app/fonts/fonts";
export default function Partenaires() {
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
      img: Logo5,
    },
    {
      img: Logo6,
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
      <Container disableGutters maxWidth={"xl"}>
        <Grid container mt={8}>
          <Grid item xs={12} lg={5.5}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "18px",
                fontWeight: 500,
                color: "#222D55",
                fontFamily: inter.style.fontFamily,
              }}
            >
              partenaires
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "center", mt: 3 }}
            >
              {partners?.map((ele, idx) => {
                return (
                  <Grid
                    key={idx}
                    item
                    md={2.5}
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: { md: "start", xs: "center" },
                    }}
                  >
                    <Image src={ele.img} width={100} height={100} alt="img" />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            item
            lg={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {" "}
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{
                borderBottomWidth: "1px",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={5.5} mt={{ md: "unset", xs: 5 }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "18px",
                fontWeight: 500,
                fontFamily: inter.style.fontFamily,
                color: "#222D55",
              }}
            >
              Soutenu par
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "center", mt: 3 }}
            >
              {supported?.map((ele, idx) => {
                return (
                  <Grid
                    key={idx}
                    item
                    md={2.4}
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: { md: "start", xs: "center" },
                    }}
                  >
                    <Image src={ele.img} width={100} height={100} alt="img" />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Divider
          variant="middle"
          sx={{
            bgcolor: "#8E9BBF",
            mt: { md: 8, xs: 5 },
            borderBottomWidth: "1px",
          }}
        />
      </Container>
      <Box mt={8}>
        <InfoSlider />
      </Box>
    </Box>
  );
}
