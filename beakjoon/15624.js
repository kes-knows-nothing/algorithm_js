const n = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = BigInt(n);

let d = new Array(1000000).fill(0);

function fibo(i) {
  if (i === 0) {
    return 0;
  }

  if (i === 1) {
    d[1] = 1;
    return 1;
  }

  if (d[i] !== 0) {
    return d[i];
  }
  d[i] = fibo(i - 1) + fibo(i - 2);
  return d[i];
}

let answer = fibo(num) % 1000000007;

console.log(answer);