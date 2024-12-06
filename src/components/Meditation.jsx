import React, { useState, useEffect } from "react";
import "./Meditation.css";
import { FaSpinner, FaPause, FaPlay } from "react-icons/fa"; // Adding play and pause icons

const Meditation = () => {
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(0); // Timer in seconds
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  // Simulate a delay for loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Change loading state after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Timer countdown effect
  useEffect(() => {
    if (isTimerActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
      setTimerInterval(interval);

      // Cleanup interval when timer stops or reaches zero
      return () => clearInterval(interval);
    } else if (timer === 0) {
      clearInterval(timerInterval);
      setIsTimerActive(false);
    }
  }, [isTimerActive, timer]);

  const startTimer = (minutes) => {
    setTimer(minutes * 60); // Convert minutes to seconds
    setIsTimerActive(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
    }`;
  };

  return (
    <div className="meditation-container">
      <div className="meditation-header">
        <h2>Guided Meditation Exercises</h2>
        <p>Enhance your mindfulness journey with our curated exercises.</p>
      </div>

      {loading ? (
        <div className="loading-section">
          <div className="spinner">
            <FaSpinner className="spin" />
          </div>
          <p>Loading your peaceful moments...</p>
        </div>
      ) : (
        <div className="content">
          <h3>Explore Your Inner Peace</h3>
          <ul className="exercise-list">
            <li>Breathing Meditation</li>
            <li>Body Scan Meditation</li>
            <li>Mindfulness Meditation</li>
            <li>Loving Kindness Meditation</li>
          </ul>

          <div className="timer-section">
            <p className="timer-text">Current Timer: {formatTime(timer)}</p>
            {isTimerActive ? (
              <button
                className="cta-button pause-btn"
                onClick={() => setIsTimerActive(false)}
              >
                <FaPause /> Pause Meditation
              </button>
            ) : (
              <button
                className="cta-button start-btn"
                onClick={() => startTimer(10)}
              >
                <FaPlay /> Start 10-minute Meditation
              </button>
            )}
          </div>

          <button className="cta-button notify-btn">Get Notified</button>
        </div>
      )}
    </div>
  );
};

export default Meditation;
