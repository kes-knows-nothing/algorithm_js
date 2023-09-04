const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const arr1 = arr.map((item) => item.split(" "));

const compare = (a, b) => {
  if (Number(a[0]) < Number(b[0])) {
    return -1;
  }
};

let answer = "";
for (list of arr1.sort(compare)) {
  answer += list[0] + " " + list[1] + "\n";
}

console.log(answer)
