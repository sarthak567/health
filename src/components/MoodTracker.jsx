import React, { useState } from "react";
import "./MoodTracker.css";

const MoodTracker = () => {
  const [mood, setMood] = useState("");

  const moods = ["Happy 😊", "Sad 😔", "Stressed 😖", "Relaxed 😌"];

  const handleMoodClick = (mood) => {
    setMood(mood);
  };

  return (
    <div className="mood-tracker">
      <h2>How are you feeling today?</h2>
      <div className="moods">
        {moods.map((item, index) => (
          <button key={index} onClick={() => handleMoodClick(item)}>
            {item}
          </button>
        ))}
      </div>
      {mood && (
        <p>
          You are feeling: <strong>{mood}</strong>
        </p>
      )}
    </div>
  );
};

export default MoodTracker;
