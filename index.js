const express = require("express");
const app = express();

app.use(express.json());

// Set a port number
const PORT = process.env.PORT || 3000;

// A simple route to test the server
app.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/:id", (req, res) => {
  res.send(`User with ID: ${req.params.id}`);
});

app.post("/api/data", (req, res) => {
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
