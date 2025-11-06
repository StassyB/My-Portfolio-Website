import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
<AppBar position="sticky" sx={{ backgroundColor: "#0d3b66" }}>
      <Toolbar>
      <Typography
  variant="h6"
  sx={{ flexGrow: 1, cursor: "pointer" }}
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  My Portfolio
</Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          {["About", "Projects", "Resume", "Contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={700}
              offset={-70}
            >
              <Button color="inherit">{section}</Button>
            </ScrollLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
