"use client";
import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { inter } from "../../../fonts/fonts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

const steps = [
  {
    label: "Bulletin d’adhésion",
  },
  {
    label: "référent de l’adhésion",
  },
];

export default function VerticalLinearStepper({ activeStep }) {
  const router = useRouter();
  return (
    <>
      {activeStep === 1 && (
        <Box
          onClick={() => router.back()}
          sx={{
            cursor: "pointer",
            border: "0.5px solid #222D55",
            opacity: 0.5,
            padding: 3,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70px",
            height: "70px",
          }}
        >
          <ArrowBackIcon sx={{ width: "15px", height: "15px" }} />
        </Box>
      )}
      <Box sx={{ maxWidth: 400, mt: 5 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step
              key={step.label}
              sx={{
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "#222D55", // circle color (COMPLETED)
                },
                "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
                  color: "yellow", // Just text label (COMPLETED)
                  fontSize: "20px !important",
                },
                "& .MuiStepLabel-root .Mui-active": {
                  color: "#222D55", // circle color (ACTIVE)
                  fill: "#97E6FF",
                },
                "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
                  color: "green", // Just text label (ACTIVE)
                },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                  // fill: "black", // circle's number (ACTIVE)
                  display: "none",
                },
              }}
            >
              <StepLabel
                sx={{
                  color: "#222D55",
                  "& .MuiStepLabel-labelContainer span": {
                    textTransform: "uppercase",
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                  },
                }}
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
}
