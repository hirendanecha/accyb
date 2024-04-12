import { createTheme } from "@mui/material/styles";
import { inter } from "./fonts";

export const appTheme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});
