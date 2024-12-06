import React, { useState, useEffect } from "react";
import "./Meditation.css";

const Meditation = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a delay for loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Change loading state after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="meditation-container">
      <div className="meditation-header">
        <h2>Meditation Exercises</h2>
        <p>Start your mindfulness journey with guided exercises.</p>
      </div>

      {loading ? (
        <div className="loading-section">
          <div className="spinner"></div>
          <p>Loading meditation exercises...</p>
        </div>
      ) : (
        <div className="content">
          <p>
            We are working hard to bring you the best meditation exercises! Stay
            tuned for updates.
          </p>
          <button className="cta-button">Get Notified</button>
        </div>
      )}
    </div>
  );
};

export default Meditation;
