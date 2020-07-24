import { swap, SortData, SortUtilities, SortCounter } from "./utility";

let counter: SortCounter;
export async function quickSort(
  arr: SortData[],
  utils: SortUtilities,

  isStart: boolean = true,

  left: number = 0,
  right: number = arr.length - 1,
) {
  if (left >= right) return;
  counter = isStart ? {
    swaps: 0,
    compares: 0,
  } : counter;

  const pivot = arr[Math.floor((right + left) / 2)]?.value;
  const pi = await partition(arr, utils, left, right, pivot);
  await quickSort(arr, utils, false, left, pi - 1);
  await quickSort(arr, utils, false, pi, right);

  return [arr, counter];
}

const partition = async (
  arr: SortData[],
  utils: SortUtilities,

  left: number,
  right: number,
  pivot: number
) => {
  while (left <= right) {
    while (arr[left].value < pivot) {
      left++;
    }
    while (arr[right].value > pivot) {
      right--;
    }
    if (left <= right) {
      await swap(arr, utils, left, right);
      counter.swaps++;
      left++;
      right--;
    }
    counter.compares++;
  }
  return left;
};
