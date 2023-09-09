const n = require("fs").readFileSync("/dev/stdin").toString().trim();
const list = n.split("").map((i) => Number(i));

list.sort((a, b) => b - a);
let answer = list.join("")
console.log(Number(answer))