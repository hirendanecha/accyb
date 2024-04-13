"use client";
import React from "react";
import { Box, Typography, Divider, Grid, styled, Button, TextField } from "@mui/material";
import { inter } from "../../../fonts/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const ValidationTextField = styled(TextField)({
  fontFamily: inter.style.fontFamily,
  "& label.Mui-focused": {
    color: "#222D55",
    fontWeight: 500,
    fontFamily: inter.style.fontFamily,
  },
  "& .MuiOutlinedInput-root": {
    fontFamily: inter.style.fontFamily,
    "&.Mui-focused fieldset": {
      color: "#222D55",
      borderColor: "#60176F",
      fontFamily: inter.style.fontFamily,
    },
  },
  "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
    color: "#222D55",
    fontFamily: inter.style.fontFamily,
  },
});

export default function HandleForm() {
  const router = useRouter();
  const locales = useLocale();
  return (
    <>
      <Box sx={{ marginTop: 5, border: "1px solid #E2E4E5", padding: "30px", borderRadius: "10px" }}>
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: { md: "16px", xs: "12px" },
            color: "#222D55",
            fontWeight: 600,
          }}
        >
          Informations sur le déclarant
        </Typography>
        <Grid container columnSpacing={5}>
          <Grid item xs={12} md={6} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Prénom
            </Typography>
            <ValidationTextField
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                style: {
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                },
              }}
              id="standard-basic"
              type="text"
              variant="standard"
              sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
            />
          </Grid>
          <Grid item xs={12} md={6} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Nom
            </Typography>
            <ValidationTextField
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                style: {
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                },
              }}
              id="standard-basic"
              type="text"
              variant="standard"
              sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
            />
          </Grid>
          <Grid item xs={12} md={6} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Service
            </Typography>
            <ValidationTextField
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                style: {
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                },
              }}
              id="standard-basic"
              value={name}
              type="number"
              variant="standard"
              onChange={(event) => {
                setName(event.target.value);
              }}
              sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
            />
          </Grid>
          <Grid item xs={12} md={6} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Fonction
            </Typography>
            <ValidationTextField
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                style: {
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                },
              }}
              id="standard-basic"
              value={name}
              type="number"
              variant="standard"
              onChange={(event) => {
                setName(event.target.value);
              }}
              sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
            />
          </Grid>
          <Grid item xs={12} md={12} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Téléphonne
            </Typography>
            <ValidationTextField
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                style: {
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                },
              }}
              id="standard-basic"
              value={name}
              type="number"
              variant="standard"
              onChange={(event) => {
                setName(event.target.value);
              }}
              sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
            />
          </Grid>
          <Grid item xs={12} md={12} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Adresse e-mail
            </Typography>
            <ValidationTextField
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                style: {
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                },
              }}
              id="standard-basic"
              value={name}
              type="email"
              variant="standard"
              onChange={(event) => {
                setName(event.target.value);
              }}
              sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
            />
          </Grid>
        </Grid>
      </Box>
      <Button
        onClick={() => router.push(`/${locales}/alertreports/HandleThirdForm`)}
        variant="outlined"
        endIcon={
          <ArrowForwardIcon
            sx={{
              backgroundColor: "transparent",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              color: "#222D55",
              padding: 1.7,
              marginRight: -2,
              ml: 3,
              ":hover": {
                "@keyframes move-left": {
                  "0%": {
                    rotate: "0deg",
                  },
                  "100%": {
                    rotate: "-35deg",
                  },
                },
                animation: "move-left 0.3s ease-in-out 0s 1 normal forwards",
              },
            }}
          />
        }
        sx={{
          color: "#222D55",
          border: "1px solid #222D55",
          borderRadius: "61px",
          padding: "4px 30px",
          fontSize: { md: "12px", xs: "10px" },
          mt: 6,
          fontWeight: 600,
          background: "rgba(255, 255, 255, 0.1)",
          fontFamily: inter.style.fontFamily,
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        Suivant
      </Button>
    </>
  );
}
