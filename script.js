function mincost(arr) {
  if (arr.length <= 1) return { message: 0 };

  let heap = [...arr];
  heap.sort((a, b) => a - b);

  let totalCost = 0;

  while (heap.length > 1) {
    let first = heap.shift();
    let second = heap.shift();

    let cost = first + second;
    totalCost += cost;

    heap.push(cost);
    heap.sort((a, b) => a - b);
  }

  return { message: totalCost };
}
