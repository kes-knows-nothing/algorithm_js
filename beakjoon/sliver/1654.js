const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .replaceAll("\r", "")
  .split("\n");

const n = input[0].split(" ").map(Number)[0];
const k = input[0].split(" ").map(Number)[1];
const arr = [...input].slice(1).map(Number);

let start = 1;
let end = arr.sort()[arr.length - 1];
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = arr
    .map((line) => parseInt(line / mid))
    .reduce((a, b) => a + b, 0);

  if (total < k) {
    end = mid - 1;
  } else if (total >= k) {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);


const input = require("fs").readFileSync('example.txt').toString().trim().split('\n');

const [n, k] = input.shift().split(' ').map((a) => +a);


	const lines = input.map((a) => +a).sort();
	let max = Math.max(...lines);
	let min = 1;

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  let howManyPieces = lines
    .map((line) => parseInt(line / mid))
    .reduce((a, b) => a + b, 0);
  if (howManyPieces >= k) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(max);
