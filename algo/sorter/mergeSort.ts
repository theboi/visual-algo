import { swap, SortUtilities, SortData } from "./utility";

let counter: number;
export async function mergeSort(
  arr: SortData[],
  utils: SortUtilities,
  isStart: boolean = true,

  rightEnd: number = arr.length - 1,
  leftStart: number = 0,
  tempArr: SortData[] = []
) {
  if (leftStart >= rightEnd) return;
  counter = isStart ? 0 : counter;

  const mid = Math.floor((rightEnd + leftStart) / 2);
  mergeSort(arr, utils, false, mid, leftStart, tempArr);
  mergeSort(arr, utils, false, rightEnd, mid + 1, tempArr);
  // merge();

  return [arr, counter];
}

const merge = async (
  arr: {
    value: number;
    status: number;
  }[],
  speed: number,
  setState: (state) => void,
  tempArr: {
    value: number;
    status: number;
  }[] = []
) => {};
