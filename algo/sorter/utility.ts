export interface SortUtilities {
  speed: number;
  setState: (state) => void;
}

export interface SortData {
  value: number;
  status: number;
}

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

export const delay = (duration: number, callback?: Function) => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
      callback?.();
    }, duration);
  });
};

export const swap = async (
  arr: SortData[],
  utils: SortUtilities,

  index1: number,
  index2: number
) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  arr[index1].status = 1;
  arr[index2].status = 2;
  await delay(utils.speed, () => utils.setState({ current: arr }));
  arr[index1].status = 0;
  arr[index2].status = 0;
};

export const copyArray = async (
  utils: SortUtilities,
  srcArr: SortData[],
  srcStart: number,
  tarArr: SortData[],
  tarStart: number,
  size: number
) => {
  tarArr.splice(tarStart, size, ...srcArr.slice(srcStart, srcStart + size));
};
