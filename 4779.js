const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number)
const input = `0
1
3
2
12`.toString().trim().split("\n").map(Number)

for (const number of input) {
  const cantor = Math.pow(3, number);
  // cantorNumber(0, cantor, result);
  console.log(cantore("-".repeat(cantor)))
}

function cantore(str){
  if(str.includes('---')) {
    const len = str.length/3
    const splitedArr = []
    for(let i = 0 ; i <= str.length - len ; i += len) {
      splitedArr.push(str.slice(i, i+len))
    }
    splitedArr[0] = cantore(splitedArr[0])
    splitedArr[1] = splitedArr[1].replaceAll("-", " ")
    splitedArr[2] = cantore(splitedArr[2])
    return splitedArr.join("")
  }
  return str
}

function cantorNumber(start, end, result) {
  if ((end - start) === 1) {
    // return [start, end];
    result.push(start);
    return;
  }
  const unit = Number((end - start) / 3);
  cantorNumber(start, start + unit, result);
  cantorNumber(start + unit * 2, end, result);
}
