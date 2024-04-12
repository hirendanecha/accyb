import React from "react";
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
import Stepper from "../../../Components/Common/Stepper/page";
import HandleForm from "../../../Components/HandleForm/page";
import { inter } from "../../../fonts/fonts";

export default function JoinAccyb() {
  return (
    <Box
      sx={{
        mt: 20,
      }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Stepper />
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
                Bulletin d’adhésion 2024
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
                Ce formulaire d’adhésion couvre la période du 01 janvier 2023 au 31 décembre 2024
              </Typography>
            </Box>
            <HandleForm />
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
