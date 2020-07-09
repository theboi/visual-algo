import { delay, swap } from "./utility";

export async function bubbleSort(
  arr: {
    value: number;
    status: number;
  }[],
  speed: number,
  setState: (state) => void,
  counter: number = 0,
) {
  for (let i = 0; i < arr.length; i++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]?.value > arr[i + 1]?.value) {
        await swap(arr, i, i + 1, speed, setState);
        counter++
      }
    }
  }
  return [arr, counter];
}
