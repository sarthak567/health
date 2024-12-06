import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import "./FaceExpressionDetector.css";

const FaceExpressionDetector = () => {
  const videoRef = useRef();

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");

      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        videoRef.current.srcObject = stream;
      });
    };

    loadModels();
  }, []);

  const handleVideoPlay = async () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();
      console.log(detections);
    }, 1000);
  };

  return (
    <div className="face-detector">
      <h2>Detect Your Facial Expressions</h2>
      <video ref={videoRef} autoPlay muted onPlay={handleVideoPlay}></video>
    </div>
  );
};

export default FaceExpressionDetector;
