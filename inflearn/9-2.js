const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input.map((i) => i.split(" ").map(Number));
arr.shift();
console.log(n, k, arr);

const solution = (n, arr) => {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = new Array(n + 1).fill(0);
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  const DFS = (v) => {
    if (v === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  };
  ch[1] = 1;
  DFS(1);
  return answer;
};

console.log(solution(n, arr));
