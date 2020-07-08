import { delay, completeAnimation, swap } from "./utility";

export async function bubbleSort(
  input: {
    value: number;
    status: number;
  }[],
  speed: number,
  setState: (state) => void
) {
  for (let i = 0; i < input.length; i++) {
    for (let i = 0; i < input.length; i++) {
      if (input[i]?.value > input[i + 1]?.value) {
        swap(input, i, i + 1);

        input[i + 1].status = 1;
        input[i].status = 2;
        await delay(speed, () => setState({ current: input }));
        input[i + 1].status = 0;
        input[i].status = 0;
      }
    }
  }
  return input;
}
