"use client";
import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  styled,
  CircularProgress,
  Button,
} from "@mui/material";
import { inter } from "../../../../fonts/fonts";
import Image from "next/image";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllNews,
  getNewsById,
} from "../../../redux/action/newsActions/newsAction";
import ShareIcon from "@mui/icons-material/Share";
import dayjs from "dayjs";
import Image1 from "../../../../Icons/Image1.png";
import Image2 from "../../../../Icons/Image2.png";
import Image3 from "../../../../Icons/Image3.png";
import { useLocale, useTranslations } from "next-intl";
import HeroSection from "../HeroSection/page";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Img = styled(Image)(({ theme }) => ({
  borderRadius: "10px",
  width: "100% !important",
  height: "auto !important",
}));
const Imgs = styled(Image)(({ theme }) => ({
  width: "292px !important",
  height: "200px !important",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: "auto !important",
  },
}));

const articles = [
  {
    img: Image1,
    title: "Actualité",
    heading: "Calendrier de l’Avent Cyber 2023",
    description:
      "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
    time: "13.01.2024",
  },
  {
    img: Image2,
    title: "Actualité",
    heading: "Calendrier de l’Avent Cyber 2023",
    description:
      "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
    time: "13.01.2024",
  },
  {
    img: Image3,
    title: "Actualité",
    heading: "Calendrier de l’Avent Cyber 2023",
    description:
      "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
    time: "13.01.2024",
  },
  {
    img: Image1,
    title: "Actualité",
    heading: "Calendrier de l’Avent Cyber 2023",
    description:
      "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
    time: "13.01.2024",
  },
  {
    img: Image2,
    title: "Actualité",
    heading: "Calendrier de l’Avent Cyber 2023",
    description:
      "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
    time: "13.01.2024",
  },
  {
    img: Image3,
    title: "Actualité",
    heading: "Calendrier de l’Avent Cyber 2023",
    description:
      "Lorem ipsum dolor sit amet, conse, sed do eiusmod tempor incididunt ut labore et dolore ...",
    time: "13.01.2024",
  },
];
export default function Page() {
  const t = useTranslations('NewsDetailPage');
  const params = useParams();
  const { newsid } = params;
  const router = useRouter();
  const locales = useLocale();
  const dispatch = useDispatch();
  const { allNews } = useSelector((state) => state.news);
  const { getNews } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsById(newsid));
  }, []);

  useEffect(() => {
    dispatch(getAllNews());
    // dispatch(getAllEvents());
  }, []);
  console.log(getNews, "getNews");

  const getFirstElementText = (htmlString) => {
    const tagMatch = htmlString?.match(/<(\w+)>/);
    if (!tagMatch) return "";

    const tagName = tagMatch[1];
    const regex = new RegExp(`<${tagName}>(.*?)<\/${tagName}>`);
    const match = htmlString?.match(regex);

    return match ? match[1] : "";
  };

  const firstElementText = getFirstElementText(getNews?.description);

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
        <Box
          sx={{
            // background: `linear-gradient(rgba(30, 93, 170, 0.3), rgba(30, 93, 170, 0.3)), url(${getNews?.attachment[0]}) no-repeat center center / cover`,
            background: `linear-gradient(rgba(34, 45, 85, 0.4), rgba(34, 45, 85, 0.4)), url(${getNews?.attachment[0]}) no-repeat center center / cover`,
            backgroundRepeat: "no-repeat",
            height: { md: "650px", xs: "560px" },
            width: "100%",
            mt: { md: "0px", xs: "100px" },
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
                {`${t('title')}`}
              </Button>
              <Box
                mt={1}
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: {
                    lg: "60px",
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
                {getNews?.title
                  .split("\n")
                  .slice(0, 4)
                  .map((line, index) => {
                    if (index === 0) {
                      return line.substring(0, 52) + "...";
                    } else {
                      return line;
                    }
                  })
                  .join("\n")}
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
              >
                {/* {getNews?.description} */}
              </Typography>
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
                {dayjs(getNews?.publishedDate).format("DD MMM YYYY")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: 3,
                  mt: 3,
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
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (navigator.share) {
                      navigator.share({
                        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locales}/news/${getNews?._id}`,
                        title: getNews?.document,
                      });
                    } else {
                      navigator.clipboard
                        .writeText(
                          `${process.env.NEXT_PUBLIC_BASE_URL}/${locales}/news/${getNews?._id}`
                        )
                        .then(() => {
                          toast.success("Link copied to clipboard");
                        });
                    }
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
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              padding={{ md: "150px 0px", xs: "150px 5px" }}
            ></Grid>
          </Grid>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Container disableGutters maxWidth={"xl"}>
          <Grid container padding={"0 20px"}>
            <Grid item xs={12} md={3} sx={{ position: "relative" }}>
              <Box sx={{ position: "fixed", bottom: 55, left: 100 }}>
                <Box
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  sx={{
                    backgroundColor: "#222D55",
                    padding: 3,
                    borderRadius: "50%",
                    height: "46px",
                    width: "46px",
                    display: { md: "flex", xs: "none" },
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <ArrowUpwardIcon sx={{ color: "#fff" }} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <Box>
                  <Typography
                    sx={{
                      mt: 5,
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 400,
                      fontSize: { md: "40px", xs: "18px" },
                      color: "#222D55",
                      lineHeight: { md: "60px", xs: "30px" },
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
                      mt: { md: 3, xs: 1 },
                      fontSize: {
                        md: "20px",
                        xs: "11px",
                        lineHeight: { md: "32px", xs: "20px" },
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
                      mt: { md: 3, xs: 1 },
                      fontSize: {
                        md: "20px",
                        xs: "12px",
                        lineHeight: "32px",
                        textAlign: "start",
                      },
                    }}
                  >
                    {/* Source : {getNews?.source} */}
                  </Typography>
                </Box>
              </Box>
              <Box mt={5}>
                <Img
                  src={getNews?.attachment[0]}
                  height={900}
                  width={900}
                  alt="img"
                />
              </Box>
            </Grid>
            <Container disableGutters maxWidth={"xl"}>
              <Typography
                sx={{
                  color: "#222D55",
                  fontSize: { md: "39px", xs: "24px" },
                  mt: 10,
                }}
              >
                {`${t('title1')}`}
              </Typography>
            </Container>

            <Divider
              variant="middle"
              sx={{
                display: { md: "block", xs: "none" },
                bgcolor: "#222D55",
                mt: 2,
                opacity: "20%",
                borderBottomWidth: "1px",
              }}
            />
            <Container disableGutters maxWidth={"xl"}>
              <Grid
                container
                mt={3}
                justifyContent={"space-between"}
                rowSpacing={3}
              >
                {allNews?.length > 0 ? (
                  <>
                    {allNews?.slice(0,6)?.map((ele, idx) => {
                      const data = getNews?.title
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
                          <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{ cursor: "pointer" }}
                            // onClick={() =>
                            //   router?.push(`/${locales}/news/${ele?._id}`)
                            // }
                          >
                            <Box
                              sx={{
                                display: "flex",
                                gap: 3,
                                flexDirection: {
                                  lg: "row",
                                  md: "column",
                                  xs: "column",
                                },
                              }}
                            >
                              <Box
                                onClick={() =>
                                  router?.push(`/${locales}/news/${ele?._id}`)
                                }
                              >
                                <Imgs
                                  src={ele?.attachment[0]}
                                  width={295}
                                  height={220}
                                  alt="image1"
                                  sx={{ borderRadius: "10px" }}
                                />
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: inter.style.fontFamily,
                                    backgroundImage:
                                      "linear-gradient(90deg, #7DB1FF -7.37%, #97E6FF 68.51%)",
                                    width: "max-content",
                                    padding: 1,
                                    fontSize: "12px",
                                    mb: 1,
                                    padding: "8px 15px 8px 15px",
                                    cursor: "pointer",
                                    color: "#FFFFFF",
                                    textTransform: "uppercase",
                                  }}
                                >
                                  {ele?.source[0]}
                                </Typography>
                                <Typography
                                  sx={{
                                    fontFamily: inter.style.fontFamily,
                                    fontWeight: 600,
                                    fontSize: "18px",
                                    maxWidth: { lg: "300px", md: "100%" },
                                    color: "#222D55",
                                  }}
                                  onClick={() =>
                                    router?.push(`/${locales}/news/${ele?._id}`)
                                  }
                                >
                                  {ele?.title
                                    .split("\n")
                                    .slice(0, 4)
                                    .map((line, index) => {
                                      if (index === 0) {
                                        return line.substring(0, 52) + "...";
                                      } else {
                                        return line;
                                      }
                                    })
                                    .join("\n")}
                                </Typography>
                                <Typography
                                  dangerouslySetInnerHTML={{ __html: data }}
                                  mt={1}
                                  sx={{
                                    fontFamily: inter.style.fontFamily,
                                    color: "#222D55",
                                    fontSize: "14px",
                                    maxWidth: "350px",
                                  }}
                                ></Typography>
                                <Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      mt: { md: 3, xs: 2 },
                                    }}
                                  >
                                    <Box>
                                      <Typography
                                        sx={{
                                          fontFamily: inter.style.fontFamily,
                                          fontSize: 14,
                                          fontWeight: 600,
                                          color: "13.01.2024",
                                        }}
                                      >
                                        {dayjs(ele?.publishedDate).format(
                                          "DD MMM YYYY"
                                        )}
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        border: "1px solid #222D55",
                                        width: "36px",
                                        mr: 3,
                                        height: "36px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center", // This centers the icon vertically
                                      }}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        if (navigator.share) {
                                          navigator.share({
                                            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locales}/news/${getNews?._id}`,
                                            title: getNews?.document,
                                          });
                                        } else {
                                          navigator.clipboard
                                            .writeText(
                                              `${process.env.NEXT_PUBLIC_BASE_URL}/${locales}/news/${getNews?._id}`
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
                                          height: "16px",
                                          width: "16px",
                                          color: "#222D55",
                                          cursor: "pointer",
                                        }}
                                      />
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Grid>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <Grid
                    item
                    md={12}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress sx={{ color: "#007A47" }} />
                  </Grid>
                )}
              </Grid>
            </Container>
            <Grid item xs={12} md={3}></Grid>
          </Grid>
        </Container>
        <ToastContainer />
      </Box>
    </>
  );
}
