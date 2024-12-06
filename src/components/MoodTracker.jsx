import React, { useState } from "react";
import "./MoodTracker.css";
import { FaSmile, FaSadTear, FaMeh, FaRegSmileBeam } from "react-icons/fa"; // Adding icons for moods

const MoodTracker = () => {
  const [mood, setMood] = useState("");

  const moods = [
    { label: "Happy 😊", icon: <FaSmile /> },
    { label: "Sad 😔", icon: <FaSadTear /> },
    { label: "Stressed 😖", icon: <FaMeh /> },
    { label: "Relaxed 😌", icon: <FaRegSmileBeam /> },
  ];

  const handleMoodClick = (mood) => {
    setMood(mood.label);
  };

  return (
    <div className="mood-tracker">
      <h2>How are you feeling today?</h2>
      <div className="moods">
        {moods.map((item, index) => (
          <button
            key={index}
            className="mood-btn"
            onClick={() => handleMoodClick(item)}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      {mood && (
        <div className="mood-display">
          <p>You are feeling: </p>
          <h3>{mood}</h3>
        </div>
      )}
    </div>
  );
};

export default MoodTracker;
