let fs = require("fs");
let [k, n, ...cubes] = fs
  .readFileSync("example.txt")
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let box = k.reduce((ac, cu) => ac * cu);
let cubeBox = cubes.map((item) => [Math.pow(2, item[0]) ** 3, item[1]]);
let answer = [];

const maxI = (vol, arr) => {
  for (let i = arr[1]; i > 0; i--) {
    if (vol - arr[0] * i >= 0) {
      // 남은 부피와 최대로 사용할 수 있는 큐브 갯수 반환
      let rest = [vol - arr[0] * i, i];
      answer.push(rest);
      return rest;
    }
  }
};

// 큰 큐브 순서대로 넣는다.
for (let i = n - 1; i >= 0; i--) {
  let rest = maxI(box, cubeBox[i]);
  box -= rest[0];
}
