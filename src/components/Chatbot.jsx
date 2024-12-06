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
        // Call Gemini API
        const response = await axios.post(
          "https://api.gemini.com/v1/chat", // Replace with actual Gemini API endpoint
          { query: input },
          {
            headers: {
              Authorization: `Bearer AIzaSyDt7uk7d8opuHQmf9s-zrQVwiQCZFEa-GU`,
            },
          }
        );

        // Append bot's response
        setMessages([
          ...newMessages,
          {
            text: response.data.reply || "No response from API.",
            sender: "bot",
          },
        ]);
      } catch (error) {
        setMessages([
          ...newMessages,
          { text: "Error connecting to API. Please try again.", sender: "bot" },
        ]);
      }
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "400px",
        margin: "auto",
        mt: 5,
        p: 2,
        bgcolor: "#f5f5f5",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
        Chat with Us
      </Typography>
      <Box
        sx={{
          maxHeight: "300px",
          overflowY: "auto",
          p: 1,
          border: "1px solid #ddd",
          borderRadius: "8px",
          mb: 2,
          bgcolor: "white",
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              marginBottom: "8px",
              textAlign: message.sender === "user" ? "right" : "left",
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                p: 1,
                borderRadius: "12px",
                bgcolor: message.sender === "user" ? "#e1f5fe" : "#c8e6c9",
              }}
            >
              <Typography variant="body2">{message.text}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default Chatbot;
