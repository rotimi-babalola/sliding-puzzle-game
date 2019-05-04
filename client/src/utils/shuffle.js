import { shuffle, without, isEqual } from 'lodash';
import { EMPTY_TILE, NUM_OF_COLS, NUM_OF_ROWS } from '../constants';

export const isSolved = numbers => {
  const sortedNumbers = [...numbers].sort();
  return isEqual(numbers, sortedNumbers);
};

const isSolvable = (numbers, rows = NUM_OF_ROWS, cols = NUM_OF_COLS) => {
  let product = 1;
  for (let i = 1, l = rows * cols - 1; i <= l; i++) {
    for (let j = i + 1, m = l + 1; j <= m; j++) {
      product *= (numbers[i - 1] - numbers[j - 1]) / (i - j);
    }
  }
  return Math.round(product) === 1;
};

export const shuffleNumbers = numbers => {
  console.log(isSolvable(numbers), '>>>');
  do {
    const shuffledNumbers = shuffle(without(numbers, EMPTY_TILE)).concat(
      EMPTY_TILE,
    );
    return shuffledNumbers;
  } while (isSolved(numbers) || !isSolvable(numbers));
};
