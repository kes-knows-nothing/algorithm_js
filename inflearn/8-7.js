const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .replaceAll("\r", "")
  .split("\n");
const [m, n] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((i) => i.split(" ").map(Number));
const score = [];
const time = [];
for ([s, t] of arr) {
  score.push(s);
  time.push(t);
}

function solution(limit, s, t) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(L, scoreSum, timeSum) {
    if (timeSum > limit) return;
    if (L == m) {
      answer = Math.max(answer, scoreSum);
    } else {
      DFS(L + 1, scoreSum + s[L], timeSum + t[L]);
      DFS(L + 1, scoreSum, timeSum);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

console.log(solution(n, score, time));
