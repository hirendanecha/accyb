"use client";
import React, { useState } from "react";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { inter } from "../../../../fonts/fonts";
import { useTranslations } from "next-intl";
export default function FinalSubmitForm() {
  const t = useTranslations('DeclareAnIncident_ThirdForm')
  return (
    <Box
      sx={{
        mt: 20,
      }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Grid container>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                sx={{
                  mt: 20,
                  mb: 20,
                  fontFamily: inter.style.fontFamily,
                  textAlign: "center",
                  fontWeight: "500",
                  fontSize: { lg: "39px", md: "30px", xs: "25px" },
                  lineHeight: { lg: "56px", md: "40px", xs: "32px" },
                  color: "#222D55",
                  maxWidth: "700px",
                }}
              >
                {`${t('finalText')}`}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
