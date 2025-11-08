const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://mongo:27017/messages", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const MessageSchema = new mongoose.Schema({
  text: String
});
const Message = mongoose.model("Message", MessageSchema);

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running!" });
});

// Store message
app.post("/api/message", async (req, res) => {
  const msg = new Message({ text: req.body.text });
  await msg.save();
  res.json({ message: "Message stored successfully!" });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
