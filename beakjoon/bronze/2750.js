const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

arr.sort((a, b) => a - b).map((i) => (
  console.log(i)
));
