const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Set a port number
const PORT = process.env.PORT || 3000;

// A simple route to test the server
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/api/data", (req, res) => {
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
