"use client";
import { Box, Container, Divider, Grid, InputBase, Typography, alpha, styled } from "@mui/material";
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
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "rgb(34, 45, 85)",
  width: "100%",
  border: "1px solid rgba(34, 45, 85, 0.3)",
  padding: "8px 15px",
  borderRadius: "50px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  opacity: 0.3,
  alignItems: "center",
  justifyContent: "center",
}));
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
  const [source, setSocurce] = React.useState("");
  const [type, setType] = React.useState("");

  const handleSourceChange = (event) => {
    setSocurce(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <div style={{ position: "absolute", right: 0, top: { md: 100, xs: 0 } }}>
        <svg width="461" height="687" viewBox="0 0 461 687" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.1" filter="url(#filter0_f_2564_5375)">
            <ellipse
              cx="407.424"
              cy="279.576"
              rx="270.576"
              ry="270.576"
              transform="rotate(-180 407.424 279.576)"
              fill="#FF274E"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2564_5375"
              x="0.495193"
              y="-127.353"
              width="813.858"
              height="813.858"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="68.1766" result="effect1_foregroundBlur_2564_5375" />
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
            <Grid item xs={12} md={12}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: "#222D55",
                      fontWeight: 600,
                      fontFamily: inter.style.fontFamily,
                      textAlign: "end",
                      textTransform: "uppercase",
                    }}
                  >
                    Filtrer par
                  </Typography>
                  <FormControl
                    sx={{
                      m: 1,
                      minWidth: 180,
                      color: "#222D55",
                      background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                      // border: "1px solid rgba(34, 45, 85, 0.3)",
                      borderRadius: "50px",
                      fontSize: { md: "12px", xs: "10px" },
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
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                          border: 0,
                        },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: 0,
                        },
                        color: "#fff !important",
                        fontWeight: 600,
                      }}
                      value={source}
                      onChange={handleSourceChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="" sx={{ textTransform: "uppercase" }}>
                        SOURCE
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    sx={{
                      m: 1,
                      minWidth: 180,
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
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                          border: 0,
                        },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: 0,
                        },
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                      value={type}
                      onChange={handleTypeChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="" sx={{ textTransform: "uppercase" }}>
                        Type
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Recherche" inputProps={{ "aria-label": "search" }} />
                  </Search>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 150,
              display: { md: "block", xs: "none" },
            }}
          >
            <svg width="467" height="815" viewBox="0 0 467 815" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.1" filter="url(#filter0_f_1856_4145)">
                <path
                  d="M-211 407.576C-211 258.141 -89.8588 137 59.5761 137C209.011 137 330.152 258.141 330.152 407.576C330.152 557.011 209.011 678.152 59.576 678.152C-89.8589 678.152 -211 557.011 -211 407.576Z"
                  fill="#FF274E"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_1856_4145"
                  x="-347.353"
                  y="0.646835"
                  width="813.858"
                  height="813.858"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="68.1766" result="effect1_foregroundBlur_1856_4145" />
                </filter>
              </defs>
            </svg>
          </Box>
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
