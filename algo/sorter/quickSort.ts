import { delay, swap } from "./utility";

let counter: number;
export async function quickSort(
  input: {
    value: number;
    status: number;
  }[],
  speed: number,
  setState: (state) => void,
  isStart: boolean = true,

  high: number = input.length - 1,
  low: number = 0,
) {
  if (low >= high) return;
  counter = isStart ? 0 : counter

  const pivot = input[Math.floor((high + low) / 2)]?.value;
  const pi = await partition(input, speed, setState, low, high, pivot);
  await quickSort(input, speed, setState, false, pi - 1, low);
  await quickSort(input, speed, setState, false, high, pi);

  return [input, counter];
}

const partition = async (
  arr: {
    value: number;
    status: number;
  }[],
  speed: number,
  setState: (state) => void,
  // counter: number,

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
      await swap(arr, low, high, speed, setState);
      counter++;

      low++;
      high--;
    }
  }
  return low;
};
