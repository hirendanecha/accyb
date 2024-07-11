'use client';
import { Box, Typography } from "@mui/material";
import CookieConsent from "react-cookie-consent";
import { inter } from "../../fonts/fonts";

export default function Cookie() {
    return (
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          bottom: { xs: "20px", md: "50px" },
          // top:0,
          right: { xs: "20px", md: "50px" },
          zIndex: 1000,
          backgroundColor: "#FFFFFF",
          // height: "200px",
          width: { xs: "350px", sm: "400px", md: "500px" },
          // padding: "20px",
        }}
      >
        <CookieConsent
          disableStyles={true}
          enableDeclineButton={true}
          declineButtonText="Tout refuser"
          declineButtonStyle={{
            backgroundColor: "#FFFFFF",
            color: "#222D55",
            borderRadius: "4px",
            padding: "10px 20px",
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: inter.style.fontFamily,
            cursor: "pointer",
            border: "1px solid #222D55",
            marginTop: "20px",
          }}
          buttonText="Tout accepter"
          buttonStyle={{
            backgroundColor: "#222D55",
            color: "#FFFFFF",
            borderRadius: "4px",
            padding: "10px 20px",
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: inter.style.fontFamily,
            cursor: "pointer",
            border: "none",
            marginLeft: "20px",
          }}
          style={{
            color: "#222D55",
            fontWeight: 500,
            fontSize: "24px",
            fontFamily: inter.style.fontFamily,
            lineHeight: "36px",
            padding: "30px",
            // height:'200px'
          }}
        >
          Vos préferences<br></br>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#222D55",
              fontWeight: 400,
              fontFamily: inter.style.fontFamily,
              lineHeight: "15px",
              marginTop: "10px",
            }}
          >
            Ce site internet utilise des cookies, nous vous donnons le
            contrôle sur vos préférences
          </Typography>
        </CookieConsent>
      </Box>
    )
}