"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Button,
  styled,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { inter } from "../../../../../fonts/fonts";
import Location from "../../../../../Icons/Sinformer/Location.svg";
import Bag from "../../../../../Icons/Sinformer/Bag.svg";
import Watch from "../../../../../Icons/Sinformer/Watch.svg";
import Round from "../../../../../Icons/Sinformer/Round.svg";
import Cap from "../../../../../Icons/Sinformer/Cap.svg";
import Coin from "../../../../../Icons/Sinformer/Coin.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { getFormationsById } from "../../../../redux/action/formationActions/formationAction";

export default function NewForms() {
  const dispatch = useDispatch();
  const param = useParams();
  const { formId } = param;
  console.log(formId, "formId");

  const { getFormation } = useSelector((state) => state.formations);
  console.log(getFormation, "getFormation");

  useEffect(() => {
    dispatch(getFormationsById(formId))
      .unwrap()
      .then((res) => {
        console.log(res, "res");
      });
  }, []);

  const data = [
    {
      name: "territoire",
      title: getFormation?.territory,
      icon: Location,
    },
    {
      name: "Lieu de formation",
      title: getFormation?.trainingSite,
      icon: Location,
    },
    {
      name: "Domaine",
      title: getFormation?.domain,
      icon: Bag,
    },
    {
      name: "Durée",
      title: getFormation?.duration,
      icon: Watch,
    },
    {
      name: "Type de formation",
      title: getFormation?.typeOfFormation,
      icon: Round,
    },
    {
      name: "Niveau d’étude visé",
      title: getFormation?.targetedLevel,
      icon: Cap,
    },
    {
      name: "titre obtenue",
      title: getFormation?.titleObtained,
      icon: Location,
    },
    {
      name: "Coût de la formation",
      title: `${getFormation?.cost} €`,
      icon: Coin,
    },
    {
      name: "Solution de financement",
      title: getFormation?.financingSolution,
      icon: Coin,
    },
  ];

  return (
    <Box
      sx={{
        mt: 20,
      }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Box
          sx={{
            border: "0.5px solid #222D55",
            opacity: 0.5,
            padding: 3,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70px",
            height: "70px",
          }}
        >
          <ArrowBackIcon sx={{ width: "15px", height: "15px" }} />
        </Box>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                width: "800px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "39px", xs: "14px" },
                  color: "#222D55",
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                  mt: 10,
                }}
              >
                {getFormation?.title}
              </Typography>

              <Divider
                variant="middle"
                sx={{
                  display: { md: "block", xs: "none" },
                  bgcolor: "#FFFFFF",
                  mt: 5,
                  marginLeft: 0,
                  marginRight: 0,
                  borderBottomWidth: "1px",
                }}
              />
              <Typography
                sx={{
                  fontSize: { md: "16px", xs: "14px" },
                  color: "#222D55",
                  mt: 5,
                  lineHeight: "30px",
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                }}
                dangerouslySetInnerHTML={{ __html: getFormation?.description }}
              >
                {/* {getFormation?.description} */}
              </Typography>

              {/* <Box>
                <Typography
                  sx={{
                    mt: 5,
                    fontSize: { md: "24px", xs: "14px" },
                    color: "#222D55",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 500,
                  }}
                >
                  Objectifs pédagogiques
                </Typography>

                <Typography
                  sx={{
                    fontSize: { md: "16px", xs: "14px" },
                    color: "#222D55",
                    mt: 5,
                    lineHeight: "30px",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at risus vitae magna consectetur
                  interdum vel vitae sem. Pellentesque vel dolor sit amet orci condimentum vehicula. Cras lobortis
                  tincidunt metus nec malesuada. Aliquam rutrum felis dui, et efficitur nulla congue ut. Fusce sit amet
                  venenatis urna. Sed in consectetur purus, nec fermentum massa. Praesent erat odio, imperdiet quis
                  condimentum at, mollis eget purus. Donec vel aliquet tortor, sit amet egestas nisi.
                </Typography>

                <Typography
                  sx={{
                    fontSize: { md: "16px", xs: "14px" },
                    color: "#222D55",
                    mt: 5,
                    lineHeight: "30px",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at risus vitae magna consectetur
                  interdum vel vitae sem. Pellentesque vel dolor sit amet orci condimentum vehicula. Cras lobortis
                  tincidunt metus nec malesuada. Aliquam rutrum felis dui, et efficitur nulla congue ut. Fusce sit amet
                  venenatis urna. Sed in consectetur purus, nec fermentum massa. Praesent erat odio, imperdiet quis
                  condimentum at, mollis eget purus. Donec vel aliquet tortor, sit amet egestas nisi.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    mt: 5,
                    fontSize: { md: "24px", xs: "14px" },
                    color: "#222D55",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 500,
                  }}
                >
                  Prérequis d'accès à la formation
                </Typography>

                <Typography
                  sx={{
                    fontSize: { md: "16px", xs: "14px" },
                    color: "#222D55",
                    mt: 5,
                    lineHeight: "30px",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at risus vitae magna consectetur
                  interdum vel vitae sem. Pellentesque vel dolor sit amet orci condimentum vehicula. Cras lobortis
                  tincidunt metus nec malesuada. Aliquam rutrum felis dui, et efficitur nulla congue ut. Fusce sit amet
                  venenatis urna. Sed in consectetur purus, nec fermentum massa. Praesent erat odio, imperdiet quis
                  condimentum at, mollis eget purus. Donec vel aliquet tortor, sit amet egestas nisi.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    mt: 5,
                    fontSize: { md: "24px", xs: "14px" },
                    color: "#222D55",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 500,
                  }}
                >
                  Programme de la formation
                </Typography>

                <Typography
                  component={"ul"}
                  sx={{
                    fontSize: { md: "16px", xs: "14px" },
                    color: "#222D55",
                    mt: 2,
                    lineHeight: "30px",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                  }}
                >
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </Typography>

                <Button
                  variant="outlined"
                  endIcon={
                    <FileDownloadIcon
                      sx={{
                        color: "#FFFFFF",
                        backgroundColor: "#7DB1FF",
                        background: "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                        borderRadius: "50%",
                        width: { md: "50px", xs: "40px" },
                        height: { md: "50px", xs: "40px" },
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
                    mt: 5,
                    color: "#222D55",
                    border: "1px solid rgba(142, 155, 191, 0.3)",
                    borderRadius: "61px",
                    padding: "8px 30px",
                    fontSize: "12px",
                    fontWeight: 600,
                    background: "rgba(255, 255, 255, 0.1)",
                    ":hover": {
                      borderColor: "#8E9BBF",
                    },
                    fontFamily: inter.style.fontFamily,
                    // "& .MuiButton-endIcon": {
                    //   marginLeft: 2.2,
                    // },
                  }}
                >
                  Télécharger la plaquette
                </Button>
              </Box> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#222D55",
                padding: 8,
                borderRadius: "20px",
              }}
            >
              {data?.map((item) => (
                <>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Box>
                      <Typography>
                        <Image
                          src={item?.icon}
                          alt="location"
                          width={40}
                          height={40}
                        />
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { md: "12px", xs: "14px" },
                          color: "#FFFFFF",
                          fontFamily: inter.style.fontFamily,
                          fontWeight: 400,
                          textTransform: "uppercase",
                        }}
                      >
                        {item?.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { md: "18px", xs: "14px" },
                          color: "#FFFFFF",
                          fontFamily: inter.style.fontFamily,
                          fontWeight: 400,
                          mt: 1,
                        }}
                      >
                        {item?.title}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider
                    variant="middle"
                    sx={{
                      // display: { md: "block", xs: "none" },
                      bgcolor: "#FFFFFF",
                      mt: 2,
                      marginLeft: 0,
                      marginRight: 0,
                      mb: 2,
                      opacity: "30%",
                      borderBottomWidth: "2px",
                    }}
                  />
                </>
              ))}
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: 5,
                  fontSize: { md: "24px", xs: "14px" },
                  color: "#222D55",
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 500,
                }}
              >
                Métiers ciblé
              </Typography>
              <Box sx={{display:'flex'}}>
              {getFormation?.targetedProfessions?.map((professions, index) => {
                return (
                  <Typography
                    sx={{
                      fontSize: { md: "16px", xs: "14px" },
                      color: "#222D55",
                      mt: 1,
                      lineHeight: "30px",
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 400,
                    }}
                    key={index}
                  >
                    {/* #cyberanalist - #Cryptologue - #ResponsableSOC #Architecte en cybersécurité */}
                    #{professions} &nbsp;
                  </Typography>
                );
              })}
              </Box>
            </Box>

            <Box
              sx={{
                border: "1px solid rgba(34, 45, 85, 0.3)",
                padding: "40px",
                mt: 5,
                borderRadius: "25px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "24px", xs: "14px" },
                  color: "#222D55",
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 500,
                }}
              >
                Contacter l'organisme
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "16px", xs: "14px" },
                  color: "#222D55",
                  mt: 1,
                  lineHeight: "30px",
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                Adresse de l'organisme
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "16px", xs: "14px" },
                  color: "#222D55",
                  lineHeight: "30px",
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                Numéro de téléphone
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "16px", xs: "14px" },
                  color: "#222D55",
                  lineHeight: "30px",
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                Lien du siteweb
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
