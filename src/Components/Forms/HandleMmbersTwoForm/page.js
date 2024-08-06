"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Box,
  Typography,
  Divider,
  Grid,
  styled,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { inter } from "../../../fonts/fonts";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Interests } from "@mui/icons-material";
import { setMemberTwoInformation } from "../../../app/redux/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import dayjs from "dayjs";

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
    civility: yup.string().required("Civility is required"),
    name: yup.string().required("Name is required"),
    firstName: yup.string().required("First name is required"),
    organization: yup.string().required("Organization is required"),
    function: yup.string().required("Function is required"),
    mobilePhone: yup.number().required("Mobile phone is required"),
    // phone: yup.number().required("Phone is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    address: yup.string().required("Address is required"),
    interests: yup.string().required("Interests is required"),
    comment: yup.string().required("Comment is required"),
    motivations: yup.string().required("Motivations is required"),
    substituteCivility: yup.string().required("Civility is required"),
    substituteName: yup.string().required("Name is required"),
    substituteFirstname: yup.string().required("First name is required"),
    substituteFunction: yup.string().required("Function is required"),
    substituteMobilePhone: yup.number().required("Mobile phone is required"),
    // substitutePhone: yup.number().required("Phone is required"),
    substituteEmail: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
    // date: yup.string().required("Date is required"),
    // signature: yup.string().required("Signature is required"),
  })
  .required();

export default function HandleForm() {
  const t = useTranslations('JoinACCYB_SecondForm')
  const [name, setName] = React.useState("Cat in the Hat");
  const locales = useLocale();
  const router = useRouter();
  const dispatch = useDispatch();
  const { captchaCompleted, setCaptchaCompleted } = useState(false);

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
      civility: "",
      name: "",
      firstName: "",
      organization: "",
      function: "",
      mobilePhone: "",
      phone: "",
      email: "",
      address: "",
      interests: "",
      comment: "",
      motivations: "",
      substituteCivility: "",
      substituteName: "",
      substituteFirstname: "",
      substituteFunction: "",
      substituteMobilePhone: "",
      substitutePhone: "",
      substituteEmail: "",
      date: new Date(),
      // signature: "",
    },
  });

  const sendEmail = async (memberOneInformation, memberTwoInformation) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/web/send-email/`,
        {
          memberOneInformation,
          memberTwoInformation,
        },
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
  const { memberOneInformation, memberTwoInformation } = useSelector(
    (state) => state.formSlice
  );
  console.log(memberOneInformation, "memberOneInformation");
  console.log(memberTwoInformation, "memberTwoInformation");

  const onCaptchaChange = () => {
    setCaptchaCompleted(true);
  }

  const onSubmit = (data) => {
    console.log(data, "data");
    dispatch(setMemberTwoInformation(data));
    sendEmail(memberOneInformation, data);
    router.push(`/${locales}/joinAccyb/FinalSubmitForm`);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
          setValue("");
        }}
      >
        <Box>
          <Box
            sx={{
              marginTop: 5,
              border: "1px solid #E2E4E5",
              padding: "30px",
              borderRadius: "10px",
            }}
          >
            <Grid container columnSpacing={5}>
              <Grid item xs={12} md={2}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                  }}
                >
                  {`${t("field1")}`}
                </Typography>
                <FormControl variant="standard" fullWidth>
                  <Select
                    labelId="civility"
                    id="civility"
                    sx={{ fontFamily: inter.style.fontFamily }}
                    defaultValue={"Mme."}
                    {...register("civility")}
                    error={errors?.civility ? true : false}
                  >
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Mme."}
                    >
                      {`${t("field1Option1")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"M."}
                    >
                      {`${t("field1Option2")}`}
                    </MenuItem>
                  </Select>
                </FormControl>

              </Grid>
              <Grid item xs={12} md={5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
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
                  id="name"
                  {...register("name")}
                  error={errors?.name ? true : false}
                  type="text"
                  variant="standard"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px !important",
                    fontWeight: 500,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={5}>
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
                  id="firstName"
                  {...register("firstName")}
                  error={errors?.firstName ? true : false}
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
                  {`${t("field4")}`}
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
                  id="organization"
                  {...register("organization")}
                  error={errors?.organization ? true : false}
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
                  {`${t("field5")}`}
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
                  id="function"
                  {...register("function")}
                  error={errors?.function ? true : false}
                  type="text"
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
                    color: "#222D55",
                  }}
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
                  id="mobilePhone"
                  {...register("mobilePhone")}
                  error={errors?.mobilePhone ? true : false}
                  type="number"
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
                    color: "#222D55",
                  }}
                >
                  {`${t("field7")}`}
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
                  id="phone"
                  {...register("phone")}
                  type="number"
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
                  id="email"
                  {...register("email")}
                  error={errors?.email ? true : false}
                  type="email"
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
                  {`${t("field9")}`}
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
                  id="address"
                  {...register("address")}
                  error={errors?.address ? true : false}
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
                  {`${t("field10")}`}
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
                  id="interests"
                  {...register("interests")}
                  error={errors?.interests ? true : false}
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
                  {`${t("field11")}`}
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
                  id="comment"
                  {...register("comment")}
                  error={errors?.comment ? true : false}
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
                  {`${t("field12")}`}
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
                  id="motivations"
                  {...register("motivations")}
                  error={errors?.motivations ? true : false}
                  type="email"
                  variant="standard"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px !important",
                    fontWeight: 500,
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              marginTop: 5,
              border: "1px solid #E2E4E5",
              padding: "30px",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { md: "16px", xs: "12px" },
                color: "#222D55",
                fontWeight: 600,
              }}
            >
              {`${t("title1")}`}
            </Typography>
            <Grid container columnSpacing={5} mt={5}>
              <Grid item xs={12} md={2}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                  }}
                >
                  {`${t("field1")}`}
                </Typography>
                <FormControl variant="standard" fullWidth>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="substituteCivility"
                    sx={{ fontFamily: inter.style.fontFamily }}
                    defaultValue={"Mme."}
                    {...register("substituteCivility")}
                    error={errors?.substituteCivility ? true : false}
                  >
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Mme."}
                    >
                      {`${t("field1Option1")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"M."}
                    >
                      {`${t("field1Option2")}`}
                    </MenuItem>
                  </Select>
                </FormControl>

              </Grid>
              <Grid item xs={12} md={5}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
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
                  id="substituteName"
                  {...register("substituteName")}
                  error={errors?.substituteName ? true : false}
                  type="text"
                  variant="standard"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px !important",
                    fontWeight: 500,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={5}>
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
                  id="substituteFirstname"
                  {...register("substituteFirstname")}
                  error={errors?.substituteFirstname ? true : false}
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
                  {`${t("field5")}`}
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
                  id="substituteFunction"
                  {...register("substituteFunction")}
                  error={errors?.substituteFunction ? true : false}
                  type="text"
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
                    color: "#222D55",
                  }}
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
                  id="substituteMobilePhone"
                  {...register("substituteMobilePhone")}
                  error={errors?.substituteMobilePhone ? true : false}
                  type="number"
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
                    color: "#222D55",
                  }}
                >
                  {`${t("field7")}`}
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
                  id="substitutePhone"
                  {...register("substitutePhone")}
                  type="number"
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
                  id="substituteEmail"
                  {...register("substituteEmail")}
                  error={errors?.substituteEmail ? true : false}
                  type="email"
                  variant="standard"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px !important",
                    fontWeight: 500,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          {/* <Box sx={{ mt: 5, padding: "0 16px" }}>
            <FormControl sx={{ mt: 1 }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
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
                  value="Je déclare avoir pris connaissance des statuts et du règlement intérieur de l’Agence Caribéenne pour la Cybersécurité. L’adhésion de mon organisme ne sera effective qu’après le paiement intégral de la cotisation."
                  control={<Radio />}
                  label="Je déclare avoir pris connaissance des statuts et du règlement intérieur de l’Agence Caribéenne pour la Cybersécurité. L’adhésion de mon organisme ne sera effective qu’après le paiement intégral de la cotisation."
                />
              </RadioGroup>
            </FormControl>
          </Box> */}
          <Box sx={{ mt: 5, padding: "0 16px" }}>
            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} onChange={onCaptchaChange}
            />
          </Box>

          <Grid
            item
            xs={12}
            sx={{
              border: "1px solid #E2E4E5",
              padding: '30px',
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              mt: 5
            }}
          >
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { md: "18px", xs: "12px" },
                color: "#222D55",
              }}
            >
              Date
            </Typography>
            <Typography sx={{ mt: 1 }}>
              {dayjs(new Date()).format("DD/MM/YYYY")}
            </Typography>
          </Grid>


          <Box
            sx={{
              padding: "0 16px",
            }}
          >
            <Button
              type="submit"
              variant="outlined"
              endIcon={
                <ArrowForwardIcon
                  sx={{
                    backgroundColor: "#7DB1FF",
                    background:
                      "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
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
                      animation:
                        "move-left 0.3s ease-in-out 0s 1 normal forwards",
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
              disabled={!captchaCompleted}
            >
              {`${t("button")}`}
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
}
