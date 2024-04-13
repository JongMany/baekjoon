const fs = require('fs')
// const input = fs.readFileSync("/dev/stdin").toString().trim()

// const number = Number(input);

const number = 27;

const arr = Array.from(Array(number), () => Array(number).fill(" "))

function drawPattern(n, startRowIdx, startColIdx) {
  if (n === 3) {
    // arr[startRowIdx + 1][startColIdx + 1] = " "
    arr[startRowIdx][startColIdx] = "*"
    arr[startRowIdx+1][startColIdx] = "*"
    arr[startRowIdx+2][startColIdx] = "*"
    arr[startRowIdx][startColIdx+1] = "*"
    arr[startRowIdx][startColIdx+2] = "*"
    arr[startRowIdx+1][startColIdx+2] = "*"
    arr[startRowIdx+2][startColIdx+1``] = "*"
    arr[startRowIdx+2][startColIdx+2] = "*"
    return;
  }


  drawPattern(n / 3, startRowIdx, startColIdx);
  drawPattern(n / 3, startRowIdx + n / 3, startColIdx);
  drawPattern(n / 3, startRowIdx + (n / 3) * 2, startColIdx);
  drawPattern(n / 3, startRowIdx, startColIdx + n / 3);
  drawPattern(n / 3, startRowIdx, startColIdx + (n / 3) * 2);
  drawPattern(n / 3, startRowIdx + (n / 3), startColIdx + (n / 3) * 2);
  drawPattern(n / 3, startRowIdx + (n / 3) * 2, startColIdx + (n / 3));
  drawPattern(n / 3, startRowIdx + (n / 3) * 2, startColIdx + (n / 3) * 2);
}

drawPattern(number, 0, 0)
console.log(arr.join("\n").replaceAll(",", ""))