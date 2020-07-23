import { swap, SortUtilities, SortData, SortCounter } from "./utility";

export async function bubbleSort(
  arr: SortData[],
  utils: SortUtilities,
  counter: SortCounter = {
    swaps: 0,
    compares: 0,
  }
) {
  for (let i = 0; i < arr.length; i++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]?.value > arr[i + 1]?.value) {
        await swap(arr, utils, i, i + 1);
        counter.swaps++;
      }
      counter.compares++;
    }
  }
  return [arr, counter];
}
