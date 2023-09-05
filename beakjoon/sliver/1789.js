const n = require("fs").readFileSync("/dev/stdin").toString().trim();
let sum = 0;
let current = 0;
while (sum <= n) {
  current += 1;
  sum += current;
}

console.log(current - 1);
