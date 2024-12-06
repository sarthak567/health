import React, { useState } from "react";
import "./FirstAid.css"; // Importing updated CSS

const FirstAid = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [remedy, setRemedy] = useState("");

  const availableSymptoms = [
    "Fever",
    "Cough",
    "Cold",
    "Dysentery",
    "Headache",
    "Acidity",
  ];

  const handleSymptomChange = (event) => {
    const { value, checked } = event.target;
    setSymptoms((prevSymptoms) =>
      checked
        ? [...prevSymptoms, value]
        : prevSymptoms.filter((symptom) => symptom !== value)
    );
  };

  const getRemedy = () => {
    if (symptoms.length === 0) {
      setRemedy("Please select one or more symptoms.");
      return;
    }

    let remedyText = "Suggested Remedies:\n";
    if (symptoms.includes("Fever")) {
      remedyText += "- Take paracetamol or ibuprofen for fever.\n";
      remedyText += "- Rest and drink plenty of fluids.\n";
    }
    if (symptoms.includes("Cough")) {
      remedyText += "- Take cough syrup or lozenges.\n";
      remedyText += "- Drink warm water with honey.\n";
    }
    if (symptoms.includes("Cold")) {
      remedyText += "- Use saline nasal spray or drops.\n";
      remedyText += "- Drink warm tea with ginger and honey.\n";
    }
    if (symptoms.includes("Dysentery")) {
      remedyText += "- Stay hydrated and drink oral rehydration solution.\n";
      remedyText += "- Take anti-diarrheal medication.\n";
    }
    if (symptoms.includes("Headache")) {
      remedyText += "- Take pain relievers like ibuprofen or aspirin.\n";
      remedyText += "- Apply a cold compress to your forehead.\n";
    }
    if (symptoms.includes("Acidity")) {
      remedyText += "- Take antacids or acid blockers.\n";
      remedyText += "- Avoid spicy and oily foods.\n";
    }

    setRemedy(remedyText);
  };

  return (
    <div className="first-aid-page">
      <h1 className="title">First Aid Remedies</h1>
      <p className="description">
        Select your symptoms to get personalized remedy suggestions.
      </p>

      <div className="symptom-selection">
        <h2>Select Symptoms</h2>
        <div className="checkbox-container">
          {availableSymptoms.map((symptom) => (
            <label key={symptom} className="checkbox-label">
              <input
                type="checkbox"
                value={symptom}
                onChange={handleSymptomChange}
                className="checkbox-input"
              />
              <span>{symptom}</span>
            </label>
          ))}
        </div>
      </div>

      <button onClick={getRemedy} className="submit-button">
        Get Remedy
      </button>

      {remedy && (
        <div className="remedy-results">
          <h2>Your Suggested Remedy</h2>
          <pre className="remedy-text">{remedy}</pre>
        </div>
      )}
    </div>
  );
};

export default FirstAid;
