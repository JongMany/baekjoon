const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim();

// const number = Number(input);
const number = 3;


let times = 0;
let result = ``;
function hanoi(number, src, temp, dest) {
  times += 1;
  if (number === 1) {
    result += `${src} ${dest}\n`
  } else {
    // n-1개를 임시거처로 옮기기
    hanoi(number-1, src, dest, temp)
    // 가장 큰 판을 이동시키기
    result += `${src} ${dest}\n`
    // n-1개를 목적지로 옮기기
    hanoi(number-1, temp, src, dest)
  }
}
hanoi(number, 1, 2, 3);
console.log(times);
console.log(result.trim())
