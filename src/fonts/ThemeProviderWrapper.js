"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./provider";

export default function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
