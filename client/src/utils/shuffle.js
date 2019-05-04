import { shuffle, without } from 'lodash';
import { EMPTY_TILE, NUM_OF_COLS, NUM_OF_ROWS } from '../constants';
import { isSolved } from './isSolved';

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
  do {
    const shuffledNumbers = shuffle(without(numbers, EMPTY_TILE)).concat(
      EMPTY_TILE,
    );
    return shuffledNumbers;
  } while (isSolved(numbers) || !isSolvable(numbers));
};
