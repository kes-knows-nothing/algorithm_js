const [N, M] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .replaceAll("\r", "")
  .split(" ")
  .map(Number);

const solution = (n, m) => {
  let answer = [];
  let tmp = new Array(m).fill(0);
  const DFS = (L) => {
    if (L == m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  };
  DFS(0);
  return answer
};

console.log(solution(N, M));
