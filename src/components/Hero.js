// src/components/Hero.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Box
      id="hero" // <-- Added ID for ScrollToTopButton reference
      sx={{
        minHeight: "70vh", // reduced from 100vh
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1470&q=80')`, // blurred tech image
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)", // overlay for better text contrast
          backdropFilter: "blur(5px)", // subtle blur effect
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2, color: "#fff" }}>
        <Fade cascade>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            Hello, I'm Stassy
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 500, letterSpacing: 0.5 }}
          >
            Front-End Developer | UX/UI Designer
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3 }}
            href="#projects"
          >
            View My Work
          </Button>
        </Fade>
      </Box>
    </Box>
  );
};

export default Hero;
