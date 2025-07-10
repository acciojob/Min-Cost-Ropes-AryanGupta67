const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Function to calculate the minimum cost to connect ropes
function mincost(arr) {
  if (arr.length <= 1) return { message: 0 };

  let heap = [...arr];
  heap.sort((a, b) => a - b);

  let totalCost = 0;

  while (heap.length > 1) {
    const first = heap.shift();
    const second = heap.shift();
    const cost = first + second;

    totalCost += cost;

    heap.push(cost);
    heap.sort((a, b) => a - b); // keep it sorted like a min-heap
  }

  return { message: totalCost };
}

// POST endpoint for /mincost
app.post("/mincost", (req, res) => {
  const { arr } = req.body;

  // Validate input: must be an array of numbers
  if (!Array.isArray(arr) || arr.some(el => typeof el !== "number")) {
    return res.status(400).json({ message: "Invalid input" });
  }

  const result = mincost(arr);
  res.status(200).json(result);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

