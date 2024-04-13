const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim()
const input = "0".toString().trim()

const number = Number(input);

function factorial(number) {
  if(number === 1 || number === 0) return 1;
  return number * factorial(number - 1);
}

console.log(factorial(number));