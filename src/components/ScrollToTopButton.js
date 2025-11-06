// src/components/ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only after scrolling past Hero section
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      if (window.scrollY > heroHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fab
      color="primary"
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: 40,
        right: 40,
        display: visible ? "flex" : "none",
        zIndex: 1000,
        transition: "opacity 0.3s",
      }}
      aria-label="scroll to top"
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default ScrollToTopButton;
