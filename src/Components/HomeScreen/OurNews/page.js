"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import Annousment from "../../../Icons/Anounsment.svg";
import Image1 from "../../../Icons/Image1.png";
import Image2 from "../../../Icons/Image2.png";
import Image3 from "../../../Icons/Image3.png";
import { motion, useAnimation } from "framer-motion";
import { inter } from "../../../fonts/fonts";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../../app/redux/action/eventActions/eventAction";
import { getAllNews } from "../../../app/redux/action/newsActions/newsAction";
import dayjs from "dayjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const Img = styled(Image)(({ theme }) => ({
  width: "100% !important",
  height: "500px !important",
  resize: "stratch",
}));
const Imgs = styled(Image)(({ theme }) => ({
  width: "310px !important",
  height: "235px !important",
  resize: "stratch",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: "auto !important",
    resize: "stratch",
  },
}));
export const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};
export default function OurNews() {
  const router = useRouter();
  const locals = useLocale();
  const dispatch = useDispatch();
  const { allEvents, eventLoading } = useSelector((state) => state.events);
  const { allNews } = useSelector((state) => state.news);
  const t = useTranslations("OurNews");
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

  const [bgColor, setBgColor] = useState("#222D55");
  const [textColor, setTextColor] = useState("#7DB1FF");
  const [isVisible2, setIsVisible2] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const targetScrollPosition = 2145;
      if (scrollY >= targetScrollPosition) {
        setBgColor("#fff");
        setTextColor("#222D55");
        setShow(true);
      } else {
        setBgColor("#222D55");
        setTextColor("#7DB1FF");
        setShow(false);
      }
      const stopAnimation = 2140;
      if (scrollY >= stopAnimation) {
        setIsVisible2(true);
      } else {
        setIsVisible2(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(getAllEvents())
      .unwrap()
      .then((res) => {
        // console.log(res);
      });
    dispatch(getAllNews())
      .unwrap()
      .then((res) => {
        // console.log(res);
      });
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
  const data = [
    {
      img: Image1,
      title: t("event2"),
      heading: t("heading2"),
      description: t("description2"),
      time: t("date2"),
    },
    {
      img: Image2,
      title: t("event3"),
      heading: t("heading3"),
      description: t("description3"),
      time: t("date3"),
    },
    {
      img: Image3,
      title: t("event4"),
      heading: t("heading4"),
      description: t("description4"),
      time: t("date4"),
    },
  ];
  const lgDown = useMediaQuery(1300);
  const smDown = useMediaQuery(600);
  return (
    <Box
      sx={{
        backgroundColor: bgColor, // Set background color dynamically
        position: "relative",
        transition: "background-color 0.3s ease",
        overflow: "hidden",
        mt: 10,
        pb: 10,
      }}
    >
      <Container disableGutters maxWidth={"xl"} ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
          {!isVisible2 && smDown ? (
            <>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "50px",
                  height: "50px",
                  bgcolor: "#ffffff",
                  borderBottomLeftRadius: "1rem",
                  zIndex: 5,
                  "::before": {
                    content: "''",
                    position: "absolute",
                    width: "20px",
                    height: "20px",
                    top: "10px",
                    left: "-10px",
                    transform: "translateX(-100%)",
                    boxShadow: `5px -5px 0 5px ${bgColor}`,
                    borderTopRightRadius: "0.75rem",
                  },
                  "::after": {
                    content: "''",
                    position: "absolute",
                    width: "20px",
                    height: "20px",
                    bottom: "-10px",
                    right: "10px",
                    transform: "translateY(100%)",
                    boxShadow: `5px -5px 0 5px ${bgColor}`,
                    borderTopRightRadius: "0.75rem",
                  },
                }}
              ></Box>
              <Box
                sx={{
                  content: "''",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "25px",
                  height: "100px",
                  bgcolor: "#ffffff",
                  transform: "rotateZ(-45deg)",
                  transformOrigin: "-25px 50px",
                }}
              ></Box>
            </>
          ) : (
            ""
          )}
          <Box sx={{ padding: !lgDown ? "0 30px" : "0 15px" }}>
            <Box
              sx={{
                display: { md: "flex", xs: "block" },
                flexDirection: { xs: "column-reverse", md: "row" },
                justifyContent: "space-between",
                pt: { md: 15, xs: 10 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  // fontWeight: 500,
                  fontSize: { md: "75px", xs: "40px", lineHeight: "50px" },
                  color: textColor,
                }}
              >
                {t("title")}
              </Typography>
              <Button
                onClick={() => router.push(`/${locals}/news`)}
                variant="outlined"
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      backgroundColor: "#7DB1FF",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                      width: "50px",
                      height: "50px",
                      color: "#FFFFFF",
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
                  mt: { md: 0, xs: 2 },
                  color: show ? "#FFFFFF" : "#222D55",
                  backgroundColor: show ? "#222D55" : "#FFFFFF",
                  border: "1px solid #FFFFFF",
                  borderRadius: "61px",
                  padding: "8px 30px",
                  display: { md: "flex", xs: "none" },
                  fontSize: "12px",
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 600,
                  ":hover": {
                    color: "textColor",
                    border: "1px solid #FFFFFF",
                    backgroundColor: show ? "#222D55" : "#FFFFFF",
                  },
                }}
              >
                {t("button")}
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>

      <Divider
        variant="middle"
        sx={{
          bgcolor: "#FFFFFF",
          mt: { md: 5, xs: 5 },
          mb: 3,
          opacity: show ? "100%" : "20%",
          borderBottomWidth: "1px",
        }}
      />
      <Container disableGutters maxWidth={"xl"}>
        <Grid
          sx={{ padding: !lgDown ? "0 30px" : "0 15px" }}
          container
          columnSpacing={10}
          px={!lgDown ? "50px" : "0px"}
          pt={5}
        >
          {allEvents?.events?.length > 0 ? (
            <>
              {allEvents?.events?.slice(0, 1).map((ele, idx) => {
                const data = ele?.description
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
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    mt={2}
                    key={idx}
                    // sx={{ cursor: "pointer" }}
                    // onClick={() => router.push(`/${locals}/event/${ele?._id}`)}
                  >
                    <Img
                      src={ele?.pictureLink}
                      width={900}
                      height={900}
                      alt="img"
                      style={{ borderRadius: "15px" }}
                    />
                    <Box ref={ref}>
                      {/* <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}> */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mt: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "#007A47",
                            width: "max-content",
                            padding: "8px 15px 8px 15px",
                            fontSize: "10px",
                            mt: 3,
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            marginTop: "auto",
                            fontWeight: 400,
                            fontFamily: inter.style.fontFamily,
                          }}
                        >
                          Événement
                        </Typography>
                        <Box
                          sx={{
                            border: show
                              ? "1px solid #007A47"
                              : "1px solid #FFFFFF",
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            display: { md: "none", xs: "flex" },
                            justifyContent: "center",
                            alignItems: "center", // This centers the icon vertically
                          }}
                        >
                          <a
                            href={ele?.document}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              textDecoration: "none",
                              display: "flex",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              if (navigator.share) {
                                navigator.share({
                                  url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/event/${ele?._id}`,
                                  text: `${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/event/${ele?._id}`,
                                  title: ele?.pictureLink,
                                });
                              } else {
                                navigator.clipboard
                                  .writeText(
                                    `${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/event/${ele?._id}`
                                  )
                                  .then(() => {
                                    toast.success("Link copied to clipboard");
                                  });
                              }
                            }}
                          >
                            <ShareIcon
                              sx={{
                                height: "20px",
                                width: "20px",
                                color: show ? "#007A47" : "#FFFFFF",
                                cursor: "pointer",
                              }}
                            />
                          </a>
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          mt: 1,
                          width: { md: "450px", xs: "100%" },
                          lineHeight: "36px",
                          fontWeight: 600,
                          color: textColor,
                          fontFamily: inter.style.fontFamily,
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          router.push(`/${locals}/event/${ele?._id}`)
                        }
                      >
                        {ele?.title}
                      </Typography>
                      <Typography
                        dangerouslySetInnerHTML={{ __html: data }}
                        sx={{
                          fontSize: "14px",
                          mt: 1,
                          width: { md: "450px", xs: "100%" },
                          lineHeight: "22px",
                          color: textColor,
                          fontFamily: inter.style.fontFamily,
                        }}
                      ></Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 500,
                            mt: 2,
                            fontSize: "14px",
                            color: textColor,
                            fontFamily: inter.style.fontFamily,
                          }}
                        >
                          {dayjs(ele?.startDate).format("DD MMM YYYY")}
                        </Typography>
                        <Box
                          sx={{
                            border: show
                              ? "1px solid #007A47"
                              : "1px solid #FFFFFF",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: { md: "flex", xs: "none" },
                            justifyContent: "center",
                            alignItems: "center", // This centers the icon vertically
                          }}
                        >
                          <Head>
                            <meta
                              property="og:url"
                              content={`${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/event/${ele?._id}`}
                            />
                            <meta property="og:image:width" content="300" />
                            <meta property="og:image:height" content="300" />
                            <meta
                              property="og:image"
                              content={ele?.pictureLink}
                            />
                          </Head>
                          <a
                            href={ele?.document}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              textDecoration: "none",
                              display: "flex",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              if (navigator.share) {
                                navigator.share({
                                  url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/event/${ele?._id}`,
                                  title: ele?.pictureLink,
                                  data: {
                                    "facebook:image_url": ele?.pictureLink,
                                    "og:image": ele?.pictureLink,
                                  },
                                });
                              } else {
                                navigator.clipboard
                                  .writeText(
                                    `${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/event/${ele?._id}`
                                  )
                                  .then(() => {
                                    toast.success("Link copied to clipboard");
                                  });
                              }
                            }}
                          >
                            <ShareIcon
                              sx={{
                                height: "20px",
                                width: "20px",
                                color: show ? "#007A47" : "#FFFFFF",
                                cursor: "pointer",
                              }}
                            />
                          </a>
                        </Box>
                      </Box>
                      {/* </motion.div> */}
                    </Box>
                    <Button
                      onClick={() =>
                        router.push(`/${locals}/event/${ele?._id}`)
                      }
                      variant="outlined"
                      endIcon={
                        <ArrowForwardIcon
                          sx={{
                            backgroundColor: "#7DB1FF",
                            borderRadius: "50%",
                            background:
                              "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                            width: "50px",
                            height: "50px",
                            color: "#FFFFFF",
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
                        mt: { md: 3, xs: 2 },
                        color: show ? "#FFFFFF" : "#222D55",
                        backgroundColor: show ? "#222D55" : "#FFFFFF",
                        border: "1px solid #FFFFFF",
                        borderRadius: "61px",
                        padding: "8px 30px",
                        fontSize: "12px",
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 600,
                        ":hover": {
                          color: "textColor",
                          border: "1px solid #FFFFFF",
                          backgroundColor: show ? "#222D55" : "#FFFFFF",
                        },
                      }}
                    >
                      {t("buttonBlog")}
                    </Button>
                  </Grid>
                );
              })}
            </>
          ) : (
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              mt={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress sx={{ color: "#007A47" }} />
            </Grid>
          )}
          <Grid item xs={12} md={12} lg={6} mt={{ lg: "unset", xs: 10 }}>
            {allNews?.length > 0 ? (
              <>
                {allNews?.slice(0, 2).map((ele, idx) => {
                  const data = ele?.description
                    .split("\n")
                    .slice(0, 4)
                    .map((line, index) => {
                      if (index === 0) {
                        return line.substring(0, 100) + "...";
                      } else {
                        return line;
                      }
                    })
                    .join("\n");
                  return (
                    <Box
                      key={idx}
                      // sx={{ cursor: "pointer" }}
                      // onClick={() => router.push(`/${locals}/news/${ele?._id}`)}
                    >
                      <Box
                        sx={{
                          display: { md: "flex", xs: "block" },
                          flexDirection: { md: "row", xs: "column" },
                          gap: 3,
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Imgs
                            src={ele?.attachment[0]}
                            alt="img2"
                            width={100}
                            height={100}
                            sx={{ borderRadius: "10px", cursor: "pointer" }}
                            onClick={() =>
                              router.push(`/${locals}/news/${ele?._id}`)
                            }
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: "16px",
                          }}
                        >
                          <CardContent sx={{ flex: "1 0 auto", padding: 0 }}>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                py: 2,
                              }}
                            >
                              <Typography
                                sx={{
                                  backgroundColor: "#007A47",
                                  width: "max-content",
                                  padding: 1,
                                  fontWeight: 400,
                                  fontSize: "10px",
                                  padding: "8px 15px 8px 15px",
                                  cursor: "pointer",
                                  color: "#ffffff",
                                  textTransform: "uppercase",
                                  fontFamily: inter.style.fontFamily,
                                }}
                              >
                                {ele?.source[0]}
                              </Typography>
                              <Box
                                sx={{
                                  border: show
                                    ? "1px solid #007A47"
                                    : "1px solid #FFFFFF",
                                  width: "28px",
                                  height: "28px",
                                  borderRadius: "50%",
                                  display: { md: "none", xs: "flex" },
                                  justifyContent: "center",
                                  alignItems: "center", // This centers the icon vertically
                                }}
                              >
                                <Head>
                                    <meta
                                      property="og:url"
                                      content={`${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/news/${ele?._id}`}
                                    />
                                    <meta
                                      property="og:image:width"
                                      content="300"
                                    />
                                    <meta
                                      property="og:image:height"
                                      content="300"
                                    />
                                    <meta
                                      property="og:image"
                                      content={ele?.attachment}
                                    />
                                  </Head>
                                <a
                                  href={ele?.attachment}
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{
                                    textDecoration: "none",
                                  }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    if (navigator.share) {
                                      navigator.share({
                                        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/news/${ele?._id}`,
                                        title: ele?.attachment,
                                        data: {
                                          "facebook:image_url": `${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/news/${ele?._id}`,
                                          "og:image": ele?.attachment,
                                        },
                                      });
                                    } else {
                                      navigator.clipboard
                                        .writeText(
                                          `${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/news/${ele?._id}`
                                        )
                                        .then(() => {
                                          toast.success(
                                            "Link copied to clipboard"
                                          );
                                        });
                                    }
                                  }}
                                >
                                  <ShareIcon
                                    sx={{
                                      height: "13px",
                                      width: "13px",
                                      color: show ? "#007A47" : "#FFFFFF",
                                      cursor: "pointer",
                                    }}
                                  />
                                </a>
                              </Box>
                            </Box>
                            <Typography
                              sx={{
                                fontWeight: 600,
                                fontFamily: inter.style.fontFamily,
                                fontSize: "18px",
                                lineHeight: "25px",
                                maxWidth: { lg: "360px", md: "100%" },
                                color: textColor,
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                router.push(`/${locals}/news/${ele?._id}`)
                              }
                            >
                              {ele?.title}
                            </Typography>
                            <Typography
                              dangerouslySetInnerHTML={{ __html: data }}
                              mt={1}
                              sx={{
                                color: textColor,
                                fontSize: "15px",
                                lineHeight: "20px",
                                maxWidth: { md: "280px", xs: "100%" },
                                fontFamily: inter.style.fontFamily,
                              }}
                            ></Typography>
                            <Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  mt: 1,
                                }}
                              >
                                <Box>
                                  <Typography
                                    sx={{
                                      fontSize: 14,
                                      fontWeight: 600,
                                      color: textColor,
                                      fontFamily: inter.style.fontFamily,
                                    }}
                                  >
                                    {dayjs(ele?.publishedDate).format(
                                      "DD MMM, YYYY"
                                    )}
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    border: show
                                      ? "1px solid #007A47"
                                      : "1px solid #FFFFFF",
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    display: { md: "flex", xs: "none" },
                                    justifyContent: "center",
                                    alignItems: "center", // This centers the icon vertically
                                  }}
                                >
                                  <Head>
                                    <meta
                                      property="og:url"
                                      content={`${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/news/${ele?._id}`}
                                    />
                                    <meta
                                      property="og:image:width"
                                      content="300"
                                    />
                                    <meta
                                      property="og:image:height"
                                      content="300"
                                    />
                                    <meta
                                      property="og:image"
                                      content={ele?.attachment}
                                    />
                                  </Head>
                                  <a
                                    href={ele?.attachment}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      textDecoration: "none",
                                      display: "flex",
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (navigator.share) {
                                        navigator.share({
                                          url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/news/${ele?._id}`,
                                          title: ele?.attachment,
                                          data: {
                                            "facebook:image_url": `${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/news/${ele?._id}`,
                                            "og:image": ele?.attachment,
                                          },
                                        });
                                      } else {
                                        navigator.clipboard
                                          .writeText(
                                            `${process.env.NEXT_PUBLIC_BASE_URL}/${locals}/news/${ele?._id}`
                                          )
                                          .then(() => {
                                            toast.success(
                                              "Link copied to clipboard"
                                            );
                                          });
                                      }
                                    }}
                                  >
                                    <ShareIcon
                                      sx={{
                                        height: "15px",
                                        width: "15px",
                                        color: show ? "#007A47" : "#FFFFFF",
                                        cursor: "pointer",
                                      }}
                                    />
                                  </a>
                                </Box>
                              </Box>
                            </Box>
                          </CardContent>
                        </Box>
                      </Box>
                      {idx !== data.length - 1 ? (
                        <Divider
                          variant="middle"
                          sx={{
                            bgcolor: "#FFFFFF",
                            mt: 1,
                            mb: 1,
                            opacity: show ? "100%" : "20%",
                            borderBottomWidth: "1px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </Box>
                  );
                })}
              </>
            ) : (
              <Box
                mt={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress sx={{ color: "#007A47" }} />
              </Box>
            )}
          </Grid>
        </Grid>
        {/* {"button"} */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            endIcon={
              <ArrowForwardIcon
                sx={{
                  backgroundColor: "#7DB1FF",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                  width: "50px",
                  height: "50px",
                  color: "#FFFFFF",
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
              mt: { md: 0, xs: 2 },
              color: show ? "#FFFFFF" : "#222D55",
              backgroundColor: show ? "#222D55" : "#FFFFFF",
              border: "1px solid #FFFFFF",
              borderRadius: "61px",
              padding: "8px 30px",
              display: { md: "none", xs: "flex" },
              fontSize: "12px",
              fontFamily: inter.style.fontFamily,
              fontWeight: 600,
              ":hover": {
                color: "textColor",
                border: "1px solid #FFFFFF",
                backgroundColor: show ? "#222D55" : "#FFFFFF",
              },
            }}
          >
            {t("button")}
          </Button>
        </Box>
      </Container>
      <ToastContainer />
    </Box>
  );
}
