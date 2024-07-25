import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { inter } from "../../../fonts/fonts";
import { useTranslations } from "next-intl";

const PolitiqueDeProtectionDesDonnées = () => {
  const t = useTranslations("LegalPage");
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <div
          style={{ position: "absolute", right: 0, top: { md: -115, xs: 0 } }}
        >
          <svg
            width="597"
            height="499"
            viewBox="0 0 597 499"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.25" filter="url(#filter0_f_1430_1889)">
              <ellipse
                cx="364.5"
                cy="134.5"
                rx="204.5"
                ry="204.5"
                transform="rotate(-180 364.5 134.5)"
                fill="#61F4C0"
              />
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
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="80"
                  result="effect1_foregroundBlur_1430_1889"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <Container maxWidth={"xl"} sx={{ pt: {xs:20,md:30} }}>
          <Box>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: {xs:"42px",md:"75px"},
                fontWeight: 400,
                lineHeight: {xs:'55px',md:"90px"},
                color: "#222D55",
                textAlign: "center",
              }}
            >
              {`${t("Title1")}`}{<br></br>}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {`${t("Title2")}`}
              </span>
            </Typography>
          </Box>
        </Container>
        <Divider
          variant="middle"
          sx={{
            bgcolor: "#222D55",
            mt: {xs:12,md:25},
            opacity: 0.2,
            marginLeft: 5,
            marginRight: 5,
            borderBottomWidth: "1px",
          }}
        ></Divider>
        <Container maxWidth={"lg"} sx={{ mt: 10 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: {xs:2,md:5} }}>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: {xs:"28px",md:"55px"},
                fontWeight: 400,
                lineHeight: {xs:'45px',md:"60px"},
                color: "#222D55",
              }}
            >
              {`${t("title1")}`}
            </Typography>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: {xs:"16px",md:"24px"},
                fontWeight: 500,
                lineHeight: {xs:"26px",md:"36px"},
                color: "#222D55",
              }}
            >
              {`${t("text1")}`}
              {<br></br>}
              {`${t('text2')}`}
              {<br></br>} 
              {`${t('text3')}`}
              {<br></br>}
              {`${t('text4')}`}
            </Typography>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: {xs:'28px',md:"55px"},
                fontWeight: 400,
                lineHeight: {xs:'36px',md:"60px"},
                color: "#222D55",
              }}
            >
              {`${t("title2")}`}
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: {xs:'16px',md:'24px'},
                  fontWeight: 500,
                  lineHeight: {xs:"26px",md:"36px"},
                  color: "#222D55",
                }}
              >
                {`${t("text5")}`}
              </Typography>
              <ul style={{ lineHeight: 5 }}>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{t("list1Title")}</span> {" "}
                    {t("list1Detail")}
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{t("list2Title")}</span> {t("list2Detail")}
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{t("list3Title")}</span>{" "}
                    {t("list3Detail")}
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>
                    {t("list4Title")}
                    </span>{" "}
                    {t("list3Detail")}
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>
                    {t("list5Title")}
                    </span>{' '}
                    {t("list5Detail")}
                  </Typography>
                </li>
              </ul>
            </Box>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: {xs:"28px",md:"55px"},
                fontWeight: 400,
                lineHeight: {xs:'36px',md:"60px"},
                color: "#222D55",
              }}
            >
              {t("title3")}
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: {xs:"16px",md:"24px"},
                  fontWeight: 600,
                  lineHeight: {xs:"26px",md:"36px"},
                  color: "#222D55",
                }}
              >
                {`${t("title3a")}`}
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: {xs:"16px",md:"24px"},
                  fontWeight: 500,
                  lineHeight: {xs:"26px",md:"36px"},
                  color: "#222D55",
                }}
              >
                {`${t("text6")}`}
              </Typography>
              <ul>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    {`${t("list1")}`}
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    {`${t("list2")}`}
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    {`${t("list3")}`}
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: {xs:"16px",md:"24px"},
                  fontWeight: 600,
                  lineHeight: {xs:"26px",md:"36px"},
                  color: "#222D55",
                }}
              >
                {`${t("title3b")}`}
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: {xs:"16px",md:"24px"},
                  fontWeight: 500,
                  lineHeight: {xs:"26px",md:"36px"},
                  color: "#222D55",
                }}
              >
                {`${t("text7")}`}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: {xs:"16px",md:"24px"},
                  fontWeight: 600,
                  lineHeight: {xs:"26px",md:"36px"},
                  color: "#222D55",
                }}
              >
                {`${t("title3c")}`}
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: {xs:"16px",md:"24px"},
                  fontWeight: 500,
                  lineHeight: {xs:"26px",md:"36px"},
                  color: "#222D55",
                }}
              >
                {`${t("text8")}`}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: {xs:"16px",md:"24px"},
                fontWeight: 500,
                lineHeight: {xs:"26px",md:"36px"},
                color: "#222D55",
              }}
            >
              {`${t("text9")}`}
            </Typography>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: {xs:"16px",md:"24px"},
                fontWeight: 500,
                lineHeight: {xs:"26px",md:"36px"},
                color: "#222D55",
              }}
            >
              {`${t("text10")}`}
            </Typography>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: {xs:"28px",md:"55px"},
                fontWeight: 400,
                lineHeight: {xs:'36px',md:"60px"},
                color: "#222D55",
              }}
            >
              {`${t("title4")}`}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: {xs:"16px",md:"24px"},
                  fontWeight: 600,
                  lineHeight: {xs:"26px",md:"36px"},
                  color: "#222D55",
                }}
              >
                {`${t("title4a")}`}
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: {xs:"16px",md:"24px"},
                  fontWeight: 500,
                  lineHeight: {xs:"26px",md:"36px"},
                  color: "#222D55",
                }}
              >
                {`${t("text11")}`}
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: {xs:"16px",md:"24px"},
                  fontWeight: 500,
                  lineHeight: {xs:"26px",md:"36px"},
                  color: "#222D55",
                }}
              >
                {`${t("text12")}`}
              </Typography>
              <ul style={{ lineHeight: 3 }}>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{`${t('list6Title')}`}</span>
                    <br></br> {`${t('list6Detail1')}`} <br></br>{`${t('list6Detail2')}`}
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{`${t('list7Title')}`}</span>{" "}
                    <br></br>
                    {`${t('list7Detail1')}`}<br></br> {`${t('list7Detail1')}`}
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>
                    {`${t('list8Title')}`}
                    </span>{" "}
                    <br></br>
                    {`${t('list8Detail')}`}
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{`${t('list9Title')}`}</span>{" "}
                    <br></br>
                    {`${t('list9Detail')}`}
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>
                    {`${t('list10Title')}`}
                    </span>{" "}
                    <br></br>
                    {`${t('list10Detail')}`}
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>
                    {`${t('list11Title')}`}
                    </span>{" "}
                    <br></br>
                    {`${t('lis11Detail')}`}
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"16px",md:"24px"},
                      fontWeight: 500,
                      lineHeight: {xs:"26px",md:"36px"},
                      color: "#222D55",
                    }}
                  >
                    {`${t('lis12Detail')}`}
                  </Typography>
                </li>
              </ul>
              <Box sx={{ mt: 5 }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: {xs:"16px",md:"24px"},
                    fontWeight: 500,
                    lineHeight: {xs:"26px",md:"36px"},
                    color: "#222D55",
                  }}
                >
                  {`${t('text13')}`}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: {xs:"16px",md:"24px"},
                    fontWeight: 500,
                    lineHeight: {xs:"26px",md:"36px"},
                    color: "#222D55",
                  }}
                >
                  {`${t('text14')}`}
                </Typography>
              </Box>
              <Box sx={{ mt: 5 }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: {xs:"16px",md:"24px"},
                    fontWeight: 600,
                    lineHeight: {xs:"26px",md:"36px"},
                    color: "#222D55",
                  }}
                >
                  {`${t('title4b')}`}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: {xs:"16px",md:"24px"},
                    fontWeight: 500,
                    lineHeight: {xs:"26px",md:"36px"},
                    color: "#222D55",
                  }}
                >
                  {`${t('text15')}`}
                </Typography>
                <ul>
                  <li>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: {xs:"16px",md:"24px"},
                        fontWeight: 500,
                        lineHeight: {xs:"26px",md:"36px"},
                        color: "#222D55",
                      }}
                    >
                      {`${t('list13')}`}
                    </Typography>
                    <ul>
                      <li>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: {xs:"16px",md:"24px"},
                            fontWeight: 500,
                            lineHeight: {xs:"26px",md:"36px"},
                            color: "#222D55",
                          }}
                        >
                          {`${t('list14')}`}
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: {xs:"16px",md:"24px"},
                            fontWeight: 500,
                            lineHeight: {xs:"26px",md:"36px"},
                            color: "#222D55",
                          }}
                        >
                          {`${t('list15')}`}
                        </Typography>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Box>
              <Box sx={{ mt: 5 }}>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: {xs:"16px",md:"24px"},
                    fontWeight: 600,
                    lineHeight: {xs:"26px",md:"36px"},
                    color: "#222D55",
                  }}
                >
                  {`${t('title4c')}`}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: {xs:"16px",md:"24px"},
                    fontWeight: 500,
                    lineHeight: {xs:"26px",md:"36px"},
                    color: "#222D55",
                  }}
                >
                  {`${t('text16')}`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PolitiqueDeProtectionDesDonnées;
