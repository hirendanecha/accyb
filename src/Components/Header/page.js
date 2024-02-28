"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {
  Container,
  Divider,
  InputBase,
  Toolbar,
  alpha,
  styled,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Logo from "../../Icons/Frame.svg";
import Logo2 from "../../Icons/Frame2.svg";
import SearchIcon from "@mui/icons-material/Search";
import { inter } from "../../fonts/fonts";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
const Img = styled(Image)(({ theme }) => ({
  width: "64px !important",
  height: "64px !important",
}));

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header() {
  const t = useTranslations("HeaderLink");
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [activeLink, setActiveLink] = useState("/");
  const pages = [
    {
      name: t("title"),
      path: "/fr/discoverTheACCYB",
    },
    {
      name: t("title2"),
      path: "/fr/FindOutAtlantic",
    },
    {
      name: t("title3"),
      path: "/fr/discoverTheObservatory",
    },
  ];
  const link = [
    {
      name: t("title4"),
      path: "/",
    },
    {
      name: t("title5"),
      path: "/fr/seFormer",
    },
    {
      name: t("title6"),
      path: "/fr/sInformer",
    },
  ];
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    color: "#222D55",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    cursor: "pointer",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "1ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const params = useParams();
  const locale = params?.locale;
  const handleClick = (page) => {
    router?.push(page?.path);
    setActiveLink(page?.name);
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#222D55",
          display: { md: "block", xs: "none" },
        }}
      >
        <Container disableGutters maxWidth={"xl"}>
          <Box
            sx={{
              display: "flex",
              padding: "0 0 0 20px",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                padding: "8px 0",
                alignItems: "center",
              }}
            >
              <Box
                component={Link}
                variant="h7"
                href="/fr"
                locale="fr"
                color="inherit"
                sx={{
                  color: locale === "fr" ? "#FFFFFF" : "#646C88",
                  fontFamily: inter.style.fontFamily,
                  textDecoration: "none",
                }}
              >
                FR
              </Box>
              <Divider
                orientation="vertical"
                variant="middle"
                sx={{ bgcolor: "#646C88" }}
              />
              <Box
                href="/en"
                component={Link}
                locale="en"
                variant="h7"
                color="inherit"
                sx={{
                  color: locale === "en" ? "#FFFFFF" : "#646C88",
                  fontFamily: inter.style.fontFamily,
                  textDecoration: "none",
                }}
              >
                EN
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
              <Typography
                onClick={() => router.push(`/${locale}/news`)}
                variant="h7"
                color="inherit"
                component="div"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "13px",
                  fontFamily: inter.style.fontFamily,
                  cursor: "pointer",
                }}
              >
                {t("nav1")}
              </Typography>
              <Typography
                onClick={() => router.push(`/${locale}/devenirCyber`)}
                variant="h7"
                color="inherit"
                component="div"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "13px",
                  fontFamily: inter.style.fontFamily,
                  cursor: "pointer",
                }}
              >
                {t("nav2")}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "auto",
                    backgroundColor: "#007A47",
                    gap: 1,
                    padding: "8px 15px",
                  }}
                >
                  <PersonOutlineIcon />
                  <Typography
                    variant="h7"
                    color="inherit"
                    component="div"
                    sx={{
                      textTransform: "uppercase",
                      height: "100%",
                      fontSize: "13px",
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("nav3")}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "auto",
                    backgroundColor: "#BE0011",
                    gap: 1,
                    padding: "8px 15px",
                  }}
                >
                  <NotificationsNoneIcon />
                  <Typography
                    variant="h7"
                    color="inherit"
                    component="div"
                    sx={{
                      textTransform: "uppercase",
                      height: "100%",
                      fontSize: "13px",
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    {t("nav4")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </AppBar>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FFFFFF",
          padding: { md: "0 0px", xs: "5px 0" },
          boxShadow: "none",
          borderBottom: "1px solid #222D55",
        }}
      >
        <Container disableGutters maxWidth={"xl"}>
          <Toolbar disableGutters sx={{ padding: "0 15px" }}>
            <Img
              onClick={() => router.push("/")}
              src={Logo}
              alt="img"
              sx={{ display: { xs: "none", md: "flex" }, cursor: "pointer" }}
            />
            <Img
              onClick={() => router.push("/")}
              src={Logo}
              alt="img"
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                cursor: "pointer",
              }}
            />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  backgroundColor: "#222D55",
                  color: "white",
                  "&:hover": {
                    // Remove hover effect
                    backgroundColor: "#222D55", // Keep the same background color when hovered
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  top: 10,
                  display: { xs: "block", lg: "none" },
                }}
                PaperProps={{
                  style: {
                    width: "100%",
                    backgroundColor: "#222D55",
                  },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
                  <Image
                    src={Logo2}
                    alt="img"
                    sx={{ display: { xs: "none", md: "flex" } }}
                  />
                </Box>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon sx={{ color: "#222D55" }} />
                  </SearchIconWrapper>
                  <StyledInputBase inputProps={{ "aria-label": "search" }} />
                </Search>
                {pages.map((page, idx) => (
                  <MenuItem
                    key={idx}
                    onClick={() => router?.push(page?.path)}
                    sx={{
                      fontSize: "13px",
                      backgroundColor: "#222D55",
                      textTransform: "uppercase",
                      color: "#fff",
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        fontSize: "20px",
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {`${page?.name?.split(" ")?.[0]} `}
                      <span style={{ color: "#7DB1FF" }}>{` ${page?.name
                        ?.split(" ")
                        ?.slice(1)
                        .join(" ")} `}</span>
                    </Typography>
                  </MenuItem>
                ))}
                <Divider
                  orientation="horizontal"
                  variant="middle"
                  sx={{ bgcolor: "#8E9BBF" }}
                />
                {link.map((page, idx) => (
                  <MenuItem
                    key={idx}
                    onClick={() => router?.push(page?.path)}
                    sx={{
                      backgroundColor: "#222D55",
                      color: "#fff",
                      textTransform: "uppercase",
                      fontSize: "30px",
                      fontFamily: inter.style.fontFamily,
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
                <Divider
                  orientation="horizontal"
                  variant="middle"
                  sx={{ bgcolor: "#8E9BBF" }}
                />
                <MenuItem sx={{ gap: 1 }}>
                  <Avatar
                    sx={{
                      background:
                        "linear-gradient(50.98deg, #7DB1FF 2.7%, #97E6FF 94.21%)",
                      fontSize: "16px",
                      padding: 3,
                    }}
                  >
                    FR
                  </Avatar>
                  <Avatar
                    sx={{
                      bgcolor: "transparent",
                      border: "1px solid #7DB1FF",
                      fontSize: "16px",
                      color: "#7DB1FF",
                      padding: 3,
                    }}
                  >
                    EN
                  </Avatar>
                </MenuItem>
                <MenuItem
                  sx={{
                    mt: 3,
                    display: "flex",
                    justifyContent: "space-around",
                    backgroundColor: "#FFFFFF",
                    ": hover": {
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#222D55",
                      textTransform: "uppercase",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    actualités
                  </Typography>
                  <Typography
                    sx={{
                      color: "#222D55",
                      textTransform: "uppercase",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    Devenir Bénévole Cyber
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#BE0011",
                    gap: 1,
                    padding: "8px 15px",
                  }}
                >
                  <NotificationsNoneIcon sx={{ color: "#fff" }} />
                  <Typography
                    variant="h7"
                    color="inherit"
                    component="div"
                    sx={{
                      textTransform: "uppercase",
                      height: "100%",
                      fontSize: "13px",
                      color: "#fff",
                    }}
                  >
                    Déclarer un incident
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#007A47",
                    gap: 1,
                    padding: "8px 15px",
                  }}
                >
                  <PersonOutlineIcon sx={{ color: "#fff" }} />
                  <Typography
                    variant="h7"
                    color="inherit"
                    component="div"
                    sx={{
                      textTransform: "uppercase",
                      height: "100%",
                      fontSize: "13px",
                      color: "#fff",
                    }}
                  >
                    adhérer à l’ACCYB
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                ml: 3,
                gap: 2,
              }}
            >
              {pages.map((page, idx) => (
                <Button
                  key={idx}
                  onClick={() => handleClick(page)}
                  sx={{
                    my: 3,
                    color: activeLink === page?.name ? "#20388F" : "#222D55",
                    display: "block",
                    fontWeight: activeLink === page?.name ? 600 : 500,
                    fontSize: { lg: "13px", md: "12px" },
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  {page?.name}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "none", lg: "flex" },
                // ml: 3,
                gap: 2,
              }}
            >
              {link.map((page, idx) => (
                <Button
                  key={idx}
                  onClick={() => handleClick(page)}
                  sx={{
                    my: 3,
                    color: activeLink === page?.name ? "#20388F" : "#222D55",
                    display: "block",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: activeLink === page?.name ? 600 : 500,
                    fontSize: { lg: "13px", md: "12px" },
                  }}
                >
                  {page.name}
                </Button>
              ))}
              <Divider
                orientation="vertical"
                variant="middle"
                sx={{ bgcolor: "red" }}
              />
            </Box>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{
                borderBottomWidth: "30px",
                marginLeft: "15px",
                display: { md: "block", xs: "none" },
              }}
            />
            <Box sx={{ display: { md: "block", xs: "none" } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#222D55", opacity: 0.5 }} />
                </SearchIconWrapper>
                <StyledInputBase inputProps={{ "aria-label": "search" }} />
              </Search>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
