const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`.split("\n");

const [N, K] = input[0].split(" ");
const coins = input.slice(1).map(Number);

let money = K;
let cnt = 0;
for (let i=coins.length-1; i>=0; i--) {
  const coin = coins[i];
  while (true) {
    if (money >= coin) {
      money -= coin;
      cnt++;
    } else {
      break;
    }
  }
}
console.log(cnt)