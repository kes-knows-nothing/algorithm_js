const input = require("fs")
.readFileSync("/dev/stdin")
.toString()
.replaceAll("\r", "")
.split(" ");

const [m, n] = input.map(Number);
const arr = Array.from({ length: m }, (_, index) => index + 1);

const solution = () => {
let checked = new Array(m).fill(false);
let tmp = [];
let answer = [];
const DFS = (L) => {
  if (L == n) {
    answer.push(tmp.slice().sort().join(" "));
    return;
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
answer = [...new Set(answer)]
let ans = "";
answer.map(item => ans += item + "\n" )
return ans.trim();
};

console.log(solution());
