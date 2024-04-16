const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `4 4
802
743
457
539`.toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const lines = input.slice(1).sort((a, b) => b - a);

let nums = 0; // 잘려진 갯수
let min = 0;
let mid = Math.floor((0 + lines[0]) / 2);
let max = lines[0];
while (true) {
  if(min > max) {
    break;
  }
  nums = lines.reduce((acc, cur) => {
    acc += Math.floor(cur / mid);
    return acc;
  }, 0)

  if (nums >= M) { // 많이 쪼갬
    min = mid + 1;
    mid = Math.floor((min + max) / 2);
  } else if (nums < M) {// 덜 쪼갬 (더 세분화하기)
    max = mid - 1;
    mid = Math.floor((min + max) / 2);
  }
}
console.log(mid)
