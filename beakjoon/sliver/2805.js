const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .replaceAll("\r", "")
  .split("\n");

const [n, k] = input[0].split(" ");
const trees = input[1].split(" ").map(Number).sort();
let start = 0;
let end = trees[trees.length - 1];
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0;
  trees.forEach((element) => {
    let rest = element - mid;
    if (rest > 0) total += rest;
  });
  if (total < k) {
    end = mid - 1;
  } else if (total >= k) {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
