import { partition, performSort } from "@/items/quick-sort";
import { describe, expect, it } from "vitest";
const testArrays = [
  [],
  [42],
  [1, 1, 1, 1],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [1, 5, 2, 6, 1, 9, 11, 12],
  [3, -1, 0, -5, 2, -4],
  [4, 2, 4, 1, 2, 1],
  [5, 1, 1, 2, 0, 0],
  Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000)),
];

const partitionTestCases = [
  {
    arr: [4, 5, 3, 7, 2],
    low: 0,
    high: 4,
    expectedPivotIndex: 2,
    expectedArray: [3, 2, 4, 7, 5],
  },
  {
    arr: [1, 2, 3, 4, 5],
    low: 0,
    high: 4,
    expectedPivotIndex: 0,
    expectedArray: [1, 2, 3, 4, 5],
  },
  {
    arr: [5, 4, 3, 2, 1],
    low: 0,
    high: 4,
    expectedPivotIndex: 4,
    expectedArray: [1, 4, 3, 2, 5],
  },
  {
    arr: [4, 3, 2, 1, 5],
    low: 1,
    high: 3,
    expectedPivotIndex: 3,
    expectedArray: [4, 1, 2, 3, 5],
  },
  {
    arr: [2, 1, 3],
    low: 0,
    high: 2,
    expectedPivotIndex: 1,
    expectedArray: [1, 2, 3],
  },
];

describe("Sorting Function", () => {
  describe("Partition works fine", () => {
    partitionTestCases.forEach(({ arr, low, high, expectedPivotIndex }) => {
      it(`It partitions [${arr}] between ${low} and ${high} and returns the pivot index ${expectedPivotIndex}`, () => {
        const idx = partition(arr, low, high);
        expect(idx).toBe(expectedPivotIndex);
      });
    });
  });
  describe("Quick Sort works fine", () => {
    testArrays.map((array) => {
      it(`It can sort [${array}] ...`, () => {
        const arr = array.slice();
        const toMatch = arr.slice().sort((a, b) => a - b);
        performSort(arr);
        expect(arr).toEqual(toMatch);
      });
    });
  });
});
