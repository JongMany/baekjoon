const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `3
2 2
1 5
13 29
1 20
19 29
171 270`
  .toString()
  .split("\n");
const data = input
  .slice(1)
  .map((el) => el.split(" ").map((el) => parseInt(el)));

/* const solution = [];


for (let i = 0; i < data.length; i++) {
  const [n, m] = data[i];
  if (n === 0 || m === 0) {
    solution.push(0);
    continue;
  }
  let top = 1;
  let bottom = 1;
  for (let i = 0; i < n; i++) {
    top *= m - i;
    bottom *= n - i;
  }
  solution.push(Math.round(top / bottom)); // ? 왜 parseInt는 안되고 round만 되는지...
}

console.log(solution.join("\n")); */

let num = 0;
function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

for (let i = 0; i < data.length; i++) {
  const [N, M] = data[i];

  console.log(Math.round(factorial(M) / (factorial(M - N) * factorial(N))));
}
