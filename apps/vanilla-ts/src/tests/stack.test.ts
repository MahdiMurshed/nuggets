import { Stack } from "@/items/stack";
import { beforeEach, describe, expect, it } from "vitest";

describe("Stack", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  describe("Initialization", () => {
    it("Can initialize an empty stack", () => {
      expect(stack.top).toBe(-1);
      expect(stack.items).toEqual([]);
    });
  });

  describe("Pushing items", () => {
    it("Can push item to the stack", () => {
      stack.push(0);
      expect(stack.top).toBe(0);
      expect(stack.items).toEqual([0]);
    });
  });

  describe("Peeking items", () => {
    it("Can peek the top item of the stack", () => {
      stack.push(0);
      expect(stack.peek()).toBe(0);
    });

    it("When stack is empty, peek() returns undefined", () => {
      expect(stack.peek()).toBeUndefined();
    });
  });

  describe("Popping items", () => {
    beforeEach(() => {
      stack.push(0);
    });

    it("Returns the top item", () => {
      expect(stack.pop()).toBe(0);
    });

    it("Removes the top item", () => {
      stack.pop();
      expect(stack.top).toBe(-1);
      expect(stack.items).toEqual([]);
    });

    it("When stack is empty, pop() returns undefined", () => {
      stack.pop(); // Empty the stack first
      expect(stack.pop()).toBeUndefined();
    });
  });
});
