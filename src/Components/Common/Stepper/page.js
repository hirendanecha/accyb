"use client";
import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { inter } from "../../../fonts/fonts";

const steps = [
  {
    label: "Bulletin d’adhésion",
  },
  {
    label: "référent de l’adhésion",
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Box sx={{ maxWidth: 400, mt: 10 }}>
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
                fontWeight: 700,
                fontSize: "18px",
                textTransform: "uppercase",
                fontFamily: inter.style.fontFamily,
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
