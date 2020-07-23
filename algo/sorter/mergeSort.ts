import { delay, copyArray, SortUtilities, SortData } from "./utility";

let counter: number;
export async function mergeSort(
  arr: SortData[],
  utils: SortUtilities,
  isStart: boolean = true,

  leftStart: number = 0,
  rightEnd: number = arr.length - 1,
  temp: SortData[] = new Array<SortData>(arr.length)
) {
  if (leftStart >= rightEnd) return;
  counter = isStart ? 0 : counter;

  const mid = Math.floor((rightEnd + leftStart) / 2);
  await mergeSort(arr, utils, false, leftStart, mid, temp);
  await mergeSort(arr, utils, false, mid + 1, rightEnd, temp);
  await mergeHalves(arr, utils, leftStart, rightEnd, temp);

  return [arr, counter];
}

const mergeHalves = async (
  arr: SortData[],
  utils: SortUtilities,
  leftStart: number,
  rightEnd: number,
  temp: SortData[]
) => {
  let leftEnd = Math.floor((leftStart + rightEnd) / 2);
  let rightStart = leftEnd + 1;
  const size = rightEnd - leftStart + 1;

  let left = leftStart;
  let right = rightStart;
  let index = leftStart;

  while (left <= leftEnd && right <= rightEnd) {
    if (arr[left].value <= arr[right].value) {
      temp[index] = arr[left];
      left++;
    } else {
      temp[index] = arr[right];
      right++;
    }
    index++;
  }

  await copyArray(utils, arr, left, temp, index, leftEnd - left + 1);
  await copyArray(utils, arr, right, temp, index, rightEnd - right + 1);
  await copyArray(utils, temp, leftStart, arr, leftStart, size);
  await delay(utils.speed, () => utils.setState({ current: arr }));

};
