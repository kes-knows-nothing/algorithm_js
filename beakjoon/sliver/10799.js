let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().trim().split("");

let stack = [];
let count = 0;

for (let i = 0; i < line.length; i++) {
  if (line[i] == "(") {
    stack.push(line[i]);
  } else if (line[i] == ")") {
    if (line[i - 1] == "(") {
      stack.pop();
      count += stack.length;
    } else if (line[i - 1] == ")") {
      stack.pop();
      count += 1;
    }
  }
}

console.log(count)