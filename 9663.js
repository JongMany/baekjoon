const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim()
const input = 8;
const N = Number(input);

const chessBoard = Array.from(Array(N), () => new Array(N).fill(true)); // 좌측 상단 -> 우측 하단에 대해 배치 여부 판단
function solution() {
  let count = 0;
  // 각 행에는 어차피 하나씩은 들어가 있어야 함
  const isUsed = new Array(N).fill(true); // 열에 대해 배치 가능 여부 판단
  const isUsed2 = Array(2 * N + 1).fill(true); // 좌측 상단 -> 우측 하단에 대해 배치 가능 여부 판단
  const isUsed3 = Array(2 * N + 1).fill(true); // 좌측 상단 -> 우측 하단에 대해 배치 가능 여부 판단

  // number는 행
  const check = (number) => {
    if (number === N) {
      count += 1;
      return;
    }
    for (let i = 0; i < N; i++) { // i는 열
      if (isUsed[i] && isUsed2[number - i + N - 1] && isUsed3[number + i]) { // 조건: 배치 가능할 경우에만
        isUsed[i] = false;
        isUsed2[number - i + N - 1] = false;
        isUsed3[number + i] = false;
        check(number + 1);
        isUsed[i] = true;
        isUsed2[number - i + N - 1] = true;
        isUsed3[number + i] = true;
      }
    }
  }
  check(0);
  console.log(count)
}

solution();