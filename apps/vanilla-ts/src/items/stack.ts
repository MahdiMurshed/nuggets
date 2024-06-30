export class Stack {
  top: number;
  items: number[];
  constructor() {
    this.top = -1;
    this.items = [];
  }

  push(item: number) {
    this.items.push(item);
    this.top++;
  }

  peek() {
    return this.items[this.top];
  }

  pop() {
    if (this.top === -1) {
      return;
    }
    const top = this.items.pop();
    this.top--;
    return top;
  }
}
