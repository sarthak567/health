import React from "react";
import MoodTracker from "../components/MoodTracker";
import FaceExpressionDetector from "../components/FaceExpressionDetector";
import Meditation from "../components/Meditation"; // Chatbot removed from here
// Chatbot import removed

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Your Dashboard</h1>
      <MoodTracker />
      <Meditation />
      <FaceExpressionDetector />
    </div>
  );
};

export default Dashboard;
