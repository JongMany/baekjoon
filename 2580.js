const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `0 0 0 0 0 0 0 0 9
0 0 0 0 0 0 0 0 8
0 0 0 0 0 0 0 0 7
0 0 0 0 0 0 0 0 6
0 0 0 0 0 0 0 0 5
0 0 0 0 0 0 0 0 4
0 0 0 0 0 0 0 0 3
0 0 0 0 0 0 0 0 2
0 0 0 0 0 0 0 0 1`.split("\n")

const board = input.map(row => row.split(" ").map(Number));

function solution() {
  const zeros = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) {
        zeros.push([i, j]);
      }
    }
  }

  function dfs(now) {
    if (now === zeros.length) {
      console.log(board.map(row => row.join(" ")).join("\n"))
      process.exit();
    } else {
      const [row, col] = zeros[now];
      // 1부터 9까지 숫자를 하나씩 넣어보는 것
      for (let i = 1; i < 10; i++) {
        const number = i;
        if (check(row, col, number)) {
          board[row][col] = number;
          dfs(now + 1);
          board[row][col] = 0;
        }
      }
    }

  }


  dfs(0);

  function check(row, col, number) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === number) return false;
    }
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === number) return false;
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === number) return false;
      }
    }
    return true;
  }
}

solution();