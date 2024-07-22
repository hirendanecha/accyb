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
import HandleMemberForm from "../../../../Components/Forms/HandleMmbersTwoForm/page";
import { inter } from "../../../../fonts/fonts";
import { useTranslations } from "next-intl";

export default function JoinAccyb() {
  const t = useTranslations('JoinACCYB_SecondForm');
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box
      sx={{
        mt: 20,
      }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Box sx={{ position: "sticky", top: "20%", marginLeft : 5}}>
              <Stepper activeStep={1} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
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
                  mt: 2,
                  fontFamily: inter.style.fontFamily,
                  textAlign: "start",
                  fontSize: { lg: "14px", md: "12px", xs: "10px" },
                  lineHeight: { lg: "22px", md: "18px", xs: "16px" },
                  color: "#222D55",
                }}
              >
                {`${t("text1")}`}
              </Typography>
              <Typography
                sx={{
                  mt: 5,
                  fontFamily: inter.style.fontFamily,
                  textAlign: "start",
                  fontSize: { lg: "14px", md: "12px", xs: "10px" },
                  lineHeight: { lg: "22px", md: "18px", xs: "16px" },
                  color: "#222D55",
                }}
              >
                {`${t("text2")}`}
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
