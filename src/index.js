import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/poppins";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },   // old primary color
    secondary: { main: "#9c27b0" }, // old secondary color
  },
  typography: {
    fontFamily: "Poppins, Roboto, Arial, sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
