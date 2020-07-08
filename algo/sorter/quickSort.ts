import { delay, completeAnimation, swap } from "./utility";

export function quickSort(
  input: {
    value: number;
    status: number;
  }[],
  speed: number,
  setState: (state) => void,
  high: number = input.length - 1,
  low: number = 0
) {
  (async () => {
    console.log("Input: ", input);
    if (low >= high) {
      await delay(100, () => {
        completeAnimation(input, setState);
        setState({ isSorting: false });
      });
      return input;
    }
    const pivot = input[Math.floor((high + low) / 2)]?.value;
    const pi = await partition(input, low, high, pivot, speed, setState);
    quickSort(input, speed, setState, pi - 1, low);
    quickSort(input, speed, setState, high, pi);
  })();
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
    console.log(pivot, low, high);
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
