import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, styled } from "@mui/material";

// Styled components for the logo link and navigation buttons
const LogoLink = styled(Link)({
  color: "white",
  textDecoration: "none",
});

const NavLinkButton = styled(Button)({
  textDecoration: "none",
  color: "inherit",
});

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo and Home link */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <LogoLink to="/">Mental Health Companion</LogoLink>
        </Typography>

        {/* Navigation links */}
        <div style={{ display: "flex", gap: "16px" }}>
          <NavLinkButton component={Link} to="/">
            Home
          </NavLinkButton>
          <NavLinkButton component={Link} to="/chatai">
            Chatbot
          </NavLinkButton>
          <NavLinkButton component={Link} to="/firstaid">
            First Aid
          </NavLinkButton>
          <NavLinkButton component={Link} to="/dashboard">
            Dashboard
          </NavLinkButton>
          <NavLinkButton component={Link} to="/login">
            Login
          </NavLinkButton>
          <NavLinkButton component={Link} to="/signup">
            Signup
          </NavLinkButton>

          {/* New First Aid Link */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
