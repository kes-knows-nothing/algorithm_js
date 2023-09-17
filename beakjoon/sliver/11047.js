const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [num, k] = n.split(" ").map(Number);
const coins = arr
  .map((i) => Number(i.replace("\r", "").trim()))
  .sort((a, b) => b - a);

let count = 0;

for (i of coins) {
  count += Math.floor(k / i);
  k %= i;
}


console.log(count)