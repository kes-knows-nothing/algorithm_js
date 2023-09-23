const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .replaceAll("\r", "")
  .split("\n");

const n = Number(input[0]);
const grape = input.slice(1).map(Number);
grape.unshift(0);

let DP = new Array(n + 1).fill(0);
DP[0] = 0;
DP[1] = grape[1];
DP[2] = grape[1] + grape[2];
DP[3] = Math.max(grape[1] + grape[3], grape[2] + grape[3], grape[1] + grape[2]);

for (let i = 4; i <= n; i++) {
  DP[i] = Math.max(
    grape[i] + grape[i - 1] + DP[i - 3],
    grape[i - 1] + grape[i - 2] + DP[i - 4],
    grape[i] + DP[i - 2]
  );
}

console.log(DP[n]);
