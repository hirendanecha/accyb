"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ShareIcon from "@mui/icons-material/Share";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { inter } from "../../../../fonts/fonts";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getEventsById } from "../../../redux/action/eventActions/eventAction";
import dayjs from "dayjs";
import { useLocale } from "next-intl";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ loading, getEvent }) {
  const router = useRouter();
  const locales = useLocale();
  console.log(getEvent?.registerLink, "registerLink");
  const getFirstElementText = (htmlString) => {
    const tagMatch = htmlString?.match(/<(\w+)>/);
    if (!tagMatch) return "";

    const tagName = tagMatch[1];
    const regex = new RegExp(`<${tagName}>(.*?)<\/${tagName}>`);
    const match = htmlString?.match(regex);

    return match ? match[1] : "";
  };

  const firstElementText = getFirstElementText(getEvent?.description);

  const data = getEvent?.title
    .split("\n")
    .slice(0, 4)
    .map((line, index) => {
      if (index === 0) {
        return line.substring(0, 50) + "...";
      } else {
        return line;
      }
    })
    .join("\n");

  const createICSFile = () => {
    const icsContent =
      `BEGIN:VCALENDAR\n` +
      `CALSCALE:GREGORIAN\n` +
      `METHOD:PUBLISH\n` +
      `PRODID:-//Test Cal//EN\n` +
      `VERSION:2.0\n` +
      `BEGIN:VEVENT\n` +
      `UID:test-1\n` +
      `DTSTART:${dayjs(getEvent?.startDate).format("YYYYMMDDTHHmmss")}\n` +
      `DTEND:${dayjs(getEvent?.endDate).format("YYYYMMDDTHHmmss")}\n` +
      `SUMMARY:${getEvent?.title}\n` +
      `DESCRIPTION:${data}\n` +
      `END:VEVENT\n` +
      `END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "event.ics";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    //add into calender

    // const blob = new Blob([icsContent], { type: "text/calendar" });
    // const file = new File([blob], "event.ics", { type: "text/calendar" });
    // window.open(`data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`);
  };

  return (
    <>
      <Container
        disableGutters
        maxWidth={"xl"}
        sx={{
          mt: { md: "125px", sm: "50px", xs: "10px" },
          padding: { md: "0 40px", xs: "0 10px" },
        }}
      >
        {loading ? (
          <Grid
            item
            md={12}
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              mt: 30,
            }}
          >
            <CircularProgress sx={{ color: "#007A47" }} />
          </Grid>
        ) : (
          <>
            <Box
              sx={{
                // background: `linear-gradient(rgba(30, 93, 170, 0.3), rgba(30, 93, 170, 0.3)), url(${getEvent?.pictureLink}) no-repeat center center / cover`,
                background: `linear-gradient(rgba(34, 45, 85, 0.4), rgba(34, 45, 85, 0.4)), url(${getEvent?.pictureLink}) no-repeat center center / cover`,

                backgroundSize: {
                  lg: "cover",
                  md: "cover",
                  sm: "cover",
                  xs: "cover",
                },
                backgroundPosition: "fixed",
                height: { md: "700px", xs: "650px" },
                width: "100%",
                mt: { md: "0px", xs: "80px" },
                borderRadius: "20px",
              }}
            >
              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={8}
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
                    événement
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
                    }}
                  >
                    {data}
                    {/* <span
                  style={{
                    background: "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  cybercriminalité
                </span>{" "} */}
                  </Box>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: firstElementText }}
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
                  ></Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      textAlign: "start",
                      fontSize: "12px",
                      color: "#FFFFFF",
                      fontWeight: 400,
                      lineHeight: { md: "25px", xs: "25px" },
                      maxWidth: "550px !important",
                      mt: 2,
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {dayjs(getEvent?.startDate).format("DD MMMM YYYY")}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <Box
                      sx={{
                        border: "1px solid #FFFFFF",
                        width: "42px",
                        display: "flex",
                        height: "42px",
                        borderRadius: "50%",
                        justifyContent: "center",
                        alignItems: "center", // This centers the icon vertically
                        cursor: "pointer",
                      }}
                    >
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          if (navigator.share) {
                            navigator.share({
                              url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locales}/event/${getEvent?._id}`,
                              title: getEvent?.pictureLink,
                            });
                          } else {
                            navigator.clipboard
                              .writeText(
                                `${process.env.NEXT_PUBLIC_BASE_URL}/${locales}/event/${getEvent?._id}`
                              )
                              .then(() => {
                                toast.success("Link copied to clipboard");
                              });
                          }
                        }}
                        style={{
                          display: "flex",
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
                      </a>
                    </Box>
                    <Button
                      onClick={createICSFile}
                      variant="outlined"
                      endIcon={
                        <ArrowForwardIcon
                          sx={{
                            backgroundColor: "#7DB1FF",
                            background:
                              "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                            borderRadius: "50%",
                            width: { md: "45px", xs: "40px" },
                            height: { md: "45px", xs: "40px" },
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
                              animation:
                                "move-left 0.3s ease-in-out 0s 1 normal forwards",
                            },
                          }}
                        />
                      }
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#FFFFFF",
                        border: "1px solid rgba(142, 155, 191, 0.3)",
                        borderRadius: "61px",
                        padding: "8px 30px",
                        fontSize: "12px",
                        fontWeight: 600,
                        background: "rgba(255, 255, 255, 0.1)",
                        ":hover": {
                          borderColor: "#8E9BBF",
                          border: "1px solid rgba(255, 255, 255, 0.5)",
                        },
                        fontFamily: inter.style.fontFamily,
                        "& .MuiButton-endIcon": {
                          marginLeft: 2.2,
                        },
                      }}
                    >
                      Ajouter au calendrier
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: { md: "none", xs: "flex" },
                      justifyContent: "center",
                      mt: 3,
                    }}
                  >
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        const link = document.createElement("a");
                        link.href = `${getEvent?.registerLink}`;
                        link.setAttribute("target", "_blank");
                        document.body.appendChild(link);
                        link.click();
                        link.remove();
                      }}
                      variant="outlined"
                      endIcon={
                        <ArrowForwardIcon
                          sx={{
                            backgroundColor: "#7DB1FF",
                            background:
                              "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                            borderRadius: "50%",
                            width: { md: "45px", xs: "40px" },
                            height: { md: "45px", xs: "40px" },
                            padding: 1.7,
                            color: "#FFFFFF",
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
                              animation:
                                "move-left 0.3s ease-in-out 0s 1 normal forwards",
                            },
                          }}
                        />
                      }
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#7DB1FF",
                        border: "1px solid rgba(142, 155, 191, 0.3)",
                        borderRadius: "61px",
                        padding: "8px 30px",
                        fontSize: "12px",
                        fontWeight: 600,
                        background: "#FFFFFF",
                        ":hover": {
                          borderColor: "#8E9BBF",
                          border: "1px solid rgba(255, 255, 255, 0.5)",
                        },
                        fontFamily: inter.style.fontFamily,
                        "& .MuiButton-endIcon": {
                          marginLeft: 2.2,
                        },
                      }}
                    >
                      s’inscrire à l’événement
                    </Button>
                  </Box>
                </Grid>
                {getEvent?.registerLink && (<Grid
                  item
                  xs={12}
                  md={4}
                  padding={{ md: "150px 0px", xs: "150px 5px" }}
                >
                  <Box
                    sx={{
                      display: { md: "flex", xs: "none" },
                      justifyContent: "start",
                      alignItems: "end",
                      height: "100%",
                    }}
                  >
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        const link = document.createElement("a");
                        link.href = `${getEvent?.registerLink}`;
                        link.setAttribute("target", "_blank");
                        document.body.appendChild(link);
                        link.click();
                        link.remove();
                      }}
                      variant="outlined"
                      endIcon={
                        <ArrowForwardIcon
                          sx={{
                            backgroundColor: "#7DB1FF",
                            background:
                              "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                            borderRadius: "50%",
                            width: { md: "45px", xs: "40px" },
                            height: { md: "45px", xs: "40px" },
                            padding: 1.7,
                            color: "#FFFFFF",
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
                              animation:
                                "move-left 0.3s ease-in-out 0s 1 normal forwards",
                            },
                          }}
                        />
                      }
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#7DB1FF",
                        border: "1px solid rgba(142, 155, 191, 0.3)",
                        borderRadius: "61px",
                        padding: "8px 30px",
                        fontSize: "12px",
                        fontWeight: 600,
                        background: "#FFFFFF",
                        ":hover": {
                          borderColor: "#8E9BBF",
                          border: "1px solid rgba(255, 255, 255, 0.5)",
                        },
                        fontFamily: inter.style.fontFamily,
                        "& .MuiButton-endIcon": {
                          marginLeft: 2.2,
                        },
                      }}
                    >
                      s’inscrire à l’événement
                    </Button>
                  </Box>
                </Grid>)}
              </Grid>
            </Box>
          </>
        )}
      </Container>
      <ToastContainer />
    </>
  );
}
