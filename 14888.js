const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `3
10 11 3
0 1 0 1`.toString().trim().split("\n");
const numbers = input[1].split(" ").map(Number);
const opers = input[2].split(" ").map(Number);

function solution() {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  const operationArr = opers;
  // const sequence = Array.from(new Array(200), () => new Array(numbers.length - 1).fill(-1));
  const sequence = new Array(numbers.length - 1).fill(-1)
  const makeStateTree = (location) => {
    if (location === numbers.length - 1) {
      const result = getResult(numbers, sequence);
      if (result > max) {
        max = result;
      }
      if (result < min) {
        min = result
      }
      return;
    }
    for (let i = 0; i < opers.length; i++) {
      if (opers[i] === 0) continue;
      operationArr[i] = operationArr[i] - 1;
      sequence[location] = i;
      makeStateTree(location + 1);
      operationArr[i] = operationArr[i] + 1;
      sequence[location] = -1;
    }
  }
  makeStateTree(0);
  console.log(max ? max : 0);
  console.log(min ? min : 0);
}

solution();

function getResult(numbers, sequence) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const num = numbers[i];

    switch (sequence[i - 1]) {
      case 0:
        result += num;
        break;
      case 1:
        result -= num;
        break;
      case 2:
        result *= num;
        break;
      case 3:

        result = result >= 0 ? Math.floor(result / num) : -Math.floor(-result / num);

        break;
    }
  }
  return result;
}