import { Queue } from "@/items/queue";
import { describe, expect, it } from "vitest";

describe("Queue", () => {
  // TODO: Can Initialize a queue
  // queue should be empty
  // queue should have a length of 0
  it("Can Initialize a queue", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  // TODO: Can enqueue an item
  // if i enqueue one item in an empty queue,
  // size should be 1,
  // queue should not be empty,
  // peek should return the item
  it("Can enqueue an item", () => {
    const queue = new Queue();
    queue.enqueue(0);
    expect(queue.size()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(0);
  });

  // TODO: Can enqueue multiple items
  // if I can enqueue [1,2,4] items, size should be 3, peek should return 1, isEmpty should be false
  it("Can enqueue multiple items", () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(2);
    queue.enqueue(4);
    expect(queue.size()).toMatchInlineSnapshot(`3`);
    expect(queue.peek()).toMatchInlineSnapshot(`2`);
    expect(queue.isEmpty()).toMatchInlineSnapshot(`false`);
  });

  it("Can peek at the first item", () => {
    // If I enqueue [3,4,1] the peek function should return 3
    const queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(1);
    queue.enqueue(1);
    expect(queue.peek()).toBe(3);
    expect(queue.size()).toBe(4);
  });

  // TODO: Can dequeue an item
  //   if the queue is empty, dequeue should throw an error
  //   if I enqueue [1,2,3] and dequeue, the size should be 2, peek should return 2
  it("Can dequeue an item", () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrowError("Queue is empty");
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toBe(2);
  });

  it("Can dequeue multiple items", () => {
    // If I enqueue [1,2,3,4,5] and dequeue 3 times, the size should be 2 and peek should return 4
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).toBe(0);
    expect(queue.peek()).toBeUndefined();

    expect(() => queue.dequeue()).toThrowError("Queue is empty");
  });

  // Give me a complex queue input that handles all the cases

  it("Can do mix operations", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.size()).toBe(1);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(5);
    expect(queue.size()).toBe(0);
    expect(queue.peek()).toBeUndefined();
    expect(() => queue.dequeue()).toThrowError("Queue is empty");
  });
});
