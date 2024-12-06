import React from "react";
import MoodTracker from "../components/MoodTracker";
import Chatbot from "../components/Chatbot";
import FaceExpressionDetector from "../components/FaceExpressionDetector";
import Meditation from "../components/Meditation";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Your Dashboard</h1>
      <MoodTracker />
      <Meditation />
      <Chatbot />
      <FaceExpressionDetector />
    </div>
  );
};

export default Dashboard;
