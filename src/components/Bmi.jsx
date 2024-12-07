import React, { useState } from "react";
import "./Bmi.css";

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBmi = (
        weight /
        (heightInMeters * heightInMeters)
      ).toFixed(1);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setMessage("Underweight");
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setMessage("Normal weight");
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obesity");
      }
    } else {
      setMessage("Please enter valid weight and height!");
    }
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setMessage("");
  };

  return (
    <div className="bmi-container">
      <h1 className="bmi-title">BMI Calculator</h1>
      <div className="bmi-card">
        <div className="input-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>
        <div className="input-group">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </div>
        <button onClick={calculateBmi} className="calculate-btn">
          Calculate BMI
        </button>
        <button onClick={reset} className="reset-btn">
          Reset
        </button>
        {bmi && (
          <div className="result">
            <h2>
              Your BMI: <span className="bmi-value">{bmi}</span>
            </h2>
            <p className="bmi-status">Status: {message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bmi;
