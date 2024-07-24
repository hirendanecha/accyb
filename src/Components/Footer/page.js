"use client";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import React from "react";
import Logo from "../../Icons/Footer/Logo.svg";
import partner1 from "../../Icons/Footer/partner1.svg";
import partner2 from "../../Icons/Footer/partner2.svg";
import { inter } from "../../fonts/fonts";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  const router = useRouter();
  const locales = useLocale();
  return (
    <>
      <Container disableGutters maxWidth={"xl"}>
        <Box id="footer" sx={{ padding: "0 16px", mt: 8 }}>
          <Typography
            sx={{
              color: "#222D55",
              fontWeight: 500,
              cursor: "pointer",
              fontSize: "24px",
              lineHeight: "36px",
              display: "flex",
              justifyContent: "center",
              fontFamily: inter.style.fontFamily,
            }}
          >
            {t("heading")}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 2 }}>
            <Box
              onClick={(e) => {
                e.preventDefault();
                const link = document.createElement("a");
                link.href = "https://www.linkedin.com/company/accyb/";
                link.setAttribute("target", "_blank");
                document.body.appendChild(link);
                link.click();
                link.remove();
              }}
            >
              <LinkedInIcon sx={{ cursor: "pointer" }} />
            </Box>
            <Box
              onClick={(e) => {
                e.preventDefault();
                const link = document.createElement("a");
                link.href = "https://twitter.com/ACCYB97?s=20";
                link.setAttribute("target", "_blank");
                document.body.appendChild(link);
                link.click();
                link.remove();
              }}
            >
              <XIcon sx={{ cursor: "pointer" }} />
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider
        variant="middle"
        sx={{
          display: { md: "block", xs: "none" },
          bgcolor: "#222D55",
          mt: { md: 6, xs: 2 },
          opacity: "20%",
          borderBottomWidth: "1px",
        }}
      />
      <Container disableGutters maxWidth={"xl"}>
        <Grid container mt={8} sx={{ padding: "0 16px" }}>
          <Grid item md={12}>
            <Grid container>
              <Grid
                item
                lg={2}
                md={12}
                xs={12}
                sx={{ justifyContent: { lg: "unset", xs: "center" }, display: "flex", pb: { lg: 0, xs: 10 } }}
              >
                <Image src={Logo} height={138} width={138} alt="logo" />
              </Grid>
              <Grid item lg={2} md={2.4} sm={6} xs={12} textAlign={{ md: "unset", xs: "center" }}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      pb: 2,
                      fontFamily: inter.style.fontFamily,
                      textTransform: "uppercase",
                    }}
                  >
                    {t("title1")}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: { md: "unset", xs: "center" },
                    }}
                  >
                    <Image src={partner2} height={81} width={73} alt="partner2" />
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={2} md={2.4} sm={6} xs={12} mt={{ md: 0, xs: 5 }} textAlign={{ md: "unset", xs: "center" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 600,
                    fontFamily: inter.style.fontFamily,
                    pb: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {t("title2")}
                </Typography>
                <Box>
                  <Typography
                    onClick={() => {
                      router.push(`/${locales}/discoverTheACCYB?NosDatesCles=true`);
                    }}
                    sx={{
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: 400,
                      mt: 1,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("t2sub1")}
                  </Typography>
                  <Typography
                    onClick={() => {
                      router.push(`/${locales}/discoverTheACCYB?mission=true`);
                    }}
                    sx={{
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: 400,
                      mt: 1,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("t2sub2")}
                  </Typography>
                  <Typography
                    onClick={() => {
                      router.push(`/${locales}/discoverTheACCYB?services=true`);
                    }}
                    sx={{
                      fontSize: "12px",
                      cursor: "pointer",
                      fontWeight: 400,
                      mt: 1,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("t2sub3")}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={2} md={2.4} sm={6} xs={12} mt={{ md: 0, xs: 5 }} textAlign={{ md: "unset", xs: "center" }}>
                <Typography
                  sx={{
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: 600,
                    pb: 2,
                    fontFamily: inter.style.fontFamily,
                    textTransform: "uppercase",
                  }}
                >
                  {t("title3")}
                </Typography>
                <Box>
                  <Typography
                    onClick={() => {
                      router.push(`/${locales}/FindOutAtlantic?mission=true`);
                    }}
                    sx={{
                      cursor: "pointer",
                      fontSize: "12px",
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    {t("t3sub1")}
                  </Typography>
                  <Typography
                    onClick={() => {
                      router.push(`/${locales}/FindOutAtlantic?services=true`);
                    }}
                    sx={{
                      cursor: "pointer",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "12px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    {t("t3sub2")}
                  </Typography>
                  <Typography
                    onClick={() => router.push(`/${locales}/alerteslist`)}
                    sx={{
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: 400,
                      mt: 1,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("t3sub3")}
                  </Typography>
                  <Typography
                    onClick={() => {
                      router.push(`/${locales}/FindOutAtlantic?vosinterlocuteurs=true`);
                    }}
                    sx={{
                      cursor: "pointer",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "12px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    {t("t3sub4")}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={2} md={2.4} sm={6} xs={12} mt={{ md: 0, xs: 5 }} textAlign={{ md: "unset", xs: "center" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 600,
                    pb: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {t("title4")}
                </Typography>
                <Box>
                  <Typography
                    onClick={() => {
                      router.push(`/${locales}/discoverTheObservatory?mission=true`);
                    }}
                    sx={{
                      cursor: "pointer",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "12px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    {t("t4sub1")}
                  </Typography>
                  <Typography
                    onClick={() => {
                      router.push(`/${locales}/discoverTheObservatory?services=true`);
                    }}
                    sx={{
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: 400,
                      mt: 1,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("t4sub2")}
                  </Typography>
                  <Typography
                    onClick={() => {
                      router.push(`/${locales}/discoverTheObservatory?etudes=true`);
                    }}
                    sx={{
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: 400,
                      mt: 1,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("t4sub3")}
                  </Typography>
                </Box>
              </Grid>
              {/* <Grid
                item
                lg={2}
                md={2.4}
                sm={12}
                xs={12}
                mt={{ md: 0, xs: 5 }}
                textAlign={{ md: "unset", xs: "center" }}
              >
                <Box>
                  <Typography
                    onClick={() => router.push(`/${locales}/secureOneself`)}
                    sx={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("t5sub1")}
                  </Typography>
                  <Typography
                    onClick={() => router.push(`/${locales}/seFormer`)}
                    sx={{
                      fontSize: "12px",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      mt: 2,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("t5sub2")}
                  </Typography>
                  <Typography
                    onClick={() => router.push(`/${locales}/sInformer`)}
                    sx={{
                      cursor: "pointer",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      mt: 2,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("t5sub3")}
                  </Typography>
                </Box>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          backgroundColor: "#222D55",
        }}
      >
        <Container disableGutters maxWidth={"xl"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              alignItems: "center",
              justifyContent: "center",
              gap: { md: 5, xs: 3 },
              padding: 2,
              mt: 5,
            }}
          >
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                color: "#FFFFFF",
                textTransform: "uppercase",
                fontSize: { md: "12px", xs: "11px" },
                fontWeight: 500,
                cursor:'pointer'
              }}
              onClick={() => router.push(`/${locales}/legalPage`)}
            >
              {t("footerT1")}
            </Typography>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,

                color: "#FFFFFF",
                textTransform: "uppercase",
                fontSize: { md: "12px", xs: "11px" },
                fontWeight: 500,
              }}
            >
              {t("footerT2")}
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontFamily: inter.style.fontFamily,
                textTransform: "uppercase",
                fontSize: { md: "12px", xs: "11px" },
                fontWeight: 500,
              }}
            >
              {t("footerT3")}
            </Typography>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                color: "#FFFFFF",
                textTransform: "uppercase",
                fontSize: { md: "12px", xs: "11px" },
                fontWeight: 500,
                cursor: "pointer",
              }}
              onClick={() => router.push(`/${locales}/sitemap.xml`)}
            >
              {t("footerT4")}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
