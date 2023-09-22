const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .replaceAll("\r", "")
  .split("\n");

const trees = input[1].split(" ").map(Number).sort();
const [n, k] = input[0].split(" ");
let start = 1;
let end = trees[trees.length - 1];
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let tree of trees) {
    if (tree > mid) {
      total += tree - mid;
    }
  }
  if (total <= k) {
    result = mid;
    end = mid - 1;
  } else if (total > k) {
    start = mid + 1;
  }
}

console.log(result);
