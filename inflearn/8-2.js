const input = require("fs").readFileSync("example.txt").toString();

const n = Number(input);

let ans = "";

const two = (num) => {
  let k = Math.floor(num / 2);
  if (k > 0) {
    ans += num % 2;
    two(k);
  } else {
    ans += num % 2;
    return;
  }
};
two(n);
console.log(ans);
