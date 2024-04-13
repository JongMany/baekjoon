const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = `5
AAA
ABBA
ABABA
ABCA
PALINDROME`.toString().trim().split("\n");

let times = 0;

function isPalindrome(s) {
  times = 0;
  return recursion(s, 0, s.length - 1)
}

function recursion(s, l, r) {
  times += 1;
  if (l >= r) return 1;
  else if (s[l] !== s[r]) return 0;
  else return recursion(s, l + 1, r - 1);
}



const words = input.slice(1)
for(const word of words){
  console.log(isPalindrome(word), times);
}