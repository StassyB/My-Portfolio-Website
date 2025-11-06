// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
<Box sx={{ py: 2, textAlign: "center", backgroundColor: "#102a43", color: "#fff" }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Stassy Medina. All Rights Reserved.
      </Typography>
    </Box>
  );
}
