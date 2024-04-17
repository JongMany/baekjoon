const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
const input = 5;
const num = Number(input);

const map = {
  1: 1,
  2: 1,
}
let cnt = 0
const fibo = (n) => {
  for(let i=3; i<=n; i++) {
    cnt++;
    map[i] = map[i-1] + map[i-2]
  }
}
fibo(num)
console.log(map[num], cnt);