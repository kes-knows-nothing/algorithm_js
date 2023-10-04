const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");
console.log(input);
let dx = [-2, -2, -1, -1, 1, 1, 2, 2];
let dy = [-1, 1, -2, 2, -2, 2, -1, 1];

let testCases = Number(input[0]);

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.item[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}
let line = 1;

while (testCases--) {
  let l = Number(input[line]);
  let [x, y] = input[line + 1].split(" ").map(Number);
  let [targetX, targetY] = input[line + 2].split(" ").map(Number);
  let visited = [];
  for (let i = 0; i < l; i++) visited.push(new Array(l).fill(0));
  let queue = new Queue();
  queue.enqueue([x, y]);
  visited[x][y] = 1;
  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    x = cur[0];
    y = cur[1];
    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= l || ny < 0 || ny < 0) continue;
      if (visited[nx][ny] == 0) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
  line += 3;
  console.log(visited[targetX][targetY] - 1);
}
