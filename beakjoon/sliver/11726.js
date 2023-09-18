const input = require("fs").readFileSync("/dev/stdin").toString();

const num = Number(input);

const DP = new Array(num + 1).fill(0);
DP[0] = 1;
DP[1] = 1;
DP[2] = 2;

for (let i = 2; i <= num; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2]) % 10007
}

console.log(DP[num]);