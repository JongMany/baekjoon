const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(nums => nums.split(" ").map(Number));
const input = `1 1 1
2 2 2
10 4 6
50 50 50
-1 7 18
-1 -1 -1`.toString().trim().split("\n")
const arr = input.slice(0, input.length - 1).map(nums => nums.split(" ").map(Number));

const map = {}

function fn(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    map[`${a}, ${b}, ${c}`] = 1;
    return 1;
  } else if (a > 20 || b > 20 || c > 20) {
    if (map[`${a}, ${b}, ${c}`]) {
      return map[`${a}, ${b}, ${c}`];
    } else {
      const result = fn(20, 20, 20);
      map[`${a}, ${b}, ${c}`] = result;
      return result;
    }
  } else if (a < b && b < c) {
    if (map[`${a}, ${b}, ${c}`]) {
      return map[`${a}, ${b}, ${c}`];
    } else {
      const result = fn(a, b, c - 1) + fn(a, b - 1, c - 1) - fn(a, b - 1, c);
      map[`${a}, ${b}, ${c}`] = result;
      return result;
    }
  } else {
    if (map[`${a}, ${b}, ${c}`]) {
      return map[`${a}, ${b}, ${c}`];
    } else {
      const result = fn(a - 1, b, c) + fn(a - 1, b - 1, c) + fn(a - 1, b, c - 1) - fn(a - 1, b - 1, c - 1);
      map[`${a}, ${b}, ${c}`] = result;
      return result;
    }
  }
}

function getNumber(a, b, c) {
  const data = map[`${a}, ${b}, ${c}`];
  if (data) {
    return data;
  } else {
    fn(a, b, c);
  }
}

// const item = arr[3]
// fn(item[0], item[1], item[2])
let str = ""
for (const item of arr) {
  fn(item[0], item[1], item[2]);
  str += `w(${item[0]}, ${item[1]}, ${item[2]}) = ${map[`${item[0]}, ${item[1]}, ${item[2]}`]}\n`
}

console.log(str)
