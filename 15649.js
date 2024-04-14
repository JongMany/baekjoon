const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = [4, 4]

function solution() {
  const [N, M] = input.map(Number);
  const arr = Array(M).fill(0); // 수열을 담을 배열
  const isUsed = Array(N).fill(false); // 특정 수가 쓰였는지 true, false로 담을 배
  function check_state(number) {
    if(number === M) {
      console.log(arr.join(" "))
      return;
    }
    for(let i=1; i<=N; i++) {
      if(!isUsed[i-1]) {
        arr[number] = i;
        isUsed[i-1] = 1;
        check_state(number+1);
        isUsed[i-1] = 0;
      }
    }
  }
  check_state(0);
}

solution();