import { delay, completeAnimation, swap } from "./utility";

export function bubbleSort(
  input: {
    value: number;
    status: number;
  }[],
  speed: number,
  setState: (state) => void
) {
  (async () => {
    for (let i = 0; i < input.length; i++) {
      for (let i = 0; i < input.length; i++) {
        if (input[i]?.value > input[i + 1]?.value) {
          swap(input, i, i+1)

          input[i + 1].status = 1;
          input[i].status = 2;
          await delay(speed, () => setState({ current: input }));
          input[i + 1].status = 0;
          input[i].status = 0;
        }
      }
    }

    await delay(100, () => {
      completeAnimation(input, setState);
      setState({ isSorting: false });
    });
    return input;
  })();
}