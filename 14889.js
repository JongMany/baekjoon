const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `6
0 1 2 3 4 5
1 0 2 3 4 5
1 2 0 3 4 5
1 2 3 0 4 5
1 2 3 4 0 5
1 2 3 4 5 0`.split("\n");
const N = Number(input[0]);
const numbers = input.slice(1)
    .map((str) => str.split(" ").map(Number));

function solution() {
  let min = Number.MAX_SAFE_INTEGER;
  const team1 = [];
  const isInTeams = Array(N).fill(false);
  const all = Array(N).fill().map((_, idx) => idx);

  const makeTeams = (number) => {
    if (number === parseInt(N / 2)) {
      const team2 = all.filter((_, idx) => !team1.includes(idx));
      let team1Total = getTotal(team1);
      let team2Total = getTotal(team2);
      const gap = Math.abs(team1Total - team2Total);
      min = min > gap ? gap : min;

      return;
    }
    for (let i = 0; i < N; i++) {
      const item = team1[number - 1] || 0;
      if (!isInTeams[i] && item <= i) {
        isInTeams[i] = true;
        team1[number] = i;
        makeTeams(number + 1);
        isInTeams[i] = false;
      }

    }

  };
  makeTeams(0);
  console.log(min)
}

solution()

function getTotal(team) {
  let sum = 0;
  for (let i = 0; i < team.length; i++) {
    for (let j = 0; j < team.length; j++) {
      if (i === j) continue;
      sum += numbers[team[i]][team[j]];
    }
  }
  return sum;
}