// Breadth-First Search

class Queue {
  constructor() {
    this.item = {};
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
    return this.items[this.headIndex];

  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

function bfs(graph, start, visited) {
  queue = new Queue();
  queue = enqueue(start);
  visited[start] = true;
  while (queue.getLength() != 0) {
    v = queue.dequeue();
    console.log(v);
    for (i of graph[v]) {
      if (!visited[i]) {
        queue.enqueue(i);
        visited[i] = ture;
      }
    }
  }
}
