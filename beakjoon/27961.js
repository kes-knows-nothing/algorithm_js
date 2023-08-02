const fs = require('fs');
const n = fs.readFileSync("example.txt").toString().trim()
let count = 1;
let i = 0;

if (n == 0) {
  count = 0;
  console.log(0);
} else {
  while (n > 2 ** i) {
    count++;
    i++;
  }
  console.log(count);
}