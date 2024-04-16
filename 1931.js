const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14
`.toString().trim().split("\n");

// const timetable = input.slice(1).map(item => item.split(" ").map(Number));

// let max = 0;
// let temp = 0;
// for (let i = 0; i < timetable.length; i++) {
//   const [start, end] = timetable[i];
//   temp += 1;
//   findTable(end)
//   if (temp > max) {
//     max = temp;
//   }
//   temp = 0;
// }
// console.log(max);
//
// function findTable(endTime) {
//   const canUse = timetable.filter((time) => time[0] >= endTime).sort((a, b) => a[0] - b[0])[0];
//   if (!canUse) return;
//   findTable(canUse[1]);
//   temp += 1;
// }

const timetable = input.slice(1).map(item => item.split(" ").map(Number)).sort((a, b) => a[1] - b[1] || a[0] - b[0]);
let [time, answer] = [0, 0]
for (let [s, e] of timetable)
  if (time <= s) {
    time = e
    answer++
  }
console.log(answer)