const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split(" ")
  .map(Number);

const [n, m] = input;

const solution = (n, m) => {
  let answer = "";
  let tmp = [];
  const DFS = (L) => {
    if (L === m) {
      answer +=
        tmp
          .slice()
          .sort((a, b) => a - b)
          .join(" ") + "\n";
    } else {
      for (let i = 0; i < n; i++) {
        if (tmp[L - 1] && tmp[L - 1] > i + 1) continue;
        tmp[L] = i + 1;
        DFS(L + 1);
      }
    }
  };
  DFS(0);
  return answer.trim();
};

console.log(solution(n, m));
