const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Min Cost Ropes function
function minCost(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  let totalCost = 0;

  while (arr.length > 1) {
    // Sort the array to find the two smallest ropes
    arr.sort((a, b) => a - b);

    // Take out the two smallest
    const first = arr.shift();
    const second = arr.shift();

    const cost = first + second;
    totalCost += cost;

    // Push back the combined rope
    arr.push(cost);
  }

  return totalCost;
}

// API Route
app.post('/mincost', (req, res) => {
  const { arr } = req.body;

  try {
    const result = minCost(arr);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));


