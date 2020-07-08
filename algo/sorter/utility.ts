export const completeAnimation = (
  output: { value: number; status: number }[],
  setState: (state) => void
) => {
  output.forEach((value) => {
    value.status = 2;
  });
  setState({ current: output });
  setTimeout(() => {
    output.forEach((value) => {
      value.status = 0;
    });
    setState({ current: output });
  }, 700);
};

export const delay = (duration: number, callback: Function) => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
      callback();
    }, duration);
  });
};

export const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}