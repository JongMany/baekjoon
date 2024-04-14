const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const input = [3, 3];
const [N, M] = input;

function solution() {
  const arr = Array(M).fill(0);

  let str = ""
  const dfs = (number) => {
    if (number === M) {
      str += `${arr.join(" ")}\n`;
      return;
    }
    for (let i = 1; i <= N; i++) {
      const num = arr[number-1] || i;
      if (num <= i) {
        arr[number] = i;
        dfs(number + 1);
      }
    }
  }

  dfs(0);
  console.log(str);
}

solution();