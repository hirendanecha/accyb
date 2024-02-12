"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Divider, Toolbar, styled } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Logo from "@/Icons/Frame.svg";

const Img = styled(Image)(({ theme }) => ({
  width: "64px !important",
  height: "64px !important",
}));

const pages = [
  "Découvrir l’ACCYB",
  "Découvrir le CSIRT-ATLANTIC",
  "Découvrir l’Observatoire",
];
const link = ["se sécuriser", "se former", "s’informer"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#222D55",
          display: { md: "block", xs: "none" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "0 3px 0 20px",
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
            <Typography variant="h7" color="inherit" component="div">
              FR
            </Typography>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ bgcolor: "#646C88" }}
            />
            <Typography
              variant="h7"
              color="inherit"
              component="div"
              sx={{ color: "#646C88" }}
            >
              EN
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
            <Typography
              variant="h7"
              color="inherit"
              component="div"
              sx={{ textTransform: "uppercase", fontSize: "13px" }}
            >
              actualités
            </Typography>
            <Typography
              variant="h7"
              color="inherit"
              component="div"
              sx={{ textTransform: "uppercase", fontSize: "13px" }}
            >
              Devenir Bénévole Cyber
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
                  }}
                >
                  adhérer à l’ACCYB
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
                  }}
                >
                  Déclarer un incident
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </AppBar>
      <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
        <Toolbar disableGutters sx={{ padding: "0 15px" }}>
          <Img src={Logo} sx={{ display: { xs: "none", md: "flex" } }} />
          <Img src={Logo} sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
              sx={{ backgroundColor: "#222D55", color: "white" }}
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
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 3 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 3,
                  color: "#222D55",
                  display: "block",
                  fontWeight: 600,
                  fontSize: { lg: "15px", md: "12px" },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, ml: 3 }}>
            {link.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 3,
                  color: "#222D55",
                  display: "block",
                  fontWeight: 600,
                  fontSize: { lg: "15px", md: "12px" },
                }}
              >
                {page}
              </Button>
            ))}
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ bgcolor: "red" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
