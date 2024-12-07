import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import "./FaceExpressionDetector.css";

const FaceExpressionDetector = () => {
  const videoRef = useRef();
  const [expressions, setExpressions] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadModels = async () => {
      setLoading(true);

      // Load models for face detection and expression recognition
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
        await faceapi.nets.faceExpressionNet.loadFromUri("/models");

        // Request webcam access
        await navigator.mediaDevices
          .getUserMedia({ video: true })
          .then((stream) => {
            videoRef.current.srcObject = stream;
            setIsCameraReady(true);
          })
          .catch((err) => {
            setIsCameraReady(false);
            setError("Camera permission denied. Please allow camera access.");
          });
      } catch (error) {
        console.error("Error accessing models or camera:", error);
        setIsCameraReady(false);
        setError("Error loading models or accessing camera. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadModels();
  }, []);

  const handleVideoPlay = async () => {
    // Start detecting facial expressions on a regular interval
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (detections.length > 0) {
        // Get the highest probability expression
        const highestExpression = detections[0].expressions;
        const expression = Object.keys(highestExpression).reduce((a, b) =>
          highestExpression[a] > highestExpression[b] ? a : b
        );

        setExpressions(expression); // Set the detected expression
      }
    }, 1000); // Detect every second
  };

  return (
    <div className="face-detector">
      <h2>Detect Your Facial Expressions</h2>

      {loading ? (
        <div className="loading">Loading models and camera...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : !isCameraReady ? (
        <div className="error">
          Unable to access the camera. Please allow camera permissions.
        </div>
      ) : (
        <div className="camera-container">
          <video
            ref={videoRef}
            autoPlay
            muted
            onPlay={handleVideoPlay}
            className="video-element"
          ></video>
          <div className="expression-display">
            <h3>Detected Expression:</h3>
            {expressions ? (
              <div className="expression">{expressions}</div>
            ) : (
              <div className="expression">No expression detected</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FaceExpressionDetector;
