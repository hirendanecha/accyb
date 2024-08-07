"use client";
import React from "react";
import { Box, Typography, Divider, Grid, styled, Button, TextField } from "@mui/material";
import { inter } from "../../../fonts/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { constrainedMemory } from "process";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setRegistrantInformation } from "../../../app/redux/slices/formSlice";

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
    firstName: yup.string().required("First name is required"),
    name: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    telephone: yup.string().required("Phone number is required"),
    service: yup.string().required("service is required"),
    fonction: yup.string().required("Fonction is required"),
  })
  .required();

export default function HandleForm() {
  const t = useTranslations('DeclareAnIncident_SecondFrom')
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
      firstName: "",
      name: "",
      email: "",
      telephone: "",
      service: "",
      fonction: "",
    },
  });


  const onSubmit = (data) => {
    dispatch(setRegistrantInformation(data));
    router.push(`/${locales}/alertreports/HandleThirdForm`);
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
        <Box sx={{ marginTop: 5, border: { xs: 'none', sm: "1px solid #E2E4E5" }, padding: { xs: 'none', sm: "30px" }, borderRadius: "10px" }}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "16px", xs: "12px" },
              color: "#222D55",
              fontWeight: 600,
            }}
          >
            {`${t("title")}`}
          </Typography>
          <Grid container columnSpacing={5}>
            <Grid item xs={12} md={6} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                {`${t("field1")}`}
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
                {...register("firstName")}
                error={errors?.firstName}
                name="firstName"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={6} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
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
                id="standard-basic"
                type="text"
                {...register("name")}
                error={errors?.name}
                name="name"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={6} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                {`${t("field3")}`}
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
                name="service"
                {...register("service")}
                error={errors?.service}
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={6} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                {`${t("field4")}`}
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
                {...register("fonction")}
                error={errors?.fonction}
                name="fonction"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                {`${t("field5")}`}
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
                name="telephone"
                id="standard-basic"
                {...register("telephone")}
                error={errors?.telephone}
                type="number"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{ fontFamily: inter.style.fontFamily, fontSize: { md: "14px", xs: "12px" }, color: "#222D55" }}
              >
                {`${t("field6")}`}
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
                name="email"
                {...register("email")}
                error={errors?.email}
                id="standard-basic"
                type="email"
                variant="standard"
                sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px !important", fontWeight: 500 }}
              />
            </Grid>
          </Grid>
        </Box>
        <Button
          // onClick={() => router.push(`/${locales}/alertreports/HandleThirdForm`)}
          variant="outlined"
          type="submit"
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
          {`${t("button")}`}
        </Button>
      </form>
    </>
  );
}
