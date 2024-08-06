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
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { constrainedMemory } from "process";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setGeneralInformation } from "../../../app/redux/slices/formSlice";
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
    // dateOfDeclaration: yup.date().required("Date is required"),
    companyName: yup.string().required("Company name is required"),
    memberOfAccyb: yup.string().required("Member of ACCYB is required"),
    structureType: yup.string().required("Structure type is required"),
    activityArea: yup.string().required("Activity area is required"),
    territory: yup.string().required("Territory is required"),
    commune: yup.string().required("Commune is required"),
    // communeOfTwo: yup.string().required("Commune is required"),
  })
  .required();
export default function HandleForm() {
  const t = useTranslations('DeclareAnIncident_FirstFrom')
  const dispatch = useDispatch();
  const locales = useLocale();
  const router = useRouter();
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
      // dateOfDeclaration: new Date().toISOString().slice(0, 10),
      companyName: "",
      memberOfAccyb: "",
      structureType: "",
      activityArea: "",
      territory: "",
      commune: "",
      // communeOfTwo: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(setGeneralInformation(data));
    router.push(`/${locales}/alertreports/HandleSecoundForm`);
  };
  return (
    <Box>
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
            padding: { xs: 0, sm: "30px" },
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "16px", xs: "12px" },
              color: "#222D55",
              fontWeight: 600,
              marginBottom: { md: 5, xs: 3 },
            }}
          >
            {`${t("title1")}`}
          </Typography>
          {/* <Divider
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
          /> */}
          <Grid container columnSpacing={5}>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  border: "1px solid #E2E4E5",
                  padding: 2,
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1
                }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#575F6E",
                  }}
                >
                  {`${t("text1")}`}
                </Typography>
                <Typography sx={{ fontFamily: inter.style.fontFamily, color: "#575F6E" }}>
                  {dayjs(Date.now()).format("DD.MM.YYYY")}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
              >
                {`${t("field1")}`}
              </Typography>
              <ValidationTextField
                multiline
                rows={2}
                fullWidth
                error={errors?.companyName}
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
                {...register("companyName")}
                name="companyName"
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
                {`${t("field2")}`}
              </Typography>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="memberOfAccyb"
                sx={{ mt: 2 }}
                onChange={(e) => {
                  setValue("memberOfAccyb", e.target.value);
                }}
              >
                <FormControlLabel
                  value="OUI"
                  control={<Radio />}
                  label={`${t("field2Option1")}`}
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
                  label={`${t("field2Option2")}`}
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
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
              >
                {`${t("field3")}`}
              </Typography>
              <Box mt={3}>
                <FormControl variant="standard" fullWidth>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    name="structureType"
                    error={errors?.structureType}
                    onChange={(e) => {
                      setValue("structureType", e.target.value);
                    }}
                    sx={{ fontFamily: inter.style.fontFamily }}
                    defaultValue={"PME"}
                  >
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"PME"}
                    >
                      {`${t("field3Option1")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"ETI"}
                    >
                      {`${t("field3Option2")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Commune"}
                    >
                      {`${t("field3Option3")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Communauté d’agglomération"}
                    >
                      {`${t("field3Option4")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Collectivité territoriale"}
                    >
                      {`${t("field3Option5")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Collectivité d’Outre-Mer"}
                    >
                      {`${t("field3Option6")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Établissements publics"}
                    >
                      {`${t("field3Option7")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Associations nationales"}
                    >
                      {`${t("field3Option8")}`}
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              <Box mt={3}>
                <FormControl variant="standard" fullWidth>
                  <Select
                    name="activityArea"
                    error={errors?.activityArea}
                    onChange={(e) => {
                      setValue("activityArea", e.target.value);
                    }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    sx={{ fontFamily: inter.style.fontFamily }}
                    defaultValue={"Administration publique"}
                  >
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Administration publique"}
                    >
                      {`${t("field4Option1")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Eau potable"}
                    >
                      {`${t("field4Option2")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Eaux usées"}
                    >
                      {`${t("field4Option3")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Energie"}
                    >
                      {`${t("field4Option4")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Espace"}
                    >
                      {`${t("field4Option5")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Fabrication"}
                    >
                      {`${t("field4Option6")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={
                        "Fabrication, production et distribution de produits chimiques"
                      }
                    >
                      {`${t("field4Option7")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Fournisseurs numériques"}
                    >
                      {`${t("field4Option8")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Gestion des déchets"}
                    >
                      {`${t("field4Option9")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Gestion des services TIC (interentreprises)"}
                    >
                      {`${t("field4Option10")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Infrastructures des marchés financiers"}
                    >
                      {`${t("field4Option11")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={
                        "Production, transformation et distribution des denrées alimentaires"
                      }
                    >
                      {`${t("field4Option12")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Recherche"}
                    >
                      {`${t("field4Option13")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Transport"}
                    >
                      {`${t("field4Option14")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Santé"}
                    >
                      {`${t("field4Option15")}`}
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={
                        "Secteur bancaire Services postaux et d’expédition"
                      }
                    >
                      {`${t("field4Option16")}`}
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={10} mt={5}>
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
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="territory"
                  onChange={(e) => {
                    setValue("territory", e.target.value);
                  }}

                >
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
                    label={`${t("field5Item1")}`}
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
                    value="Guyane"
                    control={<Radio />}
                    label={`${t("field5Item2")}`}
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
                    value="Martinique"
                    control={<Radio />}
                    label={`${t("field5Item3")}`}
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
                    value="Saint-Barthélemy"
                    control={<Radio />}
                    label={`${t("field5Item4")}`}
                  />
                  <FormControlLabel
                    value="Saint-Martin"
                    control={<Radio />}
                    label={`${t("field5Item5")}`}
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
                    value="Saint-Pierre-et-Miquelon"
                    control={<Radio />}
                    label={`${t("field5Item6")}`}
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
            {/* <Grid item xs={12} md={12} mt={5}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
              >
                Commune de
              </Typography>
              <Box mt={3}>
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
                  {...register("communeOfOne")}
                  name="communeOfOne"
                  type="text"
                  variant="standard"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px !important",
                    fontWeight: 500,
                  }}
                />
              </Box>
            </Grid> */}
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
              <Box mt={3}>
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
                  {...register("commune")}
                  error={errors?.commune}
                  id="standard-basic"
                  type="text"
                  name="commune"
                  variant="standard"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px !important",
                    fontWeight: 500,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Button
          // onClick={() => router.push(`/${locales}/alertreports/HandleSecoundForm`)}
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
    </Box>
  );
}
