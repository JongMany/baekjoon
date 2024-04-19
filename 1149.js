const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = `3
26 40 83
49 60 57
13 89 99`.toString().trim().split("\n");

const numbers = input.slice(1).map(item => item.split(" ").map(Number));

let answer = 0
const dp = Array.from(Array(Number(input[0])), () => Array(3).fill(0))
// 0번째 초기화
dp[0][0] = numbers[0][0]
dp[0][1] = numbers[0][1]
dp[0][2] = numbers[0][2]
for (let i = 1; i < Number(input[0]); i++) {
  // i, i-1이 서로 다른 색상을 가져야하기 때문에
  // i에서 가져야 하는 색상을 제외한 색상 중 i-1에서 최소값을 구한다.
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + numbers[i][0]
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + numbers[i][1]
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + numbers[i][2]
}
answer = Math.min(...dp[Number(input[0] - 1)]) // 누적된 값중에서 최소값을 찾는다.
console.log(answer)

