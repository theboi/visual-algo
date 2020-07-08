export const completeAnimation = (
  arr: { value: number; status: number }[],
  setState: (state) => void
) => {
  arr?.forEach((value) => {
    value.status = 2;
  });
  setState({ current: arr });
  setTimeout(() => {
    arr?.forEach((value) => {
      value.status = 0;
    });
    setState({ current: arr });
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