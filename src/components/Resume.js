// src/components/Resume.js
import React from "react";
import { Box, Typography, Button, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";

const Resume = () => {
  return (
    <Box
      id="resume"
      sx={{
        minHeight: "60vh",
        py: 12,
        px: 2,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header */}
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            letterSpacing: 1.2,
            mb: 3,
            color: "#0d3b66",
          }}
        >
          My Resume
        </Typography>

        {/* Section Description */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: 650,
            margin: "0 auto",
            mb: 6,
            fontSize: 16,
            lineHeight: 1.6,
            color: "#333",
          }}
        >
          Click the button below to download my resume and explore my skills,
          experience, and projects in detail.        </Typography>

        {/* Download Button */}
        <Tooltip title="Download CV" arrow>
          <Button
            variant="contained"
            color="primary"
            href="/Stassy CV.pdf" // Make sure Stassy CV.pdf is in the public folder
            download
            sx={{
              px: 6,
              py: 1.8,
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: 0.5,
              borderRadius: 3,
              transition: "all 0.3s",
              boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
              "&:hover": {
                transform: "translateY(-5px) scale(1.05)",
                boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
              },
            }}
            startIcon={<DownloadIcon />}
          >
            Download Resume
          </Button>
        </Tooltip>
      </motion.div>
    </Box>
  );
};

export default Resume;
