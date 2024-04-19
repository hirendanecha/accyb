"use client";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Box, Typography, Divider, Grid, styled, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { inter } from "../../../fonts/fonts";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

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
  const [name, setName] = React.useState("Cat in the Hat");
  const locales = useLocale();
  const router = useRouter();
  return (
    <>
      <Box>
        <Box sx={{ marginTop: 5, border: "1px solid #E2E4E5", padding: "30px", borderRadius: "10px" }}>
          <Grid container columnSpacing={5}>
            <Grid item xs={12} md={2}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Civilité
              </Typography>
              <FormControl variant="standard" fullWidth>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  sx={{ fontFamily: inter.style.fontFamily }}
                  defaultValue={"M"}
                >
                  <MenuItem sx={{ fontFamily: inter.style.fontFamily }} value={"M"}>
                    M
                  </MenuItem>
                  <MenuItem sx={{ fontFamily: inter.style.fontFamily }} value={"L"}>
                    L
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={5}>
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
                type="number"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
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
                type="number"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Organisation adhérente
              </Typography>
              <ValidationTextField
                multiline
                rows={1}
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
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Fonction
              </Typography>
              <ValidationTextField
                multiline
                rows={1}
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
                Téléphone Mobile
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
                type="number"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={6} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Téléphone Fixe
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
                type="number"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                E-mail professionnel
              </Typography>
              <ValidationTextField
                multiline
                rows={1}
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
                type="email"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Adresse postale professionnelle
              </Typography>
              <ValidationTextField
                multiline
                rows={1}
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
                type="email"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Intérêts spécifiques en sécurité
              </Typography>
              <ValidationTextField
                multiline
                rows={1}
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
                type="email"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Comment avez-vous connu l’ACCYB ?
              </Typography>
              <ValidationTextField
                multiline
                rows={1}
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
                type="email"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Quelles sont vos motivations pour adhérer à l’ACCYB ? (obligatoire)
              </Typography>
              <ValidationTextField
                multiline
                rows={3}
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
                // placeholder="Quelles sont vos motivations pour adhérer à l’ACCYB ? (obligatoire)"
                type="email"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ marginTop: 5, border: "1px solid #E2E4E5", padding: "30px", borderRadius: "10px" }}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "16px", xs: "12px" },
              color: "#222D55",
              fontWeight: 600,
            }}
          >
            Suppléant
          </Typography>
          <Grid container columnSpacing={5} mt={5}>
            <Grid item xs={12} md={2}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Civilité
              </Typography>
              <FormControl variant="standard" fullWidth>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  sx={{ fontFamily: inter.style.fontFamily }}
                  defaultValue={"M"}
                >
                  <MenuItem sx={{ fontFamily: inter.style.fontFamily }} value={"M"}>
                    M
                  </MenuItem>
                  <MenuItem sx={{ fontFamily: inter.style.fontFamily }} value={"L"}>
                    L
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={5}>
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
                type="number"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
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
                type="number"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Fonction
              </Typography>
              <ValidationTextField
                multiline
                rows={1}
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
                Téléphone Mobile
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
                type="number"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={6} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Téléphone Fixe
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
                type="number"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                E-mail professionnel
              </Typography>
              <ValidationTextField
                multiline
                rows={2}
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
                type="email"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 5, padding: "0 16px" }}>
          <FormControl sx={{ mt: 1 }}>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "14px",
                    fontFamily: inter.style.fontFamily,
                    color: "#222D55",
                    fontWeight: 400,
                  },
                }}
                value="Je déclare avoir pris connaissance des statuts et du règlement intérieur de l’Agence Caribéenne pour la Cybersécurité. L’adhésion de mon organisme ne sera effective qu’après le paiement intégral de la cotisation."
                control={<Radio />}
                label="Je déclare avoir pris connaissance des statuts et du règlement intérieur de l’Agence Caribéenne pour la Cybersécurité. L’adhésion de mon organisme ne sera effective qu’après le paiement intégral de la cotisation."
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ mt: 5, padding: "0 16px" }}>
          <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} />
        </Box>
        <Grid
          container
          columnSpacing={5}
          sx={{
            padding: "0 16px",
          }}
        >
          <Grid item xs={12} md={6} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "18px", xs: "12px" }, color: "#222D55" }}
            >
              Date
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
              type="date"
              variant="standard"
              sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500, mt: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "18px", xs: "12px" }, color: "#222D55" }}
            >
              Signature, Lu et approuvé
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
              sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500, mt: 2 }}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            padding: "0 16px",
          }}
        >
          <Button
            onClick={() => router.push(`/${locales}/joinAccyb/FinalSubmitForm`)}
            variant="outlined"
            endIcon={
              <ArrowForwardIcon
                sx={{
                  backgroundColor: "#7DB1FF",
                  background: "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  color: "#ffffff",
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
              padding: "8px 30px",
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
            je veux devenir bénévole
          </Button>
        </Box>
      </Box>
    </>
  );
}
