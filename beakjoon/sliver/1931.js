const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");
const table = input.map((i) => i.split(" "));
let numTbe = table.map((i) => i.map(Number));

const compare = (a, b) => {
  if (a[1] != b[1]) {
    return a[1] - b[1];
  } else return a[0] - b[0]
};
numTbe.sort(compare);

let answer = [];
for (let i = 0; i < n; i++) {
  if (i == 0) {
    answer.push(numTbe[0]);
  } else {
    if (answer[answer.length - 1][1] <= numTbe[i][0]) {
      answer.push(numTbe[i]);
    }
  }
}

console.log(answer.length);
