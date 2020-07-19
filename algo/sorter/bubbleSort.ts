import { swap, SortUtilities, SortData } from "./utility";

export async function bubbleSort(
  arr: SortData[],
  utils: SortUtilities,
  counter: number = 0
) {
  for (let i = 0; i < arr.length; i++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]?.value > arr[i + 1]?.value) {
        await swap(arr, utils, i, i + 1);
        counter++;
      }
    }
  }
  return [arr, counter];
}