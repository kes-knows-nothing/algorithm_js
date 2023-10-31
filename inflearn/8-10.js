const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .replaceAll("\r", "")
  .split("\n");

const [m, n] = input[0].split(" ");
const arr = input[1].split(" ").map(Number);

const solution = () => {
  let checked = new Array(m).fill(false);
  let tmp = [];
  let answer = [];
  const DFS = (L) => {
    if (L == n) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < m; i++) {
        if (checked[i]) continue;
        tmp[L] = arr[i];
        checked[i] = true;
        DFS(L + 1);
        checked[i] = false;
      }
    }
  };
  DFS(0);
  return answer.length;
};

console.log(solution());
