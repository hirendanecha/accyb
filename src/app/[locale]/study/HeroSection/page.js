"use client";
import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { inter } from "../../../../fonts/fonts";
import ShareIcon from "@mui/icons-material/Share";
import dayjs from "dayjs";

export default function App(studyDetails) {
  console.log(studyDetails, "studyDetails");

  const data = studyDetails?.studyDetails?.description
    .split("\n")
    .slice(0, 4)
    .map((line, index) => {
      if (index === 0) {
        return line.substring(0, 150) + "...";
      } else {
        return line;
      }
    })
    .join("\n");
  return (
    <>
      <Container
        disableGutters
        maxWidth={"xl"}
        sx={{ mt: { md: "125px", sm: "50px", xs: "10px" } }}
      >
        <Box
          sx={{
            backgroundImage: `url(${studyDetails?.studyDetails?.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: { lg: "cover", md: "cover", xs: "cover" },
            backgroundPosition: "fixed",
            height: { md: "650px", xs: "550px" },
            width: "100%",
            borderRadius:'20px'
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={10}
              padding={{ md: "150px 50px", xs: "150px 10px" }}
            >
              <Button
                sx={{
                  fontFamily: inter.style.fontFamily,
                  backgroundImage:
                    "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                  textTransform: "uppercase",
                  padding: "15px 40px 15px 40px",
                  fontSize: { md: "14px", xs: "12px" },
                  color: "#FFFFFF",
                  display: "flex",
                  textAlign: "start",
                  borderRadius: "50px",
                  "&:hover": {
                    backgroundImage:
                      "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                  },
                }}
              >
                tag
              </Button>
              <Box
                mt={1}
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: {
                    lg: "70px",
                    md: "60px",
                    sm: "40px",
                    xs: "30px",
                  },
                  flexDirection: "column",
                  textAlign: "start",
                  color: "#FFFFFF",
                  fontWeight: 400,
                  lineHeight: {
                    md: "75px",
                    sm: "50px",
                    xs: "40px",
                  },
                  maxWidth: "700px !important",
                }}
              >
                {studyDetails?.studyDetails?.title}
              </Box>
              <Typography
                sx={{
                  display: "flex",
                  textAlign: "start",
                  fontSize: {
                    lg: "14px",
                    md: "13px",
                    sm: "13px",
                    xs: "12px",
                  },
                  color: "#FFFFFF",
                  fontWeight: 400,
                  lineHeight: { md: "25px", sm: "22px", xs: "20px" },
                  maxWidth: "550px !important",
                  mt: { md: 3, xs: 1 },
                  fontFamily: inter.style.fontFamily,
                }}
                dangerouslySetInnerHTML={{
                  __html: data,
                }}
              >
                {/* {studyDetails?.studyDetails?.description} */}
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  sx={{
                    display: "flex",
                    textAlign: "start",
                    fontSize: "12px",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    lineHeight: { md: "25px", xs: "25px" },
                    maxWidth: "550px !important",
                    mt: 2,
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {dayjs(studyDetails?.studyDetails?.createdAt).format("DD.MM.YYYY")}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    textAlign: "start",
                    fontSize: "12px",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    lineHeight: { md: "25px", xs: "25px" },
                    maxWidth: "550px !important",
                    textTransform: "uppercase",
                    mt: 2,
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {studyDetails?.studyDetails?.publishedBy}
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  border: "1px solid #FFFFFF",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center", // This centers the icon vertically
                }}
              >
                <ShareIcon
                  sx={{
                    height: "19px",
                    width: "19px",
                    color: "#FFFFFF",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
