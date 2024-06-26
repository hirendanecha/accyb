"use client";
import React from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  styled,
  Button,
  FormLabel,
} from "@mui/material";
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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setMemberOneInformation } from "../../../app/redux/slices/formSlice";

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
    socialReason: yup.string().required("Social reason is required"),
    siren: yup.string().required("Siren is required"),
    siret: yup.string().required("Siret is required"),
    NumberOfEmployees: yup.string().required("Number of employees is required"),
    NumberOfGroupEmployees: yup
      .string()
      .required("Number of group employees is required"),
      votreEntreprise: yup.string().required("Votre entreprise is required"),
    businessNature: yup.string().required("Business nature is required"),
    activity: yup.string().required("Activity is required"),
    firstName: yup.string().required("First name is required"),
    name: yup.string().required("Last name is required"),
    phone: yup.number().required("Phone number is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    billingAddress: yup.string().required("Billing address is required"),
    categorizationOfCandidate: yup
      .string()
      .required("Categorization of candidate is required"),
    // corporation: yup.string().required("Corporation is required"),
    categoryOfActivity: yup
      .string()
      .required("Category of activity is required"),
    // date: yup.string().required("Date is required"),
    signature: yup.string().required("Signature is required"),
  })
  .required();
export default function HandleForm() {
  const locales = useLocale();
  const router = useRouter();
  const [name, setName] = React.useState("Cat in the Hat");
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
      socialReason: "",
      siren: "",
      siret: "",
      NumberOfEmployees: "",
      NumberOfGroupEmployees: "",
      votreEntreprise: "",
      businessNature: "",
      activity: "",
      firstName: "",
      name: "",
      phone: "",
      email: "",
      billingAddress: "",
      categorizationOfCandidate: "",
      // corporation: "",
      categoryOfActivity: "",
      // date: "",
      signature: "",
    },
  });

  const { memberOneInformation } = useSelector((state) => state.formSlice);
  console.log(memberOneInformation, "memberOneInformation");

  const onSubmit = (data) => {
    dispatch(setMemberOneInformation(data));
    // console.log(payload, "payload");
    router.push(`/${locales}/joinAccyb/SecoundForm`);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
        // setLoader(true);
      }}
    >
      <Box>
        <Box
          sx={{
            marginTop: 5,
            border: {xs:'none',sm:"1px solid #E2E4E5"},
            padding: {xs:'5px',sm:"30px"},
            borderRadius: "10px",
          }}
        >
         
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
            <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "16px", xs: "14px" },
              color: "#222D55",
            }}
          >
            Raison sociale
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
                id="socialReason"
                name="socialReason"
                {...register("socialReason")}
                error={errors?.socialReason}
                type="text"
                variant="standard"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                }}
              />
              </Grid>
            <Grid item xs={12} md={6} sx={{mt:5}}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
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
                // value={siren}
                name="siren"
                {...register("siren")}
                error={errors?.siren}
                type="number"
                variant="standard"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{mt:5}}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
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
                name="siret"
                {...register("siret")}
                error={errors?.siret}
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
                name="NumberOfEmployees"
                {...register("NumberOfEmployees")}
                error={errors?.NumberOfEmployees}
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
                Nombre de salariés du groupe
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
                name="NumberOfGroupEmployees"
                {...register("NumberOfGroupEmployees")}
                error={errors?.NumberOfGroupEmployees}
                type="number"
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
            border: {xs:'none',sm:"1px solid #E2E4E5"},
            padding: {xs:'5px',sm:"30px"},
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "20px", xs: "16px" },
              color: "#222D55",
              fontWeight: 600,
            }}
          >
            Votre entreprise
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
                id="votreEntreprise"
                {...register("votreEntreprise")}
                error={errors?.votreEntreprise}
                type="text"
                variant="standard"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                }}
              />
          <Grid container columnSpacing={5} mt={5}>
            <Grid item xs={12} md={10}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
              >
                Nature
              </Typography>
              <FormControl sx={{ mt: 3 }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="businessNature"
                  onChange={(e) => {
                    setValue("businessNature", e.target.value);
                  }}
                >
                  <FormControlLabel
                    sx={{
                      width: "170px",
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
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
                      width: "170px",
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                      },
                    }}
                  />
                  <FormControlLabel
                    value="Organisme public"
                    control={<Radio />}
                    label="Organisme public"
                    sx={{
                      width: "170px",
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                      },
                    }}
                  />
                  <FormControlLabel
                    value="association"
                    control={<Radio />}
                    label="Association"
                    sx={{
                      width: "170px",
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
                      },
                    }}
                  />
                  <FormControlLabel
                    value="entreprise"
                    control={<Radio />}
                    label="Entreprise"
                    sx={{
                      width: "170px",
                      "& .MuiFormControlLabel-label": {
                        fontSize: "14px",
                        fontFamily: inter.style.fontFamily,
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
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
              >
                Domaine d’activité
              </Typography>
              <Box mt={3}>
                <FormControl variant="standard" fullWidth>
                  <Select
                    labelId="activity"
                    id="activity"
                    sx={{ fontFamily: inter.style.fontFamily }}
                    defaultValue={"Administration publique"}
                    {...register("activity")}
                    error={errors?.activity}
                  >
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Administration publique"}
                    >
                      Administration publique
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Eau potable"}
                    >
                      Eau potable
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Eaux usées"}
                    >
                      Eaux usées
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Energie"}
                    >
                      Energie
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Espace"}
                    >
                      Espace
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Fabrication"}
                    >
                      Fabrication
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={
                        "Fabrication, production et distribution de produits chimiques"
                      }
                    >
                      Fabrication, production et distribution de produits
                      chimiques
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Fournisseurs numériques"}
                    >
                      Fournisseurs numériques
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Gestion des déchets"}
                    >
                      Gestion des déchets
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Gestion des services TIC (interentreprises)"}
                    >
                      Gestion des services TIC (interentreprises)
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Infrastructures des marchés financiers"}
                    >
                      Infrastructures des marchés financiers
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={
                        "Production, transformation et distribution des denrées alimentaires"
                      }
                    >
                      Production, transformation et distribution des denrées
                      alimentaires
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Recherche"}
                    >
                      Recherche
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Transport"}
                    >
                      Transport
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={"Santé"}
                    >
                      Santé
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: inter.style.fontFamily }}
                      value={
                        "Secteur bancaire Services postaux et d’expédition"
                      }
                    >
                      Secteur bancaire Services postaux et d’expédition
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginTop: 5,
            border: {xs:'none',sm:"1px solid #E2E4E5"},
            padding: {xs:'5px',sm:"30px"},
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "20px", xs: "16px" },
              color: "#222D55",
              fontWeight: 600,
            }}
          >
            Facturation - contact comptabilité*
          </Typography>
          <Grid container columnSpacing={5} mt={7}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
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
                id="firstName"
                {...register("firstName")}
                error={errors?.firstName}
                type="text"
                variant="standard"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px !important",
                  fontWeight: 500,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: {xs:5,sm:0} }}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#222D55",
                }}
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
                id="name"
                {...register("name")}
                error={errors?.name}
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
                id="phone"
                {...register("phone")}
                error={errors?.phone}
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
                id="email"
                {...register("email")}
                error={errors?.email}
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
                id="billingAddress"
                {...register("billingAddress")}
                error={errors?.billingAddress}
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
                  fontSize: { md: "12px", xs: "10px" },
                  color: "#222D55",
                }}
              >
                *L’adhésion ne sera effective qu’après l’approbation du dossier
                complet (y compris le bon de commande ou le règlement dès la
                candidature) par le Conseil d’administration.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginTop: 5,
            border: {xs:'none',sm:"1px solid #E2E4E5"},
            padding: {xs:'5px',sm:"30px"},
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "20px", xs: "16px" },
              color: "#222D55",
              fontWeight: 600,
            }}
          >
            Catégorisation du candidat**
          </Typography>
          <RadioGroup
            onChange={(e) => {
              setValue("categorizationOfCandidate", e.target.value);
            }}
          >
            <Grid
              container
              mt={5}
              sx={{ display: "flex", gap: { xs: 2, md: 0 } }}
            >
              <Grid
                item
                xs={12}
                md={5.8}
                sx={{
                  border: "1px solid #E2E4E5",
                  borderRadius: "10px",
                  padding: 2,
                }}
              >
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={12} md={2}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: { xs: "100%", md: "300px" },
                      }}
                    >
                      {/* <Radio value="a" name="radio-buttons" /> */}
                      <FormControlLabel
                        value={`Collectivité Territoriale Chef de File<br>-> comptant plus de 200 000 habitants<br>-> Un référent et jusqu’à 3 participants<br>-> Cotisation annuelle : 15 000€`}
                        control={<Radio />}
                        label="« Collectivité Territoriale Chef de File »"
                        sx={{
                          gap: 1,
                          paddingLeft: 2,
                          width: "100% !important",
                          "& .MuiFormControlLabel-label": {
                            fontSize: "14px",
                            fontFamily: inter.style.fontFamily,
                            color: "#222D55",
                            fontWeight: 600,
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                  {/* <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  « Collectivité Territoriale Chef de File »
                </Typography>
              </Grid> */}
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "start" }}>
                  <Grid item xs={2} sm={1}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={11}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      <span style={{ color: "#007A47" }}>
                        comptant plus de 200 000 habitants
                      </span>{" "}
                      <br />
                      Un référent et jusqu’à 3 participants
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <EuroIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      Cotisation annuelle : 15 000€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={0.4}></Grid>
              <Grid
                item
                xs={12}
                md={5.8}
                sx={{
                  border: "1px solid #E2E4E5",
                  borderRadius: "10px",
                  padding: 2,
                }}
              >
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={12} md={2}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: { xs: "100%", md: "300px" },
                      }}
                    >
                      <FormControlLabel
                        value={`-> Collectivité Territoriale Chef de File<br>-> comptant plus de 200 000 habitants<br>-> Un référent et jusqu’à 3 participants`}
                        control={<Radio />}
                        label="« Collectivité Territoriale Chef de File »"
                        sx={{
                          gap: 1,
                          paddingLeft: 2,
                          width: "100% !important",
                          "& .MuiFormControlLabel-label": {
                            fontSize: "14px",
                            fontFamily: inter.style.fontFamily,
                            color: "#222D55",
                            fontWeight: 600,
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                  {/* <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                  « Collectivité Territoriale Chef de File »
                </Typography>
              </Grid> */}
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "start" }}>
                  <Grid item xs={2} sm={1}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      <span style={{ color: "#007A47" }}>
                        comptant plus de 200 000 habitants
                      </span>{" "}
                      <br />
                      Un référent et jusqu’à 3 participants
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <EuroIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      Cotisation annuelle : 7 500€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              mt={5}
              sx={{ display: "flex", gap: { xs: 2, md: 0 } }}
            >
              <Grid
                item
                xs={12}
                md={5.8}
                sx={{
                  border: "1px solid #E2E4E5",
                  borderRadius: "10px",
                  padding: 2,
                }}
              >
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={12} md={2}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: { xs: "100%", md: "300px" },
                      }}
                    >
                      <FormControlLabel
                        value={` « Collectivité »<br>-> comptant plus de 40 000 habitants<br>-> Un référent et jusqu’à 2 participants<br>-> Cotisation annuelle : 4 000€`}
                        control={<Radio />}
                        label=" « Collectivité »"
                        sx={{
                          gap: 1,
                          paddingLeft: 2,
                          width: "100% !important",
                          "& .MuiFormControlLabel-label": {
                            fontSize: "14px",
                            fontFamily: inter.style.fontFamily,
                            color: "#222D55",
                            fontWeight: 600,
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                  {/* <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                   « Collectivité »
                </Typography>
              </Grid> */}
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "start" }}>
                  <Grid item xs={2} sm={1}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      <span style={{ color: "#007A47" }}>
                        comptant plus de 40 000 habitants
                      </span>{" "}
                      <br />
                      Un référent et jusqu’à 2 participants
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <EuroIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      Cotisation annuelle : 4 000€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={0.4}></Grid>
              <Grid
                item
                xs={12}
                md={5.8}
                sx={{
                  border: "1px solid #E2E4E5",
                  borderRadius: "10px",
                  padding: 2,
                }}
              >
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={12} md={2}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: { xs: "100%", md: "300px" },
                      }}
                    >
                      <FormControlLabel
                        value={` « Collectivité »<br>-> comptant entre 10 000 et 40 000 habitants<br>-> Un référent et jusqu’à 1 participants<br>-> Cotisation annuelle : 2 000€`}
                        control={<Radio />}
                        label=" « Collectivité »"
                        sx={{
                          gap: 1,
                          paddingLeft: 2,
                          width: "100% !important",
                          "& .MuiFormControlLabel-label": {
                            fontSize: "14px",
                            fontFamily: inter.style.fontFamily,
                            color: "#222D55",
                            fontWeight: 600,
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                  {/* <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                   « Collectivité »
                </Typography>
              </Grid> */}
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "start" }}>
                  <Grid item xs={2} sm={1}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      <span style={{ color: "#007A47" }}>
                        comptant entre 10 000 et 40 000 habitants
                      </span>
                      <br />
                      Un référent et jusqu’à 1 participants
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <EuroIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      Cotisation annuelle : 2 000€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container mt={5}>
              <Grid
                item
                xs={12}
                md={5.8}
                sx={{
                  border: "1px solid #E2E4E5",
                  borderRadius: "10px",
                  padding: 2,
                }}
              >
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={12} md={2}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: { xs: "100%", md: "300px" },
                      }}
                    >
                      <FormControlLabel
                        value={` « Collectivité »<br>-> comptant moins de 10 000 habitants<br>-> Un référent<br>-> Cotisation annuelle : 1 000€`}
                        control={<Radio />}
                        label=" « Collectivité »"
                        sx={{
                          gap: 1,
                          paddingLeft: 2,
                          width: "100% !important",
                          "& .MuiFormControlLabel-label": {
                            fontSize: "14px",
                            fontFamily: inter.style.fontFamily,
                            color: "#222D55",
                            fontWeight: 600,
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                  {/* <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                   « Collectivité »
                </Typography>
              </Grid> */}
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "start" }}>
                  <Grid item xs={2} sm={1}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      <span style={{ color: "#007A47" }}>
                        comptant moins de 10 000 habitants
                      </span>{" "}
                      <br />
                      Un référent
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <EuroIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      Cotisation annuelle : 1 000€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={0.4}></Grid>
              <Grid item xs={12} md={5.8}></Grid>
            </Grid>
          {/* </RadioGroup> */}

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

          {/* <RadioGroup
            onChange={(e) => {
              setValue("corporation", e.target.value);
            }}
          > */}
            <Grid
              container
              mt={5}
              sx={{ display: "flex", gap: { xs: 2, md: 0 } }}
            >
              <Grid
                item
                xs={12}
                md={5.8}
                sx={{
                  border: "1px solid #E2E4E5",
                  borderRadius: "10px",
                  padding: 2,
                }}
              >
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={12} md={2}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: { xs: "100%", md: "300px" },
                      }}
                    >
                      <FormControlLabel
                        value={` « Personne morale »<br>-> groupe national ou international<br>-> Un référent et jusqu’à 3 participants<br>-> Cotisation annuelle : 15 000€`}
                        control={<Radio />}
                        label=" « Personne morale »"
                        sx={{
                          gap: 1,
                          paddingLeft: 2,
                          width: "100% !important",
                          "& .MuiFormControlLabel-label": {
                            fontSize: "14px",
                            fontFamily: inter.style.fontFamily,
                            color: "#222D55",
                            fontWeight: 600,
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                  {/* <Grid item xs={12} md={10}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { md: "14px", xs: "12px" },
                    color: "#222D55",
                    fontWeight: 600,
                  }}
                >
                   « Personne morale »
                </Typography>
              </Grid> */}
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "start" }}>
                  <Grid item xs={2} sm={1}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      <span style={{ color: "#007A47" }}>
                        groupe national ou international
                      </span>{" "}
                      <br />
                      Un référent et jusqu’à 3 participants
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <EuroIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      Cotisation annuelle : 15 000€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={0.4}></Grid>
              <Grid
                item
                xs={12}
                md={5.8}
                sx={{
                  border: "1px solid #E2E4E5",
                  borderRadius: "10px",
                  padding: 2,
                }}
              >
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Radio
                        value={` « Personne morale »<br>-> groupe inter-régional<br>-> Un référent et jusqu’à 3 participants<br>-> Cotisation annuelle : 7 000€`}
                        name="radio-buttons"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                        fontWeight: 600,
                      }}
                    >
                       « Personne morale »
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "start" }}>
                  <Grid item xs={2} sm={1}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      <span style={{ color: "#007A47" }}>
                        groupe inter-régional
                      </span>{" "}
                      <br />
                      Un référent et jusqu’à 3 participants
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <EuroIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      Cotisation annuelle : 7 000€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              mt={5}
              sx={{ display: "flex", gap: { xs: 2, md: 0 } }}
            >
              <Grid
                item
                xs={12}
                md={5.8}
                sx={{
                  border: "1px solid #E2E4E5",
                  borderRadius: "10px",
                  padding: 2,
                }}
              >
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Radio
                        value={` « Personne morale »<br>-> comptant plus de 50 salariés<br>-> Un référent et jusqu’à 2 participants<br>-> Cotisation annuelle : 4 500€`}
                        name="radio-buttons"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                        fontWeight: 600,
                      }}
                    >
                       « Personne morale »
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "start" }}>
                  <Grid item xs={2} sm={1}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      <span style={{ color: "#007A47" }}>
                        comptant plus de 50 salariés
                      </span>{" "}
                      <br />
                      Un référent et jusqu’à 2 participants
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <EuroIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      Cotisation annuelle : 4 500€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={0.4}></Grid>
              <Grid
                item
                xs={12}
                md={5.8}
                sx={{
                  border: "1px solid #E2E4E5",
                  borderRadius: "10px",
                  padding: 2,
                }}
              >
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Radio
                        value={` « Personne morale »<br>-> comptant entre 11 et 50 salariés<br>-> Un référent et jusqu’à 1 participants<br>-> Cotisation annuelle : 15 00€`}
                        name="radio-buttons"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                        fontWeight: 600,
                      }}
                    >
                       « Personne morale »
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "start" }}>
                  <Grid item xs={2} sm={1}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      <span style={{ color: "#007A47" }}>
                        comptant entre 11 et 50 salariés
                      </span>{" "}
                      <br />
                      Un référent et jusqu’à 1 participants
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <EuroIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      Cotisation annuelle : 15 00€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              mt={5}
              sx={{ display: "flex", gap: { xs: 2, md: 0 } }}
            >
              <Grid
                item
                xs={12}
                md={5.8}
                sx={{
                  border: "1px solid #E2E4E5",
                  borderRadius: "10px",
                  padding: 2,
                }}
              >
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Radio
                        value={` « Personne morale »<br>-> comptant entre 4 et 10 salariés<br>-> Un référent<br>-> Cotisation annuelle : 5 00€`}
                        name="radio-buttons"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                        fontWeight: 600,
                      }}
                    >
                       « Personne morale »
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "start" }}>
                  <Grid item xs={2} sm={1}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      <span style={{ color: "#007A47" }}>
                        comptant entre 4 et 10 salariés
                      </span>{" "}
                      <br />
                      Un référent
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <EuroIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      Cotisation annuelle : 5 00€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={0.4}></Grid>
              <Grid
                item
                xs={12}
                md={5.8}
                sx={{
                  border: "1px solid #E2E4E5",
                  borderRadius: "10px",
                  padding: 2,
                }}
              >
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Radio
                        value={` « Personne morale »<br>-> comptant moins de 4 salariés<br>-> Un référent<br>-> Cotisation annuelle : 150€`}
                        name="radio-buttons"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                        fontWeight: 600,
                      }}
                    >
                       « Personne morale »
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "start" }}>
                  <Grid item xs={2} sm={1}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      <span style={{ color: "#007A47" }}>
                        comptant moins de 4 salariés
                      </span>{" "}
                      <br />
                      Un référent
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={2} sm={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <EuroIcon style={{ color: "#9A9EA5" }} />
                    </Box>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                      }}
                    >
                      Cotisation annuelle : 150€
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </RadioGroup>
        </Box>
        <Box
          sx={{
            marginTop: 5,
            border: {xs:'none',sm:"1px solid #E2E4E5"},
            padding: {xs:'5px',sm:"30px"},
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "20px", xs: "12px" },
              color: "#222D55",
              fontWeight: 600,
              maxWidth: "450px",
            }}
          >
            Catégorisation de l’activité du candidat** (Affectation à un collège
            d’adhérent)
          </Typography>
          <Grid item xs={12} md={6} sx={{ borderRadius: "10px", padding: {xs:0,sm:2} }}>
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                sx={{ fontFamily: inter.style.fontFamily }}
              >
                Catégorisation de l’activité du candidat
              </FormLabel>
              <RadioGroup
                row
                aria-label="category"
                onChange={(e) => {
                  setValue("categoryOfActivity", e.target.value);
                }}
              >
                <FormControlLabel
                  value="Offreur services cybersécurité"
                  control={<Radio color="primary" />}
                  label={
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                        fontWeight: 600,
                      }}
                    >
                      <span style={{ color: "#007A47" }}>Offreur</span> de
                      services cybersécurité
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="Utilisateur de services de cybersécurité"
                  control={<Radio color="primary" />}
                  label={
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { md: "14px", xs: "12px" },
                        color: "#222D55",
                        fontWeight: 600,
                        textWrap: "nowrap",
                      }}
                    >
                      <span style={{ color: "#007A47" }}>Utilisateur</span> de
                      services de cybersécurité
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { md: "14px", xs: "12px" },
              color: "#222D55",
            }}
          >
            **Les propositions de catégorisation du candidat seront soumises à
            la validation conseil d’administration.
          </Typography>
        </Box>

        <Grid container columnSpacing={5}>
          {/* <Grid item xs={12} md={6} mt={5}>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { md: "18px", xs: "12px" },
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
              id="standard-basic"
              {...register("date")}
              error={errors?.date}
              type="date"
              variant="standard"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "14px !important",
                fontWeight: 500,
                mt: 2,
              }}
            />
          </Grid> */}
           <Grid item xs={12} md={6} mt={5}>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { md: "18px", xs: "12px" },
                color: "#222D55",
              }}
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
              {...register("signature")}
              error={errors?.signature}
              type="text"
              variant="standard"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "14px !important",
                fontWeight: 500,
                mt: 2,
              }}
            />
          </Grid>
         </Grid> 
        <Button
          // onClick={() => router.push(`/${locales}/joinAccyb/SecoundForm`)}
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
    </form>
  );
}
