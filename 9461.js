const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = `2
6
12`.toString().trim().split("\n");

const numbers = input.slice(1).map(Number);

const P = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

const results = [];
for (const number of numbers) {
  const findOne = P[number - 1];
  if (findOne) {
    results.push(findOne)
  } else {
    findSolution(number);
    results.push(P[number - 1])
  }
}

console.log(results.join("\n"))
function findSolution(number) {
  for (let i = P.length; i < number; i++) {
    P[i] = P[i - 1] + P[i - 5];
  }
}