"use client";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { inter } from "../../../../fonts/fonts";

export default function OurKeyDates() {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [isVisible, controls]);
  return (
    <Box
    // sx={{
    //   backgroundImage: "url('/Images/BackgroundImg2.svg')",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Box
          ref={ref}
          sx={{
            mt: { md: 20, xs: 5 },
            padding: "0 16px",
          }}
        >
          {/* <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}> */}
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontWeight: 400,
              fontSize: { md: "70px", xs: "40px", lineHeight: "50px" },
              color: "#222D55",
            }}
          >
            Nos dates clés
          </Typography>
          {/* </motion.div> */}
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
        <Box
          sx={{
            paddingLeft: { md: "50px", xs: "0px" },
            display: { lg: "block", md: "none", xs: "none" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              pb: 70,
            }}
          >
            <Box
              sx={{
                border: "1px solid #B3D7C8",
                padding: 10,
                borderRadius: "50%",
                height: "354px",
                width: "354px",
                position: "absolute",
                top: 0,
                bottom: 0,
              }}
            >
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
                  marginLeft: "33px",
                }}
              >
                04 juin 2021
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Délibération
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                de la Région
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Guadeloupe
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #B3D7C8",
                padding: 10,
                borderRadius: "50%",
                height: "354px",
                width: "354px",
                position: "absolute",
                top: 150,
                bottom: 0,
                left: 250,
              }}
            >
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
                  marginLeft: "33px",
                }}
              >
                04 juin 2021
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Délibération
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                de la Région
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Guadeloupe
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #B3D7C8",
                padding: 10,
                borderRadius: "50%",
                height: "354px",
                width: "354px",
                top: 0,
                bottom: 0,
                position: "absolute",
                left: 500,
              }}
            >
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
                  marginLeft: "33px",
                }}
              >
                04 juin 2021
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Délibération
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                de la Région
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Guadeloupe
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #B3D7C8",
                padding: 10,
                borderRadius: "50%",
                height: "354px",
                width: "354px",
                position: "absolute",
                top: 150,
                bottom: 0,
                left: 750,
              }}
            >
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
                  marginLeft: "33px",
                }}
              >
                04 juin 2021
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Délibération
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                de la Région
              </Typography>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  display: "flex",
                  justifyContent: "center",
                  mt: 0.5,
                  color: "#222D55",
                  lineHeight: "16px",
                  fontSize: "19px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Guadeloupe
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* {"medium screen"} */}
        <Box
          sx={{
            paddingLeft: "50px",
            display: { lg: "none", md: "block", xs: "none" },
          }}
        >
          <Grid container rowSpacing={5}>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "354px",
                  width: "354px",
                }}
              >
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
                    marginLeft: "33px",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  de la Région
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Guadeloupe
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "354px",
                  width: "354px",
                }}
              >
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
                    marginLeft: "33px",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  de la Région
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Guadeloupe
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "354px",
                  width: "354px",
                }}
              >
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
                    marginLeft: "33px",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  de la Région
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Guadeloupe
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "354px",
                  width: "354px",
                }}
              >
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
                    marginLeft: "33px",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  de la Région
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    justifyContent: "center",
                    mt: 0.5,
                    color: "#222D55",
                    lineHeight: "16px",
                    fontSize: "19px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Guadeloupe
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* {"mobile screen"} */}
        <Box
          sx={{
            paddingLeft: { md: "50px", xs: "0px" },
            display: { lg: "none", md: "none", xs: "block" },
          }}
        >
          <Grid container rowSpacing={2}>
            <Grid
              item
              md={6}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "250px",
                  width: "250px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#222D55",
                    fontSize: "16px",
                    width: "100px",
                    textWrap: "wrap",
                    color: "#007A47",
                    fontWeight: "300",
                    textTransform: "uppercase",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    mt: 1,
                    color: "#222D55",
                    lineHeight: "18px",
                    fontSize: "14px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération de la Région Guadeloupe
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "250px",
                  width: "250px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#222D55",
                    fontSize: "16px",
                    width: "100px",
                    textWrap: "wrap",
                    color: "#007A47",
                    fontWeight: "300",
                    textTransform: "uppercase",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    mt: 1,
                    color: "#222D55",
                    lineHeight: "18px",
                    fontSize: "14px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération de la Région Guadeloupe
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "250px",
                  width: "250px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#222D55",
                    fontSize: "16px",
                    width: "100px",
                    textWrap: "wrap",
                    color: "#007A47",
                    fontWeight: "300",
                    textTransform: "uppercase",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    mt: 1,
                    color: "#222D55",
                    lineHeight: "18px",
                    fontSize: "14px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération de la Région Guadeloupe
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  border: "1px solid #B3D7C8",
                  padding: 10,
                  borderRadius: "50%",
                  height: "250px",
                  width: "250px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#222D55",
                    fontSize: "16px",
                    width: "100px",
                    textWrap: "wrap",
                    color: "#007A47",
                    fontWeight: "300",
                    textTransform: "uppercase",
                  }}
                >
                  04 juin 2021
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    display: "flex",
                    mt: 1,
                    color: "#222D55",
                    lineHeight: "18px",
                    fontSize: "14px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Délibération de la Région Guadeloupe
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
