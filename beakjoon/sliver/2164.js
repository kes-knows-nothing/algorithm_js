const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
const n = Number(input);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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
      newNode.prev = this.tail;
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

console.log(card(n))