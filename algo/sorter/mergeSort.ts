import { delay, swap } from "./utility";

let counter: number;
export async function mergeSort(
  input: {
    value: number;
    status: number;
  }[],
  speed: number,
  setState: (state) => void,
  
  isStart: boolean = true,

  high: number = input.length - 1,
  low: number = 0,
  tempArr: {
    value: number;
    status: number;
  }[] = [],
) {
  if (low >= high) return;
  counter = isStart ? 0 : counter;

  const mid = Math.floor((high - low) / 2);
  mergeSort(input, speed, setState, false, mid, low, tempArr);
  mergeSort(input, speed, setState, false, high, mid+1, tempArr);
  // merge();

  return [input, counter];
}

const merge = async (
  input: {
    value: number;
    status: number;
  }[],
  speed: number,
  setState: (state) => void,
  tempArr: {
    value: number;
    status: number;
  }[] = [],
) => {

}