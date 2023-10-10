const input = require("fs").readFileSync("example.txt").toString();
const n = Number(input);
const visited = new Array(n + 1).fill(0);
let ans = [];
const DFS = (num) => {
  if (num === n + 1) {
    let k = [];
    for (let i = 1; i <= n; i++) {
      if (visited[i] == 1) {
        k.push(i);
      }
    }
    ans.push(k);
    return;
  } else {
    visited[num] = 1;
    DFS(num + 1);
    visited[num] = 0;
    DFS(num + 1);
  }
};
DFS(1);
let answer = ""
for (let line of ans) {
  answer += line.join(" ") + "\n" 
}
console.log(answer.trim());
