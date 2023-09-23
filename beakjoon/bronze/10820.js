const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const check = (str) => {
  const arr = str.split("");
  let empty = arr.filter((i) => i != " ");
  let emptylen = arr.length - empty.length;
  let num = empty.filter((i) => isNaN(i) != false);
  let numlen = empty.length - num.length;
  let lower = num.filter((i) => i.toLowerCase() != i);
  let lowerlen = num.length - lower.length;
  let upperlen = lower.length
  let ans = lowerlen + " " + upperlen + " " + numlen + " " + emptylen
  return ans
};
let answer = ""
for (let str of input) {
  answer += check(str) + "\n"
}
console.log(answer.trim())
