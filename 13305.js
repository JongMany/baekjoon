const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `4
2 3 1
5 2 4 1`.toString().trim().split("\n");

const dists = input[1].split(" ").map(BigInt);
const costs = input[2].split(" ").map(BigInt);

let cost = 0n;
let curPrice = costs[0];

for (let i = 0; i < dists.length; i++) {
  cost += curPrice * dists[i];
  if (curPrice > costs[i + 1]) curPrice = costs[i + 1];
}
console.log(Number(cost))