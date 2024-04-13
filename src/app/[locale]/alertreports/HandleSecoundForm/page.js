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
import SecoundAlertForm from "../../../../Components/FormAlerts/SecoundAlertForm/page";
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
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <SecoundStepper activeStep={1} />
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
                Déclarer un incident - CSIRT
              </Typography>
            </Box>
            <SecoundAlertForm />
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
