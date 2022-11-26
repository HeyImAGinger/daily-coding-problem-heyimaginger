export interface Props {
  numbers: number[];
  key: number;
}

// Readme Example
//console.log(CodingProblemDay1TS({ numbers: [10, 15, 3, 7], key: 17 }));

function CodingProblemDay1TS({ numbers, key }: Props): boolean {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === key) {
        return true;
      }
    }
  }
  return false;
}

function CodingProblemDay1TSv2({ numbers, key }: Props): boolean {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.splice(i, 1).includes(key - numbers[i])) {
      return true;
    }
  }
  return false;
}
