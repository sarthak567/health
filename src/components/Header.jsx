import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, styled } from "@mui/material";

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
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <LogoLink to="/">Mental Health Companion</LogoLink>
        </Typography>
        <div style={{ display: "flex", gap: "16px" }}>
          <NavLinkButton component={Link} to="/">
            Home
          </NavLinkButton>
          <NavLinkButton component={Link} to="/login">
            Login
          </NavLinkButton>
          <NavLinkButton component={Link} to="/signup">
            Signup
          </NavLinkButton>
          <NavLinkButton component={Link} to="/dashboard">
            Dashboard
          </NavLinkButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
