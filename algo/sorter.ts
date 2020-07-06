const completeAnimation = (
  output: { value: number; status: number }[],
  setState: (state) => void
) => {
  output.forEach((value) => {
    value.status = 2;
  });
  setState({current: output});
  setTimeout(() => {
    output.forEach((value) => {
      value.status = 0;
    });
    setState({current: output});
  }, 700);

};



export function bubbleSort(
  input: {
    value: number;
    status: number;
  }[],
  speed: number,
  setState: (state) => void,
) {
  let output = input;
  (async () => {
    for (let i = 0; i < output.length; i++) {
      for (let i = 0; i < output.length; i++) {
        if (output[i]?.value > output[i + 1]?.value) {
          const temp = output[i]?.value;
          output[i].value = output[i + 1]?.value;
          output[i + 1].value = temp;

          output[i + 1].status = 1;
          output[i].status = 2;
          await new Promise((res) => {
            setTimeout(() => {
              res();
              setState({current: output});
            }, speed);
          });
          output[i + 1].status = 0;
          output[i].status = 0;
        }
      }
    }

    completeAnimation(output, setState);
    setState({isSorting: false})
    
    return output;
  })();
}

// export function quickSort(input: number[], updateState) {
//   let output = input;
//   (async () => {

//     return output;
//   })();
// };
