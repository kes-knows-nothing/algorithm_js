const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .replaceAll("\r", "")
  .trim();

const check = (num) => {
  const len = String(num).length;

  if (len == 1) {
    return console.log(num);
  } else {
    let count = 0;
    for (let i = 1; i < len; i++) {
      count += 9 * Math.pow(10, i - 1) * i;
    }
    count += (num - Math.pow(10, len - 1) + 1) * len;
    return console.log(count);
  }
};

check(input);