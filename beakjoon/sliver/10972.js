const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1];
const list = Array.from({ length: n }, (_, index) => index + 1);
const checked = new Array(n).fill(false);
let come = false;
const solution = () => {
  let tmp = [];
  let answer;
  const DFS = (L) => {
    if (L == n) {
      if (tmp.slice().join(" ") === arr) {
        come = true;
      } else {
        return (answer += tmp.slice().join(" "));
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (checked[i]) continue;
        tmp[L] = list[i];
        checked[i] = true;
        DFS(L + 1);
        checked[i] = false;
      }
    }
  };
  DFS(0);
};
// 다 구할 필요가 없다.
console.log(solution());
