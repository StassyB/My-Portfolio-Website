// src/components/Hero.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: { xs: 2, sm: 4 }, // responsive padding
        backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1470&q=80')`,
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
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(5px)",
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2, color: "#fff", width: "100%" }}>
        <Fade cascade>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            }}
          >
            Hello, I'm Stassy
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 500,
              letterSpacing: 0.5,
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            }}
          >
           Front-End Developer & UI/UX Designer | Full-Stack in Progress
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              mt: 3,
              px: { xs: 3, sm: 5 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
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
