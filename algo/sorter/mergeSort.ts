import { delay, swap } from "./utility";

export async function mergeSort(
  arr: {
    value: number;
    status: number;
  }[],
  speed: number,
  setState: (state) => void,
  counter: number = 0
) {

  console.log(arr)
  return [arr, counter];
}

const merge = async () => {
  
}
