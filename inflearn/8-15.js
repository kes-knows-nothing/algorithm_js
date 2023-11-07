const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const k = Number(input[2]);

function solution(n, m) {
  let checked = new Array(m).fill(false);
  let answer = [];
  let tmp = new Array(m).fill(0);

  function DFS(L) {
    if (L === m) {
      if (
        !answer.includes(
          tmp
            .slice()
            .sort((a, b) => a - b)
            .join(" ")
        )
      ) {
        answer.push(
          tmp
            .slice()
            .sort((a, b) => a - b)
            .join(" ")
        );
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (checked[i]) continue;
        tmp[L] = arr[i];
        checked[i] = true;
        DFS(L + 1);
        checked[i] = false;
      }
    }
  }
  DFS(0);

  return answer;
}

let ans = solution(n, m);
let result = 0;
ans = ans.map((list) =>
  list
    .split(" ")
    .map(Number)
    .reduce((a, b) => a + b)
);

for (let i = 0; i < ans.length; i++) {
  if (ans[i] % 6 === 0) {
    result++;
  }
}

console.log(result);
