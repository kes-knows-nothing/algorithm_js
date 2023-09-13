const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");
let answer = "";
const points = k.split(" ").map(Number);
let points2 = [...new Set(points)].sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < points2.length; i++) {
  myMap.set(points2[i], i)
}

for (x of points) answer += myMap.get(x) + " ";
console.log(answer)
