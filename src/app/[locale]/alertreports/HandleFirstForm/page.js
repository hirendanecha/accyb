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
import FirstAlertForm from "../../../../Components/FormAlerts/FirstAlertForm/page";
import { inter } from "../../../../fonts/fonts";
import SecoundStepper from "../../../../Components/Common/SecoundStepper/page";
export default function HandleFirstForm() {
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
            <Box sx={{ position: "sticky", top: "25%", marginLeft: 5 }}>
              <SecoundStepper activeStep={0} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{marginTop:5,padding:2}}>
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
            <FirstAlertForm />
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
