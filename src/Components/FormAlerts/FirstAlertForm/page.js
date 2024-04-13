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
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: { md: "16px", xs: "12px" },
            color: "#222D55",
            fontWeight: 600,
          }}
        >
          Informations générales
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
          <Grid item xs={12} md={12}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#575F6E" }}
            >
              Date de la déclaration
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
              sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
            />
          </Grid>
          <Grid item xs={12} md={12} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Dénomination de l’entreprise
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
              type="text"
              variant="standard"
              sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
            />
          </Grid>
          <Grid item xs={12} md={12} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Êtes-vous adhérent à l’ACCYB ?
            </Typography>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" sx={{ mt: 2 }}>
              <FormControlLabel
                value="OUI"
                control={<Radio />}
                label="OUI"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "14px",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 600,
                    color: "#007A47",
                  },
                }}
              />
              <FormControlLabel
                value="NON"
                control={<Radio />}
                label="NON"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "14px",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 600,
                    color: "#007A47",
                  },
                }}
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} md={12} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Type de structure
            </Typography>
            <Box mt={3}>
              <FormControl variant="standard" fullWidth>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  sx={{ fontFamily: inter.style.fontFamily }}
                  defaultValue={"PME"}
                >
                  <MenuItem sx={{ fontFamily: inter.style.fontFamily }} value={"PME"}>
                    PME
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Secteur d’activité
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
          <Grid item xs={12} md={12} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Territoire
            </Typography>
            <FormControl sx={{ mt: 3 }}>
              <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      fontFamily: inter.style.fontFamily,
                      color: "#222D55",
                      fontWeight: 600,
                    },
                  }}
                  value="Guadeloupe"
                  control={<Radio />}
                  label="Guadeloupe"
                />
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      fontFamily: inter.style.fontFamily,
                      color: "#222D55",
                      fontWeight: 600,
                    },
                  }}
                  value="Guadeloupe"
                  control={<Radio />}
                  label="Guadeloupe"
                />
                <FormControlLabel
                  value="Saint-Barthélemy"
                  control={<Radio />}
                  label="Saint-Barthélemy"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      fontFamily: inter.style.fontFamily,
                      color: "#222D55",
                      fontWeight: 600,
                    },
                  }}
                />
                <FormControlLabel
                  value="Saint-Barthélemy"
                  control={<Radio />}
                  label="Saint-Barthélemy"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      fontFamily: inter.style.fontFamily,
                      color: "#222D55",
                      fontWeight: 600,
                    },
                  }}
                />
                <FormControlLabel
                  value="Saint-Martin"
                  control={<Radio />}
                  label="Saint-Martin"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      fontFamily: inter.style.fontFamily,
                      color: "#222D55",
                      fontWeight: 600,
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Commune de [Territory_name]
            </Typography>
            <Box mt={3}>
              <FormControl variant="standard" fullWidth>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  sx={{ fontFamily: inter.style.fontFamily }}
                  defaultValue={"Lorem ipsum"}
                >
                  <MenuItem sx={{ fontFamily: inter.style.fontFamily }} value={"Lorem ipsum"}>
                    Lorem ipsum
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} mt={5}>
            <Typography
              sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
            >
              Commune de [Territory_name]
            </Typography>
            <Box mt={3}>
              <FormControl variant="standard" fullWidth>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  sx={{ fontFamily: inter.style.fontFamily }}
                  defaultValue={"Lorem ipsum"}
                >
                  <MenuItem sx={{ fontFamily: inter.style.fontFamily }} value={"Lorem ipsum"}>
                    Lorem ipsum
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Button
        onClick={() => router.push(`/${locales}/alertreports/HandleSecoundForm`)}
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
    </Box>
  );
}
