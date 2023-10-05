const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n")
  .slice(1)
  .map(Number);

let DP = new Array(8).fill(0);
DP[1] = 1;
DP[2] = 2;
DP[3] = 4;
for (let i = 4; i <= 10; i++) {
  DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
}

let answer = [];
for (let i of input) {
  answer.push(DP[i]);
}
console.log(answer.join("\n"))