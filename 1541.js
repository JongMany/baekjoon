const fs = require("fs");;
// const input = fs.readFileSync("/dev/stdin").toString().trim();

const input = `00009-00009`.toString().trim();

const ops = input.split("-");
const numbers = [];
for(const i of ops) {
  let result;
  if(i.includes("+")){
    result = i.split("+").reduce((acc, cur)=>{
      acc += Number(cur);
      return acc;
    }, 0);
  } else {
    result = Number(i);
  }
  numbers.push(result);
}
const result = numbers.slice(1).reduce((acc, cur) => {
  acc -= Number(cur);
  return acc;
}, numbers[0])

console.log(result)