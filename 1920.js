const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `5
4 1 5 2 3
5
1 3 7 9 5`.toString().trim().split("\n");
const A = input[1].split(" ").map(Number).sort((a, b) => a - b);
const M = input[3].split(" ").map(Number);


const numbers= []
for (const num of M) {
  numbers.push(checkInFn(num));
}
console.log(numbers.join("\n"))

function checkInFn(num) {
  let left = 0;
  let mid = Math.floor(A.length / 2);
  let right = A.length - 1;

  while (left <= right) {
    const curNum = A[mid];
    if (curNum === num) {
      return 1;
    } else if (curNum > num) {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    } else {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }
  }
  return 0;
}
