"use client";
import { Box, Container, Divider, Grid, Typography, keyframes, styled } from "@mui/material";
import React, { useEffect } from "react";
import { inter } from "../../../../fonts/fonts";
import Logo1 from "../../../../Icons/KeyDates/Image1.svg";
import Logo2 from "../../../../Icons/KeyDates/Image2.svg";
import Logo3 from "../../../../Icons/KeyDates/Image3.svg";
import Logo4 from "../../../../Icons/KeyDates/Image4.svg";
import Logo5 from "../../../../Icons/KeyDates/Image5.svg";
import Logo6 from "../../../../Icons/KeyDates/Image6.svg";
import Image from "next/image";
import Timeline from "../../../../Icons/TimeLine.svg";
import Timeline2 from "../../../../../public/Timeline2.svg";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
const Img = styled(Image)(({ theme }) => ({
  width: "100% !important",
  height: "auto !important",
}));
export default function OurKeyDates() {
  const t = useTranslations("OurKeyDates");
  const searchParams = useSearchParams();
  const search = searchParams.get("NosDatesCles");
  useEffect(() => {
    if (search == "true") {
      document.getElementById("NosDatesCles").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }, []);
  const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const getAnimationDelay = (index) => `${index * 0.2}s`;
  return (
    <Box
      id="NosDatesCles"
      // sx={{
      //   backgroundImage: "url('/Images/BackgroundImg2.svg')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Box
          sx={{
            mt: { md: 20, xs: 5 },
            padding: "0 16px",
          }}
        >
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontWeight: 400,
              fontSize: { md: "70px", xs: "40px", lineHeight: "50px" },
              color: "#222D55",
            }}
          >
            {`${t("OurKeyDatesTitle")}`}
          </Typography>
        </Box>
      </Container>
      <Divider
        variant="middle"
        sx={{
          display: { md: "block", xs: "none" },
          bgcolor: "#222D55",
          mt: { md: 3, xs: 5 },
          opacity: "20%",
          borderBottomWidth: "1px",
          mb: 10,
        }}
      />
      <Container disableGutters maxWidth={"xl"} sx={{ padding: "0 16px" }}>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ animation: `${fadeIn} 1s ease-in-out forwards`,animationDelay: getAnimationDelay(1),opacity:0}}>
              <Box sx={{ display: "flex", gap: 4 }}>
                <Box>
                  <svg width="52" height="230" viewBox="0 0 52 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="25.5" y1="230" x2="25.5" y2="80" stroke="#007A47" />
                    <circle cx="26" cy="26" r="25.5" stroke="#007A47" />
                    <circle cx="26" cy="26" r="4" fill="#007A47" />
                  </svg>
                </Box>
                <Box mt={-3}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "center",
                      mt: 0.5,
                      color: "#222D55",
                      width: "100px",
                      fontSize: "36px",
                      lineHeight: "38px",
                      color: "#007A47",
                      fontWeight: "300",
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineDate1")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "center",
                      mt: 2,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle1a")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "center",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle1b")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "center",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle1c")}`}
                  </Typography>
                  <Box mt={1}>
                    <Image src={Logo1} width={70} height={70} alt="logo1" />
                  </Box>
                </Box>
              </Box>
            </Grid>
              
            <Grid item xs={12} md={4} sx={{ animation: `${fadeIn} 1s ease-in-out forwards`,animationDelay: getAnimationDelay(3),opacity:0}}>
              <Box sx={{ display: "flex", gap: 4 }}>
                <Box>
                  <svg width="52" height="230" viewBox="0 0 52 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="25.5" y1="230" x2="25.5" y2="80" stroke="#007A47" />
                    <circle cx="26" cy="26" r="25.5" stroke="#007A47" />
                    <circle cx="26" cy="26" r="4" fill="#007A47" />
                  </svg>
                </Box>
                <Box mt={-3}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "center",
                      mt: 0.5,
                      color: "#222D55",
                      width: "100px",
                      fontSize: "36px",
                      lineHeight: "38px",
                      color: "#007A47",
                      fontWeight: "300",
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineDate2")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 2,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle2a")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle2b")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle2c")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle2d")}`}
                  </Typography>
                  <Box mt={1}>
                    <Image src={Logo2} width={70} height={70} alt="logo1" />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ animation: `${fadeIn} 1s ease-in-out forwards`,animationDelay: getAnimationDelay(5),opacity:0}}>
              <Box sx={{ display: "flex", gap: 4 }}>
                <Box>
                  <svg width="52" height="230" viewBox="0 0 52 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="25.5" y1="230" x2="25.5" y2="80" stroke="#007A47" />
                    <circle cx="26" cy="26" r="25.5" stroke="#007A47" />
                    <circle cx="26" cy="26" r="4" fill="#007A47" />
                  </svg>
                </Box>
                <Box mt={-3}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      width: "100px",
                      fontSize: "36px",
                      lineHeight: "38px",
                      color: "#007A47",
                      fontWeight: "300",
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineDate3")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 2,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle3a")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle3b")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle3c")}`}
                  </Typography>
                  <Box mt={1}>
                    <Image src={Logo3} width={70} height={70} alt="logo1" />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={2} sx={{ animation: `${fadeIn} 1s ease-in-out forwards`,animationDelay: getAnimationDelay(1),opacity:0}}>
              <Img src={Timeline} alt="timeline" />
            </Grid>
            <Grid item xs={12} md={2} sx={{ opacity:0,animation: `${fadeIn} 1s ease-in-out forwards`,animationDelay: getAnimationDelay(2)}}>
              <Img src={Timeline} alt="timeline" />
            </Grid>
            <Grid item xs={12} md={2} sx={{ animation: `${fadeIn} 1s ease-in-out forwards`,animationDelay: getAnimationDelay(3),opacity:0}}>
              <Img src={Timeline} alt="timeline" />
            </Grid>
            <Grid item xs={12} md={2} sx={{ animation: `${fadeIn} 1s ease-in-out forwards`,animationDelay: getAnimationDelay(4),opacity:0}}>
              <Img src={Timeline} alt="timeline" />
            </Grid>
            <Grid item xs={12} md={2} sx={{ animation: `${fadeIn} 1s ease-in-out forwards`,animationDelay: getAnimationDelay(5),opacity:0}}>
              <Img src={Timeline} alt="timeline" />
            </Grid>
            <Grid item xs={12} md={2} sx={{ animation: `${fadeIn} 1s ease-in-out forwards`,animationDelay: getAnimationDelay(6),opacity:0}}>
              <Img src={Timeline} alt="timeline" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ animation: `${fadeIn} 1s ease-in-out forwards`,animationDelay: getAnimationDelay(2),opacity:0}}>
              <Box sx={{ display: "flex", gap: 4, justifyContent: "end" }}>
                <Box>
                  <svg
                    style={{ rotate: "180deg" }}
                    width="52"
                    height="230"
                    viewBox="0 0 52 230"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="25.5" y1="230" x2="25.5" y2="80" stroke="#007A47" />
                    <circle cx="26" cy="26" r="25.5" stroke="#007A47" />
                    <circle cx="26" cy="26" r="4" fill="#007A47" />
                  </svg>
                </Box>
                <Box>
                  <Box mt={1}>
                    <Image src={Logo4} width={70} height={70} alt="logo1" />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      width: "100px",
                      fontSize: "36px",
                      lineHeight: "38px",
                      color: "#007A47",
                      fontWeight: "300",
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineDate4")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 2,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle4a")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle4b")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle4c")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle4d")}`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ animation: `${fadeIn} 1s ease-in-out forwards`,animationDelay: getAnimationDelay(4),opacity:0}}>
              <Box sx={{ display: "flex", gap: 4, justifyContent: "end" }}>
                <Box>
                  <svg
                    style={{ rotate: "180deg" }}
                    width="52"
                    height="230"
                    viewBox="0 0 52 230"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="25.5" y1="230" x2="25.5" y2="80" stroke="#007A47" />
                    <circle cx="26" cy="26" r="25.5" stroke="#007A47" />
                    <circle cx="26" cy="26" r="4" fill="#007A47" />
                  </svg>
                </Box>
                <Box>
                  <Box mt={1}>
                    <Image src={Logo5} width={70} height={70} alt="logo1" />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      width: "100px",
                      fontSize: "36px",
                      lineHeight: "38px",
                      color: "#007A47",
                      fontWeight: "300",
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineDate5")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 2,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle5a")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle5b")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle5c")}`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ animation: `${fadeIn} 1s ease-in-out forwards`,animationDelay: getAnimationDelay(6),opacity:0}}>
              <Box sx={{ display: "flex", gap: 4, justifyContent: "end" }}>
                <Box>
                  <svg
                    style={{ rotate: "180deg" }}
                    width="52"
                    height="230"
                    viewBox="0 0 52 230"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="25.5" y1="230" x2="25.5" y2="80" stroke="#007A47" />
                    <circle cx="26" cy="26" r="25.5" stroke="#007A47" />
                    <circle cx="26" cy="26" r="4" fill="#007A47" />
                  </svg>
                </Box>
                <Box>
                  <Box mt={1}>
                    <Image src={Logo6} width={70} height={70} alt="logo1" />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      width: "100px",
                      fontSize: "36px",
                      lineHeight: "38px",
                      color: "#007A47",
                      fontWeight: "300",
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineDate6")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 2,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle6a")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle6b")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle6c")}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      display: "flex",
                      justifyContent: "start",
                      mt: 0.5,
                      color: "#222D55",
                      lineHeight: "16px",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {`${t("TimeLineTitle6d")}`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            mt: 5,
            padding: { sm: "0 100px", xs: "0 10px" },
          }}
        >
          <Img src={Timeline2} height={900} width={900} />
        </Box>
      </Container>
    </Box>
  );
}
