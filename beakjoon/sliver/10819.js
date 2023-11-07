const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");
const len = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const solution = () => {
  let checked = new Array(len).fill(false);
  let tmp = [];
  let answer = 0;
  const reduce = (arr) => {
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
      sum += Math.abs(arr[i - 1] - arr[i]);
    }
    return sum;
  };
  const DFS = (L) => {
    if (L == len) {
      answer = Math.max(reduce(tmp), answer);
    } else {
      for (let i = 0; i < len; i++) {
        if (checked[i]) continue;
        tmp[L] = arr[i];
        checked[i] = true;
        DFS(L + 1);
        checked[i] = false;
      }
    }
  };
  DFS(0);
  return answer;
};
console.log(solution());
