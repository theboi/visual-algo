import { swap, SortData, SortUtilities, SortCounter } from "./utility";

let counter: SortCounter;
export async function quickSort(
  arr: SortData[],
  utils: SortUtilities,
  isStart: boolean = true,

  high: number = arr.length - 1,
  low: number = 0
) {
  if (low >= high) return;
  counter = isStart ? {
    swaps: 0,
    compares: 0,
  } : counter;

  const pivot = arr[Math.floor((high + low) / 2)]?.value;
  const pi = await partition(arr, utils, low, high, pivot);
  await quickSort(arr, utils, false, pi - 1, low);
  await quickSort(arr, utils, false, high, pi);

  return [arr, counter];
}

const partition = async (
  arr: SortData[],
  utils: SortUtilities,

  low: number,
  high: number,
  pivot: number
) => {
  while (low <= high) {
    while (arr[low].value < pivot) {
      low++;
    }
    while (arr[high].value > pivot) {
      high--;
    }
    if (low <= high) {
      await swap(arr, utils, low, high);
      counter.swaps++;
      low++;
      high--;
    }
    counter.compares++;
  }
  return low;
};
