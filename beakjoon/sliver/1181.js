const [n, ...words] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

let i = words.sort();

let result1 = [...new Set(i)];

function compare(a, b) {
  if (a.length < b.length) {
    return -1;
  } else if (a.length < b.length) {
    return 1;
  }
}

let j = result1.sort(compare);

let answer = "";
j.map((item) => (answer += item + "\n"));

console.log(answer);
