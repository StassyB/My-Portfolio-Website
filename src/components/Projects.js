// src/components/Projects.js
import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "Healthcare Consultation App",
    description: "Interactive Figma design for a healthcare consultation app.",
    link: "https://www.figma.com/proto/yTvaRwr3uNM7AtNiVjZYRE/Consultation-App?node-id=0-1&t=8XExmdVH4OaXWSzU-1",
    image: "/Figma.png", // from public folder
  },
  {
    title: "Sales Management",
    description: "Sales management dashboard built with MUI & React.",
    link: "https://sals-management.vercel.app/",
    image: "/sales.png",
  },
  {
    title: "Restaurant Wine Manager",
    description: "Comprehensive restaurant wine manager built with React and MUI.",
    link: "https://restaurant-wine-mng.vercel.app/",
    image: "/wine.png",
  },
 {
  title: "Dermatology Specialized Clinic",
  description: "Expert dermatology care focused on healthy skin and overall well-being.",
  link: "https://dr-fysel.vercel.app/",
  image: "/DrFysel.png",
},
  {
    title: "My Portfolio Website",
    description: "Responsive React portfolio with MUI components and smooth animations.",
    link: "my-portfolio-website-roan-theta.vercel.app",
    image: "/portfolio.png",
  },
];


const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 20,
        px: { xs: 2, sm: 10, md: 20 },
        backgroundColor: "#f5f5f5",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Header */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          mb: 6,
          fontWeight: 700,
          letterSpacing: 1.2,
          color: "#0d3b66",
          textTransform: "uppercase",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        My Projects
      </Typography>

      <Grid container spacing={10} justifyContent="center">
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  width: 330,
                  height: 300,
                  textAlign: "center",
                  position: "relative",
                  cursor: "pointer",
                  overflow: "hidden",
                  borderRadius: 5,
                  boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
                  transition: "transform 0.4s, box-shadow 0.4s",
                  "&:hover": {
                    transform: "translateY(-12px) rotateX(5deg) rotateY(5deg)",
                    boxShadow: "0px 20px 30px rgba(0,0,0,0.25)",
                  },
                  fontFamily: "'Poppins', sans-serif",
                }}
                onClick={() => window.open(project.link, "_blank")}
              >
                {project.image && (
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={project.image}
                      alt={project.title}
                      sx={{ transition: "transform 0.3s" }}
                    />
                    <Button
                      variant="contained"
                      color="transparent"
                      sx={{
                        position: "absolute",
                        top: "80%",
                        left: "50%",
                        transform: "translate(-50%, -50%) scale(0.9)",
                        opacity: 0,
                        transition: "all 0.3s ease-in-out",
                        fontWeight: 100,
                        letterSpacing: 0.5,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                      className="view-btn"
                    >
                                       </Button>
                  </Box>
                )}
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: "#0d3b66",
                      letterSpacing: 0.5,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      letterSpacing: 0.3,
                      color: "#333",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Overlay button hover effect */}
      <style>
        {`
          .MuiCard-root:hover .view-btn {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
          }
        `}
      </style>
    </Box>
  );
};

export default Projects;


