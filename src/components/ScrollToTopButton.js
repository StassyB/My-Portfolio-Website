import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Fab
      color="primary"
      onClick={scrollToTop}
     sx={{
  position: "fixed",
  bottom: 30,
  right: 30,
  display: visible ? "flex" : "none",
  zIndex: 1000,
  "&:hover": { transform: "scale(1.1)" },
  transition: "transform 0.2s",
}}

    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default ScrollToTopButton;
