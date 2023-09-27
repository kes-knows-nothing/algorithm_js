const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

const arr = input[1].split(" ").map(Number);
arr.unshift(0);

const DP = new Array(n + 1).fill(0);

let compare = arr[1];

for (let i = 2; i <= n; i++) {
  if (arr[i] > compare) {
    if (i == 2) {
      DP[2] = 2;
    } else if (i > 2) {
      DP[i] = DP[i - 1] + 1;
      compare = arr[i];
    }
  } else {
    DP[i] = DP[i - 1];
  }
}

console.log(DP[n]);
