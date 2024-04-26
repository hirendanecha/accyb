"use client";
import React from "react";
import { Box, Typography, Divider, Grid, styled, Button, TextField } from "@mui/material";
import { inter } from "../../../fonts/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import ReCAPTCHA from "react-google-recaptcha";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { constrainedMemory } from "process";
import { useForm } from "react-hook-form";
import { setDescriptionOfTheIncident, setRegistrantInformation } from "../../../app/redux/slices/formSlice";

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

const schema = yup
  .object({
    // personImpact: yup.string().required("Person impact is required"),
    // eventDescription: yup.string().required("Event description is required"),
    // activityStatus: yup.string().required("Activity status is required"),
    // personsImpacted: yup.string().required("Person impacted is required"),
    // sitesImpacted: yup.string().required("Sites impacted is required"),
    // categoriesImpacted: yup.string().required("Categories impacted is required"),
    // servicesImpacted: yup.string().required("Services impacted is required"),
    // impacted: yup.string().required("Impacted is required"),
    // time: yup.string().required("Time is required"),
    // date: yup.string().required("Date is required"),
  })
  .required();

export default function HandleForm() {
  const { generalInformation, registrantInformation } = useSelector((state) => state.formSlice);
  const router = useRouter();
  const locales = useLocale();
  const dispatch = useDispatch();
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),

    defaultValues: {
      personImpact: "",
      eventDescription: "",
      activityStatus: "",
      personsImpacted: "",
      sitesImpacted: "",
      categoriesImpacted: "",
      servicesImpacted: "",
      impacted: "",
      time: "",
      date: "",
    },
  });


  const onSubmit = (data) => {
    dispatch(setDescriptionOfTheIncident(data));
const payload = {
  ...data,
  ...generalInformation,
  ...registrantInformation,
}
    router.push(`/${locales}/alertreports/FinalSubmitForm`);
    console.log(payload, "payload");
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
          // setLoader(true);
        }}
      >
        <Box sx={{ marginTop: 5, border: "1px solid #E2E4E5", padding: "30px", borderRadius: "10px" }}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "20px", xs: "12px" },
              color: "#222D55",
              fontWeight: 600,
            }}
          >
            Description de l’incident
          </Typography>
          <Grid container columnSpacing={5}>
            <Grid item xs={12} md={6} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
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
                {...register("date")}
                name="date"
                id="standard-basic"
                type="date"
                // value={new Date().toISOString().split("T")[0]}
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={6} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Heure
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
                {...register("time")}
                name="time"
                id="standard-basic"
                type="time"
                // value={new Date().toLocaleTimeString()}
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Quel est le SI impacté ?
              </Typography>
              <ValidationTextField
                fullWidth
                multiline
                rows={2}
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
                {...register("impacted")}
                name="impacted"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Quels sont vos principaux services impactés ?
              </Typography>
              <ValidationTextField
                fullWidth
                multiline
                rows={3}
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
                {...register("servicesImpacted")}
                name="servicesImpacted"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={8} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Quelles sont les catégories de données potentiellement impactées ?
              </Typography>
              <FormControl sx={{ mt: 3 }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  {...register("categoriesImpacted")}
                  name="categoriesImpacted"
                >
                  <FormControlLabel
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                        color: "#222D55",
                        fontWeight: 400,
                      },
                    }}
                    value="Données métiers non confidentielles"
                    control={<Radio />}
                    label="Données métiers non confidentielles"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                        color: "#222D55",
                        fontWeight: 400,
                      },
                    }}
                    value="Données métiers confidentielles"
                    control={<Radio />}
                    label="Données métiers confidentielles"
                  />
                  <FormControlLabel
                    value="Données personnelles non confidentielles (Prénom, Nom, adresse, mail..)"
                    control={<Radio />}
                    label="Données personnelles non confidentielles (Prénom, Nom, adresse, mail..)"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                        color: "#222D55",
                        fontWeight: 400,
                      },
                    }}
                  />
                  <FormControlLabel
                    value="Données personnelles confidentielles (santé, information bancaire, opinion politique…)"
                    control={<Radio />}
                    label="Données personnelles confidentielles (santé, information bancaire, opinion politique…)"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                        color: "#222D55",
                        fontWeight: 400,
                      },
                    }}
                  />
                  <FormControlLabel
                    value="Autres (précisez) :"
                    control={<Radio />}
                    label="Autres (précisez) :"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                        color: "#222D55",
                        fontWeight: 400,
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
                Y a-t-il plusieurs sites impactés ? (Si oui précisez les communes et territoires)
              </Typography>
              <ValidationTextField
                fullWidth
                multiline
                rows={2}
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
                {...register("sitesImpacted")}
                name="sitesImpacted"
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
                Combien de personnes sont impactées ?
              </Typography>
              <ValidationTextField
                fullWidth
                multiline
                rows={2}
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
                {...register("personsImpacted")}
                name="personsImpacted"
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
                Quel est l’état de votre activité ?
              </Typography>
              <FormControl sx={{ mt: 3 }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="activityStatus"
                  {...register("activityStatus")}
                >
                  <FormControlLabel
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                        color: "#222D55",
                        fontWeight: 400,
                      },
                    }}
                    value="Fonctionnelle"
                    control={<Radio />}
                    label="Fonctionnelle"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                        color: "#222D55",
                        fontWeight: 400,
                      },
                    }}
                    value="Perturbée"
                    control={<Radio />}
                    label="Perturbée"
                  />
                  <FormControlLabel
                    value="Bloquée"
                    control={<Radio />}
                    label="Bloquée"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                        color: "#222D55",
                        fontWeight: 400,
                      },
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "15px", xs: "12px" }, color: "#222D55" }}
              >
                Description des événements observés 
              </Typography>
              <ValidationTextField
                fullWidth
                multiline
                rows={6}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style: {
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px !important",
                    fontWeight: 200,
                  },
                }}
                id="standard-basic"
                placeholder={`-        Comment avez-vous découvert l incident ? 
-        Avez-vous connaissance du vecteur de compromission ?
-        Avez-vous mis en place des mesures de protection ?
-        Quelles sont les conséquences sur vos métiers et sur vos services IT ?
              `}
                {...register("eventDescription")}
                name="eventDescription"
                type="text"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={9.5} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                Nature des personnes impactées par l’incident
              </Typography>
              <FormControl sx={{ mt: 3 }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="personImpact"
                  {...register("personImpact")}
                >
                  <FormControlLabel
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                        color: "#222D55",
                        fontWeight: 400,
                      },
                    }}
                    value="Patients"
                    control={<Radio />}
                    label="Patients"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                        color: "#222D55",
                        fontWeight: 400,
                      },
                    }}
                    value="Clients"
                    control={<Radio />}
                    label="Clients"
                  />
                  <FormControlLabel
                    value="Employés"
                    control={<Radio />}
                    label="Employés"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                        color: "#222D55",
                        fontWeight: 400,
                      },
                    }}
                  />
                  <FormControlLabel
                    value="Prestataires"
                    control={<Radio />}
                    label="Prestataires"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                        color: "#222D55",
                        fontWeight: 400,
                      },
                    }}
                  />
                  <FormControlLabel
                    value="Partenaires"
                    control={<Radio />}
                    label="Partenaires"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                        color: "#222D55",
                        fontWeight: 400,
                      },
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography
            sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
          >
            **Les propositions de catégorisation du candidat seront soumises à la validation conseil d’administration.
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} />
        </Box>

        {/* <Grid container columnSpacing={5}>
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
      </Grid> */}
        <Button
          // onClick={() => router.push(`/${locales}/alertreports/FinalSubmitForm`)}
          variant="outlined"
          type="submit"
          endIcon={
            <ArrowForwardIcon
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                color: "#BE0011",
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
            color: "#FFFFFF",
            border: "1px solid #222D55",
            borderRadius: "61px",
            padding: "8px 30px",
            fontSize: { md: "12px", xs: "10px" },
            mt: 6,
            fontWeight: 600,
            background: "#BE0011",
            fontFamily: inter.style.fontFamily,
            "&:hover": {
              backgroundColor: "#BE0011",
            },
          }}
        >
          Déclarer
        </Button>
      </form>
    </>
  );
}
