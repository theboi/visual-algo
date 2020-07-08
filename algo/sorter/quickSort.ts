import { delay, completeAnimation, swap } from "./utility";

export async function quickSort(
  input: {
    value: number;
    status: number;
  }[],
  speed: number,
  setState: (state) => void,
  high: number = input.length - 1,
  low: number = 0
) {
  if (low >= high) {
    return;
  }
  const pivot = input[Math.floor((high + low) / 2)]?.value;
  const pi = await partition(input, low, high, pivot, speed, setState);
  await quickSort(input, speed, setState, pi - 1, low);
  await quickSort(input, speed, setState, high, pi);

  return input;
}

const partition = async (
  arr: {
    value: number;
    status: number;
  }[],
  low: number,
  high: number,
  pivot: number,
  speed: number,
  setState: (state) => void
) => {
  while (low <= high) {
    while (arr[low].value < pivot) {
      low++;
    }
    while (arr[high].value > pivot) {
      high--;
    }
    if (low <= high) {
      swap(arr, low, high);

      arr[low].status = 1;
      arr[high].status = 2;
      await delay(speed, () => setState({ current: arr }));
      arr[low].status = 0;
      arr[high].status = 0;

      low++;
      high--;
    }
  }
  return low;
};
