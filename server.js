const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("✅ Backend is working!");
});

// start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
// 📄 Route: Calculate printing cost
app.post("/calculate-cost", (req, res) => {
  const { pages, size, color, binding, photoSets } = req.body;

  let cost = 0;

  // 🖨️ Normal pages
  if (size === "A4") {
    cost += color === "bw" ? pages * 2 : pages * 10;
  } else if (size === "A3") {
    cost += color === "bw" ? pages * 7 : pages * 20;
  }

  // 📚 Binding
  if (binding === true) {
    cost += 30;
  }

  // 🖼️ Passport photos
  if (photoSets && photoSets > 0) {
    cost += photoSets * 40; // each set costs ₹40
  }

  res.json({ totalCost: cost });
});







