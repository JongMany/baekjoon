const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const input = `12 5
append
attendance
appearance
swim
swift
swift
swift
mouse
wallet
mouse
ice
age
`.toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const rememberWordMap = new Map();
const words = input.slice(1);

for (const word of words) {
  if (word.length < M) {
    continue;
  }
  rememberWordMap.set(word, (rememberWordMap.get(word) || 0) + 1)
}


const entries = [...rememberWordMap.entries()]

// entries.sort((a, b) => {
//   if (b[1] - a[1] === 0) {
//     if (b[0].length - a[0].length === 0) {
//       if (a[0] > b[0]) return 1;
//       else return -1;
//     } else {
//       return b[0].length - a[0].length;
//     }
//   } else {
//     return b[1] - a[1];
//   }
// })

entries.sort((a, b) => {
  if (a[0] > b[0]) return 1;
  else return -1;
}).sort((a, b) => b[0].length - a[0].length).sort((a, b) => b[1] - a[1])


entries.forEach((el) => {
  console.log(el[0]);
})

const result = entries.sort((a, b) => {
  if (a[0] > b[0]) return 1;
  else return -1;
}).sort((a, b) => b[0].length - a[0].length).sort((a, b) => b[1] - a[1]).map(v=>v[0]).join("\n");
console.log(result)

