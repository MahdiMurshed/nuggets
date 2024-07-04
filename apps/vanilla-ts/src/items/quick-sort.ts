function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    // Find the first element greater than pivot
    while (i <= high && arr[i] <= pivot) {
      i++;
    }

    // Find the first element smaller than or equal to pivot
    while (j >= low && arr[j] > pivot) {
      j--;
    }

    if (i < j) {
      swap(arr, i, j);
    }
  }

  swap(arr, low, j);
  return j;
}

function quickSort(arr: number[], low: number, high: number) {
  if (low < high) {
    const partitionIndex = partition(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

export function performSort(arr: number[]) {
  quickSort(arr, 0, arr.length - 1);
}
