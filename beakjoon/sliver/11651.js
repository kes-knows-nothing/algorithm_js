const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const ar = arr.map((i) => i.split(" ").map(Number));

function compare(a, b) {
  if (a[1] != b[1]) {
    return a[1] - b[1];
  } else if (a[1] == b[1]) {
    return a[0] - b[0];
  }
}

const sorted = ar.sort(compare);

let answer = "";
for (point of sorted) {
  answer += point[0] + " " + point[1] + "\n";
}

console.log(answer);