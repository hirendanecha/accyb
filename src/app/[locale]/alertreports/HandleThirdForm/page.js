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
import ThirdAlertForm from "../../../../Components/FormAlerts/ThirdAlertForm/page";
import { inter } from "../../../../fonts/fonts";
import SecoundStepper from "../../../../Components/Common/SecoundStepper/page";
export default function HandleSecoundForm() {
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
            <Box
              sx={{
                position: "sticky",
                top: "20%",
                marginLeft: { xs: 2,sm:3, md: 5 },
              }}
            >
              <SecoundStepper activeStep={2} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ marginTop: { xs: 5, sm: 0 }, padding: { xs: 2, sm:3,md: 0 } }}
          >
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
                Déclarer un incident - CSIRT
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  fontFamily: inter.style.fontFamily,
                  textAlign: "start",
                  fontSize: { lg: "14px", md: "12px", xs: "12px" },
                  lineHeight: { lg: "22px", md: "20px", xs: "20px" },
                  color: "#222D55",
                }}
              >
                Ce formulaire d’adhésion couvre la période du 01 janvier 2024 au 31 décembre 2025
              </Typography>
            </Box>
            <ThirdAlertForm />
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
