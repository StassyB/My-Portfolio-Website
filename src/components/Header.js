import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";

const sections = ["About", "Projects", "Resume", "Contact"];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#0d3b66" }}>
        <Toolbar>
          {/* Logo / Portfolio */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            My Portfolio
          </Typography>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {sections.map((section) => (
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
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {sections.map((section) => (
              <ListItem key={section} disablePadding>
                <ScrollLink
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={700}
                  offset={-70}
                  style={{ width: "100%", textDecoration: "none" }}
                >
                  <ListItemButton>
                    <ListItemText primary={section} />
                  </ListItemButton>
                </ScrollLink>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
