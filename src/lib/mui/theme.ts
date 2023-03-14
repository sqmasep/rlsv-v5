import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {}
  interface ThemeOptions {}
}

let theme = createTheme();

theme = responsiveFontSizes(theme);

export default theme;
