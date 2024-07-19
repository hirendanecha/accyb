"use client";
import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import Stepper from "../../../../Components/Common/Stepper/page";
import HandleMemberForm from "../../../../Components/Forms/HandleMemberOneForm/page";
import { inter } from "../../../../fonts/fonts";
import { useTranslations } from "next-intl";

export default function JoinAccyb() {
  const t = useTranslations("JoinACCYBFirstForm")
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box
      sx={{
        mt: {xs:10,md:20},
      }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Box sx={{ position: "sticky", top: "10%" , marginLeft : {xs:2,sm:3,md:5} }}>
              <Stepper activeStep={0} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{marginTop:{xs:5,md:0},padding:{xs:2,sm:3,md:0}}}>
            <Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  textAlign: "start",
                  fontSize: { lg: "39px", md: "30px", xs: "25px" },
                  lineHeight: { lg: "56px", md: "40px", xs: "32px" },
                  color: "#222D55",
                }}
              >
                {`${t("Title")}`}
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  textAlign: "start",
                  fontSize: { lg: "14px", md: "12px", xs: "10px" },
                  lineHeight: { lg: "22px", md: "18px", xs: "16px" },
                  color: "#222D55",
                }}
              >
                {`${t("title")}`}
              </Typography>
            </Box>
            <HandleMemberForm />
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
