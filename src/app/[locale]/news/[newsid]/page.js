"use client";
import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, Divider, styled } from "@mui/material";
import { inter } from "../../../../fonts/fonts";
import Image from "next/image";
import ClientMeeting from "../../../../../public/ClientMeeting.svg";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getNewsById } from "../../../redux/action/newsActions/newsAction";

const Img = styled(Image)(({ theme }) => ({
  borderRadius: "10px",
  width: "100% !important",
  height: "auto !important",
}));
export default function Page() {
  const params = useParams();
  const { newsid } = params;
  const dispatch = useDispatch();
  const { getNews } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsById(newsid));
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Container disableGutters maxWidth={"xl"}>
        <Grid container>
          <Grid item xs={12} md={3} sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", top: "50%" }}>
              <Box
                sx={{
                  backgroundColor: "#222D55",
                  padding: 3,
                  borderRadius: "50%",
                  height: "46px",
                  width: "46px",
                  display: { md: "flex", xs: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowUpwardIcon sx={{ color: "#fff" }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} mt={40}>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <Typography
                  sx={{
                    mt: 5,
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                    fontSize: { md: "65px", xs: "20px", lineHeight: "50px" },
                    color: "#222D55",
                    lineHeight: "90px",
                    textAlign: "start",
                  }}
                >
                  {getNews?.title}
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{ __html: getNews?.description }}
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 400,
                    color: "#222D55",
                    mt: 3,
                    fontSize: {
                      md: "20px",
                      xs: "10px",
                      lineHeight: "32px",
                      textAlign: "start",
                    },
                  }}
                >
                  {/* {getNews?.description} */}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 600,
                    color: "#222D55",
                    mt: 3,
                    fontSize: {
                      md: "20px",
                      xs: "10px",
                      lineHeight: "32px",
                      textAlign: "start",
                    },
                  }}
                >
                  Source : {getNews?.source}
                </Typography>
              </Box>
            </Box>
            <Box mt={5}>
              <Img src={getNews?.attachment[0]} height={900} width={900} alt="img" />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
