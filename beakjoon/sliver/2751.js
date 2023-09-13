const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = "";
const sorted = arr.slice(1).sort((a, b) => a - b);

for (let i = 0; i < arr[0]; i++) {
    answer += sorted[i] + "\n";
}

console.log(answer)