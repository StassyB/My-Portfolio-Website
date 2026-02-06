import React, { useState } from "react";
import { Box, Typography, IconButton, TextField, Button, Tooltip, Stack, Link } from "@mui/material";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your Formspree endpoint
    fetch("https://formspree.io/f/yourFormID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => setSubmitted(true))
      .catch((err) => alert("Error sending message: " + err));
  };

  return (
    <Box
      id="contact"
      sx={{ py: 12, px: 2, textAlign: "center", bgcolor: "#f5f5f5" }}
    >
      {/* Header */}
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "#0d3b66", mb: 4 }}>
        Contact Me
      </Typography>

      {/* Contact Info with Icons */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        mb={5}
      >
        <Link href="mailto:bettstassy1@gmail.com" underline="none" sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: "#0d3b66",
          fontWeight: 500,
          "&:hover": { color: "#f85a3e" },
        }}>
          <FaEnvelope /> bettstassy1@gmail.com
        </Link>

        <Link href="tel:+254 796 263121" underline="none" sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: "#0d3b66",
          fontWeight: 500,
          "&:hover": { color: "#34a853" },
        }}>
          <FaPhone /> +254 712 671465
        </Link>
      </Stack>

      {/* Social Icons */}
      <Stack direction="row" spacing={3} justifyContent="center" mb={5}>
        <Tooltip title="GitHub">
          <IconButton
            href="https://github.com/StassyB/"
            target="_blank"
            sx={{
              fontSize: 28,
              color: "#0d3b66",
              transition: "transform 0.3s, color 0.3s",
              "&:hover": { color: "#6cc644", transform: "scale(1.2)" },
            }}
          >
            <FaGithub />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <IconButton
            href="https://www.linkedin.com/in/stassy-bett-118741210/"
            target="_blank"
            sx={{
              fontSize: 28,
              color: "#0d3b66",
              transition: "transform 0.3s, color 0.3s",
              "&:hover": { color: "#0077b5", transform: "scale(1.2)" },
            }}
          >
            <FaLinkedin />
          </IconButton>
        </Tooltip>
      </Stack>

      {/* Contact Form */}
      {!submitted ? (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 500,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ py: 1.5, fontWeight: 600 }}>
            Send Message
          </Button>
        </Box>
      ) : (
        <Typography variant="h6" color="green" mt={3}>
          Thank you! Your message has been sent.
        </Typography>
      )}
    </Box>
  );
};

export default Contact;

