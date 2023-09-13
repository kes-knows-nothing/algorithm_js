let fs = require("fs");
let [n, k] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split(" ");

const facto = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

if (facto(k) > n) {
  console.log(-1);
} else if (facto(k) == n) {
  console.log(k - 1);
} else if (facto(k) < n) {
  let rest = (n - facto(k)) % k;
  if (rest == 0) {
    console.log(k - 1);
  } else {
    console.log(k);
  }
}
