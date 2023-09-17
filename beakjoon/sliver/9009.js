let fs = require('fs');
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replaceAll("\r", "")
  .split("\n")
  .map(Number)
  .slice(1);

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  }

  let fibPrev = 0;
  let fibCurrent = 1;

  for (let i = 2; i <= n; i++) {
    let fibNext = fibPrev + fibCurrent;
    fibPrev = fibCurrent;
    fibCurrent = fibNext;
  }
  return fibCurrent;
}
let answer = [];
let line = "";
const maxNum = (k) => {
  let n = 0;
  while (k >= fibonacci(n)) {
    n++;
  }

  if (fibonacci(n - 1) != k) {
    line = " " + fibonacci(n - 1) + line;
    k = k - fibonacci(n - 1);
    n = 0;
    maxNum(k);
  } else if (fibonacci(n - 1) == k) {
    line = fibonacci(n - 1) + line;
    answer.push(line);
    line = "";
  }
};

for (let num of input) {
  maxNum(num);
}

let answer2 = "";

for (let i = 0; i < answer.length; i++) {
 answer2 += answer[i] + "\n"
}

console.log(answer2)


