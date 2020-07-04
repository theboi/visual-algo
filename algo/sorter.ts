const speed = 100

export function bubbleSort(input: number[], updateState) {
  let output = input;
  (async () => {
    for (let i = 0; i < output.length; i++) {
      for (let i = 0; i < output.length; i++) {
        if (output[i] > output[i + 1]) {
          const temp = output[i];
          output[i] = output[i + 1];
          output[i + 1] = temp;

          await new Promise((res) => {
            setTimeout(() => {
              res();
              updateState(output)
              console.log("swop");
            }, speed);
          });
        }
      }
    }
    return output;
  })();
};

// export function quickSort(input: number[], updateState) {
//   let output = input;
//   (async () => {
    
//     return output;
//   })();
// };
