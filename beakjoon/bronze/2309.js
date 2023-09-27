const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .replaceAll("\r", "")
  .split("\n")
  .map(Number);

const checkhund = (arr) => {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum;
};

function pickTwoNumbers() {
  const numbers = [];
  while (numbers.length < 7) {
    const randomNumber = Math.floor(Math.random() * 9);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  const result = [];

  for (let num of numbers) {
    result.push(input[num]);
  }

  return result;
}

const showResult = () => {
  let result = 0;
  let arr = [];
  while (result != 100) {
    arr = pickTwoNumbers();
    result = checkhund(arr);
  }

  return arr;
};

let answer = showResult().sort((a, b) => a - b);
console.log(answer.join("\n"));
