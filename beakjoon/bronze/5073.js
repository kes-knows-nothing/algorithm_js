const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");
const stack = [];
const answer = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] === "top") {
    if (stack.length === 0) {
      answer.push(-1);
    } else answer.push(stack[stack.length - 1]);
  } else if (input[i] === "size") {
    answer.push(stack.length);
  } else if (input[i] === "empty") {
    if (stack.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  } else if (input[i] === "pop") {
    if (stack.length === 0) {
      answer.push(-1);
    } else {
      answer.push(stack.pop());
    }
  } else stack.push(input[i].substring(5));
}

console.log(answer.join("\n"))
