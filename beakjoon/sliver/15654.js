const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = [
  ...new Set(
    input[1]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  ),
];
const N = arr.length;
const solution = (N, m) => {
  let checked = new Array(N).fill(false);
  let tmp = [];
  let answer = "";
  const DFS = (L) => {
    if (L === m) {
      answer += tmp.slice().join(" ") + "\n";
    } else {
      for (let i = 0; i < N; i++) {
        if (checked[i]) continue;
        tmp[L] = arr[i];
        checked[i] = true;
        DFS(L + 1);
        checked[i] = false;
      }
    }
  };
  DFS(0);
  return answer.trim();
};

console.log(solution(N, m));
