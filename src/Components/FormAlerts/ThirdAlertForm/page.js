"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  styled,
  Button,
  TextField,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { inter } from "../../../fonts/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
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
import {
  setDescriptionOfTheIncident,
  setRegistrantInformation,
} from "../../../app/redux/slices/formSlice";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

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
    eventDescription: yup.string().required("Event description is required"),
    // activityStatus: yup.string().required("Activity status is required"),
    personsImpacted: yup.string().required("Person impacted is required"),
    sitesImpacted: yup.string().required("Sites impacted is required"),
    // categoriesImpacted: yup.array(yup.string()).required("Categories impacted is required"),
    servicesImpacted: yup.string().required("Services impacted is required"),
    impacted: yup.string().required("Impacted is required"),
    time: yup.string().required("Time is required"),
    date: yup.string().required("Date is required"),

  })
  .required();

export default function HandleForm() {
  const t = useTranslations("DeclareAnIncident_ThirdForm");
  const {
    generalInformation,
    registrantInformation,
    descriptionOfTheIncident,
  } = useSelector((state) => state.formSlice);
  console.log(generalInformation, "generalInformation");
  console.log(registrantInformation, "registrantInformation");
  console.log(descriptionOfTheIncident, "descriptionOfTheIncident");
  const router = useRouter();
  const locales = useLocale();
  const dispatch = useDispatch();
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedNatureValues, setSelectedNatureValues] = useState([]);

  useEffect(() => {
    console.log(selectedValues, "selectedValues");
    setValue("categoriesImpacted", selectedValues);
    console.log(selectedNatureValues, "selectedNatureValues");
    setValue("personImpact", selectedNatureValues);
  }, [selectedValues, selectedNatureValues]);

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
      hasAcceptedCaptcha: false,
    },
  });

  console.log(errors, "errors");


  const captch = watch("hasAcceptedCaptcha");

  const sendEmail = async (
    generalInformation,
    registrantInformation,
    descriptionOfTheIncident
  ) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/web/send-email/`,
        { generalInformation, registrantInformation, descriptionOfTheIncident },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "custom-auth-token"
            )}`,
          },
        }
      );
      console.log("Email sent:", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const onSubmit = (data) => {
    dispatch(setDescriptionOfTheIncident(data));
    const payload = {
      ...data,
      ...generalInformation,
      ...registrantInformation,
    };
    sendEmail(generalInformation, registrantInformation, data);
    console.log(payload, "payload");
    toast.success("Votre déclaration d’incident a bien été envoyé.");
    setTimeout(() => {
      router.push(`/${locales}/alertreports/FinalSubmitForm`);
    }, [2000]);
    // router.push(`/${locales}/alertreports/FinalSubmitForm`);
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
        <Box
          sx={{
            marginTop: 5,
            border: { xs: "none", sm: "1px solid #E2E4E5" },
            padding: { xs: "none", sm: "30px" },
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "20px", xs: "12px" },
              color: "#222D55",
              fontWeight: 600,
            }}
          >
            {`${t("title")}`}
          </Typography>
          <Grid container columnSpacing={5}>
            <Grid item xs={12} md={6} mt={5}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
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
                error={errors?.date}
                name="date"
                id="standard-basic"
                type="date"
                // value={new Date().toISOString().split("T")[0]}
                variant="standard"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} mt={5}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55"
                }}
              >
                {`${t("field2")}`}
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
                error={errors?.time}
                name="time"
                id="standard-basic"
                type="time"
                // value={new Date().toLocaleTimeString()}
                variant="standard"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
              >
                {`${t("field3")}`}
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
                error={errors?.impacted}
                name="impacted"
                variant="standard"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
              >
                {`${t("field4")}`}
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
                error={errors?.servicesImpacted}
                name="servicesImpacted"
                variant="standard"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                }}
              />
            </Grid>
            <Grid item xs={12} md={8} mt={5}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
              >
                {`${t("field5")}`}
              </Typography>
              <FormControl sx={{ mt: 3 }}>
                <FormGroup>
                  {[
                    {
                      label: `${t("field5Item1")}`,
                      value: "Données métiers non confidentielles",
                    },
                    {
                      label: `${t("field5Item2")}`,
                      value: "Données métiers confidentielles",
                    },
                    {
                      label: `${t("field5Item3")}`,
                      value:
                        "Données personnelles non confidentielles (Prénom, Nom, adresse, mail..)",
                    },
                    {
                      label: `${t("field5Item4")}`,
                      value:
                        "Données personnelles confidentielles (santé, information bancaire, opinion politique…)",
                    },
                    {
                      label: `${t("field5Item5")}`,
                      value: "Autres (précisez) :",
                    },
                  ].map((item) => (
                    <FormControlLabel
                      key={item.value}
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "14px",
                          fontFamily: inter.style.fontFamily,
                          color: "#222D55",
                          fontWeight: 400,
                        },
                      }}
                      control={
                        <Checkbox
                          checked={selectedValues?.includes(item.value)}
                          onChange={(e) => {
                            const { value } = e.target;
                            setSelectedValues((prev) =>
                              prev.includes(value)
                                ? prev.filter((val) => val !== value)
                                : [...prev, value]
                            );
                            // console.log(selectedValues, "selectedValues");
                            // setValue("categoriesImpacted", selectedValues);
                          }}
                          value={item.value}

                        />
                      }
                      label={item.label}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
              >
                {`${t("field6")}`}
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
                error={errors?.sitesImpacted}
                name="sitesImpacted"
                id="standard-basic"
                type="text"
                variant="standard"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
              >
                {`${t("field7")}`}
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
                // error={errors?.personsImpacted}
                name="personsImpacted"
                id="standard-basic"
                type="text"
                variant="standard"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
              >
                {`${t("field8")}`}
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
                    label={`${t("field8Option1")}`}
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
                    label={`${t("field8Option2")}`}
                  />
                  <FormControlLabel
                    value="Bloquée"
                    control={<Radio />}
                    label={`${t("field8Option3")}`}
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
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "15px", xs: "12px" },
                  color: "#222D55",
                }}
              >
                {`${t("field9")}`}
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
                    fontSize: { xs: "12px !important", sm: "14px !important" },
                    fontWeight: 200,
                  },
                }}
                id="standard-basic"
                placeholder={`-${t("field9Placeholder1")} 
-${t("field9Placeholder2")}
-${t("field9Placeholder3")}
-${t("field9Placeholder4")}
              `}
                {...register("eventDescription")}
                error={errors?.eventDescription}
                name="eventDescription"
                type="text"
                variant="standard"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                }}
              />
            </Grid>
            <Grid item xs={12} md={9.5} mt={5}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
              >
                {`${t('field10')}`}
              </Typography>
              <FormControl sx={{ mt: 3 }}>
                <FormGroup>
                  {[
                    {
                      label: `${t('field10Option1')}`,
                      value: "Patients",
                    },
                    {
                      label: `${t('field10Option2')}`,
                      value: "Clients",
                    },
                    {
                      label: `${t('field10Option3')}`,
                      value: "Prestataires",
                    },
                    {
                      label: `${t('field10Option4')}`,
                      value: "Partenaires",
                    },
                  ].map((item) => (
                    <FormControlLabel
                      key={item.value}
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "14px",
                          fontFamily: inter.style.fontFamily,
                          color: "#222D55",
                          fontWeight: 400,
                        },
                      }}
                      control={
                        <Checkbox
                          checked={selectedNatureValues?.includes(item.value)}
                          onChange={(e) => {
                            const { value } = e.target;
                            setSelectedNatureValues((prev) =>
                              prev.includes(value)
                                ? prev.filter((val) => val !== value)
                                : [...prev, value]
                            );
                            // console.log(selectedValues, "selectedValues");
                            // setValue("categoriesImpacted", selectedValues);
                          }}
                          value={item.value}
                        />
                      }
                      label={item.label}
                    />
                  ))}
                </FormGroup>
              </FormControl>
              {/* <FormControl sx={{ mt: 3 }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="personImpact"
                  onChange={(e) => setValue("personImpact", e.target.value)}
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
              </FormControl> */}
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 5 }}>
          {/* <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "14px", xs: "12px" },
              color: "#222D55",
            }}
          >
            **Les propositions de catégorisation du candidat seront soumises à
            la validation conseil d’administration.
          </Typography> */}
        </Box>
        <Box
          sx={{
            mt: 5,
            display: { xs: "flex", sm: "unset" },
            justifyContent: { xs: "center", sm: "none" },
            alignItems: { xs: "center", sm: "none" },
          }}
        >
          <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} onChange={(val) => {
            setValue("hasAcceptedCaptcha", true);
          }}

          />
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
            color: !captch ? "#FFFFFF !important" : "#FFFFFF",
            opacity: !captch ? 0.5 : 1,
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
          disabled={!captch}
        >
          {`${t('button')}`}
        </Button>
      </form >
      <ToastContainer />
    </>
  );
}
