const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim()

const input = `5
3 1 4 3 2`.toString().trim().split("\n");
const people = input[1].split(" ").map(Number).sort((a, b) => a - b);
let sum = 0;
let temp = 0;
for (const time of people) {
  temp += time;
  sum += temp;
}
console.log(sum)