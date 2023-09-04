const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const line3 = line.split("-").map((item) => item.split("+").map(Number));

let answer = 0;
for (let i = 0; i < line3.length; i++) {
  let item = line3[i].reduce((a, b) => a + b);
  if ((i == 0)) {
    answer += item;
  } else {
    answer -= item;
  }
}

console.log(answer);