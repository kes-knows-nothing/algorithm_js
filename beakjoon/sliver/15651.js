const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [n, k] = input;

const solution = (n, k) => {
  let tmp = [];
  let answer = "";
  const DFS = (L) => {
    if (L == k) {
      answer += tmp.slice().join(" ") + "\n";
    } else {
      for (let i = 0; i < n; i++) {
        tmp[L] = i + 1;
        DFS(L + 1);
      }
    }
  };
  DFS(0);
  return answer.trim();
};

console.log(solution(n, k));
