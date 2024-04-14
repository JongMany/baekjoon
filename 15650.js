const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const input = [4, 2]
function solution(){
  const [N, M] = input;
  const array = Array(M).fill(0);
  const isUsed = Array(N).fill(false);

  const dfs = (number) => {
    if(number >= M) {
      console.log(array.join(" "))
      return;
    }
    for(let i=1; i<=N; i++) {
      const lastInput = array[number-1] || 0;
      if(!isUsed[i-1] && i >= lastInput) {
        array[number] = i;
        isUsed[i-1] = true;
        dfs(number+1);
        isUsed[i-1] = false;
      }
    }
  }
  dfs(0);

}
solution();