const fs = require("fs");
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.trim().split(" ").map(Number);
const sortArr = arr.sort((a, b) => a - b);
let answer = [];
let count = 0;
let sum = 0;

for (let i = 1; i <= arr.length; i++) {
  if (i % 2 === 1) {
    answer.push(sortArr[count]);
  } else {
    answer.push(sortArr[arr.length - count - 1]);
    count++;
  }
}
console.log(answer);

for (let i = 0; i < arr.length - 1; i++) {
  sum += Math.abs(answer[i] - answer[i + 1]);
  console.log(`지금 sum의 값` + sum);
}

console.log(sum);

