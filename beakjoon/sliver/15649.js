const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
const [n, k] = input.map(Number);
const visited = new Array(n).fill(false);
let output = []
let result ='';
function dfs(cnt) {
  if (cnt === k) {
    result += `${output.join(' ')}\n`
    return;
  }
  for (let i = 0; i < n; i++) {
    if (visited[i] == true) continue;
    visited[i] = true;
    output.push(i + 1);
    dfs(cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(result.trim());