const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = "0".toString().trim();

const number = Number(input);

function fibo(number) {
  if (number <= 0) return 0;
  if (number === 1) return 1;
  return fibo(number - 1) + fibo(number - 2);
}

console.log(fibo(number));