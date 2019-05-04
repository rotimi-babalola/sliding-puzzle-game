export const isSolved = numbers => {
  let sorted = true;
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
      sorted = false;
      break;
    }
  }
  return sorted;
};
