const input = require("fs").readFileSync("example.txt").toString();
const n = Number(input);
let ans = [];
const count = (num) => {
  if (num <= 0) {
    return;
  }
  ans.unshift(num);
  count(--num);
};
//  강의 정답
count(n);
let answer = ans.join(" ");
console.log(answer);

function solution(n) {
  function DFS(L) {
    if (L == 0) {
      return;
    }
    DFS(L - 1);
    console.log(L);
  }
}
