export class Queue {
  private items: number[];
  constructor() {
    this.items = [];
  }
  enqueue(item: number) {
    this.items.push(item);
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  peek() {
    return this.items[0];
  }
}
