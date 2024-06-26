"use client";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { inter } from "../../../../fonts/fonts";
import Image from "next/image";
import Image1 from "../../../../Icons/Image1.png";
import Bag from "../../../../Icons/Bag.svg";
import Cap from "../../../../Icons/Cap.svg";
import Circle from "../../../../Icons/Circle.svg";
import Time from "../../../../Icons/Time.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import { getAllFormations } from "../../../redux/action/formationActions/formationAction";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const Img = styled(Image)(({ theme }) => ({
  width: "25px !important",
  height: "25px !important",
}));

export default function TabCategory() {
  // const category = [
  //   {
  //     data: [
  //       {
  //         title: "Formation en Scan & Cybersécurité",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  //         price: "3000€",
  //         heading: {
  //           heading1: "Guadeloupe",
  //           heading2: "Organisme de formation",
  //         },
  //         badge: [
  //           {
  //             icon: Bag,
  //             name: "Management et stratégie",
  //           },
  //           {
  //             icon: Cap,
  //             name: "BAC +3",
  //           },
  //           {
  //             icon: Circle,
  //             name: "Formation initiale",
  //           },
  //           {
  //             icon: Time,
  //             name: "Courte durée",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Formation en Scan & Cybersécurité",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  //         price: "3000€",
  //         heading: {
  //           heading1: "Guadeloupe",
  //           heading2: "Organisme de formation",
  //         },
  //         badge: [
  //           {
  //             icon: Bag,
  //             name: "Management et stratégie",
  //           },
  //           {
  //             icon: Cap,
  //             name: "BAC +3",
  //           },
  //           {
  //             icon: Circle,
  //             name: "Formation initiale",
  //           },
  //           {
  //             icon: Time,
  //             name: "Courte durée",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Formation en Scan & Cybersécurité",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  //         price: "3000€",
  //         heading: {
  //           heading1: "Guadeloupe",
  //           heading2: "Organisme de formation",
  //         },
  //         badge: [
  //           {
  //             icon: Bag,
  //             name: "Management et stratégie",
  //           },
  //           {
  //             icon: Cap,
  //             name: "BAC +3",
  //           },
  //           {
  //             icon: Circle,
  //             name: "Formation initiale",
  //           },
  //           {
  //             icon: Time,
  //             name: "Courte durée",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Formation en Scan & Cybersécurité",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  //         price: "3000€",
  //         heading: {
  //           heading1: "Guadeloupe",
  //           heading2: "Organisme de formation",
  //         },
  //         badge: [
  //           {
  //             icon: Bag,
  //             name: "Management et stratégie",
  //           },
  //           {
  //             icon: Cap,
  //             name: "BAC +3",
  //           },
  //           {
  //             icon: Circle,
  //             name: "Formation initiale",
  //           },
  //           {
  //             icon: Time,
  //             name: "Courte durée",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Formation en Scan & Cybersécurité",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  //         price: "3000€",
  //         heading: {
  //           heading1: "Guadeloupe",
  //           heading2: "Organisme de formation",
  //         },
  //         badge: [
  //           {
  //             icon: Bag,
  //             name: "Management et stratégie",
  //           },
  //           {
  //             icon: Cap,
  //             name: "BAC +3",
  //           },
  //           {
  //             icon: Circle,
  //             name: "Formation initiale",
  //           },
  //           {
  //             icon: Time,
  //             name: "Courte durée",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Formation en Scan & Cybersécurité",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  //         price: "3000€",
  //         heading: {
  //           heading1: "Guadeloupe",
  //           heading2: "Organisme de formation",
  //         },
  //         badge: [
  //           {
  //             icon: Bag,
  //             name: "Management et stratégie",
  //           },
  //           {
  //             icon: Cap,
  //             name: "BAC +3",
  //           },
  //           {
  //             icon: Circle,
  //             name: "Formation initiale",
  //           },
  //           {
  //             icon: Time,
  //             name: "Courte durée",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Formation en Scan & Cybersécurité",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  //         price: "3000€",
  //         heading: {
  //           heading1: "Guadeloupe",
  //           heading2: "Organisme de formation",
  //         },
  //         badge: [
  //           {
  //             icon: Bag,
  //             name: "Management et stratégie",
  //           },
  //           {
  //             icon: Cap,
  //             name: "BAC +3",
  //           },
  //           {
  //             icon: Circle,
  //             name: "Formation initiale",
  //           },
  //           {
  //             icon: Time,
  //             name: "Courte durée",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Formation en Scan & Cybersécurité",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  //         price: "3000€",
  //         heading: {
  //           heading1: "Guadeloupe",
  //           heading2: "Organisme de formation",
  //         },
  //         badge: [
  //           {
  //             icon: Bag,
  //             name: "Management et stratégie",
  //           },
  //           {
  //             icon: Cap,
  //             name: "BAC +3",
  //           },
  //           {
  //             icon: Circle,
  //             name: "Formation initiale",
  //           },
  //           {
  //             icon: Time,
  //             name: "Courte durée",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  const [territoires, setTerritories] = React.useState("");
  const [domain, setDomain] = React.useState("");
  const [type, setType] = React.useState("");
  const [duree, setDuree] = React.useState("");
  const locales = useLocale();
  const [loading,setLoading] = useState(true);

  const dispatch = useDispatch();
  const router = useRouter();

  const { allFormations } = useSelector((state) => state.formations);
  console.log(allFormations, "allFormations");

  useEffect(() => {
    dispatch(getAllFormations())
      .unwrap()
      .then((res) => {
        console.log(res, "res");
        setLoading(false);
      });
  }, [dispatch]);

  const handleSourceChange = (event) => {
    setTerritories(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  const handleDureeChange = (event) => {
    setDuree(event.target.value);
  };

  const filteredFormations = allFormations?.filter(ele => {
    return (
      (territoires === "" || ele.territoires === territoires) &&
      (domain === "" || ele.domain === domain) &&
      (type === "" || ele.typeOfFormation === type) &&
      (duree === "" || ele.duration === duree)
    );
  });

  return (
    <Box sx={{ padding: "0 16px" }}>
      <Container disableGutters maxWidth={"xl"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <FormControl
              sx={{
                m: 1,
                minWidth: { md: 180, xs: 100 },
                color: "#222D55",
                background:
                  "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                // border: "1px solid rgba(34, 45, 85, 0.3)",
                borderRadius: "50px",
                fontWeight: 600,
                fontFamily: inter.style.fontFamily,
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "& .MuiSelect-icon": {
                  // Change dropdown arrow color
                  color: "#fff",
                },
              }}
            >
              <Select
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  color: "#fff !important",
                  fontSize: { md: "14px", xs: "12px" },
                  fontWeight: 600,
                }}
                value={territoires}
                onChange={handleSourceChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem
                  value=""
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                >
                  TERRITOIRE
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={10}
                >
                  Ten
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={20}
                >
                  Twenty
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={30}
                >
                  Thirty
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                m: 1,
                minWidth: { md: 180, xs: 100 },
                color: "#222D55",
                // background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                border: "1px solid rgba(34, 45, 85, 0.3)",
                borderRadius: "50px",
                fontSize: { md: "12px", xs: "10px" },
                fontWeight: 500,
                fontFamily: inter.style.fontFamily,
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "& .MuiSelect-icon": {
                  // Change dropdown arrow color
                  color: "#222D55",
                },
              }}
            >
              <Select
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  fontSize: { md: "14px", xs: "12px" },
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
                value={domain}
                onChange={handleDomainChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem
                  value=""
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                >
                  Domaine
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={"Infrastructure réseaux, télécoms"}
                >
                  Infrastructure réseaux, télécoms
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={"Informatique,  systèmes d’information"}
                >
                  Informatique, systèmes d’information
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={"Analyse de   données, intelligence artificielle"}
                >
                  Analyse de données, intelligence artificielle
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={
                    "Communication, interface utilisateur et création numérique"
                  }
                >
                  Communication, interface utilisateur et création numérique
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={"Management et stratégie"}
                >
                  Management et stratégie
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={"Expertise et conseil"}
                >
                  Expertise et conseil
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                m: 1,
                minWidth: { md: 180, xs: 100 },
                color: "#222D55",
                // background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                border: "1px solid rgba(34, 45, 85, 0.3)",
                borderRadius: "50px",
                fontSize: { md: "12px", xs: "10px" },
                fontWeight: 500,
                fontFamily: inter.style.fontFamily,
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "& .MuiSelect-icon": {
                  // Change dropdown arrow color
                  color: "#222D55",
                },
              }}
            >
              <Select
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  fontSize: { md: "14px", xs: "12px" },

                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
                value={type}
                onChange={handleTypeChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem
                  value=""
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                >
                  Type
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={10}
                >
                  Ten
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={20}
                >
                  Twenty
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={30}
                >
                  Thirty
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                m: 1,
                minWidth: { md: 180, xs: 100 },
                color: "#222D55",
                // background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                border: "1px solid rgba(34, 45, 85, 0.3)",
                borderRadius: "50px",
                fontSize: { md: "12px", xs: "10px" },
                fontWeight: 500,
                fontFamily: inter.style.fontFamily,
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "& .MuiSelect-icon": {
                  // Change dropdown arrow color
                  color: "#222D55",
                },
              }}
            >
              <Select
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  textTransform: "uppercase",
                  fontWeight: 500,
                  fontSize: { md: "14px", xs: "12px" },
                }}
                value={duree}
                onChange={handleDureeChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem
                  value=""
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                >
                  Durée
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={10}
                >
                  Ten
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={20}
                >
                  Twenty
                </MenuItem>
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "12px" },
                  }}
                  value={30}
                >
                  Thirty
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Grid
          container
          mt={{ md: 10, xs: 5 }}
          justifyContent={"space-between"}
          rowSpacing={3}
        >
          <Grid container columnSpacing={2} sx={{ display: "flex" }} pb={10}>
            {loading && (
               <Stack sx={{ color: 'grey.500',width:'100%',display:'flex',justifyContent:'center',alignItems:'center' }} spacing={2} direction="row">
               <CircularProgress color="inherit" sx={{color:'#222D55'}} />
             </Stack>
            )}
            {!loading && filteredFormations?.map((ele, idxx) => {
              const DescriptionData = ele?.description
                .split("\n")
                .slice(0, 4)
                .map((line, index) => {
                  if (index === 0) {
                    return line.substring(0, 200) + "...";
                  } else {
                    return line;
                  }
                })
                .join("\n");
              return (
                <Grid item xs={12} md={6} key={idxx}>
                  <Box
                    onClick={() =>
                      router.push(`/${locales}/seFormer/NewForms/${ele?._id}`)
                    }
                    sx={{
                      cursor: "pointer",
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      padding: 5,
                      position: "relative",
                      borderTop:
                        idxx !== 0 && idxx !== 1
                          ? "none"
                          : "1px solid rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 3 }}>
                      {ele?.heading?.map((hed, idx) => {
                        return (
                          <>
                            <Typography
                              key={idx}
                              sx={{
                                fontSize: { md: "12px", xs: "10px" },
                                color: "#BE0011",
                                fontFamily: inter.style.fontFamily,
                                fontWeight: 600,
                                textTransform: "uppercase",
                              }}
                            >
                              {hed}
                            </Typography>
                          </>
                        );
                      })}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { md: "24px", xs: "18px" },
                        color: "#222D55",
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 500,
                        mt: 2,
                      }}
                    >
                      {ele?.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "14px", xs: "12px" },
                        lineHeight: "22px",
                        color: "#222D55",
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 500,
                        mt: 2,
                      }}
                      dangerouslySetInnerHTML={{ __html: DescriptionData }}
                    >
                      {/* {ele?.description} */}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "14px", xs: "12px" },
                        lineHeight: "22px",
                        color: "#222D55",
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 500,
                        mt: 2,
                      }}
                    >
                      {ele?.cost} €
                    </Typography>
                    <Grid container>
                      {/* {ele?.badge?.map((bd, id) => {
                        return ( */}
                      <Grid item xs={12} md={6} mt={2}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Img src={Bag} />
                          <Box>
                            <Typography
                              sx={{
                                fontSize: { md: "14px", xs: "12px" },
                                lineHeight: "22px",
                                color: "#222D55",
                                fontFamily: inter.style.fontFamily,
                              }}
                            >
                              {ele?.domain}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6} mt={2}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Img src={Cap} />
                          <Box>
                            <Typography
                              sx={{
                                fontSize: { md: "14px", xs: "12px" },
                                lineHeight: "22px",
                                color: "#222D55",
                                fontFamily: inter.style.fontFamily,
                              }}
                            >
                              {ele?.targetedLevel}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6} mt={2}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Img src={Circle} />
                          <Box>
                            <Typography
                              sx={{
                                fontSize: { md: "14px", xs: "12px" },
                                lineHeight: "22px",
                                color: "#222D55",
                                fontFamily: inter.style.fontFamily,
                              }}
                            >
                              {ele?.typeOfFormation}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6} mt={2}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Img src={Time} />
                          <Box>
                            <Typography
                              sx={{
                                fontSize: { md: "14px", xs: "12px" },
                                lineHeight: "22px",
                                color: "#222D55",
                                fontFamily: inter.style.fontFamily,
                              }}
                            >
                              {ele?.duration}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      {/* );
                      })} */}
                    </Grid>
                    <Box
                      sx={{
                        position: "absolute",
                        left: 50,
                        bottom: -40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 2,
                        backgroundColor: "white",
                      }}
                    >
                      <Box
                        sx={{
                          width: "45px",
                          height: "45px",
                          borderRadius: "50%",
                          border: "1px solid rgba(0, 0, 0, 0.3)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        // onClick={()=>router.push(`/${locales}/seFormer/NewForms/${ele?._id}`)}
                      >
                        <ArrowForwardIcon
                          sx={{
                            color: "#222D55",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
