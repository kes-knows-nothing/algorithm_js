const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .replaceAll("\r", "")
  .split("\n");

const n = Number(input[0]);
const price = input[1].split(" ").map(Number);
price.unshift(0);

let DP = new Array(n + 1).fill(0);
DP[0] = 0;
DP[1] = Number(price[1]);

for (let i = 2; i <= n; i++) {
  let findmax = [];
  for (let j = 1; j < i; j++) {
    findmax.push(DP[i - j] + price[j]);
  }
  findmax.push(price[i]);
  DP[i] = Math.max(...findmax);
}
console.log(DP[n]);
