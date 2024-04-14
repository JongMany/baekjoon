const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const input = [7, 3];
const [N, M] = input;

function solution() {
  const solArr = Array(M).fill(0);
  const isUsed = Array(N).fill(false);

  let str = ``;
  const dfs = (number) => {
    if (M === number) {
      str += `${solArr.join((" "))}\n`;
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (!isUsed[i - 1] || solArr[number - 1] <= i) {
        solArr[number] = i;
        isUsed[i - 1] = true;
        dfs(number + 1);
        isUsed[i - 1] = false;
      }

    }
  }

  dfs(0);
  console.log(str)
}

solution()
