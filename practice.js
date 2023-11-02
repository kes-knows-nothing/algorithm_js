const input = require("fs").readFileSync("example.txt").toString();
const n = Number(input);

console.time("test");
const cards = [];
for (let i = 1; i <= n; i++) {
  cards.push(i);
}

while (cards.length != 1) {
  cards.shift();
  let fN = cards.shift();
  console.log(`뒤로갈 카드는 ${fN}`);
  cards.push(fN);
  console.log(`현재 덱의 상태는 ${cards}`);
}

console.timeEnd("test");

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.size++;
    return newNode;
  }
  getHead() {
    return this.head.value;
  }
  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }
  getSize() {
    return this.size;
  }
}

function card(num) {
  const cards = new LinkedList();
  for (let i = 1; i <= num; i++) {
    cards.add(i);
  }

  while (cards.getSize() != 1) {
    cards.removeHead();
    cards.add(cards.getHead());
    cards.removeHead();
  }
  return cards.getHead();
}
console.log(card(n));
