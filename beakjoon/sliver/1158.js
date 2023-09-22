const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .replaceAll("\r", "")
  .split(" ");

let answer = [];
let n = input[0];
let k = input[1];

let arr = [...new Array(parseInt(n))].map((_, i) => i + 1);
let count = 1;

while (answer.length != n) {
  if (count % k != 0) {
    let item = arr.shift();
    arr.push(item);
    count += 1;
  } else if (count % k == 0) {
    let item1 = arr.shift();
    answer.push(item1);
    count += 1;
  }
}

const ans = "<" + answer.join(", ") + ">";

console.log(ans);
