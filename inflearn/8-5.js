const input = require("fs").readFileSync("example.txt").toString().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
arr.unshift(0);
const sum = arr.reduce((a, b) => a + b, 0);
let check = new Array(n + 1).fill(0);
let answer = "NO";
const DFS = (num) => {
  if (num == n + 1) {
    let matched = [];
    for (let i = 1; i <= n; i++) {
      if (check[i] == 1) {
        matched.push(arr[i]);
      }
    }
    if (sum == matched.reduce((a, b) => a + b, 0) * 2) {
      answer = "YES";
      return;
    }

    return;
  } else {
    check[num] = 1;
    DFS(num + 1);
    check[num] = 0;
    DFS(num + 1);
  }
};

DFS(1);
console.log(answer);
