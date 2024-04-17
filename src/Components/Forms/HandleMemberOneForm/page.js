"use client";
import React from "react";
import { Box, Typography, Divider, Grid, styled, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { inter } from "../../../fonts/fonts";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DoneIcon from "@mui/icons-material/Done";
import MenuItem from "@mui/material/MenuItem";
import EuroIcon from "@mui/icons-material/Euro";
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
  const locales = useLocale();
  const router = useRouter();
  const [name, setName] = React.useState("Cat in the Hat");
  return (
    <Box>
      <Box sx={{ marginTop: 5, border: "1px solid #E2E4E5", padding: "30px", borderRadius: "10px" }}>
        <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "16px", xs: "12px" }, color: "#222D55" }}>
          Raison sociale
        </Typography>
        <Divider
          variant="middle"
          sx={{
            bgcolor: "#222D55",
            mt: { md: 6, xs: 5 },
            mb: { md: 10, xs: 4 },
            marginRight: 0,
            marginLeft: 0,
            opacity: "20%",
            borderBottomWidth: "1px",
          }}
        />
        <Grid container columnSpacing={5}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              SIREN
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
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              SIRET
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
              Nombre de salariés
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
              Nombre de salarié du groupe
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
        </Grid>
      </Box>
      <Box sx={{ marginTop: 5, border: "1px solid #E2E4E5", padding: "30px", borderRadius: "10px" }}>
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: { md: "20px", xs: "12px" },
            color: "#222D55",
            fontWeight: 600,
          }}
        >
          Votre entreprise
        </Typography>
        <Grid container columnSpacing={5} mt={5}>
          <Grid item xs={12} md={10}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Nature
            </Typography>
            <FormControl sx={{ mt: 3 }}>
              <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      fontFamily: inter.style.fontFamily,
                      mr: 2,
                    },
                  }}
                  value="Administration"
                  control={<Radio />}
                  label="Administration"
                />
                <FormControlLabel
                  value="Collectivité"
                  control={<Radio />}
                  label="Collectivité"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      fontFamily: inter.style.fontFamily,
                      mr: 2,
                    },
                  }}
                />
                <FormControlLabel
                  value="Organisme public"
                  control={<Radio />}
                  label="Organisme public"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      fontFamily: inter.style.fontFamily,
                      mr: 2,
                    },
                  }}
                />
                <FormControlLabel
                  value="association"
                  control={<Radio />}
                  label="Association"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      fontFamily: inter.style.fontFamily,
                      mr: 2,
                    },
                  }}
                />
                <FormControlLabel
                  value="entreprise"
                  control={<Radio />}
                  label="Entreprise"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      fontFamily: inter.style.fontFamily,
                      mr: 2,
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container columnSpacing={5} mt={5}>
          <Grid item xs={12} md={12}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Domaine d’activité
            </Typography>
            <Box mt={3}>
              <FormControl variant="standard" fullWidth>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  sx={{ fontFamily: inter.style.fontFamily }}
                  defaultValue={"Administration publique"}
                >
                  <MenuItem sx={{ fontFamily: inter.style.fontFamily }} value={"Administration publique"}>
                    Administration publique
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: 5, border: "1px solid #E2E4E5", padding: "30px", borderRadius: "10px" }}>
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: { md: "20px", xs: "12px" },
            color: "#222D55",
            fontWeight: 600,
          }}
        >
          Facturation - contact comptabilité*
        </Typography>
        <Grid container columnSpacing={5} mt={7}>
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
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
              Téléphone
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
              Email
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
              type="email"
              variant="standard"
              sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
            />
          </Grid>
          <Grid item xs={12} md={12} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Adresse de facturation
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
          <Grid item xs={12} md={12} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "12px", xs: "10px" }, color: "#222D55" }}
            >
              *L’adhésion ne sera effective qu’après l’approbation du dossier complet (y compris le bon de commande ou
              le règlement dès la candidature) par le Conseil d’administration.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: 5, border: "1px solid #E2E4E5", padding: "30px", borderRadius: "10px" }}>
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: { md: "20px", xs: "12px" },
            color: "#222D55",
            fontWeight: 600,
          }}
        >
          Catégorisation du candidat**
        </Typography>
        <Grid container mt={5}>
          <Grid item xs={12} md={5.8} sx={{ border: "1px solid #E2E4E5", borderRadius: "10px", padding: 2 }}>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Radio value="a" name="radio-buttons" />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  Collectivité Territoriale Chef de File
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "start" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <DoneIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  <span style={{ color: "#007A47" }}>comptant plus de 200 000 habitants</span> <br />
                  Un référent et jusqu’à 3 participants
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <EuroIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  Cotisation annuelle : 15 000€
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={0.4}></Grid>
          <Grid item xs={12} md={5.8} sx={{ border: "1px solid #E2E4E5", borderRadius: "10px", padding: 2 }}>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Radio value="a" name="radio-buttons" />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  Collectivité Territoriale Chef de File
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "start" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <DoneIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  <span style={{ color: "#007A47" }}>comptant plus de 200 000 habitants</span> <br />
                  Un référent et jusqu’à 3 participants
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <EuroIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  Cotisation annuelle : 7 500€
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={5}>
          <Grid item xs={12} md={5.8} sx={{ border: "1px solid #E2E4E5", borderRadius: "10px", padding: 2 }}>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Radio value="a" name="radio-buttons" />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  Collectivité
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "start" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <DoneIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  <span style={{ color: "#007A47" }}>comptant plus de 40 000 habitants</span> <br />
                  Un référent et jusqu’à 2 participants
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <EuroIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  Cotisation annuelle : 4 000€
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={0.4}></Grid>
          <Grid item xs={12} md={5.8} sx={{ border: "1px solid #E2E4E5", borderRadius: "10px", padding: 2 }}>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Radio value="a" name="radio-buttons" />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  Collectivité
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "start" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <DoneIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  <span style={{ color: "#007A47" }}>comptant entre 10 000 et 40 000 habitants</span>
                  <br />
                  Un référent et jusqu’à 1 participants
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <EuroIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  Cotisation annuelle : 2 000€
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={5}>
          <Grid item xs={12} md={5.8} sx={{ border: "1px solid #E2E4E5", borderRadius: "10px", padding: 2 }}>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Radio value="a" name="radio-buttons" />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  Collectivité
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "start" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <DoneIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  <span style={{ color: "#007A47" }}>comptant moins de 10 000 habitants</span> <br />
                  Un référent
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <EuroIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  Cotisation annuelle : 1 000€
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={0.4}></Grid>
          <Grid item xs={12} md={5.8}></Grid>
        </Grid>

        <Divider
          variant="middle"
          sx={{
            bgcolor: "#222D55",
            mt: 5,
            opacity: 0.3,
            marginLeft: 0,
            marginRight: 0,
            borderBottomWidth: "1px",
          }}
        />

        <Grid container mt={5}>
          <Grid item xs={12} md={5.8} sx={{ border: "1px solid #E2E4E5", borderRadius: "10px", padding: 2 }}>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Radio value="a" name="radio-buttons" />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  Personne morale
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "start" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <DoneIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  <span style={{ color: "#007A47" }}>groupe national ou international</span> <br />
                  Un référent et jusqu’à 3 participants
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <EuroIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  Cotisation annuelle : 15 000€
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={0.4}></Grid>
          <Grid item xs={12} md={5.8} sx={{ border: "1px solid #E2E4E5", borderRadius: "10px", padding: 2 }}>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Radio value="a" name="radio-buttons" />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  Personne morale
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "start" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <DoneIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  <span style={{ color: "#007A47" }}>groupe inter-régional</span> <br />
                  Un référent et jusqu’à 3 participants
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <EuroIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  Cotisation annuelle : 7 000€
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={5}>
          <Grid item xs={12} md={5.8} sx={{ border: "1px solid #E2E4E5", borderRadius: "10px", padding: 2 }}>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Radio value="a" name="radio-buttons" />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  Personne morale
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "start" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <DoneIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  <span style={{ color: "#007A47" }}>comptant plus de 50 salariés</span> <br />
                  Un référent et jusqu’à 2 participants
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <EuroIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  Cotisation annuelle : 4 500€
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={0.4}></Grid>
          <Grid item xs={12} md={5.8} sx={{ border: "1px solid #E2E4E5", borderRadius: "10px", padding: 2 }}>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Radio value="a" name="radio-buttons" />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  Personne morale
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "start" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <DoneIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  <span style={{ color: "#007A47" }}>comptant entre 11 et 50 salariés</span> <br />
                  Un référent et jusqu’à 1 participants
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <EuroIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  Cotisation annuelle : 15 00€
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={5}>
          <Grid item xs={12} md={5.8} sx={{ border: "1px solid #E2E4E5", borderRadius: "10px", padding: 2 }}>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Radio value="a" name="radio-buttons" />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  Personne morale
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "start" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <DoneIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  <span style={{ color: "#007A47" }}>comptant entre 4 et 10 salariés</span> <br />
                  Un référent
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <EuroIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  Cotisation annuelle : 5 00€
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={0.4}></Grid>
          <Grid item xs={12} md={5.8} sx={{ border: "1px solid #E2E4E5", borderRadius: "10px", padding: 2 }}>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Radio value="a" name="radio-buttons" />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  Personne morale
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "start" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <DoneIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  <span style={{ color: "#007A47" }}>comptant moins de 4 salariés</span> <br />
                  Un référent
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={12} md={2}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <EuroIcon style={{ color: "#9A9EA5" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
                >
                  Cotisation annuelle : 150€
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: 5, border: "1px solid #E2E4E5", padding: "30px", borderRadius: "10px" }}>
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: { md: "20px", xs: "12px" },
            color: "#222D55",
            fontWeight: 600,
            maxWidth: "450px",
          }}
        >
          Catégorisation de l’activité du candidat** (Affectation à un collège d’adhérent)
        </Typography>
        <Grid item xs={12} md={6} sx={{ borderRadius: "10px", padding: 2 }}>
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={12} md={2}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Radio value="a" name="radio-buttons" />
              </Box>
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                  fontWeight: 600,
                }}
              >
                <span style={{ color: "#007A47" }}>Offreur</span> de services cybersécurité
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={12} md={2}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Radio value="a" name="radio-buttons" />
              </Box>
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                  fontWeight: 600,
                  textWrap: "nowrap",
                }}
              >
                <span style={{ color: "#007A47" }}>Utilisateur</span> de services de cybersécurité
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}>
          **Les propositions de catégorisation du candidat seront soumises à la validation conseil d’administration.
        </Typography>
      </Box>

      <Grid container columnSpacing={5}>
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

      <Button
        onClick={() => router.push(`/${locales}/joinAccyb/SecoundForm`)}
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
        suivant
      </Button>
    </Box>
  );
}
