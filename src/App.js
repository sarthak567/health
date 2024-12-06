import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./components/Chatbot";
import Meditation from "./components/Meditation"; // Import Meditation Page
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Chatbot />} />
          <Route path="/meditation" element={<Meditation />} />{" "}
          {/* Add Meditation Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
