const fs = require('fs');
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ").map(Number).sort((a,b) => a-b)
let sum = 0;
let answer = 0;
for (let i = 0; i < n; i++) {
    sum += inputArr[i]
    answer += sum
}
console.log(answer)
