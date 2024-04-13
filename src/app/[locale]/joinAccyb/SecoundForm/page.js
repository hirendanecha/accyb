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
import Stepper from "../../../../Components/Common/Stepper/page";
import HandleMemberForm from "../../../../Components/Forms/HandleMmbersTwoForm/page";
import { inter } from "../../../../fonts/fonts";

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
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Stepper activeStep={0} />
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
                Référent de l’adhésion
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
                Seul le référent de l’adhésion peut exercer le droit de vote de l’organisation adhérente.
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
                Cette adhésion vous permet notamment de représenter son organisme aux assemblées générales, participer
                aux groupes de travail de l’ACCYB, assister à nos manifestations, avoir accès à l’annuaire des membres,
                être informé de conférences ou salons dont l’ACCYB est partenaire et bénéficier de tarifs préférentiels
                sur certaines manifestations et publications.
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
