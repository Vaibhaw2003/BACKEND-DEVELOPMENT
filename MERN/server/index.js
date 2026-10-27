const express = require("express");

const app = express();

// Middleware
app.use(express.json());

let receivedData = [];

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/data", (req, res) => {
  res.json(receivedData);
});

app.post("/data", (req, res) => {
  const newData = req.body;

  receivedData.push(newData);

  res.status(201).json({
    message: "Data received successfully",
    data: newData
  });
});


function authMiddleware(req, res, next) {
  const isLoggedIn = req.headers["x-login"];

  if (isLoggedIn !== "true") {
    return res.status(401).json({
      message: "Please login first"
    });
  }

  next();
}

app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to your dashboard!"
  });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

