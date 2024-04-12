"use client";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../../fonts/fonts";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export default function HeroSection() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span style="background-color: #FFFFFF; color: #000000; font-family: ' +
        inter.style.fontFamily +
        ';" class="' +
        className +
        '">' +
        (index + 1) +
        "</span>"
      );
    },
  };
  const category = [
    {
      data: [
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
      ],
      key: "Category 1",
    },
    {
      data: [
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
      ],
      key: "Category 1",
    },
    {
      data: [
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
        {
          title: "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure et Policy Secure Gateways",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          time: "13.01.2024",
          heading: {
            heading1: "Lorem ipsum",
            heading2: "Lorem ipsum2",
          },
        },
      ],
      key: "Category 1",
    },
  ];
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <div style={{ position: "absolute", right: 0, top: { md: 100, xs: 0 } }}>
        <svg width="597" height="499" viewBox="0 0 597 499" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.25" filter="url(#filter0_f_1430_1889)">
            <ellipse cx="364.5" cy="134.5" rx="204.5" ry="204.5" transform="rotate(-180 364.5 134.5)" fill="#61F4C0" />
          </g>
          <defs>
            <filter
              id="filter0_f_1430_1889"
              x="0"
              y="-230"
              width="729"
              height="729"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_1430_1889" />
            </filter>
          </defs>
        </svg>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          paddingTop: { md: 50, xs: 20 },
        }}
      >
        <Container disableGutters maxWidth={"xl"}>
          <Grid container sx={{ padding: "0 16px" }}>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: {
                    md: "75px",
                    sm: "60px",
                    xs: "35px",
                  },
                  color: "#222D55",
                  fontWeight: 400,
                  lineHeight: {
                    md: "85px",
                    sm: "75px",
                    xs: "50px",
                  },
                }}
              >
                Alertes de sécurité
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box mt={{ md: 5, xs: 2 }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#222D55",
                    fontSize: { md: "15px", xs: "13px" },
                    lineHeight: { md: "25px", xs: "22px" },
                  }}
                >
                  Les alertes sont des documents destinés à prévenir d'un danger immédiat
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider
            variant="middle"
            sx={{
              bgcolor: "#CDD1DD",
              mt: { md: 6, xs: 2 },
              borderBottomWidth: "1px",
            }}
          />
          <Grid container sx={{ display: "flex", alignItems: "center", mt: 5, pb: 5 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                <Typography
                  sx={{
                    color: "#222D55",
                    fontWeight: 600,
                    fontFamily: inter.style.fontFamily,
                    textAlign: "end",
                  }}
                >
                  Filtrer par
                </Typography>
                <FormControl
                  fullWidth
                  sx={{
                    color: "#222D55",
                    background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                    borderRadius: "50px",
                    fontSize: { md: "12px", xs: "10px" },
                    maxWidth: "198px",
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
                  <InputLabel id="demo-simple-select-label" sx={{ fontFamily: inter.style.fontFamily, color: "#fff" }}>
                    Source
                  </InputLabel>
                  <Select
                    sx={{
                      boxShadow: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                        border: 0,
                      },
                      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: 0,
                      },
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10} sx={{ fontFamily: inter.style.fontFamily }}>
                      Ten
                    </MenuItem>
                    <MenuItem value={20} sx={{ fontFamily: inter.style.fontFamily }}>
                      Twenty
                    </MenuItem>
                    <MenuItem value={30} sx={{ fontFamily: inter.style.fontFamily }}>
                      Thirty
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  fullWidth
                  sx={{
                    color: "#222D55",
                    background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                    borderRadius: "50px",
                    fontSize: { md: "12px", xs: "10px" },
                    fontWeight: 600,
                    maxWidth: "198px",
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
                  <InputLabel id="demo-simple-select-label" sx={{ fontFamily: inter.style.fontFamily, color: "#fff" }}>
                    Source
                  </InputLabel>
                  <Select
                    sx={{
                      boxShadow: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                        border: 0,
                      },
                      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: 0,
                      },
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10} sx={{ fontFamily: inter.style.fontFamily }}>
                      Ten
                    </MenuItem>
                    <MenuItem value={20} sx={{ fontFamily: inter.style.fontFamily }}>
                      Twenty
                    </MenuItem>
                    <MenuItem value={30} sx={{ fontFamily: inter.style.fontFamily }}>
                      Thirty
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>

          <Swiper slidesPerView={1} pagination={pagination} modules={[Pagination]} className="mySwiper">
            {category?.map((data, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <Grid container columnSpacing={2} sx={{ display: "flex" }} pb={10}>
                    {data?.data?.map((ele, idxx) => {
                      return (
                        <Grid item xs={12} md={6} key={idxx}>
                          <Box
                            sx={{
                              border: "1px solid rgba(0, 0, 0, 0.3)",
                              padding: 5,
                              position: "relative",
                              borderTop: idxx !== 0 && idxx !== 1 ? "none" : "1px solid rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <Box sx={{ display: "flex", gap: 3 }}>
                              <Typography
                                sx={{
                                  fontSize: { md: "12px", xs: "10px" },
                                  color: "#BE0011",
                                  fontFamily: inter.style.fontFamily,
                                  fontWeight: 600,
                                  textTransform: "uppercase",
                                }}
                              >
                                {ele?.heading?.heading1}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: { md: "12px", xs: "10px" },
                                  color: "#BE0011",
                                  fontFamily: inter.style.fontFamily,
                                  fontWeight: 600,
                                  textTransform: "uppercase",
                                }}
                              >
                                {ele?.heading?.heading2}
                              </Typography>
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
                            >
                              {ele?.description}
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
                              {ele?.time}
                            </Typography>
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
                              >
                                <ArrowForwardIcon sx={{ color: "#222D55", width: "20px", height: "20px" }} />
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </Box>
    </Box>
  );
}
