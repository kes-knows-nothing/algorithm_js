const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sorted = arr.sort((a, b) => a - b);
sorted.map((a) => (
  console.log(a)
))
