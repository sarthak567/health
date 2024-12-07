import React from "react";

// Import Components
import MoodTracker from "../components/MoodTracker";
import FaceExpressionDetector from "../components/FaceExpressionDetector";
import Meditation from "../components/Meditation";
import Bmi from "../components/Bmi"; // Import Bmi Component

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Your Dashboard</h1>

      {/* Render MoodTracker Component */}
      <MoodTracker />

      {/* Render Meditation Component */}
      <Meditation />

      {/* Render FaceExpressionDetector Component */}
      <FaceExpressionDetector />

      {/* Render BMI Calculator Component */}
      <Bmi />
    </div>
  );
};

export default Dashboard;
