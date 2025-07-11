function mincost(arr) {
    if (arr.length <= 1) return 0;

    let totalCost = 0;

    // While more than one rope remains
    while (arr.length > 1) {
        // Sort the array to get the two smallest ropes
        arr.sort((a, b) => a - b);

        // Remove the two smallest ropes
        const first = arr.shift();
        const second = arr.shift();

        const cost = first + second;
        totalCost += cost;

        // Add the combined rope back to the array
        arr.push(cost);
    }

    return totalCost;
}


