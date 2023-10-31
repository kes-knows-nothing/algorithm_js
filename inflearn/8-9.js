const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .replaceAll("\r", "")
  .split("\n");

const cnt = Number(input[0]);
const coins = input[1].split(" ").map(Number);
const change = Number(input[2]);

const solution = (cnt, coins, change) => {
  let answer = 0;
  let left = change;
  const DFS = (L) => {
    if (left == 0 || L == cnt) {
      return;
    } else {
      answer += Math.floor(left / coins[cnt - L - 1]);
      left = left % (change / coins[cnt - L - 1]);
      DFS(L + 1);
    }
  };

  DFS(0);
  return answer;
};

console.log(solution(cnt, coins, change));
