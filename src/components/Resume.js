// src/components/Resume.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";

const Resume = () => {
  return (
    <Box
      id="resume"
      sx={{
        minHeight: "50vh",
        py: 10,
        px: 2,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
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
            maxWidth: 600,
            margin: "0 auto",
            mb: 5,
            fontSize: 16,
            lineHeight: 1.6,
            color: "#333",
          }}
        >
          Click the button below to download my resume and explore my skills,
          experience, and projects in detail.
        </Typography>

        {/* Download Button */}
        <Button
          variant="contained"
          color="primary"
          href="/resume.pdf"   // Make sure resume.pdf is in the public folder
          download             // ensures direct download
          sx={{
            px: 5,
            py: 1.5,
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: 0.5,
            transition: "all 0.3s",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
            },
          }}
          startIcon={<DownloadIcon />}
        >
          Download Resume
        </Button>
      </motion.div>
    </Box>
  );
};

export default Resume;
