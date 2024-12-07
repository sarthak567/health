import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ChatAIBot from "./pages/ChatAI";
import FirstAid from "./pages/FirstAid";

// Import Components
import Meditation from "./components/Meditation";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import Styles
import "./App.css";
import "normalize.css"; // Normalize CSS for consistent styling across browsers

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header component */}
        <Header />

        {/* Routes for application pages */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chatai" element={<ChatAIBot />} />
          <Route path="/firstaid" element={<FirstAid />} />
          <Route path="/meditation" element={<Meditation />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
