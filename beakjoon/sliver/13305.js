// 다음 도시가 가격이 더 비싸면 이전 도시에서 다음 도시에서 다다음 도시까지 가는
// 데까 미리 주유하고 가면 됨
// 싸면 다음 도시까지만 가는 거를 채우면 됨지
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const n = Number(input[0]);
const newInput = input.map((i) => i.split(" ").map(Number));
let dist = newInput[1];
let cost = newInput[2];
let minCost = cost[0];

for (let i = 0; i < n; i++) {
  minCost = Math.min(cost[i], minCost);
  cost[i] = minCost;
}

let answer = BigInt(0);

for (let i = 0; i < n - 1; i++) {
  answer += BigInt(dist[i]) * BigInt(cost[i]);
}

console.log(String(answer));
