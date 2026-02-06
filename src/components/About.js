// src/components/About.js
import React from "react";
import { Box, Typography, Grid, Card, CardContent, Container } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { FaReact, FaJs, FaFigma, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaServer } from "react-icons/fa";
import { SiMui, SiMongodb, SiMysql } from "react-icons/si";

export default function About() {
  const skills = [
    { icon: <FaReact size={30} color="#61DBFB" />, name: "React" },
    { icon: <SiMui size={30} color="#007FFF" />, name: "MUI" },
    { icon: <FaJs size={30} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaFigma size={30} color="#F24E1E" />, name: "UI/UX" },
     { icon: <FaHtml5 size={30} color="#E34F26" />, name: "HTML" },
    { icon: <FaCss3Alt size={30} color="#1572B6" />, name: "CSS" },
    { icon: <FaPhp size={30} color="#777BB4" />, name: "PHP" },
    { icon: <SiMysql size={30} color="#4479A1" />, name: "MySQL" },
    { icon: <FaNodeJs size={30} color="#339933" />, name: "Node.js" },
    { icon: <FaServer size={30} color="#000000" />, name: "Express.js" }, // placeholder for Express
    { icon: <SiMongodb size={30} color="#47A248" />, name: "MongoDB" },
    
   
  ];

  return (
    <Container id="about" sx={{ py: 10, textAlign: "center" }}>
      <Fade>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, mx: "auto", mb: 5 }}>
          I’m a Front-End Developer and UI/UX Designer who loves turning ideas into seamless, engaging, and responsive web experiences. <br />
           Actively expanding toward full-stack development. <br />
          My goal is to create digital solutions that are not only beautiful but also fast, functional, and impactful.
        </Typography>
      </Fade>

      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Card sx={{ width: 120, textAlign: "center", p: 2 }}>
              <CardContent>
                {skill.icon}
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  {skill.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}