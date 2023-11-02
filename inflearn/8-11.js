const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .replaceAll("\r", "");

const n = Number(input);

const solution = () => {
  let result = n;
  const DFS = (L) => {
    if (L == 1) {
      return;
    } else {
      result *= L - 1;
      DFS(L - 1);
    }
  };
  DFS(n);
  return result;
};

console.log(solution());
