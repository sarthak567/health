import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (input.trim()) {
      // Append user's message
      const newMessages = [...messages, { text: input, sender: "user" }];
      setMessages(newMessages);

      // Clear input
      setInput("");

      try {
        console.log("Sending message to API:", input); // Debugging line
        // Call Gemini API with the correct structure and endpoint
        const response = await axios.post(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDt7uk7d8opuHQmf9s-zrQVwiQCZFEa-GU", // Replace with actual API key
          {
            contents: [
              {
                parts: [
                  {
                    text: input,
                  },
                ],
              },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Extract the bot's response from the API response structure
        const botResponse =
          response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

        console.log("API response:", response); // Debugging line

        // If a valid response exists, append it to the messages array
        setMessages([
          ...newMessages,
          {
            text: botResponse || "No response from API.",
            sender: "bot",
          },
        ]);
      } catch (error) {
        // Add detailed error logging
        console.error("Error connecting to API:", error);
        if (error.response) {
          // If error response exists
          console.error("API response error:", error.response.data);
        } else if (error.request) {
          // If no response was received
          console.error("No response received:", error.request);
        } else {
          // General error
          console.error("Error message:", error.message);
        }

        setMessages([
          ...newMessages,
          { text: "Error connecting to API. Please try again.", sender: "bot" },
        ]);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#e3f2fd",
        p: 2,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: "100%",
          maxWidth: "600px",
          minHeight: "500px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          bgcolor: "#fff",
        }}
      >
        <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
          <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
            Chat with Us
          </Typography>
          <Box
            sx={{
              maxHeight: "calc(100% - 150px)",
              overflowY: "auto",
              p: 1,
              borderRadius: "12px",
              bgcolor: "#f9f9f9",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent:
                    message.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    p: 2,
                    borderRadius: "16px",
                    maxWidth: "80%",
                    bgcolor: message.sender === "user" ? "#007BFF" : "#4CAF50",
                    color: "#fff",
                    wordBreak: "break-word",
                  }}
                >
                  <Typography variant="body1">{message.text}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            borderTop: "1px solid #ddd",
            backgroundColor: "#fafafa",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            sx={{
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            sx={{
              marginLeft: "10px",
              borderRadius: "20px",
              padding: "12px 24px",
              textTransform: "none",
            }}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Chatbot;
