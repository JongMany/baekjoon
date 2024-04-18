const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `10
10 -4 3 1 5 6 -35 12 21 -1`.toString().trim().split("\n");

const [N, M] = input;

const results = Array(Number(N)).fill(-Infinity);
const numbers = M.split(" ").map(Number);

for (let i = N-1; i>=0; i--) {
  const curNum = numbers[i];
  if(i === N-1) {
    results[i] = curNum;
    continue;
  }
  const prevResult = results[i+1];
  if(prevResult <= 0) {
    results[i] = curNum;
  } else {
    results[i] = curNum + prevResult;
  }
}
console.log(Math.max(...results))