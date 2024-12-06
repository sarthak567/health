import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ChatAIBot from "./pages/ChatAI";
import Meditation from "./components/Meditation"; // Import Meditation Page
import FirstAid from "./pages/FirstAid"; // Import FirstAid Page
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatai" element={<ChatAIBot />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/firstaid" element={<FirstAid />} />{" "}
          {/* Add new route for First Aid */}
          <Route path="/meditation" element={<Meditation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
