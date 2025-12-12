const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for frontend
app.use(cors({
  origin: "http://localhost:5500"  // frontend URL
}));

app.get("/", (req, res) => {
  res.json({ message: "Hello Don! CORS is working 🚀" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
