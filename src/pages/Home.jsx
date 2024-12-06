import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <Box className="home-container">
      {/* Hero Section */}
      <Box className="hero-section">
        <Typography variant="h2" color="primary" gutterBottom>
          Mental & Health Support Companion
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Empower your mental well-being with AI-driven tools, mood tracking,
          and guided relaxation.
        </Typography>
        <Box className="cta-buttons">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/login"
            className="cta-btn"
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            component={Link}
            to="/signup"
            className="cta-btn"
          >
            Sign Up
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box className="features-section">
        <Typography variant="h4" color="textPrimary" gutterBottom>
          Our Key Features
        </Typography>
        <Box className="features-container">
          <Card className="feature-card">
            <CardContent>
              <Typography variant="h6" color="primary">
                Mood Tracker
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Track your daily moods and discover patterns in your mental
                well-being.
              </Typography>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent>
              <Typography variant="h6" color="primary">
                AI Chatbot
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Get personalized mental health support and advice instantly.
              </Typography>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent>
              <Typography variant="h6" color="primary">
                Guided Meditation
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Relax and focus with calming meditation sessions curated for
                your needs.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Call-to-Action Section */}
      <Box className="cta-section">
        <Typography variant="h5" color="textPrimary" gutterBottom>
          Join Us and Start Your Journey Towards Better Mental Health
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/signup"
        >
          Join Now
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
